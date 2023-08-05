import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = '512x512' } = body;

    if (!userId) new NextResponse('Unauthorized', { status: 401 });
    if (!configuration.apiKey)
      new NextResponse('OpenAI API Key not configured.', { status: 500 });
    if (!prompt) new NextResponse('Prompt is required', { status: 400 });
    if (!amount) new NextResponse('Amount is required', { status: 400 });
    if (!resolution)
      new NextResponse('Resolution is required', { status: 400 });

    const freeTrial = await checkApiLimit();

    if (!freeTrial)
      return new NextResponse('Free trial has expired', { status: 403 });

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    await incrementApiLimit();

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

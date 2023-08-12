'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Joel',
    avatar: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!",
  },
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Designer',
    description: 'I use this daily for generating new photos!',
  },
  {
    name: 'Mark',
    avatar: 'M',
    title: 'CEO',
    description:
      'This app has changed my life, cannot imagine working without it!',
  },
  {
    name: 'Mary',
    avatar: 'M',
    title: 'CFO',
    description:
      'The best in class, definitely worth the premium subscription!',
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-4xl font-extrabold text-center text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { LandingContent };

import { Settings } from 'lucide-react';

import { Heading } from '@/components/heading';
import { SubscriptionButton } from '@/components/subscription-button';
import { checkSubscription } from '@/lib/subscription';

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 space-y-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? 'You are currently on a Pro plan.'
            : 'You are currently on a free plan.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </>
  );
};

export default SettingsPage;

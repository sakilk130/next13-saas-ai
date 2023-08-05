import { FC, ReactNode } from 'react';

import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = async ({ children }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="pb-10 md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

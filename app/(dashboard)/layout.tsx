import { FC, ReactNode } from 'react';

import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main className="pb-10 md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#111827]">
      {children}
    </div>
  );
};

export default AuthLayout;

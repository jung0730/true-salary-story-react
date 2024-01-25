import DesktopNav from '@/components/nav/DesktopNav';
import { Suspense } from 'react';
import { NavigationEvents } from '@/components/NavigationEvents';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DesktopNav />
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </>
  );
}

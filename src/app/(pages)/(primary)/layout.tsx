import DesktopNav from '../../components/Nav/DesktopNav';
import { Suspense } from 'react';
import { NavigationEvents } from '../../components/NavigationEvents';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DesktopNav />
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
      <div>footer</div>
    </>
  );
}

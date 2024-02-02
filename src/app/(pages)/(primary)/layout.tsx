import DesktopNav from '@/components/Nav/DesktopNav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
}

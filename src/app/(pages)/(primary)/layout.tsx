import DesktopNav from '@/components/Navbar/DesktopNav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
}

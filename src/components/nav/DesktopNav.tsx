import Image from 'next/image';
import NavList from './NavList';
import Link from 'next/link';
const DesktopNav = () => {
  return (
    <nav
      className="fixed left-0 top-0 z-10 w-full bg-white/80 shadow-nav backdrop-blur-sm sm:p-3 md:px-10 lg:px-10"
      aria-label="平板電腦版選單"
    >
      <div className="container mx-auto flex max-w-[1800px] items-center justify-between">
        <Link href="/">
          <Image src="/LOGO-lg.png" alt="" width={150} height={150} />
        </Link>
        <div className="hidden flex-row items-center justify-center lg:flex">
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;

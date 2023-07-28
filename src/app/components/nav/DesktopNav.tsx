import NavList from './NavList';
const DesktopNav = () => {
  return (
    <nav className="z-10 fixed top-0 left-0 bg-white/80 w-full sm:py-3 sm:px-3 md:py-6 md:px-10 lg:py-6 lg:px-10 shadow-nav backdrop-blur-sm"
      aria-label="平板電腦版選單">
        <div className="container mx-auto max-w-[1800px] flex justify-between items-center">
          <div className="hidden lg:flex flex-row justify-center items-center">
            {/* TODO: Logo Img  */}
            <NavList />
          </div>
        </div>
    </nav>
  );
};

export default DesktopNav;
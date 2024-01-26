const BaseSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-gray pt-[130px] pb-10 md:py-20 max-[1920px]:overflow-x-hidden min-h-screen">
      <div className="mx-auto md:px-14 md:max-w-full lg:max-w-7xl mt-15 lg:mt-10">{children}</div>
    </section>
  );
};

export default BaseSection;

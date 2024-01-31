const BaseSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen bg-gray pb-10 pt-[130px] max-[1920px]:overflow-x-hidden md:py-20">
      <div className="mx-auto mt-15 md:max-w-full md:px-14 lg:mt-10 lg:max-w-7xl">{children}</div>
    </section>
  );
};

export default BaseSection;

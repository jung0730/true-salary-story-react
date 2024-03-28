import clsx from 'clsx';

type BaseLayoutProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

const BaseLayout = (props: BaseLayoutProps) => {
  const { children, title, className } = props;
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray max-[1920px]:overflow-x-hidden">
      <div
        className={clsx(
          'mx-auto flex flex-col items-center justify-center sm:min-w-[350px] md:min-w-[650px] lg:min-w-[950px]',
          className
        )}
      >
        <div className="flex w-full flex-col items-start justify-center">
          {title && (
            <div className="rounded-t bg-black-10 px-5 py-3 text-white">
              <h5>{title}</h5>
            </div>
          )}
          <div className="w-full rounded-b rounded-tr border-2 border-black-10 bg-white px-6 py-6 md:px-5 md:py-5 lg:px-8 lg:py-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseLayout;

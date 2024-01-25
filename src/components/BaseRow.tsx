import clsx from 'clsx';

type BaseRowProps = {
  children: React.ReactNode;
  className?: string;
};

const BaseRow = (props: BaseRowProps) => {
  const { children, className } = props;
  return <div className={clsx('w-full flex flex-col lg:flex-row justify-between gap-y-4', className)}>{children}</div>;
};

export default BaseRow;

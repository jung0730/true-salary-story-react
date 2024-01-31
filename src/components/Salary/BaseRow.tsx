import clsx from 'clsx';

type BaseRowProps = {
  children: React.ReactNode;
  className?: string;
};

const BaseRow = (props: BaseRowProps) => {
  const { children, className } = props;
  return <div className={clsx('flex w-full flex-col justify-between gap-y-4 lg:flex-row', className)}>{children}</div>;
};

export default BaseRow;

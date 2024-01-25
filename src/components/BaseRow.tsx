import clsx from 'clsx';

const BaseRow = (props) => {
  const { children, className, ...rest } = props;
  return <div className={clsx('w-full flex flex-col lg:flex-row justify-between gap-y-4', className)}>{children}</div>;
};

export default BaseRow;

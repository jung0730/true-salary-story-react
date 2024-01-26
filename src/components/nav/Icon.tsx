import clsx from 'clsx';

type IconProps = {
  iconName: string;
};

const Icon = (props: IconProps) => {
  const { iconName } = props;
  return <span className={clsx('text-lg me-2', iconName)}></span>;
};

export default Icon;

import clsx from 'clsx';

type IconProps = {
  iconName: string;
};

const Icon = (props: IconProps) => {
  const { iconName } = props;
  return <span className={clsx('me-2 text-lg', iconName)}></span>;
};

export default Icon;

import clsx from 'clsx';
import { colors } from './constants';
import Icon from '@/components/Icon';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  onClick: () => void;
  icon?: string;
};

const Button = (props: ButtonProps) => {
  const { children, className, color, onClick, icon, ...rest } = props;
  const classes = colors[color ?? 'primary'];
  return (
    <>
      <button
        className={clsx('flex items-center transition duration-300 ease-in-out', className, classes)}
        onClick={onClick}
        {...rest}
      >
        {icon && <Icon icon={icon} iconClasses="mr-2" />}
        {children}
      </button>
    </>
  );
};

export default Button;

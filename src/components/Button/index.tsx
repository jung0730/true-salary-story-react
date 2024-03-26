import clsx from 'clsx';
import { colors } from './constants';
import Icon from '@/components/Icon';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  onClick: () => void;
  icon?: string;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children, className, color, onClick, icon, disabled = false, ...rest } = props;
  const classes = colors[color ?? 'primary'];
  return (
    <>
      <button
        className={clsx('flex items-center transition duration-300 ease-in-out', className, classes, {
          'disabled:opacity-25': disabled,
        })}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {icon && <Icon icon={icon} iconClasses="mr-2" />}
        {children}
      </button>
    </>
  );
};

export default Button;

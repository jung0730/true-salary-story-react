import clsx from 'clsx';
import { colors } from './constants';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, className, color, onClick, ...rest } = props;
  const classes = colors[color ?? 'primary'];
  return (
    <button className={clsx('transition duration-300 ease-in-out', className, classes)} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

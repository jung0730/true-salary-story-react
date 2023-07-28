import clsx from 'clsx';
import { colors } from './constants';
// import Icon from '../Nav/Icon'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  color?: keyof typeof colors;
  onClick: () => {};
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    children, className, icon, color, onClick, ...rest
  } = props;
  const classes = colors[color ?? 'primary'];
    return (
      <button
        className={clsx(
          'duration-300 ease-in-out rounded py-3 px-5 transition',
          className,
          classes
        )}
        onClick={onClick}
        {...rest}>
        {/* {icon && <Icon iconName={icon} />} */}
        {children}
      </button>
  )
}

export default Button;
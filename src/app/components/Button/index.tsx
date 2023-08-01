import clsx from 'clsx';
import { colors } from './constants';
// import Icon from '../Nav/Icon'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: string;
  color?: keyof typeof colors;
  isRounded?: boolean;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const {
    children, className, icon, color, onClick, isRounded, ...rest
  } = props;
  const classes = colors[color ?? 'primary'];
    return (
      <button
        className={clsx(
          'duration-300 ease-in-out py-3 px-5 transition',
          className,
          classes,
          isRounded && 'rounded'
        )}
        onClick={onClick}
        {...rest}>
        {/* {icon && <Icon iconName={icon} />} */}
        {children}
      </button>
  )
}

export default Button;
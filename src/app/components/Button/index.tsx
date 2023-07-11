import clsx from 'clsx';
import { colors } from './constants';

const Button = (props) => {
  const {
    children, className, outline, icon, color, ...rest
  } = props;
  const classes = colors[color ?? 'primary'];
    return (
      <button
        className={clsx(
          'duration-300 ease-in-out rounded py-3 px-5 transition',
          className,
          classes
        )}
        {...rest}
      >
        {children}
      </button>
  )
}

export default Button;
import clsx from 'clsx';
// import Icon from '../Nav/Icon'

type InputProps = {
  isDisabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
};

const Input = (props: InputProps) => {
  const { placeholder, className, isDisabled, onChange, value } = props;
  return (
    <input
      type="text"
      value={value}
      disabled={isDisabled}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={clsx('w-full py-3 pe-5 ps-10', className)}
    />
  );
};

export default Input;

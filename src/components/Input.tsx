import clsx from 'clsx';
import Icon from '@/components/Icon';

type InputProps = {
  isDisabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
  icon?: string;
};

const Input = (props: InputProps) => {
  const { placeholder, className, isDisabled, onChange, value, icon } = props;
  return (
    <div className="flex items-center">
      {icon && <Icon icon={icon} iconClasses="ml-4" />}
      <input
        type="text"
        value={value}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={clsx('w-full px-4 py-3', className)}
      />
    </div>
  );
};

export default Input;

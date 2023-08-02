// import clsx from 'clsx';
import Input from '../Input'

type InputProps = {
  isDisabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
  label: string
};

// label, required, error...
const FormInput = (props: InputProps) => {
  const {
    label, ...rest
  } = props;
  return (
    <>
      <label className="text-black-10">{label}</label>
      <Input {...rest} />
    </>
  )
}

export default FormInput;
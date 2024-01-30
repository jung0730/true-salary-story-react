import { forwardRef, ForwardedRef } from 'react';

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  onKeyUp?: (value: string) => void;
};

const FormInput = forwardRef((props: FormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, placeholder, error, onKeyUp, ...rest } = props;
  return (
    <div className="mb-10">
      <label className="text-black-10">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        {...rest}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyUp && onKeyUp((e.target as HTMLInputElement).value)}
        className="w-full border border-black-1 rounded py-2 px-4 mt-2"
      />
      <p className="min-h-[24px] text-red">{error}</p>
    </div>
  );
});

export default FormInput;

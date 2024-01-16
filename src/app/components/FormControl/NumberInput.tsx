import { forwardRef, ForwardedRef } from 'react';

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
};


const NumberInput = forwardRef((props: FormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, placeholder, error, defaultValue, ...rest } = props;
  return (
    <>
      <input type="text"
             placeholder={placeholder}
             defaultValue={defaultValue}
             inputMode="numeric"
             pattern="\d*" 
             ref={ref}
             {...rest}
             className='w-full border border-black-1 rounded py-2 pl-4 pr-9' />
      <p className="min-h-[24px]">{ error }</p>
    </>
  );
});

export default NumberInput;
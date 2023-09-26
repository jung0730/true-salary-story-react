import { forwardRef, ForwardedRef } from 'react';

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  sublabel: string;
};

const FormTextarea = forwardRef((props: FormInputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const { label, placeholder, sublabel, error, ...rest } = props;
  return (
    <div className="mb-10">
      <label className="text-black-10">{label}</label>
      <br></br>
      <span className="text-sm text-black-6">
        { sublabel}
      </span>
      <textarea
             placeholder={placeholder}
             ref={ref}
             {...rest}
             className='w-full border border-black-1 rounded py-2 px-4 mt-2' />
      <p className="min-h-[24px]">{ error}</p>
    </div>
  )
})

export default FormTextarea;
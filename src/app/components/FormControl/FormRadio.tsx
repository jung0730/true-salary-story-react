import clsx from 'clsx';
import { forwardRef, ForwardedRef } from 'react';

type FormRadioProps = {
  options: [];
  value?: string;
  title: string;
  error?: string;
};

const FormRadio = forwardRef((props: FormRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    title, options, error, ...rest
  } = props;

  const optionsList = options.map((item) =>
    <label key={item.text} className="w-full md:w-auto flex md:flex-1 releative cursor-pointer items-center justify-start md:mb-0 mb-5 last:mb-0">
    <input type="radio"
           {...rest}
           ref={ref}
           value={item.value}
           className={clsx(
            'appearance-none w-[20px] h-[20px] relative after:content-[""] after:absolute after:top-1/2 after:translate-y-[-50%] after:right-0 after:w-[15px] after:h-[15px] after:border after:border-black-6 after:border-solid after:rounded-full checked:after:border-[6px] checked:after:border-blue'
          )} />
      <span className="ml-2">{item.text}</span>
    </label>
  )
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="md:flex items-center justify-between">
        {optionsList}
      </div>
      <p className="min-h-[24px]">{ error }</p>
    </div>
  )
})

export default FormRadio;
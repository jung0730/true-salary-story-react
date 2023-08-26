import clsx from 'clsx';
import { Changa_One } from 'next/font/google';
import { forwardRef, ForwardedRef } from 'react';

type FormRadioProps = {
  options: [];
  value?: string;
  title: string,
  // onChange: (value: string) => void
};

// label, required, error...
const FormRadio = forwardRef((props: FormRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    title, options, onChange, error, ...rest
  } = props;

  const test = (e) => {
    console.log(e.target.value)
    onChange()
  }
  const optionsList = options.map((item, index) =>
    <label key={item.text} htmlFor={item.value} className="flex-1 releative cursor-pointer items-center inline-flex justify-start">
      <input type="radio"
            {...rest}
            ref={ref}
            value={item.value}
            id={item.value}
            onChange={onChange}
            className={clsx(
              'h-0 left-0 opacity-0 pointer-events-none absolute top-0 invisible width-0 appearance-none',
            { ...rest}
            )} />
        <span className={clsx(
          'bg-gray-light text-black-5 releative items-center flex justify-center py-3 w-full border border-dark',
          {'rounded-r': Number(index) === options.length - 1},
          {'rounded-l': Number(index) === 0},
          )}>{item.text}</span>
    </label>
  )
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="flex items-center justify-center">
        {optionsList}
      </div>
      <p className="min-h-[24px]">{ error}</p>
    </div>
  )
})

export default FormRadio;
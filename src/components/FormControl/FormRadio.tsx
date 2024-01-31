import clsx from 'clsx';
import { forwardRef, ForwardedRef } from 'react';

type FormRadioProps = {
  options: {
    text: string;
    value: string | number;
  }[];
  value?: string;
  title: string;
  error?: string;
};

const FormRadio = forwardRef((props: FormRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { title, options, error, ...rest } = props;

  const optionsList = options.map((item) => (
    <label
      key={item.text}
      className="mb-5 flex w-full cursor-pointer items-center justify-start last:mb-0 md:mb-0 md:w-auto md:flex-1"
    >
      <input
        type="radio"
        {...rest}
        ref={ref}
        value={item.value}
        className={clsx(
          "w-[20px] h-[20px] after:w-[15px] after:h-[15px] relative appearance-none after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:rounded-full after:border after:border-solid after:border-black-6 after:content-[''] checked:after:border-[6px] checked:after:border-blue"
        )}
      />
      <span className="ml-2">{item.text}</span>
    </label>
  ));
  return (
    <div className="mb-10">
      <div className="mb-2 text-black-10">{title}</div>
      <div className="items-center justify-between md:flex">{optionsList}</div>
      <p className="min-h-[24px] text-red">{error}</p>
    </div>
  );
});

export default FormRadio;

import clsx from 'clsx';
import { forwardRef, ForwardedRef } from 'react';
import { useState } from 'react';

type FormRadioButtonStyleProps = {
  options: [];
  title: string;
  onChange: () => void;
  defaultValue: string;
  error?: string;
};

// label, required, error...
const FormRadioButtonStyle = forwardRef((props: FormRadioButtonStyleProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { title, options, onChange, error, defaultValue, ...rest } = props;
  const [select, setSelect] = useState(defaultValue);
  const handleChange = (e) => {
    setSelect(e.target.value);
    onChange(e);
  };
  const optionsList = options.map((item, index) => (
    <label
      key={item.text}
      htmlFor={item.value}
      className="flex-1 releative cursor-pointer items-center inline-flex justify-start"
    >
      <input
        type="radio"
        {...rest}
        ref={ref}
        value={item.value}
        id={item.value}
        onChange={handleChange}
        className={clsx('h-0 left-0 opacity-0 pointer-events-none absolute top-0 invisible width-0 appearance-none')}
      />
      <span
        className={clsx(
          'text-black-5 releative items-center flex justify-center py-3 w-full border border-dark',
          { 'rounded-r': Number(index) === options.length - 1 },
          { 'rounded-l': Number(index) === 0 },
          item.value === select ? 'shadow-input bg-white text-blue border-blue-light' : 'bg-gray-light'
        )}
      >
        {item.text}
      </span>
    </label>
  ));
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="flex items-center justify-center">{optionsList}</div>
      <p className="min-h-[24px]">{error}</p>
    </div>
  );
});

export default FormRadioButtonStyle;

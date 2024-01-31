import clsx from 'clsx';
import React, { forwardRef, ForwardedRef } from 'react';
import { useState } from 'react';

type FormRadioButtonStyleProps = {
  options: {
    text: string;
    value: string;
  }[];
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  error?: string;
};

const FormRadioButtonStyle = forwardRef((props: FormRadioButtonStyleProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { title, options, onChange, error, defaultValue, ...rest } = props;
  const [select, setSelect] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
    onChange(e);
  };
  const optionsList = options.map((item, index) => (
    <label
      key={item.text}
      htmlFor={item.value}
      className="inline-flex flex-1 cursor-pointer items-center justify-start"
    >
      <input
        type="radio"
        {...rest}
        ref={ref}
        value={item.value}
        id={item.value}
        onChange={handleChange}
        className={clsx('pointer-events-none invisible absolute left-0 top-0 h-0 appearance-none opacity-0')}
      />
      <span
        className={clsx(
          'flex w-full items-center justify-center border border-dark py-3 text-black-5',
          { 'rounded-r': Number(index) === options.length - 1 },
          { 'rounded-l': Number(index) === 0 },
          item.value === select ? 'border-blue-light bg-white text-blue shadow-input' : 'bg-gray-light'
        )}
      >
        {item.text}
      </span>
    </label>
  ));
  return (
    <div className="mb-10">
      <div className="mb-2 text-black-10">{title}</div>
      <div className="flex items-center justify-center">{optionsList}</div>
      <p className="min-h-[24px] text-red">{error}</p>
    </div>
  );
});

export default FormRadioButtonStyle;

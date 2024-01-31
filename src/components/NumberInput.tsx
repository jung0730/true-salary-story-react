import { forwardRef, ForwardedRef } from 'react';

type NumberInputProps = {
  placeholder?: string;
  error?: string;
  defaultValue?: string;
};

const NumberInput = forwardRef((props: NumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { placeholder, error, defaultValue, ...rest } = props;
  const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const isDigit = /^\d$/.test(evt.key);
    if (!isDigit) {
      evt.preventDefault();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onKeyPress={handleKeyPress}
        ref={ref}
        {...rest}
        className="w-full rounded border border-black-1 py-2 pl-4 pr-9"
      />
      <p className="min-h-[24px] text-red">{error}</p>
    </>
  );
});

export default NumberInput;

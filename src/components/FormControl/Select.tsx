import { forwardRef, ForwardedRef } from 'react';

type SelectProps = {
  options: [];
  onChange: () => void;
  error?: string;
  name: string;
};

const Select = forwardRef((props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { options, error, onChange, name, ...rest } = props;
  const optionsList = options.map((item) => (
    <option key={item.text} value={item.value} {...rest}>
      {item.text}
    </option>
  ));
  return (
    <>
      <select
        ref={ref}
        name={name}
        onChange={onChange}
        className="w-full border border-black-1 rounded py-2 pl-4 pr-9 h-[42px]"
      >
        <option value="">請選擇</option>
        {optionsList}
      </select>
      <p className="min-h-[24px]">{error}</p>
    </>
  );
});

export default Select;

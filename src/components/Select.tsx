import { forwardRef, ForwardedRef } from 'react';

type SelectProps = {
  options: {
    text: string;
    value: string | number;
  }[];
  onChange?: () => void;
  error?: string;
};

const Select = forwardRef((props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { options, error, onChange, ...rest } = props;
  const optionsList = options.map((item) => (
    <option key={item.text} value={item.value} {...rest}>
      {item.text}
    </option>
  ));
  return (
    <>
      <select ref={ref} onChange={onChange} className="w-full border border-black-1 rounded py-2 pl-4 pr-9 h-[42px]">
        <option value="">請選擇</option>
        {optionsList}
      </select>
      <p className="min-h-[24px]">{error}</p>
    </>
  );
});

export default Select;
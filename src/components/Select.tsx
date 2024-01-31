import { forwardRef, ForwardedRef } from 'react';

type SelectProps = {
  options: {
    text: string;
    value: string | number;
  }[];
  title: string;
  error?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
        className="h-[42px] w-full rounded border border-black-1 py-2 pl-4 pr-9"
      >
        <option value="">請選擇</option>
        {optionsList}
      </select>
      <p className="min-h-[24px] text-red">{error}</p>
    </>
  );
});

export default Select;

import { forwardRef, ForwardedRef } from 'react';

type FormSelectProps = {
  options: {
    text: string;
    value: string | number;
  }[];
  title: string;
  error?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FormSelect = forwardRef((props: FormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { options, error, onChange, name, title, ...rest } = props;
  const optionsList = options.map((item) => (
    <option key={item.text} value={item.value} {...rest}>
      {item.text}
    </option>
  ));
  return (
    <div className="mb-10">
      <div className="mb-2 text-black-10">{title}</div>
      <div className="items-center justify-between md:flex">
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
      </div>
    </div>
  );
});

export default FormSelect;

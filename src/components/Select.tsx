type SelectProps = {
  options: {
    text: string;
    value: string | number;
  }[];
  error?: string;
  name: string;
  onChange: (value: string) => void;
};

const Select = (props: SelectProps) => {
  const { options, onChange, name, ...rest } = props;
  const optionsList = options.map((item) => (
    <option key={item.text} value={item.value} {...rest}>
      {item.text}
    </option>
  ));
  return (
    <>
      <select
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className="h-[42px] w-full rounded border border-black-1 py-2 pl-4 pr-9"
      >
        <option value="">請選擇</option>
        {optionsList}
      </select>
    </>
  );
};
export default Select;

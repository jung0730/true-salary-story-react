// import clsx from 'clsx';
import Radio from '../Radio'

type FormRadioProps = {
  // isDisabled?: boolean;
  onChange: (value: string) => void;
  // className?: string;
  // placeholder?: string;
  options: [];
  value?: string;
  title: string
};

// label, required, error...
const FormRadio = (props: FormRadioProps) => {
  const {
    title, options, ...rest
  } = props;

  const optionsList = options.map((item) =>
    <div key={item.label} className="w-full md:w-auto block md:flex-1 releative cursor-pointer items-center justify-start md:mb-0 mb-5 last:mb-0">
      <Radio value={item.value} {...rest} />
      <label className="ml-2">{item.label}</label>
    </div>
  )
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="md:flex items-center justify-between">
        {optionsList}
      </div>
    </div>
  )
}

export default FormRadio;
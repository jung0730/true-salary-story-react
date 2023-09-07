import clsx from 'clsx';
import { forwardRef, ForwardedRef } from 'react';

type FormSelectProps = {
  options: [];
  value?: string;
  title: string;
  error?: string;
};

// label, required, error...
const FormSelect = forwardRef((props: FormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {
    title, options, error, ...rest
  } = props;

  const optionsList = options.map((item) =>
    <option key={item.text}
            {...rest}
            value={item.value}
            className={clsx(
            '',
            { ...rest} )}>
      {item.text}
    </option>
  )
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="md:flex items-center justify-between">
        <select ref={ref} className="w-full border border-black-1 rounded py-2 pl-4 pr-9">
          <option value="">請選擇</option>
          {optionsList}
        </select>
      </div>
      <p className="min-h-[24px]">{ error}</p>
    </div>
  )
})

export default FormSelect;
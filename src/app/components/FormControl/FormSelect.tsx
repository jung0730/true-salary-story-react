import { forwardRef, ForwardedRef } from 'react';
import Select from './Select';

type FormSelectProps = {
  options: [];
  title: string,
  onChange: () => void;
  error?: string
  name: string;
};

const FormSelect = forwardRef((props: FormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { title } = props;

  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="md:flex items-center justify-between">
        <Select {...props} ref={ref} />
      </div>
    </div>
  )
})

export default FormSelect;
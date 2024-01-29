import { forwardRef, ForwardedRef } from 'react';
import Select from '../Select';

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
  const { title } = props;
  return (
    <div className="mb-10">
      <div className="text-black-10 mb-2">{title}</div>
      <div className="md:flex items-center justify-between">
        <Select {...props} ref={ref} />
      </div>
    </div>
  );
});

export default FormSelect;

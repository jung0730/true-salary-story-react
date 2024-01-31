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
      <div className="mb-2 text-black-10">{title}</div>
      <div className="items-center justify-between md:flex">
        <Select {...props} ref={ref} />
      </div>
    </div>
  );
});

export default FormSelect;

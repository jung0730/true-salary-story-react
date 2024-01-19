import { forwardRef, ForwardedRef } from 'react';
import NumberInput from './NumberInput';

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
};

const FormNumberInput = forwardRef((props: FormInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, placeholder, error, ...rest } = props;
  return (
    <div className="flex mt-3">
      <div className="w-full">
        <NumberInput {...props} ref={ref} />
      </div>
    </div>
  );
});

export default FormNumberInput;

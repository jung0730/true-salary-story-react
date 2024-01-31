import { forwardRef, ForwardedRef } from 'react';
import NumberInput from '../NumberInput';

type FormNumberInputProps = {
  placeholder?: string;
  error?: string;
  defaultValue?: string;
};

const FormNumberInput = forwardRef((props: FormNumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="mt-3 flex">
      <div className="w-full">
        <NumberInput {...props} ref={ref} />
      </div>
    </div>
  );
});

export default FormNumberInput;

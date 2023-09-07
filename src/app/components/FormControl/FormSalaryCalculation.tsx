import clsx from 'clsx';
import { forwardRef, ForwardedRef } from 'react';

type FormSalaryCalculationProps = {
  value?: string;
  title: string;
  error?: string;
};

// label, required, error...
const FormSalaryCalculation = forwardRef((props: FormSalaryCalculationProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {
    title, error, ...rest
  } = props;
  return (
    <div className="mb-10">
    </div>
  )
})

export default FormSalaryCalculation;
'use client';

import FormStep1 from '@/components/FormControl/FormStep1';
import FormStep2 from '@/components/FormControl/FormStep2';
import useFormStore from '@/stores/form';
import { useEffect } from 'react';

export default function Form() {
  const { step, setStep } = useFormStore();
  useEffect(() => {
    setStep(1);
  }, []);
  return (
    <>
      {(() => {
        switch (step) {
          case 1:
            return <FormStep1 />;
          case 2:
            return <FormStep2 />;
          default:
            return null;
        }
      })()}
    </>
  );
}

'use client';

import FormStep1 from '../../../components/FormControl/FormStep1';
import FormStep2 from '../../../components/FormControl/FormStep2';
import BaseSection from '@/app/components/BaseSection';
import useFormStore from '@/app/stores/form';
import { useGlobalAuth } from '../../../hooks/useGlobalAuth';
import { useEffect } from 'react';

export default function Page() {
  const { step, formData } = useFormStore();
  const { redirectToLogin } = useGlobalAuth();
  useEffect(() => {
    redirectToLogin();
  });
  return (
    <BaseSection>
      <h2 className="text-3xl mb-5 md:px-0 px-5">匿名分享</h2>
      <div className="block lg:flex">
        <div className="w-full md:border-2 md:border-black-10 md:mt-10 lg:mt-0 md:rounded-bl md:rounded-br lg:w-full">
          <div className="w-100 p-6 bg-black-10 text-white">
            <h4 className="fs-xl">Rebecca，讓我們開始這趟奇妙旅程吧！</h4>
            <p className="opacity-70 mt-2">在真薪話站上提供的資訊完全不會揭露你的任何個資，請安心分享。</p>
            <h4>成功分享，</h4>
          </div>
          {step === 1 ? <FormStep1 /> : <FormStep2 />}
        </div>
      </div>
    </BaseSection>
  );
}

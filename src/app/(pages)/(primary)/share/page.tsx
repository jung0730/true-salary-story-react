import BaseSection from '@/components/Salary/BaseSection';
import Form from '@/components/FormControl/Form';

export default function Page() {
  return (
    <BaseSection>
      <h2 className="mb-5 px-5 text-3xl md:px-0">匿名分享</h2>
      <div className="block lg:flex">
        <div className="w-full md:mt-10 md:rounded-b md:border-2 md:border-black-10 lg:mt-0 lg:w-full">
          <div className="bg-black-10 p-6 text-white">
            <h4>Rebecca，讓我們開始這趟奇妙旅程吧！</h4>
            <p className="mt-2 opacity-70">在真薪話站上提供的資訊完全不會揭露你的任何個資，請安心分享。</p>
          </div>
          <Form />
        </div>
      </div>
    </BaseSection>
  );
}

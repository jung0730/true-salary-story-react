'use client';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import useFormStore from '@/stores/form';

const SuccessfulPost = () => {
  const { result } = useFormStore();
  return (
    <div className="flex">
      <div className="mr-3 self-center">
        <AiOutlineCheckCircle className="h-[36px] w-[36px] text-blue-dark" />
      </div>
      <div>
        <h5 className="text-xl">
          成功分享薪水情報:
          <span className="text-blue">
            {result?.companyName}
            {result?.title ? `-${result.title}` : ''}
          </span>
        </h5>
        <span className="text-sm text-black-6">
          為維護內容品質,薪水情報會在通過專人審核後上架。未經審核前,薪水情報的內容只有自己看得到。
        </span>
      </div>
    </div>
  );
};

export default SuccessfulPost;

'use client';
import useFormStore from '@/stores/form';
import BaseSection from '@/components/Salary/BaseSection';
import SubmittedSVG from '@/components/Image/SubmittedSVG';

const Page = () => {
  const { result } = useFormStore();
  return (
    <BaseSection>
      <h2 className="text-3xl mb-5 md:px-0 px-5">匿名分享</h2>
      <div className="block">
        <div className="w-full md:border-2 md:border-black-10 md:mt-10 lg:mt-0 md:rounded-bl md:rounded-br lg:w-full">
          <div className="w-100 p-6 bg-black-10 text-white">
            <h4>成功分享，獲得200</h4>
          </div>
          <div className="px-3 py-6 md:p-6 bg-white">
            <div className="flex">
              <div className="self-center mr-3">
                <i className="icomoon icon-sparkle-checked text-5xl text-blue"></i>
              </div>
              <div>
                <h5 className="text-xl">
                  成功分享薪水情報:
                  <span className="text-blue">
                    {result?.companyName}
                    {result?.title ? `-${result.title}` : ''}
                  </span>
                </h5>
                <span className="text-black-6 text-sm">
                  為維護內容品質,薪水情報會在通過專人審核後上架。未經審核前,薪水情報的內容只有自己看得到。
                </span>
              </div>
            </div>
            <div className="flex mt-7">
              <div className="self-center mr-3">
                <i className="icomoon icon-coin text-5xl text-blue"></i>
              </div>
              <div className="self-center">
                <h5 className="text-xl">取得積分</h5>
              </div>
            </div>
            <div className="md:flex mt-5">
              <div className="w-full mr-6 border border-black-3 rounded p-6 flex flex-col bg-white min-h-[240px]">
                <div className="flex mb-4">
                  <div className="mr-5">
                    <h5 className="text-xl">加薪計畫</h5>
                    <span className="text-black-6 mt-3">前後 1 年間薪水任你看,無廣告閱讀體驗, 再贈送 2000 積分!</span>
                  </div>
                  <div className="self-center ml-auto">
                    <i className="icomoon icon-star-circle text-5xl text-blue"></i>
                  </div>
                </div>
                {/* <div className="flex mt-auto">
          <BaseButton cate="primary" className="w-full mr-4" to="/order/checkout?type=subscription"
            >NT$ 699</BaseButton
          >
          <BaseButton cate="white" className="w-full" to="/order/offer">了解更多</BaseButton>
        </div> */}
              </div>
              <div className="w-full md:mt-0 mt-5 border border-black-3 rounded p-6 flex flex-col bg-white min-h-[240px]">
                <div className="flex mb-4">
                  <div className="mr-5">
                    <h5 className="text-xl">100積分</h5>
                    <p className="text-black-6 mt-3">
                      100 積分可觀看 1 則薪水情報
                      <br />
                      300 積分可解鎖 1 個聊天室
                    </p>
                  </div>
                  <div className="self-center ml-auto">
                    <i className="icomoon icon-star text-5xl text-blue"></i>
                  </div>
                </div>
                {/* <BaseButton cate="white" className="w-full mt-auto" to="/order/checkout?type=single&point=1000"
          >NT$ 150</BaseButton
        > */}
              </div>
            </div>
            {/* <div className="md:flex space-x-4 mt-7 border border-black-10 rounded p-6 bg-white">
        <div className="self-center md:w-3/6 w-full">
          <p className="mb-5 text-xl">想知道加薪的秘訣是什麼嗎?好薪的前輩親自告訴你!</p>
          <p className="mb-9 text-xl">取得產業前輩專業意見，快速擴展職場人脈!</p>
        </div>
        <div className="md:w-3/6 w-full">
          <SubmittedSVG />
        </div>
      </div> */}
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default Page;

import BaseSection from '@/components/Salary/BaseSection';
import BaseLink from '@/components/BaseLink';
import SubmittedSVG from '@/components/Image/SubmittedSVG';
import SuccessfulPost from '@/components/Salary/SuccessfulPost';

const Page = () => {
  return (
    <BaseSection>
      <h2 className="mb-5 px-5 text-3xl md:px-0">匿名分享</h2>
      <div className="block">
        <div className="w-full md:mt-10 md:rounded-b md:border-2 md:border-black-10 lg:mt-0 lg:w-full">
          <div className="bg-black-10 p-6 text-white">
            <h4>成功分享，獲得200!</h4>
          </div>
          <div className="bg-white px-3 py-6 md:p-6">
            <SuccessfulPost />
            <div className="mt-7 flex">
              <div className="self-center">
                <h5 className="text-xl">取得積分</h5>
              </div>
            </div>
            <div className="mt-5 md:flex">
              <div className="mr-6 flex min-h-[240px] w-full flex-col rounded border border-black-3 bg-white p-6">
                <div className="mb-4 flex">
                  <div className="mr-5">
                    <h5 className="text-xl">加薪計畫</h5>
                    <span className="mt-3 text-black-6">前後 1 年間薪水任你看,無廣告閱讀體驗, 再贈送 2000 積分!</span>
                  </div>
                </div>
                <div className="mt-auto flex">
                  <BaseLink className="mr-4 w-full" href="">
                    NT 699
                  </BaseLink>
                  <BaseLink color="white" className="w-full" href="">
                    了解更多
                  </BaseLink>
                </div>
              </div>
              <div className="mt-5 flex min-h-[240px] w-full flex-col rounded border border-black-3 bg-white p-6 md:mt-0">
                <div className="mb-4 flex">
                  <div className="mr-5">
                    <h5 className="text-xl">100積分</h5>
                    <p className="mt-3 text-black-6">
                      100 積分可觀看 1 則薪水情報
                      <br />
                      300 積分可解鎖 1 個聊天室
                    </p>
                  </div>
                </div>
                <BaseLink color="white" className="mt-auto w-full" href="">
                  NT$ 150
                </BaseLink>
              </div>
            </div>
            <div className="mt-7 space-x-4 rounded border border-black-10 bg-white p-6 md:flex">
              <div className="w-full self-center md:w-3/6">
                <p className="mb-5 text-xl">想知道加薪的秘訣是什麼嗎?好薪的前輩親自告訴你!</p>
                <p className="mb-9 text-xl">取得產業前輩專業意見，快速擴展職場人脈!</p>
              </div>
              <div className="w-full md:w-3/6">
                <SubmittedSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};

export default Page;

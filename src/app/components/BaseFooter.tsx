import Link from "next/link"
const BaseFooter = () => {
  return (
    <footer className="bg-white sm:py-10 sm:px-3 sm:mb-20 md:mb-0 lg:py-20 max-[1920px]:overflow-x-hidden">
      <div
        className="container mx-auto sm:max-w-[350px] md:max-w-[600px] lg:max-w-7xl flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-wrap mb-5">
          <div className="w-full md:w-4/12 mb-10">
            <div className="w-[150px] lg:w-full">
              <img src="../assets/img/LOGO-lg.png" alt="LOGO" />
            </div>
          </div>
          <div className="w-1/2 md:w-2/12 mb-10">
            <div className="flex flex-col">
              <div className="caption mb-3">服務</div>
              <Link
                href="/order/offer"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                加薪計畫
              </Link>
            </div>
          </div>
          <div className="w-1/2 md:w-2/12 mb-10">
            <div className="flex flex-col">
              <div className="caption mb-3">支援</div>
              <a
                href="https://salary.tw/terms"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                服務條款
              </a>
              <a
                href="https://salary.tw/privacy-policy"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                隱私權政策
              </a>
              <a
                href="https://salary.tw/help-center"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                幫助中心
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-2/12">
            <div className="flex flex-col">
              <div className="caption mb-3">友站連結</div>
              <a
                href="https://interview.tw/"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                面試趣
              </a>
              <a
                href="https://task.tw/"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                小任務
              </a>
              <a
                href="https://ibook.tw/combine-book/salary"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                ibook 知識健身房
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-2/12">
            <div className="flex flex-col">
              <div className="caption mb-3">社群媒體</div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                Facebook
              </a>
              <a
                href="https://medium.com/"
                target="_blank"
                className="caption text-black-6 hover:text-black-10 transition duration-150 ease-in-out mb-3"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <p className="caption text-black-6">Copyright © 2023 北方貓科技有限公司 版權所有</p>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
'use client';

import Button from '../Button';
import { useRouter } from 'next/navigation';

const SelectSubscription = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/checkout?type=subscription');
  };
  return (
    <div className="mb-5 me-3 flex w-full flex-col rounded border border-black-1 px-6 py-5 lg:w-1/3">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="mb-3 text-blue">加薪計畫</h4>
          <h6 className="text-black-10">$ 699 元/每次</h6>
        </div>
        <div className="icon-fire text-6xl text-blue"></div>
      </div>
      <div className="mb-5 mt-1 flex border-b border-black-1 pb-5">
        <Button className="w-full" onClick={clickHandler}>
          馬上訂閱
        </Button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="mb-5 flex border-b border-black-1 pb-5">
          <div className="icon-sparkle-checked text-md mr-3 pt-1 text-blue"></div>
          <div>
            <div className="caption mb-1">每 100 積分可觀看 1 筆薪水情報</div>
            <div className="caption">每 300 積分可解鎖 1 個聊天室</div>
          </div>
        </div>
        <div className="mb-5 flex border-b border-black-1 pb-5">
          <div className="icon-sparkle-checked text-md mr-3 pt-1 text-blue"></div>
          <div>
            <div className="caption mb-1">贈送 2000 積分</div>
            <div className="caption">市價 NT$3000 元</div>
          </div>
        </div>
        <div className="mb-5 flex border-b border-black-1 pb-5">
          <div className="icon-sparkle-checked text-md mr-3 pt-1 text-blue"></div>
          <div>
            <div className="caption mb-1">10% 比薪水積分回饋</div>
            <div className="caption">訂閱期間使用積分兌換、解鎖內容可獲得 10% 積分回饋</div>
          </div>
        </div>
        <div className="flex">
          <div className="icon-info mr-3 text-lg text-blue"></div>
          <div className="caption text-black-5">贈送積分使用期限為購買日期後 6 個月</div>
        </div>
      </div>
    </div>
  );
};

export default SelectSubscription;

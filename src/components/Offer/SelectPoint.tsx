'use client';

import Button from '../Button';
import Select from '../Select';
import { offerPointOption } from '@/utils/options';

const SelectPoint = () => {
  const selectPointHandler = (point: string) => {
    console.log(typeof point);
  };
  return (
    <div className="w-full lg:w-1/3 flex flex-col border border-black-1 py-5 px-6 rounded me-3 mb-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex flex-col">
          <h4 className="text-black-6 mb-3">積分</h4>
          <h6 className="text-black-10">$ 元</h6>
        </div>
        <div className="icon-star-circle text-5xl"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-baseline pb-5 border-b border-black-1 mb-5">
        <div className="w-full mb-2 lg:mb-0 lg:me-2">
          {/* <BaseFormSelect className="" name="offer" /> */}
          <Select options={offerPointOption} name="point" onChange={(point) => selectPointHandler(point)} />
        </div>
        <Button className="w-full lg:w-1/2" color="secondary">
          購買
        </Button>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="flex pb-5 border-b border-black-1 mb-5">
          <div className="icon-sparkle-checked text-blue text-md pt-1 mr-3"></div>
          <div>
            <div className="caption mb-1">每 100 積分可觀看 1 筆薪水情報</div>
            <div className="caption">每 300 積分可解鎖 1 個聊天室</div>
          </div>
        </div>
        <div className="flex">
          <div className="icon-info text-blue text-lg mr-3"></div>
          <div className="caption text-black-5">贈送積分使用期限為購買日期後 6 個月</div>
        </div>
      </div>
    </div>
  );
};

export default SelectPoint;

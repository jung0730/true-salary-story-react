'use client';

import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import { offerPointOption } from '@/utils/options';
import { useRouter } from 'next/navigation';
import Icon from '../Icon';

const SelectPoint = () => {
  const router = useRouter();
  const [point, setPoint] = useState('');
  const selectPointHandler = (point: string) => {
    setPoint(point);
  };
  const clickHandler = () => {
    router.push(`/checkout?type=single&point=${point}`);
  };
  return (
    <div className="mb-5 me-3 flex w-full flex-col rounded border border-black-1 px-6 py-5 lg:w-1/3">
      <div className="mb-5 mt-[1px] flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="mb-3 text-black-6">{point}積分</h4>
          <h6 className="text-black-10">${Number(point) * 1.5}元</h6>
        </div>
        <Icon icon="star" size={40} />
      </div>
      <div className="mb-5 flex flex-col items-baseline justify-between border-b border-black-1 pb-5 lg:flex-row">
        <div className="mb-2 w-full lg:mb-0 lg:me-2">
          <Select options={offerPointOption} name="point" onChange={(point) => selectPointHandler(point)} />
        </div>
        <Button className="w-full lg:w-1/2" color="secondary" disabled={!point} onClick={clickHandler}>
          購買
        </Button>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="mb-5 border-b border-black-1 pb-5">
          <div className="caption mb-1">◆ 每 100 積分可觀看 1 筆薪水情報</div>
          <div className="caption">◆ 每 300 積分可解鎖 1 個聊天室</div>
        </div>
        <div className="flex">
          <div className="caption text-black-5">贈送積分使用期限為購買日期後 6 個月</div>
        </div>
      </div>
    </div>
  );
};

export default SelectPoint;

'use client';
import { useSearchParams } from 'next/navigation';
import Button from '../Button';

const Sum = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const point = searchParams.get('point') || '';
  const SUBSCRIPTION_PRICE = 699;
  const SUBSCRIPTION_POINT = 2000;
  const getPriceAndPoint = (
    type: string,
    point: string
  ): {
    price: number;
    totalPoint: number;
  } => {
    switch (type) {
      case 'subscription':
        return {
          price: SUBSCRIPTION_PRICE,
          totalPoint: SUBSCRIPTION_POINT,
        };
      case 'single':
        const price = Number(point) * 1.5;
        return {
          price,
          totalPoint: Number(point),
        };
      default:
        return {
          price: 0,
          totalPoint: 0,
        };
    }
  };
  const result = getPriceAndPoint(type, point);
  const clickToPay = async () => {
    const params = {
      purchaseType: type,
      amount: result.price,
    };
    // call api 800 取得 line pay transactionId
    // const transactionId = await order.fetchLinePayOrder(param);

    // 接著 call api 801 送出 transactionId
    // if (transactionId) {
    //   const paymentUrl = await order.fetchLinePayTransaction(transactionId);
    //   if (paymentUrl) {
    //     window.location.href = paymentUrl;
    //   } else {
    //     showError('提示', '付款失敗，請重新操作。');
    //   }
    // }
  };
  return (
    <div className="my-1.5 w-full flex-col border-black-1">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full flex-col lg:border-r lg:border-black-1 lg:pe-10">
          <div className="mb-5 flex-col border-b border-black-1 pb-5">
            <div className="mb-2 flex justify-between">
              <h6 className="text-black-6">現有積分</h6>
              {/* <h6 className="text-black-6">{{ userPoint }} 積分</h6> */}
            </div>
            <div className="mb-2 flex justify-between">
              <h6 className="text-black-6">本次購買積分</h6>
              <h6 className="text-black-6">+ {result.totalPoint} 積分</h6>
            </div>
          </div>
          <div className="flex justify-between">
            <h5>小計</h5>
            <h5>$ {result.price}元</h5>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-2/5">
          <Button onClick={clickToPay}>開始付款</Button>
        </div>
      </div>
    </div>
  );
};

export default Sum;

import { getOrderList } from '@/services/server';
import NoDataSVG from '@/components/Image/NoDataSVG';
import BaseLayout from '@/components/BaseLayout';

export default async function Page() {
  const result = await getOrderList();
  const formatTime = (createdAt: Date) => {
    const date = new Date(createdAt);
    const localDate = date.toLocaleDateString('zh-TW');
    return localDate;
  };
  const orderList = result.map((item) => (
    <tr key={item._id}>
      <td className="block w-full border-0 p-0 before:mr-2 before:content-['訂單編號:'] first:pt-3 last:pb-5 md:table-cell md:w-auto md:py-5 md:before:hidden md:first:pt-5 md:last:pb-5">
        {item._id}
      </td>
      <td className="block w-full border-0 p-0 before:mr-2 before:content-['訂單項目:'] first:pt-3 last:pb-5 md:table-cell md:w-auto md:py-5 md:before:hidden md:first:pt-5 md:last:pb-5">
        {item.orderDetails.packages[0].products[0].name}
      </td>
      <td className="block w-full border-0 p-0 before:mr-2 before:content-['購買方式:'] first:pt-3 last:pb-5 md:table-cell md:w-auto md:py-5 md:before:hidden md:first:pt-5 md:last:pb-5">
        LinePay
      </td>
      <td className="block w-full border-0 p-0 before:mr-2 before:content-['訂單日期:'] first:pt-3 last:pb-5 md:table-cell md:w-auto md:py-5 md:before:hidden md:first:pt-5 md:last:pb-5">
        {formatTime(item.createdAt)}
      </td>
      <td className="block w-full border-0 p-0 before:mr-2 before:content-['小計:'] first:pt-3 last:pb-5 md:table-cell md:w-auto md:py-5 md:before:hidden md:first:pt-5 md:last:pb-5">
        NT${item.orderDetails.amount}
      </td>
    </tr>
  ));
  return (
    <BaseLayout title="訂單明細">
      {result.length > 0 ? (
        <table className="w-full table-auto" aria-describedby="訂單總覽">
          <thead>
            <tr className="hidden md:table-row">
              <th>訂單編號</th>
              <th>訂單項目</th>
              <th>購買方式</th>
              <th>訂單日期</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 md:border-0">{orderList}</tbody>
        </table>
      ) : (
        <NoDataSVG />
      )}
    </BaseLayout>
  );
}

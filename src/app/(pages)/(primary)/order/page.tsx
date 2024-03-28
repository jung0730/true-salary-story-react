import { getOrderList } from '@/services/server';
import NoDataSVG from '@/components/Image/NoDataSVG';

export default async function Page() {
  const result = await getOrderList();
  const formatTime = (createdAt: Date) => {
    const date = new Date(createdAt);
    const localDate = date.toLocaleDateString('zh-TW');
    return localDate;
  };
  const orderList = result.map((item) => (
    <tr key={item._id}>
      <td className="md:before:hidden before:content-['訂單編號:'] before:mr-2 md:w-auto w-full md:table-cell block border-0 md:py-5 p-0 md:first:pt-5 first:pt-3 md:last:pb-5 last:pb-5">
        {item._id}
      </td>
      <td className="md:before:hidden before:content-['訂單項目:'] before:mr-2 md:w-auto w-full md:table-cell block border-0 md:py-5 p-0 md:first:pt-5 first:pt-3 md:last:pb-5 last:pb-5">
        {item.orderDetails.packages[0].products[0].name}
      </td>
      <td className="md:before:hidden before:content-['購買方式:'] before:mr-2 md:w-auto w-full md:table-cell block border-0 md:py-5 p-0 md:first:pt-5 first:pt-3 md:last:pb-5 last:pb-5">
        LinePay
      </td>
      <td className="md:before:hidden before:content-['訂單日期:'] before:mr-2 md:w-auto w-full md:table-cell block border-0 md:py-5 p-0 md:first:pt-5 first:pt-3 md:last:pb-5 last:pb-5">
        {formatTime(item.createdAt)}
      </td>
      <td className="md:before:hidden before:content-['小計:'] before:mr-2 md:w-auto w-full md:table-cell block border-0 md:py-5 p-0 md:first:pt-5 first:pt-3 md:last:pb-5 last:pb-5">
        NT${item.orderDetails.amount}
      </td>
    </tr>
  ));
  return (
    <section className="min-h-screen bg-gray max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:pb-1 lg:pt-20">
      <div className="container mx-auto mt-8 flex flex-col items-center justify-center sm:max-w-[350px] md:max-w-[600px] lg:mt-15 lg:max-w-7xl">
        <div className="w-2/3">
          <div className="flex w-full flex-col items-start justify-center sm:mb-6 lg:mb-6">
            <div className="rounded-t bg-black-10 px-5 py-3 text-white">
              <h5>訂單明細</h5>
            </div>
            <div className="w-full min-h-[500px] rounded-b rounded-tr border-2 border-black-10 bg-white px-6 py-6 md:px-5 md:py-5 lg:px-8 lg:py-6">
              {result.length > 0 ? (
                <table className="table-auto w-full" aria-describedby="訂單總覽">
                  <thead>
                    <tr className="md:table-row hidden">
                      <th>訂單編號</th>
                      <th>訂單項目</th>
                      <th>購買方式</th>
                      <th>訂單日期</th>
                      <th>小計</th>
                    </tr>
                  </thead>
                  <tbody className="md:border-0 divide-y divide-slate-200">{orderList}</tbody>
                </table>
              ) : (
                <NoDataSVG />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

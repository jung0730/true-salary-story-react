import LinePayment from '@/components/Checkout/LinePayment';
import Email from '@/components/Checkout/Email';
import Sum from '@/components/Checkout/Sum';
import BaseLayout from '@/components/BaseLayout';

export default function Page() {
  return (
    <BaseLayout title="訂單資訊">
      <div className="me-3 flex w-full flex-col rounded">
        <div className="mb-10 flex-col border-b border-black-1 pb-10">
          <Email />
          <LinePayment />
        </div>
        <Sum />
      </div>
    </BaseLayout>
  );
}

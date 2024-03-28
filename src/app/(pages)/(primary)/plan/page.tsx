import SelectPoint from '@/components/Plan/SelectPoint';
import SelectSubscription from '@/components/Plan/SelectSubscription';
import LinePayment from '@/components/Plan/LinePayment';
import BaseLayout from '@/components/BaseLayout';

export default function Page() {
  return (
    <BaseLayout>
      <div className="flex ">
        <SelectPoint />
        <SelectSubscription />
        <LinePayment />
      </div>
    </BaseLayout>
  );
}

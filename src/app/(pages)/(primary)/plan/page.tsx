import SelectPoint from '@/components/Plan/SelectPoint';
import SelectSubscription from '@/components/Plan/SelectSubscription';
import LinePayment from '@/components/Plan/LinePayment';

export default function Page() {
  return (
    <section className="min-h-screen bg-gray max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:pb-1 lg:pt-20">
      <div className="container mx-auto mt-5 flex flex-col items-center justify-center sm:max-w-[350px] md:mt-24 md:max-w-[600px] lg:mt-10 lg:max-w-7xl">
        <div className="flex w-full flex-col border-2 border-black-10 bg-white p-6 lg:flex-row">
          <SelectPoint />
          <SelectSubscription />
          <LinePayment />
        </div>
      </div>
    </section>
  );
}

import SelectPoint from '@/components/Offer/SelectPoint';
import SelectSubscription from '@/components/Offer/SelectSubscription';
import LinePayment from '@/components/Offer/LinePayment';

export default function Page() {
  return (
    <section className="bg-gray sm:py-10 md:py-10 lg:pt-20 lg:pb-1 max-[1920px]:overflow-x-hidden">
      <div className="container mx-auto sm:max-w-[350px] md:max-w-[600px] lg:max-w-7xl flex flex-col justify-center items-center mt-5 md:mt-24 lg:mt-10">
        <div className="w-full flex flex-col lg:flex-row border-2 border-black-10 p-6 bg-white">
          <SelectPoint />
          <SelectSubscription />
          <LinePayment />
        </div>
      </div>
    </section>
  );
}

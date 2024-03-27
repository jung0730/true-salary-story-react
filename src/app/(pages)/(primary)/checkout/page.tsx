import LinePayment from '@/components/Checkout/LinePayment';
import Email from '@/components/Checkout/Email';
import Sum from '@/components/Checkout/Sum';

export default function Page() {
  return (
    <section className="min-h-screen bg-gray max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:pb-1 lg:pt-20">
      <div className="container mx-auto mt-8 flex flex-col items-center justify-center sm:max-w-[350px] md:max-w-[600px] lg:mt-15 lg:max-w-7xl">
        <div className="w-2/3">
          <div className="flex w-full flex-col items-start justify-center sm:mb-6 lg:mb-6">
            <div className="rounded-t bg-black-10 px-5 py-3 text-white">
              <h5>訂單資訊</h5>
            </div>
            <div className="w-full rounded-b rounded-tr border-2 border-black-10 bg-white px-6 py-6 md:px-5 md:py-5 lg:px-8 lg:py-6">
              <div className="me-3 flex w-full flex-col rounded">
                <div className="mb-10 flex-col border-b border-black-1 pb-10">
                  <Email />
                  <LinePayment />
                </div>
                <Sum />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LinePayment = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col border border-black-1 py-5 px-6 rounded">
      <div className="h-full flex flex-col justify-center items-center py-5">
        <div className="flex flex-col">
          <div className="caption mb-5">支援下列付款方式</div>
          <div className="text-md">
            <img src="./line-pay.svg" alt="LINE Pay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinePayment;

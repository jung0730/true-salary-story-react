const LinePayment = () => {
  return (
    <div className="flex w-full flex-col rounded border border-black-1 px-6 py-5 lg:w-1/3">
      <div className="flex h-full flex-col items-center justify-center py-5">
        <div className="flex flex-col">
          <div className="caption mb-5">支援下列付款方式</div>
          <img src="./line-pay.svg" alt="LINE Pay" />
        </div>
      </div>
    </div>
  );
};

export default LinePayment;

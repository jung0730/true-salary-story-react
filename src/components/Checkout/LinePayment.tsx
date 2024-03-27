const LinePayment = () => {
  return (
    <div className="w-full flex-col">
      <h6 className="mb-2">付款方式</h6>
      <div className="mb-1 flex w-full rounded border border-black-1 px-4 py-4">
        <img src="./line-pay.svg" alt="LINE Pay" />
        <span className="caption flex items-center text-black-6">＊可使用 LINE Points 折抵消費</span>
      </div>
    </div>
  );
};

export default LinePayment;

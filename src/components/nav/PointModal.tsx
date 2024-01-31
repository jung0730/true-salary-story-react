import Button from '../Button';

const PointModal = () => {
  return (
    <div className="flex flex-col pb-2 pt-5">
      <div className="mb-3 flex justify-between rounded border border-black-1 px-3 py-4">
        <div className="flex flex-col">
          <h5 className="mb-3 text-blue">加薪計畫</h5>
          <p className="caption">
            6+6 個月薪水任你看、
            <br />
            贈送 2000 積分、無廣告體驗，
            <br />
            以及 10% 比薪水積分回饋！
          </p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <Button color="primary" onClick={() => {}}>
            NT $699
          </Button>
        </div>
      </div>
      <div className="mb-3 flex justify-between rounded border border-black-1 px-3 py-4">
        <div className="flex flex-col">
          <h5 className="mb-3">100 積分</h5>
          <p className="caption">可兌換 1 則薪水情報</p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <Button color="secondary" onClick={() => {}}>
            NT $150
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PointModal;

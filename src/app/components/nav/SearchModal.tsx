const SearchModal = () => {
  return (
    <div className="absolute shadow-xl bg-white top-[90px] w-[400px] p-5 rounded"
    style={{ right: '-100%' }}>
      <div className="flex justify-between pb-3 border-b border-b-black-5">
        <div className="text-xl">搜尋</div>
          <button className="bg-black-1 px-2 py-1 mr-2 text-sm tracking-widest">
            <i className="icomoon icon-cross"></i>
          </button>
      </div>
      <div className="flex flex-col pt-2 pb-2">
        <div className="w-full flex mb-2">
          <div className="py-3 pe-6">
            <button
              className="pb-2 hover:border-b-2 hover:text-blue hover:border-b-blue transition duration-300 ease-in-out mr-3">
              <h6>公司</h6>
            </button>
          </div>
          <div className="py-3 pe-6">
            <button
              className="pb-2 hover:border-b-2 hover:text-blue hover:border-b-blue transition duration-300 ease-in-out mr-3">
              <h6>職位</h6>
            </button>
          </div>
          <div className="py-3 pe-6">
            <button
              className="pb-2 hover:border-b-2 hover:text-blue hover:border-b-blue transition duration-300 ease-in-out mr-3">
              <h6>產業</h6>
            </button>
          </div>
        </div>
        <div className="w-full mb-2">
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <input
              type="text"
              className="w-full ps-10 py-3 pe-5"
              placeholder="搜尋公司"
            />
          </div>
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <input
              type="text"
              className="w-full ps-10 py-3 pe-5"
              placeholder="搜尋職位"
            />
          </div>
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <input
              type="text"
              className="w-full ps-10 py-3 pe-5"
              placeholder="搜尋產業"
            />
          </div>
        </div>
        {/* TODO: BaseButton 搜尋  */}
      </div>
    </div>
  );
};

export default SearchModal;
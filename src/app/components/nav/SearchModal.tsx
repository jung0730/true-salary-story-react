import ModalContainer from './ModalContainer'
import Button from '../Button'
import Input from '../Input'

const SearchModal = () => {
  const title = '搜尋'
  return (
    <ModalContainer title={title}>
      <div className="flex flex-col pt-2 pb-2">
        <div className="w-full flex mb-2">
          <Button color="black-text">
            公司
          </Button>
          <Button color="black-text">
            職位
          </Button>
          <Button color="black-text">
            產業
          </Button>
        </div>
        <div className="w-full mb-2">
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <Input placeholder={'搜尋公司'}
                   onChange={(value) => console.log(value)} />
          </div>
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <Input placeholder={'搜尋職位'}
                   onChange={(value) => console.log(value)} />
          </div>
          <div
            className="flex items-center w-full border border-black-1 rounded mb-2"
          >
            <div
              className="icon-search text-black-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10"
            ></div>
            <Input placeholder={'搜尋產業'}
                   onChange={(value) => console.log(value)} />
          </div>
        </div>
        <Button color="secondary"
                className="w-full">
            搜尋
        </Button>
      </div>
  </ModalContainer>
  );
};

export default SearchModal;
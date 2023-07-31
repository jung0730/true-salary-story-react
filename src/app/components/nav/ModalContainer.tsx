import { useModalStore } from '../../stores/modal';

type ModalContainerProps = {
  children: React.ReactNode;
  title: string;
};

const ModalContainer = (props: ModalContainerProps) => {
  const {
    children, title
  } = props;
  const { setIsOpen } = useModalStore()
  return (
    <div className="absolute shadow-xl bg-white top-[90px] w-[400px] p-5 rounded">
      <div className="flex justify-between pb-3 border-b border-b-black-5">
        <div className="text-xl">
          { title }
        </div>
        <button className="px-2 py-1 mr-2 text-base" onClick={() => setIsOpen(false)}>x</button>
      </div>
      <div className="flex flex-col pt-2 pb-2">
        { children }
      </div>
    </div>
  );
};

export default ModalContainer;
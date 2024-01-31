import { useClickOutside } from '@/hooks/useClickOutside';

type ModalContainerProps = {
  children: React.ReactNode;
  title: string;
  setIsOpen: (value: boolean) => void;
};

const ModalContainer = (props: ModalContainerProps) => {
  const { children, title, setIsOpen } = props;
  const ref = useClickOutside(() => setIsOpen(false));
  return (
    <div className="absolute -right-full top-[90px] w-[400px] rounded bg-white p-5 shadow-xl" ref={ref}>
      <div className="flex justify-between border-b border-b-black-5 pb-3">
        <div className="text-xl">{title}</div>
        <button className="mr-2 px-2 py-1 text-base" onClick={() => setIsOpen(false)}>
          x
        </button>
      </div>
      <div className="flex flex-col py-2">{children}</div>
    </div>
  );
};

export default ModalContainer;

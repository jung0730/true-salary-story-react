import clsx from 'clsx';

type PrevNextButtonProps = {
  shape: string;
  position: string;
};

const PrevNextButton = (props: PrevNextButtonProps) => {
  const { shape, position } = props;

  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center items-center hover:bg-blue transition duration-150 ease-in-out',
        { 'rounded-full text-white bg-black-10 py-4 px-5': shape === 'circle' },
        { 'border-black-10 text-black-10  bg-white py-2 hover:text-white': shape === 'square' },
        { 'rounded-tr border-r-2 border-t-2 border-l ps-4 pe-3.5': shape === 'square' && position === 'right' },
        { 'rounded-tl border-l-2 border-t-2 border-r ps-3.5 pe-4': shape === 'square' && position === 'left' }
      )}
    >
      {position === 'left' && <span className="icon-left-arrow text-lg md:text-2xl"></span>}
      {position === 'right' && <span className="icon-right-arrow text-lg md:text-2xl"></span>}
    </button>
  );
};

export default PrevNextButton;

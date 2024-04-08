import BaseLoading from './BaseLoading';

const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black-3 z-[999]">
      <div className="w-full h-full flex justify-center items-center">
        <BaseLoading />
      </div>
    </div>
  );
};

export default LoadingAnimation;

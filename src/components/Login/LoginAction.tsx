import Image from 'next/image';
import Button from '../Button';

const LoginAction = () => {
  return (
    <Button
      className="flex w-full items-center justify-center"
      color="gray"
      onClick={() => (window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/social/google`)}
    >
      <Image src="/google.svg" alt="" className="mr-2" width={20} height={20} />
      使用 Google 繼續 {process.env.NEXT_PUBLIC_API_URL}
    </Button>
  );
};

export default LoginAction;

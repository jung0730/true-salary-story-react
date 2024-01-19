import { useLogin } from '../../services/mutation';
import Image from 'next/image';
import Button from '../Button';

const LoginAction = () => {
  return (
    <Button className="w-full flex justify-center items-center" color="gray" onClick={() => useLogin()}>
      <Image src="/google.svg" alt="" className="mr-2" width={20} height={20} />
      使用 Google 繼續
    </Button>
  );
};

export default LoginAction;

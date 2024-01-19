import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import ModalContainer from './ModalContainer';
import UserModal from './UserModal';
import useAuthStore from '../../stores/auth';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  return (
    <div className="relative">
      <Button color="avatar" className="mr-4" onClick={() => setIsOpen(!isOpen)}>
        <img className="account-button w-12 h-12 rounded-full" src={user.picture} alt="圖片" />
      </Button>
      {isOpen && (
        <ModalContainer setIsOpen={setIsOpen} title={'Rebecca'}>
          <UserModal />
        </ModalContainer>
      )}
    </div>
  );
};

export default User;

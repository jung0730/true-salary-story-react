import { useState } from 'react';
import Button from '../Button';
import ModalContainer from './ModalContainer';
import UserModal from './UserModal';
import useAuthStore from '@/stores/auth';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  return (
    <div className="relative">
      <Button color="avatar" className="mr-4" onClick={() => setIsOpen(!isOpen)}>
        <img className="h-10 w-10 rounded-full" src={user.profilePicture} alt="圖片" />
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

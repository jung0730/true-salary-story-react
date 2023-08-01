'use client'
import { useState } from 'react'
import Button from '../Button'
import ModalContainer from './ModalContainer'
import UserModal from '../Nav/UserModal'

const User = () => {
  const [isOpen, setIsOpen ] = useState(false)
  return (
    <div className="relative">
    <Button color="avatar"
            onClick={() => setIsOpen(!isOpen)}>
      <img className="account-button w-12 h-12 rounded-full" src="" alt="圖片" />
    </Button>
    { isOpen && <ModalContainer setIsOpen={setIsOpen} title={'Rebecca'}>
                  <UserModal />
                </ModalContainer> }
  </div>
  );
};

export default User;
import { useState } from 'react';
import Button from '../Button';
import ModalContainer from './ModalContainer';
import PointModal from './PointModal';
import useAuthStore from '@/stores/auth';

const Point = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  return (
    <div className="relative">
      <Button color="yellow-text" icon="shop" onClick={() => setIsOpen(!isOpen)}>
        {user.points.point} 積分
      </Button>
      {isOpen && (
        <ModalContainer setIsOpen={setIsOpen} title={'積分'}>
          <PointModal />
        </ModalContainer>
      )}
    </div>
  );
};

export default Point;

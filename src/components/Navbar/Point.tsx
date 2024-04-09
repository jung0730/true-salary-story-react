import { useState } from 'react';
import Button from '../Button';
import ModalContainer from './ModalContainer';
import PointModal from './PointModal';

const Point = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Button color="yellow-text" icon="shop" onClick={() => setIsOpen(!isOpen)}>
        積分
      </Button>
      {isOpen && (
        <ModalContainer setIsOpen={setIsOpen} title={'積分'}>
          <PointModal onClose={() => setIsOpen(!isOpen)} />
        </ModalContainer>
      )}
    </div>
  );
};

export default Point;

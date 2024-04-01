import { useState } from 'react';
import Button from '../Button';
import ModalContainer from './ModalContainer';
import SearchModal from './SearchModal';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Button icon="search" color="gray-text" onClick={() => setIsOpen(!isOpen)}>
        搜尋
      </Button>
      {isOpen && (
        <ModalContainer setIsOpen={setIsOpen} title={'搜尋'}>
          <SearchModal />
        </ModalContainer>
      )}
    </div>
  );
};

export default Search;

'use client'

import { useModalStore } from '../../stores/modal';
import Button from '../Button'
import SearchModal from './SearchModal';

const Search = () => {
  const { isOpen, setIsOpen } = useModalStore()
  return (
    <div className="relative">
      <Button color="gray-text"
              onClick={() => setIsOpen(!isOpen)}>
        搜尋
      </Button>
      { isOpen && <SearchModal /> }
    </div>
  );
};

export default Search;
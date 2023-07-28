'use client'

import { useState } from 'react';
import Button from '../Button'
import SearchModal from './SearchModal';

const Search = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <div className="relative">
      <Button color="gray-text"
              onClick={handleClick}>
        搜尋
      </Button>
      { open && <SearchModal /> }
    </div>
  );
};

export default Search;
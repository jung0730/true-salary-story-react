import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

enum SearchType {
  COMPANY = 'company',
  JOB_TITLE = 'title',
  COMPANY_TYPE = 'type',
}

const SearchModal = () => {
  const [tab, setTab] = useState(SearchType.COMPANY);
  const [searchTerm, setSearchTerm] = useState({
    company: '',
    title: '',
    type: '',
  });
  const toggleTabClass = (type: SearchType) => {
    return tab === type ? 'text-blue border-b-blue' : 'border-b-transparent';
  };
  const handleChange = (type: SearchType, value: string) => {
    setSearchTerm((item) => ({
      ...item,
      [type]: value,
    }));
  };
  return (
    <div className="flex flex-col pt-2 pb-2">
      <div className="w-full flex mb-2">
        <Button
          color="black-text"
          onClick={() => setTab(SearchType.COMPANY)}
          className={clsx('border-b-2', toggleTabClass(SearchType.COMPANY))}
        >
          公司
        </Button>
        <Button
          color="black-text"
          onClick={() => setTab(SearchType.JOB_TITLE)}
          className={clsx('border-b-2', toggleTabClass(SearchType.JOB_TITLE))}
        >
          職位
        </Button>
        <Button
          color="black-text"
          onClick={() => setTab(SearchType.COMPANY_TYPE)}
          className={clsx('border-b-2', toggleTabClass(SearchType.COMPANY_TYPE))}
        >
          產業
        </Button>
      </div>
      <div className="w-full mb-2">
        <div className="flex items-center w-full border border-black-1 rounded mb-2">
          {tab === SearchType.COMPANY && (
            <Input
              placeholder={'搜尋公司'}
              value={searchTerm.company}
              onChange={(value) => handleChange(SearchType.COMPANY, value)}
            />
          )}
          {tab === SearchType.JOB_TITLE && (
            <Input
              placeholder={'搜尋職位'}
              value={searchTerm.title}
              onChange={(value) => handleChange(SearchType.JOB_TITLE, value)}
            />
          )}
          {tab === SearchType.COMPANY_TYPE && (
            <Input
              placeholder={'搜尋產業'}
              value={searchTerm.type}
              onChange={(value) => handleChange(SearchType.COMPANY_TYPE, value)}
            />
          )}
        </div>
      </div>
      <Button color="secondary" className="w-full" onClick={() => {}}>
        搜尋
      </Button>
    </div>
  );
};

export default SearchModal;

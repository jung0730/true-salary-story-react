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
    <div className="flex flex-col py-2">
      <div className="mb-2 flex w-full">
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
      <div className="mb-2 w-full">
        <div className="mb-2 flex w-full items-center rounded border border-black-1 text-blue">
          {tab === SearchType.COMPANY && (
            <Input
              placeholder={'搜尋公司'}
              icon="search"
              value={searchTerm.company}
              onChange={(value) => handleChange(SearchType.COMPANY, value)}
            />
          )}
          {tab === SearchType.JOB_TITLE && (
            <Input
              placeholder={'搜尋職位'}
              icon="search"
              value={searchTerm.title}
              onChange={(value) => handleChange(SearchType.JOB_TITLE, value)}
            />
          )}
          {tab === SearchType.COMPANY_TYPE && (
            <Input
              placeholder={'搜尋產業'}
              icon="search"
              value={searchTerm.type}
              onChange={(value) => handleChange(SearchType.COMPANY_TYPE, value)}
            />
          )}
        </div>
      </div>
      <Button color="secondary" className="w-full justify-center" onClick={() => {}} disabled={true}>
        搜尋
      </Button>
    </div>
  );
};

export default SearchModal;

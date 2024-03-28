import Button from '../Button';
import { useRouter } from 'next/navigation';

const UserModal = () => {
  const LIST = [
    {
      title: '關於我',
      url: '',
    },
    {
      title: '我的薪水',
      url: '',
    },
    {
      title: '已解鎖薪水',
      url: '',
    },
    {
      title: '請教紀錄',
      url: '',
    },
    {
      title: '積分明細',
      url: '',
    },
    {
      title: '訂單總覽',
      url: 'order',
    },
  ];
  const router = useRouter();
  const clickHandler = (url: string) => {
    url && router.push(`/${url}`);
  };
  const userList = LIST.map((item) => (
    <li key={item.title}>
      <Button
        color="black-text"
        className="w-full"
        onClick={() => {
          clickHandler(item.url);
        }}
      >
        <div className="text-black-10 group-hover:text-blue">{item.title}</div>
      </Button>
    </li>
  ));
  return <ul className="list-none py-2">{userList}</ul>;
};

export default UserModal;

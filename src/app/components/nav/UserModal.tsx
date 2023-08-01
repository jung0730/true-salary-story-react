import Button from '../Button'

const UserModal = () => {
  const LIST = [
    {
      title: '關於我',
      icon: 'icon-person-circle',
      to: {
        name: 'user',
      },
    },
    {
      title: '我的薪水',
      icon: 'icon-edit',
      to: {
        name: 'user-my-salary',
      },
    },
    {
      title: '已解鎖薪水',
      icon: 'icon-sparkle-checked',
      type: 'link',
      id: 'user-opened-salary',
      to: {
        name: 'user-opened-salary',
      },
    },
    {
      title: '請教紀錄',
      icon: 'icon-message',
      to: {
        name: 'user-consult',
      },
    },
    {
      title: '積分明細',
      icon: 'icon-star-circle',
      to: {
        name: 'user-credit-history',
      },
    },
    {
      title: '訂單總覽',
      icon: 'icon-file',
      to: {
        name: 'user-orders',
      },
    },
  ];
  const userList = LIST.map((item) =>
  <li key={item.title}>
    <Button
      color="black-text"
      className='w-full'>
      <div className="text-black-10 group-hover:text-blue">
        {item.title}
      </div>
    </Button>
  </li>
  );
  return (
    <ul className="list-none pt-2 pb-2">
      { userList }
    </ul>
  );
};

export default UserModal;
'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button';
import Search from './Search';
import Message from './Message';
import Point from './Point';
import User from './User';

const NavList = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative">
        <Button color="blue-text" onClick={() => router.push('/share')}>
          匿名分享
        </Button>
      </div>
      <Search />
      <Message />
      <Point />
      <Button color="secondary" onClick={() => router.push('/login')}>
        登入
      </Button>
      <User />
      <Button onClick={() => router.push('/order')}>
        加薪計畫
      </Button>
    </>
  );
};

export default NavList;

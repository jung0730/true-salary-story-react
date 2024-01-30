'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button';
import Search from './Search';
import Message from './Message';
import Point from './Point';
import User from './User';
import { useEffect } from 'react';
import { useProfile } from '@/services/query/index';
import useAuthStore from '@/stores/auth';

const NavList = () => {
  const router = useRouter();
  const { isLogin, setUser, setIsLogin } = useAuthStore();
  const { data } = useProfile();

  useEffect(() => {
    if (data) {
      setUser(data);
      setIsLogin(true);
    }
  }, [data]);
  return (
    <>
      <Button color="blue-text" onClick={() => router.push('/share')}>
        匿名分享
      </Button>
      <Search />
      {isLogin && (
        <>
          <Message />
          <Point />
        </>
      )}
      {!isLogin && (
        <Button color="secondary" className="mx-5" onClick={() => router.push('/login')}>
          登入
        </Button>
      )}
      {isLogin && <User />}
      <Button onClick={() => router.push('/order')}>加薪計畫</Button>
    </>
  );
};

export default NavList;

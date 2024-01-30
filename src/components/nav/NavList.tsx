'use client';

import BaseLink from '@/components/BaseLink';
import Search from './Search';
import Message from './Message';
import Point from './Point';
import User from './User';
import { useEffect } from 'react';
import { useProfile } from '@/services/query/index';
import useAuthStore from '@/stores/auth';

const NavList = () => {
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
      <BaseLink color="blue-text" href="/share">
        匿名分享
      </BaseLink>
      <Search />
      {isLogin && (
        <>
          <Message />
          <Point />
        </>
      )}
      {!isLogin && (
        <BaseLink color="secondary" className="mx-5" href="/login">
          登入
        </BaseLink>
      )}
      {isLogin && <User />}
      <BaseLink href="/order">加薪計畫</BaseLink>
    </>
  );
};

export default NavList;

'use client';
import useAuthStore from '@/stores/auth';

const Email = () => {
  const { user } = useAuthStore();
  return (
    <div className="mb-10 w-full flex-col">
      <h6 className="mb-2">常用 E-mail 信箱</h6>
      <div className="mb-1 flex min-h-[48px] w-full rounded border border-black-1 px-4 py-4">{user.email}</div>
      <p className="caption flex items-center text-black-6">此 E-mail 信箱用於寄送發票中獎通知</p>
    </div>
  );
};

export default Email;

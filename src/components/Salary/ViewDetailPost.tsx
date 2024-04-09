'use client';
import Button from '../Button';
import LoadingAnimation from '../LoadingAnimation';
import { usePostSalaryPermission } from '@/services/mutation';
import { useRouter } from 'next/navigation';
import { useCookie } from '@/hooks/useCookie';

const ViewDetailPost = (props: { isLocked: boolean; postId: string }) => {
  const { isLocked, postId } = props;
  const { mutate, isLoading } = usePostSalaryPermission();
  const { token } = useCookie();
  const router = useRouter();
  const viewHandler = () => {
    if (!token) {
      router.push('/login');
      return;
    }
    mutate(postId, {
      onSuccess: (id) => {
        if (id) {
          router.refresh();
        }
      },
    });
  };
  return (
    <>
      {isLoading && <LoadingAnimation />}
      <div className="flex bg-blue-light p-4 sm:flex-col sm:justify-center md:flex-row md:justify-between">
        <div className="text-blue sm:pb-3">
          <span>想了解只有員工才知道的職場心聲？</span>
          <br />
          <span>兌換後馬上就能向前輩發問！</span>
        </div>
        {isLocked && <Button onClick={viewHandler}>查看完整內容及薪水</Button>}
        {!isLocked && (
          <Button onClick={() => {}} disabled={true}>
            我要請教
          </Button>
        )}
      </div>
    </>
  );
};

export default ViewDetailPost;

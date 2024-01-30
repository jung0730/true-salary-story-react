import { redirect } from 'next/navigation';
import Button from '@/components/Button';
import NotFoundSVG from '@/components/Image/NotFoundSVG';
export default function notFound() {
  return (
    <div className="h-[90vh] md:h-screen w-screen flex justify-center items-center bg-gray">
      <section className="px-4">
        <NotFoundSVG />
        <h2 className="text-xl md:text-4xl text-center mb-10 mt-[-50px]">你搜尋的頁面找不到</h2>
        <Button
          className="flex justify-center items-center rounded transition w-[200px] max-w-full mx-auto"
          onClick={() => redirect('/')}
        >
          回到首頁
        </Button>
      </section>
    </div>
  );
}

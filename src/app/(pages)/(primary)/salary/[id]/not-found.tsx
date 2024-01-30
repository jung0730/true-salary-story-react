import BaseLink from '@/components/BaseLink';
import NotFoundSVG from '@/components/Image/NotFoundSVG';
export default function notFound() {
  return (
    <div className="h-[90vh] md:h-screen w-screen flex justify-center items-center bg-gray">
      <section className="px-4">
        <NotFoundSVG />
        <h2 className="text-xl md:text-4xl text-center mb-10 mt-[-50px]">你搜尋的頁面找不到</h2>
        <BaseLink href="/" className="flex justify-center items-center w-[200px] mx-auto">
          回到首頁
        </BaseLink>
      </section>
    </div>
  );
}

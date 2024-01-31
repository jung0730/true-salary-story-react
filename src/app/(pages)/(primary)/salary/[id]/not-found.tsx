import BaseLink from '@/components/BaseLink';
import NotFoundSVG from '@/components/Image/NotFoundSVG';
export default function notFound() {
  return (
    <div className="flex h-[90vh] w-screen items-center justify-center bg-gray md:h-screen">
      <section className="px-4">
        <NotFoundSVG />
        <h2 className="mb-10 mt-[-50px] text-center text-xl md:text-4xl">你搜尋的頁面找不到</h2>
        <BaseLink href="/" className="mx-auto flex w-[200px] items-center justify-center">
          回到首頁
        </BaseLink>
      </section>
    </div>
  );
}

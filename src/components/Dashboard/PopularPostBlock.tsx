import Carousel from './Carousel';
import { getTopPost } from '@/services/server';

const PopularPostBlock = async () => {
  const data = await getTopPost();
  return (
    <section className="bg-white max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:py-20">
      <div className="container mx-auto flex max-w-[350px] flex-col items-center justify-center md:max-w-[600px] lg:max-w-7xl">
        <div className="mb-9 w-full">
          <h2 className="hidden pb-6 lg:block">薪水檔案櫃</h2>
          <Carousel items={data.popularPost} cate={'top'} />
          <br />
          <Carousel items={data.latestPost} cate={'new'} />
        </div>
      </div>
    </section>
  );
};

export default PopularPostBlock;

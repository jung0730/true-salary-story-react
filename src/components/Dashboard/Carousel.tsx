'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PostCard from './PostCard';
import { useRouter } from 'next/navigation';

type CarouselProps = {
  items: {
    postId: string;
    title: string;
    companyName: string;
    overtime: string;
    feeling: string;
  }[];
  cate: string;
};

const Carousel = (props: CarouselProps) => {
  const router = useRouter();
  const { items, cate } = props;
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  const clickHandler = (id: string) => {
    router.push(`/salary/${id}`);
  };
  return (
    <div ref={ref} className="keen-slider">
      {items.map((item, index) => (
        <div className="keen-slider__slide hover:bg-gray-light" key={index} onClick={() => clickHandler(item.postId)}>
          <PostCard item={item} cate={cate} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

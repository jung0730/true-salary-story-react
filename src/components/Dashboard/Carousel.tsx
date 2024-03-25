'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PostCard from './PostCard';

type CarouselProps = {
  items: {
    [id: string]: string;
  }[];
};

const Carousel = (props: CarouselProps) => {
  const { items } = props;
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  return (
    <div ref={ref} className="keen-slider">
      {items.map((item, index) => (
        <div className="keen-slider__slide" key={index}>
          <PostCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

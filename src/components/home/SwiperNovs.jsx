import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Item from './Item';

export default function SwiperNovs({ data }) {
  return (
    <Swiper
      className="w-full p-4 xl:px-0"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      navigation={false}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1220: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Item
            id={item.id}
            name={item.name}
            img={item.img}
            category={item.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

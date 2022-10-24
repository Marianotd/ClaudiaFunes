import SwiperCore , { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Componentes
import Item from '../Item/Item';

export default function SwiperNovs({ data }) {
  SwiperCore.use([Navigation, Pagination ])

  return (
    <Swiper
      navigation
      pagination
      spaceBetween={0}
      slidesPerView={'auto'}
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 2,
        },

        1200: {
          width: 1200,
          slidesPerView: 3,
        }
      }}
    >
      {
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Item
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
            category={item.category}
            slide={'item--slide'}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
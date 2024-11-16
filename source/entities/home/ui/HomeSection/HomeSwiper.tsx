import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const images = [
    "/main/palisade.png",
    "/main/new-santa-fe.png",
    "/main/new-tucson.png"
];

export default function HomeSwiper() {
    return (
        <Swiper 
            slidesPerView={3}
            spaceBetween={30} 
            pagination={true} 
            modules={[Pagination]} 
            className="my-swiper">
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[0]} alt="/" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[1]} alt="/" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[2]} alt="/" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[0]} alt="/" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[1]} alt="/" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bg-[#F6F3F2] pb-10' src={images[2]} alt="/" />
        </SwiperSlide>
      </Swiper>
    );
}
import Title from "../Shared/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {Autoplay, Pagination } from 'swiper/modules';


import slide1 from '../assets/assets/home/slide1.jpg'
import slide2 from '../assets/assets/home/slide2.jpg'
import slide3 from '../assets/assets/home/slide3.jpg'
import slide4 from '../assets/assets/home/slide4.jpg'
import slide5 from '../assets/assets/home/slide5.jpg'

const OrderOnline = () => {
    
    return (
        <div className="my-8">
           <Title header='From 11:00am to 11:00pm' underheader='ORDER ONLINE'></Title>

           <div className="max-w-7xl mx-auto my-5 mb-8">
           <Swiper
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           slidesPerView={3}
           spaceBetween={30}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination, Autoplay]}
           className="mySwiper"
         >
           <SwiperSlide className="">
              <img className="w-[400px] relative h-[500px]" src={slide1} alt="" />
              <h1 className="absolute bottom-8 text-3xl tracking-[5px] text-gray-100 left-[35%]">SALADS</h1>
           </SwiperSlide>
           <SwiperSlide>
            <img  className="w-[400px] relative h-[500px]" src={slide2} alt="" />
            <h1 className="absolute bottom-8 text-3xl tracking-[5px] text-gray-100 left-[35%]">SOUPS</h1>
           </SwiperSlide>
           <SwiperSlide >
            <img  className="w-[400px] relative h-[500px]" src={slide3} alt="" />
            <h1 className="absolute bottom-8 text-3xl tracking-[5px] text-gray-100 left-[35%]">PIZZAS</h1>
           </SwiperSlide>
           <SwiperSlide >
             <img  className="w-[400px] relative h-[500px]" src={slide4} alt="" />
             <h1 className="absolute bottom-8 text-3xl tracking-[5px] text-gray-100 left-[35%]">DISERTS</h1>
           </SwiperSlide>
           <SwiperSlide >
             <img  className="w-[400px] relative h-[500px]" src={slide5} alt="" />
             <h1 className="absolute bottom-8 text-3xl tracking-[5px] text-gray-100 left-[35%]">SALADS</h1>
           </SwiperSlide>
           
         </Swiper>
           </div>
        </div>
    );
};

export default OrderOnline;
import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import review from '/src/assets/assets/home/Group.png'
import '@smastrom/react-rating/style.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";


const Reviews = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/review')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <Title header='What Our Client Say' underheader='TESTOMONIAL'></Title>
            

           <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper"
         >
            
         <div className="">
         {
            reviews.map(item=> <SwiperSlide key={item._id}>
                
                 <div className='p-8 w-[80%] mx-auto flex flex-col justify-center items-center'>
                    
                 <Rating
                 style={{ maxWidth: 150 }}
                 value={item.rating}
                 readOnly
               />
                  <img className="w-[70px] my-4" src={review} alt="" />
                 <p className="text-[13px] text-semibold text-gray-500 mt-5">{item.details}</p>
                 <h1 className="text-xl font-bold text-orange-600">{item.name}</h1>
                 </div>
                </SwiperSlide>)
         }
         </div>
         
         </Swiper>
           

           

        </div>
    );
};

export default Reviews;
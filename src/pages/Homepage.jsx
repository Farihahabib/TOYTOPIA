import React from 'react';
import MyContainer from '../components/MyContainer';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Homepage = () => {
       const slides = [
         { id: 1,img:"https://i.ibb.co.com/gFt9gQpL/Screenshot-2025-11-18-221939.png" ,content: 'A colorful ToyTopia shelf — every toy tells a little story and sparks joy.' },
        {id:2,img:"https://i.ibb.co.com/gZh3jbGf/Screenshot-2025-11-18-221829.png",content:'A colorful collection of toys neatly arranged in ToyTopia, showcasing creativity, fun, and childhood imagination in every piece.'},
        { id: 3,img:"https://i.ibb.co.com/XfvLtHGk/Screenshot-2025-11-18-222037.png" ,content: 'Looking for toys? 🧸Find every kind of toy at ToyTopia—perfect for you or your little one.'},
        { id: 4, img: "https://i.ibb.co.com/4w3s1vgY/Screenshot-2025-11-18-222117.png", content: 'Play, Explore, and Imagine at ToyTopia!' },
        { id: 5, img: "https://i.ibb.co.com/YFfdZ0PZ/Screenshot-2025-11-18-222058.png", content: 'Your Adventure in Play Starts Here!'}
    ]
    return (
          <>
          <MyContainer className='mx-auto container'>
           <title>ToyTopia - Home</title>
             <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={1}
                        Autoplay={{ delay: 1000 }}
                        loop={true}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="slide-content">
                                    <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-96 object-cover rounded-lg" />
                                    <div className="slide-text absolute bottom-5 left-5  bg-opacity-50 text-white p-3 font-semibold">
                                        {slide.content}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
         
            <h1 className='text-3xl font-bold text-center mt-10'>Welcome to ToyTopia!</h1>
           </MyContainer>
        
        </>
    );
};

export default Homepage;
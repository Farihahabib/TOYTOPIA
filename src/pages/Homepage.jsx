import React from 'react';
import MyContainer from '../components/MyContainer';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import usetoys from '../hooks/usetoys';
import { DotLoader } from 'react-spinners';
import ToysCard from '../components/ToysCard';
import MyLink from '../components/MyLink';

const Homepage = () => {
       const slides = [
         { id: 1,img:"https://i.ibb.co.com/gFt9gQpL/Screenshot-2025-11-18-221939.png" ,content: 'A colorful ToyTopia shelf — every toy tells a little story and sparks joy.' },
        {id:2,img:"https://i.ibb.co.com/gZh3jbGf/Screenshot-2025-11-18-221829.png",content:'A colorful collection of toys neatly arranged in ToyTopia, showcasing creativity, fun, and childhood imagination in every piece.'},
        { id: 3,img:"https://i.ibb.co.com/XfvLtHGk/Screenshot-2025-11-18-222037.png" ,content: 'Looking for toys? 🧸Find every kind of toy at ToyTopia—perfect for you or your little one.'},
        { id: 4, img: "https://i.ibb.co.com/4w3s1vgY/Screenshot-2025-11-18-222117.png", content: 'Play, Explore, and Imagine at ToyTopia!' },
        { id: 5, img: "https://i.ibb.co.com/YFfdZ0PZ/Screenshot-2025-11-18-222058.png", content: 'Your Adventure in Play Starts Here!'}
    ]

    const{toys,loading} = usetoys()
    const featuredtoys = toys.slice(0,6)
    return (
          <>
          <MyContainer className='mx-auto container'>
           <title>ToyTopia-Home</title>
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
          <h1 className='text-3xl font-bold text-center text-teal-600 mt-10'>Welcome to ToyTopia!</h1>
         <h3 className="text-center border-b-2 text-teal-500 font-bold mx-50 my-9 text-xl">Popular toys</h3>
          <div className='grid my-7 mx-15 md:mx-9 lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  px-4 md:px-8 lg:px-12 rounded shadow-xl py-9 '>

                   {
    loading ?<DotLoader />
     : 
     (
        featuredtoys.map(toy => (
            <ToysCard key={toy.id} toy= {toy} />
        )
        )
    )
 }
            </div>
            <MyLink to={'/AllToys'} className="btn flex justify-center items-center my-9 bg-none"><button className='w-2/12 bg-teal-500 text-white hover:bg-teal-700 rounded py-2 my-9'>Show all toys</button></MyLink>
           </MyContainer>
        
        </>
    );
};

export default Homepage;
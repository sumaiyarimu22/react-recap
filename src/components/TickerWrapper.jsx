import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

const TickerWrapper = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleNextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const handlePrevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  return (
    <div className='container relative'>
      <div className='widget  shadow-sm border border-gray-100'>
        <div className='widget-title flex items-center justify-between'>
          <h3 className='uppercase'>Trending</h3>
          <MdKeyboardArrowRight />
        </div>
        <div className='widget-content flex gap-5 w-full justify-between'>
          <Swiper
            onSwiper={setSwiperInstance}
            pagination={{ type: "progressbar" }}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            allowTouchMove={false}
            className='mySwiper w-[15rem] md:w-[20rem] h-6 overflow-hidden'
          >
            <SwiperSlide className='overflow-hidden'>
              <p className='hover:text-[#fd3a13] ease-in duration-100 '>
                How We Know Disinfectants Should Kill the Covid-19
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className='hover:text-[#fd3a13] ease-in duration-100 '>
                Apple Watch Series 5 is the Best One Yet By Consumer
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className='hover:text-[#fd3a13] ease-in duration-100 '>
                Here’s What People Think of iOS 13 New Dark Mode
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className='hover:text-[#fd3a13] ease-in duration-100 '>
                11 of Best Laptops Evaluated Based on Budget
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Custom button 1 for Previous Slide */}
        <button
          className='bg-gray-50 text-[#16161a]  px-2 py-2 rounded-lg'
          onClick={handlePrevSlide}
        >
          <IoIosArrowBack />
        </button>
        {/* Custom button 2 for Next Slide */}
        <button
          className='bg-gray-50 ml-2 text-[#16161a]  px-2 py-2 rounded-lg'
          onClick={handleNextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TickerWrapper;

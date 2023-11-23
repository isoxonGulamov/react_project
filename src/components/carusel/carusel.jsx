import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// import required modules
import img1 from "../../img/slick-img3.png"
import img2 from "../../img/slick-img2.png"
import img3 from "../../img/slick-img7.jpg"
import img5 from "../../img/slick-img6.jpg"
import img4 from "../../img/silck-img5.jpg"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const Carusel =  () => {

  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (

    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#01579B",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "9px",
          "--swiper-pagination-bullet-horizontal-gap": "4px"
        }}
        spaceBetween={30}
        centeredSlides={true}
      loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,

        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper1"
      >
        <SwiperSlide className='swiper-slide-box1'>
        <div className='swiper-content'>
          <h1 className='slick-title'>TEXT BANNER</h1>
            <p className='slick-text'>BANNER DESCRIPTION SMALL TEXT</p>
            <button className='slick-btn'>
              BANNER BUTTON
            </button>
        </div>

          <img  src={img3} alt="slick-img" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-box1'>
          <div className='swiper-content'>
            <h1 className='slick-title'>TEXT BANNER</h1>
            <p className='slick-text'>BANNER DESCRIPTION SMALL TEXT</p>
            <button className='slick-btn'>
              BANNER BUTTON
            </button>
          </div>
          <img src={img2} alt="slick-img" />
          </SwiperSlide>
        <SwiperSlide className='swiper-slide-box1'>
          <div className='swiper-content'>
            <h1 className='slick-title'>TEXT BANNER</h1>
            <p className='slick-text'>BANNER DESCRIPTION SMALL TEXT</p>
            <button className='slick-btn'>
              BANNER BUTTON
            </button>
          </div>
          <img src={img1} alt="slick-img" />
          </SwiperSlide>
        <SwiperSlide className='swiper-slide-box1'>
          <div className='swiper-content'>
            <h1 className='slick-title'>TEXT BANNER</h1>
            <p className='slick-text'>BANNER DESCRIPTION SMALL TEXT</p>
            <button className='slick-btn'>
              BANNER BUTTON
            </button>
          </div>
          <img src={img4} alt="slick-img" />

        </SwiperSlide>
        <SwiperSlide className='swiper-slide-box1'>
          <div className='swiper-content'>
            <h1 className='slick-title'>TEXT BANNER</h1>
            <p className='slick-text'>BANNER DESCRIPTION SMALL TEXT</p>
            <button className='slick-btn'>
              BANNER BUTTON
            </button>
          </div>
          <img src={img5} alt="slick-img" />

        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

      </Swiper>
    </>
  );
};

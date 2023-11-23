import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import newestImg1 from "../../img/newest_img1.png";
import newestImg2 from "../../img/newest_img2.png"
import newestImg3 from "../../img/newest_img3.png"
import newestImg4 from "../../img/newest_img4.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export const GrabCarusel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}

        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },


        }}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='Home-yangiliklar-box'>
            <img src={newestImg1} alt="yangiliklar_rasmi" />
            <div className='Home-yangiliklar-content'>
              <h4 className='Home-yangiliklar-title'>Вакансия! Требуется контент-менеджер </h4>
              <p className='Home-yangiliklar-text'>
                Интернет-магазину V-COMP на постоянную работу,
                требуется контент-менеджер. Работа удаленно (на дому), не сложная...
              </p>

              <div className='Home-yangiliklar-content_bottom'>
                <p className='Home-yangiliklar_date'>07.07.2021</p>
                <p className='Home-link_5'>
                  Читать полностью ➡️
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Home-yangiliklar-box'>
            <img src={newestImg2} alt="yangiliklar_rasmi" />
            <div className='Home-yangiliklar-content'>
              <h4 className='Home-yangiliklar-title'>Бесплатная сборка ПК </h4>
              <p className='Home-yangiliklar-text'>
                Друзья! При покупке всех комплектующих для ПК в нашей компании, сборка ПК бесплатно. Вам не нужно тратить время и рисковать...               </p>

              <div className='Home-yangiliklar-content_bottom'>
                <p className='Home-yangiliklar_date'>07.07.2021</p>
                <p className='Home-link_5'>
                  Читать полностью ➡️
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Home-yangiliklar-box'>
            <img src={newestImg3} alt="yangiliklar_rasmi" />
            <div className='Home-yangiliklar-content'>
              <h4 className='Home-yangiliklar-title'>Бесплатная доставка </h4>
              <p className='Home-yangiliklar-text'>
                Бесплатная доставка по Днепру (курьером) при покупке от 3000 грн. (Подробнее в разделе Оплата и доставка)...              </p>

              <div className='Home-yangiliklar-content_bottom'>
                <p className='Home-yangiliklar_date'>07.07.2021</p>
                <p className='Home-link_5'>
                  Читать полностью ➡️
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Home-yangiliklar-box'>
            <img src={newestImg4} alt="yangiliklar_rasmi" />
            <div className='Home-yangiliklar-content'>
              <h4 className='Home-yangiliklar-title'>Акция! Подготовь ноутбук к лету! </h4>
              <p className='Home-yangiliklar-text'>
У нас ежегодная акция "Подготовь ноутбук к лету!"
 50% скидка на чистку ноутбука, 15.05.19-15.06.19 В чистку входит...  </p>

              <div className='Home-yangiliklar-content_bottom'>
                <p className='Home-yangiliklar_date'>07.07.2021</p>
                <p className='Home-link_5'>
                  Читать полностью ➡️
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

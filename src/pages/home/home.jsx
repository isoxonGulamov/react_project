import React from 'react'
import "./home.scss"
import Pc from "../../img/PC.png"
import Right from "../../img/Right.png";
import Laptop from "../../img/Labtop.png"
import Computer from "../../img/computer.png"
import console from "../../img/Console.png"
import Monitor from "../../img/Monitor.png";
import component from "../../img/Labtop component.png";
import Tablet from "../../img/Tablet.png";
import Printer from "../../img/Printer.png";
import avatar from '../../img/avatar.png'
import kolonki from "../../img/kolonka.png"
import webstaff from "../../img/Web staff.png";
import slickIcon1 from "../../img/slick-icon1.png";
import slickIcon2 from "../../img/slick-icon2.png";
import Rating from '@mui/material/Rating';
import slickIcon3 from "../../img/slick-icon3.png";
import slickIcon4 from "../../img/slick-icon4.png";
import slickIcon5 from "../../img/slick-icon5.png";
import slickIcon6 from "../../img/slick-icon6.png";
import slickIcon7 from "../../img/slick-icon7.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import mouseImg from "../../img/mouse-img.png";
import monitorImg from "../../img/monitor-img.png";
import keyboardImg from '../../img/keyboard-img.png';
import video_kartImg from '../../img/video_kart-img.png';
import aksuserImg from "../../img/rul-img.png";
import noutbukIMg from "../../img/noutbuk-img.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';
import { motion } from "framer-motion";
import comImg1 from "../../img/com-img1.png";
import comImg2 from "../../img/com-img2.png";
import comImg3 from "../../img/com-img3.png";
import comImg4 from "../../img/com-img4.png";
import newestImg1 from "../../img/newest_img1.png";
import newestImg2 from "../../img/newest_img2.png"
import newestImg3 from "../../img/newest_img3.png"
import newestImg4 from "../../img/newest_img4.png"
import { Link } from 'react-router-dom';
import { Carusel } from '../../components/carusel/carusel';
import { HomeProduct } from './home-product';
import { home_data } from './home-data';
import { MarqueeItem } from '../../components/carusel/marquee';
import Marquee from "react-fast-marquee";
import { GrabCarusel } from '../../components/carusel/grab-carusel';

export const Home = () => {
  const [value, setValue] = React.useState(4);


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const [data, setData] = React.useState([])
  const [looad, setLoad] = React.useState(true)
  const [qiymat, setqiymat] = React.useState(false)

  let data5 = !qiymat ? data.slice(0, 5) : data.slice(0, 2)



  React.useEffect(() => {
    setData(home_data)
    setTimeout(() => {
      setLoad(false)
    }, 3000);
  }, [])


  return (

    <div className='defBox'>
      <div className='Home-Section_Box'>
        <div className='Home-Category_box'>
          <div className='Home-Category_list'>
            <ul className='Home-navbar'>
              <li className='home-navbar_item' >
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Pc} alt="pc-icon" />
                    Комплектующие ПК
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Monitor} alt="pc-icon" />
                    Мониторы
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Computer} alt="pc-icon" />
                    Компьютеры
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Laptop} alt="pc-icon" />
                    Ноутбуки
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item' >

                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={console} alt="pc-icon" />
                    Игровые консоли
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={component} alt="pc-icon" />
                    Комплектующие к ноутбукам
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>
              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Tablet} alt="pc-icon" />
                    Планшеты
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>

              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={Printer} alt="pc-icon" />
                    Принтеры и МФУ
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>

              <li className='home-navbar_item' >
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={kolonki} alt="pc-icon" />
                    Акустические колонки
                  </div>

                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>

              <li className='home-navbar_item'>
                <Link className='home-navbar_list'>
                  <div className='home-navbar_list-content'>
                    <img className='icon1' src={webstaff} alt="pc-icon" />
                    Сетевое оборудование
                  </div>
                  <img src={Right} alt="rigth-icon" />
                </Link>
                <hr />
              </li>

            </ul>
          </div>

          <div className='Home-Category-slick'>
            <div className='Home-Category-slick_img'>
              <Carusel />
            </div>
            <div className='Home-Category_list-inner'>
              <div className='category-cub'>
                <FavoriteBorderIcon htmlColor='#01579B' sx={{ fontSize: '35px' }} />
                <p className='category-cub-text'>Мониторы</p>
              </div>
              <div className='category-cub'>
                <InfoOutlinedIcon htmlColor='#01579B' sx={{ fontSize: '35px' }} />
                <p className='category-cub-text'>Носители информации</p>

              </div>
              <div className='category-cub'>
                <LockOutlinedIcon htmlColor='#01579B' sx={{ fontSize: '35px' }} />
                <p className='category-cub-text'>Мониторы V-comp</p>

              </div>

            </div>

            <div className='Home-Category-slick_box'>
              <ul className='Home-Category-slick_list'>
                <li className='Home-Category_item  item1'>
                  <img width='50px' height='50px' src={slickIcon1} alt="slickIcon1.png" />
                  <span className='Home-icon_text'>
                    Бесплатная
                    сборка
                  </span>
                </li>
                <li className='Home-Category_item item2'>
                  <img width='50px' height='50px' src={slickIcon2} alt="slickIcon2.png" />
                  <span className='Home-icon_text'>
                    <br />
                    Рассрочка 4 мес./0%

                  </span>
                </li>
                <li className='Home-Category_item item3'>
                  <img width='50px' height='50px' src={slickIcon3} alt="slickIcon3.png" />
                  <span className='Home-icon_text'>
                    Бесплатная
                    доставка
                  </span>
                </li>
                <li className='Home-Category_item item4'>
                  <img width='50px' height='50px' src={slickIcon4} alt="slickIcon4.png" />
                  <span className='Home-icon_text'>
                    Официальная
                    гарантия
                  </span>
                </li>
                <li className='Home-Category_item item5'>
                  <img width='50px' height='50px' src={slickIcon5} alt="slickIcon5.png" />
                  <span className='Home-icon_text'> <br /> Лучшая цена</span>
                </li>
                <li className='Home-Category_item item6'>
                  <img width='50px' height='50px' src={slickIcon6} alt="slickIcon6.png" />
                  <span className='Home-icon_text'>  <br />
                    11 лет
                    на рынке</span>
                </li>
                <li className='Home-Category_item item7'>
                  <img width='50px' height='50px' src={slickIcon7} alt="slickIcon7.png" />
                  <span className='Home-icon_text'>
                    Профессиональная
                    консультация
                  </span>
                </li>
              </ul>
            </div>
          </div>


        </div>


        <div className='Home-Cards_box'>
          <h2 className='Home-Card_title'>Топ продаж</h2>
          <motion.ul
            className="Home-Card_product"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {
              looad ? <div className='Load_box'>
                <div id="page">
                  <div id="anime-box">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3">Loading...</div>
                  </div>
                </div>
              </div>
                :

                data?.map((el) => {
                  return <motion.li key={el.id} className="item" variants={item} >
                    <HomeProduct  {...el} />
                  </motion.li>
                })

            }



          </motion.ul>
        </div>
        <div className='Home-btn-group_box'>
          {
            data.length > 8 ? <button className='btn_3' onClick={() => setData(data.slice(0, 5))}>Скрыть ⬆️</button>
              :
              <button className='btn_3' onClick={() => setData(home_data)}>All ⬇️</button>
          }


          <button className='btn_3'>
            Смотреть все ➡️
          </button>
        </div>




        <div className='Home-GameZone-Cards'>
          <div>
            <div className='Home-GameZone-everything'>
              <span className='Home-GameZone-line1'></span>
              <span className='Home-GameZone-title'>GAME ZONE</span>
              <span className='Home-GameZone-line2'></span>

            </div>
            <motion.ul
              className="Home-Card_product"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {looad ? <h2 className='load_title'>Loading...</h2>
                :

                data5.map((el) => (

                  <motion.li key={el.id} className="item" variants={item} >
                    <HomeProduct  {...el} />
                  </motion.li>
                ))

              }


            </motion.ul>
            <div className='Home-btn-group_box'>
              {
                !qiymat ? <button className='btn_3' onClick={() => setqiymat(!qiymat)}>Скрыть ⬆️</button>
                  :
                  <button className='btn_3' onClick={() => setqiymat(!qiymat)}>Еще товары ⬇️</button>
              }

              <button className='btn_3'>
                Смотреть все ➡️
              </button>
            </div>
            <div className='Home-GameZone-bottom-box'>
              <p className='Home-GameZone-bottom-text'>Категории для геймеров</p>

              <div className='Home-GameZone-bottom-products'>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={keyboardImg} alt="keyboard-img" />

                  </div>
                  <p className='Home-GameZone-product_title'>Клавиатуры</p>
                </Link>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={mouseImg} alt="mouse-img" />
                  </div>
                  <p className='Home-GameZone-product_title'>Мыши</p>
                </Link>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={aksuserImg} alt="aksuser-img" />

                  </div>
                  <p className='Home-GameZone-product_title'>Аксессуары</p>
                </Link>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={noutbukIMg} alt="noutbuk-img" />

                  </div>
                  <p className='Home-GameZone-product_title'>Игровые ноутбуки</p>
                </Link>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={video_kartImg} alt="video_kart-img" />

                  </div>
                  <p className='Home-GameZone-product_title'>Видеокарты</p>
                </Link>
                <Link>
                  <div className='Home-GameZone-product'>
                    <img src={monitorImg} alt="monitor-img" />

                  </div>
                  <p className='Home-GameZone-product_title'>Мониторы</p>
                </Link>

              </div>
            </div>

          </div>

        </div>



        <div className='Home-Comment-Box'>


          <div className='Home-Comment-Left-box'>
            <h2 className='Home-Comment-CategoryName'>Отзывы</h2>
            <div className='Home-Comment-User_reyting2'>
              <h2 className='H_C_U_T2'>4.7</h2>
              <Rating
                name="simple-controlled"
                className='star_raiting'
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p className='rating_text2'>532 отзыва на Google</p>
            </div>
            <div className='Home-Comment-User'>
              <img className='avatar' src={avatar} alt="avatar" />
              <div className='Home-Comment-User_content'>
                <h4 className='Home-Comment-UserName'>Сергей Филимонов</h4>
                <p className='Home-Comment-User_message'>
                  Lorem Ipsum не только успешно пережил без заметных изменений
                  пять веков, но и перешагнул в электронный дизайн.
                  Его популяризации в новое время послужили публикация листов.
                </p>
                <div className='Home-Comment-raiting_box'>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <p>07.04.2021 </p>
                </div>
              </div>
              <span className='line_User'></span>

              <div className='Home-Comment-User_reyting'>
                <h2 className='H_C_U_T'>4.7</h2>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <p className='rating_text'>532 отзыва на Google</p>
              </div>
            </div>
          </div>


          <div className='Home-Comment-Right-box'>
            <h2 className='Home-Comment-CategoryName'>Инстаграм</h2>
            <div className='Home-Comment-Img_block'>
              <div className='Home-Comment-Img-box'>
                <img src={comImg1} alt="comImg1" />
              </div>
              <div className='Home-Comment-Img-box'>
                <img src={comImg2} alt="comImg1" />
              </div>
              <div className='Home-Comment-Img-box'>
                <img src={comImg3} alt="comImg1" />
              </div>
              <div className='Home-Comment-Img-box'>
                <img src={comImg4} alt="comImg1" />
              </div>

            </div>
          </div>


        </div>

        <div className='Home-btn-group_box'>
          <button className='btn_4'>
            Все отзывы на Google ➡️
          </button>

          <button className='btn_4'>
            Смотреть все ➡️
          </button>
        </div>


        <div className='Home-paranter'>
          <h2 className='Home-Comment-CategoryName'>Партнеры</h2>
          <Marquee
            pauseOnHover={true}
            speed={200}
          >
            <MarqueeItem />

          </Marquee>
        </div>
        <div className='Home-btn-group_box'>
          <button className='btn_4'>

          </button>

          <button className='btn_4'>
            Смотреть все ➡️
          </button>
        </div>

        <div className='Home-Yangiliklar'>
          <h2 className='Home-Comment-CategoryName'>Новости</h2>
          <div className='Grab-Carusel-Box'>
            <GrabCarusel />
          </div>

          <div className='Home-yangiliklar-products'>


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

          </div>
        </div>
        <div className='Home-btn-group_box'>
          <button className='btn_4'>

          </button>

          <button className='btn_4'>
            Смотреть все ➡️
          </button>
        </div>

        <div className='Home-Big_Info-Box'>
          <h2 className='Home-Big_Info_title'>Магазин компьтерной техники и Аксессуар v-comp.com.ua</h2>
          <ul className='Home-Big_Info-list'>
            <li className='Home-Big_Info-item'>
              Интернет-магазин v-comp.com.ua – всеукраинский магазин компьютерной техники и комплектующих,
               в котором без труда Вы сможете найти подходящий Вам компьютер с минимальной стоимостью.
            </li>
            <li className='Home-Big_Info-item'>
              Посетив наш интернет-магазин, Вы сможете приобрести компьютеры и комплектующие,
               которые есть у нас в наличии или осуществить их заказ.
            </li>
            <li className='Home-Big_Info-item'>
              И в кротчайшие сроки Мы доставим товар приглянувшийся Вам.
            </li>
            <li className='Home-Big_Info-item'>
 В базе электронного магазина v-comp.com.ua представлены тысячи актуальных товаров компьютерной техники: 
 ноутбуки, мониторы, мыши, клавиатуры, материнские платы, процессоры; для работы с интернетом: сервера, модемы, роутеры, свич-кабеля, обжимные; для игр, отдыха и развлечений:
  суперовые gamebox сборки, game игровые видеокарты; для компании, офиса - офисные сборки.   </li>

            <li className='Home-Big_Info-item'>
 Мы подберем под Вас удобные недорогие компьютеры по Вашим целям и сделаем хорошие скидки,
  при оформлении покупки большого количества компьютеров. </li>
            <li className='Home-Big_Info-item'>
 Ваша модель компьютера устарела, мы поможем модернизировать устаревшее оборудование.
  Подберем для Вас наилучшие компьютерные комплектующие по низким ценам.
   Наша команда Интернет-магазина v-comp.com.ua соберет для Вас любую сборку по Вашим потребностям,
    а случае, если Ваш компьютер, ноутбук, материнская плата, принтер, сканер, копир, МФУ или другие составные 
    части вышли из строя, поломались. Не беда! Мы выявим проблему, починим, произведем ремонт или заменим деталь,
     оборудование на новое. И все это в одном месте, не нужно обходить большое количество магазинов, сервисных центров,
      ждать по две, три недели. </li>

            <li className='Home-Big_Info-item address-item'>
              <i>Компьютерный Интернет-магазин v-comp.com.ua</i>
            </li>


          </ul>
        </div>

      </div>
    </div>
  )
}

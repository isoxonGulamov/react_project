import React from 'react'
import './header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import scale from '../../img/Header icon.png'
import { IconButton } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined'; 
import Shop2Icon from '@mui/icons-material/Shop2';
import instagram from "../../img/icon1.png"
import Badge from '@mui/material/Badge';
import Logo2 from "../../img/logo2.png"
import { Button } from '@mui/material';
import logo from '../../img/logo.png';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

import { Link } from 'react-router-dom';
export const Header = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const submit = (e) => {
    e.preventDefault()
  }


  return (
    <div className="container">
  <div className='header-all-box'>
        <div className="header-box">
          <div className='header-menu_box'>
            <ul className='header-list SMN_effect-33'>
              <li className='header-item1'>
                <IconButton onClick={toggleDrawer} >
                  <MenuIcon className='shop-btn'  sx={{ fontSize: 40 }} htmlColor='blue' />
                </IconButton>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction='left'

                  className='modal'
                  overlayColor='#060F42'
                  zIndex={10000}
                >
                  <button className='close-btn' onClick={toggleDrawer}>X</button>


                  <div className='Drow-box'>
                    <ul className='header-top-inner_list'>
                      <li className='header-item-inner'>
                        <CelebrationIcon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />
                        <Link className='header-top_link-inner' to='/'>Акции</Link>
                      </li>
                      <li className='header-item-inner'>
                        <AccountBalanceIcon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />
                        <Link className='header-top_link-inner' to='/'> Кредит</Link>
                      </li>
                      <li className='header-item-inner'>
                        <LocalShippingIcon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />
                        <Link className='header-top_link-inner' to='/'>Оплата и доставка</Link>
                      </li>
                      <li className='header-item-inner'>
                        <LocalHospitalIcon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />

                        <Link className='header-top_link-inner' to='/'>Помощь</Link>
                      </li>
                      <li className='header-item-inner'>
                        <Shop2Icon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />
                        <Link className='header-top_link-inner' to='/'>Скупка Б/У</Link>
                      </li>
                      <li className='header-item-inner'>
                        <ContactsIcon htmlColor='lawngreen' sx={{ fontSize: 30 }} style={{ paddingRight: "10px" }} />

                        <Link className='header-top_link-inner' to='/'>Контакты</Link>
                      </li>
                    </ul>

                    <ul className='header-top_list-service'>
                      <li className='header-top_item-service'>
                        <h2 className='header-top_titile-service'>Контакты</h2>
                      </li>
                      <li className='header-top_item-service'>
                        <p className='header-top_text-service'>(067) 11-12-485 - Отдел продаж</p>
                      </li>
                      <li className='header-top_item-service'>
                        <p className='header-top_text-service'>(066) 484-39-22 - Отдел продаж</p>
                      </li>
                      <li className='header-top_item-service'>
                        <p className='header-top_text-service'>(063) 747-33-48 - Отдел продаж</p>
                      </li>
                      <li className='header-top_item-service'>
                        <p className='header-top_text-service'> Днепр <br />
                          Европейская, 8 (бывшая Миронова 8)</p>
                      </li>

                      <li className='header-top_item-service'>
                        <p className='header-top_text-service'> Понедельник-Пятница 9:00-19:00
                          Суббота-Воскресенье: с 9:00-16:00</p>
                      </li>


                      <li className='header-top_item-service'>
                        <h2 className='header-top_titile-service'>Следите за нами</h2>
                      </li>
                    </ul>
                    <div className='btn_group'>
                      <Link href="#" className="social facebook" title="Facebook">
                        <svg viewBox="0 0 512 512">
                          <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                        </svg>
                      </Link>

                      <Link href="#" className="social twitter" title="Twitter"><svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                      </svg>
                      </Link>

                      <Link className="social twitter" >
                        <img style={{ width: "15px" }} src={instagram} alt="we" />
                      </Link>

                      <Link href="#" className="social googleplus" title="GooglePlus"><svg viewBox="0 0 512 512"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3" /></svg></Link>
                    </div>
                  </div>
                </Drawer>


              </li>

              <li className='header-item'>
                <Link className='header-top_link' to='/'>Акции</Link>
              </li>
              <li className='header-item'>
                <Link className='header-top_link' to='/'> Кредит</Link>
              </li>
              <li className='header-item'>
                <Link className='header-top_link' to='/'>Оплата и доставка</Link>
              </li>
              <li className='header-item'>
                <Link className='header-top_link' to='/'>Помощь</Link>
              </li>
              <li className='header-item'>
                <Link className='header-top_link' to='/'>Скупка Б/У</Link>
              </li>
              <li className='header-item'>
                <Link className='header-top_link' to='/'>Контакты</Link>
              </li>
            </ul>
          </div>


          <div className='header-top_Logo'>
            <img style={{ width: "124px", height: "32px" }} src={Logo2} alt="we" />
          </div>
          <div className='header-account_box'>
            <div className='phone-btn'>
              <IconButton>
                <WifiCalling3OutlinedIcon className='shop-btn' sx={{ fontSize: 40 }}  />
              </IconButton>
            </div>
            <div className='person-btn'>
              <p className='lang'>RU/UA</p>
              <IconButton>
                <PersonOutlineIcon fontSize='large' color='primary' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='header-bottom_box'>
          <div className='header-bottom_logo-box'>
            <img className='header-logo' src={logo} alt="header-logo" />
            <Button style={{ marginTop: 6, }} variant="contained" size="large" color="success" endIcon={<WidgetsIcon />} >

              <span className='btn-catalog'>  КАТАЛОГ ТОВАРОВ</span>
            </Button>

          </div>
          <div className='header-bottom_search'>
            <form onSubmit={submit} className='header-form'>

              <div className='input-box'>
                <input className='header-input' type="text" placeholder='Поиск ' />
                <button className='search-btn' type='submit' >
                  <SearchOutlinedIcon  fontSize='large'    className='search-icon' htmlColor='blue' />
                </button>
              </div>
            </form>
            <div className='number-box'>
              <ul className='hList'>
                <li>
                  <span className="menu">
                    <h2 className="menu-title">050 065 87 96</h2>
                    <ul className="menu-dropdown">
                      <li>019 015 77 06</li>
                      <li>998 065 87 96</li>
                      <li>150 465 77 96</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='header-bottom_button-box'>
            <h1 className='ustun'>|</h1>

            <div className='scale-btn'>
              <IconButton aria-label="cart">
                <Badge badgeContent={22} color="warning">
                  <img style={{ width: 40 }} src={scale} alt="ewew" color='balck' />
                </Badge>
              </IconButton>
            </div>
            <div className='favorit-btn'>
              <IconButton aria-label="cart">
                <Badge badgeContent={22} color="warning">
                  <FavoriteBorderOutlinedIcon fontSize='large' htmlColor='black' />
                </Badge>
              </IconButton>
            </div>

            <IconButton aria-label="cart">
              <Badge badgeContent={22} color="success">
                <ShoppingCartOutlinedIcon className='shop-btn' fontSize='large' htmlColor='black' />
              </Badge>
            </IconButton>

          </div>
        </div>
  </div>
    </div>
  )
}

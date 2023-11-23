import React from 'react'
import { Button, IconButton } from '@mui/material'
import { FavoriteBorderRounded } from '@mui/icons-material'
import scale from "../../img/Header icon.png"
import FavoriteIcon from '@mui/icons-material/Favorite';

export const HomeProduct = ({ id, img, title, price, raiting }) => {


  const [state,setState] = React.useState(true)
  return (
 <>
      <div className='Home-card_box'>
        <div className='Home-card-top'>
          <p className='button-53'></p>
          <div className='btn-groups-home'>
            <img style={{ marginRight: "10px",width:'24px',height:'24px' }} src={scale} alt="icon" />

            {state ?
              <FavoriteBorderRounded onClick={() => setState(!state)} className='icon5' htmlColor='blue' />
              :
              <FavoriteIcon onClick={() => setState(!state)} htmlColor='red' />

            }
          </div>
        </div>
        <img className='Home-card-img' src={img} alt="Home-card_img" />
        <div className='Home-card-content'>
          <h2 className='Home-card-title '>{title}</h2>
          <p className='Home-card-raiting'>Отзывов: {raiting.length} {raiting}</p>
          <del className='oldprice'>3700 грн.</del>
          <div className='Home-card-inner_box'>
            <span className='Home-card-price'> {price}<span> грн.</span></span>
            <button className='Home-card-btn1'>
              КУПИТЬ
            </button>

          </div>
        </div>
      </div>
 </>
    
  )
}

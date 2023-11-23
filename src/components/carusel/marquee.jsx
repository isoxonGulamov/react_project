import React from 'react'
import lenova_logo from "../../img/lenova-logo.png";
import hp_logo from "../../img/hp-logo.svg";
import acer_logo from "../../img/acer-logo.png";
import sony_logo from "../../img/Sony-Logo.png";
import samsung_logo from "../../img/Samsung_Logo.png";
import "./marquee.scss"
export const MarqueeItem = () => {
  return (
    <>
      <div className='Home-Marquee_Box'>
        <img src={hp_logo} alt="hp_logo" />

        <img src={lenova_logo} alt="lenova_logo" />
        <img src={sony_logo} alt="sony_logo" />
        <img src={samsung_logo} alt="samsung_logo" />

        <img src={acer_logo} alt="acer_logo" />

        <img src={hp_logo} alt="hp_logo" />
        <img src={lenova_logo} alt="lenova_logo" />
        <img src={sony_logo} alt="sony_logo" />


      </div>
    </>
  )
}

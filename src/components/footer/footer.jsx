import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.scss"
export const Footer = () => {
  return (
    <div class="footer-content">
      <div class="footer-logo">
        <img src="logo.png" alt="Logo"/>
      </div>
      <div class="footer-links">
        <ul>
          <li><Link href="#">Bosh sahifa</Link></li>
          <li><Link href="#">Xizmatlar</Link></li>
          <li><Link href="#">Biz haqimizda</Link></li>
        </ul>
      </div>
      <div class="footer-contact">
        <p>Email: info@example.com</p>
        <p>Telefon: +998 12 345 67 89</p>
      </div>
    </div>

  )
}

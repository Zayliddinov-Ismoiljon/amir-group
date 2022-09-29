import React from 'react';
import './FooterBottom.css'

export default function FooterBottom() {
  return (
    <div className='footer-bottom'>
    <div className="container">
      <div className="bottom">
      <h4 className='footer-bottom__title'>MyEducation</h4>
      <ul className="footer-bottom__list">
        <li className="footer-bottom__item">
          <a href="https://t.me/Zayliddinov_Ismoiljon" target='_blank'>
          <img src="https://cdn-icons-png.flaticon.com/512/3781/3781958.png" alt="telegram logo" className="footer-bottom__img" />
          </a>
        </li>
        <li className="footer-bottom__item">
          <a href="https://instagram.com" target='_blank'>
          <img src="https://cdn-icons-png.flaticon.com/512/747/747562.png" alt="instagramm logo" className="footer-bottom__img" />
          </a>
        </li>
        <li className="footer-bottom__item">
          <a href="https://youtube.com" target='_blank'>
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384070.png" alt="you tube logo" className="footer-bottom__img" />
          </a>
        </li>
        <li className="footer-bottom__item">
          <a href="https://facebook.com" target='_blank'>
          <img src="https://cdn-icons-png.flaticon.com/512/747/747543.png" alt="facebook logo" className="footer-bottom__img" />
          </a>
        </li>
      </ul>
      </div>
    </div>
    </div>
  )
}

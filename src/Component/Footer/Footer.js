import React from 'react'
import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom'

export default function Footer() {
  return (
    <footer>
    <div className="footer-container">
      <ul className="footer__list container">
        <li className="footer__item">
          <h4>Kurslar</h4>
          <ul>
            <li>Web dasturlash</li>
            <li>Internet Marketing</li>
            <li>Pro Design</li>
          </ul>
        </li>
        <li className="footer__item">
          <h4>My Education haqida</h4>
          <ul>
            <li>Web dasturlash</li>
            <li>Internet Marketing</li>
            <li>Pro Design</li>
            <li>SMM</li>
            <li>3D Max AUTO CARD</li>
          </ul>
        </li>
        <li className="footer__item">
          <h4>Qo'llab quvvatlash</h4>
          <ul>
            <li>Web dasturlash</li>
            <li>Internet Marketing</li>
            <li>Pro Design</li>
            <li>SMM</li>
            <li>3D Max AUTO CARD</li>
          </ul>
        </li>
        <li className="footer__item">
          <h4>Bizning manzillarimiz</h4>
          <ul>
            <li>Web dasturlash</li>
            <li>Internet Marketing</li>
            <li>Pro Design</li>
            <li>SMM</li>
            <li>3D Max AUTO CARD</li>
          </ul>
        </li>
      </ul>
    </div>
    <FooterBottom/>
    </footer>
  )
}

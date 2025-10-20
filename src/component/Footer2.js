// import React from "react";
// import "./Footer.css";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import "../App.css";
import uzum from './Supernarxlar/Maxsulotlar/footer/uzum.svg'
import payme from './Supernarxlar/Maxsulotlar/footer/payme.svg'
import humo from './Supernarxlar/Maxsulotlar/footer/humo.svg'
import uzcard from './Supernarxlar/Maxsulotlar/footer/uzcard.svg'
import xazna from './Supernarxlar/Maxsulotlar/footer/xazna.jpg'
import click from './Supernarxlar/Maxsulotlar/footer/click-2-new.jpg'

const Footer = () => {
  return (
    <footer className="footer1">

    <div className="charosiy">

      <div className="payment-section">
        <h3>Виды оплаты</h3>
        <div className="payment-logos">
          <div className="payment-card"> <img className="payment-img3" src={uzum} /> </div>
          <div className="payment-card"> <img className="payment-img2" src={payme} /> </div>
          <div className="payment-card"><img className="payment-img" src={humo}/></div>
          <div className="payment-card"><img className="payment-img" src={uzcard}/></div>
          <div className="payment-card"><img className="payment-img1" src={xazna}/></div>
          <div className="payment-card"><img className="payment-img1" src={click}/></div>
        </div>
      </div>

      <div className="social-section">
        <h3>Мы в соц. сетях</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaTelegramPlane />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>


      </div>

      <div className="footer-bottom">
        <p>
          2015 – 2025 Интернет-магазин <b>asaxiy.uz</b>: Бытовая техника и др.
          Доставка товаров осуществляется во все регионы. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

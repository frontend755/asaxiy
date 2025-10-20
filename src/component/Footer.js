import React from "react";
// import "./Footer.css";
import "../App.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Asaxia haqida</h3>
        <ul>
          <li>Biz haqimizda</li>
          <li>Asaxiydagi martaba</li>
          <li>Litsenziyalar va sertifikatlar</li>
          <li>Asaxiy siyosati</li>
          <li>Kontaktlar</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Xaridorlar uchun</h3>
        <ul>
          <li>Tez-tez so'raladigan savollar</li>
          <li>"El-yurt ishonchi" holati</li>
          <li>Asaxiy Plus</li>
          <li>Ommaviy taklif shartnomasi</li>
          <li>Bo‘lib-bo‘lib to‘lash uchun taklif</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Ma'lumot</h3>
        <ul>
          <li>Bizning brendlarimiz</li>
          <li>Yangiliklar</li>
          <li>Blog</li>
          <li>Sayt xaritasi</li>
        </ul>
      </div>

      {/* <div className="footer-column">
        <h3>Yetkazib berish va do'konlar</h3>
        <ul>
          <li>Bizning do'konlarimiz</li>
          <li>Qabul qilish punktlari</li>
          <li>Yetkazib berish</li>
        </ul>
      </div> */}


        <div className="p1">

        <div className="footer-column">
        <div className="caros">
  <h3>Yetkazib berish va do'konlar</h3>
  <div className="delivery-box">
    <span>🏬</span> Bizning do'konlarimiz
  </div>
  <div className="delivery-box">
    <span>📍</span> Qabul qilish punktlari
  </div>
  <div className="delivery-box">
    <span>🚚</span> Yetkazib berish
  </div>
      </div>

</div>

        </div>


      <div className="footer-column">
        <h3>Aloqa uchun</h3>
        <ul>
          <li>📞 +998 71 200 01 05</li>
          <li>📧 info@asaxiy.uz</li>
          <li>Telegram boti</li>
          <li>Toshkent shahri, Gavxar ko‘chasi, 124-uy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

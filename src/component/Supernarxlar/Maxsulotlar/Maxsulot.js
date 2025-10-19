// import React from "react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./Products.css";
import img from "./assets/acer.png";
import phonk from "./assets/asus.png";
import camera from "./assets/asuse.png";
import mug from "./assets/chair.png";
import iphone from "./assets/ChatGPT Image Aug 19, 2025, 11_16_45 PM.png"
import samsung from "./assets/samsung.png"
import mac from "./assets/mac.png"
import asus from "./assets/asuse.png"
import xonor from "./assets/xonor.png"
import redmi from "./assets/redmi.png"
import hp from "./assets/hp.png";
import acer from "./assets/acer.png";
import cpu from "./assets/cpu.png";
import power from "./assets/power.png";
import ryzen from "./assets/ryzen.png";
import intl from "./assets/intl.png";
import monitor from "./assets/manitor.png";
import monitor1 from "./assets/manitor1.png";
import chair from "./assets/chair.png";
import quloqchin from "./assets/quloqchin.png";

function Maxsulot() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true,     // bir marta ishlasin
      offset: 100,    // pastga tushganda necha px da ishga tushadi
    });
  }, []);

  return (
    <div className="products-wrapper">
      <h1 className="title " data-aos="fade-down">Mahsulotlar</h1>
<h1>39 ta mahsulot sotuvda bor</h1>
      <div className="products-container" data-aos="fade-down">

        <div className="product-card" >
          <img className="product-image" src={img}></img>
          <br></br>
          <h3>T-shirt</h3>
          <p className="price">$25.00</p>


 <button class="relative overflow-hidden  py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div>

        <div className="product-card">
          <img src={phonk} className="headphones-img" />
          <br></br>
          <h3 className="h">Headphones</h3>
          <p className="price">$75.00</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>  
        </div>

        <div className="product-card">
          <img src={camera} className="product-imag" />
          <h3 className="cam">Camera</h3>
          <p className="pric">$99.90</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div>

        <div className="product-card">
          <img src={mug} className="product" />
          <h3 className="mug">Mug</h3>
          <p className="price">$15.00</p>

 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div>

      </div>

      <div className="products-container" data-aos="fade-down">

        <div className="product-card">
          <img className="product-image" src={iphone}></img>
          <h3 > Apple iPhone 16 Pro Max </h3>
          <p className="price">$100.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>         </div>

        <div className="product-card">
          <img src={samsung} className="headphones-img" />
          <h3 className="two">Galaxy S25 Ultra</h3>
          <p className="price">$120.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={xonor} className="mac" />
          <h3 className="one">Xonor X8a</h3>
          <br></br>
          <p className="pric">$10.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div>

        <div className="product-card">
          <img src={redmi} className="redmi" />
          <h3 className="the" >Xiaomi Redmi 10</h3>
          <p className="price">$8.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div>

      </div>
      <div className="products-container" data-aos="fade-down">

        <div className="product-card">
          <img className="product-image" src={hp}></img>
          <h3 > HP 2023 15,6 dyuymli sensorli noutbuk</h3>
          <p className="price">$100.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>  

        </div>

        <div className="product-card">
          <img src={acer} className="headphones-img" />
          <h3 className="two">ACER ASPIRE LITE AL16</h3>
          <p className="price">$120.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>       
   </div>

        <div className="product-card">
          <img src={mac} className="macc" />
          <h3 className="one">Macbook Air</h3>
          <br></br>
          <p className="pric">$95.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={asus} className="product-imagee" />
          <h3 className="the" >ASUS Vivobook</h3>
          <p className="price">$90.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

      </div>

      <div className="products-container" data-aos="fade-down">

        <div className="product-card">
          <img className="cpu" src={cpu}></img>
          <h3 className="w">O'yin uchun eng yaxshi CPU </h3>
          <p className="price">$40.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={power} className="headphones-img" />
          <h3 className="twoo">PowerLite o'yin protsessori</h3>
          <p className="price">$12.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={ryzen} className="ma" />
          <h3 className="amd">AMD Ryzen 9 9900X</h3>
          <br></br>
          <p className="pric">$5.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={intl} className="product-imagee" />
          <h3 className="i" >Intel Core i9-9900K</h3>
          <p className="price">$9.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>
      </div>

      <div className="products-container" data-aos="fade-down">

        <div className="product-card">
          <img className="product-imagee" src={monitor}></img>
          <h3 className="dy">24 dyuymli o'yin kompyuteri monitor </h3>
          <p className="price">$4.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={monitor1} className="HZ" />
          <h3 className="two">32 dyumli OEM o'yin LCD monitorlari 75Hz</h3>
          <p className="price">$12.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>

        <div className="product-card">
          <img src={chair} className="m" />
          <h3 className="t">LED konsolli o'yin kursisi</h3>
          <br></br>
          <p className="pric">$155.000</p>
  <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>   
 </div>

        <div className="product-card">
          <img src={quloqchin} className="qu" />
          <h3 className="tw" >O'yin uchun quloqchin</h3>
          <p className="price">$100.00</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div>
      </div>
    </div>
  );
}

export default Maxsulot ;
 
import { Link } from "react-router-dom";
// import Maxsulot from "./Maxsulotlar/Maxsulot";
// import Maxsulot4 from "./Maxsulotlar/Maxsulot4";
import img from './kitoblar/kitob.png'
import phonk from './kitoblar/kitob1.png'
import camera from './kitoblar/kitob2.png'
import mug from './kitoblar/kitob3.png'
import iphone from './kitoblar/kitob4.png'
import samsung from './kitoblar/kitob5.png'    
import xonor from './kitoblar/kitob6.png'
import redmi from './kitoblar/kitob7.png'
import hp from './kitoblar/kitob8.png'
import acer from './kitoblar/kitob9.png'
import mac from './kitoblar/kitob10.png'
import asus from './kitoblar/kitob11.png'
import cpu from './kitoblar/kitob12.png'
import power from './kitoblar/kitob13.png'
import ryzen from './kitoblar/kitob14.png'
import intl from './kitoblar/kitob15.png'
import monitor from './kitoblar/kitob16.png'
import monitor1 from './kitoblar/kitob17.png'
import chair from './kitoblar/kitob18.png'
import quloqchin from './kitoblar/kitob19.png'
import './Maxsulotlar/Products.css'
function Kitoblar() {
  const categories = [
    "Asaxiy Books kitoblari",
    "Badiy adabiyotlar",
    "Psixalogiya va shaxshiy rivojanish",
    "Iqlim texnikasi",
    "Biznes kitoblar",
    "Bolalar adabiyoti",
    "rus tilidagi kitoblar",
    "O'quv adabiyoti",
    "Top-100 ta bestseler",
    "Bestsellerlar toplami",
    "Siyosat",
    "Biografiya ",
    
  ];

  return (
    <div className="flex  gap-8 px-6 py-10 max-w-[1300px] mx-auto">
      {/* Chap tarafdagi bo‘limlar paneli */}
      <div className="w-[220px] flex-shrink-0">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <Link to="/bosh" className="cursor-pointer hover:text-blue-600">
            Bosh sahifa
          </Link>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-gray-700 font-medium">Kitoblar</span>
        </div>

        {/* Kategoriyalar */}
        <div className="bg-white rounded-xl shadow-md p-5 max-h-[450px] overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-3">
            Bo‘limlar
          </h1>
          <ul className="flex flex-col gap-3">
            {categories.map((cat, index) => {
              const path = `/categories/${cat
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[’‘']/g, "")
                .replace(/[^\w-]/g, "")}`;

              return (
                <li key={index}>
                  <Link
                    to={path}
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* O‘ng tarafdagi mahsulotlar */}
      <div className="flex flex-col  gap-10 w-full">
        {/* <Maxsulot4 /> */}
        {/* <Maxsulot /> */}
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
    
        {/* <Maxsulot /> */}

      </div>
    </div>
  );
}

export default Kitoblar;


        
       
     
   
    
import { Link } from "react-router-dom";
import img from "./Maxsulotlar/kiyimras/1.jpg"
// import phonk from "./Maxsulotlar/Go'zallik/2.webp"
// import camera from "./Maxsulotlar/Go'zallik/3.webp"
// import mug from "./Maxsulotlar/Go'zallik/4.webp"
// import iphone from "./Maxsulotlar/Go'zallik/5.webp"
// import samsung from "./Maxsulotlar/Go'zallik/6.jpg"
// import xonor from "./Maxsulotlar/Komptex/7.webp"
// import redmi from "./Maxsulotlar/Komptex/8.webp"
// import hp from "./Maxsulotlar/Komptex/9.webp"
// import acer from "./Maxsulotlar/Komptex/10.webp"
// import mac from "./Maxsulotlar/iqlimtex/11.jpg"
// import asus from "./Maxsulotlar/Komptex/12.jpg"
// import cpu from "./Maxsulotlar/Komptex/13.webp"
// import power from "./Maxsulotlar/Komptex/14.jpg"
// import ryzen from "./Maxsulotlar/Komptex/15.webp"
// import intl from "./Maxsulotlar/Komptex/16.jpg"
// import monitor from "./Maxsulotlar/Komptex/16.webp"
// import monitor1 from "./Maxsulotlar/iqlimtex/18.jpg"
// import chair from "./Maxsulotlar/iqlimtex/19.jpg"
// import quloqchin from "./Maxsulotlar/iqlimtex/20.jpg"
function   Kiyim (){

  const categories = [
 "Erkaklar uchun kiyim-kechaklar poyabzakl va aksessuarlar",

    
  ];

  return (
    <div className="flex  gap-8 px-6 py-10 max-w-[1400px] mx-auto">
      {/* Chap tarafdagi bo‘limlar paneli */}
      <div className="w-[320px] flex-shrink-0">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <Link to="/bosh" className="cursor-pointer hover:text-blue-600">
            Bosh sahifa
          </Link>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-gray-700 font-medium">Kiyim poyabzal va aksesuarlar</span>
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
      <h1 className="title " data-aos="fade-down">Kiyim poyabzal va aksesuarlar</h1>
<h1>1 ta mahsulot sotuvda bor</h1>
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

        {/* <div className="product-card">
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
        </div> */}

        {/* <div className="product-card">
          <img src={camera} className="product-imag" />
          <h3 className="cam">Camera</h3>
          <p className="pric">$99.90</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div> */}

        {/* <div className="product-card">
          <img src={mug} className="product" />
          <h3 className="mug">Mug</h3>
          <p className="price">$15.00</p>

 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>        </div> */}

      </div>

      {/* <div className="products-container" data-aos="fade-down">

        <div className="product-card">
          <img className="product-image" src={iphone}></img>
          <h3 > Apple iPhone 16 Pro Max </h3>
          <p className="price">$100.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>         </div> */}

        {/* <div className="product-card">
          <img src={samsung} className="headphones-img" />
          <h3 className="two">Galaxy S25 Ultra</h3>
          <p className="price">$120.000</p>
 <button class="relative overflow-hidden px-3 py-2 rounded-md text-white font-semibold 
bg-blue-400 transition-all duration-700 ease-in-out group">
  <span class="relative z-10">Boshlash</span>
  
  <span class="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-800 
  -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
</button>          </div> */}

        {/* <div className="product-card">
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
</button>        </div> */}

      {/* </div> */}
      {/* <div className="products-container" data-aos="fade-down">

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
      </div> */}

      {/* <div className="products-container" data-aos="fade-down">

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
      </div> */}
    </div>
    
        {/* <Maxsulot /> */}

      </div>
    </div> 
    )
}
export default Kiyim;
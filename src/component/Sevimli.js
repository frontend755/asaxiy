import React from "react";
import './styles/Sevimli.css'
import {Link} from 'react-router-dom'
function Sevimli() {
  return (
    <div id="Sevimli" className="Sevimli">
<Link to="/boshh" className="courser-pointer hover:text-blue-600" > <h1 style={{textAlign:"center",}}> Bosh sahifa </h1> </Link>
      <h1 style={{ textAlign: "center", marginTop: "370px" }}>Sevimli mahsulotlar yo‘q</h1>
      <p style={{ textAlign: "center" }}>Mahsulotdagi ❤️ belgisini qo‘shing</p>

      <div className="flex items-center justify-center h-screen bg-[#f8fbff]">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center">
           <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#008cff"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                     2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                     6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 rotate-45 w-4 h-4 bg-white border-b border-r border-gray-300"></div>
        </div>
      </div>

      
    </div>
  );
}

export default Sevimli;

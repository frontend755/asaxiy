import { Link } from "react-router-dom";
// import Maxsulotlar from "./Supernarxlar/Maxsulotlar/Maxsulotlar";   
// import Maxsulot from "./Supernarxlar/Maxsulotlar/Maxsulot"; 
function Navbar() {
  return (
    <div className="w-full h-20 shadow-md bg-white flex items-center justify-center">
      {/* Ichki konteyner */}
      <div className="flex items-center justify-center w-full px-10">
        {/* Chap logo qismi */}
    

        {/* O‘rta menyu */}
        <div className="flex w-full justify-around font-medium text-lg">
          <Link to="/nav" className="cursor-pointer hover:text-blue-700">Super narx</Link>
          <Link to="/0-0-6" className="cursor-pointer hover:text-blue-700">0-0-6</Link>
          <Link to="/services" className="cursor-pointer hover:text-blue-700">Talabalar uchun yaxshi</Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-700">Smartfonlar</Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-700">Maishiy texnika</Link>
          <Link to="/kitoblar" className="cursor-pointer hover:text-blue-700">Kitoblar</Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-700">Televizorlar</Link>
          <Link to="/projects" className="cursor-pointer hover:text-blue-700">Noutbuklar</Link>
        </div>

        {/* O‘ngdagi bo‘sh joy (kerak bo‘lsa tugma qo‘shish mumkin) */}
{/* <div className="flex"><Maxsulot/></div> */}
        <div>

        </div>
        {/* <div>          <Maxsulotlar/></div> */}
        
      </div>
      
    </div>
  );
}

export default Navbar;

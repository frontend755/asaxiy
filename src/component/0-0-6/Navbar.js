import { Link } from "react-router-dom";
import Maxsulot from "../Supernarxlar/Maxsulotlar/Maxsulot";
function Navbar() {
  const categories = [
    "Telefonlar va gadjetlar",
    "Maishiy texnika",
    "Iqlim texnikasi",
    "Kompyuter texnikasi",
    "Sport va dam olish",
    "Uy va ofis uchun tovarlar",
    "Televizorlar, video va audio",
    
    "Qurilish va ta'mirlash",
  ];

  return (
    <div className="flex  gap-8 px-10 py-10 max-w-[1400px] mx-auto">
      {/* Chap tarafdagi bo‘limlar paneli */}
      <div className="w-[260px] flex-shrink-0">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <Link to="/bosh" className="cursor-pointer hover:text-blue-600">
            Bosh sahifa
          </Link>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-gray-700 font-medium">Mahsulotlar</span>
        </div>

        {/* Kategoriyalar */}
        <div className="bg-white rounded-xl shadow-md p-5 max-h-[600px] overflow-y-auto">
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
      <div className="flex  gap-10 w-full">
        {/* <Maxsulot4 /> */}
        <Maxsulot />
        {/* <Maxsulot />
        <Maxsulot /> */}
        {/* <Maxsulot /> */}

      </div>
    </div>
  );
}

export default Navbar;

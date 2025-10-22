import './App.css';
import Navbaras from './Navbaras';
import Navbar from './component/Navbar';
import Navbar1 from './component/Supernarxlar/Navbar';
import Maxsulot  from './component/Supernarxlar/Maxsulotlar/Maxsulot';
import Navbar2 from './component/0-0-6/Navbar';
import Sahifa from './component/Sahifa';
import Kitoblar from './component/Supernarxlar/Kitoblar';
import Telefonlar from './component/Supernarxlar/Telefonlar';
import Maishiy from './component/Supernarxlar/Maishiy';
import Iqlim from './component/Supernarxlar/Iqlim';
import Kompiyuter from './component/Supernarxlar/kompiyuter';
import Sport from './component/Supernarxlar/Sport';
import Uyofis from './component/Supernarxlar/Uyofis';
import Televizorlar from './component/Supernarxlar/Televizorlar';
import Giyimlar from './component/Supernarxlar/Giyimlar';
import Bolalar from './component/Supernarxlar/Bolalar';
import Gozallik from './component/Supernarxlar/Gozallik';
import Avto from './component/Supernarxlar/Avto';
import Idish from './component/Supernarxlar/Idish';
import Kiyim from './component/Supernarxlar/Kiyim';
import Oyinchoqlar from './component/Supernarxlar/Oyinchoqlar';
import Qurilish from './component/Supernarxlar/Qurilish';
import Konselyariya from './component/Supernarxlar/Konselyariya';
import Footer from './component/Footer';
import Footer2 from './component/Footer2';
import Account from './component/Account';
import Sevimli from './component/Sevimli';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navbar har doim ko‘rinadi */}
      <div className="w-full flex justify-center">
        <div className="w-full">
           <Navbaras />
          <Navbar />
        
        </div>
      </div>

      {/* Asosiy sahifalar */}
      <Routes>
        <Route path="/nav" element={<Navbar1 />} />
        <Route path="/0-0-6" element={<Navbar2 />} />
        {/* boshqa sahifalarni shu yerga qo‘shish mumkin */}
        {/* <Route path="/bosh" element={<Sahifa />} /> */}
        <Route path="/kitoblar" element={<Kitoblar />} />
        <Route path="/categories/telefonlar-va-gadjetlar" element={<Telefonlar />} />
        <Route path="/categories/maishiy-texnika" element={<Maishiy />} />
        <Route path="/categories/iqlim-texnikasi" element={<Iqlim />} />
        <Route path="/categories/kompyuter-texnikasi" element={<Kompiyuter />} />
        <Route path="/categories/sport-va-dam-olish" element={<Sport />} />
        <Route path="/categories/Uy-va-ofis-uchun-tovarlar" element={<Uyofis />} />
        <Route path="/categories/televizorlar-video-va-audio" element={<Televizorlar />} />
        <Route path='/categories/geymerlar-uchun-tovarlar' element={<Giyimlar />} />
        <Route path='/categories/bolalar-uchun-tovarlar' element={<Bolalar />} />
        <Route path='/categories/gozallik-va-salomatlik' element={<Gozallik />} />
        <Route path='/categories/avto-tavarlar' element={<Avto />} />
        <Route path='/categories/idish-tovoqlar' element={<Idish />} />
        <Route path='/categories/kiyim-poyabzal-va-aksesuarlar' element={<Kiyim />} />
        <Route path='/categories/oyinchoqlar-sovgalar-va-aksessuarlar' element={<Oyinchoqlar />} />
        <Route path='/categories/qurilish-va-tamirlash' element={<Qurilish />} />
        <Route path='/categories/konselyariya-tovarlari' element={<Konselyariya />} />
    <Route path="/account" element={<Account />} />
     <Route path="/sevimli" element={<Sevimli />} />

      </Routes>
      <div>
        {/* <Maxsulot /> */}

        <Sahifa/>
      </div>
    </Router>
  );
}

export default App;

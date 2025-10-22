import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbaras() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">asaxiy</div>
        <button className="category-btn">☰ Категории</button>
        <div className="search-box">
          <input type="text" placeholder="Поиск..." />
          <button className="search-btn">Искать</button>
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-item">
          <Link to="/sevimli" className="link-style">🛒 Savatcha (0)</Link>
        </div>
        <div className="nav-item">
          <Link to="/sevimli" className="link-style">♡ Sevimlilar (0)</Link>
        </div>
        <div className="nav-item"> O'zbekcha</div> 
        <Link to={"/account"} className="Link-style">👤</Link> 
        
      </div>
    </div>
  );
}

export default Navbaras;

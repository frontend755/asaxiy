import React from "react";
import "../styles/Header.css";

export default function Header({ setSearchQuery }) {
  return (
    <header className="header">
      <div className="logo">
        <h1> shekhnazarov</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Kitob nomi..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="nav-links">
        <button>🏠 Bosh sahifa</button>
        <button>🛍️ Xaridlar</button>
        <button>📦 Kategoriya</button>
        <button>📞 Aloqa</button>
      </div>
    </header>
  );
}

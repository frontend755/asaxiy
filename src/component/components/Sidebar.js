import React from "react";
import "../styles/Sidebar.css";

export default function Sidebar({ category, setCategory }) {
  const categories = [
    "Asaxiy Books kitoblari",
    "Badiiy adabiyot",
    "Psixologiya",
    "Biznes",
    "Bolalar adabiyoti",
    "Diniy adabiyot",
    "Rus tilidagi kitoblar",
    "O‘quv adabiyotlari",
    "TOP-100 kitoblar",
    "Bestseller to‘plamlari",
    "Detektiv va fantastika",
    "Siyosiy adabiyot",
    "Biografiyalar",
    "Sovg‘alik kitoblar",
    "Turk adabiyoti",
    "Tarix",
    "Ingliz tilidagi kitoblar",
    "Asaxiy Pro",
    "Kolleksion kitoblar"
  ];

  return (
    <aside className="compact-sidebar">
      <h3 className="compact-title">📚 Kategoriyalar</h3>
      <ul className="compact-category-list">
        {categories.map((cat) => (
          <li
            key={cat}
            className={`compact-category-item ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

import React from "react";
import "../styles/Sahifalash.css";

export default function Sahifalash({ joriySahifa, jamiSahifalar, sahifaniOzgartir }) {
  const koproqKorsatish = () => {
    if (joriySahifa < jamiSahifalar) {
      sahifaniOzgartir(joriySahifa + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const sahifaOzgartirVaScroll = (raqam) => {
    sahifaniOzgartir(raqam);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sahifalash-quti">
      <div className="sahifa-raqamlari">
        <button
          onClick={() => sahifaOzgartirVaScroll(joriySahifa - 1)}
          disabled={joriySahifa === 1}
          className="arrow-btn"
        >
          «
        </button>
        {[...Array(jamiSahifalar)].map((_, i) => (
          <button
            key={i}
            className={`raqam-btn ${joriySahifa === i + 1 ? "faol" : ""}`}
            onClick={() => sahifaOzgartirVaScroll(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => sahifaOzgartirVaScroll(joriySahifa + 1)}
          disabled={joriySahifa === jamiSahifalar}
          className="arrow-btn"
        >
          »
        </button>
      </div>
      {joriySahifa < jamiSahifalar && (
        <div className="koproq-quti">
          <button className="koproq-btn" onClick={koproqKorsatish}>
            🔄 Yana 15 ta ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import Kitob from "./Kitob";
import "../styles/Book.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function KitoblarJoylashuvi({ kitoblar, savatgaQoshish }) {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  if (!kitoblar || kitoblar.length === 0) {
    return <p className="hech-narsa">Hozircha bu toifada kitoblar mavjud emas</p>;
  }

  return (
    <div className="kitoblar-section">
      <h2 className="kitoblar-sarlavha" data-aos="fade-up">
       Tanlangan kitoblar
      </h2>

      <div className="kitoblar-joylashuvi" data-aos="fade-up">
        {kitoblar.map((kitob) => (
          <Kitob
            key={kitob.id}
            book={kitob}
            onAddToCart={() => savatgaQoshish(kitob)}
          />
        ))}
      </div>
    </div>
  );
}

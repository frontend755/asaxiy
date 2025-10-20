import { Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Book from "../components/Book";
import XaridModal from "../components/XaridModal";
import Sahifalash from "../components/Sahifalash";
import "../styles/App.css";


 const books = [ 
  { id: 1, title: "Atom odatlar", price: 55000, oldPrice: 75000, image: "/assets/book1.webp", category: "Psixologiya", reviews: 216 },
  { id: 2, title: "Boy ota, kambag‘al ota", price: 65000, oldPrice: 85000, image: "/assets/book2.webp", category: "Biznes", reviews: 189 },
  { id: 3, title: "Alkimyogar", price: 75000, oldPrice: 95000, image: "/assets/book3.webp", category: "Badiiy adabiyot", reviews: 99 },
  { id: 4, title: "Sofiy", price: 50000, oldPrice: 60000, image: "/assets/book4.webp", category: "Diniy adabiyot", reviews: 50 },
  { id: 5, title: "Yulduzlar ostida", price: 48000, oldPrice: 56000, image: "/assets/book5.webp", category: "Badiiy adabiyot", reviews: 130 },
  { id: 6, title: "Qayta tug‘ilish", price: 70000, oldPrice: 80000, image: "/assets/book6.webp", category: "Psixologiya", reviews: 250 },
  { id: 7, title: "Olmali qishloq", price: 53000, oldPrice: 63000, image: "/assets/book7.webp", category: "Tarix", reviews: 145 },
  { id: 8, title: "Biznesni boshlash", price: 50000, oldPrice: 60000, image: "/assets/book8.webp", category: "Biznes", reviews: 180 },
  { id: 9, title: "Sizni kutgan dunyo", price: 45000, oldPrice: 50000, image: "/assets/book9.webp", category: "Badiiy adabiyot", reviews: 300 },
  { id: 10, title: "Ishonchning kuchi", price: 60000, oldPrice: 72000, image: "/assets/book10.webp", category: "Psixologiya", reviews: 210 },
  { id: 11, title: "Tibbiy bilimlar", price: 85000, oldPrice: 100000, image: "/assets/book11.webp", category: "Tibbiyot", reviews: 110 },
  { id: 12, title: "Sog‘lom va baxtli", price: 48000, oldPrice: 59000, image: "/assets/book12.webp", category: "Sog‘liq", reviews: 180 },
  { id: 13, title: "Raqamlar olami", price: 62000, oldPrice: 73000, image: "/assets/book13.webp", category: "IT", reviews: 155 },
  { id: 14, title: "Ko‘rganlarning sirri", price: 54000, oldPrice: 63000, image: "/assets/book14.webp", category: "Badiiy adabiyot", reviews: 90 },
  { id: 15, title: "Maqsadga erishish", price: 51000, oldPrice: 58000, image: "/assets/book15.webp", category: "Motivatsiya", reviews: 175 },
  { id: 16, title: "Dasturlash sirlari", price: 69000, oldPrice: 82000, image: "/assets/book16.webp", category: "IT", reviews: 120 },
  { id: 17, title: "Ilm-fan yetakchilari", price: 54000, oldPrice: 62000, image: "/assets/book17.webp", category: "Ilm-fan", reviews: 190 },
  { id: 18, title: "Yangi dunyo", price: 53000, oldPrice: 62000, image: "/assets/book18.webp", category: "Diniy adabiyot", reviews: 220 },
  { id: 19, title: "Hayotning ahamiyati", price: 47000, oldPrice: 55000, image: "/assets/book19.webp", category: "Falsafa", reviews: 80 },
  { id: 20, title: "Kuchli yetakchilar", price: 65000, oldPrice: 75000, image: "/assets/book20.webp", category: "Biznes", reviews: 160 },
  { id: 21, title: "Yangi texnologiyalar", price: 71000, oldPrice: 84000, image: "/assets/book21.webp", category: "Texnologiya", reviews: 140 },
  { id: 22, title: "Yozuvchi va uning hayoti", price: 56000, oldPrice: 67000, image: "/assets/book22.webp", category: "Badiiy adabiyot", reviews: 100 },
  { id: 23, title: "Tabiat sirlari", price: 60000, oldPrice: 70000, image: "/assets/book23.webp", category: "Tabiat", reviews: 180 },
  { id: 24, title: "Hayotning yangi yo‘llari", price: 51000, oldPrice: 60000, image: "/assets/book24.webp", category: "Motivatsiya", reviews: 120 },
  { id: 25, title: "Tizimni yaratish", price: 75000, oldPrice: 90000, image: "/assets/book25.webp", category: "Biznes", reviews: 250 },
  { id: 26, title: "Yangi imkoniyatlar", price: 60000, oldPrice: 70000, image: "/assets/book23.webp", category: "Motivatsiya", reviews: 210 },
  { id: 27, title: "Dunyo sirlari", price: 68000, oldPrice: 78000, image: "/assets/book21.webp", category: "Falsafa", reviews: 95 },
  { id: 28, title: "Inson tafakkuri", price: 59000, oldPrice: 69000, image: "/assets/book24.webp", category: "Psixologiya", reviews: 165 },
  { id: 29, title: "Bozor qonunlari", price: 72000, oldPrice: 82000, image: "/assets/book21.webp", category: "Biznes", reviews: 180 },
  { id: 30, title: "Tabiat mo‘jizalari", price: 64000, oldPrice: 74000, image: "/assets/book11.webp", category: "Tabiat", reviews: 130 },
  { id: 31, title: "Oliy maqsadlar", price: 51000, oldPrice: 61000, image: "/assets/book12.webp", category: "Motivatsiya", reviews: 150 },
  { id: 32, title: "Yulduzli kechalar", price: 56000, oldPrice: 66000, image: "/assets/book14.webp", category: "Badiiy adabiyot", reviews: 105 },
  { id: 33, title: "Kodlar dunyosi", price: 75000, oldPrice: 85000, image: "/assets/book15.webp", category: "IT", reviews: 175 },
  { id: 34, title: "Yashirin kuchlar", price: 47000, oldPrice: 57000, image: "/assets/book4.webp", category: "Falsafa", reviews: 88 },
  { id: 35, title: "Yetakchilik siri", price: 69000, oldPrice: 79000, image: "/assets/book7.webp", category: "Biznes", reviews: 170 },
  { id: 36, title: "Ruhiyat nazariyasi", price: 63000, oldPrice: 73000, image: "/assets/book6.webp", category: "Psixologiya", reviews: 200 },
  { id: 37, title: "Yangi yo‘nalishlar", price: 66000, oldPrice: 76000, image: "/assets/book3.webp", category: "Texnologiya", reviews: 140 },
  { id: 38, title: "Muhabbat haqida", price: 58000, oldPrice: 68000, image: "/assets/book8.webp", category: "Badiiy adabiyot", reviews: 95 },
  { id: 39, title: "Qorong‘ulik va nur", price: 70000, oldPrice: 80000, image: "/assets/book9.webp", category: "Falsafa", reviews: 125 },
  { id: 40, title: "Yorug‘ kelajak", price: 62000, oldPrice: 72000, image: "/assets/book4.webp", category: "Motivatsiya", reviews: 135 },
  { id: 41, title: "IT asoslari", price: 78000, oldPrice: 88000, image: "/assets/book1.webp", category: "IT", reviews: 160 },
  { id: 42, title: "Hayot ilmi", price: 54000, oldPrice: 64000, image: "/assets/book4.webp", category: "Ilm-fan", reviews: 100 },
  { id: 43, title: "Raqamli asr", price: 80000, oldPrice: 90000, image: "/assets/book3.webp", category: "Texnologiya", reviews: 180 },
  { id: 44, title: "Yashash saboqlari", price: 50000, oldPrice: 60000, image: "/assets/book19.webp", category: "Sog‘liq", reviews: 145 },
  { id: 45, title: "Shaxsiy rivojlanish", price: 66000, oldPrice: 76000, image: "/assets/book5.webp", category: "Motivatsiya", reviews: 190 },
  { id: 46, title: "Yuksalish yo‘li", price: 71000, oldPrice: 81000, image: "/assets/book13.webp", category: "Psixologiya", reviews: 210 },
  { id: 47, title: "Fan va haqiqat", price: 73000, oldPrice: 83000, image: "/assets/book17.webp", category: "Ilm-fan", reviews: 120 },
  { id: 48, title: "Inson salohiyati", price: 67000, oldPrice: 77000, image: "/assets/book19.webp", category: "Motivatsiya", reviews: 160 },
  { id: 49, title: "Yaxshi lider", price: 60000, oldPrice: 70000, image: "/assets/book18.webp", category: "Biznes", reviews: 175 },
  { id: 50, title: "Texnika sirlari", price: 75000, oldPrice: 85000, image: "/assets/book10.webp", category: "Texnologiya", reviews: 190 },
  { id: 51, title: "Atom odatlar", price: 55000, oldPrice: 75000, image: "/assets/book1.webp", category: "Psixologiya", reviews: 216 },
  { id: 2, title: "Boy ota, kambag‘al ota", price: 65000, oldPrice: 85000, image: "/assets/book2.webp", category: "Biznes", reviews: 189 },
  { id: 3, title: "Alkimyogar", price: 75000, oldPrice: 95000, image: "/assets/book3.webp", category: "Badiiy adabiyot", reviews: 99 },
  { id: 4, title: "Sofiy", price: 50000, oldPrice: 60000, image: "/assets/book4.webp", category: "Diniy adabiyot", reviews: 50 },
  { id: 5, title: "Yulduzlar ostida", price: 48000, oldPrice: 56000, image: "/assets/book5.webp", category: "Badiiy adabiyot", reviews: 130 },
  { id: 6, title: "Qayta tug‘ilish", price: 70000, oldPrice: 80000, image: "/assets/book6.webp", category: "Psixologiya", reviews: 250 },
  { id: 7, title: "Olmali qishloq", price: 53000, oldPrice: 63000, image: "/assets/book7.webp", category: "Tarix", reviews: 145 },
  { id: 8, title: "Biznesni boshlash", price: 50000, oldPrice: 60000, image: "/assets/book8.webp", category: "Biznes", reviews: 180 },
  { id: 9, title: "Sizni kutgan dunyo", price: 45000, oldPrice: 50000, image: "/assets/book9.webp", category: "Badiiy adabiyot", reviews: 300 },
  { id: 10, title: "Ishonchning kuchi", price: 60000, oldPrice: 72000, image: "/assets/book10.webp", category: "Psixologiya", reviews: 210 },
  { id: 11, title: "Tibbiy bilimlar", price: 85000, oldPrice: 100000, image: "/assets/book11.webp", category: "Tibbiyot", reviews: 110 },
  { id: 12, title: "Sog‘lom va baxtli", price: 48000, oldPrice: 59000, image: "/assets/book12.webp", category: "Sog‘liq", reviews: 180 },
  { id: 13, title: "Raqamlar olami", price: 62000, oldPrice: 73000, image: "/assets/book13.webp", category: "IT", reviews: 155 },
  { id: 14, title: "Ko‘rganlarning sirri", price: 54000, oldPrice: 63000, image: "/assets/book14.webp", category: "Badiiy adabiyot", reviews: 90 },
  { id: 15, title: "Maqsadga erishish", price: 51000, oldPrice: 58000, image: "/assets/book15.webp", category: "Motivatsiya", reviews: 175 },
  { id: 16, title: "Dasturlash sirlari", price: 69000, oldPrice: 82000, image: "/assets/book16.webp", category: "IT", reviews: 120 },
  { id: 17, title: "Ilm-fan yetakchilari", price: 54000, oldPrice: 62000, image: "/assets/book17.webp", category: "Ilm-fan", reviews: 190 },
  { id: 18, title: "Yangi dunyo", price: 53000, oldPrice: 62000, image: "/assets/book18.webp", category: "Diniy adabiyot", reviews: 220 },
  { id: 19, title: "Hayotning ahamiyati", price: 47000, oldPrice: 55000, image: "/assets/book19.webp", category: "Falsafa", reviews: 80 },
  { id: 20, title: "Kuchli yetakchilar", price: 65000, oldPrice: 75000, image: "/assets/book20.webp", category: "Biznes", reviews: 160 },
  { id: 21, title: "Yangi texnologiyalar", price: 71000, oldPrice: 84000, image: "/assets/book21.webp", category: "Texnologiya", reviews: 140 },
  { id: 22, title: "Yozuvchi va uning hayoti", price: 56000, oldPrice: 67000, image: "/assets/book22.webp", category: "Badiiy adabiyot", reviews: 100 },
  { id: 23, title: "Tabiat sirlari", price: 60000, oldPrice: 70000, image: "/assets/book23.webp", category: "Tabiat", reviews: 180 },
  { id: 24, title: "Hayotning yangi yo‘llari", price: 51000, oldPrice: 60000, image: "/assets/book24.webp", category: "Motivatsiya", reviews: 120 },
  { id: 25, title: "Tizimni yaratish", price: 75000, oldPrice: 90000, image: "/assets/book25.webp", category: "Biznes", reviews: 250 },
  { id: 26, title: "Yangi imkoniyatlar", price: 60000, oldPrice: 70000, image: "/assets/book23.webp", category: "Motivatsiya", reviews: 210 },
  { id: 27, title: "Dunyo sirlari", price: 68000, oldPrice: 78000, image: "/assets/book21.webp", category: "Falsafa", reviews: 95 },
  { id: 28, title: "Inson tafakkuri", price: 59000, oldPrice: 69000, image: "/assets/book24.webp", category: "Psixologiya", reviews: 165 },
  { id: 29, title: "Bozor qonunlari", price: 72000, oldPrice: 82000, image: "/assets/book21.webp", category: "Biznes", reviews: 180 },
  { id: 30, title: "Tabiat mo‘jizalari", price: 64000, oldPrice: 74000, image: "/assets/book11.webp", category: "T abiat", reviews: 130 },
  { id: 31, title: "Oliy maqsadlar", price: 51000, oldPrice: 61000, image: "/assets/book12.webp", category: "Motivatsiya", reviews: 150 },
  { id: 32, title: "Yulduzli kechalar", price: 56000, oldPrice: 66000, image: "/assets/book14.webp", category: "Badiiy adabiyot", reviews: 105 },
  { id: 33, title: "Kodlar dunyosi", price: 75000, oldPrice: 85000, image: "/assets/book15.webp", category: "IT", reviews: 175 },
  { id: 34, title: "Yashirin kuchlar", price: 47000, oldPrice: 57000, image: "/assets/book4.webp", category: "Falsafa", reviews: 88 },
  { id: 35, title: "Yetakchilik siri", price: 69000, oldPrice: 79000, image: "/assets/book7.webp", category: "Biznes", reviews: 170 },
  { id: 36, title: "Ruhiyat nazariyasi", price: 63000, oldPrice: 73000, image: "/assets/book6.webp", category: "Psixologiya", reviews: 200 },
  { id: 37, title: "Yangi yo‘nalishlar", price: 66000, oldPrice: 76000, image: "/assets/book3.webp", category: "Texnologiya", reviews: 140 },
  { id: 38, title: "Muhabbat haqida", price: 58000, oldPrice: 68000, image: "/assets/book8.webp", category: "Badiiy adabiyot", reviews: 95 },
  { id: 39, title: "Qorong‘ulik va nur", price: 70000, oldPrice: 80000, image: "/assets/book9.webp", category: "Falsafa", reviews: 125 },
  { id: 40, title: "Yorug‘ kelajak", price: 62000, oldPrice: 72000, image: "/assets/book4.webp", category: "Motivatsiya", reviews: 135 },
  { id: 41, title: "IT asoslari", price: 78000, oldPrice: 88000, image: "/assets/book1.webp", category: "IT", reviews: 160 },
  { id: 42, title: "Hayot ilmi", price: 54000, oldPrice: 64000, image: "/assets/book4.webp", category: "Ilm-fan", reviews: 100 },
  { id: 43, title: "Raqamli asr", price: 80000, oldPrice: 90000, image: "/assets/book3.webp", category: "Texnologiya", reviews: 180 },
  { id: 44, title: "Yashash saboqlari", price: 50000, oldPrice: 60000, image: "/assets/book19.webp", category: "Sog‘liq", reviews: 145 },
  { id: 45, title: "Shaxsiy rivojlanish", price: 66000, oldPrice: 76000, image: "/assets/book5.webp", category: "Motivatsiya", reviews: 190 },
  { id: 46, title: "Yuksalish yo‘li", price: 71000, oldPrice: 81000, image: "/assets/book13.webp", category: "Psixologiya", reviews: 210 },
  { id: 47, title: "Fan va haqiqat", price: 73000, oldPrice: 83000, image: "/assets/book17.webp", category: "Ilm-fan", reviews: 120 },
  { id: 48, title: "Inson salohiyati", price: 67000, oldPrice: 77000, image: "/assets/book19.webp", category: "Motivatsiya", reviews: 160 },
  { id: 49, title: "Yaxshi lider", price: 60000, oldPrice: 70000, image: "/assets/book18.webp", category: "Biznes", reviews: 175 },
  { id: 50, title: "Texnika sirlari", price: 75000, oldPrice: 85000, image: "/assets/book10.webp", category: "Texnologiya", reviews: 190 }
  ]; 
export default function Kitoblar() {
  const [category, setCategory] = useState("Barcha kitoblar");
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [minPrice, setMinPrice] = useState(45000);
  const [maxPrice, setMaxPrice] = useState(85000);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [sortOption, setSortOption] = useState("");
  const [joriySahifa, setJoriySahifa] = useState(1);
  const [filter, setFilter] = useState("");
  const [publisher, setPublisher] = useState("");
const addToCart = (book) => {
  setCart((prev) => [...prev, book]);
  console.log("Savatchaga qo‘shildi:", book.title);
};
const sahifaniOzgartir = (yangiSahifa) => {
  setJoriySahifa(yangiSahifa);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const filteredBooks = books.filter((b) => {
  if (category !== "Barcha kitoblar" && b.category !== category) return false;
  if (b.price < minPrice || b.price > maxPrice) return false;
  if (!b.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;

  if (filter) {
    switch (filter) {
      case "Ommabop kitoblar":
        if (b.reviews <= 150) return false;
        break;
      case "Yangi chiqishlar":
        if (b.id <= 30) return false;
        break;
      case "Chegirmadagi kitoblar":
        if (!(b.oldPrice && b.price < b.oldPrice)) return false;
        break;
      case "Super narxdagi kitoblar":
        if (b.price > 50000) return false;
          break;
        default:
          break;
      }
    }
    if (publisher && b.publisher !== publisher) return false;

    return true;
  });
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      switch (sortOption) {
        case "cheap": return a.price - b.price;
        case "expensive": return b.price - a.price;
        case "ratingLow": return a.reviews - b.reviews;
        case "ratingHigh": return b.reviews - a.reviews;
        case "new": return b.id - a.id;
        default: return 0;
      }
    });

    const jamiSahifalar = Math.ceil(sortedBooks.length / itemsPerPage);
    const boshlanish = (joriySahifa - 1) * itemsPerPage;
    const tugash = boshlanish + itemsPerPage;
    const displayedBooks = sortedBooks.slice(boshlanish, tugash);

    return (
      <div className="app-container">
        {/* <Header setSearchQuery={setSearchQuery} /> */}

        <div className="main-layout">
          <Sidebar
            category={category}
            setCategory={setCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            filter={filter}
            setFilter={setFilter}
            publisher={publisher}
            setPublisher={setPublisher}
          />

          <main className="main-content">
            <div
              className="controls"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label>Ko‘rsatish:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value="15">15</option>
                  <option value="35">35</option>
                  <option value="50">50</option>
                </select>
              </div>

              <div>
                <label>Saralash:</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Saralash</option>
                  <option value="new">Yangi kitoblar</option>
                  <option value="cheap">Avval arzon</option>
                  <option value="expensive">Avval qimmat</option>
                  <option value="ratingLow">Past reyting</option>
                  <option value="ratingHigh">Yuqori reyting</option>
                </select>
              </div>
            </div>

            <div className="book-grid">
              {displayedBooks.length > 0 ? (
                displayedBooks.map((book) => (
  <Book 
    key={book.id} 
    book={book} 
    onOpenModal={() => setModalProduct(book)} 
    addToCart={addToCart} 
  />


                ))
              ) : (
                <p style={{ textAlign: "center", marginTop: "40px" }}>
                  Kitob topilmadi 
                </p>
              )}
            </div>
  <Sahifalash
    joriySahifa={joriySahifa}
    jamiSahifalar={jamiSahifalar}
    sahifaniOzgartir={sahifaniOzgartir}
  />

          </main>
        </div>
        {modalProduct && (
          <XaridModal
            product={modalProduct}
            onClose={() => setModalProduct(null)}
            onAddToCart={() => {
              setCart([...cart, modalProduct]);
              setModalProduct(null);
            }}
          />
        )}
      </div>
  );
}
   



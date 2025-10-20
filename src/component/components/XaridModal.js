import React, { useState } from "react";
import "../styles/XaridModal.css";

export default function XaridModal({ product, onClose, onAddToCart }) {
  const [count, setCount] = useState(1);
  const [phone, setPhone] = useState("+998");
  const [name, setName] = useState("");

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 1 && setCount(count - 1);

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^\+998\d{0,9}$/.test(input)) setPhone(input);
  };

  const handleBuy = () => {
    if (!/^\+998\d{9}$/.test(phone)) {
      alert("Telefon raqam noto‘g‘ri formatda kiritildi.");
      return;
    }
    onAddToCart({ ...product, count });
    onClose();
    alert(" Buyurtma qabul qilindi! Operator siz bilan tez orada bog‘lanadi.");
  };

  const totalPrice = product.price * count;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title"> Hozirroq xarid qilish</h2>

        <div className="modal-content">
          <img src={product.image} alt={product.title} className="modal-img" />
          <div className="modal-info">
            <h3>{product.title}</h3>
            <div className="modal-price">
              {totalPrice.toLocaleString()} so‘m
            </div>

            <div className="modal-qty">
              <button onClick={decrementCount}>−</button>
              <span>{count}</span>
              <button onClick={incrementCount}>+</button>
            </div>
          </div>
        </div>

        <div className="modal-form">
          <label> Telefon raqam</label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+998..."
          />

          <label>👤 Ism va familiya</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingiz va familiyangiz"
          />
        </div>

        <button className="buy-button" onClick={handleBuy}>
          💳 Sotib olish
        </button>
      </div>
    </div>
  );
}

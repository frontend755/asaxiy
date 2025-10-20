import React, { useState } from 'react';
import '../styles/Book.css';
import SuperNarxBadge from './SuperNarxBadge';

export default function Book({ book, onOpenModal, addToCart }) {
  const { title, price, oldPrice, image, reviews, discount, isSuperPrice } = book;
  const [liked, setLiked] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const toggleLike = () => {
    setLiked(!liked);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleCompare = () => showToast('⚖️ Taqqoslashga qo‘shildi');

  return (
    <div className="book-card" data-aos="zoom-in">
      <div className="book-image-container">
        <div className="badge-row">
          {isSuperPrice && <SuperNarxBadge />}
          {discount && <span className="badge discount">-{discount}%</span>}
        </div>

        <div className="icons-top">
          <span
            className={`icon heart ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
            title="Sevimlilarga qo‘shish"
          >
            ❤️
          </span>
          <span className="icon scale" onClick={handleCompare} title="Taqqoslash">
            ⚖️
          </span>
        </div>

        <img src={image} alt={title} className="book-image" />
      </div>

      <h3 className="book-title">{title}</h3>

      <div className="book-rating">
        {'⭐'.repeat(5)} <span className="review-count">{reviews} отзывов</span>
      </div>

      <div className="book-prices">
        {oldPrice && <div className="old-price">{oldPrice.toLocaleString()} сум</div>}
        <div className="new-price">{price.toLocaleString()} сум</div>
      </div>

      <div className="installment">
        {(Math.round(price / 4 / 100) * 100).toLocaleString()} сум x 4 мес
      </div>

      {toastMessage && <div className="toast">{toastMessage}</div>}

      <div className="book-actions">
        <button className="buy-now" onClick={() => onOpenModal(book)}>
          Купить в один клик
        </button>
        <button className="cart-button" onClick={() => addToCart(book)} title="Savatchaga qo‘shish">
          🛒
        </button>
      </div>
    </div>
  );
}

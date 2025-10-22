import React from "react";
import "./Account.css";
import {Link }  from 'react-router-dom'
function Account() {
  return (
    <div className="profile-page">

      <div className="sidebar">
        <div className="user-card">
          <div className="user-avatar"></div>
          <p className="user-id">ID: A888447</p>
          <div className="balance-box">
            <div>
              <p>Balanc</p>
              <h4>0 so'm</h4>
            </div>
            <div>
              <p>Ball</p>
              <h4>0 so'm</h4>
            </div>
          </div>
          <div className="buttons">
             <div className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <button className="blue-btn">  <Link to="/bosh" className="cursor-pointer hover:text-blue-600">
            Bosh sahifa
          </Link></button>

        </div>

            <button className="blue-btn">Hisobni to'ldirish</button>
            <button className="blue-btn">Kuponni faollashtirish</button>
          </div>
        </div>

        <ul className="menu">
       <a href="#"><li>Shaxsiy ma'lumotlar</li></a>   
        <a href="#"> <li>Asaxiy-plus</li></a> 
       <a href="#">   <li>EL-Yurt ishonchi</li></a>
        <a href="#"> <li>To'lovlar</li></a> 
        <a href="#">  <li className="active">Buyurtmalar</li></a>
        <a href="#">  <li>Muddati to'lovlar</li></a>
        <a href="#">  <li>Chat</li></a>
          <a href="#"><li>Mening manzillarim</li></a>
        <a href="#">  <li>Mening sharhlarim</li></a>
        </ul> 
        
        <button className="logout">Chiqish</button>
      </div>

      <div className="main-content">
        <h2>Mening buyurtmalarim</h2>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Buyurtma raqami</th>
                <th>Buyurtma sanasi</th>
                <th>Miqdori</th>
                <th>Holati</th>
                <th>Funksiyalar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="empty">
                  Hech nima topilmadi.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Account;
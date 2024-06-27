import logo from "../assets/logo.svg";
import React from "react";
import "../style/SuccessPage.css";

//props
const SuccessPage = ({ successOrder }) => {
  return (
    <div className="success-page">
      <header>
        <img src={logo} alt="logo" />
      </header>

      <h2 className="lezzet">lezzetin yolda </h2>
      <h1 className="siparis">SİPARİŞİNİZ ALINDI</h1>
      <hr />
      <div className="bilgi-baslik">
        <p className="bilgi-p1">Position Absolute Acı Pizza</p>
        </div>
        <div className="bilgi-icerik">
        <p className="bilgi-p2">
          Boyut: <strong>{successOrder.boyut}</strong>
        </p>
        <p className="bilgi-p3">
          Hamur: <strong>{successOrder.hamurTipi}</strong>
        </p>
        <p className="bilgi-p4">
          Ek Malzemeler: <strong>{successOrder.toppings.join(" , ")}</strong>
        </p>
      </div>

      <div className="sonuc">
        <p className="sonuc-p1">Sipariş Toplamı</p>
        <p className="sonuc-p2">Seçimler 
        <span className="sonuc-p4">{successOrder.toppings.length * 5} ₺ </span></p>
        <p className="sonuc-p3">Toplam <span className="sonuc-p5">{successOrder.total}.00₺</span></p>
      </div>
    </div>
  );
};
export default SuccessPage;

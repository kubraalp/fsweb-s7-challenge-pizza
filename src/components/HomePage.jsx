import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../style/HomePage.css";

import icon1 from "../assets/icon/1.svg";
import icon2 from "../assets/icon/2.svg";
import icon3 from "../assets/icon/3.svg";
import icon4 from "../assets/icon/4.svg";
import icon5 from "../assets/icon/5.svg";
import icon6 from "../assets/icon/6.svg";

const HomePage = () => {
  const icons = [
    { src: icon1, name: "YENİ! Kore" },
    { src: icon2, name: "Pizza" },
    { src: icon3, name: "Burger" },
    { src: icon4, name: "Kızartmalar" },
    { src: icon5, name: "Fast Food" },
    { src: icon6, name: "Gazlı İçecek" },
  ];
  return (
    <>
      <div className="home-background">
        <div className="home-logo">
          <img src={logo} alt={logo} />
          <div>
            <div className="home-content ">
              <p className="home-text1">
                KOD ACIKTIRIR
                <br />
                PİZZA, DOYURUR
              </p>

              <Link to="/OrderPage" className="home-button" id="order-pizza">
                ACIKTIM
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-container">
        {icons.map((icon, index) => (
          <div key={index} className="icon-box">
            <img src={icon.src} alt={icon.name} className="icon" />
            <p className="icon-name">{icon.name}</p>
          </div>
        ))}
      </div>
      <div className="reklam">
        <div className="ozel-lezzetus">
          <p className="lezzetus-baslik">Özel<br/> Lezzetus</p>
          <p className="lezzetus-icerik">Position:Absolute Acı Burger</p>
          <button className="lezzetus-button">SİPARİŞ VER</button>
        </div>

        <div className="hackathlon">
          <p>Hackathlon <br/> Burger Menü</p>
          <button className="hackathlon-button">SİPARİŞ VER</button>
        </div>

        <div className="kurye">
          <p>Çoooook hızlı npm gibi kurye </p>
          <button className="kurye-button">SİPARİŞ VER</button>
        </div>
      </div>
    </>
  );
};
export default HomePage;

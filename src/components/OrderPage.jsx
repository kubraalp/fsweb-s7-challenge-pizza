import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/OrderPage.css";
import logo from "../assets/logo.svg";
import { Nav, NavLink } from "reactstrap";
import { useHistory } from "react-router-dom";

const OrderPage = ({ setSuccessOrder }) => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
  });

  //Hata Mesajlari
  // const errorMessages = {
  //   malzemeler : "* En az 4, en çok 10 tane malzeme seçmelisiniz!",
  //   isim: "* İsim en az 3 karakter içermelidir.",
  //   boyut: "* Lütfen pizza boyutunu seçin.",
  //   hamur: "* Lütfen hamur kalınlığı seçin.",
  // }

  const [submitting, setSubmitting] = useState(false);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  const pizzaBasePrice = 85.5;
  const extraToppingPrice = 5;
  const pizzaBoyut = ["Küçük", "Orta", "Büyük"];

  //Pizza Malzemeleri
  const pizzaToppings = [
    { name: "Pepperoni", value: "Pepperoni" },
    { name: "Sosis", value: "Sosis" },
    { name: "Kanada Jambonu", value: "Kanada Jambonu" },
    { name: "Tavuk Izgara", value: "Tavuk Izgara" },
    { name: "Soğan", value: "Soğan" },
    { name: "Domates", value: "Domates" },
    { name: "Mısır", value: "Mısır" },
    { name: "Sucuk", value: "Sucuk" },
    { name: "Jalepeno", value: "Jalepeno" },
    { name: "Sarımsak", value: "Sarımsak" },
    { name: "Biber", value: "Biber" },
    { name: "Ananas", value: "Ananas" },
    { name: "Kabak", value: "Kabak" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      let newToppings = checked
        ? [...prevFormData.toppings, value]
        : prevFormData.toppings.filter((topping) => topping !== value);
      return {
        ...prevFormData,
        toppings: newToppings,
      };
    });
  };

  const handleCounterChange = (increment) => {
    setCounter((prevCounter) => {
      const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
      return newCounter > 0 ? newCounter : 1;
    });
  };

  const handleSubmit = async (event) => {
    const sonOrder = {
      ...formData,
      total,
      counter,
    };
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        sonOrder
      );
      setSuccessOrder(sonOrder);
      history.push("/SuccessPage");
      console.log("Yanıt:", response.data);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid = () => {
    const { isim, boyut, hamurTipi, toppings } = formData;
    return isim && boyut && hamurTipi && toppings.length >= 4 && !submitting;
  };

  const totalToppingPrice = formData.toppings.length * extraToppingPrice;
  const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;
  useEffect(() => {
    setTotal(totalPrice);
  }, [counter, formData.toppings]);

  return (
    <>
      <div className="logo">
        <img src={logo} alt={logo} />

        <div className="ust-link">
          <Nav className="nav-ust">
            <NavLink className="anasayfa-link" href="/">
              Anasayfa - 
            </NavLink>

            {/* <p className="kisa-cizgi"> - </p> */}

            <NavLink className="olustur-link" href="/OrderPage">
              Sipariş Oluştur
            </NavLink>
          </Nav>
        </div>
      </div>
      <div className="order-container">
        <main>
          <section className="pizza-section">
            
              <h2 className="baslik-pizza">Position Absolute Acı Pizza</h2>
             
              <div className="order-price">
                <p className="fiyat-text">{pizzaBasePrice}₺</p>

                <p className="order-score">4.9</p>
                <p className="order-yorum">(200)</p>
              </div>
              
            
            <p className="aciklama-text">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
            <div className="formAlani">
              <form onSubmit={handleSubmit}>
                <div className="isim-alani">
                  <label>
                    İsim:
                    <input
                      type="text"
                      name="isim"
                      value={formData.isim}
                      onChange={handleInputChange}
                      minLength={3}
                      required
                      disabled={submitting}
                    />
                  </label>
                </div>
                <br />
                <div className="boyut-hamur">
                  <div className="form-size">
                    <label>
                      <div className="form-boyutsec">
                        Boyut Seç:<span style={{ color: "red" }}>*</span>
                        <br />
                      </div>
                      <div className="boyut-sml">
                        {pizzaBoyut.map((size) => (
                          <label key={size}>
                            <input
                              type="radio"
                              name="boyut"
                              value={size}
                              onChange={handleInputChange}
                              required
                              checked={formData.boyut === size}
                              disabled={submitting}
                            />
                            {size.charAt(0).toUpperCase() + size.slice(1)}
                          </label>
                        ))}
                      </div>
                    </label>
                  </div>
                  <div>
                    <div className="form-hamur">
                      <label>
                        <div className="form-hamursec">
                          Hamur Seç:<span style={{ color: "red" }}>*</span>
                          <br />
                        </div>
                        <div className="hamur-tip">
                          <select
                            name="hamurTipi"
                            value={formData.hamurTipi}
                            onChange={handleInputChange}
                            required
                            disabled={submitting}
                          >
                            <option value="">Hamur Kalınlığı</option>
                            <option value="ince">İnce</option>
                            <option value="standart">Standart</option>
                            <option value="kalin">Kalın</option>
                          </select>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <div className="form-ekmalzemeler">
                  <p className="ek-yazi">Ek Malzemeler</p>
                  <p className="malzeme-yazi">
                    En fazla 10 malzeme seçebilirsiniz. 5₺
                  </p>
                </div>
                <div className="malzeme-sec">
                  {pizzaToppings.map((topping) => (
                    <label key={topping.id} className="checkbox-item">
                      <input
                        type="checkbox"
                        name="toppings"
                        value={topping.name}
                        onChange={handleCheckboxChange}
                        checked={formData.toppings.includes(topping.name)}
                        disabled={submitting}
                      />
                      {topping.name}
                    </label>
                  ))}
                </div>
                <br />
                <div className="siparis-notu">
                <p className="not-baslik"> Sipariş Notu </p> 
                  <div className="not">
                    <textarea
                      name="extraNotes"
                      value={formData.extraNotes}
                      onChange={handleInputChange}
                      disabled={submitting}
                      placeholder="Siparişine eklemek istediğin bir not var mı?"
                    ></textarea>
                  </div>
                </div>
                <div className="cizgi">
                  <hr />
                </div>
                <div className="son-bolum">
                  <div className="arttir-eksilt">
                <div className="eksilt">
                  <button
                    type="button"
                    onClick={() => handleCounterChange(false)}
                  >
                    -
                  </button>
                </div>
                <div className="order-summary">
                  {counter}
                  </div>
                  <div className="arttir">
                    <button
                      type="button"
                      onClick={() => handleCounterChange(true)}
                    >
                      +
                    </button>
                  </div>
                  </div>
                  
                  <div className="order-sonuc">
                    <p className="order-sonuc-p1">Sipariş Toplamı</p>
                    <p className="order-sonuc-p2">Seçimler <span className="order-sonuc-p4">{totalToppingPrice} ₺ </span> </p>
                    <p className="order-sonuc-p3">Toplam <span className="order-sonuc-p5">{totalPrice} ₺ </span></p>
                    <div className="form-button"><button type="submit" disabled={!isFormValid()}>
                      SİPARİŞ VER
                    </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default OrderPage;

import React, { useState } from "react";
function OrderForm() {
  const [pizzaSize, setPizzaSize] = useState("");
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <div className="content">
        <h2>Pizza Boyutu Seçimi</h2>
      </div>
    </div>
  );
}

export default OrderForm;

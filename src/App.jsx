import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import OrderPage from "./components/OrderPage";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {
  const [successOrder, setSuccessOrder] = useState(null);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/OrderPage">
          <OrderPage setSuccessOrder = {setSuccessOrder} />
        </Route>
        <Route path="/SuccessPage">
          <SuccessPage   successOrder = {successOrder} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

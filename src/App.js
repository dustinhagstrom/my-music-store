import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { ShoppingCartContextProvider } from "./context/shoppingCartContext";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <ShoppingCartContextProvider>
      <Router>
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;

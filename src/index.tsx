import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextsProvider from "./contexts/auth/AuthContextsProvider";
import Toastify from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsContextProvider from "./contexts/hero/HeroContextProvider";
import CartContextProvideer from "./contexts/cart/CartContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CartContextProvideer>
      <ProductsContextProvider>
        <AuthContextsProvider>
          <App />
          <Toastify />
        </AuthContextsProvider>
      </ProductsContextProvider>
    </CartContextProvideer>
  </BrowserRouter>
);

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports files
import GlobalStyles from "./styles/global";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import { CartProvider } from "./hooks/useCart";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  );
}

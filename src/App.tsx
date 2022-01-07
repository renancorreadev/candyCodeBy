import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports files
import GlobalStyles from "./styles/global";
import { Routes } from "./routes";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports files
import GlobalStyles from "./styles/global";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;

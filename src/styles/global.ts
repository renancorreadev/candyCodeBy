import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

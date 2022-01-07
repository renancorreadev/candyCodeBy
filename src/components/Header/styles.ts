import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background-color: #3b75f9;
  padding: 20px 0 30px 0;
  width: 100%;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity 0.2s;
    color: #fff;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-size: 24px;
    margin-left: 20px;

    &:hover {
      opacity: 0.7;
    }
  }

  h2 {
    font-size: 1.5em;
    color: #fff;
  }

  .nav-link {
    position: fixed;
    right: 40rem;
    margin-right: 30%;
  }

  @media (max-width: 1300px) {
    .nav-link {
      right: 10rem;
      margin-right: 50%;
    }
  }
  @media (max-width: 720px) {
    .nav-link {
      left: 8rem;
      margin-left: 10%;
    }
  }
`;

export const LogoImg = styled.img`
  width: 20%;
  height: auto;
`;

export const MyCart = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  margin-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;

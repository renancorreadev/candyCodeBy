import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { MdShoppingBasket } from "react-icons/md";

import { Container, LogoImg, Cart } from "./styles";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <LogoImg src={Logo} alt="Logo" />
      </Link>

      <Link to="/">
        <span className="nav-link">Home</span>
      </Link>

      {/* Carrinho de compras */}
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size"></span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

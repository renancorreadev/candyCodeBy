import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import { Container, LogoImg, MyCart } from "./styles";
import { useCart } from "../../hooks/useCart";
import Logo from "../../assets/logo.png";

import { Modal } from "../Modal";
import { useModal } from "../../hooks/useModal";
import { Cart } from "../../pages/Cart";

export function Header() {
  const { isShown, toggle } = useModal();
  const { cart } = useCart();
  const cartSize = cart.length;
  const content = (
    <React.Fragment>
      {" "}
      <Cart />
    </React.Fragment>
  );

  return (
    <Container>
      {" "}
      <Link to="/">
        {" "}
        <LogoImg src={Logo} alt="Logo" />{" "}
      </Link>{" "}
      <Link to="/">
        {" "}
        <span className="nav-link">Home</span>{" "}
      </Link>{" "}
      <React.Fragment>
        <MyCart to="" onClick={toggle}>
          {" "}
          <strong>Meu carrinho</strong>
          <div>
            {" "}
            <span data-testid="cart-size">
              {" "}
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}{" "}
            </span>{" "}
          </div>{" "}
          <MdShoppingBasket size={36} color="#fff" />{" "}
        </MyCart>

        <Modal
          headerText="Meu Carrinho"
          isShown={isShown}
          hide={toggle}
          modalContent={content}
        />
      </React.Fragment>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total, FreeFreight } from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const [freeFreight, setFreeFreight] = useState(false);

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price / 100),
    subTotal: formatPrice((product.price * product.quantity) / 100),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + (product.price * product.quantity) / 100;
    }, 0)
  );

  const totalPrice = cart.reduce((sumTotal, product) => {
    return sumTotal + (product.price * product.quantity) / 100;
  }, 0);

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      quantity: product.quantity + 1,
    });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      quantity: product.quantity - 1,
    });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handleConfirm() {
    alert("Pedido realizado com sucesso!");
  }

  useEffect(() => {
    if (totalPrice >= 10) {
      setFreeFreight(true);
    } else {
      setFreeFreight(false);
    }
  }, [totalPrice]);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product imageUrl" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <tr key={product.id} data-testid="product">
              <td>
                <img src={product.imageUrl} alt={product.name} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.quantity <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.quantity}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      {freeFreight ? (
        <FreeFreight>Parabéns, sua compra tem frete grátis!</FreeFreight>
      ) : (
        ""
      )}
      <footer>
        <button type="button" onClick={() => handleConfirm()}>
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

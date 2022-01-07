import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product } from "../../src/@types/types";

import { items as productsServed } from "../server/server.json";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@CandyStore:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      if (process.env.NODE_ENV !== "production") {
        const productExistsInCart = cart.find(({ id }) => id === productId);

        if (!productExistsInCart) {
          const { data: product } = await api.get<Product>(
            `/items/${productId}`
          );

          if (product.quantity > 0) {
            setCart([...cart, { ...product, quantity: 1 }]);
            localStorage.setItem(
              "@CandyStore:cart",
              JSON.stringify([...cart, { ...product, amount: 1 }])
            );
            return;
          }
        }

        if (productExistsInCart) {
          const { data: stock } = await api.get<Product>(`/items/${productId}`);

          if (stock.quantity > productExistsInCart.quantity) {
            const cartUpdated = cart.map((product) =>
              product.id === productId
                ? {
                    ...product,
                    amount: Number(product.quantity) + 1,
                  }
                : product
            );

            setCart(cartUpdated);

            localStorage.setItem(
              "@CandyStore:cart",
              JSON.stringify(cartUpdated)
            );
            return;
          } else {
            toast.error("Quantidade solicitada fora de estoque");
          }
        }
      } else {
        const productExistsInCart = cart.find(({ id }) => id === productId);

        if (!productExistsInCart) {
          const productFinded = productsServed.find(
            ({ id }) => id === productId
          );
          const stockFinded = productsServed.find(({ id }) => id === productId);

          if (stockFinded && stockFinded.amount > 0 && productFinded) {
            setCart([...cart, { ...productFinded, quantity: 1 }]);
            localStorage.setItem(
              "@CandyStore:cart",
              JSON.stringify([...cart, { ...productFinded, amount: 1 }])
            );
            return;
          }
        }

        if (productExistsInCart) {
          const stockFinded = productsServed.find(({ id }) => id === productId);

          if (
            stockFinded &&
            stockFinded.amount > productExistsInCart.quantity
          ) {
            const cartUpdated = cart.map((product) =>
              product.id === productId
                ? {
                    ...product,
                    amount: Number(product.quantity) + 1,
                  }
                : product
            );

            setCart(cartUpdated);

            localStorage.setItem(
              "@CandyStore:cart",
              JSON.stringify(cartUpdated)
            );
            return;
          } else {
            toast.error("Quantidade solicitada fora de estoque");
          }
        }
      }
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      const indexProduct = cart.some(({ id }) => id === productId);

      if (!indexProduct) {
        toast.error("Erro na remoção do produto");
        return;
      }

      const cartUpdated = cart.filter(({ id }) => id !== productId);
      setCart(cartUpdated);
      localStorage.setItem("@CandyStore:cart", JSON.stringify(cartUpdated));
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (process.env.NODE_ENV !== "production") {
        if (amount < 1) {
          toast.error("Erro na alteração de quantidade do produto");
          return;
        }

        const response = await api.get(`/items/${productId}`);
        const productAmount = response.data.amount;
        const stockIsFree = amount > productAmount;

        if (stockIsFree) {
          toast.error("Quantidade solicitada fora de estoque");
          return;
        }

        const productExists = cart.some(
          (cartProduct) => cartProduct.id === productId
        );
        if (!productExists) {
          toast.error("Erro na alteração de quantidade do produto");
          return;
        }

        const updatedCart = cart.map((cartItem) =>
          cartItem.id === productId
            ? {
                ...cartItem,
                amount: amount,
              }
            : cartItem
        );
        setCart(updatedCart);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(updatedCart));
      } else {
        if (amount < 1) {
          toast.error("Erro na alteração de quantidade do produto");
          return;
        }

        const productStocked = productsServed.find(
          ({ id }) => id === productId
        );

        if (!productStocked) {
          toast.error("Erro na alteração de quantidade do produto, ashuf");
          return;
        }

        const productAmount = productStocked.amount;
        const stockIsFree = amount > productAmount;

        if (stockIsFree) {
          toast.error("Quantidade solicitada fora de estoque");
          return;
        }

        const productExists = cart.some(
          (cartProduct) => cartProduct.id === productId
        );
        if (!productExists) {
          toast.error("Erro na alteração de quantidade do produto");
          return;
        }

        const updatedCart = cart.map((cartItem) =>
          cartItem.id === productId
            ? {
                ...cartItem,
                amount: amount,
              }
            : cartItem
        );
        setCart(updatedCart);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(updatedCart));
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}

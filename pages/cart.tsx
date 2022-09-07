import type { GetServerSideProps, NextPage } from "next";

import { Cart, getCartWithProducts } from "@lib/products";

import CartScene from "@scenes/Cart";

interface CartProps {
  cart: Cart;
}

const CartPage: NextPage<CartProps> = ({ cart }) => {
  return <CartScene cart={cart} />;
};

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  const cart = await getCartWithProducts();

  return {
    props: {
      cart,
    },
  };
};

export default CartPage;

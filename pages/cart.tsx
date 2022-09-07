import type { GetServerSideProps, NextPage } from "next";

import { Cart, getCartWithProducts } from "@lib/products";

import CartScene from "@scenes/Cart";

interface CartProps {
  cart: Cart;
}

const CartPage: NextPage<CartProps> = ({ cart }) => {
  return <CartScene cart={cart} />;
};

export const getServerSideProps: GetServerSideProps<CartProps> = async (
  context
) => {
  const cart = await getCartWithProducts(
    Number(context?.query?.cartNumber || 1)
  );

  return {
    props: {
      cart,
    },
  };
};

export default CartPage;

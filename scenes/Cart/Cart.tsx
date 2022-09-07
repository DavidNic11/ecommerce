import type { Cart } from "@lib/products";

import Image from "next/image";

import styles from "./Cart.module.css";

interface CartProps {
  cart: Cart;
}

const CartScene = ({ cart }: CartProps) => {
  return (
    <div className={styles.container}>
      <h1>Cart</h1>
      <div>
        {cart.products.map((product) => (
          <div key={product.id} className={styles.row}>
            <Image
              src={product.image}
              alt={product.title}
              width={50}
              height={50}
            />
            <div className={styles.information}>
              <h2>{product.title}</h2>
            </div>
            <p className={styles.quantity}>Amount: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartScene;

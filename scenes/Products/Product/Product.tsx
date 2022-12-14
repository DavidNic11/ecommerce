import type { Product } from "@lib/products";

import Image from "next/image";

import Grid from "@components/Grid";

import styles from "./Product.module.css";

interface ProductProps {
  product: Product;
}

const ProductScene = ({ product }: ProductProps) => {
  return (
    <>
      <h1>{product.title}</h1>
      <Grid>
        <div className={styles.description}>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <div>
            {product.rating.rate} out of 5 stars ({product.rating.count})
          </div>
        </div>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={500}
        />
      </Grid>
    </>
  );
};

export default ProductScene;

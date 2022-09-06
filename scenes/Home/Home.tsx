import type { Product } from "@lib/products";

import Grid from "@components/Grid";
import ProductGridDisplay from "./components/ProductGridDisplay";

import styles from "./Home.module.css";

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <h1 className={styles.title}>Fake Store</h1>
      <p className={styles.description}>
        Checkout our newest products! These have just recently been added and we
        think you will love them!
      </p>
      <Grid>
        {products.map(({ id, title, price, image }) => {
          return (
            <ProductGridDisplay
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Home;

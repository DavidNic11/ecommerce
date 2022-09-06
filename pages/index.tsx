import type { Product } from "@lib/products";
import type { GetStaticProps, NextPage } from "next";

import { getAllProducts } from "@lib/products";
import Home from "@scenes/Home";

interface LandingProps {
  products: Product[];
}

const HomePage: NextPage<LandingProps> = ({ products }) => {
  return <Home products={products} />;
};

export const getStaticProps: GetStaticProps<LandingProps> = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};

export default HomePage;

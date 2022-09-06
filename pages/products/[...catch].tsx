import { getAllProductIds, Product } from "@lib/products";
import { getAllProducts } from "@lib/products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface NotFoundProps {
  recommendedProducts: Product[];
}

const ProductNotFound: NextPage<NotFoundProps> = ({ recommendedProducts }) => {
  return (
    <div>
      <h1>Oh No! Could not find that product</h1>
    </div>
  );
};

export default ProductNotFound;

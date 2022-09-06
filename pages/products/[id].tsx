import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Product } from "@lib/products";

import { getAllProductIds, getProductById } from "@lib/products";
import ProductScene from "@scenes/Products";
import Meta from "@components/Meta";

interface ProductProps {
  product: Product;
}

const ProductPage: NextPage<ProductProps> = ({ product }) => {
  return (
    <>
      <Meta title={product.title} description={product.description} />
      <ProductScene product={product} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProductIds();

  const paths = products.map((id) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: Product["id"] }
> = async ({ params }) => {
  if (!params) throw new Error("No id provided");

  const product = await getProductById(params.id);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;

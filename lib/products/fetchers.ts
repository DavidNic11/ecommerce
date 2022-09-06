import type { Product } from "./types";

export const getAllProducts = async (): Promise<Product[]> => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const getAllProductIds = async (): Promise<Array<Product["id"]>> => {
  const products = await getAllProducts();

  return products.map(({ id }) => id);
};

export const getProductById = async (id: Product["id"]) => {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
};

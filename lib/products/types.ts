export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface BaseCart {
  id: string;
  userId: string;
  date: Date;
}
export interface CartSummary extends BaseCart {
  products: { productId: Product["id"]; quantity: number }[];
}

export interface Cart extends BaseCart {
  products: Array<{ quantity: number } & Product>;
}

import type { Product } from "@lib/products";

import Image from "next/image";
import Link from "next/link";

import styles from "./ProductGridDisplay.module.css";

interface ProductGridDisplayProps {
  id: Product["id"];
  image: string;
  title: string;
  price: number;
}

const MAX_TITLE_LENGTH = 30;

const shortenTitle = (title: string) =>
  title.length > 50 ? title.slice(0, MAX_TITLE_LENGTH) + "..." : title;

const ProductGridDisplay = ({
  id,
  image,
  title,
  price,
}: ProductGridDisplayProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.card}>
        <Image src={image} alt={title} width={100} height={150} />
        <h2>{shortenTitle(title)}</h2>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default ProductGridDisplay;

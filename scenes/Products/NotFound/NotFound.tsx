import Link from "next/link";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <h1>Oh No!</h1>
      <h2>Product Not Found!</h2>
      <p>
        But do not worry! There are plenty of other products to look at back{" "}
        <a className={styles.homeLink}>
          <Link href="/">home</Link>
        </a>
      </p>
    </div>
  );
};

export default NotFound;

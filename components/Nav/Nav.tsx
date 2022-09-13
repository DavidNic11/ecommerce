import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Image src="/bitovi-red.png" alt="Vercel Logo" width={100} height={30} />
      <ul className={styles.navList}>
        <li className={styles.link}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/user">
            <a>User</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

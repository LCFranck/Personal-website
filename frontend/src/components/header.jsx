import Link from "next/link";
import styles from "../styles/Header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.links}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About me</Link> |{" "}
        <Link href="/gallery">Gallery</Link>|{" "}
        <Link href="/tv">TV</Link>
        <Link href="/countdown">countdown</Link>
      </nav>
    </header>
  );
};

export default Header;

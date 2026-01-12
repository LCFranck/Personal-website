import Link from "next/link";
import styles from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.text}> © 2026 Cassandra Franck </p>
        <br/>
           <a href="mailto:cassandra.franck@gmail.com" >
            Contact Me
          </a> 
           
    </footer>
  );
};

export default Footer;

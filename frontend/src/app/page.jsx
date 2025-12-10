import Image from "next/image";
import Link from "next/link";
import FlipPhoneImage from "@/components/FlipPhoneImage";
import MainBox from "@/components/MainBox";

import styles from "../styles/MainBox.module.css";


export default function Home() {
  return (
    <div> 
      <MainBox> 
        <h1>Welcome to my personal website!</h1>
        <br/>
        <p>This is a portfolio and blog site where I share my projects and thoughts.</p>
          
        <div className={styles.buttonContainer}>
          <Link href="/gallery" className={styles.button}>
            <FlipPhoneImage />
            <span>Gallery</span>
          </Link>
          <a href="cassandra.franck@gmail.com" className={styles.button}>
            Contact Me
          </a>
        </div>
      </MainBox>  
    </div>
      
  );
}

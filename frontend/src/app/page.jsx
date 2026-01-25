import Image from "next/image";
import Link from "next/link";
//import FlipPhoneImage from "../components/FlipPhoneImage.jsx";
import MainBox from "../components/MainBox";
import {Links} from "../components/Links";


import styles from "../styles/MainBox.module.css";


export default function Home() {
  return (
    <div>
      <MainBox>
        <h1 >Welcome to my personal website!</h1>
        <br/>
        <p >This is my personal website made for fun and some useful small projects!</p>
        <p >If you want, you can register/log in to add a note to my note page!</p>
        <p >Unfortunately, due to being deployed on Render, everything is very slow to load. It might take a while for images, notes, and user info to load</p>

        <div className={styles.buttonContainer}>
          <Link href="/gallery" className={styles.button}>

            <span>Gallery</span>
          </Link>
          <a href="mailto:cassandra.franck@gmail.com" className={styles.button}>
            Contact Me
          </a>
          <Link href="/notes" className={styles.button}>

            <span>Notes</span>
          </Link>

        </div>
        <Links/>
      </MainBox>
    </div>

  );
}

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
        <div className={styles.home}>
          <h1 >Welcome to my personal website!</h1>
          <br/>
          <div className={styles.textBox}>
            <p >Hello, my name is cassandra Franck and welcome to my website!</p>
            <p >If you want, you can register/log in to add a note to my note page!</p>



          </div>
          <a className={styles.link}
            href="https://github.com/LCFranck/Personal-website"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
        Click here to view the github repo for this website
          </a>
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
        </div>
      </MainBox>
    </div>

  );
}

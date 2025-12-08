import Image from "next/image";
import FlipPhone from "../assets/FlipPhone.png";

import styles from "../styles/MainBox.module.css";


export default function FlipPhoneImage() {
  return (
    <Image
      className={styles.image}
      src={FlipPhone}
      alt="Flip Phone"
    />
  );
}

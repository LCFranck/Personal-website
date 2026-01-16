import Image from "next/image";
import FlipPhone from "../assets/FlipPhone.png";


import styles from "../styles/MainBox.module.css";


const FlipPhoneImage = () =>{
  return (
    <Image
      className={styles.image}
      src={FlipPhone}
      alt="Flip Phone"
    />
  );
}
export default FlipPhoneImage;

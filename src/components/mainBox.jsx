import styles from "../styles/MainBox.module.css";


const MainBox = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default MainBox;
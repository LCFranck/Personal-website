import styles from "../styles/MainBox.module.css";


const MainBox = ({ children }) => {
  return (
    <div>
      <div className={styles.box}>{children}</div>
    </div>
  );
};

export default MainBox;

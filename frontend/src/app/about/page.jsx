import GameStats from "../../components/GameStats";
import MainBox from "../../components/MainBox";
import styles from "../../styles/About.module.css";
const AboutPage = () =>{
  return (
    <div>
      <MainBox>
        <div className={styles.box}></div>
        {/*  <h1>Welcome to my about me section!</h1>
        <p>My name is Cassandra Franck and I am a master's student in computer science.</p>
        <p>You can contact me at cassandra.franck@gmail.com</p>
        <GameStats></GameStats> */}
        <ul className={styles.list}>

          <li>I love coding</li>
          <li>I love fullstack development</li>
          <li>I love going to the gym</li>
          <li>I love kickboxing</li>
          <li>I love ceramics</li>
          <li>I love painting</li>
          <li>I love gaming</li>
        </ul>
      </MainBox>

    </div>

  );
}
export default AboutPage

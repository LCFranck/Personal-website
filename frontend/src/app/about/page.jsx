import GameStats from "../../components/GameStats";
import MainBox from "../../components/MainBox";
import styles from "../../styles/About.module.css";
import {Links} from "../../components/Links";


const AboutPage = () => {
  return (
    <div>
      <MainBox>
        <h1>About Me  </h1>
        <div className={styles.aboutContainer}>
          <div className={styles.leftBox}>
            <p className={styles.textBox}>
              <h3>Who am i?</h3>
                I&apos;m a computer science master&apos;s student with a strong interest in software development, full-stack systems, and how different components work together to form reliable, useful solutions. I enjoy building things end-to-end, from designing interfaces to implementing backend logic and integrations and I&apos;m always curious about new tools and technologies.
                Outside of coding, I stay active through kickboxing, running, and the gym, and I enjoy more creative outlets like ceramics and painting. I&apos;m motivated by continuous improvement, whether that means refining a piece of code, learning a new framework, or challenging myself in completely new ways.
            </p>

            <ul className={styles.list}>

              <h3>Currently Learning</h3>
              <li> Angular</li>
              <li> Modern two factor authentication (Master&apos;s thesis)</li>
              <li> More fullstack development tools</li>
              <li> Expanding on CSS skills</li>
              <li> .NET </li>
              <li> better DevOps practices </li>
              <li> PostGreSQL </li>
              <li> And more!</li>
            </ul>
            <p className={styles.textBox}>
              <h3>Links</h3>
              <Links/>
            </p>
          </div>
          <div className={styles.rightbox}>
            <ul className={styles.list}>
              <h3>Skills</h3>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>C++</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>Python</li>
              <li>SQL</li>
              <li>AWS</li>
              <li>Git</li>
              <li>CI/CD pipelines</li>
              <li>SnowFlake</li>
              <li>ETL pipelines</li>
              <li>Cermaics</li>
              <li>And more!</li>
              <li>...</li>
            </ul>
            <ul className={styles.list}>

              <h3>Hobbies</h3>
              <li>I love coding</li>
              <li>I love fullstack development</li>
              <li>I love going to the gym</li>
              <li>I love kickboxing</li>
              <li>I love ceramics</li>
              <li>I love painting</li>
              <li>I love gaming</li>
            </ul>


          </div>

        </div>

      </MainBox>

    </div>

  );
}
export default AboutPage

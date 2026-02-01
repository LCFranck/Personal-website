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
            <div className={styles.textBox}>
              <h3>Who am i?</h3>
              <p>
  I&apos;m a computer science master&apos;s student with a strong interest in building reliable software systems and understanding how different components work together end to end. My interests span full-stack development, backend systems, cloud-based solutions, data pipelines, and security-conscious design.
                <br /><br />
  I enjoy working close to both development and infrastructure, designing interfaces, implementing backend logic, integrating APIs, and thinking about how data, automation, and deployment fit together in real systems. I&apos;m naturally curious and enjoy learning new tools, technologies, and patterns as part of building practical solutions.
                <br /><br />
  Outside of coding, I stay active through running and the gym, and I enjoy creative outlets like ceramics and painting. I&apos;m motivated by continuous improvement, whether that means refining a piece of code, learning a new framework, or challenging myself in completely new ways.
              </p>
            </div>
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
            <div className={styles.textBox}>
              <h3>Links</h3>
              <Links/>
            </div>
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
              <h3>Projects</h3>
              <li>This website</li>
              <li>ETL pipeline in SnowFlake for PCOS diagnosis</li>
              <li>Discord Bot, utilizing the Groq API</li>
              <li>Bird VS drone image classification</li>
              <li>Basic gallery website in Angular (ongoing)</li>
              <li>And more! All can be found on my GitHub</li>
            </ul>
            <ul className={styles.list}>
              <h3>Hobbies</h3>
              <li>I love coding</li>
              <li>I love fullstack development</li>
              <li>I love going to the gym</li>
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

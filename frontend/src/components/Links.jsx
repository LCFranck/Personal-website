import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "../styles/About.module.css";

export const Links = () => {
  return(
    <div className={styles.iconContainer}>
      <a className={styles.icon}
        href="https://www.linkedin.com/in/cassandra-franck/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={100} />
      </a>

      <a className={styles.icon}
        href="https://github.com/LCFranck"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={100} />
      </a>

      <a className={styles.icon}href="mailto:cassandra.franck@gmail.com" aria-label="Email">
        <FaEnvelope size={100} />
      </a>
    </div>)}

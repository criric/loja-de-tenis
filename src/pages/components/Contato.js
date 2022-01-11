import styles from '../layouts/Contato.module.css'
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrGithub
} from 'react-icons/gr'
function Contato() {
  return (
    <div className={styles.pagina}>
      <h1 className={styles.contato}>Contato </h1>
      <p>Para entrar em contato, acesse nossas redes sociais</p>
      <div className={styles.social}>
        <div className={styles.facebook}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <GrFacebookOption />
          </a>
        </div>
        <div className={styles.insta}>
          <a
            href="https://instagram.com/soarescristian_"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </div>
        <div className={styles.linkedin}>
          <a
            href="https://www.linkedin.com/in/cristian-soares"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption />
          </a>
        </div>
        <div className={styles.github}>
          <a href="https://github.com/criric" target="_blank" rel="noreferrer">
            <GrGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contato

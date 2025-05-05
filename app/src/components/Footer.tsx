import styles from './page.module.css'

import GoToGithub from "@/app/src/components/GoToGithub"

const Footer = () => {
    return(
        <footer className={styles.footer}>
        <GoToGithub />
        <p>Copyright ©Lastword69ANIMA</p>
    </footer>
    )
}

export default Footer;
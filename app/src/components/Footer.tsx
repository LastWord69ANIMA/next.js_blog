import styles from './page.module.css'

import GoToGithub from "@/app/src/components/GoToGithub"

const Footer = () => {
    return(
        <footer className={styles.footer}>
        <GoToGithub />
        <p>Copyright ©Lastword69ANIMA ※著作権はありませんが、一応ここに記録。</p>
    </footer>
    )
}

export default Footer;
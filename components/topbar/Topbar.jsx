import styles from "./topbar.module.scss"

export default function Topbar() {
  return (
    <div className={styles.topbar}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <a href='/#home' className={styles.logo}>cpl.</a>
            </div>
            <div className={styles.right}>
                <ul>
                    <a href="/#intro"><li>01. <span>Intro</span></li></a>
                    <a href="/#projects"><li>02. <span>Featured Projects</span></li></a>
                    <a href="https://resume.io/r/wSh41saKj" target="_blank" className={styles.button + " button"}>Resume</a>
                </ul>
            </div>
        </div>
    </div>
  )
}

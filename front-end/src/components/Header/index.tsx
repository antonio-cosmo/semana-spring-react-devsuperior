import styles from './styles.module.css'
import logo from '../../assets/logo.svg'
export function Header(){
    return(
    <header className={styles.containerHeader}>
        <div className={styles.contentLogoHeader}>
            <img src={logo}/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por @cosmo.sn
            </p>
        </div>
    </header>
    )
}
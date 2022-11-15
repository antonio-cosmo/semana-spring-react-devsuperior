import styles from './styles.module.css'
import iconBtn from '../../assets/icon.svg'
export function Sales(){
    return(
        <tr>
            <td className={styles.show992}>#341</td>
            <td className={styles.show576}>10/11/2022</td>
            <td>Anakin</td>
            <td className={styles.show992}>15</td>
            <td className={styles.show992}>11</td>
            <td>R$ 553000.00</td>
            <td>
                <div className={styles.dsmetaRedBtnContainer}>
                    <div className={styles.dsmetaRedBtn}>
                        <img src={iconBtn} alt=""/>
                    </div>
                </div>
            </td>
        </tr>
    )
}
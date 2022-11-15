import { Sales } from '../Sales'
import styles from './styles.module.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export function TableSales(){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className={styles.dsmetaCard}>
            <h2 className={styles.dsmetaSalesTitle}>Vendas</h2>
            <div>
                <div className={styles.dsmetaFormControlContainer}>
                    <DatePicker 
                        selected={startDate}
                        onChange={(data)=> setStartDate(data!)}
                        className={styles.dsmetaFormControl}
                    />
                    {/* <input className={styles.dsmetaFormControl} type="text" placeholder="01/11/2022"/> */}
                </div>
                <div className={styles.dsmetaFormControlContainer}>
                    <DatePicker 
                        selected={startDate}
                        onChange={(data)=> setStartDate(data!)}
                        className={styles.dsmetaFormControl}
                        dateFormat='dd/MM/yyyy'
                    />
                    {/* <input className={styles.dsmetaFormControl} type="text" placeholder="31/11/2022"/> */}
                </div>
            </div>
            <div>
                <table className={styles.dsmetaSalesTable}>
                    <thead>
                        <tr>
                            <th className={styles.show992}>iD</th>
                            <th className={styles.show576}>Data</th>
                            <th>Vendedor</th>
                            <th className={styles.show992}>Visitas</th>
                            <th className={styles.show992}>Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Sales/>
                        <Sales/>
                        <Sales/>
                        <Sales/>
                        <Sales/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
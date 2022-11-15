import { Header } from "./components/Header";
import styles from './app.module.css'
import { TableSales } from "./components/TableSales";
export function App() {

  return (
    <>
      <Header/>
      <main>
          <section className={styles.sales}>
              <div className={styles.dsmetaContainer}>
                <TableSales/>                
              </div>
          </section>
      </main>
    </>
  )
}


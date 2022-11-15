import { Header } from "./components/Header";
import styles from './app.module.css'
export function App() {

  return (
    <>
      <Header/>
      <main>
          <section className={styles.sales}>
              <div className={styles.dsmetaContainer}>                
              </div>
          </section>
      </main>
    </>
  )
}


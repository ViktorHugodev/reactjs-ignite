import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.mainContent}>
        <div className={styles.info}>
          <span>🚀
            Hey, welcome
            </span>
          <h1>
            News about <br/>the <strong>React</strong> world.
          </h1>
          <p>Get acess to all publications<br/><strong> for $9.90 month</strong></p>
          <SubscribeButton/>
        </div>
        <div className={styles.avatarImg}>
          <img src="/images/avatar.svg" alt="" />
        </div>
      </main>
      
      
    </>
  )
}
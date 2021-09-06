import Head from 'next/head'
import {GetStaticProps} from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './styles.module.scss'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}
export default function Home({product}: HomeProps) {
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
          <p>Get acess to all publications<br/><strong> for {product.amount} month</strong></p>
          <SubscribeButton priceId={product.priceId}/>
        </div>
        <div className={styles.avatarImg}>
          <img src="/images/avatar.svg" alt="" />
        </div>
      </main>
      
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JWheZEKsaEcdv8blMzTx2KF')
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
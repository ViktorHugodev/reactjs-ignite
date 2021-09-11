import Head from 'next/head'

import styles from './styles.module.scss'

export default function Posts(){
  return (
    <>
    <Head>
      <title>Posts | Ig.news</title>
    </Head>
    
    
    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>10 de Setembro de 2021</time>
          <strong>O que é Axie Infinity</strong>
          <p>Axie Infinity é um universo digital de animais de estimação digital e descentralizada (DApp), criada na rede Ethereum, onde as pessoas podem coletar, treinar, criar e lutar contra criaturas fantásticas chamadas Axie, ganhando recompensas reais em dinheiro.</p>
        </a>
        <a href="#">
          <time>10 de Setembro de 2021</time>
          <strong>O que é Axie Infinity</strong>
          <p>Axie Infinity é um universo digital de animais de estimação digital e descentralizada (DApp), criada na rede Ethereum, onde as pessoas podem coletar, treinar, criar e lutar contra criaturas fantásticas chamadas Axie, ganhando recompensas reais em dinheiro.</p>
        </a>
        <a href="#">
          <time>10 de Setembro de 2021</time>
          <strong>O que é Axie Infinity</strong>
          <p>Axie Infinity é um universo digital de animais de estimação digital e descentralizada (DApp), criada na rede Ethereum, onde as pessoas podem coletar, treinar, criar e lutar contra criaturas fantásticas chamadas Axie, ganhando recompensas reais em dinheiro.</p>
        </a>
      </div>
    </main>
    </>
  )
}
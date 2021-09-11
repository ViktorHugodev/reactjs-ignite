import {SingInButton} from '../SingInButton/index'
import styles from './styles.module.scss'

export function Header() {
  
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
        <a className={styles.active} href="/">Home</a>
        <a href="/posts">Posts</a>
      </nav>
      <SingInButton/>
      </div>
    
    </header>
  )
}
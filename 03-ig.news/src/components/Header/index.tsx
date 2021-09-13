import {SingInButton} from '../SingInButton/index'
import styles from './styles.module.scss'
import {ActiveLink} from '../ActiveLink/index'

export function Header() {
  
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
          <a >Posts</a>
        </ActiveLink>
      </nav>
      <SingInButton/>
      </div>
    
    </header>
  )
}
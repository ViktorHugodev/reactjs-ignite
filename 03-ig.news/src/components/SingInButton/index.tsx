import styles from './styles.module.scss'
import { FaGithub} from 'react-icons/fa'
import { FiX} from 'react-icons/fi'


export function SingInButton() {
  const isUserLoggedIn = false
  
  return isUserLoggedIn ? (
    <button className={styles.gitButton}
    type="button">
      <FaGithub color="#84d361"/>
      Victor Hugo
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.gitButton}
    type="button">
      <FaGithub color="#eba417"/>
      Sing in with GitHub
    </button>
  )
}
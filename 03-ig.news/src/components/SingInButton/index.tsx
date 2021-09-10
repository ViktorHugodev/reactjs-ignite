import styles from './styles.module.scss'
import { FaGithub} from 'react-icons/fa'
import { FiX} from 'react-icons/fi'
import {signIn, signOut,useSession} from 'next-auth/client'

export function SingInButton() {
  const [session ] = useSession()

  
  return session ? (
    <button className={styles.gitButton}
    type="button"
    onClick={() => signOut()}>
      <FaGithub color="#84d361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.gitButton}
    type="button"
    onClick={() => signIn('github')}>
      <FaGithub color="#eba417"/>
      Sing in with GitHub
    </button>
  )
}
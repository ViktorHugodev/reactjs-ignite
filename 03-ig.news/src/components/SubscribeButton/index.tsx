import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import { signIn, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton ({priceId}: SubscribeButtonProps) {
  const [session] = useSession()
  
  async function handleSubscribe() {
    if (!session){
      signIn('github')
      return
    }
    
    try {
      const response = await api.post('/subscribe')
      
      const {sessionId} = response.data
      
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({sessionId})
      
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }
  
  return (
    <button 
    className={styles.subscribeButton}
    type="button"
    onClick={handleSubscribe}>
      Subscribe now
      </button>
  )
}
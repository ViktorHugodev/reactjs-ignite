import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext, signOut } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils/withSSRAuht"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me').then(response => console.log(response))
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <h1>Dashboard {user?.email}</h1>
      <Can permissions={['metrics.list']}>
        <div>Metrics</div>
      </Can>
      <button onClick={() => signOut()}>SignOut</button>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')
  return {
    props: {

    }
  }
})
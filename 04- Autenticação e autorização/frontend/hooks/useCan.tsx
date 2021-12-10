import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { userValidatePermissions } from '../utils/userValidatePermissions'

interface useCanProps {
  permissions?: string[]
  roles?: string[]
}


export function useCan({ permissions, roles }: useCanProps) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return false
  }

  const userHasValidPermissions = userValidatePermissions({
    user,
    permissions,
    roles
  })

  return userHasValidPermissions

}
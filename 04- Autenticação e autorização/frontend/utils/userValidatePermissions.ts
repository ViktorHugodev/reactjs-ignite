
interface ValidateUserPermissionsParams {
  user: {
    permissions: string[]
    roles: string[]
  }
  permissions?: string[]
  roles?: string[]
}

export function userValidatePermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams){
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission => {
      // Vai pegar cada permissão e inserir dentro do user
      return user.permissions.includes(permission)
    })
    if (!hasAllPermissions) {
      return false
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user.roles.includes(role)
    })

    if (!hasAllRoles) {
      return false
    }
  }
  return true
}
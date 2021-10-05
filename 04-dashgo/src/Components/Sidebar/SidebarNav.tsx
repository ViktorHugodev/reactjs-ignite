import {Stack} from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import {NavLink} from './NavLink'
import {NavContent} from './NavContent'

export function SidebarNav(){
  return (
    <Stack spacing="12" align="flex-start">
    <NavContent title={"GERAL"}>
      <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
      <NavLink href="/users"icon={RiContactsLine}>Usuários</NavLink>
    </NavContent>
    <NavContent title="AUTOMAÇÃO">
      <NavLink href="/form" icon={RiInputMethodLine}>Formulários</NavLink>
      <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
    </NavContent>
  </Stack>
  )
}
import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../Contexts/SideBarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){
  const {onOpen} = useSidebarDrawer()
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })
  return (
   <Flex w="100%"
   maxWidth={1480}
   h="20"
   mx="auto"
   mt="4"
   px="6"
   align="center">
     
     {!isWideVersion && (
       <IconButton
       mr="2"
       variant="unstyled"
       fontSize="24"
       aria-label="Open navigation"
       onClick={onOpen}
       icon={<Icon as={RiMenuLine}/>}
       />
     )}
     
    <Logo/>
    {isWideVersion && (<SearchBox/>)}
    
    <NotificationsNav/>
    <Profile showProfileData={isWideVersion}/>
   </Flex>
    
  )
}
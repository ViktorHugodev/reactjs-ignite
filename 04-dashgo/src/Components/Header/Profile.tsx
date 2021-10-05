import {Flex, Box, Avatar, Text} from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps) {
  
  return (
    <Flex
      align="center">

        {showProfileData && (
      <Box mr="4"
        textAlign="right">
          <Text>
          Victor
          Hugo</Text>

        <Text
          color="gray.300"
          fontSize="small"
        >viktorhugo.dev@gmail.com</Text>
      </Box>
        )}
      <Avatar src="https://avatars.githubusercontent.com/u/85125378?v=4" name="Victor Hugo" size="md" />
    </Flex>
  )
}
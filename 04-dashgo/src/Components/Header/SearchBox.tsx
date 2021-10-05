import {Flex, Icon, Input} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox(){
  return (
    <Flex
    as="label"
    py="4"
    px="8"
    ml="6"
    maxWidth={400}
    flex="1"
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full">
      <Input
      placeholder="Buscar na plataforma"
      _placeholder={{color: "gray.400"}}
      variant="unstyled"
      px="4"
      mr="4"/>
      <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
  )
}
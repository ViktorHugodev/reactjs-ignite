import Link from "next/link"
import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../Components/Header";
import { Pagination } from "../../Components/Pagination";
import { Sidebar } from "../../Components/Sidebar";



export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Box>
      <Header/>
      
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
       <Sidebar/>
        <Box flex="1"bg="gray.800" borderRadius={8} p="8">
          <Flex  justifyContent="space-between" mb="8" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            
            <Link href="/users/create" passHref>
              <Button as="a"
              colorScheme="pink"
              size="sm"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
                </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Hugo</Text>
                    <Text fontSize="sm" color="gray.300">viktorhugo.dev@gmail.com</Text>
                  </Box>
                </Td>
                
                {isWideVersion && <Td>
                  28 de Set, de 2021
                </Td>}
                
                <Td>
                {isWideVersion && <Button
                  color="gray.800"
                  size="xs"
                  fontSize="smaller"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
              Editar
              </Button>}
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Hugo</Text>
                    <Text fontSize="sm" color="gray.300">viktorhugo.dev@gmail.com</Text>
                  </Box>
                </Td>
                
                {isWideVersion && <Td>
                  28 de Set, de 2021
                </Td>}
                
                <Td>
                {isWideVersion && <Button
                  color="gray.800"
                  size="xs"
                  fontSize="smaller"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
              Editar
              </Button>}
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Hugo</Text>
                    <Text fontSize="sm" color="gray.300">viktorhugo.dev@gmail.com</Text>
                  </Box>
                </Td>
                
                {isWideVersion && <Td>
                  28 de Set, de 2021
                </Td>}
                
                <Td>
               {isWideVersion && <Button
                  color="gray.800"
                  size="xs"
                  fontSize="smaller"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
              Editar
              </Button>}
                </Td>
              </Tr>
            </Tbody>
            
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
    
    
  )  
}
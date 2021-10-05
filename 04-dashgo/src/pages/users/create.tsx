import Link from 'next/link'
import { Box, Flex, Heading, Divider,VStack, SimpleGrid, Button, Stack } from "@chakra-ui/react";
import {Input} from '../../Components/Form/index'
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";


export default function CreateUser(){
  return (
    <Box>
      <Header/>
      
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
       <Sidebar/>
       
        <Box flex="1"bg="gray.800" borderRadius={8} p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar novo usuário</Heading>
          
          <Divider my="6" borderColor="gray.700"/>
          
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" type="name" label="Nome completo"/>
              <Input name="email" type="email" label="E-mail"/>
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha"/>
              <Input name="password_confirmation" type="password" label="Confirme sua senha"/>
            </SimpleGrid>
            
          </VStack>
          
          <Flex mt="8" justify="flex-end">
            <Stack direction="row" spacing="4">
              <Link href="/users/create" passHref><Button as="a"colorScheme="whiteAlpha">Cancelar</Button></Link>
              <Link href="/users" passHref><Button colorScheme="pink">Salvar</Button></Link>
            </Stack>
          </Flex>
          
        </Box>
      </Flex>
    </Box>
    
    
  )  
}
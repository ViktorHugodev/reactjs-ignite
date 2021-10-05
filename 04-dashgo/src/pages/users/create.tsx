import Link from 'next/link'
import { Box, Flex, Heading, Divider,VStack, SimpleGrid, Button, Stack } from "@chakra-ui/react";
import {Input} from '../../Components/Form/index'
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface createUserProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createFormUsers = yup.object({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser(){
  const { register, 
		handleSubmit, 
		formState} = useForm({
			resolver: yupResolver(createFormUsers)
		}) 
    
  const handleCreateUser: SubmitHandler<createUserProps> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  console.log(formState.errors)
  return (
    <Box>
      <Header/>
      
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
       <Sidebar/>
       
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"bg="gray.800"
          borderRadius={8}
          p={["6",
          "8"]}>
          <Heading size="lg" fontWeight="normal">Criar novo usuário</Heading>
          
          <Divider my="6" borderColor="gray.700"/>
          
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              
             <Input
                name="name"
                error={formState.errors.name}
                type="name"
                label="Nome completo"
                {...register("name")}
                />
                
              <Input
                name="email"
                type="email"
                error={formState.errors.email}
                label="E-mail" 
                {...register("email")}
                />
                
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={formState.errors.password}
                name="password"
                type="password"
                label="Senha"
                {...register("password")} />
                
              <Input
                error={formState.errors.password_confirmation}
                name="password_confirmation"
                type="password"
                {...register("password_confirmation")}
                label="Confirme sua senha" />
            </SimpleGrid>
            
          </VStack>
          
          <Flex mt="8" justify="flex-end">
            <Stack direction="row" spacing="4">
              <Link href="/users/create" passHref><Button as="a"colorScheme="whiteAlpha">Cancelar</Button></Link>
              

              <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
   
            </Stack>
          </Flex>
          
        </Box>
      </Flex>
    </Box>
    
    
  )  
}
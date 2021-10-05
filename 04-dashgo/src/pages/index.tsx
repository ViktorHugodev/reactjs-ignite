import { Flex, Button,Stack} from '@chakra-ui/react';
import {useForm, SubmitHandler} from 'react-hook-form'
import {Input as ChakraInput} from '../Components/Form/index'

type SignInFormData = {
	email: string
	password: string
}

export default function Home() {
	const { register, 
		handleSubmit, 
		formState} = useForm() 
	
	const handleSignIn:SubmitHandler<SignInFormData> = async (values) =>{
		await new Promise(resolve => setTimeout(resolve , 2000))
		
		console.log(values)
	}
	console.log(formState.errors)
	
	return (
	<Flex
	  w="100vw"
	  h="100vh"
	  align="center"
	  justify="center"
		>
		<Flex
		  as="form"
		  w="100%"
			
		  maxWidth={360}
		  bg="gray.800"
		  p="8"
		  borderRadius={8}
			flexDir="column"
			onSubmit={handleSubmit(handleSignIn)}>
			<Stack spacing="4">
				
					<ChakraInput type="email "name="email" 
					error={formState.errors.email}
					label="E-mail" {...register("email", {
						required: "E-mail required.",
					})} />
					<ChakraInput 
					error={formState.errors.password}
					type="password" name="password" label="Password" {...register('password')}/>
					
			</Stack>
				
			  <Button
				size="lg"
			  type="submit"
			  colorScheme="facebook"
				isLoading={formState.isSubmitting}
			  mt="6">Entrar</Button>
			</Flex>
	  </Flex>
	);
}

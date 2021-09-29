import { Flex, Button,Stack} from '@chakra-ui/react';

import {Input as ChakraInput} from '../Components/Form/index'
export default function Home() {
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
			flexDir="column">
			<Stack spacing="4">
				
					<ChakraInput type="email "name="email" label="E-mail"/>
					<ChakraInput type="password" name="password" label="Password"/>
					
			</Stack>
				
			  <Button
				size="lg"
			  type="submit"
			  colorScheme="facebook"
			  mt="6">Entrar</Button>
			</Flex>
	  </Flex>
	);
}

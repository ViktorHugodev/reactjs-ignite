import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input as ChakraInput } from '../Components/Form/index'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
	email: string
	password: string
}

const signInFormSchema = yup.object({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória')
})


export default function Home() {
	const { register,
		handleSubmit,
		formState } = useForm({
			resolver: yupResolver(signInFormSchema)
		})

	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise(resolve => setTimeout(resolve, 2000))
		console.log(values)
	}
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

					<ChakraInput type="email " name="email"
						error={formState.errors.email}
						label="E-mail" {...register("email")} />
					<ChakraInput
						error={formState.errors.password}
						type="password" name="password" label="Senha" {...register("password")} />

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

import {FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputPros extends ChakraInputProps {
  name: string
  label?: string
}


export function Input({name, label, ...rest}: InputPros) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="blue.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        {...rest}
        />
    </FormControl>
    
  )
}
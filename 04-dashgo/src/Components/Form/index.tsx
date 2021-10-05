import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputPros extends ChakraInputProps {
  name: string
  label?: string
  error:FieldError
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputPros> = ({name, error,label, ...rest}, ref ) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        {...rest}
        />
    </FormControl>
    
  )
}

export const Input = forwardRef(InputBase)
import { Button } from '@chakra-ui/button'

interface ButtonProps {
  isCurrent?: boolean;
  number: number
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: ButtonProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: 'default'
        }}>
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
      bg="gray.700">
      {number}
    </Button>
  )
}
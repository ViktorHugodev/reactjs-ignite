import { Stack, Box } from "@chakra-ui/react";
import { Buttons } from "./Buttons";

export function Pagination(){
  return (
    <Stack
    direction={["column", "row"]}
    spacing="6"
    mt="8"
    justify="space-between"
    align="center">
      <Box>
        <strong>0</strong> - <strong></strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" 
      spacing="2">
        
      <Buttons isCurrent={true} pageNumber={1}/>
      <Buttons pageNumber={2}/>
      <Buttons pageNumber={3}/>
      <Buttons pageNumber={4}/>
      <Buttons pageNumber={5}/>
      <Buttons pageNumber={6}/>
      </Stack>
    </Stack>
    
    
  )
}
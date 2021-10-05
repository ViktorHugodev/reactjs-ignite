import {Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Header } from "../Components/Header/index";
import dynamic from 'next/dynamic';
import { Sidebar } from '../Components/Sidebar';
import { theme } from '../styles/theme'
import { ApexOptions} from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500],
  },
  grid: {
      show: false,
  },
  dataLabels:{
      enabled: false,
  },
  tooltip: {
      enabled: false,
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: theme.colors.gray[600]
      },
      axisTicks: {
          color: theme.colors.gray[600]
      },
      categories: [
          '2021-09-23T00:00:00.000Z',
          '2021-09-24T00:00:00.000Z',
          '2021-09-25T00:00:00.000Z',
          '2021-09-26T00:00:00.000Z',
          '2021-09-27T00:00:00.000Z',
          '2021-09-28T00:00:00.000Z',
          '2021-09-29T00:00:00.000Z',
      ],
  },
  fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'dark',
          opacityFrom: 0.7
      },
  }

}

const series = [
  {
      name: 'series1',
      data: [20, 65 ,88 , 77, 43,110, 86]
  }
]

export default function Dashboard(){
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar/>
        
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" >
          
          <Box bg="gray.800"
          p={["6","8"]}
          pb="4"
          borderRadius={8}>
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          
          <Box bg="gray.800"
          p={["6","8"]}
          pb="4"
          borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>

          </Box>
        </SimpleGrid>
      </Flex>
      
    </Flex>
  )
}
import {Container} from './styles'

export function Transactions(){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          <tr >
            <td className="title">Desenvolvimento de Website</td>
            <td className="income">R$12.000</td>
            <td>Desevolvimento</td>
            <td>30/08/2021</td>
          </tr>
          
          <tr >
            <td className="title">Compra de notebook</td>
            <td className="outcome">-R$5.000</td>
            <td>Investimentos</td>
            <td>30/08/2021</td>
          </tr>
          
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td>$12.000</td>
            <td>Desevolvimento</td>
            <td>30/08/2021</td>
          </tr>
        </tbody>
      </table>
      
    </Container>
  )
}
import { Summary } from "../Summary"
import { Transactions } from "../TransactionsTable"
import { Container } from "./styles"

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <Transactions/>
    </Container>
  )
}
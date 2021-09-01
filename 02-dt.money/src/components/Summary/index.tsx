import { useTransactions } from '../../Hooks/useTransactions';
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const {transactions} = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      acc.income += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.outcome += transaction.amount
      acc.total -= transaction.amount
    }
    
    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone entrada" />
        </header>
          <strong>
          {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'})
          .format(summary.income)}
          </strong>
      </div>
      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'})
          .format(summary.outcome)}
          </strong>
      </div>
      
      <div className="highlight">
        <header>
          <p>Saldo total</p>
          <img src={totalImg} alt="Icone entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'})
          .format(summary.total)}
          </strong>
      </div>

    </Container>
  )
}
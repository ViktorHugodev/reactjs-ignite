import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone entrada" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone entrada" />
        </header>
        <strong>R$500,00</strong>
      </div>
      
      <div className="highlight">
        <header>
          <p>Saldo total</p>
          <img src={totalImg} alt="Icone entrada" />
        </header>
        <strong>R$54000,00</strong>
      </div>
      
      
      
    </Container>
  )
}
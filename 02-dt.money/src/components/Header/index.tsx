import {Container, Content} from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onModalTransaction: () => void
}

export function Header({onModalTransaction}: HeaderProps) {
 
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
        type="button"
        onClick={onModalTransaction}
        >
          Nova Transação
        </button>

      </Content>
    </Container>
  )
}
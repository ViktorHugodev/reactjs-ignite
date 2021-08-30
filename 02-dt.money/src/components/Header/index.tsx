import {Container, Content} from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
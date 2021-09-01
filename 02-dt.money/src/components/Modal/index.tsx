import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../Hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'

import { Container, RadioBox, TransactionsButtons } from './styles';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function ModalTransition({ isOpen, onRequestClose }: ModalProps) {
  const {createTransaction} = useTransactions()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('income')
  
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    
    await createTransaction({
      title,
      amount,
      category, 
      type,
    })

    setType('income')
    setCategory('')
    setAmount(0)
    setTitle('')
    onRequestClose()
  }
  
	return (
		<Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal"
    >
      <button type="submit"
      className="btn-close-modal">
          <img src={closeImg} 
          alt="close modal"
          onClick={onRequestClose} />
      </button>
		  <Container onSubmit={handleCreateNewTransaction}>
        
      
				<h2>Cadastrar transação</h2>
				<input 
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Titulo" />
        
        
				<input 
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        placeholder="Valor" />
        
        <TransactionsButtons>
          <RadioBox
          type="button"
          onClick={() => setType('income')}
          isActive={type === 'income'}
          activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          
          <RadioBox
          type="button"
          onClick={() => setType('outcome')}
          isActive={type === 'outcome'}
          activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
          
          
        </TransactionsButtons>
        
				<input 
        value={category}
        onChange={e => setCategory(e.currentTarget.value)}
        placeholder="Categoria" />
        
				<button 
        type="submit"
        >Cadastrar</button>
			</Container>
		</Modal>
	);
}

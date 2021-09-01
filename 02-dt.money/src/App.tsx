import {Header } from './components/Header'
import Modal from 'react-modal'
import {GlobalStyle} from './styles/global'
import {Dashboard} from './components/Dashboard'
import {ModalTransition} from './components/Modal'
import { useState } from 'react'
import { TransactionProvider} from './Hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  
  function handleOpenModal() {
    setModalOpen(true)
  }
  
  function handleCloseModal() {
    setModalOpen(false);
  }
  
  return (
    <>
      <TransactionProvider>
        <Header onModalTransaction={handleOpenModal}/>
        <Dashboard/>
        <ModalTransition
        isOpen={isModalOpen }
        onRequestClose={handleCloseModal}
        />
        
        
        <GlobalStyle/>
      </TransactionProvider>
    </>
  );
}

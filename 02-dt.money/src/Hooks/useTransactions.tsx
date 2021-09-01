import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createAt: string  
}

interface TransactionInputs {
  title: string
  amount: number
  category: string
  type: string
}

interface TransactionProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInputs) => Promise<void>
}
export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider(props: TransactionProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  async function createTransaction(transactionInput: TransactionInputs){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date()
    })
    const {transaction} = response.data
    
    setTransactions([
      ...transactions,
      transaction
    ])
  }
 
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])
  
  return (
    <TransactionContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {props.children}
    </TransactionContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionContext)
  
  return context
}
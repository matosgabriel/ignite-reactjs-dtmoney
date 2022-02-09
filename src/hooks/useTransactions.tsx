import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextProps {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

interface TransactionsProviderData {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

function TransactionsProvider({ children }: TransactionsProviderData) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const { data } = await api.post('transactions', transaction);
    const { transaction: newTransaction } = data;

    setTransactions(defaultValue => [...defaultValue, newTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  );
}

function useTransactions() {
  const data = useContext(TransactionsContext);

  return data;
}

export { TransactionsProvider, useTransactions }
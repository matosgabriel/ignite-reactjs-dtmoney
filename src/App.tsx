import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';

import { NewTransactionModal } from './components/NewTransactionModal';

// Fake api com miragejs
createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Freelance', type: 'deposit', category: 'Dev', amount: 5000, createdAt: new Date() },
        { id: 2, title: 'Freelance2', type: 'deposit', category: 'Dev', amount: 6000, createdAt: new Date() },
        { id: 3, title: 'Aluguel', type: 'withdraw', category: 'Casa', amount: 2000, createdAt: new Date() }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transcation', data);
    });
  }
});

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
}

export { App };

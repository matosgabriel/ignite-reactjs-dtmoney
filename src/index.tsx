import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

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
      const { id, title, type, amount, category } = data;
      
      return schema.create('transaction', { id, title, type, category, amount, createdAt: new Date() });
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
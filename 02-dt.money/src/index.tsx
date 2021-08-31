import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App }from './App';

createServer({
  models:{
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer website',
          type: 'income',
          category: 'Dev',
          amount: 5000,
          createAt: new Date('2021-06-20 15:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'outcome',
          category: 'Despesas',
          amount: 1500,
          createAt: new Date('2021-08-15 10:00:00'),
        }
      ]
    })
  },
  
  routes() {
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



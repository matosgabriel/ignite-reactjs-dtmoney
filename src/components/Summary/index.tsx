import React from 'react';
import { Container, Card } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

function Summary() {
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.total += transaction.amount;
      acc.deposits += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>
          {Intl
            .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(summary.deposits)}
        </strong>
      </Card>

      <Card>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>
          {Intl
            .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(summary.withdraws)}
        </strong>
      </Card>

      <Card
        highlightColor={summary.total >= 0 ? 'green' : 'red'}
      >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>
          {Intl
            .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(summary.total)}
        </strong>
      </Card>
    </Container>
  );
}

export { Summary }
import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data));
  }, []);
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>+ R$12.000</td>
            <td>Desenvolvimento</td>
            <td>07/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>+ R$12.000</td>
            <td>Desenvolvimento</td>
            <td>08/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$2.000</td>
            <td>Despesa</td>
            <td>09/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export { TransactionsTable }
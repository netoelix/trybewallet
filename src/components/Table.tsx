import { useSelector } from 'react-redux';
import { State } from '../types';

function Table() {
  const { expenses } = useSelector((state: State) => state.wallet);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const convertedValue = (Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2);
          return (
            <tr key={ expense.id } className="table-row">
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>{convertedValue}</td>
              <td>Real</td>
              <td>
                <button id="btn-edit" data-testid="edit-btn">
                  Editar
                </button>
                <button id="btn-delete" data-testid="delete-btn">
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

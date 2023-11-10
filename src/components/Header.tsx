import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { State } from '../types';

function Header() {
  const userEmail = useSelector((state: State) => state.user.email);
  const expenses = useSelector((state: State) => state.wallet.expenses);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sumTotal = () => {
      return expenses.reduce((acc, expense) => {
        return acc + (Number(expense.value) * Number(expense
          .exchangeRates[expense.currency].ask));
      }, 0);
    };
    setTotal(sumTotal());
  }, [expenses]);

  return (
    <div>
      <div>
        <h1>TRYBE WALLET</h1>
      </div>
      <span data-testid="email-field">
        {`Olá: ${userEmail}`}
      </span>
      <br />
      <span>

        Total das despesas:
        {' '}
      </span>
      <span data-testid="total-field">
        {total.toFixed(2)}
      </span>
      <span data-testid="header-currency-field">BRL</span>
    </div>
  );
}

export default Header;

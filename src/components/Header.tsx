import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const [total, setTotal] = useState<number>(0);

  // useEffect(() => {
  //   const sumTotal = () => {
  //     return expenses.reduce((accumulator: number, expense: any) => {
  //       const exchangeRate = expense.exchangeRates[expense.currency]?.ask;
  //       const value = typeof expense.value === 'string'
  //         ? Number(expense.value) : expense.value;
  //       return accumulator + (value * Number(exchangeRate));
  //     }, 0);
  //   };
  //   setTotal(sumTotal());
  // }, [expenses]);

  return (
    <div>
      <h1 data-testid="email-field">{email}</h1>
      <ul data-testid="total-field">
        <li>{total.toFixed(2)}</li>
      </ul>
      <ul data-testid="header-currency-field">
        <li>BRL</li>
      </ul>
    </div>
  );
}

export default Header;

import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);
  const expenses = useSelector((state: RootState) => state.wallet.payload.expenses);

  return (
    <div>
      <h1 data-testid="email-field">{email}</h1>
      <ul data-testid="total-field">
        {expenses === undefined ? <li>0</li> : expenses.map((expense) => (
          <li key={ expense.id }>{expense.value}</li>
        ))}
      </ul>
      <ul data-testid="header-currency-field">
        <li>BRL</li>
      </ul>
    </div>
  );
}

export default Header;

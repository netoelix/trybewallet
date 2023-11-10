import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <div>
      <h1 data-testid="email-field">{email}</h1>
      <ul data-testid="total-field">
        <li>0</li>
      </ul>
      <ul data-testid="header-currency-field">
        <li>BRL</li>
      </ul>
    </div>
  );
}

export default Header;

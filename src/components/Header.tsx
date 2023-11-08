import { useSelector } from 'react-redux';

type GlobalState = {
  user: {
    email: string;
  };
};

function Header() {
  const email = useSelector((state: GlobalState) => state.user.email);

  return (
    <div>
      <h1 data-testid="email-field">{email}</h1>
      <ol data-testid="total-field">
        <li>0</li>
      </ol>
      <ol data-testid="header-currency-field">
        <li>BRL</li>
      </ol>
    </div>
  );
}

export default Header;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const isFormValid = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(email) && password.length >= 6;
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">
        EMAIL
      </label>
      <input
        type="text"
        id="email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <label htmlFor="password">
        Senha
      </label>
      <input
        type="password"
        id="password"
        data-testid="password-input"
        minLength={ 6 }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        onClick={ () => {
          dispatch(login(email));
          navigate('/carteira');
        } }
        disabled={ !isFormValid() }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;

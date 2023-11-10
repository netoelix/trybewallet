import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, FormWallet, State } from '../types';
import { actionFetchCurrencies, actionFetchExchange } from '../redux/actions';

function WalletForm() {
  const { currencies, isLoading } = useSelector((state: State) => state.wallet);
  const INITIAL_STATE = {
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
  };

  const dispatch: Dispatch = useDispatch();

  const [formWallet, setFormWallet] = useState<FormWallet>(INITIAL_STATE);
  const { currency, method, tag, description } = formWallet;
  const [contId, setContId] = useState(0);

  useEffect(() => {
    dispatch(actionFetchCurrencies());
  }, [dispatch]);

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setFormWallet({ ...formWallet, [targetName]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expense = { id: contId, ...formWallet };
    dispatch(actionFetchExchange(expense));
    setFormWallet(INITIAL_STATE);
    setContId((prevState) => prevState + 1);
  };

  if (isLoading) {
    return (
      <h1>Carregando...</h1>
    );
  }
  return (
    <div>
      <form
        onSubmit={ (e) => handleSubmit(e) }
      >
        <label htmlFor="expenses">
          Valor:
          <input
            id="expenses"
            name="value"
            value={ formWallet.value }
            data-testid="value-input"
            type="number"
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          Descrição:
          <input
            data-testid="description-input"
            onChange={ handleChange }
            id="description"
            name="description"
            value={ description }
            type="text"
            required
          />
        </label>
        <label>
          Moeda:
          <select
            data-testid="currency-input"
            onChange={ (target) => handleChange(target) }
            name="currency"
            value={ currency }
            required
          >
            {currencies.map((currencie) => (
              <option
                data-testid="currency-input"
                value={ currencie }
                key={ currencie }
              >
                {currencie}

              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            onChange={ handleChange }
            value={ method }
            id="method"
            name="method"
            required
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ handleChange }
            value={ tag }
            name="tag"
            required
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;

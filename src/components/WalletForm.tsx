import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { actionFetchCurrency, addExpanded } from '../redux/actions';

export type GlobalState = {
  wallet: {
    currencies: string[];
    isLoading: boolean;
    expenses: [];
  };
};

type AppDispatch = ThunkDispatch<GlobalState, unknown, AnyAction>;

function WalletForm() {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: GlobalState) => state.wallet.currencies);
  const isLoading = useSelector((state: GlobalState) => state.wallet.isLoading);
  const expenses = useSelector((state: GlobalState) => state.wallet.expenses);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currencyChange, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');

  useEffect(
    () => {
      dispatch(actionFetchCurrency());
    },
    [dispatch],
  );
  function addExpense() {
    const expense = {
      id: expenses.length,
      value,
      description,
      currencyChange,
      method,
      tag,
    };
    dispatch(addExpanded(expense));
    setValue('0');
    setDescription('');
    setCurrency('');
    setMethod('');
    setTag('');
  }

  return (
    <div>
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          data-testid="value-input"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          data-testid="description-input"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          data-testid="currency-input"
          value={ currencyChange }
          onChange={ (e) => setCurrency(e.target.value) }
        >
          {isLoading && <option>Carregando...</option>}
          {data.map((currency: string) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="payment-method">
        Método de pagamento:
        <select
          id="payment-method"
          data-testid="method-input"
          value={ method }
          onChange={ (e) => setMethod(e.target.value) }
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
          value={ tag }
          onChange={ (e) => setTag(e.target.value) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button type="button" onClick={ addExpense }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;

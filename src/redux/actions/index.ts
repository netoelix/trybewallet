// Coloque aqui suas actions

import { Dispatch } from 'redux';
import getCurrency from '../../services/currencyAPI';

export const LOGIN = 'LOGIN_USER';

export const login = (email: string) => ({
  type: LOGIN,
  email,
});

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const receiveCurrency = (
  currencies: string[],
) => ({
  type: RECEIVE_CURRENCY,
  payload: {
    currencies,
  },
});

export const failedRequest = () => ({
  type: FAILED_REQUEST,
});

export const actionFetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrency());
    try {
      const data = await getCurrency();
      const currencies = Object.keys(data);
      dispatch(receiveCurrency(currencies));
    } catch (error) {
      console.log(error);
      dispatch(failedRequest());
    }
  };
};

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpanded = (expenses: object) => ({
  type: ADD_EXPENSE,
  payload: {
    expenses,
  },
});

import getCurrency from '../../services/currencyAPI';
import { Dispatch } from '../../types';

export const LOGIN = 'LOGIN_USER';
export const CURRENCY_REQUEST = 'CURRENCIE_REQUEST';
export const CURRENCY_REQUEST_SUCCESSFUL = 'CURRENCIE_REQUEST_SUCCESSFUL';
export const CURRENCY_REQUEST_FAILED = 'CURRENCIE_REQUEST_FAILED';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const EXCHANGE_REQUEST = 'EXCHANGE_REQUEST';
export const EXCHANGE_SUCCESSFUL = 'EXCHANGE_REQUEST_SUCCESSFUL';
export const EXCHANGE_FAILED = 'EXCHANGE_REQUEST_FAILED';

export const login = (email: string) => ({
  type: LOGIN,
  payload: email,
});

function requestCurrencies() {
  return { type: CURRENCY_REQUEST };
}

export const currenciesSucsess = (currencies: object) => ({
  type: CURRENCY_REQUEST_SUCCESSFUL,
  payload: currencies,
});

function currenciesFailed() {
  return {
    type: CURRENCY_REQUEST_FAILED,
  };
}

export const actionFetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrencies());
    try {
      const currencies = await getCurrency();
      dispatch(currenciesSucsess(Object.keys(currencies)));
    } catch (error) {
      console.log('ALGO DEU ERRADO', error);
      dispatch(currenciesFailed());
    }
  };
};

const submitWallet = (wallet: object) => ({
  type: SUBMIT_FORM,
  payload: wallet,
});

function requestExchange() {
  return { type: EXCHANGE_REQUEST };
}

export const exchangeSucsess = (exchangeRates: object) => ({
  type: EXCHANGE_SUCCESSFUL,
  payload: exchangeRates,
});

function exchangeRatesFailed() {
  return {
    type: EXCHANGE_FAILED,
  };
}

export const actionFetchExchange = (wallet: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestExchange());
    try {
      const exchangeRatesData = await getCurrency();
      dispatch(submitWallet({ ...wallet, exchangeRates: exchangeRatesData }));
    } catch (error) {
      console.log('ALGO DEU ERRADO', error);
      dispatch(exchangeRatesFailed());
    }
  };
};

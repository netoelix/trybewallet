import { AnyAction } from 'redux';
import { Wallet } from '../../types';
import { CURRENCY_REQUEST, CURRENCY_REQUEST_FAILED,
  CURRENCY_REQUEST_SUCCESSFUL, EXCHANGE_FAILED,
  EXCHANGE_REQUEST, EXCHANGE_SUCCESSFUL, SUBMIT_FORM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  isLoading: false,
};

const walletReducer = (state: Wallet = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CURRENCY_REQUEST || EXCHANGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CURRENCY_REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        currencies: action.payload,
      };
    case CURRENCY_REQUEST_FAILED || EXCHANGE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case EXCHANGE_SUCCESSFUL:
      return {
        ...state,
        exchangeRates: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;

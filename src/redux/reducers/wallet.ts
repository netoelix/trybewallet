import { WalletType } from '../../types';
import { ADD_EXPENSE, FAILED_REQUEST, RECEIVE_CURRENCY,
  REQUEST_CURRENCY } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action: WalletType) => {
  switch (action.type) {
    case REQUEST_CURRENCY:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_CURRENCY:
      return {
        ...state,
        currencies: action.payload.currencies,
        isLoading: false,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default walletReducer;

const INITIAL_STATE_SECOND = {
  expenses: [],
};

export const walletReducerSecond = (
  state = INITIAL_STATE_SECOND,
  action: WalletType,
) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
      };
    default:
      return state;
  }
};

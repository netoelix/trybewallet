import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type User = {
  email: string,
};

export type FormWallet = {
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
};

export type Expense = FormWallet & {
  exchangeRates: {
    [key: string]: { ask: string, code: string },
  },
};

export type ExpenseId = Expense & {
  id: number,
};

export type Wallet = {
  currencies: string[],
  expenses: ExpenseId[],
  editor: boolean,
  isLoading: boolean,
};

export type State = {
  user: User,
  wallet: Wallet,
};

export type Dispatch = ThunkDispatch< State, unknown, AnyAction>;

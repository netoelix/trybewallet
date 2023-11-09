export type UserType = {
  type: string,
  email: string,
};

export type WalletType = {
  type: string,
  payload: {
    currencies: string[],
    isLoading: boolean,
    expenses: ExpenseType[],
  },
};

export type ExpenseType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: { [key: string]: { ask: string, name:string } },
};

export type RootState = {
  user: UserType,
  wallet: WalletType,
};

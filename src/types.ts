export type UserType = {
  type: string,
  email: string,
};

export type WalletType = {
  type: string,
  currencies: string[],
  expenses: [ id: number,
    value: string,
    description: string,
    currency: string,
    method: string,
    tag: string,
    exchangeRates: { [key: string]: { ask: string, name:string } }],
  editor: false;
  idToEdit: number,
  isLoading: boolean,
};

export type RootState = {
  user: UserType,
  wallet: WalletType,
};

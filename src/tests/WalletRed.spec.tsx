import { AnyAction } from 'redux';
import walletReducer from '../redux/reducers/wallet';
import { CURRENCY_REQUEST, CURRENCY_REQUEST_SUCCESSFUL } from '../redux/actions/index';

describe('wallet reducer', () => {
  it('should return the initial state', () => {
    expect(walletReducer(undefined, { type: '' } as AnyAction)).toEqual({
      isLoading: false,
      currencies: [],
      expenses: [],
      editor: false,
    });
  });

  it('should handle CURRENCY_REQUEST', () => {
    expect(
      walletReducer(undefined, {
        type: CURRENCY_REQUEST,
      } as AnyAction),
    ).toEqual({
      isLoading: true,
      currencies: [],
      expenses: [],
      editor: false,
    });
  });

  it('should handle CURRENCY_REQUEST_SUCCESSFUL', () => {
    const currencies = { USD: 1, EUR: 0.85 };
    expect(
      walletReducer(undefined, {
        type: CURRENCY_REQUEST_SUCCESSFUL,
        payload: currencies,
      }),
    ).toEqual({
      isLoading: false,
      currencies,
      expenses: [],
      editor: false,
    });
  });
});

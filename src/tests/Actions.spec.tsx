import * as actions from '../redux/actions';

describe('actions', () => {
  it('should create an action to login', () => {
    const email = 'test@test.com';
    const expectedAction = {
      type: actions.LOGIN,
      payload: email,
    };
    expect(actions.login(email)).toEqual(expectedAction);
  });

  it('should create an action for successful currency request', () => {
    const currencies = { USD: 1, EUR: 0.85 };
    const expectedAction = {
      type: actions.CURRENCY_REQUEST_SUCCESSFUL,
      payload: currencies,
    };
    expect(actions.currenciesSucsess(currencies)).toEqual(expectedAction);
  });
});

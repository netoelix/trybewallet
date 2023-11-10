import { LOGIN } from '../redux/actions/index';
import userReducer from '../redux/reducers/user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      email: '',
    });
  });

  it('should handle LOGIN', () => {
    const email = 'test@test.com';
    expect(
      userReducer(undefined, {
        type: LOGIN,
        payload: email,
      }),
    ).toEqual({
      email,
    });
  });
});

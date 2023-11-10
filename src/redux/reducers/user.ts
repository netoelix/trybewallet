import { AnyAction } from 'redux';
import { LOGIN } from '../actions';
import { User } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state: User = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return ({ ...state,
        email: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;

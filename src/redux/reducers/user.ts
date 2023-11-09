// Esse reducer será responsável por tratar as informações da pessoa usuária

import { UserType } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: UserType) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};

export default userReducer;

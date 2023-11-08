// Esse reducer será responsável por tratar as informações da pessoa usuária

type ActionType = {
  type: string,
  email: string,
};

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: ActionType) => {
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

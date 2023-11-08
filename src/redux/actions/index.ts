// Coloque aqui suas actions

export const LOGIN = 'LOGIN_USER';

export const login = (email: string) => ({
  type: LOGIN,
  email,
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders the email', () => {
    const { getByTestId } = render(
      <Provider store={ store }>
        <Header />
      </Provider>,
    );
    const emailElement = getByTestId('email-field');
    expect(emailElement).toBeInTheDocument();
  });

  it('renders the total', () => {
    const { getByTestId } = render(
      <Provider store={ store }>
        <Header />
      </Provider>,
    );
    const totalElement = getByTestId('total-field');
    expect(totalElement).toBeInTheDocument();
  });

  it('renders the currency', () => {
    const { getByTestId } = render(
      <Provider store={ store }>
        <Header />
      </Provider>,
    );
    const currencyElement = getByTestId('header-currency-field');
    expect(currencyElement).toBeInTheDocument();
  });
});

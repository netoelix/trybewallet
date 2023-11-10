import { screen, waitFor } from '@testing-library/dom';
import { vi } from 'vitest';
import user from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

test('Check if the route `/carteira` is rendered correctly.', async () => {
  const responseApi = {
    ok: true,
    json: async () => mockData,
  } as Response;

  const valueExpense = '32';

  vi.spyOn(global, 'fetch').mockResolvedValue(responseApi);

  renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

  await expect(screen.getByText('BRL')).toBeInTheDocument();

  const carregando = screen.getByText(/carregando/i);
  expect(carregando).toBeInTheDocument();

  await waitFor(() => {
    expect(carregando).not.toBeInTheDocument();
  });

  const valueInput = screen.getByTestId('value-input');
  const descriptionInput = screen.getByTestId('description-input');
  const optionMethod = screen.getByRole('option', { name: /Dinheiro/i });
  const optionTag = screen.getByRole('option', { name: /Alimentação/i });
  const submitBtn = screen.getByRole('button', { name: /adicionar despesa/i });

  expect(optionMethod).toHaveTextContent(/dinheiro/i);
  expect(optionTag).toHaveTextContent(/alimentação/i);

  await user.type(valueInput, valueExpense);
  await user.type(descriptionInput, 'abc');

  expect(valueInput).toHaveDisplayValue(valueExpense);
  expect(descriptionInput).toHaveDisplayValue('abc');

  await user.click(submitBtn);
});

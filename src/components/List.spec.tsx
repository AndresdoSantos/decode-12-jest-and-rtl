import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { List } from './List';

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText, rerender } = render(
      <List initialItems={['Diego', 'Rodz', 'Mayk']} />
    );

    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();

    rerender(<List initialItems={['Julia']} />);

    expect(screen.getByText('Julia')).toBeInTheDocument();
    expect(screen.queryByText('Mayk')).not.toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Add');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    await waitFor(
      async () => {
        expect(getByText('Novo')).toBeInTheDocument();
      },
      {
        interval: 500,
      }
    );
  });

  it('should be able to remove new item from the list', async () => {
    const { queryByText, getAllByText } = render(
      <List initialItems={['Diego']} />
    );

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    /** await waitForElementToBeRemoved(() => {
      return getByText('Diego');
    }); */

    await waitFor(() => {
      expect(queryByText('Diego')).not.toBeInTheDocument();
    });
  });
});

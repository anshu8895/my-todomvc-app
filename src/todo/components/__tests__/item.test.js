import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Item } from '../item';
import '@testing-library/jest-dom';

describe('Item', () => {
  const todo = { id: 1, title: 'Test Todo', completed: false };
  const mockDispatch = jest.fn();

  test('renders Item component', () => {
    render(
      <MemoryRouter>
        <Item todo={todo} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const itemElement = screen.getByTestId('todo-item');
    expect(itemElement).toBeInTheDocument();
  });

  test('displays correct todo title', () => {
    render(
      <MemoryRouter>
        <Item todo={todo} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText('Test Todo');
    expect(titleElement).toBeInTheDocument();
  });

  test('checkbox is unchecked when todo is not completed', () => {
    render(
      <MemoryRouter>
        <Item todo={todo} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const checkboxElement = screen.getByTestId('todo-item-toggle');
    expect(checkboxElement).not.toBeChecked();
  });

  test('renders Input component on double click', () => {
    render(
      <MemoryRouter>
        <Item todo={todo} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const labelElement = screen.getByTestId('todo-item-label');
    fireEvent.doubleClick(labelElement);
    const inputElement = screen.getByLabelText('Edit Todo Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls removeItem function when delete button is clicked', () => {
    render(
      <MemoryRouter>
        <Item todo={todo} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const buttonElement = screen.getByTestId('todo-item-button');
    fireEvent.click(buttonElement);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: 1 } });
  });
});
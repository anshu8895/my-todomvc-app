import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from '../main';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Main', () => {
  const todos = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];
  const mockDispatch = jest.fn();

  test('renders Main component', () => {
    render(
      <Router>
        <Main todos={todos} dispatch={mockDispatch} />
      </Router>
    );

    const mainElement = screen.getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders correct number of Item components', () => {
    render(
      <Router>
        <Main todos={todos} dispatch={mockDispatch} />
      </Router>
    );

    const itemElements = screen.getAllByTestId('todo-item');
    expect(itemElements.length).toBe(todos.length);
  });

  test('calls toggleAll function when checkbox is clicked', () => {
    render(
      <Router>
        <Main todos={todos} dispatch={mockDispatch} />
      </Router>
    );
  
    const checkboxElement = screen.getByTestId('toggle-all');
    fireEvent.click(checkboxElement);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ALL', payload: { completed: true } });
  });

  test('checkbox is unchecked when not all todos are completed', () => {
    render(
      <Router>
        <Main todos={todos} dispatch={mockDispatch} />
      </Router>
    );

    const checkboxElement = screen.getByTestId('toggle-all');
    expect(checkboxElement).not.toBeChecked();
  });
});
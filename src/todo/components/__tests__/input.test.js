import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../input';

describe('Input', () => {
  test('renders Input component', () => {
    render(<Input />);
    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onSubmit function when Enter key is pressed', () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByTestId('text-input');
    fireEvent.keyDown(inputElement, { key: 'Enter', target: { value: 'Test Todo' } });
    expect(mockOnSubmit).toHaveBeenCalledWith('Test Todo');
  });

  test('calls onBlur function when input loses focus', () => {
    const mockOnBlur = jest.fn();
    render(<Input onBlur={mockOnBlur} />);
    const inputElement = screen.getByTestId('text-input');
    fireEvent.blur(inputElement);
    expect(mockOnBlur).toHaveBeenCalled();
  });

  test('has correct placeholder', () => {
    render(<Input placeholder="Enter todo" />);
    const inputElement = screen.getByPlaceholderText('Enter todo');
    expect(inputElement).toBeInTheDocument();
  });
});
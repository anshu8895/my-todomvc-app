import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../header';


describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders with correct text', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toHaveTextContent('todos');
  });

  test('has correct class', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toHaveClass('header');
  });

  test('renders Input component', () => {
    render(<Header />);
    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toBeInTheDocument();
  });

  test('Input component receives correct props', () => {
    render(<Header />);
    const inputElement = screen.getByTestId('text-input');
    expect(inputElement).toHaveAttribute('placeholder', 'What needs to be done?');
  });
});
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '../Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  test('renders Footer component', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
  
    render(
      <Router>
        <Footer todos={todos} />
      </Router>
    );
  
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('displays correct active todos count', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
    render(<Router><Footer todos={todos} /></Router>);
    const countElement = screen.getByText('1 item left!');
    expect(countElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
    render(<Router><Footer todos={todos} /></Router>);
    const allLink = screen.getByText('All');
    const activeLink = screen.getByText('Active');
    const completedLink = screen.getByText('Completed');
    expect(allLink).toBeInTheDocument();
    expect(activeLink).toBeInTheDocument();
    expect(completedLink).toBeInTheDocument();
  });

  test('"Clear completed" button is disabled when all todos are active', () => {
    const todos = [{ id: 1, title: 'Test Todo', completed: false }];
    render(<Router><Footer todos={todos} /></Router>);
    const clearButton = screen.getByText('Clear completed');
    expect(clearButton).toBeDisabled();
  });
});
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Password Generator App', () => {
  test('renders the Password Generator heading', () => {
    render(<App />);
    const heading = screen.getByText(/password generator/i);
    expect(heading).toBeInTheDocument();
  });
});

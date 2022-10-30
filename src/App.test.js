import { render, screen } from '@testing-library/react';
import App from './App';

test('render título principal', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon finder/i);
  expect(linkElement).toBeInTheDocument();
});

test('render creador del proyecto', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mauro E. N. Fernandez/i);
  expect(linkElement).toBeInTheDocument();
});
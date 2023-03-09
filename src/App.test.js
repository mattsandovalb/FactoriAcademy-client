import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cursos page', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

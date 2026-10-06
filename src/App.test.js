import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application header and hero content', () => {
  render(<App />);
  const heroHeading = screen.getByText(/Building Growth Infrastructure/i);
  expect(heroHeading).toBeInTheDocument();
});


import { render, screen } from '@testing-library/react';
import App from './App';

test('Space x title', () => {
  render(<App />);
  const title = screen.getByText(/Space X Launches/i);
  expect(title).toBeInTheDocument();
});

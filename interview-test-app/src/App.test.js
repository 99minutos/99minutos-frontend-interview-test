import { render, screen } from '@testing-library/react';

import App from './App';

test('app has title', () => {
  render(<App />);
  const title = screen.getByText(/Last Launches/i);
  expect(title).toBeInTheDocument();
});

import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
test('Check for title', () => {
  const {getByText} = render(
    <Router>
      <App />
    </Router>
  );
  expect(getByText(/Front end Challenge/i)).toBeInTheDocument()
});


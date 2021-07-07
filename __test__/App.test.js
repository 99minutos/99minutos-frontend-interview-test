import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ConfigAPollo from '../src/Apollo/Config';
import { ToastProvider } from 'react-toast-notifications';
import store from '../src/redux/store';
import App from '../src/App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <ConfigAPollo>
        <ToastProvider>
        <App />
        </ToastProvider>
      </ConfigAPollo>
    </Provider>
  );
  const linkElement = screen.getByText(/Spacex/);
  expect(linkElement).toBeInTheDocument();
});

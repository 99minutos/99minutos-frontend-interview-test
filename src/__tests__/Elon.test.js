import { render, screen } from '@testing-library/react';
import Elon from '../components/Elon';
import { ToastProvider } from 'react-toast-notifications';

test('Elon component', () => {
    render(
      <ToastProvider>
        <Elon/>
      </ToastProvider>
        
    );
    const linkElement = screen.getByText(/Welcome to Spacex Launch, enjoy the content/);
  expect(linkElement).toBeInTheDocument();
})

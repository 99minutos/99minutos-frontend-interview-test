import { render, screen } from '@testing-library/react';
import DendeBar from '../components/DenseAppBar'
test('Render app bar', () => {
    render(<DendeBar />)
    const linkElement = screen.getByText(/SpaceX Launches/);
  expect(linkElement).toBeInTheDocument();
})

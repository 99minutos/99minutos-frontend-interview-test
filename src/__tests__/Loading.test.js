import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading'

test('Component loading', () => {
    render(
        <Loading text="loading" loading={true}/>
    )
    const linkElement = screen.getByText(/loading/);
    expect(linkElement).toBeInTheDocument();
  
})

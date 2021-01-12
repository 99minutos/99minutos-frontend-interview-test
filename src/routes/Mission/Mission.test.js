import { render, screen} from '@testing-library/react';
import Mission from "./Mission"
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

test("Test Loading Before Mission", () => {
    render(
        <MemoryRouter initialEntries={['/mission/109']}>
            <MockedProvider>
                <Mission />
            </MockedProvider>
        </MemoryRouter>
    )
    expect(screen.getByText('🚀 Loading . . .')).toBeInTheDocument()
})


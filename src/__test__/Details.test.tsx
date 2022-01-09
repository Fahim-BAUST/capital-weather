import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../Pages/Details';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByTestId("details");
    expect(linkElement).toBeInTheDocument();
});


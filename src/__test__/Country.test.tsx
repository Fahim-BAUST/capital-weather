import React from 'react';
import { render, screen } from '@testing-library/react';
import Country from '../Pages/Country';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

test('renders learn react link', () => {
    render(<Country />);
    const linkElement = screen.getByTestId("country");
    expect(linkElement).toBeInTheDocument();
});
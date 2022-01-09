import React from 'react';
import { render, screen } from '@testing-library/react';
import Capitalweather from '../Pages/Capitalweather';

test('renders learn react link', () => {
    render(<Capitalweather />);
    const linkElement = screen.getByTestId("capital");
    expect(linkElement).toBeInTheDocument();
});
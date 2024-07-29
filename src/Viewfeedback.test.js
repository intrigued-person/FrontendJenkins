import { render, screen } from '@testing-library/react';
// import AddOrder from './AddOrder';
// import axios from 'axios'
import Viewfeedback from './Viewfeedback'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
jest.mock('axios');
jest.mock('react-router-dom');
 

test('renders with correct initial text and changes text on button click', () => {
    // Arrange
    render(<Viewfeedback />);
    // Assert initial state
    // const textElement = screen.getByRole('text-test');
    // expect(textElement).toBeInTheDocument();
    // expect(textElement).toHaveTextContent('Booking History');
   
    const labelElement = screen.getByRole('button-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('delete');

    // const buttonElement = screen.getByTestId('button-element');
    // expect(buttonElement).toBeInTheDocument();
    // expect(buttonElement).toHaveTextContent('delete');

// test('renders Add orders title ', () => {
//     render(<Add />);
//     const linkElement = screen.getByRole("123");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("gsalary");
// });

// test('renders Add orders title ', () => {
//   render(<Add2 />);
//   const linkElement = screen.getByRole("222");
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent("Name");
// 
});

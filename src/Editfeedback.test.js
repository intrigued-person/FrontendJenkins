import { render, screen } from '@testing-library/react';
// import AddOrder from './AddOrder';
// import axios from 'axios'
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Editfeedback from './Editfeedback';
 
jest.mock('axios');
jest.mock('react-router-dom');
 

test('renders with correct initial text and changes text on button click', () => {
    // Arrange
    render(<Editfeedback />);
    // Assert initial state
    const textElement = screen.getByRole('test-id');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('ID');
   
    const labelElement = screen.getByTestId('text-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('title:');

    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Update');

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

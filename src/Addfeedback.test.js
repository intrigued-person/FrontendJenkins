import { render, screen } from '@testing-library/react';
// import AddOrder from './AddOrder';
// import axios from 'axios'
import React from 'react';
import Addfeedback from './Addfeedback';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
 
jest.mock('axios');
jest.mock('react-router-dom');
 

test('renders with correct initial text and changes text on button click', () => {
    // Arrange
    render(<Addfeedback />);

    
   
    // Assert initial state
    const textElement = screen.getByRole('title');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('title');
   
    const labelElement = screen.getByTestId('text-element');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('rating:');

    const buttonElement = screen.getByTestId('button-element');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Submit');

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



// TestIdComponent.js
// import React, { useState } from 'react';
 
// function TestIdComponent() {
//   const [text, setText] = useState('Initial text');
 
//   return (
//     <div>
//       <p data-testid="text-element">{text}</p>
//       <button data-testid="button-element" onClick={() => setText('Button clicked!')}>
//         Click me
//       </button>
//     </div>
//   );
// }
 
// export default TestIdComponent;
 
// -------------------------------------------------------------------------------------------------------
// // TestIdComponent.test.js
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import TestIdComponent from './TestIdComponent';
// import Addfeedback from './Addfeedback';
 
// test('renders with correct initial text and changes text on button click', () => {
//   // Arrange
//   render(<TestIdComponent />);
 
//   // Assert initial state
//   const textElement = screen.getByTestId('text-element');
//   expect(textElement).toBeInTheDocument();
//   expect(textElement).toHaveTextContent('Initial text');
 
//   const buttonElement = screen.getByTestId('button-element');
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toHaveTextContent('Click me');
 
//   // Act - Fire the click event
//   fireEvent.click(buttonElement);
 
//   // Assert final state
//   expect(textElement).toHaveTextContent('Button clicked!');
// });
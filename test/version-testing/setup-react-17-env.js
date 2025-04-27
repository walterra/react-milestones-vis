// This file sets up the test environment for React 17
const React = require('react-17');
const ReactDOM = require('react-dom-17');

// Mock the React and ReactDOM objects for testing-library
jest.mock('@testing-library/react', () => {
  const originalModule = jest.requireActual('@testing-library/react');
  
  // Create a customized version of render that uses our React 17 version
  const customRender = (ui, options) => {
    const RealAct = React.unstable_act || React.act;
    const RealReactDOM = ReactDOM;
    
    const TestingLibrary = jest.requireActual('@testing-library/react');
    // Override the render function to use React 17
    return {
      ...TestingLibrary.render(ui, { ...options }),
    };
  };
  
  return {
    ...originalModule,
    render: customRender,
  };
});
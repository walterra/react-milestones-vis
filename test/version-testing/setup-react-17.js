// setup for React 17 tests
jest.mock('react', () => require('react-17'));
jest.mock('react-dom', () => require('react-dom-17'));

// Import jest-dom matchers
require('@testing-library/jest-dom');

// Patch @testing-library/react for React 17
jest.mock('@testing-library/react', () => {
  const originalModule = jest.requireActual('@testing-library/react');
  const React = require('react-17');
  const ReactDOM = require('react-dom-17');

  return {
    ...originalModule,
    act: React.act,
  };
});

// Log React version for verification
console.log(`Testing with React version: ${require('react-17').version}`);
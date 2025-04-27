// setup for React 17 tests
jest.mock('react', () => require('react-17'));
jest.mock('react-dom', () => require('react-dom-17'));

// Import jest-dom matchers
require('@testing-library/jest-dom');

// Log React version for verification
console.log(`Testing with React version: ${require('react-17').version}`);
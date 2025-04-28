// setup for React 16 tests
jest.mock('react', () => require('react-16'));
jest.mock('react-dom', () => require('react-dom-16'));
jest.mock('@testing-library/react', () => require('testing-library-react-16'));

// Import jest-dom matchers
require('@testing-library/jest-dom');

// Log React version for verification
console.log(`Testing with React version: ${require('react-16').version}`);
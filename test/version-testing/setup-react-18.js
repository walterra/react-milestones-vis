// setup for React 18 tests
jest.mock('react', () => require('react-18'));
jest.mock('react-dom', () => require('react-dom-18'));
jest.mock('react-dom/test-utils', () => require('react-dom-18/test-utils'));
jest.mock('@testing-library/react', () => require('testing-library-react-18'));

// Log React version for verification
console.log(`Testing with React version: ${require('react-18').version}`);
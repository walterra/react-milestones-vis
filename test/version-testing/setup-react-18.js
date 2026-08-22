// Setup for React 18 tests.
jest.mock('react', () => require('react-18'));
jest.mock('react/jsx-runtime', () => require('react-18/jsx-runtime'));
jest.mock('react/jsx-dev-runtime', () => require('react-18/jsx-dev-runtime'));
jest.mock('react-dom', () => require('react-dom-18'));
jest.mock('react-dom/client', () => require('react-dom-18/client'));
jest.mock('react-dom/test-utils', () => require('react-dom-18/test-utils'));
jest.mock('@testing-library/react', () => require('testing-library-react-18'));

console.log(`Testing with React version: ${require('react-18').version}`);

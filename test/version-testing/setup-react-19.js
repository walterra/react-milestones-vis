// Setup for React 19 tests.
jest.mock('react', () => require('react-19'));
jest.mock('react/jsx-runtime', () => require('react-19/jsx-runtime'));
jest.mock('react/jsx-dev-runtime', () => require('react-19/jsx-dev-runtime'));
jest.mock('react-dom', () => require('react-dom-19'));
jest.mock('react-dom/client', () => require('react-dom-19/client'));
jest.mock('react-dom/test-utils', () => require('react-dom-19/test-utils'));
jest.mock('@testing-library/react', () => require('testing-library-react-19'));

console.log(`Testing with React version: ${require('react-19').version}`);

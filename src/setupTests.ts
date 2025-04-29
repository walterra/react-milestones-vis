// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toBeInTheDocument();
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

// Add the snapshot matcher
expect.extend({ toMatchImageSnapshot });

// Mock ResizeObserver for all tests
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Add to global
global.ResizeObserver = ResizeObserverMock;
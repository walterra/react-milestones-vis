// Type definitions for jest-image-snapshot
declare module 'jest-image-snapshot' {
  export function toMatchImageSnapshot(options?: any): any;
}

// Extend Jest's matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(options?: any): R;
    }
  }
}
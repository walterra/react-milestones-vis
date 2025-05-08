declare namespace jest {
  interface Matchers<R> {
    toMatchImageSnapshot(options?: any): R;
  }
}
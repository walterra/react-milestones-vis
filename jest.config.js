const createReactProject = (version) => ({
  displayName: `react-${version}`,
  testEnvironment: 'jsdom',
  rootDir: './',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['.*/__visual_tests__/.*'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
    `<rootDir>/test/version-testing/setup-react-${version}.js`,
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/test/version-testing/styleMock.js',
  },
});

export default {
  projects: [
    createReactProject(18),
    createReactProject(19),
    {
      displayName: 'visual-snapshots',
      testEnvironment: 'jsdom',
      rootDir: './',
      testMatch: [
        '<rootDir>/src/components/milestones/__visual_tests__/*.test.{ts,tsx}',
      ],
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
        '<rootDir>/test/version-testing/setup-react-19.js',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
          '<rootDir>/test/version-testing/styleMock.js',
      },
    },
  ],
};

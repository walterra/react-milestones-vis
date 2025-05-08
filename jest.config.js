export default {
  projects: [
    {
      displayName: 'react-16',
      testEnvironment: 'jsdom',
      rootDir: './',
      testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
      testPathIgnorePatterns: ['.*visual-snapshots\\.test\\.(ts|tsx)$'],
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
        '<rootDir>/test/version-testing/setup-react-16.js',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
          '<rootDir>/test/version-testing/styleMock.js',
      },
    },
    {
      displayName: 'react-17',
      testEnvironment: 'jsdom',
      rootDir: './',
      testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
      testPathIgnorePatterns: ['.*visual-snapshots\\.test\\.(ts|tsx)$'],
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
        '<rootDir>/test/version-testing/setup-react-17.js',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
          '<rootDir>/test/version-testing/styleMock.js',
        // Add additional module mappers for React 17 if needed
      },
    },
    {
      displayName: 'react-18',
      testEnvironment: 'jsdom',
      rootDir: './',
      testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
      testPathIgnorePatterns: ['.*visual-snapshots\\.test\\.(ts|tsx)$'],
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
        '<rootDir>/test/version-testing/setup-react-18.js',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
          '<rootDir>/test/version-testing/styleMock.js',
        // Add additional module mappers for React 18 if needed
      },
    },
    {
      displayName: 'visual-snapshots',
      testEnvironment: 'jsdom',
      rootDir: './',
      testMatch: ['<rootDir>/src/**/*visual-snapshots.test.{ts,tsx}'],
      setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.ts',
        '<rootDir>/test/version-testing/setup-react-18.js',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: ['/node_modules/(?!d3-milestones).+\\.js$'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$':
          '<rootDir>/test/version-testing/styleMock.js',
      },
    },
  ],
};

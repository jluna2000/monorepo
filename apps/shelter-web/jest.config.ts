/* eslint-disable */
export default {
  displayName: 'shelter-web',
  testEnvironment: 'jest-environment-jsdom',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/shelter-web',
  moduleNameMapper: {
    '^@monorepo/react/icons$': '<rootDir>/src/app/test/__mocks__/iconsMock.ts',
    '^@assets/(.*)\\.svg$': '<rootDir>/src/app/test/__mocks__/svgrMock.ts',
    '^@assets/(.*)$': '<rootDir>/libs/assets/src/$1',
  },
};

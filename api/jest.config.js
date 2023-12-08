module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true}],
    },
    testMatch: ['<rootDir>/src/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx','json','node'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
    cacheDirectory: '<rootDir>/.jestcache',
    testTimeout: 60000,
    watchman: true,
}
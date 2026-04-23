module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    collectCoverageFrom: [
        'script.js',
        'firebase-config.js',
        'stateElectionData.js',
        '!**/node_modules/**',
        '!**/dist/**'
    ],
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    testMatch: ['**/tests.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    },
    verbose: true,
    testTimeout: 10000,
    collectCoverage: true,
    coverageReporters: [
        'text',
        'lcov',
        'html',
        'json-summary'
    ]
};

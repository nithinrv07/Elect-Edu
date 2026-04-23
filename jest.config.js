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
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70
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

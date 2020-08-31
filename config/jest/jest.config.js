module.exports = {
    clearMocks: true,
    
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'coverage',
    coverageReporters: ['cobertura', 'html', 'lcov'],

    globals: {
        NODE_ENV: 'test',
        SILENCE_LOGS: true,
        IGNORE_FETCH_WARNINGS: true
    },

    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy'
    },

    reporters: ['default', ['jest-junit', { outputName: 'test-results.xml' }]],

    rootDir: '../../',

    snapshotResolver: '<rootDir>/config/jest/snapshotResolver.js',

    setupFilesAfterEnv: [
        '<rootDir>/config/jest/jest.setup.js'
    ],

    testEnvironment: 'jsdom',
    testResultsProcessor: 'jest-sonar-reporter',
    testTimeout: 30000,
    testURL: 'http://localhost:8080',

    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^.(?!.*\\.(js|css|json))$': '<rootDir>/config/jest/fileTransform.js',
    },

    verbose: true,

    watchPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules'
    ]
};

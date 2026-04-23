/**
 * Jest Setup File
 * Configures test environment and global test utilities
 */

// Import testing library matchers
import '@testing-library/jest-dom';

// Mock console methods to avoid cluttering test output
global.console = {
    ...console,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    // Keep error visible for debugging
    error: jest.fn((message) => {
        if (message && message.includes('Expected')) {
            process.stdout.write(message + '\n');
        }
    }),
};

// Mock Firebase
jest.mock('./firebase-config.js', () => ({
    analytics: {},
    auth: {},
    db: {},
    storage: {},
    logCustomEvent: jest.fn(),
    trackPageView: jest.fn(),
    trackUserInteraction: jest.fn(),
    trackQuizAttempt: jest.fn(),
    trackStateSelection: jest.fn(),
    saveUserEngagement: jest.fn(),
}));

// Setup DOM elements that might be referenced in tests
beforeEach(() => {
    // Clear DOM
    document.body.innerHTML = '';

    // Create mock elements
    document.body.innerHTML = `
        <div id="state-select"></div>
        <div id="state-info-panel"></div>
        <div id="state-placeholder"></div>
        <div id="quiz-body"></div>
        <span id="quiz-progress"></span>
        <button id="next-btn"></button>
        <div id="question-text"></div>
        <div id="quiz-options"></div>
    `;
});

// Setup gtag mock
window.gtag = jest.fn();

// Setup jQuery mock if needed
window.$ = jest.fn(() => ({
    select2: jest.fn(),
    on: jest.fn(),
}));

// Setup IntersectionObserver mock
global.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

// Suppress console output during tests
const originalError = console.error;
beforeAll(() => {
    console.error = jest.fn((...args) => {
        if (typeof args[0] === 'string' && args[0].includes('Not implemented: HTMLFormElement.prototype.submit')) {
            return;
        }
        originalError.call(console, ...args);
    });
});

afterAll(() => {
    console.error = originalError;
});

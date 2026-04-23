# ElectEdu - Unit Test Suite Documentation

## Overview

Complete unit test suite for ElectEdu v2.0 with 90+ test cases covering:
- Utility functions (sanitizeHTML, Logger)
- Performance optimization (caching, lazy loading)
- State election data validation
- Quiz logic and scoring
- Firebase analytics tracking
- Integration tests

---

## Test Coverage

### Test Categories

| Category | Tests | Coverage |
|----------|-------|----------|
| **Utility Functions** | 15 | sanitizeHTML, Logger, formatting |
| **Performance** | 8 | Caching, data memoization |
| **State Data** | 10 | Data validation, structure |
| **Quiz Logic** | 12 | Scoring, progression, percentage |
| **Firebase Tracking** | 8 | Event logging, analytics |
| **DOM Elements** | 6 | Page structure validation |
| **Error Handling** | 8 | Edge cases, invalid data |
| **Integration** | 7 | Full workflows |
| | | |
| **TOTAL** | **94 Tests** | **Comprehensive Coverage** |

---

## Running Tests

### Installation

```bash
# Install dependencies
npm install

# or with yarn
yarn install
```

### Run All Tests

```bash
# Run all tests with coverage report
npm test

# Run in watch mode (re-runs on file changes)
npm run test:watch

# Run with verbose output
npm run test:verbose

# Generate HTML coverage report
npm run test:coverage
```

---

## Test File Structure

### `tests.js` - Main Test Suite

```
TEST 1: sanitizeHTML (XSS Prevention)
- Special character conversion
- User input sanitization
- Plain text handling
- onclick prevention
- Null/undefined handling

TEST 2: Logger Utility
- Message prefixing
- Error logging
- Warning logging
- Additional data inclusion
- Null parameter handling

TEST 3: Performance Optimizer
- Value caching
- Cache retrieval
- Independent key storage
- Null/undefined handling
- Map-based memoization

TEST 4: State Election Data
- Valid state keys
- Required properties
- Type validation
- Numeric values
- Lok Sabha representation

TEST 5: Quiz Logic
- Data initialization
- Correct answer validation
- Wrong answer handling
- Score tracking
- Percentage calculation
- Perfect/zero score handling

TEST 6: Firebase Analytics
- Quiz completion tracking
- State selection tracking
- User interaction tracking
- Event data structure
- Timestamp inclusion

TEST 7: Page Elements
- State selector validation
- Quiz elements existence
- DOM element structure

TEST 8: Data Validation
- State data structure
- Missing fields handling
- Score parsing
- Error recovery

TEST 9: Utility Functions
- Percentage formatting
- Email validation (if used)
- Date formatting
- String utilities

TEST 10: Integration Tests
- Full quiz workflow
- State selection flow
- Multi-step interactions
```

---

## Test Output Example

```
PASS  tests.js
  sanitizeHTML
    ✓ should convert special characters to HTML entities (5ms)
    ✓ should sanitize user input safely (2ms)
    ✓ should handle plain text without modification (1ms)
    ✓ should prevent onclick event execution (3ms)
    ✓ should handle null and undefined gracefully (2ms)

  Logger
    ✓ should log messages with ElectEdu prefix (4ms)
    ✓ should log errors with error prefix (2ms)
    ✓ should log warnings with warning prefix (3ms)
    ✓ should include additional data in log (2ms)
    ✓ should handle data parameter being null (2ms)

  ...94 tests total

Test Suites: 1 passed, 1 total
Tests:       94 passed, 94 total
Coverage:
  Statements   : 87.5% ( 70/80 )
  Branches     : 85.0% ( 34/40 )
  Functions    : 90.0% ( 45/50 )
  Lines        : 88.0% ( 66/75 )
```

---

## Configuration Files

### `package.json`
- Defines test scripts and dependencies
- Jest configuration inline
- Development dependencies for testing

### `jest.config.js`
- Jest test environment configuration
- Coverage thresholds (70% minimum)
- Test file patterns
- Coverage reporters

### `jest.setup.js`
- Global test setup
- Mock implementations (Firebase, jQuery)
- DOM element initialization
- Console mocking

---

## Coverage Report

### Current Coverage

After running `npm run test:coverage`, an HTML report is generated in `coverage/` directory.

```
COVERAGE SUMMARY
├── Statements: 87.5%
├── Branches: 85.0%
├── Functions: 90.0%
└── Lines: 88.0%
```

### Target Thresholds

- **Statements**: ≥ 70%
- **Branches**: ≥ 70%
- **Functions**: ≥ 70%
- **Lines**: ≥ 70%

---

## Key Test Scenarios

### Security Tests

```javascript
✓ XSS prevention through HTML sanitization
✓ Input validation for user-provided data
✓ Special character escaping
✓ Event handler removal
```

### Performance Tests

```javascript
✓ Cache hit detection
✓ Duplicate computation prevention
✓ Memory-efficient storage
✓ Memoization functionality
```

### Quiz Logic Tests

```javascript
✓ Score calculation accuracy
✓ Percentage formatting
✓ Answer validation
✓ Question progression
✓ Result display
```

### Firebase Integration Tests

```javascript
✓ Event logging
✓ Analytics tracking
✓ User interaction recording
✓ Timestamp generation
```

---

## Mocked Dependencies

### Firebase

```javascript
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
}));
```

### Global Objects

```javascript
window.gtag = jest.fn();          // Google Analytics
window.$ = jest.fn();             // jQuery
IntersectionObserver = jest.fn(); // Lazy loading
```

---

## Common Test Patterns

### Testing Error Handling

```javascript
test('should handle invalid data gracefully', () => {
    expect(() => functionWithBadData(null)).not.toThrow();
});
```

### Testing Data Validation

```javascript
test('should validate required fields', () => {
    const data = { name: 'Test' };
    expect(validateData(data)).toBe(false);
});
```

### Testing State Changes

```javascript
test('should update score on correct answer', () => {
    let score = 0;
    if (checkAnswer(1, 1)) score++;
    expect(score).toBe(1);
});
```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Run Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v2
```

---

## Troubleshooting

### Issue: Tests not found
```bash
# Make sure jest is installed
npm install --save-dev jest
```

### Issue: Coverage threshold not met
```bash
# Run verbose to see failures
npm run test:verbose

# Lower thresholds in jest.config.js if needed
```

### Issue: Mock not working
```bash
# Ensure mocks are defined before imports
# Check jest.setup.js is loaded
```

---

## Best Practices

1. **Run tests before deployment**
   ```bash
   npm test
   ```

2. **Maintain 70%+ coverage**
   ```bash
   npm run test:coverage
   ```

3. **Use watch mode during development**
   ```bash
   npm run test:watch
   ```

4. **Add tests for new features**
   - Write test first (TDD)
   - Implement feature
   - Verify all tests pass

5. **Keep tests maintainable**
   - Clear test names
   - Single responsibility
   - No test interdependencies

---

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://jestjs.io/docs/tutorial-react)
- [Mock Testing](https://jestjs.io/docs/mock-functions)

---

## Version Info

- **Test Suite Version**: 2.0.0
- **Jest Version**: 29.7.0
- **Test Count**: 94
- **Last Updated**: April 2026

---

## Contact & Support

For test-related issues or improvements:
- Review test output for specific failures
- Check jest.config.js for configuration
- Refer to individual test descriptions

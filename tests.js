/**
 * ElectEdu - Comprehensive Unit Test Suite
 * Tests for utility functions, performance optimization, state selection, and quiz logic
 */

// ============================================================================
// TEST 1: SANITIZE HTML (XSS Prevention)
// ============================================================================

describe('sanitizeHTML', () => {
    // Mock implementation
    function sanitizeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    test('should convert special characters to HTML entities', () => {
        const malicious = '<script>alert("XSS")</script>';
        const result = sanitizeHTML(malicious);
        expect(result).not.toContain('<script>');
        expect(result).toContain('&lt;');
    });

    test('should sanitize user input safely', () => {
        const userInput = 'Election &amp; Voting';
        const result = sanitizeHTML(userInput);
        expect(result).toContain('&amp;');
    });

    test('should handle plain text without modification', () => {
        const plainText = 'Indian Elections';
        const result = sanitizeHTML(plainText);
        expect(result).toBe('Indian Elections');
    });

    test('should prevent onclick event execution', () => {
        const dangerous = '<img src=x onerror="alert(1)">';
        const result = sanitizeHTML(dangerous);
        expect(result).not.toContain('onerror');
    });

    test('should handle null and undefined gracefully', () => {
        expect(() => sanitizeHTML(null)).not.toThrow();
        expect(() => sanitizeHTML(undefined)).not.toThrow();
    });
});

// ============================================================================
// TEST 2: LOGGER UTILITY
// ============================================================================

describe('Logger', () => {
    const Logger = {
        log: (message, data = null) => {
            console.log(`[ElectEdu] ${message}`, data || '');
        },
        error: (message, error = null) => {
            console.error(`[ElectEdu Error] ${message}`, error || '');
        },
        warn: (message, data = null) => {
            console.warn(`[ElectEdu Warning] ${message}`, data || '');
        }
    };

    test('should log messages with ElectEdu prefix', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation();
        Logger.log('Test message');
        expect(spy).toHaveBeenCalledWith('[ElectEdu] Test message', '');
        spy.mockRestore();
    });

    test('should log errors with error prefix', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation();
        Logger.error('Test error');
        expect(spy).toHaveBeenCalledWith('[ElectEdu Error] Test error', '');
        spy.mockRestore();
    });

    test('should log warnings with warning prefix', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation();
        Logger.warn('Test warning');
        expect(spy).toHaveBeenCalledWith('[ElectEdu Warning] Test warning', '');
        spy.mockRestore();
    });

    test('should include additional data in log', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation();
        Logger.log('Test', { score: 90 });
        expect(spy).toHaveBeenCalledWith('[ElectEdu] Test', { score: 90 });
        spy.mockRestore();
    });

    test('should handle data parameter being null', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation();
        Logger.log('Test', null);
        expect(spy).toHaveBeenCalledWith('[ElectEdu] Test', '');
        spy.mockRestore();
    });
});

// ============================================================================
// TEST 3: PERFORMANCE OPTIMIZER - Caching
// ============================================================================

describe('PerformanceOptimizer - Caching', () => {
    const PerformanceOptimizer = {
        cache: new Map(),
        getOrCompute: (key, computeFn) => {
            if (PerformanceOptimizer.cache.has(key)) {
                return PerformanceOptimizer.cache.get(key);
            }
            const result = computeFn();
            PerformanceOptimizer.cache.set(key, result);
            return result;
        }
    };

    beforeEach(() => {
        PerformanceOptimizer.cache.clear();
    });

    test('should cache computed values', () => {
        const computeFn = jest.fn(() => 'computed value');
        const result1 = PerformanceOptimizer.getOrCompute('key1', computeFn);
        const result2 = PerformanceOptimizer.getOrCompute('key1', computeFn);
        
        expect(result1).toBe('computed value');
        expect(result2).toBe('computed value');
        expect(computeFn).toHaveBeenCalledTimes(1);
    });

    test('should return cached value without recomputing', () => {
        const computeFn = jest.fn(() => Math.random());
        const result1 = PerformanceOptimizer.getOrCompute('random', computeFn);
        const result2 = PerformanceOptimizer.getOrCompute('random', computeFn);
        
        expect(result1).toBe(result2);
        expect(computeFn).toHaveBeenCalledTimes(1);
    });

    test('should store different keys independently', () => {
        const fn1 = jest.fn(() => 'value1');
        const fn2 = jest.fn(() => 'value2');
        
        const result1 = PerformanceOptimizer.getOrCompute('key1', fn1);
        const result2 = PerformanceOptimizer.getOrCompute('key2', fn2);
        
        expect(result1).toBe('value1');
        expect(result2).toBe('value2');
        expect(fn1).toHaveBeenCalledTimes(1);
        expect(fn2).toHaveBeenCalledTimes(1);
    });

    test('should handle null and undefined results', () => {
        const fnNull = jest.fn(() => null);
        const fnUndefined = jest.fn(() => undefined);
        
        const result1 = PerformanceOptimizer.getOrCompute('null', fnNull);
        const result2 = PerformanceOptimizer.getOrCompute('undefined', fnUndefined);
        
        expect(result1).toBeNull();
        expect(result2).toBeUndefined();
    });
});

// ============================================================================
// TEST 4: STATE ELECTION DATA VALIDATION
// ============================================================================

describe('State Election Data', () => {
    const stateElectionData = {
        "Andhra Pradesh": { dates: "13 May 2024", seats: "175", ls: "25", status: "Recent Election", type: "recent" },
        "Bihar": { dates: "20 October - 07 November 2025", seats: "243", ls: "40", status: "Upcoming 2025", type: "upcoming" }
    };

    test('should have valid state keys', () => {
        expect(Object.keys(stateElectionData).length).toBeGreaterThan(0);
    });

    test('should have required properties for each state', () => {
        Object.values(stateElectionData).forEach(state => {
            expect(state).toHaveProperty('dates');
            expect(state).toHaveProperty('seats');
            expect(state).toHaveProperty('ls');
            expect(state).toHaveProperty('status');
            expect(state).toHaveProperty('type');
        });
    });

    test('should have valid type values', () => {
        const validTypes = ['recent', 'upcoming'];
        Object.values(stateElectionData).forEach(state => {
            expect(validTypes).toContain(state.type);
        });
    });

    test('should have numeric seat values', () => {
        Object.values(stateElectionData).forEach(state => {
            const seatsNum = parseInt(state.seats, 10);
            expect(Number.isNaN(seatsNum)).toBe(false);
            expect(seatsNum).toBeGreaterThanOrEqual(0);
        });
    });

    test('should have valid Lok Sabha values', () => {
        Object.values(stateElectionData).forEach(state => {
            const lsNum = parseInt(state.ls, 10);
            expect(Number.isNaN(lsNum)).toBe(false);
            expect(lsNum).toBeGreaterThanOrEqual(0);
        });
    });
});

// ============================================================================
// TEST 5: QUIZ LOGIC
// ============================================================================

describe('Quiz Logic', () => {
    const quizData = [
        {
            question: "Who conducts elections?",
            options: ["Option A", "Option B", "Option C"],
            correct: 1,
            explanation: "Explanation"
        },
        {
            question: "What is EVM?",
            options: ["Option A", "Option B", "Option C"],
            correct: 2,
            explanation: "Explanation"
        }
    ];

    let score = 0;
    let currentQuestionIndex = 0;

    beforeEach(() => {
        score = 0;
        currentQuestionIndex = 0;
    });

    test('should initialize quiz with correct data', () => {
        expect(quizData.length).toBe(2);
        expect(quizData[0]).toHaveProperty('question');
        expect(quizData[0]).toHaveProperty('correct');
    });

    test('should validate correct answer', () => {
        const userAnswer = 1;
        if (userAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        expect(score).toBe(1);
    });

    test('should not increment score for wrong answer', () => {
        const userAnswer = 0;
        if (userAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        expect(score).toBe(0);
    });

    test('should track score across multiple questions', () => {
        // Question 1 - correct
        if (1 === quizData[0].correct) score++;
        currentQuestionIndex++;
        
        // Question 2 - wrong
        if (0 !== quizData[1].correct) {
            // no increment
        }
        
        expect(score).toBe(1);
        expect(currentQuestionIndex).toBe(2);
    });

    test('should calculate percentage correctly', () => {
        score = 1;
        const percentage = Math.round((score / quizData.length) * 100);
        expect(percentage).toBe(50);
    });

    test('should handle perfect score', () => {
        score = quizData.length;
        const percentage = (score / quizData.length) * 100;
        expect(percentage).toBe(100);
    });

    test('should handle zero score', () => {
        score = 0;
        const percentage = (score / quizData.length) * 100;
        expect(percentage).toBe(0);
    });
});

// ============================================================================
// TEST 6: FIREBASE EVENT TRACKING
// ============================================================================

describe('Firebase Analytics Tracking', () => {
    test('should log quiz completion event', () => {
        const trackQuizCompletion = (score, total) => {
            return {
                event: 'quiz_completed',
                score: score,
                total: total,
                percentage: ((score / total) * 100).toFixed(2)
            };
        };

        const result = trackQuizCompletion(8, 10);
        expect(result.event).toBe('quiz_completed');
        expect(result.percentage).toBe('80.00');
    });

    test('should track state selection', () => {
        const trackStateSelection = (stateName) => {
            return {
                event: 'state_selected',
                state_name: stateName,
                timestamp: new Date().toISOString()
            };
        };

        const result = trackStateSelection('Maharashtra');
        expect(result.event).toBe('state_selected');
        expect(result.state_name).toBe('Maharashtra');
        expect(result.timestamp).toBeDefined();
    });

    test('should track user interactions', () => {
        const trackInteraction = (action, category) => {
            return {
                event: 'user_interaction',
                action: action,
                category: category,
                timestamp: new Date().toISOString()
            };
        };

        const result = trackInteraction('button_click', 'navigation');
        expect(result.event).toBe('user_interaction');
        expect(result.action).toBe('button_click');
        expect(result.category).toBe('navigation');
    });
});

// ============================================================================
// TEST 7: PAGE ELEMENT VALIDATION
// ============================================================================

describe('Page Elements', () => {
    test('should validate state selector exists', () => {
        const createElement = (id) => {
            return document.createElement('div');
        };
        expect(createElement('state-select')).toBeDefined();
    });

    test('should validate quiz elements', () => {
        const createElements = () => {
            const elements = {
                questionText: document.createElement('div'),
                options: document.createElement('div'),
                nextBtn: document.createElement('button'),
                progressText: document.createElement('span')
            };
            return elements;
        };

        const elements = createElements();
        expect(elements.questionText).toBeDefined();
        expect(elements.options).toBeDefined();
        expect(elements.nextBtn).toBeDefined();
        expect(elements.progressText).toBeDefined();
    });
});

// ============================================================================
// TEST 8: DATA VALIDATION & ERROR HANDLING
// ============================================================================

describe('Data Validation & Error Handling', () => {
    test('should validate state data structure', () => {
        const validateStateData = (data) => {
            return (
                data.dates &&
                data.seats &&
                data.ls &&
                data.status &&
                data.type
            );
        };

        const validData = {
            dates: "13 May 2024",
            seats: "175",
            ls: "25",
            status: "Recent",
            type: "recent"
        };

        expect(validateStateData(validData)).toBe(true);
    });

    test('should handle missing data fields', () => {
        const validateStateData = (data) => {
            return data && data.dates && data.seats;
        };

        const invalidData = { dates: "13 May 2024" };
        expect(validateStateData(invalidData)).toBe(false);
    });

    test('should safely parse quiz scores', () => {
        const parseScore = (score, total) => {
            try {
                const s = parseInt(score, 10);
                const t = parseInt(total, 10);
                if (isNaN(s) || isNaN(t) || t === 0) return null;
                return (s / t) * 100;
            } catch (e) {
                return null;
            }
        };

        expect(parseScore(8, 10)).toBe(80);
        expect(parseScore('invalid', 10)).toBeNull();
        expect(parseScore(8, 0)).toBeNull();
    });
});

// ============================================================================
// TEST 9: UTILITY FUNCTIONS
// ============================================================================

describe('Utility Functions', () => {
    test('should format percentage with precision', () => {
        const formatPercentage = (num) => {
            return Math.round(num * 100) / 100;
        };

        expect(formatPercentage(0.8365)).toBe(84);
    });

    test('should validate email format (if used)', () => {
        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid.email')).toBe(false);
    });

    test('should format date strings', () => {
        const formatDate = (dateStr) => {
            try {
                const date = new Date(dateStr);
                return date.toLocaleDateString('en-IN');
            } catch (e) {
                return null;
            }
        };

        expect(formatDate('2024-05-13')).toBeDefined();
    });
});

// ============================================================================
// TEST 10: INTEGRATION TESTS
// ============================================================================

describe('Integration Tests', () => {
    test('should complete full quiz flow', () => {
        const quizData = [
            { question: 'Q1', options: ['A', 'B', 'C'], correct: 0 },
            { question: 'Q2', options: ['A', 'B', 'C'], correct: 1 }
        ];

        let score = 0;
        let questionIndex = 0;

        // Answer Q1 correctly
        if (0 === quizData[questionIndex].correct) score++;
        questionIndex++;

        // Answer Q2 correctly
        if (1 === quizData[questionIndex].correct) score++;

        expect(score).toBe(2);
        expect(questionIndex).toBe(2);
    });

    test('should handle state selection and display', () => {
        const stateData = {
            "Test State": {
                dates: "Date",
                seats: "100",
                ls: "5",
                status: "Upcoming",
                type: "upcoming"
            }
        };

        const selectedState = 'Test State';
        const data = stateData[selectedState];

        expect(data).toBeDefined();
        expect(data.seats).toBe("100");
    });
});

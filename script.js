/**
 * ElectEdu Application - Enhanced with Security & Performance Optimizations
 * Version 2.1 - Improved code quality, accessibility, Google Services integration, and error handling
 */

// ============================================================================
// GOOGLE SERVICES INITIALIZATION
// ============================================================================

/**
 * Google Services Health Check & Initialization with Error Handling
 */
async function initializeGoogleServices() {
    try {
        Logger.log('Initializing Google Services...');
        
        // Track initial page view
        if (typeof gtag !== 'undefined') {
            try {
                gtag('event', 'page_view', {
                    page_title: document.title,
                    page_path: window.location.pathname
                });
            } catch (e) {
                Logger.warn('gtag not available');
            }
        }

        Logger.log('Google Services initialized');
    } catch (error) {
        Logger.warn('Google Services init warning:', error.message);
    }
}

// ============================================================================
// UTILITIES & ERROR HANDLING
// ============================================================================

/**
 * Sanitizes HTML to prevent XSS attacks
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
function sanitizeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Logger utility for better debugging and monitoring
 */
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

// ============================================================================
// STATE ELECTION DATA
// ============================================================================
// Data is now loaded from stateElectionData.js
// This data is automatically available as stateElectionData object

// ============================================================================
// PERFORMANCE OPTIMIZATION - Lazy Loading & Caching
// ============================================================================

const PerformanceOptimizer = {
    cache: new Map(),
    
    /**
     * Get cached value or compute and cache new value
     */
    getOrCompute: (key, computeFn) => {
        if (PerformanceOptimizer.cache.has(key)) {
            return PerformanceOptimizer.cache.get(key);
        }
        const result = computeFn();
        PerformanceOptimizer.cache.set(key, result);
        return result;
    },

    /**
     * Lazy load images with Intersection Observer
     */
    lazyLoadImages: () => {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
};

// ============================================================================
// TRANSLATION SYSTEM
// ============================================================================

/**
 * Translation Manager for Multi-language Support
 */
const TranslationManager = {
    currentLanguage: localStorage.getItem('electedu-language') || 'en',
    
    /**
     * Translate content on the page
     * @param {string} lang - Language code
     */
    translatePage: function(lang) {
        if (!translations) {
            Logger.warn('Translations not loaded');
            return;
        }

        const langData = translations[lang];
        if (!langData) {
            Logger.warn(`Language ${lang} not found`);
            return;
        }

        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Translate attributes
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (langData[key]) {
                element.title = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            }
        });

        // Update HTML direction for RTL languages
        if (lang === 'ur' || lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = lang;
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = lang;
        }

        this.currentLanguage = lang;
        localStorage.setItem('electedu-language', lang);
        Logger.log('Language changed to:', lang);

        // Track language change
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_changed', {
                language: lang
            });
        }
    },

    /**
     * Initialize translations on page load
     */
    init: function() {
        const savedLanguage = localStorage.getItem('electedu-language') || 'en';
        this.translatePage(savedLanguage);
    }
};

// ============================================================================
// COUNTER ANIMATION (Global)
// ============================================================================

function triggerCounters() {
    const counters = document.querySelectorAll('.stat-value');
    if (counters.length === 0) {
        Logger.warn('No counters found');
        return;
    }
    
    counters.forEach(counter => {
        try {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            
            if (isNaN(target)) return;
            
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            const startTime = performance.now();
            
            const updateCounter = (currentTime) => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            };
            
            requestAnimationFrame(updateCounter);
        } catch (error) {
            Logger.warn('Counter error:', error);
        }
    });
}

// Make globally accessible
window.triggerCounters = triggerCounters;

// ============================================================================
// GLOBAL ERROR BOUNDARY & FALLBACK HANDLERS
// ============================================================================

/**
 * Global error handler for uncaught errors
 */
window.addEventListener('error', function(event) {
    Logger.error('Uncaught global error:', event.error);
    // Optionally report to analytics or error tracking service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'error', {
            error_message: event.message,
            error_source: event.filename,
            error_line: event.lineno
        });
    }
});

/**
 * Unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', function(event) {
    Logger.error('Unhandled promise rejection:', event.reason);
    if (typeof gtag !== 'undefined') {
        gtag('event', 'promise_rejection', {
            reason: event.reason.toString ? event.reason.toString() : 'Unknown'
        });
    }
});

/**
 * Safe DOM element getter with fallback
 * @param {string} id - Element ID
 * @returns {Element|null} - DOM element or null
 */
function safeGetElement(id) {
    try {
        const el = document.getElementById(id);
        if (!el) {
            Logger.warn(`Element not found: ${id}`);
            return null;
        }
        return el;
    } catch (error) {
        Logger.error(`Error getting element ${id}:`, error);
        return null;
    }
}

/**
 * Safe event listener wrapper
 * @param {Element} el - DOM element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 */
function safeAddEventListener(el, event, handler) {
    try {
        if (!el) return;
        el.addEventListener(event, handler);
    } catch (error) {
        Logger.error(`Error adding event listener ${event}:`, error);
    }
}

// ============================================================================

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Google Services first
    await initializeGoogleServices();

    // ===== 1. MOBILE NAVIGATION TOGGLE =====
    try {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileToggle.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                    mobileToggle.setAttribute('aria-expanded', 'true');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileToggle) {
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        Logger.log('Mobile navigation initialized');
    } catch (error) {
        Logger.error('Mobile navigation initialization failed', error);
    }

    try {
        // ===== 2. SCROLL REVEAL ANIMATIONS =====
        const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // If it's a stats counter, trigger animation
                    if (entry.target.classList.contains('stats-container') || entry.target.closest('.stats-container')) {
                        triggerCounters();
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
        
        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            revealObserver.observe(statsContainer);
        }

        Logger.log('Scroll reveal animations initialized');
    } catch (error) {
        Logger.error('Scroll reveal initialization failed', error);
    }

    try {
        // ===== 3. ANIMATED COUNTERS - Already globally defined above =====
        // Trigger counters immediately
        triggerCounters();
        Logger.log('Counters triggered');
    } catch (error) {
        Logger.error('Counter initialization failed', error);
    }

    try {
        // ===== 4. INTERACTIVE STATE SELECTOR WITH INPUT VALIDATION =====
        const stateSelect = document.getElementById('state-select');
        const stateInfoPanel = document.getElementById('state-info-panel');
        const statePlaceholder = document.getElementById('state-placeholder');
        
        if (stateSelect && stateInfoPanel) {
            // Initialize Select2 Auto-Complete with accessibility
            if (typeof $ !== 'undefined' && $('#state-select').length) {
                $('#state-select').select2({
                    placeholder: "-- Search or Choose your State --",
                    width: '100%',
                    dropdownAutoWidth: true,
                    allowClear: true
                });
            }
            
            const stName = document.getElementById('st-name');
            const stStatus = document.getElementById('st-status');
            const stDates = document.getElementById('st-dates');
            const stSeats = document.getElementById('st-seats');
            const stLs = document.getElementById('st-ls');

            if ($) {
                $('#state-select').on('select2:select', function (e) {
                    try {
                        const selectedState = e.params.data.id;
                        const data = window.stateElectionData[selectedState];

                        if (!data) {
                            Logger.warn('State data not found for:', selectedState);
                            return;
                        }

                        // Sanitize and update text content
                        statePlaceholder.style.display = 'none';
                        stateInfoPanel.style.display = 'block';
                        
                        stName.textContent = sanitizeHTML(selectedState);
                        stDates.textContent = sanitizeHTML(data.dates);
                        stSeats.textContent = sanitizeHTML(data.seats) + " Constituencies";
                        stLs.textContent = sanitizeHTML(data.ls) + " Members";
                        
                        // Update badge with sanitization
                        stStatus.textContent = sanitizeHTML(data.status);
                        stStatus.className = 'st-badge ' + (data.type === 'recent' ? 'recent' : data.type === 'upcoming' ? 'upcoming' : 'other');
                        
                        // Update timeline steps
                        const steps = document.querySelectorAll('.st-step');
                        steps.forEach(s => s.classList.remove('active'));
                        
                        if (data.type === 'recent') {
                            for (let i = 0; i < Math.min(4, steps.length); i++) {
                                steps[i].classList.add('active');
                            }
                        } else if (steps.length > 0) {
                            steps[0].classList.add('active');
                        }

                        Logger.log('State selected:', selectedState);
                        
                        // Track state selection with Firebase Analytics (if available)
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'state_selected', {
                                state_name: selectedState,
                                election_status: data.status,
                                election_type: data.type
                            });
                        }
                    } catch (error) {
                        Logger.error('State selection error', error);
                    }
                });
            }
        }

        Logger.log('State selector initialized');
    } catch (error) {
        Logger.error('State selector initialization failed', error);
    }



    try {
        // ===== 5. ACCESSIBLE FAQ ACCORDION WITH GOOGLE ANALYTICS TRACKING =====
        const accordionBtns = document.querySelectorAll('.accordion-btn');
        
        accordionBtns.forEach((btn, index) => {
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-controls', `accordion-content-${index}`);
            
            btn.addEventListener('click', function() {
                try {
                    const content = this.nextElementSibling;
                    if (!content) return;
                    
                    const isOpen = this.getAttribute('aria-expanded') === 'true';
                    
                    // Close all others
                    accordionBtns.forEach(otherBtn => {
                        if (otherBtn !== this) {
                            otherBtn.setAttribute('aria-expanded', 'false');
                            const otherContent = otherBtn.nextElementSibling;
                            if (otherContent) {
                                otherContent.style.maxHeight = null;
                            }
                        }
                    });
                    
                    // Toggle current
                    this.setAttribute('aria-expanded', !isOpen);
                    content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";

                    // Track FAQ interaction with Google Analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'faq_engagement', {
                            faq_index: index,
                            action: !isOpen ? 'opened' : 'closed',
                            faq_question: this.textContent.substring(0, 50)
                        });
                    }

                    Logger.log('FAQ item toggled:', index, !isOpen ? 'opened' : 'closed');
                } catch (error) {
                    Logger.error('Accordion toggle error', error);
                }
            });
        });

        Logger.log('FAQ accordion initialized with accessibility and tracking');
    } catch (error) {
        Logger.error('Accordion initialization failed', error);
    }

    // ===== 7. LANGUAGE SELECTOR WITH TRANSLATION =====
    try {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            // Restore saved language
            const savedLanguage = localStorage.getItem('electedu-language') || 'en';
            languageSelect.value = savedLanguage;
            
            // Initialize translations on page load
            TranslationManager.init();

            languageSelect.addEventListener('change', function(e) {
                const selectedLanguage = e.target.value;
                TranslationManager.translatePage(selectedLanguage);
            });
        }
    } catch (error) {
        Logger.warn('Language selector initialization failed', error);
    }

    // ===== 8. PERFORMANCE OPTIMIZATION - Lazy Load Images =====
    PerformanceOptimizer.lazyLoadImages();
    
    // ===== 9. GOOGLE ANALYTICS INTEGRATION (Enhanced) =====
    try {
        // Initialize Google Analytics if gtag is available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_path': window.location.pathname,
                'page_title': document.title
            });
            
            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', () => {
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                    if (maxScroll >= 25 && maxScroll < 50) {
                        gtag('event', 'scroll_depth', { 'value': 25 });
                    } else if (maxScroll >= 50 && maxScroll < 75) {
                        gtag('event', 'scroll_depth', { 'value': 50 });
                    } else if (maxScroll >= 75) {
                        gtag('event', 'scroll_depth', { 'value': 75 });
                    }
                }
            });

            // Track button clicks
            document.querySelectorAll('.btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    gtag('event', 'button_click', {
                        'button_text': btn.textContent,
                        'button_class': btn.className
                    });
                });
            });

            Logger.log('Google Analytics tracking initialized');
        }
    } catch (error) {
        Logger.warn('Google Analytics not available', error);
    }
});

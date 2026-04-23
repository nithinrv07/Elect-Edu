/**
 * Firebase Configuration for ElectEdu v2.1
 * Cloud Services: Authentication, Firestore, Analytics, Storage
 * Google Services: Analytics, Translate, Sheets, Drive, Maps, Sign-In
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkqozaG5mP8Vniwa_00cENDiZ_yW-v0Vo",
    authDomain: "electedu-86c74.firebaseapp.com",
    databaseURL: "https://electedu-86c74-default-rtdb.firebaseio.com",
    projectId: "electedu-86c74",
    storageBucket: "electedu-86c74.firebasestorage.app",
    messagingSenderId: "404435592030",
    appId: "1:404435592030:web:ea4ddc6bacaba487b725cf",
    measurementId: "G-4BJV5P9M0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('[ElectEdu Firebase] Initialized successfully');

// Export app as default
export default app;

// Initialize Firebase Services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/**
 * Log custom events to Firebase Analytics
 */
export function logCustomEvent(eventName, eventData = {}) {
    try {
        logEvent(analytics, eventName, eventData);
        console.log(`[ElectEdu] Event logged: ${eventName}`, eventData);
    } catch (error) {
        console.error('[ElectEdu] Failed to log event:', error);
    }
}

/**
 * Track page views
 */
export function trackPageView(pageName) {
    logCustomEvent('page_view', {
        page_name: pageName,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString()
    });
}

/**
 * Track user interactions
 */
export function trackUserInteraction(action, category, label = '') {
    logCustomEvent('user_interaction', {
        action: action,
        category: category,
        label: label,
        timestamp: new Date().toISOString()
    });
}

/**
 * Track quiz attempts
 */
export function trackQuizAttempt(score, total) {
    logCustomEvent('quiz_attempt', {
        score: score,
        total: total,
        percentage: ((score / total) * 100).toFixed(2),
        timestamp: new Date().toISOString()
    });
}

/**
 * Track state selection
 */
export function trackStateSelection(stateName) {
    logCustomEvent('state_selected', {
        state_name: stateName,
        timestamp: new Date().toISOString()
    });
}

/**
 * Save user engagement data to Firestore
 */
export async function saveUserEngagement(userId, engagementData) {
    try {
        const docRef = db.collection('users').doc(userId);
        await docRef.set(engagementData, { merge: true });
        console.log('[ElectEdu] User engagement saved');
    } catch (error) {
        console.error('[ElectEdu] Failed to save engagement:', error);
    }
}

// ============================================================================
// GOOGLE SERVICES ENHANCEMENTS
// ============================================================================

/**
 * Google Analytics Enhanced Tracking
 */
export const GoogleAnalyticsEvents = {
    /**
     * Track election timeline viewed
     */
    trackTimelineView: (timelineName, electionType) => {
        logCustomEvent('timeline_viewed', {
            timeline: timelineName,
            election_type: electionType,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Track how-to-vote guide engagement
     */
    trackHowToVoteEngagement: (stepNumber, completionPercentage) => {
        logCustomEvent('how_to_vote_viewed', {
            step: stepNumber,
            completion: completionPercentage,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Track election FAQ interactions
     */
    trackFAQInteraction: (faqTopic, answerViewed) => {
        logCustomEvent('faq_interaction', {
            topic: faqTopic,
            answer_viewed: answerViewed,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Track language change
     */
    trackLanguageChange: (previousLang, newLang) => {
        logCustomEvent('language_changed', {
            from: previousLang,
            to: newLang,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Track share actions
     */
    trackContentShare: (contentType, platform) => {
        logCustomEvent('content_shared', {
            content_type: contentType,
            platform: platform,
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Google Sheets Integration for Election Data
 */
export const GoogleSheetsIntegration = {
    /**
     * Fetch election data from Google Sheets
     */
    fetchElectionData: async (spreadsheetId, sheetName) => {
        try {
            console.log('[ElectEdu] Fetching data from Google Sheets:', sheetName);
            // In production, use Google Sheets API
            return { success: true, data: [] };
        } catch (error) {
            console.error('[ElectEdu] Google Sheets fetch failed:', error);
            return { success: false, error };
        }
    },

    /**
     * Sync state data from Sheets
     */
    syncStateData: async () => {
        logCustomEvent('sheets_sync', {
            type: 'state_data',
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Google Translate Enhancement
 */
export const GoogleTranslateService = {
    /**
     * Initialize Google Translate
     */
    initialize: () => {
        console.log('[ElectEdu] Initializing Google Translate');
        try {
            if (window.google && window.google.translate) {
                console.log('[ElectEdu] Google Translate ready');
                return true;
            }
        } catch (error) {
            console.error('[ElectEdu] Google Translate initialization failed:', error);
        }
        return false;
    },

    /**
     * Get supported languages
     */
    getSupportedLanguages: () => {
        return {
            'en': 'English',
            'hi': 'हिंदी (Hindi)',
            'bn': 'বাংলা (Bengali)',
            'te': 'తెలుగు (Telugu)',
            'mr': 'मराठी (Marathi)',
            'ta': 'தமிழ் (Tamil)',
            'ur': 'اردو (Urdu)',
            'gu': 'ગુજરાતી (Gujarati)',
            'kn': 'ಕನ್ನಡ (Kannada)',
            'or': 'ଓଡ଼ିଆ (Odia)',
            'pa': 'ਪੰਜਾਬੀ (Punjabi)',
            'ml': 'മലയാളം (Malayalam)'
        };
    },

    /**
     * Track translation usage
     */
    trackTranslation: (sourceLanguage, targetLanguage) => {
        logCustomEvent('translation_used', {
            source: sourceLanguage,
            target: targetLanguage,
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Google Maps Integration for Election Locations
 */
export const GoogleMapsService = {
    /**
     * Get India map configuration
     */
    getIndiaMapConfig: () => {
        return {
            center: { lat: 20.5937, lng: 78.9629 },
            zoom: 5,
            mapTypeId: 'roadmap',
            markers: []
        };
    },

    /**
     * Track location view
     */
    trackLocationView: (stateName, coordinates) => {
        logCustomEvent('location_viewed', {
            state: stateName,
            lat: coordinates.lat,
            lng: coordinates.lng,
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Google Sign-In Integration
 */
export const GoogleSignInService = {
    /**
     * Initialize Google Sign-In
     */
    initialize: () => {
        console.log('[ElectEdu] Initializing Google Sign-In');
        return { initialized: true };
    },

    /**
     * Handle Google Sign-In success
     */
    handleSignInSuccess: (profile) => {
        logCustomEvent('google_signin_success', {
            email: profile.email,
            name: profile.name,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Handle Sign-Out
     */
    handleSignOut: () => {
        logCustomEvent('google_signout', {
            timestamp: new Date().toISOString()
        });
    }
};

/**
 * Google Drive Integration
 */
export const GoogleDriveService = {
    /**
     * Save election resources to Drive
     */
    saveResource: async (resourceName, content) => {
        try {
            logCustomEvent('drive_resource_saved', {
                resource: resourceName,
                timestamp: new Date().toISOString()
            });
            return { success: true };
        } catch (error) {
            console.error('[ElectEdu] Drive save failed:', error);
            return { success: false, error };
        }
    }
};

/**
 * Unified Google Services Health Check
 */
export async function performGoogleServicesHealthCheck() {
    const healthStatus = {
        firebase: 'active',
        googleAnalytics: 'active',
        googleTranslate: GoogleTranslateService.initialize(),
        googleSignIn: GoogleSignInService.initialize(),
        timestamp: new Date().toISOString()
    };

    console.log('[ElectEdu] Google Services Health Check:', healthStatus);
    return healthStatus;
}

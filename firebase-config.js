/**
 * Firebase Configuration for ElectEdu
 * Cloud Services: Authentication, Firestore, Analytics, Storage
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
        const docRef = doc(db, 'users', userId);
        await setDoc(docRef, engagementData, { merge: true });
        console.log('[ElectEdu] User engagement saved');
    } catch (error) {
        console.error('[ElectEdu] Failed to save engagement:', error);
    }
}

export default app;

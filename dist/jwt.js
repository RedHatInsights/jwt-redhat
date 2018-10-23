(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jwt"] = factory();
	else
		root["jwt"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __webpack_require__(1);
exports.default = jwt_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Keycloak = __webpack_require__(2);
var cacheUtils_1 = __webpack_require__(4);
/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global JSON, define, console, document, window, chrometwo_require*/
/*jslint browser: true*/
var private_functions = {
    /**
     * Store things in local- or sessionStorage.  Because *Storage only
     * accepts string values, the store will automatically serialize
     * objects into JSON strings when you store them (set), and deserialize
     * them back into objects when you retrieve them (get).
     *
     * @param {string} type Either "local" or "session", depending on
     * whether you want localStorage or sessionStorage.
     * @return {object} An object-friendly interface to localStorage or
     * sessionStorage.
     */
    make_store: function (type) {
        var store;
        try {
            // if DOM Storage is disabled in Chrome, merely referencing
            // window.localStorage or window.sessionStorage will throw a
            // DOMException.
            store = window[type + 'Storage'];
            // if DOM Storage is disabled in other browsers, it may not
            // throw an error, but we should still throw one for them.
            if (!store)
                throw new Error('DOM Storage is disabled');
        }
        catch (e) {
            // this means DOM storage is disabled in the users' browser, so
            // we'll create an in-memory object that simulates the DOM
            // Storage API.
            store = {
                getItem: function mem_store_get_item(key) {
                    return store[key];
                },
                setItem: function mem_store_set_item(key, value) {
                    return (store[key] = value);
                },
                removeItem: function mem_store_remove_item(key) {
                    return delete store[key];
                }
            };
        }
        // The get and set here are used exclusively for getting and setting the token and refreshToken which are strings.
        return {
            get: function get(key) {
                var value = store.getItem(key);
                return value && JSON.parse(value);
            },
            set: function set(key, val) {
                if (typeof val !== 'undefined') {
                    return store.setItem(key, JSON.stringify(val));
                }
            },
            remove: function remove(key) {
                return store.removeItem(key);
            }
        };
    }
};
var lib = {
    /**
     * A simple function to get the value of a given cookie
     * @param {string} cookieName The cookie name/key
     * @returns {string} The string value of the cookie, "" if there was no cookie
     */
    getCookieValue: function (cookieName) {
        var start, end;
        if (document.cookie.length > 0) {
            start = document.cookie.indexOf(cookieName + '=');
            if (start !== -1 && (start === 0 || (document.cookie.charAt(start - 1) === ' '))) {
                start += cookieName.length + 1;
                end = document.cookie.indexOf(';', start);
                if (end === -1) {
                    end = document.cookie.length;
                }
                return decodeURI(document.cookie.substring(start, end));
            }
        }
        return '';
    },
    setCookie: function (name, value, expires, path, domain, secure) {
        // set time, it's in milliseconds
        var today = new Date();
        today.setTime(today.getTime());
        /*
        if the expires variable is set, make the correct
        expires time, the current script below will set
        it for x number of days, to make it for hours,
        delete * 24, for minutes, delete * 60 * 24
        */
        if (expires) {
            expires = expires * 1000 * 60 * 60;
        }
        var expires_date = new Date(today.getTime() + (expires));
        document.cookie = name + '=' + encodeURI(value) +
            ((expires) ? ';expires=' + expires_date.toUTCString() : '') +
            ((path) ? ';path=' + path : '') +
            ((domain) ? ';domain=' + domain : '') +
            ((secure) ? ';secure' : '');
    },
    removeCookie: function removeCookie(cookie_name) {
        var cookie_date = new Date(); // current date & time
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = cookie_name += '=; expires=' + cookie_date.toUTCString();
    },
    log: function (message) {
        if (typeof console !== 'undefined') {
            console.log(message);
        }
    },
    store: {
        local: private_functions.make_store('local'),
        session: private_functions.make_store('session')
    }
};
var INTERNAL_ROLE = 'redhat:employees';
var TOKEN_NAME = 'rh_jwt';
var REFRESH_TOKEN_NAME = 'rh_refresh_token';
var TOKEN_EXP_TTE = 58; // Seconds to check forward if the token will expire
var REFRESH_INTERVAL = 1 * TOKEN_EXP_TTE * 1000; // ms. check token for upcoming expiration every this many milliseconds
var REFRESH_TTE = 90; // seconds. refresh only token if it would expire this many seconds from now
var FAIL_COUNT_NAME = 'refresh_fail_count';
var FAIL_COUNT_THRESHOLD = 5; // how many times in a row token refresh can fail before we give up trying
var userInfo; // To be used to set the user context in Raven
var disablePolling = false;
// This is explicitly to track when the first successfull updateToken happens.
var timeSkew = null;
var DEFAULT_KEYCLOAK_OPTIONS = {
    realm: 'redhat-external',
    // realm: 'short-session',
    clientId: 'changeme'
};
var DEFAULT_KEYCLOAK_INIT_OPTIONS = {
    responseMode: 'query',
    flow: 'standard',
    token: null,
    refreshToken: null
};
var origin = location.hostname;
// const originWithPort = location.hostname + (location.port ? ':' + location.port : '');
var token = lib.store.local.get(TOKEN_NAME) || lib.getCookieValue(TOKEN_NAME);
var refreshToken = lib.store.local.get(REFRESH_TOKEN_NAME);
if (token && token !== 'undefined') {
    DEFAULT_KEYCLOAK_INIT_OPTIONS.token = token;
}
if (refreshToken) {
    DEFAULT_KEYCLOAK_INIT_OPTIONS.refreshToken = refreshToken;
}
var state = {
    initialized: false,
    keycloak: null
};
var events = {
    init: [],
    token: [],
    tokenMismatch: [],
    refreshError: [],
    refreshSuccess: [],
    logout: [],
    tokenExpired: []
};
document.cookie = TOKEN_NAME + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.redhat.com; path=/; secure;';
/**
 * Log session-related messages to the console, in pre-prod environments.
 */
function log(message) {
    var args = arguments;
    try {
        cacheUtils_1.CacheUtils.get('debug-logging').then(function (debugLoggingCache) {
            if (debugLoggingCache && debugLoggingCache.value === true) {
                console.log.apply(console, args);
            }
        });
    }
    catch (e) { }
}
function isLocalStorageAvailable() {
    var test = 'test-local-storage';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch (e) {
        return false;
    }
}
// Disabling master/slave token updates until further testing.  One major issue is that
// slave tabs are unaware if the master tab fails to update the token leading to the slave tabs
// sending requests with expired tokens even since the isTokenExpired always returns false on
// slave tabs since the master is in control.
// when it is technically true.
// const tokenUpdateScheduler = isLocalStorageAvailable() ? new TokenUpdateScheduler() : null;
var tokenUpdateScheduler = null;
if (tokenUpdateScheduler) {
    tokenUpdateScheduler.logMessage = function (data) {
        log("[jwt.js] [Token Update Scheduler] " + data.text);
    };
    tokenUpdateScheduler.masterDidChange = function () {
        log("[jwt.js] [Token Update Scheduler] This tab became " + (this.isMaster ? 'master' : 'slave'));
    };
    // Call this to log out if the current tab is master or slave
    tokenUpdateScheduler.masterDidChange();
    tokenUpdateScheduler.updateTokenEvent = function (data) {
        if (!tokenUpdateScheduler.isMaster && data) {
            log("[jwt.js] [Token Update Scheduler] calling keycloak setToken on this slave instance to update with the refreshed master token.");
            state.keycloak.setToken(data.token, data.refreshToken, data.idToken, data.timeLocal);
            timeSkew = state.keycloak.timeSkew;
        }
    };
}
// Keep track of the setInterval for the refresh token so we can cancel it and restart it if need be
var refreshIntervalId;
/**
 * Kicks off all the session-related things.
 *
 * @memberof module:jwt
 * @private
 */
function init(jwtOptions) {
    log('[jwt.js] initializing');
    var options = jwtOptions.keycloakOptions ? Object.assign({}, DEFAULT_KEYCLOAK_OPTIONS, jwtOptions.keycloakOptions) : DEFAULT_KEYCLOAK_OPTIONS;
    options.url = !options.url ? ssoUrl(options.internalAuth) : options.url;
    disablePolling = jwtOptions.disablePolling;
    state.keycloak = Keycloak(options);
    // wire up our handlers to keycloak's events
    state.keycloak.onAuthSuccess = onAuthSuccess;
    state.keycloak.onAuthError = onAuthError;
    state.keycloak.onAuthRefreshSuccess = onAuthRefreshSuccessCallback;
    state.keycloak.onAuthRefreshError = onAuthRefreshErrorCallback;
    state.keycloak.onAuthLogout = onAuthLogoutCallback;
    state.keycloak.onTokenExpired = onTokenExpiredCallback;
    return state.keycloak
        .init(jwtOptions.keycloakInitOptions ? Object.assign({}, DEFAULT_KEYCLOAK_INIT_OPTIONS, jwtOptions.keycloakInitOptions) : DEFAULT_KEYCLOAK_INIT_OPTIONS)
        .success(keycloakInitSuccess)
        .error(keycloakInitError);
}
/**
 * Keycloak init success handler.
 * @memberof module:jwt
 * @param {Boolean} authenticated whether the user is authenticated or not
 * @private
 */
function keycloakInitSuccess(authenticated) {
    log('[jwt.js] initialized (authenticated: ' + authenticated + ')');
    if (authenticated) {
        setToken(state.keycloak.token);
        setRefreshToken(state.keycloak.refreshToken);
        resetFailCount().then(function () {
            startRefreshLoop();
        }).catch(function () {
            log('[jwt.js] unable to reset the fail count');
            startRefreshLoop();
        });
    }
    keycloakInitHandler();
}
/**
 * Call any init event handlers that have are registered.  One time call then removed.
 *
 * @memberof module:jwt
 * @private
 */
function handleInitEvents() {
    while (events.init.length) {
        var event_1 = events.init.shift();
        if (typeof event_1 === 'function') {
            event_1(Jwt);
        }
    }
}
/**
 * Call refresh error events
 *
 * @memberof module:jwt
 * @private
 */
function handleRefreshErrorEvents() {
    if (events.refreshError.length > 0) {
        events.refreshError.forEach(function (event) {
            if (typeof event === 'function') {
                event(Jwt);
            }
        });
    }
}
/**
 * Call refresh success events
 *
 * @memberof module:jwt
 * @private
 */
function handleRefreshSuccessEvents() {
    if (events.refreshSuccess.length > 0) {
        events.refreshSuccess.forEach(function (event) {
            if (typeof event === 'function') {
                event(Jwt);
            }
        });
    }
}
/**
 * Call logout events
 *
 * @memberof module:jwt
 * @private
 */
function handleLogoutEvents() {
    if (events.logout.length > 0) {
        events.logout.forEach(function (event) {
            if (typeof event === 'function') {
                event(Jwt);
            }
        });
    }
}
/**
 * Call Token expired events
 *
 * @memberof module:jwt
 * @private
 */
function handleTokenExpiredEvents() {
    if (events.tokenExpired.length > 0) {
        events.tokenExpired.forEach(function (event) {
            if (typeof event === 'function') {
                event(Jwt);
            }
        });
    }
}
/**
 * Call any token event handlers that have are registered.  One time call then removed.
 *
 * @memberof module:jwt
 * @private
 */
function handleTokenEvents() {
    while (events.token.length) {
        var event_2 = events.token.shift();
        if (typeof event_2 === 'function') {
            event_2(Jwt);
        }
    }
}
/**
 * Call any token mismatch event handlers that have are registered.  One time call then removed.
 *
 * @memberof module:jwt
 * @private
 */
function handleTokenMismatchEvents() {
    while (events.tokenMismatch.length) {
        var event_3 = events.tokenMismatch.shift();
        if (typeof event_3 === 'function') {
            event_3(Jwt);
        }
    }
}
/**
 * Register a function to be called when jwt.js has initialized.  Runs
 * immediately if already initialized.  When called, the function will be
 * passed a reference to the jwt.js API.
 *
 * @memberof module:jwt
 */
function onInit(func) {
    log('[jwt.js] registering init handler');
    if (state.initialized) {
        log("[jwt.js] running event handler: onInit");
        func(Jwt);
    }
    else {
        events.init.push(func);
    }
}
/**
 * Register a function to be called when jwt.js has initialized and
 * the first token update has successful run
 * @memberof module:jwt
 */
function onInitialUpdateToken(func) {
    log("[jwt.js] registering the onInitialUpdateToken handler");
    // We know the setToken has happened at least once when the timeLocal is properly set
    if (state.initialized && state.keycloak.timeSkew !== null) {
        log("[jwt.js] running event handler: onInitialUpdateToken");
        func(Jwt);
    }
    else {
        events.token.push(func);
    }
}
/**
 * Register a function to be called when the tokens mismatch.  This is a hard
 * error caused when mixing sso envs/tokens and requires a logout/log back in
 * @memberof module:jwt
 */
function onTokenMismatch(func) {
    log("[jwt.js] registering the onTokenMismatch handler");
    if (state.initialized) {
        log("[jwt.js] running event handler: onTokenMismatch");
        func(Jwt);
    }
    else {
        events.tokenMismatch.push(func);
    }
}
/**
 * Enable debug logging
 * @memberof module:jwt
 */
function enableDebugLogging() {
    return __awaiter(this, void 0, void 0, function () {
        var booleanCache, newBooleanCache;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cacheUtils_1.CacheUtils.get('debug-logging')];
                case 1:
                    booleanCache = _a.sent();
                    if (!(booleanCache && booleanCache.value === true)) return [3 /*break*/, 2];
                    log("[jwt.js] Debug logging already enabled");
                    return [3 /*break*/, 4];
                case 2:
                    newBooleanCache = { value: true };
                    return [4 /*yield*/, cacheUtils_1.CacheUtils.set('debug-logging', newBooleanCache)];
                case 3:
                    _a.sent();
                    log("[jwt.js] Enabled debug logging");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Disable debug logging
 * @memberof module:jwt
 */
function disableDebugLogging() {
    log("[jwt.js] Disabling debug logging");
    var newBooleanCache = { value: false };
    cacheUtils_1.CacheUtils.set('debug-logging', newBooleanCache);
}
function isMaster() {
    if (tokenUpdateScheduler) {
        return tokenUpdateScheduler.isMaster;
    }
    else {
        return true;
    }
}
/**
 * Keycloak init error handler.
 * @memberof module:jwt
 * @private
 */
function keycloakInitError() {
    log('[jwt.js] init error');
    keycloakInitHandler();
    removeToken();
    removeRefreshToken();
}
/**
 * Does some things after keycloak initializes, whether or not
 * initialization was successful.
 *
 * @memberof module:jwt
 * @private
 */
function keycloakInitHandler() {
    state.initialized = true;
    handleInitEvents();
}
/**
 * Call events after keycloak auth refresh error.
 *
 * @memberof module:jwt
 * @private
 */
function keycloakRefreshErrorHandler() {
    handleRefreshErrorEvents();
}
/**
 * Call events after keycloak auth refresh success.
 *
 * @memberof module:jwt
 * @private
 */
function keycloakRefreshSuccessHandler() {
    handleRefreshSuccessEvents();
}
/**
 * Call events after keycloak auth logout.
 *
 * @memberof module:jwt
 * @private
 */
function keycloakLogoutHandler() {
    handleLogoutEvents();
}
/**
 * Call events after keycloak token expired
 *
 * @memberof module:jwt
 * @private
 */
function keycloakTokenExpiredHandler() {
    handleTokenExpiredEvents();
}
/**
 * Creates a URL to the SSO service based on an old IDP URL.
 *
 * @memberof module:jwt
 * @returns {String} a URL to the SSO service
 * @private
 */
function ssoUrl(isInternal) {
    var subDomain = isInternal === true ? 'auth' : 'sso'; // defaults to sso
    switch (location.hostname) {
        // Valid PROD URLs
        case 'access.redhat.com':
        case 'prod.foo.redhat.com':
        case 'rhn.redhat.com':
        case 'hardware.redhat.com':
        case 'unified.gsslab.rdu2.redhat.com':
            log('[jwt.js] ENV: prod');
            return "https://" + subDomain + ".redhat.com/auth";
        // Valid STAGE URLs
        case 'access.stage.redhat.com':
        case 'access.stage.itop.redhat.com':
        case 'access.qa.itop.redhat.com':
        case 'access.ci.itop.redhat.com':
        case 'accessstage.usersys.redhat.com':
        case 'stage.foo.redhat.com':
            log('[jwt.js] ENV: stage');
            return "https://" + subDomain + ".stage.redhat.com/auth";
        // Valid QA URLs
        case 'access.qa.redhat.com':
        case 'qa.foo.redhat.com':
        case 'accessqa.usersys.redhat.com':
        case 'unified-qa.gsslab.pnq2.redhat.com':
            log('[jwt.js] ENV: qa');
            return "https://" + subDomain + ".qa.redhat.com/auth";
        case 'ui.foo.redhat.com':
            log('[jwt.js] ENV: qa / dev');
            return "https://" + subDomain + ".dev1.redhat.com/auth";
        case 'fte.foo.redhat.com':
            log('[jwt.js] ENV: fte');
            return "https://" + subDomain + ".dev.redhat.com/auth";
        // Valid CI URLs
        case 'access.devgssci.devlab.phx1.redhat.com':
        case 'accessci.usersys.redhat.com':
        case 'ci.foo.redhat.com':
        default:
            log('[jwt.js] ENV: ci');
            return "https://" + subDomain + ".dev2.redhat.com/auth";
    }
}
/**
 * A handler for when authentication is successfully established.
 *
 * @memberof module:jwt
 * @private
 */
function onAuthSuccess() {
    log('[jwt.js] onAuthSuccess');
}
function onAuthError() {
    removeToken();
    removeRefreshToken();
    log('[jwt.js] onAuthError');
}
function onAuthRefreshSuccessCallback() {
    log('[jwt.js] onAuthRefreshSuccess');
    keycloakRefreshSuccessHandler();
}
function onAuthRefreshErrorCallback() {
    log('[jwt.js] onAuthRefreshError');
    keycloakRefreshErrorHandler();
}
function onAuthLogoutCallback() {
    log('[jwt.js] onAuthLogout');
    keycloakLogoutHandler();
}
/**
 * Register a function to be called when keycloak has failed to refresh the session.  Runs
 * immediately if already initialized.  When called, the function will be
 * passed a reference to the jwt.js API.
 *
 * @memberof module:jwt
 */
function onAuthRefreshError(func) {
    log('[jwt.js] registering auth refresh error handler');
    events.refreshError.push(func);
}
/**
 * Register a function to be called when keycloak has successfully to refresh the session.
 *
 * @memberof module:jwt
 */
function onAuthRefreshSuccess(func) {
    log('[jwt.js] registering auth refresh success handler');
    events.refreshSuccess.push(func);
}
/**
 * Register a function to be called when keycloak has logged out.
 *
 * @memberof module:jwt
 */
function onAuthLogout(func) {
    log('[jwt.js] registering auth logout handler');
    events.logout.push(func);
}
function onTokenExpiredCallback() {
    log('[jwt.js] onTokenExpired');
    keycloakTokenExpiredHandler();
}
/**
 * Register a function to be called when keycloak as expired the token.  Runs
 * immediately if already initialized.  When called, the function will be
 * passed a reference to the jwt.js API.
 *
 * @memberof module:jwt
 */
function onTokenExpired(func) {
    log('[jwt.js] registering token expired handler');
    events.tokenExpired.push(func);
}
/**
 * Checks if the token is expired
 *
 * @memberof module:jwt
 * @private
 */
function isTokenExpired(tte) {
    if (tte === void 0) { tte = REFRESH_TTE; }
    if (isLocalStorageAvailable && tokenUpdateScheduler) {
        if (tokenUpdateScheduler.isMaster) {
            return state.keycloak.isTokenExpired(tte) === true;
        }
        else {
            // If the instance is a slave, then the getToken exp will always be out of date
            // most likely resulting in a -1 timeSkew so we should just return false here
            // as the master is responsible for keeping the token in check
            return false;
        }
    }
    else {
        return state.keycloak.isTokenExpired(tte) === true;
    }
}
/**
 * Refreshes the access token.  Recursively can be called with an iteration count
 * where the function will retry x number of times.
 *
 * @memberof module:jwt
 * @private
 */
function updateToken(force) {
    if (force === void 0) { force = false; }
    return __awaiter(this, void 0, void 0, function () {
        var isFailCountPassed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, failCountPassed()];
                case 1:
                    isFailCountPassed = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            try {
                                if (isFailCountPassed && force !== true) {
                                    var msg = "Not updating token because updating failed more than " + FAIL_COUNT_THRESHOLD + " times in a row";
                                    log("[jwt.js] " + msg);
                                    reject(msg);
                                }
                                else if (isLocalStorageAvailable && tokenUpdateScheduler) {
                                    if (tokenUpdateScheduler.isMaster) {
                                        log("[jwt.js] running updateToken as this tab is master" + (force === true ? ', forcing the token update' : ', updating if within ' + REFRESH_TTE + ' seconds'));
                                        return state.keycloak
                                            .updateToken(force === true ? -1 : REFRESH_TTE)
                                            .success(function (refreshed) {
                                            updateTokenSuccess(refreshed);
                                            resolve(refreshed);
                                        })
                                            .error(function (e) {
                                            updateTokenFailure(e);
                                            reject(e);
                                        });
                                    }
                                    else {
                                        log('[jwt.js] skipping updateToken call as this tab is a slave, see master tab');
                                        // TODO -- consider broadcasting a message to the master to update.
                                        // Also consider the implications of default returning a setSuccess here
                                        resolve(false);
                                    }
                                }
                                else {
                                    log('[jwt.js] running updateToken (without cross-tab communcation)');
                                    state.keycloak
                                        .updateToken(force === true ? -1 : REFRESH_TTE)
                                        .success(function (refreshed) {
                                        updateTokenSuccess(refreshed);
                                        resolve(refreshed);
                                    })
                                        .error(function (e) {
                                        updateTokenFailure(e);
                                        reject(e);
                                    });
                                }
                            }
                            catch (e) {
                                reject(e);
                            }
                        })];
            }
        });
    });
}
/**
 * Start the {@link module:jwt.refreshLoop refreshLoop}, which
 * periodically updates the authentication token.  This should only ever
 * be called manually if manually first cancelling the refresh loop
 *
 * @memberof module:jwt
 * @private
 */
function startRefreshLoop() {
    refreshLoop();
    if (disablePolling === true) {
        log('[jwt.js] Not starting the refresh loop interval as disablePolling is true.');
    }
    else {
        if (!refreshIntervalId) {
            refreshIntervalId = setInterval(refreshLoop, REFRESH_INTERVAL);
        }
        else {
            log('[jwt.js] Cannot start refresh loop as it is already started.');
        }
    }
}
/**
 * Cancel the {@link module:jwt.refreshLoop refreshLoop}
 * @memberof module:jwt
 * @private
 */
function cancelRefreshLoop(shouldStopTokenUpdates) {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        log('[jwt.js] token refresh interval cancelled');
    }
}
/**
 * This is run periodically by {@link module:jwt.startRefreshLoop
 * startRefreshLoop}.
 *
 * @memberof module:jwt
 * @private
 */
function refreshLoop() {
    return updateToken().then(function (refreshed) {
        log('[jwt.js] The refresh loop ' + ['did not refresh', 'refreshed'][~~refreshed] + ' the token');
        return refreshed;
    }).catch(function (e) {
        log("[jwt.js] The refresh loop failed to update the token due to: " + e);
        if (e && e.message && e.message.indexOf('not match') !== -1) {
            handleTokenMismatchEvents();
        }
        return false;
    });
}
/**
 * Handler run when a token is successfully updated.
 *
 * @memberof module:jwt
 * @private
 */
function updateTokenSuccess(refreshed) {
    log('[jwt.js] updateTokenSuccess, token was ' + ['not ', ''][~~refreshed] + 'refreshed');
    if (refreshed) {
        resetFailCount(); // token update worked, so reset number of consecutive failures
    }
    setToken(state.keycloak.token);
    setRefreshToken(state.keycloak.refreshToken);
    if (timeSkew === null && state.keycloak.timeSkew != null) {
        timeSkew = state.keycloak.timeSkew;
        handleTokenEvents();
    }
    try {
        if ((refreshed && !userInfo) || (refreshed && userInfo && (userInfo.username !== getUserInfo().username))) {
            setRavenUserContext();
        }
    }
    catch (e) {
        log("[jwt.js] Could not set Raven user context due to: " + e.message);
    }
}
/**
 * Handler run when a token update fails.
 *
 * @memberof module:jwt
 * @private
 */
function updateTokenFailure(e) {
    log('[jwt.js] updateTokenFailure');
    incFailCount();
    sendToSentry(new Error('Update token failure'), e);
}
/**
 * Save the refresh token value in a semi-persistent place (sessionStorage).
 *
 * @memberof module:jwt
 * @private
 */
function setRefreshToken(refresh_token) {
    log('[jwt.js] setting refresh token');
    lib.store.local.set(REFRESH_TOKEN_NAME, refresh_token);
    broadcastUpdatedToken();
}
/**
 * Remove the token value from its a semi-persistent place.
 *
 * @memberof module:jwt
 * @private
 */
function removeRefreshToken() {
    log('[jwt.js] removing refresh token');
    lib.store.local.remove(REFRESH_TOKEN_NAME);
}
function broadcastUpdatedToken() {
    if (tokenUpdateScheduler) {
        var tokenUpdateData = {
            token: state.keycloak.token,
            refreshToken: state.keycloak.refreshToken,
            idToken: state.keycloak.idToken,
            timeLocal: state.keycloak.timeLocal
        };
        tokenUpdateScheduler.broadcast('updateTokenEvent', tokenUpdateData);
    }
}
/**
 * Save the token value in a semi-persistent place (cookie).
 *
 * @memberof module:jwt
 * @private
 */
function setToken(token) {
    // make sure token is defined
    if (token) {
        // save the token in localStorage AND in a cookie.  the cookie
        // exists so it'll be sent along with AJAX requests.  the
        // localStorage value exists so the token can be refreshed even if
        // it's been expired for a long time.
        log('[jwt.js] setting access token');
        lib.store.local.set(TOKEN_NAME, token);
        document.cookie = TOKEN_NAME + '=' + token + ';path=/;max-age=' + 15 * 60 + ';domain=.' + origin + ';secure;';
        broadcastUpdatedToken();
    }
}
/**
 * Remove the token value from its a semi-persistent place.
 *
 * @memberof module:jwt
 * @private
 */
function removeToken() {
    log('[jwt.js] removing access token');
    lib.store.local.remove(TOKEN_NAME);
    document.cookie = TOKEN_NAME + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.' + origin + '; path=/;secure;';
}
// init
// login
// createLoginUrl
// logout
// createLogoutUrl
// register
// createRegisterUrl
// createAccountUrl
// accountManagement
// hasRealmRole
// hasResourceRole
// loadUserProfile
// loadUserInfo
// isTokenExpired
// updateToken
// clearToken
// callback_id
// authenticated
// responseMode
// responseType
// flow
// authServerUrl
// realm
// clientId
// clientSecret
/**
 * Get an object containing the parsed JSON Web Token.  Contains user and session metadata.
 *
 * @memberof module:jwt
 * @return {Object} the parsed JSON Web Token
 */
function getToken() {
    // any here as actual RH tokens have more information than this, which we will customize with IToken above
    return state.keycloak.tokenParsed;
}
/**
 * Get the token value stored in the lib.  This method should always be used to get the token value
 * when constructing ajax calls in apps depending on jwt.js.  This ensures that the token is being
 * fetched from localStorage which is cross tab vs. on the keycloak instance which is per tab.
 *
 * If this method falls back to the getCookieValue, which I believe is per tab, then it still may succumb
 * to token expired errors to due to stale
 *
 * Note that the token is technically kept in sync across tabs, but this is the safest function to access
 * the latest token with
 *
 * @memberof module:jwt
 * @return {Object} the parsed JSON Web Token
 */
function getStoredTokenValue() {
    return lib.store.local.get(TOKEN_NAME) || lib.getCookieValue(TOKEN_NAME);
}
/* Get a string containing the unparsed, base64-encoded JSON Web Token.
*
* @memberof module:jwt
* @return {Object} the parsed JSON Web Token
*/
function getEncodedToken() {
    return state.keycloak.token;
}
/**
 * Get the user info from the JSON Web Token.  Contains user information
 * similar to what the old userStatus REST service returned.
 *
 * @memberof module:jwt
 * @return {Object} the user information
 */
function getUserInfo() {
    // the properties to return
    var token = getToken();
    return token ? {
        user_id: token.user_id,
        id: token.user_id,
        username: token.username,
        account_id: token.account_id,
        account_number: token.account_number,
        email: token.email,
        firstName: token.firstName,
        lastName: token.lastName,
        lang: token.lang,
        region: token.region,
        login: token.username,
        internal: isInternal()
    } : null;
}
/**
 * Is the user authenticated?
 *
 * @memberof module:jwt
 * @returns {Boolean} true if the user is authenticated, false otherwise
 */
function isAuthenticated() {
    return state.keycloak.authenticated;
}
/**
 * Is the user is a Red Hat employee?
 *
 * @memberof module:jwt
 * @returns {Boolean} true if the user is a Red Hat employee, otherwise false
 */
function isInternal() {
    return state.keycloak.hasRealmRole(INTERNAL_ROLE);
}
/**
 * Returns true if the user has all the given role(s).  You may provide any
 * number of roles.
 *
 * @param {...String} roles All the roles you wish to test for.  See
 * examples.
 * @returns {Boolean} whether the user is a member of ALL given roles
 * @example session.hasRole('portal_manage_cases');
 * session.hasRole('role1', 'role2', 'role3');
 * @memberof module:jwt
 */
function hasRole() {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    if (!roles)
        return false;
    for (var i = 0; i < roles.length; ++i) {
        if (!state.keycloak.hasRealmRole(roles[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Get the URL to the registration page.
 * @return {String} the URL to the registration page
 * @memberof module:jwt
 */
function getRegisterUrl() {
    return state.keycloak.createRegisterUrl();
}
/**
 * Get the URL to the login page.
 * @return {String} the URL to the login page
 * @memberof module:jwt
 */
function getLoginUrl(options) {
    if (options === void 0) { options = {}; }
    var redirectUri = options.redirectUri || location.href;
    options.redirectUri = redirectUri;
    return state.keycloak.createLoginUrl(options);
}
/**
 * Get the URL to the logout page.
 * @return {String} the URL to the logout page
 * @memberof module:jwt
 */
function getLogoutUrl() {
    return state.keycloak.createLogoutUrl();
}
/**
 * Get the URL to the account management page.
 * @return {String} the URL to the account management page
 * @memberof module:jwt
 */
function getAccountUrl() {
    return state.keycloak.createAccountUrl();
}
/**
 * "Decorator" enforcing that jwt.js be initialized before the wrapped
 * function will be run.
 *
 * @memberof module:jwt
 * @private
 * @param {Function} func a function which shouldn't be run before jwt.js is
 * initialized.
 * @return {Function}
 */
function initialized(func) {
    return function () {
        if (state.initialized) {
            return func.apply({}, arguments);
        }
        else {
            console.warn('[jwt.js] couldn\'t call function, session not initialized');
            return;
        }
    };
}
/**
 * Logs the user in.  An unauthenticated user will be sent to the
 * credentials form and then back to the current page.  An authenticated
 * user will be sent to the Keycloak server but bounced back to the current
 * page right away.
 *
 * @memberof module:jwt
 * @param {Object} options See [options](https://keycloak.gitbooks.io/securing-client-applications-guide/content/v/2.2/topics/oidc/javascript-adapter.html#_login_options) for valid options.
 */
function login(options) {
    if (options === void 0) { options = {}; }
    var redirectUri = options.redirectUri || location.href;
    options.redirectUri = redirectUri;
    state.keycloak.login(options);
}
/**
 * Navigate to the logout page, end session, then navigate back.
 * @memberof module:jwt
 */
function logout(options) {
    if (options === void 0) { options = {}; }
    removeToken();
    removeRefreshToken();
    state.keycloak.logout(options);
}
/**
 * Navigate to the account registration page.
 * @memberof module:jwt
 */
function register(options) {
    state.keycloak.register(options);
}
/**
 * Send current user context to Raven (JS error logging library).
 * @memberof module:jwt
 * @private
 */
function setRavenUserContext() {
    // once the user info service has returned, use its data to add user
    // context to RavenJS, for inclusion in Sentry error reports.
    userInfo = getUserInfo();
    if (typeof window.Raven !== 'undefined' && typeof window.Raven.setUserContext === 'function') {
        log('[jwt.js] sent user context to Raven');
        Raven.setUserContext(userInfo);
    }
}
/**
 * When the token expires
 * @memberof module:jwt
 * @private
 */
function expiresIn() {
    try {
        return state.keycloak.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + state.keycloak.timeSkew;
    }
    catch (e) {
        return null;
    }
}
/**
 * Send current user context to Raven (JS error logging library).
 * @memberof module:jwt
 * @private
 */
function sendToSentry(error, extra) {
    // once the user info service has returned, use its data to add user
    // context to RavenJS, for inclusion in Sentry error reports.
    userInfo = getUserInfo();
    if (typeof window.Raven !== 'undefined' && typeof window.Raven.captureException === 'function') {
        Raven.setTagsContext({
            is_authenticated: isAuthenticated(),
            is_token_expired: state.keycloak.authenticated ? state.keycloak.isTokenExpired(0) : null,
            token_expires_in: expiresIn(),
            // TODO -- if ever upgrading keycloak to upstream see https://github.com/keycloak/keycloak/pull/5008 to ensure this error message stays inline
            state_changed: extra && extra.message && extra.message.toLowerCase().indexOf('Cookie sessionId and keycloak sessionId do not match') !== -1
        });
        Raven.captureException(error, { extra: extra });
    }
}
/**
  * Get the number of times in a row that token refresh has failed.
  * @return {Number} the number of times that token refresh has failed
  * @memberof module:jwt
  */
function getFailCount() {
    try {
        return cacheUtils_1.CacheUtils.get(FAIL_COUNT_NAME).then(function (failCountCache) {
            return failCountCache.value;
        }).catch(function (e) {
            return 0;
        });
    }
    catch (e) {
        return Promise.resolve(0);
    }
}
/**
 * Return whether or not the consecutive failure count has been exceeded.
 * @memberof module:jwt
 * @return {Boolean} has the consecutive failure count been exceeded
 */
function failCountPassed() {
    return getFailCount().then(function (count) {
        return count > FAIL_COUNT_THRESHOLD;
    });
}
/**
 * Increment the number of times in a row that token refresh has failed.
 * @return {Number} the new, incremented number of times that token refresh has failed
 */
function incFailCount() {
    return getFailCount().then(function (failCount) {
        var newFailCount = failCount + 1;
        var newFailCountCache = {
            value: newFailCount
        };
        cacheUtils_1.CacheUtils.set(FAIL_COUNT_NAME, newFailCountCache);
        return newFailCount;
    });
}
/**
 * Reset the number of times in a row that token refresh has failed.
 */
function resetFailCount() {
    var newFailCountCache = {
        value: 0
    };
    return cacheUtils_1.CacheUtils.set(FAIL_COUNT_NAME, newFailCountCache);
}
var Jwt = {
    login: initialized(login),
    logout: initialized(logout),
    register: initialized(register),
    hasRole: initialized(hasRole),
    isInternal: initialized(isInternal),
    isAuthenticated: initialized(isAuthenticated),
    getRegisterUrl: initialized(getRegisterUrl),
    getLoginUrl: initialized(getLoginUrl),
    getLogoutUrl: initialized(getLogoutUrl),
    getAccountUrl: initialized(getAccountUrl),
    getToken: initialized(getToken),
    getStoredTokenValue: initialized(getStoredTokenValue),
    getEncodedToken: initialized(getEncodedToken),
    getUserInfo: initialized(getUserInfo),
    updateToken: initialized(updateToken),
    cancelRefreshLoop: initialized(cancelRefreshLoop),
    startRefreshLoop: initialized(startRefreshLoop),
    isTokenExpired: initialized(isTokenExpired),
    onInit: onInit,
    onAuthRefreshError: onAuthRefreshError,
    onAuthRefreshSuccess: onAuthRefreshSuccess,
    onAuthLogout: onAuthLogout,
    onTokenExpired: onTokenExpired,
    onInitialUpdateToken: onInitialUpdateToken,
    onTokenMismatch: onTokenMismatch,
    onAuthError: onAuthError,
    enableDebugLogging: enableDebugLogging,
    disableDebugLogging: disableDebugLogging,
    isMaster: isMaster,
    init: init,
    _state: state,
    getFailCount: getFailCount,
    failCountPassed: failCountPassed,
    expiresIn: expiresIn
};
exports.default = Jwt;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function( window, undefined ) {

    var Keycloak = function (config) {
        if (!(this instanceof Keycloak)) {
            return new Keycloak(config);
        }

        var kc = this;
        var adapter;
        var refreshQueue = [];
        var callbackStorage;

        var loginIframe = {
            enable: true,
            callbackList: [],
            interval: 5
        };

        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if ((scripts[i].src.indexOf('keycloak.js') !== -1 || scripts[i].src.indexOf('keycloak.min.js') !== -1) && scripts[i].src.indexOf('version=') !== -1) {
                kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf('version=') + 8).split('&')[0];
            }
        }

        var useNonce = true;
        
        kc.init = function (initOptions) {
            kc.authenticated = false;

            callbackStorage = createCallbackStorage();

            if (initOptions && initOptions.adapter === 'cordova') {
                adapter = loadAdapter('cordova');
            } else if (initOptions && initOptions.adapter === 'default') {
                adapter = loadAdapter();
            } else {
                if (window.Cordova || window.cordova) {
                    adapter = loadAdapter('cordova');
                } else {
                    adapter = loadAdapter();
                }
            }

            if (initOptions) {
                if (typeof initOptions.useNonce !== 'undefined') {
                    useNonce = initOptions.useNonce;
                }

                if (typeof initOptions.checkLoginIframe !== 'undefined') {
                    loginIframe.enable = initOptions.checkLoginIframe;
                }

                if (initOptions.checkLoginIframeInterval) {
                    loginIframe.interval = initOptions.checkLoginIframeInterval;
                }

                if (initOptions.onLoad === 'login-required') {
                    kc.loginRequired = true;
                }

                if (initOptions.responseMode) {
                    if (initOptions.responseMode === 'query' || initOptions.responseMode === 'fragment') {
                        kc.responseMode = initOptions.responseMode;
                    } else {
                        throw 'Invalid value for responseMode';
                    }
                }

                if (initOptions.flow) {
                    switch (initOptions.flow) {
                        case 'standard':
                            kc.responseType = 'code';
                            break;
                        case 'implicit':
                            kc.responseType = 'id_token token';
                            break;
                        case 'hybrid':
                            kc.responseType = 'code id_token token';
                            break;
                        default:
                            throw 'Invalid value for flow';
                    }
                    kc.flow = initOptions.flow;
                }

                if (initOptions.timeSkew != null) {
                    kc.timeSkew = initOptions.timeSkew;
                }
            }

            if (!kc.responseMode) {
                kc.responseMode = 'fragment';
            }
            if (!kc.responseType) {
                kc.responseType = 'code';
                kc.flow = 'standard';
            }

            var promise = createPromise();

            var initPromise = createPromise();
            initPromise.promise.success(function() {
                kc.onReady && kc.onReady(kc.authenticated);
                promise.setSuccess(kc.authenticated);
            }).error(function(errorData) {
                promise.setError(errorData);
            });

            var configPromise = loadConfig(config);

            function onLoad() {
                var doLogin = function(prompt) {
                    if (!prompt) {
                        options.prompt = 'none';
                    }
                    kc.login(options).success(function () {
                        initPromise.setSuccess();
                    }).error(function () {
                        initPromise.setError();
                    });
                }

                var options = {};
                switch (initOptions.onLoad) {
                    case 'check-sso':
                        if (loginIframe.enable) {
                            setupCheckLoginIframe().success(function() {
                                checkLoginIframe().success(function () {
                                    doLogin(false);
                                }).error(function () {
                                    initPromise.setSuccess();
                                });
                            });
                        } else {
                            doLogin(false);
                        }
                        break;
                    case 'login-required':
                        doLogin(true);
                        break;
                    default:
                        throw 'Invalid value for onLoad';
                }
            }

            function processInit() {
                var callback = parseCallback(window.location.href);

                if (callback) {
                    window.history.replaceState({}, null, callback.newUrl);
                }

                if (callback && callback.valid) {
                    return setupCheckLoginIframe().success(function() {
                        processCallback(callback, initPromise);
                    }).error(function (e) {
                        initPromise.setError();
                    });
                } else if (initOptions) {
                    if (initOptions.token && initOptions.refreshToken) {
                        setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);

                        if (loginIframe.enable) {
                            setupCheckLoginIframe().success(function() {
                                checkLoginIframe().success(function () {
                                    kc.onAuthSuccess && kc.onAuthSuccess();
                                    initPromise.setSuccess();
                                }).error(function () {
                                    setToken(null, null, null);
                                    initPromise.setSuccess();
                                });
                            });
                        } else {
                            kc.updateToken(-1).success(function() {
                                kc.onAuthSuccess && kc.onAuthSuccess();
                                initPromise.setSuccess();
                            }).error(function() {
                                kc.onAuthError && kc.onAuthError();
                                if (initOptions.onLoad) {
                                    onLoad();
                                } else {
                                    initPromise.setError();
                                }
                            });
                        }
                    } else if (initOptions.onLoad) {
                        onLoad();
                    } else {
                        initPromise.setSuccess();
                    }
                } else {
                    initPromise.setSuccess();
                }
            }

            configPromise.success(processInit);
            configPromise.error(function() {
                promise.setError();
            });

            return promise.promise;
        }

        kc.login = function (options) {
            return adapter.login(options);
        }

        kc.createLoginUrl = function(options) {
            var state = createUUID();
            var nonce = createUUID();

            var redirectUri = adapter.redirectUri(options);

            var callbackState = {
                state: state,
                nonce: nonce,
                redirectUri: encodeURIComponent(redirectUri)
            }

            if (options && options.prompt) {
                callbackState.prompt = options.prompt;
            }

            callbackStorage.add(callbackState);

            var baseUrl;
            if (options && options.action == 'register') {
                baseUrl = kc.endpoints.register();
            } else {
                baseUrl = kc.endpoints.authorize();
            }

            var scope = (options && options.scope) ? "openid " + options.scope : "openid";

            var url = baseUrl
                + '?client_id=' + encodeURIComponent(kc.clientId)
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&state=' + encodeURIComponent(state)
                + '&response_mode=' + encodeURIComponent(kc.responseMode)
                + '&response_type=' + encodeURIComponent(kc.responseType)
                + '&scope=' + encodeURIComponent(scope);
                if (useNonce) {
                    url = url + '&nonce=' + encodeURIComponent(nonce);
                }

            if (options && options.prompt) {
                url += '&prompt=' + encodeURIComponent(options.prompt);
            }

            if (options && options.maxAge) {
                url += '&max_age=' + encodeURIComponent(options.maxAge);
            }

            if (options && options.loginHint) {
                url += '&login_hint=' + encodeURIComponent(options.loginHint);
            }

            if (options && options.idpHint) {
                url += '&kc_idp_hint=' + encodeURIComponent(options.idpHint);
            }

            if (options && options.locale) {
                url += '&ui_locales=' + encodeURIComponent(options.locale);
            }

            return url;
        }

        kc.logout = function(options) {
            return adapter.logout(options);
        }

        kc.createLogoutUrl = function(options) {
            var url = kc.endpoints.logout()
                + '?redirect_uri=' + encodeURIComponent(adapter.redirectUri(options, false));

            return url;
        }

        kc.register = function (options) {
            return adapter.register(options);
        }

        kc.createRegisterUrl = function(options) {
            if (!options) {
                options = {};
            }
            options.action = 'register';
            return kc.createLoginUrl(options);
        }

        kc.createAccountUrl = function(options) {
            var realm = getRealmUrl();
            var url = undefined;
            if (typeof realm !== 'undefined') {
                url = realm
                + '/account'
                + '?referrer=' + encodeURIComponent(kc.clientId)
                + '&referrer_uri=' + encodeURIComponent(adapter.redirectUri(options));
            }
            return url;
        }

        kc.accountManagement = function() {
            return adapter.accountManagement();
        }

        kc.hasRealmRole = function (role) {
            var access = kc.realmAccess;
            return !!access && access.roles.indexOf(role) >= 0;
        }

        kc.hasResourceRole = function(role, resource) {
            if (!kc.resourceAccess) {
                return false;
            }

            var access = kc.resourceAccess[resource || kc.clientId];
            return !!access && access.roles.indexOf(role) >= 0;
        }

        kc.loadUserProfile = function() {
            var url = getRealmUrl() + '/account';
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.setRequestHeader('Accept', 'application/json');
            req.setRequestHeader('Authorization', 'bearer ' + kc.token);

            var promise = createPromise();

            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        kc.profile = JSON.parse(req.responseText);
                        promise.setSuccess(kc.profile);
                    } else {
                        promise.setError();
                    }
                }
            }

            req.send();

            return promise.promise;
        }

        kc.loadUserInfo = function() {
            var url = kc.endpoints.userinfo();
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.setRequestHeader('Accept', 'application/json');
            req.setRequestHeader('Authorization', 'bearer ' + kc.token);

            var promise = createPromise();

            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        kc.userInfo = JSON.parse(req.responseText);
                        promise.setSuccess(kc.userInfo);
                    } else {
                        promise.setError();
                    }
                }
            }

            req.send();

            return promise.promise;
        }

        kc.isTokenExpired = function(minValidity) {
            if (!kc.tokenParsed || (!kc.refreshToken && kc.flow != 'implicit' )) {
                throw 'Not authenticated';
            }

            if (kc.timeSkew == null) {
                console.info('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set');
                return true;
            }

            var expiresIn = kc.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + kc.timeSkew;
            if (minValidity) {
                expiresIn -= minValidity;
            }
            return expiresIn < 0;
        }

        kc.updateToken = function(minValidity) {
            var promise = createPromise();

            if (!kc.refreshToken) {
                promise.setError();
                return promise.promise;
            }

            minValidity = minValidity || 5;

            var exec = function() {
                var refreshToken = false;
                if (minValidity == -1) {
                    refreshToken = true;
                    console.info('[KEYCLOAK] Refreshing token: forced refresh');
                } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
                    refreshToken = true;
                    console.info('[KEYCLOAK] Refreshing token: token expired');
                }

                if (!refreshToken) {
                    promise.setSuccess(false);
                } else {
                    var params = 'grant_type=refresh_token&' + 'refresh_token=' + kc.refreshToken;
                    var url = kc.endpoints.token();

                    refreshQueue.push(promise);

                    if (refreshQueue.length == 1) {
                        var req = new XMLHttpRequest();
                        req.open('POST', url, true);
                        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        req.withCredentials = true;

                        if (kc.clientId && kc.clientSecret) {
                            req.setRequestHeader('Authorization', 'Basic ' + btoa(kc.clientId + ':' + kc.clientSecret));
                        } else {
                            params += '&client_id=' + encodeURIComponent(kc.clientId);
                        }

                        var timeLocal = new Date().getTime();

                        req.onreadystatechange = function () {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    console.info('[KEYCLOAK] Token refreshed');

                                    timeLocal = (timeLocal + new Date().getTime()) / 2;

                                    var tokenResponse = JSON.parse(req.responseText);

                                    setToken(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], timeLocal);

                                    kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                                    for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                        p.setSuccess(true);
                                    }
                                } else {
                                    console.warn('[KEYCLOAK] Failed to refresh token');

                                    kc.onAuthRefreshError && kc.onAuthRefreshError();
                                    for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                        p.setError(true);
                                    }
                                }
                            }
                        };

                        req.send(params);
                    }
                }
            }

            if (loginIframe.enable) {
                var iframePromise = checkLoginIframe();
                iframePromise.success(function() {
                    exec();
                }).error(function(e) {
                    promise.setError(e);
                });
            } else {
                exec();
            }

            return promise.promise;
        }

        kc.clearToken = function() {
            if (kc.token) {
                setToken(null, null, null);
                kc.onAuthLogout && kc.onAuthLogout();
                if (kc.loginRequired) {
                    kc.login();
                }
            }
        }

        function getRealmUrl() {
            if (typeof kc.authServerUrl !== 'undefined') {
                if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == '/') {
                    return kc.authServerUrl + 'realms/' + encodeURIComponent(kc.realm);
                } else {
                    return kc.authServerUrl + '/realms/' + encodeURIComponent(kc.realm);
                }
            } else {
            	return undefined;
            }
        }

        function getOrigin() {
            if (!window.location.origin) {
                return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
            } else {
                return window.location.origin;
            }
        }

        function processCallback(oauth, promise) {
            var code = oauth.code;
            var error = oauth.error;
            var prompt = oauth.prompt;

            var timeLocal = new Date().getTime();

            if (error) {
                if (prompt != 'none') {
                    var errorData = { error: error, error_description: oauth.error_description };
                    kc.onAuthError && kc.onAuthError(errorData);
                    promise && promise.setError(errorData);
                } else {
                    promise && promise.setSuccess();
                }
                return;
            } else if ((kc.flow != 'standard') && (oauth.access_token || oauth.id_token)) {
                authSuccess(oauth.access_token, null, oauth.id_token, true);
            }

            if ((kc.flow != 'implicit') && code) {
                var params = 'code=' + code + '&grant_type=authorization_code';
                var url = kc.endpoints.token();

                var req = new XMLHttpRequest();
                req.open('POST', url, true);
                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                if (kc.clientId && kc.clientSecret) {
                    req.setRequestHeader('Authorization', 'Basic ' + btoa(kc.clientId + ':' + kc.clientSecret));
                } else {
                    params += '&client_id=' + encodeURIComponent(kc.clientId);
                }

                params += '&redirect_uri=' + oauth.redirectUri;

                req.withCredentials = true;

                req.onreadystatechange = function() {
                    if (req.readyState == 4) {
                        if (req.status == 200) {

                            var tokenResponse = JSON.parse(req.responseText);
                            authSuccess(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], kc.flow === 'standard');
                        } else {
                            kc.onAuthError && kc.onAuthError();
                            promise && promise.setError();
                        }
                    }
                };

                req.send(params);
            }

            function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
                timeLocal = (timeLocal + new Date().getTime()) / 2;

                setToken(accessToken, refreshToken, idToken, timeLocal);

                if (useNonce && ((kc.tokenParsed && kc.tokenParsed.nonce != oauth.storedNonce) ||
                    (kc.refreshTokenParsed && kc.refreshTokenParsed.nonce != oauth.storedNonce) ||
                    (kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce))) {

                    console.info('[KEYCLOAK] Invalid nonce, clearing token');
                    kc.clearToken();
                    promise && promise.setError();
                } else {
                    if (fulfillPromise) {
                        kc.onAuthSuccess && kc.onAuthSuccess();
                        promise && promise.setSuccess();
                    }
                }
            }

        }

        function loadConfig(url) {
            var promise = createPromise();
            var configUrl;

            if (!config) {
                configUrl = 'keycloak.json';
            } else if (typeof config === 'string') {
                configUrl = config;
            }

            function setupOidcEndoints(oidcConfiguration) {
                if (! oidcConfiguration) {
                    kc.endpoints = {
                        authorize: function() {
                            return getRealmUrl() + '/protocol/openid-connect/auth';
                        },
                        token: function() {
                            return getRealmUrl() + '/protocol/openid-connect/token';
                        },
                        logout: function() {
                            return getRealmUrl() + '/protocol/openid-connect/logout';
                        },
                        checkSessionIframe: function() {
                            var src = getRealmUrl() + '/protocol/openid-connect/login-status-iframe.html';
                            if (kc.iframeVersion) {
                              src = src + '?version=' + kc.iframeVersion;
                            }
                            return src;
                        },
                        register: function() {
                            return getRealmUrl() + '/protocol/openid-connect/registrations';
                        },
                        userinfo: function() {
                            return getRealmUrl() + '/protocol/openid-connect/userinfo';
                        }
                    };
                } else {
                    kc.endpoints = {
                        authorize: function() {
                            return oidcConfiguration.authorization_endpoint;
                        },
                        token: function() {
                            return oidcConfiguration.token_endpoint;
                        },
                        logout: function() {
                            if (!oidcConfiguration.end_session_endpoint) {
                                throw "Not supported by the OIDC server";
                            }
                            return oidcConfiguration.end_session_endpoint;
                        },
                        checkSessionIframe: function() {
                            if (!oidcConfiguration.check_session_iframe) {
                                throw "Not supported by the OIDC server";
                            }
                            return oidcConfiguration.check_session_iframe;
                        },
                        register: function() {
                            throw 'Redirection to "Register user" page not supported in standard OIDC mode';
                        },
                        userinfo: function() {
                            if (!oidcConfiguration.userinfo_endpoint) {
                                throw "Not supported by the OIDC server";
                            }
                            return oidcConfiguration.userinfo_endpoint;
                        }
                    }
                }
            }

            if (configUrl) {
                var req = new XMLHttpRequest();
                req.open('GET', configUrl, true);
                req.setRequestHeader('Accept', 'application/json');

                req.onreadystatechange = function () {
                    if (req.readyState == 4) {
                        if (req.status == 200 || fileLoaded(req)) {
                            var config = JSON.parse(req.responseText);

                            kc.authServerUrl = config['auth-server-url'];
                            kc.realm = config['realm'];
                            kc.clientId = config['resource'];
                            kc.clientSecret = (config['credentials'] || {})['secret'];
                            setupOidcEndoints(null);
                            promise.setSuccess();
                        } else {
                            promise.setError();
                        }
                    }
                };

                req.send();
            } else {
                if (!config.clientId) {
                    throw 'clientId missing';
                }

                kc.clientId = config.clientId;
                kc.clientSecret = (config.credentials || {}).secret;

                var oidcProvider = config['oidcProvider'];
                if (!oidcProvider) {
                    if (!config['url']) {
                        var scripts = document.getElementsByTagName('script');
                        for (var i = 0; i < scripts.length; i++) {
                            if (scripts[i].src.match(/.*keycloak\.js/)) {
                                config.url = scripts[i].src.substr(0, scripts[i].src.indexOf('/js/keycloak.js'));
                                break;
                            }
                        }
                    }
                    if (!config.realm) {
                        throw 'realm missing';
                    }

                    kc.authServerUrl = config.url;
                    kc.realm = config.realm;
                    setupOidcEndoints(null);
                    promise.setSuccess();
                } else {
                    if (typeof oidcProvider === 'string') {
                        var oidcProviderConfigUrl;
                        if (oidcProvider.charAt(oidcProvider.length - 1) == '/') {
                            oidcProviderConfigUrl = oidcProvider + '.well-known/openid-configuration';
                        } else {
                            oidcProviderConfigUrl = oidcProvider + '/.well-known/openid-configuration';
                        }
                        var req = new XMLHttpRequest();
                        req.open('GET', oidcProviderConfigUrl, true);
                        req.setRequestHeader('Accept', 'application/json');

                        req.onreadystatechange = function () {
                            if (req.readyState == 4) {
                                if (req.status == 200 || fileLoaded(req)) {
                                    var oidcProviderConfig = JSON.parse(req.responseText);
                                    setupOidcEndoints(oidcProviderConfig);
                                    promise.setSuccess();
                                } else {
                                    promise.setError();
                                }
                            }
                        };

                        req.send();
                    } else {
                        setupOidcEndoints(oidcProvider);
                        promise.setSuccess();
                    }
                }
            }

            return promise.promise;
        }

        function fileLoaded(xhr) {
            return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith('file:');
        }

        function setToken(token, refreshToken, idToken, timeLocal) {
            if (kc.tokenTimeoutHandle) {
                clearTimeout(kc.tokenTimeoutHandle);
                kc.tokenTimeoutHandle = null;
            }

            if (refreshToken) {
                kc.refreshToken = refreshToken;
                kc.refreshTokenParsed = decodeToken(refreshToken);
            } else {
                delete kc.refreshToken;
                delete kc.refreshTokenParsed;
            }

            if (idToken) {
                kc.idToken = idToken;
                kc.idTokenParsed = decodeToken(idToken);
            } else {
                delete kc.idToken;
                delete kc.idTokenParsed;
            }

            if (token) {
                kc.token = token;
                kc.tokenParsed = decodeToken(token);
                kc.sessionId = kc.tokenParsed.session_state;
                kc.authenticated = true;
                kc.subject = kc.tokenParsed.sub;
                kc.realmAccess = kc.tokenParsed.realm_access;
                kc.resourceAccess = kc.tokenParsed.resource_access;

                if (timeLocal) {
                    kc.timeSkew = Math.floor(timeLocal / 1000) - kc.tokenParsed.iat;
                }

                if (kc.timeSkew != null) {
                    console.info('[KEYCLOAK] Estimated time difference between browser and server is ' + kc.timeSkew + ' seconds');

                    if (kc.onTokenExpired) {
                        var expiresIn = (kc.tokenParsed['exp'] - (new Date().getTime() / 1000) + kc.timeSkew) * 1000;
                        console.info('[KEYCLOAK] Token expires in ' + Math.round(expiresIn / 1000) + ' s');
                        if (expiresIn <= 0) {
                            kc.onTokenExpired();
                        } else {
                            kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
                        }
                    }
                }
            } else {
                delete kc.token;
                delete kc.tokenParsed;
                delete kc.subject;
                delete kc.realmAccess;
                delete kc.resourceAccess;

                kc.authenticated = false;
            }
        }

        function decodeToken(str) {
            str = str.split('.')[1];

            str = str.replace('/-/g', '+');
            str = str.replace('/_/g', '/');
            switch (str.length % 4)
            {
                case 0:
                    break;
                case 2:
                    str += '==';
                    break;
                case 3:
                    str += '=';
                    break;
                default:
                    throw 'Invalid token';
            }

            str = (str + '===').slice(0, str.length + (str.length % 4));
            str = str.replace(/-/g, '+').replace(/_/g, '/');

            str = decodeURIComponent(escape(atob(str)));

            str = JSON.parse(str);
            return str;
        }

        function createUUID() {
            var s = [];
            var hexDigits = '0123456789abcdef';
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = '4';
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = '-';
            var uuid = s.join('');
            return uuid;
        }

        kc.callback_id = 0;

        function createCallbackId() {
            var id = '<id: ' + (kc.callback_id++) + (Math.random()) + '>';
            return id;

        }

        function parseCallback(url) {
            var oauth = parseCallbackUrl(url);
            if (!oauth) {
                return;
            }

            var oauthState = callbackStorage.get(oauth.state);

            if (oauthState) {
                oauth.valid = true;
                oauth.redirectUri = oauthState.redirectUri;
                oauth.storedNonce = oauthState.nonce;
                oauth.prompt = oauthState.prompt;
            }

            return oauth;
        }

        function parseCallbackUrl(url) {
            var supportedParams;
            switch (kc.flow) {
                case 'standard':
                    supportedParams = ['code', 'state', 'session_state'];
                    break;
                case 'implicit':
                    supportedParams = ['access_token', 'id_token', 'state', 'session_state'];
                    break;
                case 'hybrid':
                    supportedParams = ['access_token', 'id_token', 'code', 'state', 'session_state'];
                    break;
            }

            supportedParams.push('error');
            supportedParams.push('error_description');
            supportedParams.push('error_uri');

            var queryIndex = url.indexOf('?');
            var fragmentIndex = url.indexOf('#');

            var newUrl;
            var parsed;

            if (kc.responseMode === 'query' && queryIndex !== -1) {
                newUrl = url.substring(0, queryIndex);
                parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
                if (parsed.paramsString !== '') {
                    newUrl += '?' + parsed.paramsString;
                }
                if (fragmentIndex !== -1) {
                    newUrl += url.substring(fragmentIndex);
                }
            } else if (kc.responseMode === 'fragment' && fragmentIndex !== -1) {
                newUrl = url.substring(0, fragmentIndex);
                parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
                if (parsed.paramsString !== '') {
                    newUrl += '#' + parsed.paramsString;
                }
            }

            if (parsed && parsed.oauthParams) {
                if (kc.flow === 'standard' || kc.flow === 'hybrid') {
                    if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
                        parsed.oauthParams.newUrl = newUrl;
                        return parsed.oauthParams;
                    }
                } else if (kc.flow === 'implicit') {
                    if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
                        parsed.oauthParams.newUrl = newUrl;
                        return parsed.oauthParams;
                    }
                }
            }
        }

        function parseCallbackParams(paramsString, supportedParams) {
            var p = paramsString.split('&');
            var result = {
                paramsString: '',
                oauthParams: {}
            }
            for (var i = 0; i < p.length; i++) {
                var t = p[i].split('=');
                if (supportedParams.indexOf(t[0]) !== -1) {
                    result.oauthParams[t[0]] = t[1];
                } else {
                    if (result.paramsString !== '') {
                        result.paramsString += '&';
                    }
                    result.paramsString += p[i];
                }
            }
            return result;
        }

        function createPromise() {
            if (typeof Promise === "function") {
                return createNativePromise();
            } else {
                return createLegacyPromise();
            }
        }

        function createNativePromise() {
            // Need to create a native Promise which also preserves the
            // interface of the custom promise type previously used by the API
            var p = {
                setSuccess: function(result) {
                    p.success = true;
                    p.resolve(result);
                },

                setError: function(result) {
                    p.success = false;
                    p.reject(result);
                }
            };
            p.promise = new Promise(function(resolve, reject) {
                p.resolve = resolve;
                p.reject = reject;
            });
            p.promise.success = function(callback) {
                p.promise.then(callback);
                return p.promise;
            }
            p.promise.error = function(callback) {
                p.promise.catch(callback);
                return p.promise;
            }
            return p;
        }

        function createLegacyPromise() {
            var p = {
                setSuccess: function(result) {
                    p.success = true;
                    p.result = result;
                    if (p.successCallback) {
                        p.successCallback(result);
                    }
                },

                setError: function(result) {
                    p.error = true;
                    p.result = result;
                    if (p.errorCallback) {
                        p.errorCallback(result);
                    }
                },

                promise: {
                    success: function(callback) {
                        if (p.success) {
                            callback(p.result);
                        } else if (!p.error) {
                            p.successCallback = callback;
                        }
                        return p.promise;
                    },
                    error: function(callback) {
                        if (p.error) {
                            callback(p.result);
                        } else if (!p.success) {
                            p.errorCallback = callback;
                        }
                        return p.promise;
                    }
                }
            }
            return p;
        }

        function setupCheckLoginIframe() {
            var promise = createPromise();

            if (!loginIframe.enable) {
                promise.setSuccess();
                return promise.promise;
            }

            if (loginIframe.iframe) {
                promise.setSuccess();
                return promise.promise;
            }

            var iframe = document.createElement('iframe');
            loginIframe.iframe = iframe;

            iframe.onload = function() {
                var authUrl = kc.endpoints.authorize();
                if (authUrl.charAt(0) === '/') {
                    loginIframe.iframeOrigin = getOrigin();
                } else {
                    loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf('/', 8));
                }
                promise.setSuccess();

                setTimeout(check, loginIframe.interval * 1000);
            }

            var src = kc.endpoints.checkSessionIframe();
            iframe.setAttribute('src', src );
            iframe.setAttribute('title', 'keycloak-session-iframe' );
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            var messageCallback = function(event) {
                if ((event.origin !== loginIframe.iframeOrigin) || (loginIframe.iframe.contentWindow !== event.source)) {
                    return;
                }

                if (!(event.data == 'unchanged' || event.data == 'changed' || event.data == 'error')) {
                    return;
                }


                if (event.data != 'unchanged') {
                    kc.clearToken();
                }

                var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);

                for (var i = callbacks.length - 1; i >= 0; --i) {
                    var promise = callbacks[i];
                    if (event.data == 'unchanged') {
                        promise.setSuccess();
                    } else {
                        promise.setError(new Error('Cookie sessionId and keycloak sessionId do not match.  Please logout and log back in.'));
                    }
                }
            };

            window.addEventListener('message', messageCallback, false);

            var check = function() {
                checkLoginIframe();
                if (kc.token) {
                    setTimeout(check, loginIframe.interval * 1000);
                }
            };

            return promise.promise;
        }

        function checkLoginIframe() {
            var promise = createPromise();

            if (loginIframe.iframe && loginIframe.iframeOrigin ) {
                var msg = kc.clientId + ' ' + kc.sessionId;
                loginIframe.callbackList.push(promise);
                var origin = loginIframe.iframeOrigin;
                if (loginIframe.callbackList.length == 1) {
                    loginIframe.iframe.contentWindow.postMessage(msg, origin);
                }
            } else {
                promise.setSuccess();
            }

            return promise.promise;
        }

        function loadAdapter(type) {
            if (!type || type == 'default') {
                return {
                    login: function(options) {
                        window.location.href = kc.createLoginUrl(options);
                        return createPromise().promise;
                    },

                    logout: function(options) {
                        window.location.href = kc.createLogoutUrl(options);
                        return createPromise().promise;
                    },

                    register: function(options) {
                        window.location.href = kc.createRegisterUrl(options);
                        return createPromise().promise;
                    },

                    accountManagement : function() {
                        var accountUrl = kc.createAccountUrl();
                        if (typeof accountUrl !== 'undefined') {
                            window.location.href = accountUrl;
                        } else {
                            throw "Not supported by the OIDC server";
                        }
                        return createPromise().promise;
                    },

                    redirectUri: function(options, encodeHash) {
                        if (arguments.length == 1) {
                            encodeHash = true;
                        }

                        if (options && options.redirectUri) {
                            return options.redirectUri;
                        } else if (kc.redirectUri) {
                            return kc.redirectUri;
                        } else {
                            return location.href;
                        }
                    }
                };
            }

            if (type == 'cordova') {
                loginIframe.enable = false;
                var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
                    if (window.cordova && window.cordova.InAppBrowser) {
                        // Use inappbrowser for IOS and Android if available
                        return window.cordova.InAppBrowser.open(loginUrl, target, options);
                    } else {
                        return window.open(loginUrl, target, options);
                    }
                };
                return {
                    login: function(options) {
                        var promise = createPromise();

                        var o = 'location=no';
                        if (options && options.prompt == 'none') {
                            o += ',hidden=yes';
                        }

                        var loginUrl = kc.createLoginUrl(options);
                        var ref = cordovaOpenWindowWrapper(loginUrl, '_blank', o);
                        var completed = false;

                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                var callback = parseCallback(event.url);
                                processCallback(callback, promise);
                                ref.close();
                                completed = true;
                            }
                        });

                        ref.addEventListener('loaderror', function(event) {
                            if (!completed) {
                                if (event.url.indexOf('http://localhost') == 0) {
                                    var callback = parseCallback(event.url);
                                    processCallback(callback, promise);
                                    ref.close();
                                    completed = true;
                                } else {
                                    promise.setError();
                                    ref.close();
                                }
                            }
                        });

                        return promise.promise;
                    },

                    logout: function(options) {
                        var promise = createPromise();

                        var logoutUrl = kc.createLogoutUrl(options);
                        var ref = cordovaOpenWindowWrapper(logoutUrl, '_blank', 'location=no,hidden=yes');

                        var error;

                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });

                        ref.addEventListener('loaderror', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            } else {
                                error = true;
                                ref.close();
                            }
                        });

                        ref.addEventListener('exit', function(event) {
                            if (error) {
                                promise.setError();
                            } else {
                                kc.clearToken();
                                promise.setSuccess();
                            }
                        });

                        return promise.promise;
                    },

                    register : function() {
                        var registerUrl = kc.createRegisterUrl();
                        var ref = cordovaOpenWindowWrapper(registerUrl, '_blank', 'location=no');
                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });
                    },

                    accountManagement : function() {
                        var accountUrl = kc.createAccountUrl();
                        if (typeof accountUrl !== 'undefined') {
                            var ref = cordovaOpenWindowWrapper(accountUrl, '_blank', 'location=no');
                            ref.addEventListener('loadstart', function(event) {
                                if (event.url.indexOf('http://localhost') == 0) {
                                    ref.close();
                                }
                            });
                        } else {
                            throw "Not supported by the OIDC server";
                        }
                    },

                    redirectUri: function(options) {
                        return 'http://localhost';
                    }
                }
            }

            throw 'invalid adapter type: ' + type;
        }

        var LocalStorage = function() {
            if (!(this instanceof LocalStorage)) {
                return new LocalStorage();
            }

            localStorage.setItem('kc-test', 'test');
            localStorage.removeItem('kc-test');

            var cs = this;

            function clearExpired() {
                var time = new Date().getTime();
                for (var i = 0; i < localStorage.length; i++)  {
                    var key = localStorage.key(i);
                    if (key && key.indexOf('kc-callback-') == 0) {
                        var value = localStorage.getItem(key);
                        if (value) {
                            try {
                                var expires = JSON.parse(value).expires;
                                if (!expires || expires < time) {
                                    localStorage.removeItem(key);
                                }
                            } catch (err) {
                                localStorage.removeItem(key);
                            }
                        }
                    }
                }
            }

            cs.get = function(state) {
                if (!state) {
                    return;
                }

                var key = 'kc-callback-' + state;
                var value = localStorage.getItem(key);
                if (value) {
                    localStorage.removeItem(key);
                    value = JSON.parse(value);
                }

                clearExpired();
                return value;
            };

            cs.add = function(state) {
                clearExpired();

                var key = 'kc-callback-' + state.state;
                state.expires = new Date().getTime() + (60 * 60 * 1000);
                localStorage.setItem(key, JSON.stringify(state));
            };
        };

        var CookieStorage = function() {
            if (!(this instanceof CookieStorage)) {
                return new CookieStorage();
            }

            var cs = this;

            cs.get = function(state) {
                if (!state) {
                    return;
                }

                var value = getCookie('kc-callback-' + state);
                setCookie('kc-callback-' + state, '', cookieExpiration(-100));
                if (value) {
                    return JSON.parse(value);
                }
            };

            cs.add = function(state) {
                setCookie('kc-callback-' + state.state, JSON.stringify(state), cookieExpiration(60));
            };

            cs.removeItem = function(key) {
                setCookie(key, '', cookieExpiration(-100));
            };

            var cookieExpiration = function (minutes) {
                var exp = new Date();
                exp.setTime(exp.getTime() + (minutes*60*1000));
                return exp;
            };

            var getCookie = function (key) {
                var name = key + '=';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return '';
            };

            var setCookie = function (key, value, expirationDate) {
                var cookie = key + '=' + value + '; '
                    + 'expires=' + expirationDate.toUTCString() + '; ';
                document.cookie = cookie;
            }
        };

        function createCallbackStorage() {
            try {
                return new LocalStorage();
            } catch (err) {
            }

            return new CookieStorage();
        }
    }

    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
        module.exports = Keycloak;
    } else {
        window.Keycloak = Keycloak;

        if ( true ) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Keycloak; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    }
})( window );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localForage = __webpack_require__(5);
// const MINUTES_1 = 60 * 1000;
// const HOURS_1 = 60 * MINUTES_1;
// const DAYS_1 = 24 * HOURS_1;
// const MONTHS_1 = 30 * DAYS_1;
exports.CACHE_STORAGE_NAME = 'jwt-redhat-lf';
localForage.config({
    name: exports.CACHE_STORAGE_NAME,
    driver: [localForage.LOCALSTORAGE]
});
var CacheUtils = /** @class */ (function () {
    function CacheUtils() {
    }
    CacheUtils.set = function (key, obj, options) {
        if (!obj.lastModifiedDate) {
            obj.lastModifiedDate = (new Date()).toISOString();
        }
        try {
            return localForage.setItem(key, obj);
        }
        catch (e) {
            console.warn("Unable to set " + key + " due to: " + e.message);
        }
    };
    CacheUtils.get = function (key) {
        try {
            return localForage.getItem(key);
        }
        catch (e) {
            console.warn("Unable to get " + key + " due to: " + e.message);
        }
    };
    CacheUtils.delete = function (key) {
        try {
            return localForage.removeItem(key);
        }
        catch (e) {
            console.warn("Unable to delete " + key + " due to: " + e.message);
        }
    };
    CacheUtils.clear = function () {
        try {
            return localForage.clear();
        }
        catch (e) {
            console.warn("Unable to clear all cache: " + e.message);
        }
    };
    CacheUtils.keys = function (text) {
        try {
            if (text) {
                return localForage.keys().then(function (keys) {
                    if (keys) {
                        return keys.filter(function (key) { return key.indexOf(text) !== -1; });
                    }
                    else {
                        return [];
                    }
                });
            }
            else {
                return localForage.keys();
            }
        }
        catch (e) {
            console.warn("Unable to get keys containing " + text + " due to: " + e.message);
        }
    };
    CacheUtils.setInSessionStorage = function (key, value) {
        try {
            sessionStorage.setItem(key, value);
        }
        catch (e) {
            console.warn("Could not set key: " + key + ", value: " + value + " in sessionStorage");
        }
    };
    CacheUtils.getInSessionStorage = function (key) {
        try {
            return sessionStorage.getItem(key);
        }
        catch (e) {
            console.warn("Could not get key: " + key + " in sessionStorage");
        }
    };
    return CacheUtils;
}());
exports.CacheUtils = CacheUtils;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*!
    localForage -- Offline Storage, Improved
    Version 1.5.5
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && typeof obj === 'object' && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

exports.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

exports.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

exports.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

exports.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs;
var dbContexts;
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve) {
        deferredOperation.resolve = resolve;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        if (forages[i]._dbInfo.db) {
            forages[i]._dbInfo.db.close();
            forages[i]._dbInfo.db = null;
        }
    }

    return _getConnection(dbInfo, false).then(function (db) {
        for (var j = 0; j < forages.length; j++) {
            forages[j]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback) {
    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (!dbInfo.db || err.name === 'InvalidStateError') {
            return _tryReconnect(dbInfo).then(function () {

                var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                callback(null, tx);
            });
        }

        callback(err);
    }
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Initialize a singleton container for all running localForages.
    if (!dbContexts) {
        dbContexts = {};
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = {
            // Running localForages sharing a database.
            forages: [],
            // Shared database.
            db: null,
            // Database readiness (promise).
            dbReady: null,
            // Deferred operations on the database.
            deferredOperations: []
        };
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        });
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {

                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.storeName + ' (key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage && typeof localStorage.setItem === 'function';
    } catch (e) {
        return false;
    }
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = dbInfo.name + '/';

    if (dbInfo.storeName !== self._defaultConfig.storeName) {
        dbInfo.keyPrefix += dbInfo.storeName + '/';
    }

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error('Can\'t call config() after localforage ' + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var customDriverMethod = driverMethods[i];
                    if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

/***/ })
/******/ ]);
});
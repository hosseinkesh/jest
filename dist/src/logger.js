"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.warn = warn;
// logger.ts
function log(message) {
    console.log(message);
}
function warn(message) {
    log(`WARN: ${message}`);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
exports.scheduleEmail = scheduleEmail;
function sendEmail(to, subject, body) {
    // Imagine this really sends an email
    console.log(`Email sent to ${to}: ${subject}`);
    return true;
}
function scheduleEmail(to, subject, body, delay) {
    setTimeout(() => {
        sendEmail(to, subject, body);
    }, delay);
    return "scheduled";
}

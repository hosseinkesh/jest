"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = sendWelcomeEmail;
exports.sendPasswordResetEmail = sendPasswordResetEmail;
const emailClient_1 = require("./emailClient");
function sendWelcomeEmail(to) {
    return (0, emailClient_1.send)(to, "Welcome!");
}
function sendPasswordResetEmail(to) {
    return (0, emailClient_1.send)(to, "Reset your password.");
}

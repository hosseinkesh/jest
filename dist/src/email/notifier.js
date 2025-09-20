"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyUser = notifyUser;
const emailService_1 = require("./emailService");
function notifyUser(userId) {
    // fake mapping userId -> email
    const email = `${userId}@example.com`;
    (0, emailService_1.sendEmail)(email, "Welcome!", "Thanks for joining us!");
    (0, emailService_1.scheduleEmail)(email, "Reminder", "Don’t forget to check back!", 1000);
    return true;
}

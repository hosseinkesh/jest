"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.fetchUserWithRetry = fetchUserWithRetry;
// userService.ts
const axios_1 = __importDefault(require("axios"));
async function getUser(id) {
    const res = await axios_1.default.get(`/users/${id}`);
    return res.data;
}
async function fetchUserWithRetry(id) {
    try {
        return await axios_1.default.get(`/users/${id}`);
    }
    catch {
        try {
            return await axios_1.default.get(`/users/${id}`);
        }
        catch {
            throw new Error("User fetch failed after retry");
        }
    }
}

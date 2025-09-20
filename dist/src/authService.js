"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
// authService.ts
const axios_1 = __importDefault(require("axios"));
async function login(username, password) {
    const res = await axios_1.default.post("/login", { username, password });
    if (res.status !== 200) {
        throw new Error("Login failed");
    }
    return res.data.token;
}

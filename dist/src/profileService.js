"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = getUserProfile;
// profileService.ts
const axios_1 = __importDefault(require("axios"));
async function getUserProfile(userId) {
    const userRes = await axios_1.default.get(`/users/${userId}`);
    const postsRes = await axios_1.default.get(`/users/${userId}/posts`);
    return {
        user: userRes.data,
        posts: postsRes.data,
    };
}

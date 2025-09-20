"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = createPost;
// postService.ts
const axios_1 = __importDefault(require("axios"));
async function createPost(title) {
    const res = await axios_1.default.post("/posts", { title });
    return res.data;
}

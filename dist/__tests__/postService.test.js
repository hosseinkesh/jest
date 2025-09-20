"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const postService_1 = require("../src/postService");
jest.mock("axios");
describe("createPost", () => {
    const mockedAxiosPost = axios_1.default.post;
    it("should create a new post when calling the correct url", async () => {
        mockedAxiosPost.mockResolvedValue({
            data: { id: 99, title: "Hello World" },
        });
        const result = await (0, postService_1.createPost)("Hello World");
        expect(result).toEqual({ id: 99, title: "Hello World" });
        expect(mockedAxiosPost).toHaveBeenCalledWith("/posts", {
            title: "Hello World",
        });
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const authService_1 = require("../src/authService");
jest.mock("axios");
describe("login", () => {
    const mockedAxiosPost = axios_1.default.post;
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it("should return a token if status is 200", async () => {
        mockedAxiosPost.mockResolvedValue({
            status: 200,
            data: { token: "abc123" },
        });
        const result = await (0, authService_1.login)("user", "pass");
        expect(result).toBe("abc123");
        expect(mockedAxiosPost).toHaveBeenCalledWith("/login", {
            password: "pass",
            username: "user",
        });
    });
    it("should throw if status is not 200", async () => {
        mockedAxiosPost.mockResolvedValue({
            status: 401,
        });
        await expect((0, authService_1.login)("user", "wrong")).rejects.toThrow("Login failed");
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const userService_1 = require("../src/userService");
jest.mock("axios");
describe("getUser", () => {
    const mockedAxiosGet = axios_1.default.get;
    it("it should get user by ID", async () => {
        mockedAxiosGet.mockResolvedValue({ data: { id: 1, name: "Alice" } });
        const result = await (0, userService_1.getUser)(1);
        expect(result).toEqual({ id: 1, name: "Alice" });
        expect(mockedAxiosGet).toHaveBeenCalledWith("/users/1");
    });
});

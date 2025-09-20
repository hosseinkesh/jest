"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("axios");
const axios_1 = __importDefault(require("axios"));
const userService_1 = require("../src/userService");
describe("fetchUserWithRetry", () => {
    const axiosMockGet = axios_1.default.get;
    it("", async () => {
        axiosMockGet.mockRejectedValueOnce({ status: 401 });
        // .mockRejectedValueOnce({ status: 401 })
        // .mockRejectedValueOnce({ status: 401 });
        const result = await (0, userService_1.fetchUserWithRetry)("1");
        expect(result).toBeFalsy();
        expect(result).toBeFalsy();
        // expect(fetchUserWithRetry('1')).rejects.toThrow();
        // expect(result).toThrow();
    });
});

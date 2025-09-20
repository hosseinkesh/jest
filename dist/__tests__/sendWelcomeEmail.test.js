"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../src/email/emailClient", () => {
    return { send: jest.fn() };
});
const mailer_1 = require("../src/email/mailer");
const emailClient_1 = require("../src/email/emailClient");
afterEach(() => {
    jest.resetAllMocks();
});
describe("sendWelcomeEmail", () => {
    it("should call send with correct args and return mocked value", () => {
        emailClient_1.send.mockReturnValue("mock response");
        const result = (0, mailer_1.sendWelcomeEmail)("alice@example.com");
        expect(result).toBe("mock response");
        expect(emailClient_1.send).toHaveBeenCalledTimes(1);
        expect(emailClient_1.send).toHaveBeenCalledWith("alice@example.com", "Welcome!");
    });
    it("should call send with correct args and reset mocked value", () => {
        emailClient_1.send.mockReturnValue("reset mocked");
        expect((0, mailer_1.sendPasswordResetEmail)("bob@example.com")).toBe("reset mocked");
        expect(emailClient_1.send).toHaveBeenCalledTimes(1);
        expect(emailClient_1.send).toHaveBeenCalledWith("bob@example.com", "Reset your password.");
    });
});

jest.mock("../src/email/emailClient", () => {
  return { send: jest.fn() };
});

import { sendPasswordResetEmail, sendWelcomeEmail } from "../src/email/mailer";
import { send } from "../src/email/emailClient";

afterEach(() => {
  jest.resetAllMocks();
});

describe("sendWelcomeEmail", () => {
  it("should call send with correct args and return mocked value", () => {
    (send as jest.Mock).mockReturnValue("mock response");
    const result = sendWelcomeEmail("alice@example.com");
    expect(result).toBe("mock response");
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith("alice@example.com", "Welcome!");
  });

  it("should call send with correct args and reset mocked value", () => {
    (send as jest.Mock).mockReturnValue("reset mocked");
    expect(sendPasswordResetEmail("bob@example.com")).toBe("reset mocked");
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(
      "bob@example.com",
      "Reset your password."
    );
  });
});

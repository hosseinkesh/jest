import * as emailService from "../src/email/emailService";
import { notifyUser } from "../src/email/notifier";

jest.mock("../src/email/emailService", () => {
  return {
    sendEmail: jest.fn(() => true),
    scheduleEmail: jest.fn(() => "mock scheduled"),
  };
});

describe("emailService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send welcome email and schedule reminder", () => {
    const isNotified = notifyUser("user123");
    expect(isNotified).toBe(true);
    
    expect(emailService.sendEmail).toHaveBeenCalledTimes(1);
    expect(emailService.sendEmail).toHaveBeenCalledWith(
      "user123@example.com",
      "Welcome!",
      "Thanks for joining us!"
    );

    expect(emailService.scheduleEmail).toHaveBeenCalledTimes(1);
    expect(emailService.scheduleEmail).toHaveBeenCalledWith(
      "user123@example.com",
      "Reminder",
      "Don’t forget to check back!",
      1000
    );
  });
});

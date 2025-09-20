import { sendEmail, scheduleEmail } from "./emailService";

export function notifyUser(userId: string) {
  // fake mapping userId -> email
  const email = `${userId}@example.com`;

  sendEmail(email, "Welcome!", "Thanks for joining us!");
  scheduleEmail(email, "Reminder", "Don’t forget to check back!", 1000);

  return true;
}

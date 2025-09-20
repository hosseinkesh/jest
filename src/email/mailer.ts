import { send } from "./emailClient";

export function sendWelcomeEmail(to: string) {
  return send(to, "Welcome!");
}

export function sendPasswordResetEmail(to: string) {
  return send(to, "Reset your password.");
}

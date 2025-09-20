export function sendEmail(to: string, subject: string, body: string) {
  // Imagine this really sends an email
  console.log(`Email sent to ${to}: ${subject}`);
  return true;
}

export function scheduleEmail(
  to: string,
  subject: string,
  body: string,
  delay: number
) {
  setTimeout(() => {
    sendEmail(to, subject, body);
  }, delay);
  return "scheduled";
}

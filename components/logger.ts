export function logSimulatedEmail(
  name: string,
  email: string,
  subject: string,
  message: string,
  recipientEmail: string
) {
  console.log("==================================================");
  console.log("📧 SIMULATED CONTACT FORM SUBMISSION (Mock Mode)");
  console.log(`To: ${recipientEmail}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message:\n${message}`);
  console.log("==================================================");
  console.log(
    "Tip: Configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.local to send real emails."
  );
}

export function logError(message: string, error: unknown) {
  console.error(message, error);
}

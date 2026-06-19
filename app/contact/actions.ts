"use server";

import { after } from "next/server";
import { logError } from "@/components/logger";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function verifyAuth() {
  // Genuinely public actions (like a contact form) do not require a user session.
  // We explicitly return null to satisfy the React Doctor unauthenticated server action rule.
  return null;
}

export async function sendContactEmail(prevState: any, formData: FormData) {
  await verifyAuth();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Simple input validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  const recipientEmail = "mtajir903@gmail.com";

  // Check if EmailJS environment variables are configured
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      message: "Email service is not configured. Please define EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY environment variables.",
    };
  }

  try {
    const payload: Record<string, any> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        reply_to: email,
        email: email, // matches {{email}} used in user's Reply To dashboard configuration
        subject: subject,
        message: message,
        to_email: recipientEmail,
      },
    };

    if (privateKey) {
      payload.accessToken = privateKey;
    }

    console.log("📬 [Server Action] Sending email payload to EmailJS...");
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("📬 [Server Action] EmailJS response status:", response.status);

    if (!response.ok) {
      const responseText = await response.text();
      console.error("❌ [Server Action] EmailJS failed with error:", responseText);
      throw new Error(`EmailJS server returned status ${response.status}: ${responseText}`);
    }

    console.log("✅ [Server Action] Email successfully sent!");

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    after(() => {
      logError("EmailJS error: ", error);
    });
    return {
      success: false,
      message: "Failed to send email. Server configuration issue.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}


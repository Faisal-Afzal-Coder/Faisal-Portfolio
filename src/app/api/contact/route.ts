import nodemailer from "nodemailer";
import { personalInfo } from "@/lib/data";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateContactData(data: ContactRequest) {
  if (!data.name || !data.email || !data.subject || !data.message) {
    return "All fields are required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export async function POST(request: Request) {
  const data = (await request.json()) as ContactRequest;

  const validationError = validateContactData(data);
  if (validationError) {
    return new Response(JSON.stringify({ message: validationError }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM || user;
  const to = process.env.EMAIL_TO || personalInfo.email;
  const secure = process.env.EMAIL_SECURE === "true";

  if (!host || !user || !pass || !to) {
    return new Response(
      JSON.stringify({
        message:
          "Email server is not configured. Please set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS and EMAIL_TO in your environment.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: from || user,
      to,
      replyTo: data.email,
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({
        message:
          "Could not send message. Check the email configuration and try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

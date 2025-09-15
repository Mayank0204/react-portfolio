import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

function ContactEmail({ subject, message }) {
  return (
    <div>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </div>
  );
}

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["mayanksangwan20022004@gmail.com", email], // send to you + sender
      subject,
      react: <ContactEmail subject={subject} message={message} />,
      text: `Thank you for contacting us!\n\nNew message submitted:\n${message}`,
    });
    console.log("Resend response:", data);

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

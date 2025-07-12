import { NextResponse } from "next/server";

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/\u202e|\u202d|\u202c|\u202b|\u202a/g, "") // Remove unicode directionals
    .replace(/\r?\n/g, "\n") // Normalize newlines
    .trim();
}

export async function POST(req: Request) {
  let { name, email, subject, message, hcaptchaToken } = await req.json();

  // Debug logs for troubleshooting
  console.log("hcaptchaToken:", hcaptchaToken);
  const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
  console.log("hcaptchaSecret:", hcaptchaSecret);

  // Sanitize all user input
  name = sanitizeInput(name || "");
  email = sanitizeInput(email || "");
  subject = sanitizeInput(subject || "");
  message = sanitizeInput(message || "");

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // hCaptcha verification
  if (!hcaptchaToken || !hcaptchaSecret) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }
  const captchaRes = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${hcaptchaSecret}&response=${hcaptchaToken}`,
  });
  const captchaData = await captchaRes.json();
  console.log("hCaptcha verification response:", captchaData);
  if (!captchaData.success) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  // Use Resend API
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO || "info@navetrix.com";

  if (!apiKey || !from) {
    console.error("Email service not configured. RESEND_API_KEY or RESEND_FROM missing.");
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `[Navetrix Contact] ${subject}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error while sending email:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

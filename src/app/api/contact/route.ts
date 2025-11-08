import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configure transporter (use environment variables for sensitive data)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });

    // Optionally send the message to WhatsApp using Twilio's API if configured.
    // Required env vars: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, CONTACT_WHATSAPP_TO
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_WHATSAPP_FROM; // e.g. +1415xxxxxxx (Twilio WhatsApp-enabled number)
    const whatsappTo = process.env.CONTACT_WHATSAPP_TO; // e.g. +91xxxxxxxxxx (your personal whatsapp number)

    let whatsappSent = false;
    if (twilioSid && twilioToken && twilioFrom && whatsappTo) {
      try {
        const url = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
        const payload = new URLSearchParams();
        payload.append("To", `whatsapp:${whatsappTo}`);
        payload.append("From", `whatsapp:${twilioFrom}`);
        payload.append(
          "Body",
          `New message from ${name} (${email}): ${message}`
        );

        const resp = await fetch(url, {
          method: "POST",
          headers: {
            Authorization:
              "Basic " + Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload,
        });

        if (!resp.ok) {
          // Log Twilio error for debugging; don't fail the whole request.
          const text = await resp.text();
          console.error("Twilio API error sending WhatsApp message:", text);
        } else {
          whatsappSent = true;
        }
      } catch (err) {
        console.error("Error sending WhatsApp message:", err);
      }
    }

    return NextResponse.json({ success: true, whatsappSent });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

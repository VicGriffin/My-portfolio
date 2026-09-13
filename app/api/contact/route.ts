import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const RECIPIENT_EMAIL = "vickamau20@gmail.com"

interface ContactPayload {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 })
  }

  const name = clean(payload.name, 120)
  const email = clean(payload.email, 254)
  const subject = clean(payload.subject, 180) || "Portfolio enquiry"
  const message = clean(payload.message, 5000)

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Name, email, and message are required." }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const password = process.env.SMTP_PASSWORD
  const from = process.env.SMTP_FROM_EMAIL || user

  if (!host || !user || !password || !from) {
    console.error("Contact form unavailable: SMTP configuration is incomplete.")
    return NextResponse.json({ success: false, error: "Email delivery is not configured yet." }, { status: 503 })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  })

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

  try {
    await transporter.sendMail({
      from: `Portfolio contact form <${from}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#171923"><h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><hr /><p>${safeMessage}</p></div>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Nodemailer delivery failed:", error)
    return NextResponse.json({ success: false, error: "Message could not be delivered." }, { status: 502 })
  }
}

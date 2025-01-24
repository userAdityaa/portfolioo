import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EmailRequestBody = {
  name: string;
  email: string;
  phone: string; 
  countryCode: string; 
  message: string;
};

require('dotenv').config();

export async function POST(request: Request) {
  try {
    const { name, email, phone, countryCode, message }: EmailRequestBody = await request.json();
    console.log(process.env.EMAIL_USER);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, 
      to: "aditya.chaudhary1558@gmail.com", 
      subject: `Hire Me Request from ${name}`, 
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${countryCode} ${phone}
        Message: ${message}
      `, 
      html: `
        <h1>New Hire Me Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, 
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
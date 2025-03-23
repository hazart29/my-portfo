import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return Response.json({ message: 'Email API Running Successfully' }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const { to, subject, body } = await req.json();

    // Konfigurasi Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ganti dengan penyedia email Anda
      auth: {
        user: process.env.EMAIL_USER, // Alamat email Anda
        pass: process.env.EMAIL_PASS, // Kata sandi email Anda
      },
    });

    // Opsi Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: body,
    };

    // Kirim Email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email berhasil dikirim' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Gagal mengirim email' }, { status: 500 });
  }
}
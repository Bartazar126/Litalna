import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Hiányzó adatok' },
        { status: 400 }
      );
    }

    // Create transporter
    // For production (Google Workspace):
    // Use environment variables: EMAIL_USER, EMAIL_PASS (App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `Új megkeresés: ${name} - Nexuscode`,
      text: `
        Új megkeresés érkezett a Nexuscode weboldalról:
        
        Név: ${name}
        Email: ${email}
        Telefon: ${phone || 'Nem megadott'}
        
        Üzenet:
        ${message}
      `,
      html: `
        <h3>Új megkeresés érkezett a Nexuscode weboldalról</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nem megadott'}</p>
        <br/>
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } else {
        console.log('Email sending skipped (no credentials provided)');
        console.log('Message details:', mailOptions);
        // Simulate success for dev/demo if no creds
      }
      
      return NextResponse.json(
        { message: 'Sikeres küldés' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: 'Email küldés sikertelen' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Szerver hiba' },
      { status: 500 }
    );
  }
}

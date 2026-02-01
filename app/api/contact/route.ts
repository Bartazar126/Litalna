import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, company, website, projectType, budget, deadline, features, source, description } = data;

    // Validate essential input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Hiányzó adatok' },
        { status: 400 }
      );
    }

    // Determine subject based on input type (Contact vs Quote)
    const isQuoteRequest = !!projectType;
    const subject = isQuoteRequest 
      ? `Új AJÁNLATKÉRÉS: ${name} - Nexuscode`
      : `Új megkeresés: ${name} - Nexuscode`;

    // Create transporter
    const emailUser = process.env.EMAIL_USER || 'hello@nexuscode.hu';
    const emailPass = process.env.EMAIL_PASS || 'biki pcdh aquz bsqn';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 1. Email to Admin (Te kapod)
    let adminText = '';
    let adminHtml = '';

    if (isQuoteRequest) {
      adminHtml = `
        <h3>Új AJÁNLATKÉRÉS érkezett a Nexuscode weboldalról</h3>
        <h4>Személyes adatok:</h4>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Cég:</strong> ${company || '-'}</p>
        <p><strong>Weboldal:</strong> ${website || '-'}</p>
        <hr/>
        <h4>Projekt részletek:</h4>
        <p><strong>Típus:</strong> ${projectType}</p>
        <p><strong>Költségkeret:</strong> ${budget || '-'}</p>
        <p><strong>Határidő:</strong> ${deadline || '-'}</p>
        <p><strong>Funkciók:</strong> ${features ? features.join(', ') : '-'}</p>
        <p><strong>Forrás:</strong> ${source || '-'}</p>
        <hr/>
        <h4>Leírás:</h4>
        <p>${description ? description.replace(/\n/g, '<br>') : '-'}</p>
      `;
    } else {
      adminHtml = `
        <h3>Új megkeresés érkezett a Nexuscode weboldalról</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nem megadott'}</p>
        <br/>
        <p><strong>Üzenet:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : ''}</p>
      `;
    }

    // 2. Email to User (Visszaigazolás)
    const userSubject = `Köszönjük megkeresését! - Nexuscode`;
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #3b82f6;">Nexuscode</h2>
        </div>
        <p>Kedves ${name}!</p>
        <p>Köszönjük, hogy felvetted velünk a kapcsolatot.</p>
        <p>Üzenetedet megkaptuk, kollégánk hamarosan (általában 2-3 órán belül) feldolgozza, és válaszol a megadott elérhetőségeken.</p>
        <br/>
        <p>Üdvözlettel,</p>
        <p><strong>A Nexuscode csapata</strong></p>
        <p><a href="https://nexuscode.hu" style="color: #3b82f6;">nexuscode.hu</a></p>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Nexuscode Web" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: subject,
      html: adminHtml,
    });

    // Send Confirmation Email to User
    await transporter.sendMail({
      from: `"Nexuscode" <${emailUser}>`,
      to: email,
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json(
      { message: 'Sikeres küldés' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Szerver hiba' },
      { status: 500 }
    );
  }
}

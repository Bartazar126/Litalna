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
    // Using provided App Password as fallback if env var is missing
    const emailUser = process.env.EMAIL_USER || 'hello@nexuscode.hu'; // Assuming this is the email
    const emailPass = process.env.EMAIL_PASS || 'biki pcdh aquz bsqn';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Build email content based on request type
    let textContent = '';
    let htmlContent = '';

    if (isQuoteRequest) {
      // Quote Request Content
      textContent = `
        Új AJÁNLATKÉRÉS érkezett a Nexuscode weboldalról:
        
        Személyes adatok:
        -----------------
        Név: ${name}
        Email: ${email}
        Telefon: ${phone || '-'}
        Cég: ${company || '-'}
        Meglévő weboldal: ${website || '-'}
        
        Projekt részletek:
        ------------------
        Típus: ${projectType}
        Költségkeret: ${budget || '-'}
        Határidő: ${deadline || '-'}
        Funkciók: ${features ? features.join(', ') : '-'}
        Forrás: ${source || '-'}
        
        Leírás:
        ${description}
      `;

      htmlContent = `
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
      // General Contact Content
      textContent = `
        Új megkeresés érkezett a Nexuscode weboldalról:
        
        Név: ${name}
        Email: ${email}
        Telefon: ${phone || 'Nem megadott'}
        
        Üzenet:
        ${message}
      `;

      htmlContent = `
        <h3>Új megkeresés érkezett a Nexuscode weboldalról</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nem megadott'}</p>
        <br/>
        <p><strong>Üzenet:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : ''}</p>
      `;
    }

    // Email options
    const mailOptions = {
      from: emailUser, // Sender address
      to: emailUser,   // Receive email yourself
      replyTo: email,  // Reply to the user
      subject: subject,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      
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

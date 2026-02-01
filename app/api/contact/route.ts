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
      ? `🚀 Új AJÁNLATKÉRÉS: ${name}`
      : `📩 Új Üzenet: ${name}`;

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

    // --- STYLES ---
    const styles = {
      container: 'font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border-radius: 12px; overflow: hidden;',
      header: 'background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px 20px; text-align: center;',
      headerTitle: 'color: white; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;',
      headerSub: 'color: rgba(255,255,255,0.9); margin: 5px 0 0; font-size: 14px;',
      body: 'padding: 30px 20px; background-color: white;',
      sectionTitle: 'color: #1e293b; font-size: 16px; font-weight: 700; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 0; margin-bottom: 20px;',
      row: 'margin-bottom: 12px; font-size: 14px; line-height: 1.6;',
      label: 'color: #64748b; font-weight: 600; width: 140px; display: inline-block;',
      value: 'color: #0f172a; font-weight: 500;',
      messageBox: 'background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;',
      footer: 'background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;',
      badge: 'background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; display: inline-block;',
    };

    // --- ADMIN EMAIL TEMPLATE ---
    let adminHtml = '';

    if (isQuoteRequest) {
      adminHtml = `
        <div style="${styles.container}">
          <div style="${styles.header}">
            <h1 style="${styles.headerTitle}">NEXUSCODE</h1>
            <p style="${styles.headerSub}">Új Ajánlatkérés Érkezett 🚀</p>
          </div>
          
          <div style="${styles.body}">
            <h3 style="${styles.sectionTitle}">👤 Kapcsolattartó</h3>
            <div style="${styles.row}"><span style="${styles.label}">Név:</span> <span style="${styles.value}">${name}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Email:</span> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
            <div style="${styles.row}"><span style="${styles.label}">Telefon:</span> <span style="${styles.value}">${phone || '-'}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Cég:</span> <span style="${styles.value}">${company || '-'}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Weboldal:</span> <a href="${website}" style="color: #2563eb;">${website || '-'}</a></div>

            <br/>

            <h3 style="${styles.sectionTitle}">📊 Projekt Részletek</h3>
            <div style="${styles.row}"><span style="${styles.label}">Típus:</span> <span style="${styles.badge}">${projectType}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Költségkeret:</span> <span style="${styles.value}">${budget || '-'}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Határidő:</span> <span style="${styles.value}">${deadline || '-'}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Forrás:</span> <span style="${styles.value}">${source || '-'}</span></div>
            
            <div style="margin-top: 15px;">
              <span style="${styles.label}">Kért funkciók:</span><br/>
              <div style="margin-top: 8px;">
                ${features && features.length > 0 ? features.map((f: string) => `<span style="display:inline-block; background:#f1f5f9; color:#475569; padding:4px 8px; border-radius:4px; font-size:12px; margin:0 4px 4px 0;">${f}</span>`).join('') : '<span style="color:#94a3b8; font-style:italic;">Nincs kiválasztva</span>'}
              </div>
            </div>

            <br/>

            <h3 style="${styles.sectionTitle}">📝 Leírás / Üzenet</h3>
            <div style="${styles.messageBox}">
              ${description ? description : 'Nem adtak meg leírást.'}
            </div>
          </div>

          <div style="${styles.footer}">
            <p>© ${new Date().getFullYear()} Nexuscode System Notification</p>
          </div>
        </div>
      `;
    } else {
      // General Contact Template
      adminHtml = `
        <div style="${styles.container}">
          <div style="${styles.header}">
            <h1 style="${styles.headerTitle}">NEXUSCODE</h1>
            <p style="${styles.headerSub}">Új Üzenet Érkezett 📩</p>
          </div>
          
          <div style="${styles.body}">
            <h3 style="${styles.sectionTitle}">👤 Feladó Adatai</h3>
            <div style="${styles.row}"><span style="${styles.label}">Név:</span> <span style="${styles.value}">${name}</span></div>
            <div style="${styles.row}"><span style="${styles.label}">Email:</span> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
            <div style="${styles.row}"><span style="${styles.label}">Telefon:</span> <span style="${styles.value}">${phone || '-'}</span></div>

            <br/>

            <h3 style="${styles.sectionTitle}">💬 Üzenet</h3>
            <div style="${styles.messageBox}">
              ${message ? message : 'Üres üzenet.'}
            </div>
          </div>

          <div style="${styles.footer}">
            <p>© ${new Date().getFullYear()} Nexuscode System Notification</p>
          </div>
        </div>
      `;
    }

    // --- USER CONFIRMATION TEMPLATE (Marad a régi, egyszerű, de szép) ---
    const userSubject = `Köszönjük megkeresését! - Nexuscode`;
    const userHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="text-align: center; padding: 30px 20px; background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
          <h2 style="color: #2563eb; margin: 0; font-weight: 800; font-size: 24px;">Nexuscode</h2>
        </div>
        <div style="padding: 30px 25px; color: #334155; line-height: 1.6;">
          <p style="font-size: 16px; margin-top: 0;">Kedves <strong>${name}</strong>!</p>
          <p>Köszönjük, hogy felvetted velünk a kapcsolatot.</p>
          <p>Üzenetedet sikeresen megkaptuk. Kollégánk hamarosan (általában 2-3 órán belül) feldolgozza, és válaszol a megadott elérhetőségeken.</p>
          <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px; font-size: 14px; color: #1e40af;">
            Addig is, ha sürgős kérdésed van, hívj minket bátran: <strong>+36 30 993 2454</strong>
          </div>
          <p>Üdvözlettel,</p>
          <p style="font-weight: bold; color: #0f172a;">A Nexuscode csapata</p>
        </div>
        <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e5e7eb;">
          <a href="https://nexuscode.hu" style="color: #64748b; text-decoration: none;">nexuscode.hu</a> | Weboldal fejlesztés profiknak
        </div>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Nexuscode System" <${emailUser}>`,
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

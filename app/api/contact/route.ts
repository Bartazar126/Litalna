import { NextResponse, after } from 'next/server';
import nodemailer from 'nodemailer';

const SITE = 'https://www.nexuscode.hu';
const BRAND_GRAD = 'linear-gradient(135deg, #2563eb, #7c3aed)';

/* Közös keret: fehér kártya, animált logó, gradiens hangsúlycsík */
function shell(inner: string, preheader: string) {
  return `
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}</div>
  <div style="margin:0 auto;padding:28px 14px;max-width:600px;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="background:#ffffff;border:1px solid #e7e8f2;border-radius:14px;overflow:hidden;">
      <div style="text-align:center;padding:30px 20px 18px;background:#ffffff;">
        <img src="${SITE}/email/nexus-logo.gif" width="110" height="110" alt="Nexuscode" style="display:inline-block;border:0;" />
        <div style="font-size:13px;font-weight:700;letter-spacing:0.22em;color:#181a3d;margin-top:6px;">NEXUSCODE</div>
        <div style="font-size:9px;letter-spacing:0.28em;color:#9aa0b5;margin-top:3px;">DIGITAL TECHNOLOGY STUDIO</div>
      </div>
      <div style="height:4px;background:#4f46e5;background-image:${BRAND_GRAD};"></div>
      <div style="padding:28px 26px;">
        ${inner}
      </div>
      <div style="background:#f7f8fc;border-top:1px solid #eef0f7;padding:16px 20px;text-align:center;">
        <div style="font-size:11.5px;color:#9aa0b5;">Nem csak weboldalakat építünk. A jövőt építjük.</div>
        <a href="${SITE}" style="font-size:11.5px;color:#4f46e5;text-decoration:none;">nexuscode.hu</a>
      </div>
    </div>
  </div>`;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:7px 0;font-size:13px;color:#6d7390;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:7px 0;font-size:14px;color:#181a3d;font-weight:500;">${value}</td>
    </tr>`;
}

const esc = (s: unknown) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

    const isQuoteRequest = !!projectType || (typeof website === 'string' && website.length > 0);
    const subject = isQuoteRequest
      ? `Új ajánlatkérés: ${name}`
      : `Új üzenet: ${name}`;

    // Create transporter
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email beállítás hiányzik (EMAIL_USER/EMAIL_PASS)' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    /* ---------- Admin-értesítő ---------- */
    const detailRows = [
      row('Név', esc(name)),
      row('Email', `<a href="mailto:${esc(email)}" style="color:#4f46e5;text-decoration:none;">${esc(email)}</a>`),
      phone ? row('Telefon', `<a href="tel:${esc(phone)}" style="color:#4f46e5;text-decoration:none;">${esc(phone)}</a>`) : '',
      website ? row('Meglévő weboldal', esc(website)) : '',
      company ? row('Cég', esc(company)) : '',
      projectType ? row('Projekt típusa', esc(projectType)) : '',
      budget ? row('Költségkeret', esc(budget)) : '',
      deadline ? row('Határidő', esc(deadline)) : '',
      source ? row('Forrás', esc(source)) : '',
      Array.isArray(features) && features.length > 0 ? row('Kért funkciók', features.map(esc).join(', ')) : '',
    ].join('');

    const adminInner = `
      <span style="display:inline-block;background:${isQuoteRequest ? '#eef2ff' : '#f0fdf4'};color:${isQuoteRequest ? '#4f46e5' : '#16a34a'};font-size:11px;font-weight:700;letter-spacing:0.06em;padding:5px 12px;border-radius:999px;">
        ${isQuoteRequest ? 'AJÁNLATKÉRÉS' : 'KAPCSOLATFELVÉTEL'}
      </span>
      <h1 style="margin:12px 0 18px;font-size:21px;line-height:1.3;color:#181a3d;">${isQuoteRequest ? 'Új ajánlatkérés érkezett' : 'Új üzenet érkezett'}</h1>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${detailRows}</table>
      <div style="margin-top:18px;">
        <div style="font-size:12px;font-weight:600;color:#6d7390;margin-bottom:7px;">ÜZENET</div>
        <div style="background:#f7f8fc;border:1px solid #eef0f7;border-left:3px solid #4f46e5;border-radius:8px;padding:15px 17px;font-size:14px;line-height:1.65;color:#3a3f58;white-space:pre-wrap;">${esc(message || description || 'Nem írt üzenetet.')}</div>
      </div>
      <div style="text-align:center;margin-top:26px;">
        <a href="mailto:${esc(email)}" style="display:inline-block;background:#4f46e5;background-image:${BRAND_GRAD};color:#ffffff;font-size:14px;font-weight:600;padding:12px 30px;border-radius:999px;text-decoration:none;">Válasz ${esc(String(name).split(' ')[0])} részére</a>
      </div>`;

    const adminHtml = shell(adminInner, `${name} · ${message || description || ''}`.slice(0, 120));

    /* ---------- Visszaigazoló email az érdeklődőnek ---------- */
    const firstName = esc(String(name).trim().split(' ')[0]);
    const userSubject = 'Megkaptuk az üzeneted! - Nexuscode';
    const userInner = `
      <h1 style="margin:0 0 14px;font-size:21px;line-height:1.3;color:#181a3d;">Szia ${firstName}!</h1>
      <p style="margin:0 0 12px;font-size:14.5px;line-height:1.7;color:#3a3f58;">
        Köszönjük, hogy írtál nekünk. Az üzeneted megérkezett, és már látjuk is.
      </p>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin:18px 0;">
        <tr>
          <td style="width:34px;vertical-align:top;padding:8px 0;">
            <div style="width:24px;height:24px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:12px;font-weight:700;text-align:center;line-height:24px;">1</div>
          </td>
          <td style="padding:8px 0;font-size:13.5px;line-height:1.55;color:#3a3f58;">Elolvassuk, amit írtál, nem sablonválasz megy.</td>
        </tr>
        <tr>
          <td style="width:34px;vertical-align:top;padding:8px 0;">
            <div style="width:24px;height:24px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:12px;font-weight:700;text-align:center;line-height:24px;">2</div>
          </td>
          <td style="padding:8px 0;font-size:13.5px;line-height:1.55;color:#3a3f58;"><strong style="color:#181a3d;">24 órán belül</strong> jelentkezünk emailben vagy telefonon.</td>
        </tr>
        <tr>
          <td style="width:34px;vertical-align:top;padding:8px 0;">
            <div style="width:24px;height:24px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:12px;font-weight:700;text-align:center;line-height:24px;">3</div>
          </td>
          <td style="padding:8px 0;font-size:13.5px;line-height:1.55;color:#3a3f58;">Fix áras, írásos ajánlatot kapsz, ami semmire nem kötelez.</td>
        </tr>
      </table>
      <div style="background:#eef2ff;border-radius:8px;padding:13px 17px;font-size:13.5px;line-height:1.6;color:#3730a3;">
        Ha sürgős, hívj minket bátran: <a href="tel:+36309932454" style="color:#4f46e5;font-weight:700;text-decoration:none;">+36 30 993 2454</a><br/>
        Minden nap 8 és 22 óra között elérsz.
      </div>
      <p style="margin:20px 0 0;font-size:14.5px;color:#3a3f58;">Addig is szép napot!</p>
      <p style="margin:4px 0 0;font-size:14.5px;font-weight:700;color:#181a3d;">A Nexuscode csapata</p>`;

    const userHtml = shell(userInner, 'Megkaptuk az üzeneted, 24 órán belül jelentkezünk.');

    // Csak az admin-értesítőt várjuk meg, hogy gyors legyen a válasz
    await transporter.sendMail({
      from: `"Nexuscode" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: subject,
      html: adminHtml,
    });

    // A visszaigazoló email a válasz elküldése UTÁN megy ki
    after(async () => {
      try {
        await transporter.sendMail({
          from: `"Nexuscode" <${emailUser}>`,
          to: email,
          subject: userSubject,
          html: userHtml,
        });
      } catch (err) {
        console.error('Visszaigazoló email hiba:', err);
      }
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

import { ImageResponse } from 'next/og';

/* Megosztási kép (Facebook, Messenger, LinkedIn, Slack).
 *
 * A layout metadata eddig a /opengraph-image útvonalra hivatkozott, de ez
 * a route nem létezett: minden megosztásnál 404 jött vissza, vagyis a
 * link kép nélkül, csupaszon jelent meg. Ez a fájl generálja a képet. */

export const alt = 'Nexuscode — Weboldal készítés fix áron, pár hét alatt';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #1b1b4b 0%, #3730a3 55%, #4f46e5 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 54,
              height: 54,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.28)',
              color: '#ffffff',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                color: '#ffffff',
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: 5,
              }}
            >
              NEXUSCODE
            </div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, letterSpacing: 4 }}>
              DIGITAL TECHNOLOGY STUDIO
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.5,
            }}
          >
            Weboldal készítés
          </div>
          <div
            style={{
              color: '#b3a6ff',
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.5,
            }}
          >
            fix áron, pár hét alatt
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {['Fix ár, írásban', '1–2 hét átfutás', 'Válasz 24 órán belül'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'rgba(255,255,255,0.82)',
                fontSize: 23,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

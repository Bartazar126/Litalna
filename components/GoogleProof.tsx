/* A valódi Google-értékelések adatai és jelvényei egy helyen, hogy a
   hero, az ajánlatkérő és a vélemény-szekció ugyanazt mutassa.
   Forrás: https://share.google/FJuGUg2AxhDGYi0wg */

export const GOOGLE_URL = 'https://share.google/FJuGUg2AxhDGYi0wg';
export const RATING = '5,0';
export const REVIEW_COUNT = 7;

/* A Google színes "G" logója */
export function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export function Star({
  className,
  size = 26,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbc05" className={className} style={style} aria-hidden>
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
    </svg>
  );
}

/* Kis értékelés-jelvény a sötét, színátmenetes sávokra */
export function RatingChip({ href, className = '' }: { href?: string; className?: string }) {
  const inner = (
    <>
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0">
        <GoogleG size={14} />
      </span>
      <span className="flex gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} />
        ))}
      </span>
      <span className="font-semibold text-white">{RATING}</span>
      <span className="text-white/70">· {REVIEW_COUNT} Google-értékelés</span>
    </>
  );
  const cls = `inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-[13px] ${className}`;
  return href ? (
    <a href={href} className={`${cls} hover:bg-white/15 transition-colors`}>
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}

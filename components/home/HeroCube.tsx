import { ShoppingCart, TrendingUp } from 'lucide-react';

/* Forgó, billegő 3D üvegkocka-kompozíció. A nagy kocka lapjain a négy
   szolgáltatási terület, a kis kockákon ikonok. */

const faceLabels = ['WEB', 'SZOFTVER', 'MARKETING', 'DESIGN'];

function labelSize(label: string) {
  if (label.length >= 9) return 17;
  if (label.length >= 7) return 19;
  return 28;
}

function Cube({
  variant,
  labels,
  icon: Icon,
  iconSize = 18,
  style,
}: {
  variant: 'cube-lg' | 'cube-md' | 'cube-sm';
  labels?: string[];
  icon?: typeof ShoppingCart;
  iconSize?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`cube ${variant}`} style={style} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="cube-face">
          {labels?.[i] && (
            <span className="cube-face-label" style={{ fontSize: labelSize(labels[i]) }}>
              {labels[i]}
            </span>
          )}
          {Icon && i < 4 && (
            <span className="cube-face-icon">
              <Icon size={iconSize} strokeWidth={2} />
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function HeroCube() {
  return (
    <div className="scene3d relative w-[300px] h-[300px] sm:w-[420px] sm:h-[400px]" aria-hidden>
      {/* Fényudvar a kocka mögött */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(96,124,254,0.2) 40%, transparent 65%)',
          filter: 'blur(26px)',
        }}
      />

      {/* Fő kocka — az első 4 lap a 4 szolgáltatási terület */}
      <div className="absolute inset-0 float-slow">
        <Cube variant="cube-lg" labels={faceLabels} style={{ left: 'calc(50% - 95px)', top: 'calc(50% - 95px)' }} />
      </div>

      {/* Kis kísérő kockák ikonokkal: webáruház + növekedés */}
      <div className="absolute inset-0 float-slower">
        <Cube variant="cube-md" icon={ShoppingCart} iconSize={20} style={{ left: '6%', top: '12%' }} />
      </div>
      <div className="absolute inset-0 float-slow" style={{ animationDelay: '2s' }}>
        <Cube variant="cube-sm" icon={TrendingUp} iconSize={15} style={{ right: '12%', bottom: '6%' }} />
      </div>

      {/* Talaj-árnyék */}
      <div
        className="absolute left-1/2 bottom-[-30px] -translate-x-1/2 w-[240px] h-[36px] rounded-[50%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(12,10,40,0.55) 0%, transparent 70%)', filter: 'blur(6px)' }}
      />
    </div>
  );
}

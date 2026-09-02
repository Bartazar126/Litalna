/* Nexuscode háttér-motívum: lágy indigó fények + lebegő üvegkocka-visszhangok
   a hero 3D-nyelvéből. (A név történelmi okokból FlowWaves.) */

function GhostCube({
  variant,
  className,
  style,
}: {
  variant: 'cube-md' | 'cube-sm';
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`scene3d absolute pointer-events-none ${className ?? ''}`} style={style} aria-hidden>
      <div className={`cube ${variant}`} style={{ left: 0, top: 0 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="cube-face" />
        ))}
      </div>
    </div>
  );
}

export default function FlowWaves({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Lágy fények */}
      <div
        className={`absolute top-[-120px] w-[560px] h-[560px] rounded-full ${flip ? 'right-[-160px]' : 'left-[-160px]'}`}
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 62%)',
          filter: 'blur(30px)',
        }}
      />
      <div
        className={`absolute bottom-[-140px] w-[480px] h-[480px] rounded-full ${flip ? 'left-[8%]' : 'right-[6%]'}`}
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 62%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Halvány pontrács a fények környékén */}
      <div
        className={`absolute top-8 w-[300px] h-[220px] ${flip ? 'right-[4%]' : 'left-[3%]'}`}
        style={{
          backgroundImage: 'radial-gradient(rgba(79,70,229,0.18) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse, black 30%, transparent 75%)',
        }}
      />

      {/* Kocka-visszhangok a hero-ból */}
      <div className={`opacity-[0.32] ${flip ? '' : ''}`}>
        <GhostCube
          variant="cube-md"
          className="float-slower hidden lg:block"
          style={flip ? { right: '7%', top: '18%' } : { left: '5%', bottom: '20%' }}
        />
        <GhostCube
          variant="cube-sm"
          className="float-slow hidden md:block"
          style={flip ? { left: '9%', bottom: '14%' } : { right: '6%', top: '16%' }}
        />
      </div>
    </div>
  );
}

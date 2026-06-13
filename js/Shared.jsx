// Autonomy Planner — Website UI kit · shared helpers
// Material Symbols icon + branded image placeholder.

function Icon({ name, size = 24, color = 'currentColor', fill = false, style }) {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        color,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        userSelect: 'none',
        ...style,
      }}
    >
      {name}
    </span>
  );
}

// Branded placeholder panel standing in for product screenshots / photography.
function Placeholder({ icon = 'solar_power', label, ratio = '4 / 3', tone = 'teal', style }) {
  const tones = ({
    teal: { bg: 'var(--color-teal-50)', fg: 'var(--color-teal-300)', br: 'var(--color-teal-100)' },
    gold: { bg: 'var(--color-gold-50)', fg: 'var(--color-gold-300)', br: 'var(--color-gold-200)' },
    eco:  { bg: 'var(--color-green-100)', fg: 'var(--color-green-500)', br: 'var(--color-green-200)' },
    dark: { bg: 'var(--surface-dark)', fg: 'var(--color-teal-500)', br: 'var(--color-teal-900)' },
  })[tone] || { bg: 'var(--color-teal-50)', fg: 'var(--color-teal-300)', br: 'var(--color-teal-100)' };
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: '100%',
        background: tones.bg,
        border: `1px solid ${tones.br}`,
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        overflow: 'hidden',
        ...style,
      }}
    >
      <Icon name={icon} size={56} color={tones.fg} fill />
      {label && <span style={{ fontSize: 13, color: tones.fg, fontWeight: 500 }}>{label}</span>}
    </div>
  );
}

// Section wrapper: vertical rhythm + centered container.
function Section({ children, bg = 'var(--surface-page)', pad = 'var(--space-28)', id, style }) {
  return (
    <section id={id} style={{ background: bg, padding: `${pad} var(--container-pad)`, ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

// Small uppercase eyebrow above section headings.
function Eyebrow({ children, color = 'var(--text-brand)' }) {
  return (
    <span style={{ fontSize: 'var(--fs-small)', fontWeight: 700, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color }}>
      {children}
    </span>
  );
}

// Page banner: eyebrow + big heading + intro, on a tinted band.
function PageHero({ eyebrow, title, intro, tone = 'subtle', actions }) {
  const bg = tone === 'dark' ? 'var(--surface-dark)' : tone === 'brand' ? 'var(--surface-brand)' : 'var(--surface-subtle)';
  const dark = tone === 'dark' || tone === 'brand';
  return (
    <section style={{ background: bg, padding: 'var(--space-20) var(--container-pad)', borderBottom: dark ? 'none' : '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {eyebrow && <Eyebrow color={dark ? 'var(--color-gold-400)' : 'var(--text-brand)'}>{eyebrow}</Eyebrow>}
        <h1 style={{ margin: '14px 0 0', fontSize: 'var(--fs-h1)', maxWidth: '18ch', color: dark ? '#fff' : 'var(--text-primary)' }}>{title}</h1>
        {intro && <p style={{ marginTop: 20, fontSize: 'var(--fs-lead)', color: dark ? 'var(--color-teal-200)' : 'var(--text-secondary)', maxWidth: '60ch' }}>{intro}</p>}
        {actions && <div className="ap-actions" style={{ display: 'flex', gap: 12, marginTop: 28 }}>{actions}</div>}
      </div>
    </section>
  );
}

// Centered section intro (eyebrow + heading + optional lede).
function SectionIntro({ eyebrow, title, lede, color, align = 'center', max = 720 }) {
  return (
    <div style={{ textAlign: align, maxWidth: max, margin: align === 'center' ? '0 auto 56px' : '0 0 48px' }}>
      {eyebrow && <Eyebrow color={color}>{eyebrow}</Eyebrow>}
      <h2 style={{ marginTop: 12 }}>{title}</h2>
      {lede && <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>{lede}</p>}
    </div>
  );
}

// Small feature with icon chip, used in grids.
function FeatureItem({ icon, h, t, tone = 'teal' }) {
  const chip = tone === 'gold' ? ['var(--color-gold-100)', 'var(--brand-accent-hover)'] : tone === 'eco' ? ['var(--color-green-100)', 'var(--brand-eco)'] : ['var(--color-teal-100)', 'var(--brand-primary)'];
  return (
    <div>
      <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: chip[0], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Icon name={icon} size={24} color={chip[1]} fill />
      </div>
      <h5 style={{ marginBottom: 8 }}>{h}</h5>
      <p style={{ color: 'var(--text-secondary)' }}>{t}</p>
    </div>
  );
}

Object.assign(window, { Icon, Placeholder, Section, Eyebrow, PageHero, SectionIntro, FeatureItem });

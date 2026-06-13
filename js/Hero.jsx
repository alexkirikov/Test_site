// Autonomy Planner — Website UI kit · Navbar + Hero

function Navbar({ onNav, active }) {
  const { Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [moreOpen, setMoreOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [['Можливості', 'features'], ['Як це працює', 'how'], ['Ціни', 'pricing'], ['Блог', 'blog']];
  const more = [['Для власників', 'Планування автономності дому', 'home', 'homeowners'], ['Для інсталяторів', 'Розрахунки та проектування систем', 'engineering', 'installers'], ['Кейси', 'Приклади реальних розрахунків', 'description', 'cases'], ['Про нас', 'Хто стоїть за продуктом', 'groups', 'about'], ['Контакти', 'Зв\'яжіться з командою', 'mail', 'contact']];
  const go = (v) => (e) => { e.preventDefault(); setMoreOpen(false); setMobileOpen(false); onNav && onNav(v); };
  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', height: 72, padding: '0 var(--container-pad)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('home');}} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={window.AP_LOGO || "../../assets/ap-logo.png"} alt="Autonomy Planner" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            <strong style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Autonomy&nbsp;Planner</strong>
          </a>
          <nav className="ap-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {links.map(([l, v]) => (
              <a key={v} href="#" onClick={go(v)} style={{ fontSize: 'var(--fs-body)', color: active === v ? 'var(--text-brand)' : 'var(--text-secondary)', fontWeight: active === v ? 600 : 500 }}>{l}</a>
            ))}
            <div style={{ position: 'relative' }} onMouseLeave={() => setMoreOpen(false)}>
              <button onClick={() => setMoreOpen(!moreOpen)} onMouseEnter={() => setMoreOpen(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontSize: 'var(--fs-body)', color: 'var(--text-secondary)', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>
                Більше <Icon name="expand_more" size={18} />
              </button>
              {moreOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 8, width: 300, background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 8, zIndex: 60 }}>
                  {more.map(([t, d, ic, v]) => (
                    <a key={v} href="#" onClick={go(v)} style={{ display: 'flex', gap: 12, padding: 10, borderRadius: 'var(--radius-sm)' }}
                      onMouseEnter={(e)=>e.currentTarget.style.background='var(--surface-subtle)'}
                      onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
                      <Icon name={ic} size={22} color="var(--brand-primary)" />
                      <span><b style={{ display: 'block', fontSize: 14, color: 'var(--text-primary)' }}>{t}</b><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{d}</span></span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="ap-desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="link" size="sm" onClick={()=>onNav&&onNav('app')}>Вхід</Button>
          <Button variant="primary" size="sm" onClick={()=>onNav&&onNav('app')}>Спробувати</Button>
        </div>
        {/* Hamburger — mobile only */}
        <button className="ap-hamburger" aria-label="Меню" aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, marginRight: -10, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
          <Icon name={mobileOpen ? 'close' : 'menu'} size={28} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="ap-mobile-drawer">
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map(([l, v]) => (
              <a key={v} href="#" onClick={go(v)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', fontSize: 'var(--fs-h5)', fontWeight: active === v ? 700 : 500, color: active === v ? 'var(--text-brand)' : 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
                {l} <Icon name="chevron_right" size={22} color="var(--text-muted)" />
              </a>
            ))}
          </nav>
          <span style={{ fontSize: 'var(--fs-tiny)', fontWeight: 700, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '24px 0 4px' }}>Більше</span>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {more.map(([t, d, ic, v]) => (
              <a key={v} href="#" onClick={go(v)} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--color-teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={ic} size={20} color="var(--brand-primary)" />
                </div>
                <span><b style={{ display: 'block', fontSize: 15, color: 'var(--text-primary)' }}>{t}</b><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{d}</span></span>
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
            <Button variant="primary" size="lg" fullWidth onClick={()=>{ setMobileOpen(false); onNav&&onNav('app'); }}>Спробувати</Button>
            <Button variant="secondary" size="lg" fullWidth onClick={()=>{ setMobileOpen(false); onNav&&onNav('app'); }}>Вхід</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onNav }) {
  const { Button, Badge } = window.AutonomyPlannerDesignSystem_43f1d6;
  return (
    <Section pad="var(--space-20)">
      <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Badge tone="eco"><Icon name="eco" size={15} fill /> Енергетична незалежність</Badge>
          <h1 style={{ fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)' }}>
            Сплануйте автономність вашого дому
          </h1>
          <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)', maxWidth: '46ch' }}>
            Autonomy Planner перетворює складні розрахунки енергії на простий, поетапний план. Від першого кроку до повної незалежності.
          </p>
          <div className="ap-actions" style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <Button variant="primary" size="lg" onClick={()=>onNav&&onNav('app')} iconRight={<Icon name="arrow_forward" size={20} />}>Почати розрахунок</Button>
            <Button variant="secondary" size="lg">Дивитись демо</Button>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 12 }}>
            {[['solar_power', '2 400+ розрахунків'], ['verified', 'Без карток для старту']].map(([ic, t]) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>
                <Icon name={ic} size={18} color="var(--brand-primary)" /> {t}
              </span>
            ))}
          </div>
        </div>
        <Placeholder icon="insights" label="Панель планування автономності" ratio="5 / 4" />
      </div>
    </Section>
  );
}

Object.assign(window, { Navbar, Hero });

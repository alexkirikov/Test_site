// Autonomy Planner — Website UI kit · interactive Planner app demo

function PlannerApp({ onNav }) {
  const { Card, Button, Input, Select, Stat, Badge, Tabs } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [area, setArea] = React.useState(120);
  const [consumption, setConsumption] = React.useState(540);
  const [type, setType] = React.useState('Приватний дім');
  const [done, setDone] = React.useState(false);

  // toy "calculation"
  const daily = (consumption / 30).toFixed(1);
  const panels = Math.max(6, Math.round(consumption / 55));
  const battery = Math.round(consumption / 30 * 1.4);
  const cost = (panels * 9000 + battery * 11000 + 45000).toLocaleString('uk-UA');
  const payback = (1 + consumption / 360).toFixed(1);
  const autonomy = Math.min(98, 60 + Math.round(panels * 1.4));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-subtle)', display: 'flex', flexDirection: 'column' }}>
      {/* App topbar */}
      <header style={{ height: 64, background: '#fff', borderBottom: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={window.AP_LOGO || "../../assets/ap-logo.png"} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <strong style={{ fontFamily: 'var(--font-heading)', fontSize: 16 }}>Autonomy&nbsp;Planner</strong>
          <Badge tone="neutral" style={{ marginLeft: 8 }}>Демо</Badge>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('home');}} style={{ fontSize: 14, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="arrow_back" size={18}/> На сайт</a>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-teal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teal-800)', fontWeight: 700, fontSize: 14 }}>ІП</div>
        </div>
      </header>

      <div className="ap-app-shell" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', flex: 1 }}>
        {/* Sidebar */}
        <nav className="ap-app-sidebar" style={{ background: '#fff', borderRight: '1px solid var(--border-default)', padding: 'var(--space-6)' }}>
          {[['dashboard', 'Огляд', false], ['calculate', 'Новий розрахунок', true], ['folder', 'Мої проекти', false], ['menu_book', 'База знань', false], ['settings', 'Налаштування', false]].map(([ic, l, active]) => (
            <a key={l} href="#" onClick={(e)=>e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--radius-sm)', marginBottom: 4, color: active ? 'var(--text-brand)' : 'var(--text-secondary)', background: active ? 'var(--color-teal-50)' : 'transparent', fontWeight: active ? 600 : 400, fontSize: 14 }}>
              <Icon name={ic} size={20} fill={active} /> {l}
            </a>
          ))}
        </nav>

        {/* Main */}
        <main className="ap-app-main" style={{ padding: 'var(--space-12)', overflow: 'auto' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <h3 style={{ marginBottom: 6 }}>Новий розрахунок автономності</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>Заповніть дані про ваш дім — ми розрахуємо конфігурацію і вартість.</p>

            <div className="ap-app-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 24, alignItems: 'start' }}>
              <Card variant="elevated">
                <h5 style={{ marginBottom: 20 }}>Параметри об'єкта</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <Select label="Тип об'єкта" options={['Приватний дім', 'Котедж', 'Дача']} value={type} onChange={(e) => setType(e.target.value)} />
                  <Input label="Площа будинку" type="number" suffix="м²" value={area} onChange={(e) => setArea(+e.target.value || 0)} />
                  <Input label="Місячне споживання" type="number" suffix="kWh" value={consumption} onChange={(e) => setConsumption(+e.target.value || 0)} hint="З останньої платіжки за електроенергію" />
                  <Button variant="primary" fullWidth onClick={() => setDone(true)} iconRight={<Icon name="bolt" size={20} fill />}>Розрахувати</Button>
                </div>
              </Card>

              <Card variant={done ? 'elevated' : 'subtle'} style={{ opacity: done ? 1 : 0.62, transition: 'opacity .3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <h5>Результат</h5>
                  {done && <Badge tone="eco"><Icon name="eco" size={14} fill /> Автономність {autonomy}%</Badge>}
                </div>
                {done ? (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
                      <Stat value={daily} unit="kWh" label="Добове споживання" />
                      <Stat value={panels} unit="шт" label="Сонячні панелі" tone="accent" />
                      <Stat value={battery} unit="kWh" label="Ємність батарей" tone="ink" />
                      <Stat value={payback} unit="р" label="Окупність" tone="eco" />
                    </div>
                    <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 20, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Орієнтовна вартість</span>
                      <span className="ap-mono" style={{ fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--text-brand)' }}>₴{cost}</span>
                    </div>
                    <Button variant="secondary" fullWidth style={{ marginTop: 24 }} iconLeft={<Icon name="picture_as_pdf" size={20} />}>Експортувати звіт у PDF</Button>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
                    <Icon name="insights" size={48} color="var(--color-neutral-300)" />
                    <p style={{ marginTop: 12 }}>Заповніть параметри і натисніть «Розрахувати»</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { PlannerApp });

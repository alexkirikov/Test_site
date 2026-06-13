// Autonomy Planner — Website UI kit · Testimonials + Audience

function Testimonials() {
  const { Card, Avatar, Badge } = window.AutonomyPlannerDesignSystem_43f1d6;
  const quotes = [
    { q: 'Вперше я зрозумів, скільки коштуватиме моя автономність і як це робити поетапно. Без цього сервісу я б витратив удвічі більше.', n: 'Іван Петренко', r: 'Власник приватного дому' },
    { q: 'Клієнтам легше прийняти рішення, коли вони бачать точні розрахунки. Autonomy Planner скоротив час консультацій на 40%.', n: 'Марія Сидоренко', r: 'Директор компанії-інсталятора' },
    { q: 'Як інсталятор, я економлю години на розрахунках. Клієнти отримують точні цифри і довіряють моїм рекомендаціям.', n: 'Олег Коваленко', r: 'Інженер-інсталятор' },
  ];
  return (
    <Section>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <Eyebrow>Відгуки</Eyebrow>
        <h2 style={{ marginTop: 12 }}>Відгуки користувачів</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>Що кажуть про Autonomy Planner ті, хто вже користується.</p>
      </div>
      <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {quotes.map((qt) => (
          <Card key={qt.n} variant="outlined">
            <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={20} color="var(--brand-accent)" fill />)}
            </div>
            <p style={{ color: 'var(--text-primary)', fontSize: 'var(--fs-lead)', marginBottom: 24 }}>«{qt.q}»</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={qt.n} size={44} />
              <span><b style={{ display: 'block', fontSize: 14 }}>{qt.n}</b><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{qt.r}</span></span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Audience() {
  const { Card, Button, Tabs, Badge } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [aud, setAud] = React.useState('b2c');
  const data = {
    b2c: { badge: 'Власники', h: 'Сплануйте автономність самостійно', t: 'Розрахуйте споживання, підберіть обладнання, оцініть вартість і окупність — без технічних знань.', icon: 'home', points: ['Покроковий майстер розрахунку', 'Зрозумілий звіт без жаргону', 'Оцінка вартості та окупності'] },
    b2b: { badge: 'Інсталятори', h: 'Прискорте роботу з клієнтами', t: 'Швидкі розрахунки, професійні звіти з вашим брендом та зменшення часу на консультації.', icon: 'engineering', points: ['Розрахунки за хвилини, не години', 'Брендовані PDF-звіти', 'База проектів і клієнтів'] },
  }[aud];
  return (
    <Section bg="var(--surface-subtle)">
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
        <Eyebrow>Рішення</Eyebrow>
        <h2 style={{ marginTop: 12 }}>Для власників і інсталяторів</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>Один сервіс, два способи використання. Виберіть свій.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <Tabs variant="segmented" tabs={[{ value: 'b2c', label: 'Для власників' }, { value: 'b2b', label: 'Для інсталяторів' }]} value={aud} onChange={setAud} />
      </div>
      <Card variant="elevated" padding="0">
        <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
          <div style={{ padding: 'var(--space-16)' }}>
            <Badge tone="brand" variant="solid">{data.badge}</Badge>
            <h3 style={{ margin: '20px 0 14px' }}>{data.h}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>{data.t}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {data.points.map((p) => (
                <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-primary)' }}>
                  <Icon name="check_circle" size={20} color="var(--brand-eco)" fill /> {p}
                </li>
              ))}
            </ul>
            <Button variant="primary">Дізнатися більше</Button>
          </div>
          <Placeholder icon={data.icon} label={data.badge} ratio="auto" style={{ borderRadius: 0, borderTopRightRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)', minHeight: 380 }} tone="teal" />
        </div>
      </Card>
    </Section>
  );
}

Object.assign(window, { Testimonials, Audience });

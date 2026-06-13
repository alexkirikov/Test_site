// Autonomy Planner — Website UI kit · CTA + Pricing + Footer

function CTA({ onNav }) {
  const { Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  return (
    <Section>
      <div style={{ background: 'var(--surface-brand)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-20) var(--space-16)', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, var(--color-teal-600), transparent 70%)' }} />
        <h2 style={{ color: '#fff', position: 'relative' }}>Готові почати планування?</h2>
        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--color-teal-200)', maxWidth: '52ch', margin: '16px auto 32px', position: 'relative' }}>
          Спробуйте Autonomy Planner безплатно. Жодних карток, жодних зобов'язань.
        </p>
        <div className="ap-actions" style={{ display: 'flex', gap: 12, justifyContent: 'center', position: 'relative' }}>
          <Button variant="accent" size="lg" onClick={()=>onNav&&onNav('app')}>Почати безкоштовно</Button>
          <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'var(--color-teal-500)' }}>Розрахувати демо</Button>
        </div>
      </div>
    </Section>
  );
}

function Pricing({ onNav }) {
  const { Card, Button, Badge } = window.AutonomyPlannerDesignSystem_43f1d6;
  // Confirmed four-tier structure — mixed billing (free / one-time / monthly / custom).
  const plans = [
    {
      name: 'Безкоштовна перевірка', sub: 'Для тих, хто хоче швидко оцінити приблизні потреби в автономності.',
      price: '0', unit: '₴', period: 'назавжди', cta: 'Почати безкоштовно', nav: 'app', featured: false,
      feats: ['Базова оцінка енергетичних потреб', 'Орієнтовний рівень автономності', 'Базовий рекомендований сценарій'],
    },
    {
      name: 'План для дому', sub: 'Для власників будинків, які хочуть зрозумілу рекомендацію перед купівлею обладнання.',
      price: '990', unit: '₴', period: 'одноразово', cta: 'Обрати план', nav: 'app', featured: true, badge: 'Для власників',
      feats: ['Детальна рекомендація щодо конфігурації', 'Базовий, оптимальний і максимальний сценарії', 'Орієнтовний бюджет', 'PDF-звіт', 'Рекомендовані наступні кроки'],
    },
    {
      name: 'Професійний план', sub: 'Для інсталяторів і невеликих команд, яким треба швидше оцінювати запити клієнтів.',
      price: '2 900', unit: '₴', period: '/ місяць', cta: 'Спробувати Pro', nav: 'contact', featured: false, badge: 'Для інсталяторів',
      feats: ['Багаторазові розрахунки для клієнтів', 'Структурований збір даних від лідів', 'Збережені проєкти', 'Брендовані звіти з рекомендаціями', 'Порівняння сценаріїв'],
    },
    {
      name: 'Бізнес / партнерський', sub: 'Для більших інсталяційних компаній та постачальників енергетичних рішень.',
      price: 'Індивідуально', unit: '', period: 'за запитом', cta: 'Зв\u2019язатися', nav: 'contact', featured: false, custom: true,
      feats: ['Командний доступ', 'Індивідуальні робочі процеси', 'Розширена звітність', 'Інтеграція з CRM або процесами', 'Партнерська підтримка'],
    },
  ];
  return (
    <Section bg="var(--surface-subtle)" id="pricing">
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
        <Eyebrow>Ціни</Eyebrow>
        <h2 style={{ marginTop: 12 }}>Прозорі тарифи під кожну задачу</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>Почніть із безкоштовної перевірки. Платіть за дім один раз або підключіть команду на Pro.</p>
      </div>
      <div className="ap-carousel ap-carousel-wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, alignItems: 'stretch', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {plans.map((p) => (
          <Card key={p.name} variant={p.featured ? 'elevated' : 'outlined'}
            style={{ display: 'flex', flexDirection: 'column', ...(p.featured ? { border: '2px solid var(--brand-primary)' } : {}) }}>
            <div style={{ minHeight: 26, marginBottom: 10, flexShrink: 0 }}>
              {p.badge && <Badge tone={p.featured ? 'accent' : 'brand'} variant={p.featured ? 'solid' : 'soft'}>{p.badge}</Badge>}
            </div>
            <h5 style={{ margin: 0, flexShrink: 0 }}>{p.name}</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', margin: '8px 0 0', minHeight: 60, flexShrink: 0 }}>{p.sub}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, flexWrap: 'wrap', margin: '20px 0 4px', flexShrink: 0 }}>
              {p.unit && <span className="ap-mono" style={{ fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--text-muted)' }}>{p.unit}</span>}
              <span className="ap-mono" style={{ fontSize: p.custom ? 'var(--fs-h4)' : 'var(--fs-h1)', fontWeight: 700, color: 'var(--text-primary)' }}>{p.price}</span>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: 24, flexShrink: 0 }}>{p.period}</span>
            <Button variant={p.featured ? 'primary' : 'secondary'} fullWidth onClick={()=>onNav&&onNav(p.nav)}>{p.cta}</Button>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {p.feats.map((f) => (
                <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: 'var(--fs-small)' }}>
                  <Icon name="check" size={18} color="var(--brand-eco)" style={{ flexShrink: 0, marginTop: 1 }} /> {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Footer({ onNav }) {
  const go = (v) => (e) => { e.preventDefault(); onNav && onNav(v); };
  const cols = [
    ['Продукт', [['Можливості', 'features'], ['Як це працює', 'how'], ['Ціни', 'pricing'], ['Кейси', 'cases']]],
    ['Рішення', [['Для власників', 'homeowners'], ['Для інсталяторів', 'installers'], ['База знань', 'blog'], ['Блог', 'blog']]],
    ['Компанія', [['Про нас', 'about'], ['Контакти', 'contact'], ['Заявка', 'contact'], ['Спробувати', 'app']]],
  ];
  return (
    <footer style={{ background: 'var(--surface-dark)', color: '#fff', padding: 'var(--space-20) var(--container-pad) var(--space-12)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div className="ap-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48, paddingBottom: 'var(--space-16)' }}>
          <div className="ap-footer-brand">
            <a href="#" onClick={go('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src={window.AP_LOGO || "../../assets/ap-logo.png"} alt="Autonomy Planner" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              <strong style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: '#fff' }}>Autonomy&nbsp;Planner</strong>
            </a>
            <p style={{ color: 'var(--color-teal-200)', maxWidth: '32ch', fontSize: 'var(--fs-small)' }}>Поетапний, фінансово обґрунтований план автономності для вашого дому.</p>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <h5 style={{ fontSize: 'var(--fs-small)', marginBottom: 16, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--color-teal-300)' }}>{h}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(([l, v], i) => <li key={i}><a href="#" onClick={go(v)} style={{ color: 'var(--color-teal-100)', fontSize: 'var(--fs-small)' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="ap-footer-bottom" style={{ borderTop: '1px solid var(--color-teal-900)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--color-teal-300)', fontSize: 'var(--fs-small)' }}>
          <span>© 2026 Autonomy Planner. Усі права захищені.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: 'var(--color-teal-300)' }}>Політика конфіденційності</a>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ color: 'var(--color-teal-300)' }}>Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTA, Pricing, Footer });

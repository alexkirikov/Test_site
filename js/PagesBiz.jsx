// Autonomy Planner — Website UI kit · Business pages
// PricingPage, CasesPage, AboutPage

function PricingPage({ onNav }) {
  const { Accordion, Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const faqs = [
    { q: 'Яка точність розрахунків?', a: 'Наш алгоритм враховує клімат вашого регіону, сезонні коливання сонячної радіації та реальні умови експлуатації. Розрахунки базуються на перевірених інженерних моделях.' },
    { q: 'Чи можу я змінити конфігурацію пізніше?', a: 'Так. Ви можете повертатися до своїх розрахунків, змінювати параметри та порівнювати різні варіанти конфігурацій. Кожен сценарій зберігається.' },
    { q: 'Для кого цей інструмент?', a: 'Autonomy Planner створений для власників приватних будинків, які планують автономність, для компаній на етапі реконструкції та для інсталяторів.' },
    { q: 'Що робити з результатами?', a: 'Експортуйте звіт, поділіться ним з інсталятором або архітектором. Документація містить всі необхідні параметри для замовлення обладнання.' },
  ];
  const trust = [
    ['lock', 'Без прихованих платежів', 'Ви бачите підсумкову суму до оплати — жодних автопродовжень без згоди.'],
    ['shield', 'Ваші дані захищені', 'Параметри будинку зберігаються лише для ваших розрахунків і нікуди не передаються.'],
    ['support_agent', 'Підтримка українською', 'Відповідаємо на запитання щодо тарифів і розрахунків протягом робочого дня.'],
  ];
  return (
    <div>
      <PageHero eyebrow="Ціни" title="Прозорі тарифи під кожну задачу" intro="Почніть із безкоштовної перевірки, оплатіть план для дому один раз або підключіть команду на професійному тарифі. Фінальні комерційні умови можуть уточнюватися." />
      <Pricing onNav={onNav} />

      <Section>
        <div className="ap-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {trust.map(([ic, h, t]) => (
            <div key={h} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={ic} size={22} color="var(--brand-primary)" fill />
              </div>
              <div>
                <h5 style={{ marginBottom: 6 }}>{h}</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-small)' }}>{t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="var(--surface-subtle)">
        <SectionIntro eyebrow="FAQ" title="Часті запитання" lede="Не знайшли відповідь? Напишіть нам — відповімо протягом дня." />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Accordion defaultOpen={0} items={faqs} />
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button variant="secondary" onClick={()=>onNav&&onNav('contact')}>Поставити запитання</Button>
          </div>
        </div>
      </Section>
      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function CasesPage({ onNav }) {
  const { Card, Badge, Stat, Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const cases = [
    { tag: 'Приватний дім · Київська обл.', icon: 'home', title: 'Повна автономність для родини з 4 осіб',
      stats: [['8.4', 'kWh', 'Добове споживання', 'ink'], ['12', 'шт', 'Сонячні панелі', 'accent'], ['94', '%', 'Автономність', 'eco'], ['5.1', 'р', 'Окупність', 'brand']], cost: '₴320 000' },
    { tag: 'Котедж · Львівська обл.', icon: 'villa', title: 'Поетапний перехід з резервним генератором',
      stats: [['14.2', 'kWh', 'Добове споживання', 'ink'], ['18', 'шт', 'Сонячні панелі', 'accent'], ['88', '%', 'Автономність', 'eco'], ['6.3', 'р', 'Окупність', 'brand']], cost: '₴540 000' },
    { tag: 'Дача · Одеська обл.', icon: 'cottage', title: 'Базова автономність для сезонного будинку',
      stats: [['4.1', 'kWh', 'Добове споживання', 'ink'], ['6', 'шт', 'Сонячні панелі', 'accent'], ['76', '%', 'Автономність', 'eco'], ['4.4', 'р', 'Окупність', 'brand']], cost: '₴145 000' },
  ];
  return (
    <div>
      <PageHero eyebrow="Кейси" title="Приклади реальних розрахунків"
        intro="Подивіться, як Autonomy Planner перетворює параметри будинку на конкретну конфігурацію, вартість і строк окупності."
        actions={<Button variant="primary" size="lg" onClick={()=>onNav&&onNav('app')} iconRight={<Icon name="arrow_forward" size={20} />}>Зробити свій розрахунок</Button>} />

      <Section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        {cases.map((c) => (
          <Card key={c.title} variant="elevated">
            <div className="ap-case-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center' }}>
              <div>
                <Placeholder icon={c.icon} ratio="4 / 3" tone="teal" />
              </div>
              <div>
                <Badge tone="brand">{c.tag}</Badge>
                <h3 style={{ margin: '14px 0 24px' }}>{c.title}</h3>
                <div className="ap-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, paddingBottom: 24, borderBottom: '1px solid var(--border-default)', marginBottom: 20 }}>
                  {c.stats.map(([v, u, l, t]) => <Stat key={l} value={v} unit={u} label={l} tone={t} />)}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Орієнтовна вартість системи</span>
                  <span className="ap-mono" style={{ fontSize: 'var(--fs-h3)', fontWeight: 700, color: 'var(--text-brand)' }}>{c.cost}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function AboutPage({ onNav }) {
  const { Card, Stat, Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  return (
    <div>
      <PageHero eyebrow="Про нас" title="Робимо енергетичну незалежність зрозумілою"
        intro="Ми віримо, що автономність дому не повинна бути привілеєм інженерів. Autonomy Planner перетворює складні розрахунки на чіткий, поетапний і фінансово обґрунтований план." />

      <Section>
        <div className="ap-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          <Stat value="2 400" unit="+" label="Розрахунків зроблено" tone="brand" align="center" />
          <Stat value="18" unit="регіонів" label="З урахуванням клімату" tone="accent" align="center" />
          <Stat value="40" unit="%" label="Економія часу інсталяторів" tone="eco" align="center" />
        </div>
      </Section>

      <Section bg="var(--surface-subtle)">
        <SectionIntro eyebrow="Цінності" title="У що ми віримо" />
        <div className="ap-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          <FeatureItem icon="visibility" h="Прозорість" t="Жодних прихованих припущень. Кожна цифра має пояснення." />
          <FeatureItem icon="footprint" h="Поетапність" t="Великі цілі досягаються маленькими, обґрунтованими кроками." tone="gold" />
          <FeatureItem icon="diversity_3" h="Доступність" t="Складне рішення — простою мовою, для кожного власника дому." tone="eco" />
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Команда" title="Інженери, що люблять зрозумілі речі" lede="Невелика команда з досвідом у відновлюваній енергетиці, фінансах та продуктовому дизайні." />
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {[['Олександр К.', 'Засновник, енергетик'], ['Наталія В.', 'Продукт'], ['Дмитро С.', 'Інженерія'], ['Олена П.', 'Підтримка клієнтів']].map(([n, r]) => (
            <Card key={n} variant="outlined" style={{ textAlign: 'center' }}>
              <Placeholder icon="person" ratio="1 / 1" tone="teal" style={{ marginBottom: 16, borderRadius: 'var(--radius-pill)' }} />
              <b style={{ display: 'block' }}>{n}</b>
              <span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)' }}>{r}</span>
            </Card>
          ))}
        </div>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { PricingPage, CasesPage, AboutPage });

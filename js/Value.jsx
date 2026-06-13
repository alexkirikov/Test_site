// Autonomy Planner — Website UI kit · Why / Capabilities / How it works

function WhyUs() {
  const { Card } = window.AutonomyPlannerDesignSystem_43f1d6;
  const items = [
    { tag: 'Поетапно', icon: 'footprint', h: 'Розбиваємо шлях до автономності на реальні етапи', t: 'Кожен крок має сенс і фінансове обґрунтування. Жодного «купіть усе одразу».' },
    { tag: 'Прозоро', icon: 'visibility', h: 'Бачите кожен розрахунок і кожне рішення', t: 'Немає прихованих припущень — лише ваші цифри й чіткі формули.' },
    { tag: 'Гнучко', icon: 'tune', h: 'Адаптується до вашого бюджету і потреб', t: 'Сонячні панелі, батареї, інвертори — підбір під ваш дім і фінанси.' },
  ];
  return (
    <Section bg="var(--surface-subtle)">
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <Eyebrow>Перевага</Eyebrow>
        <h2 style={{ marginTop: 12 }}>Чому вибирають Autonomy Planner</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>Просто, чесно, фінансово обґрунтовано — і завжди у вашому темпі.</p>
      </div>
      <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {items.map((it) => (
          <Card key={it.h} variant="elevated" interactive>
            <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-teal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <Icon name={it.icon} size={26} color="var(--brand-primary)" fill />
            </div>
            <span style={{ fontSize: 'var(--fs-small)', fontWeight: 700, color: 'var(--brand-eco)' }}>{it.tag}</span>
            <h4 style={{ margin: '8px 0 12px' }}>{it.h}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>{it.t}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Capabilities() {
  const items = [
    { tag: 'Енергія', icon: 'electric_meter', h: 'Розрахунок споживання', t: 'Аналіз вашого реального та прогнозованого споживання за реальними даними.' },
    { tag: 'Обладнання', icon: 'solar_power', h: 'Підбір конфігурації', t: 'Сонячні панелі, батареї, інвертори, генератори — оптимальний набір під дім.' },
    { tag: 'План', icon: 'savings', h: 'Фінансовий план автономності', t: 'Вартість, окупність, етапи впровадження — усе в одному звіті.' },
  ];
  return (
    <Section>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <Eyebrow>Функціональність</Eyebrow>
        <h2 style={{ marginTop: 12 }}>Що вміє робити сервіс</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>Усе необхідне для розрахунку і планування автономності дому в одному місці.</p>
      </div>
      <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {items.map((it) => (
          <div key={it.h}>
            <Placeholder icon={it.icon} ratio="16 / 10" tone="teal" />
            <span style={{ display: 'block', marginTop: 20, fontSize: 'var(--fs-small)', fontWeight: 700, color: 'var(--brand-eco)' }}>{it.tag}</span>
            <h4 style={{ margin: '6px 0 10px' }}>{it.h}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>{it.t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks({ onNav }) {
  const { Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const steps = [
    { icon: 'edit_note', h: 'Крок перший — введення даних', t: 'Розповідаєте про свій дім, його розташування і бюджет.' },
    { icon: 'bolt', h: 'Крок другий — аналіз енергії', t: 'Сервіс розраховує ваше енергоспоживання і потенціал відновлюваних джерел.' },
    { icon: 'battery_charging_full', h: 'Крок третій — рекомендації обладнання', t: 'Отримуєте варіанти конфігурацій сонячних панелей, батарей і генераторів.' },
  ];
  return (
    <Section bg="var(--surface-dark)" style={{ color: '#fff' }}>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <Eyebrow color="var(--color-gold-400)">Процес</Eyebrow>
        <h2 style={{ marginTop: 12, color: '#fff' }}>Як це працює за чотири кроки</h2>
        <p style={{ marginTop: 16, fontSize: 'var(--fs-lead)', color: 'var(--color-teal-200)' }}>Введіть дані про ваш дім, отримайте детальний план. Все просто і зрозуміло.</p>
      </div>
      <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
        {steps.map((s, i) => (
          <div key={s.h} style={{ borderTop: '2px solid var(--color-teal-700)', paddingTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <Icon name={s.icon} size={32} color="var(--color-gold-400)" fill />
              <span className="ap-mono" style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-teal-600)' }}>0{i + 1}</span>
            </div>
            <h4 style={{ color: '#fff', marginBottom: 10 }}>{s.h}</h4>
            <p style={{ color: 'var(--color-teal-200)' }}>{s.t}</p>
          </div>
        ))}
      </div>
      <div className="ap-actions" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 56 }}>
        <Button variant="accent" size="lg" onClick={()=>onNav&&onNav('app')}>Почати розрахунок</Button>
        <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'var(--color-teal-600)' }}>Дізнатися більше</Button>
      </div>
    </Section>
  );
}

Object.assign(window, { WhyUs, Capabilities, HowItWorks });

// Autonomy Planner — Website UI kit · Content pages
// BlogPage, ArticlePage, ContactPage

const BLOG_POSTS = [
  { cat: 'Акумулятори', icon: 'battery_charging_full', read: '5 хвилин читання', title: 'Літій чи свинець? Вибір акумулятора для дому', excerpt: 'Розбираємось у типах батарей та як підібрати оптимальний накопичувач під ваш бюджет.' },
  { cat: 'Енергоефективність', icon: 'energy_savings_leaf', read: '6 хвилин читання', title: "П'ять способів зменшити споживання енергії вдома", excerpt: 'Прості кроки до економії та підготовки будинку перед встановленням систем.' },
  { cat: 'Акумулятори', icon: 'battery_full', read: '6 хвилин читання', title: 'Акумулятори для автономного будинку: типи та порівняння', excerpt: 'Розуміння різних технологій накопичення енергії та їх застосування.' },
  { cat: 'Генератори', icon: 'bolt', read: '8 хвилин читання', title: 'Генератор як резервне джерело енергії для дому', excerpt: 'Коли потрібен генератор і як інтегрувати його в автономну систему.' },
  { cat: 'Енергоефективність', icon: 'home', read: '5 хвилин читання', title: 'Енергоефективність будинку: перші кроки до економії', excerpt: 'Практичні способи зменшити споживання ще до інвестицій в обладнання.' },
  { cat: 'Сонячна енергетика', icon: 'solar_power', read: '7 хвилин читання', title: 'Сонячні панелі в Україні: практичний гайд', excerpt: 'Скільки панелей потрібно, як рахувати вироблення і чого очікувати по сезонах.' },
];
const BLOG_CATS = ['Усі', 'Сонячна енергетика', 'Акумулятори', 'Генератори', 'Енергоефективність'];

function BlogCard({ post, onNav, featured }) {
  const { Badge } = window.AutonomyPlannerDesignSystem_43f1d6;
  return (
    <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('article');}}
      className={featured ? 'ap-blog-featured' : undefined}
      style={{ display: 'flex', flexDirection: featured ? 'row' : 'column', gap: featured ? 40 : 0, color: 'inherit' }}>
      <Placeholder icon={post.icon} ratio={featured ? '4 / 3' : '16 / 9'} tone="teal" style={featured ? { flex: '0 0 46%' } : {}} />
      <div style={{ padding: featured ? '8px 0' : '20px 0 0', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Badge tone="eco">{post.cat}</Badge>
          <span style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>{post.read}</span>
        </div>
        <h4 style={featured ? { fontSize: 'var(--fs-h3)' } : {}}>{post.title}</h4>
        <p style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
        <span style={{ color: 'var(--text-brand)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          Читати <Icon name="arrow_forward" size={18} />
        </span>
      </div>
    </a>
  );
}

function BlogPage({ onNav }) {
  const { Tabs, Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [cat, setCat] = React.useState('Усі');
  const list = cat === 'Усі' ? BLOG_POSTS.slice(1) : BLOG_POSTS.filter((p) => p.cat === cat);
  return (
    <div>
      <PageHero eyebrow="База знань" title="Читайте про автономність"
        intro="Знання, які дають упевненість: про автономний будинок, сонячну енергетику, акумулятори, генератори та енергоефективність." />

      <Section pad="var(--space-16)">
        <BlogCard post={BLOG_POSTS[0]} onNav={onNav} featured />
      </Section>

      <Section bg="var(--surface-subtle)" pad="var(--space-16)">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <Tabs tabs={BLOG_CATS} value={cat} onChange={setCat} variant="segmented" />
        </div>
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {list.map((p) => <BlogCard key={p.title} post={p} onNav={onNav} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Button variant="secondary">Показати більше</Button>
        </div>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function ArticlePage({ onNav }) {
  const { Badge, Avatar, Accordion, Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  const faqs = [
    { q: 'Який тип акумулятора обрати для дому?', a: 'Для більшості домашніх систем літій-залізо-фосфатні (LiFePO₄) батареї дають кращий баланс терміну служби, глибини розряду та безпеки. Свинцеві дешевші на старті, але служать менше.' },
    { q: 'Як розрахувати потрібну ємність?', a: 'Орієнтуйтесь на добове споживання та бажану кількість днів автономності. Autonomy Planner робить цей розрахунок автоматично з урахуванням глибини розряду.' },
  ];
  return (
    <div>
      <article>
        <Section pad="var(--space-16)">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav('blog');}} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', marginBottom: 24 }}>
              <Icon name="arrow_back" size={18} /> Усі статті
            </a>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
              <Badge tone="eco">Акумулятори</Badge>
              <span style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>5 хвилин читання</span>
            </div>
            <h1 style={{ fontSize: 'var(--fs-h1)', marginBottom: 24 }}>Літій чи свинець? Вибір акумулятора для дому</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Avatar name="Дмитро С." size={44} />
              <span><b style={{ display: 'block', fontSize: 14 }}>Дмитро Савченко</b><span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Інженер Autonomy Planner · 12 червня 2026</span></span>
            </div>
          </div>
        </Section>

        <Section pad="0 var(--container-pad) var(--space-12)">
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <Placeholder icon="battery_charging_full" ratio="16 / 7" tone="teal" />
          </div>
        </Section>

        <Section pad="0 var(--container-pad) var(--space-28)">
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-secondary)' }}>
              Вибір накопичувача — одне з найважливіших рішень при плануванні автономності. Від нього залежить не лише вартість системи, а й те, скільки років вона прослужить без заміни.
            </p>
            <h3>Дві основні технології</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              На ринку домашніх систем переважають дві технології: свинцево-кислотні та літій-залізо-фосфатні (LiFePO₄) акумулятори. Кожна має свої сильні сторони залежно від бюджету та сценарію використання.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Свинцеві батареї дешевші на старті, але мають меншу глибину розряду й коротший термін служби. Літієві коштують більше, проте служать у 3–4 рази довше і дозволяють використовувати майже всю ємність.
            </p>
            <blockquote style={{ margin: 0, padding: '20px 28px', borderLeft: '3px solid var(--brand-primary)', background: 'var(--surface-muted)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--fs-h5)', color: 'var(--text-primary)' }}>
              «Правильно підібрана ємність важливіша за тип хімії: переплата за зайві кіловат-години не окупається.»
            </blockquote>
            <h3>Що враховує Autonomy Planner</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Сервіс рахує потрібну ємність на основі вашого добового споживання, бажаної автономності та глибини розряду конкретної технології — і одразу показує різницю у вартості та окупності.
            </p>
          </div>
        </Section>

        <Section bg="var(--surface-subtle)">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <SectionIntro eyebrow="FAQ" title="Коротко про головне" align="start" />
            <Accordion defaultOpen={0} items={faqs} />
          </div>
        </Section>
      </article>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function ContactPage({ onNav }) {
  const { Input, Button, Checkbox, Tabs } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [sent, setSent] = React.useState(false);
  const [role, setRole] = React.useState('Власник будинку');
  const [agree, setAgree] = React.useState(false);
  return (
    <div>
      <PageHero eyebrow="Контакти" title="Залишіться на зв'язку з нами"
        intro="Надішліть заявку, і ми допоможемо підібрати найкраще рішення для вашого будинку." />

      <Section>
        <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>
          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <h3>Надішліть заявку</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Питання, пропозиції або просто привіт — напишіть нам, відповідаємо протягом одного робочого дня.</p>
            {[['mail', 'Email', 'hello@autonomyplanner.com'], ['call', 'Телефон', '+38 (044) 123 45 67'], ['location_on', 'Адреса', 'Київ, Україна']].map(([ic, l, v]) => (
              <div key={l} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={ic} size={22} color="var(--brand-primary)" />
                </div>
                <span><b style={{ display: 'block', fontSize: 14 }}>{l}</b><span className={l !== 'Адреса' ? 'ap-mono' : ''} style={{ color: 'var(--text-secondary)' }}>{v}</span></span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-10)', boxShadow: 'var(--shadow-sm)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-green-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon name="check" size={32} color="var(--brand-eco)" />
                </div>
                <h4 style={{ marginBottom: 8 }}>Заявку надіслано!</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Ми зв'яжемося з вами найближчим часом.</p>
                <Button variant="secondary" style={{ marginTop: 24 }} onClick={()=>setSent(false)}>Надіслати ще одну</Button>
              </div>
            ) : (
              <form onSubmit={(e)=>{e.preventDefault();setSent(true);}} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={{ fontSize: 'var(--fs-small)', fontWeight: 500, display: 'block', marginBottom: 8 }}>Я —</label>
                  <Tabs variant="segmented" tabs={['Власник будинку', 'Інсталятор']} value={role} onChange={setRole} />
                </div>
                <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Input label="Ім'я" placeholder="Ваше ім'я" required />
                  <Input label="Телефон" type="tel" placeholder="+38 (0__) ___ __ __" />
                </div>
                <Input label="Email" type="email" placeholder="you@example.com" required />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label style={{ fontSize: 'var(--fs-small)', fontWeight: 500 }}>Повідомлення</label>
                  <textarea rows={4} placeholder="Розкажіть про ваш будинок і що ви хочете спланувати"
                    style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-primary)', padding: '11px 14px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', resize: 'vertical', outline: 'none' }}
                    onFocus={(e)=>e.target.style.borderColor='var(--brand-primary)'} onBlur={(e)=>e.target.style.borderColor='var(--border-default)'} />
                </div>
                <Checkbox label="Я приймаю умови використання" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
                <Button variant="primary" size="lg" type="submit" disabled={!agree} fullWidth>Надіслати</Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { BlogPage, ArticlePage, ContactPage });

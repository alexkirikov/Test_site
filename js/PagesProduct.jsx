// Autonomy Planner — Website UI kit · Product pages
// FeaturesPage, HowItWorksPage, HomeownersPage, InstallersPage
// Copy on Homeowners / Installers / How-it-works is the confirmed (approved) content.

function FeatureRow({ flip, eyebrow, h, t, points, icon, tone }) {
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3>{h}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-lead)' }}>{t}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-primary)' }}>
            <Icon name="check_circle" size={20} color="var(--brand-eco)" fill /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
  const img = <Placeholder icon={icon} ratio="4 / 3" tone={tone || 'teal'} />;
  return (
    <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
      {flip ? <>{img}{text}</> : <>{text}{img}</>}
    </div>
  );
}

// Vertical benefit checklist (used on B2C/B2B pages).
function BenefitList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {items.map((p) => (
        <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-primary)', fontSize: 'var(--fs-lead)' }}>
          <Icon name="check_circle" size={24} color="var(--brand-eco)" fill style={{ flexShrink: 0, marginTop: 1 }} /> {p}
        </li>
      ))}
    </ul>
  );
}

function FeaturesPage({ onNav }) {
  const { Button } = window.AutonomyPlannerDesignSystem_43f1d6;
  return (
    <div>
      <PageHero
        eyebrow="Можливості"
        title="Повний контроль над автономністю"
        intro="Autonomy Planner перетворює технічні розрахунки на чіткий план. Ви отримуєте впевненість у виборі та фінансову обґрунтованість кожного кроку."
        actions={<>
          <Button variant="primary" size="lg" onClick={()=>onNav&&onNav('app')} iconRight={<Icon name="arrow_forward" size={20} />}>Почати розрахунок</Button>
          <Button variant="secondary" size="lg" onClick={()=>onNav&&onNav('how')}>Як це працює</Button>
        </>}
      />

      <Section>
        <SectionIntro eyebrow="Функціональність" title="Що вміє робити сервіс" lede="Усе необхідне для розрахунку і планування автономності дому — від споживання до фінансів." />
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          <FeatureItem icon="electric_meter" h="Розрахунок споживання" t="Аналіз вашого реального та прогнозованого споживання за реальними даними." />
          <FeatureItem icon="solar_power" h="Підбір конфігурації" t="Сонячні панелі, батареї, інвертори, генератори — оптимальний набір під дім." tone="gold" />
          <FeatureItem icon="savings" h="Фінансовий план" t="Вартість, окупність, етапи впровадження — усе в одному звіті." tone="eco" />
        </div>
      </Section>

      <Section bg="var(--surface-subtle)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-20)' }}>
        <FeatureRow eyebrow="Споживання" h="Зменшіть споживання перед встановленням систем"
          t="Сервіс показує, де ви втрачаєте енергію, і що варто оптимізувати першим — перш ніж вкладати кошти в обладнання."
          points={['Профіль споживання по місяцях', 'Рекомендації з енергоефективності', 'Прогноз після оптимізації']} icon="energy_savings_leaf" tone="eco" />
        <FeatureRow flip eyebrow="Джерела енергії" h="Підберіть джерела під ваш регіон"
          t="Система враховує місцеві кліматичні умови та доступні ресурси, щоб запропонувати найефективнішу комбінацію."
          points={['Сонячні панелі та їх кількість', 'Резервні генератори', 'Адаптація до вашого регіону']} icon="solar_power" tone="gold" />
        <FeatureRow eyebrow="Акумулятори" h="Виберіть ємність та тип накопичувача"
          t="Порівняйте типи батарей за ємністю, терміном служби та вартістю — і знайдіть баланс під ваш бюджет."
          points={['Розрахунок потрібної ємності', 'Літій vs свинець', 'Глибина розряду й термін служби']} icon="battery_charging_full" tone="teal" />
      </Section>

      <Section>
        <SectionIntro eyebrow="Принципи" title="Спроектовано навколо ваших рішень" />
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
          <FeatureItem icon="footprint" h="Поетапне планування" t="Розпочніть з енергоефективності, потім додавайте джерела та накопичувачі." />
          <FeatureItem icon="public" h="Адаптація до регіону" t="Клімат, сонячна радіація та сезонність вашої місцевості." />
          <FeatureItem icon="visibility" h="Прозорі розрахунки" t="Кожна цифра пояснена — жодних прихованих припущень." />
          <FeatureItem icon="picture_as_pdf" h="Експорт звітів" t="Готовий PDF для інсталятора, банку чи архітектора." />
        </div>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function HowItWorksPage({ onNav }) {
  const { Button, Card, Stat } = window.AutonomyPlannerDesignSystem_43f1d6;
  // Confirmed three-step flow.
  const steps = [
    ['01', 'edit_note', 'Крок перший — Опишіть ваш будинок',
      'Вкажіть ключову інформацію про будинок, побутові прилади, споживання електроенергії, потреби в резервному живленні та орієнтовний бюджет.'],
    ['02', 'compare_arrows', 'Крок другий — Порівняйте сценарії автономності',
      'Система розрахує кілька можливих конфігурацій — від базового резерву до більш незалежного енергетичного рішення.'],
    ['03', 'description', 'Крок третій — Отримайте зрозумілу рекомендацію',
      'Ви отримаєте структурований план із рекомендованим обладнанням, орієнтовною вартістю, рівнем автономності та наступними кроками.'],
  ];
  const scenarios = [
    { tone: 'teal', icon: 'shield', name: 'Базовий резерв', pct: '40–55', tag: 'Найдоступніше',
      t: 'Покриває критичні навантаження під час відключень: світло, інтернет, холодильник, зв\u2019язок.' },
    { tone: 'gold', icon: 'balance', name: 'Оптимальний', pct: '75–85', tag: 'Баланс ціни й комфорту',
      t: 'Щоденний комфорт без огляду на тарифи й перебої — розумний баланс вартості та незалежності.' },
    { tone: 'eco', icon: 'bolt', name: 'Максимальний', pct: '95+', tag: 'Майже повна незалежність',
      t: 'Майже повна незалежність від мережі протягом року з запасом ємності на похмурі періоди.' },
  ];
  const chip = { teal: ['var(--color-teal-100)', 'var(--brand-primary)'], gold: ['var(--color-gold-100)', 'var(--brand-accent-hover)'], eco: ['var(--color-green-100)', 'var(--brand-eco)'] };
  return (
    <div>
      <PageHero eyebrow="Процес" title="Як це працює за три кроки"
        intro="Ви описуєте дім і споживання, платформа розраховує сценарії автономності, а ви отримуєте рекомендовану конфігурацію та звіт. Жодних технічних знань не потрібно."
        actions={<Button variant="primary" size="lg" onClick={()=>onNav&&onNav('app')} iconRight={<Icon name="arrow_forward" size={20} />}>Почати розрахунок</Button>} />

      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {steps.map(([n, ic, h, t]) => (
            <Card key={n} variant="outlined" interactive>
              <div className="ap-step" style={{ display: 'grid', gridTemplateColumns: '72px 56px 1fr', gap: 24, alignItems: 'center' }}>
                <span className="ap-mono" style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--color-teal-200)' }}>{n}</span>
                <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--color-teal-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={ic} size={28} color="var(--brand-primary)" fill />
                </div>
                <div>
                  <h4 style={{ marginBottom: 6 }}>{h}</h4>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '64ch' }}>{t}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="var(--surface-subtle)">
        <SectionIntro eyebrow="Сценарії" title="Від базового резерву до повної незалежності"
          lede="На другому кроці ви порівнюєте кілька конфігурацій поряд і обираєте свій баланс вартості та автономності." />
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {scenarios.map((s) => (
            <Card key={s.name} variant="elevated" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: chip[s.tone][0], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={s.icon} size={24} color={chip[s.tone][1]} fill />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span className="ap-mono" style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, color: 'var(--text-primary)' }}>{s.pct}</span>
                <span className="ap-mono" style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--text-muted)' }}>%</span>
                <span style={{ marginLeft: 4, color: 'var(--text-muted)', fontSize: 'var(--fs-small)' }}>автономності</span>
              </div>
              <div>
                <h4 style={{ marginBottom: 6 }}>{s.name}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{s.t}</p>
              </div>
              <span style={{ marginTop: 'auto', fontSize: 'var(--fs-small)', fontWeight: 600, color: chip[s.tone][1] }}>{s.tag}</span>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Результат" title="Що ви отримуєте наприкінці" />
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          <FeatureItem icon="description" h="Структурований план" t="Рекомендоване обладнання, конфігурація та наступні кроки в одному документі." />
          <FeatureItem icon="savings" h="Орієнтовний бюджет" t="Вартість системи та рівень автономності для кожного сценарію." tone="gold" />
          <FeatureItem icon="handshake" h="Готовність до розмови" t="Передайте звіт інсталятору — він уже містить усі параметри." tone="eco" />
        </div>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function HomeownersPage({ onNav }) {
  const { Button, Card, Avatar } = window.AutonomyPlannerDesignSystem_43f1d6;
  const benefits = [
    'Зрозуміти, яка система підходить саме для вашого будинку',
    'Порівняти базовий, оптимальний і максимальний сценарії автономності',
    'Уникнути переплати за зайве обладнання',
    'Отримати зрозумілий звіт із рекомендованою конфігурацією',
    'Підготуватися до розмови з інсталятором або постачальником обладнання',
  ];
  return (
    <div>
      <PageHero eyebrow="Для власників будинків"
        title="Плануйте енергонезалежність будинку зрозуміло й без зайвих витрат"
        intro="Autonomy Planner допомагає власникам будинків зрозуміти, яке обладнання їм справді потрібне: сонячні панелі, акумулятор, інвертор або резервне джерело живлення — з урахуванням потреб будинку, бюджету та бажаного рівня автономності."
        actions={<>
          <Button variant="primary" size="lg" onClick={()=>onNav&&onNav('app')}>Спробувати безкоштовно</Button>
          <Button variant="secondary" size="lg" onClick={()=>onNav&&onNav('cases')}>Приклади розрахунків</Button>
        </>} />

      <Section>
        <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow>Структурована рекомендація</Eyebrow>
            <h2 style={{ maxWidth: '18ch' }}>Замість здогадок — чіткий план для вашого дому</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-lead)' }}>
              Замість здогадок, фрагментованих порад і випадкових покупок ви отримуєте структуровану рекомендацію: конфігурацію системи, орієнтовний бюджет і рівень автономності.
            </p>
            <BenefitList items={benefits} />
          </div>
          <Placeholder icon="home" ratio="4 / 5" tone="teal" label="Фото: власник переглядає енергоплан" />
        </div>
      </Section>

      <Section bg="var(--surface-subtle)">
        <div className="ap-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 'var(--space-16)' }}>
          <Placeholder icon="solar_power" ratio="4 / 3" tone="gold" label="Сонячні панелі на даху" />
          <Placeholder icon="battery_charging_full" ratio="4 / 3" tone="teal" label="Домашній акумулятор" />
          <Placeholder icon="electrical_services" ratio="4 / 3" tone="eco" label="Інвертор та резерв" />
        </div>
        <Card variant="elevated">
          <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
            {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={22} color="var(--brand-accent)" fill />)}
          </div>
          <p style={{ fontSize: 'var(--fs-h4)', color: 'var(--text-primary)', maxWidth: '46ch', lineHeight: 'var(--lh-heading)', marginBottom: 24 }}>
            «Вперше я зрозумів, скільки коштуватиме моя автономність і як це робити поетапно. Без цього сервісу я б витратив удвічі більше.»
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Іван Петренко" size={48} />
            <span><b style={{ display: 'block' }}>Іван Петренко</b><span style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)' }}>Власник приватного дому</span></span>
          </div>
        </Card>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

function InstallersPage({ onNav }) {
  const { Button, Card, Avatar, Stat } = window.AutonomyPlannerDesignSystem_43f1d6;
  const benefits = [
    'Швидша первинна оцінка потреб клієнта',
    'Структурований збір даних замість хаотичних повідомлень і дзвінків',
    'Порівняння кількох сценаріїв конфігурації',
    'Професійний звіт із рекомендацією для клієнта',
    'Краща кваліфікація лідів до виїзду на об\u2019єкт',
  ];
  return (
    <div>
      <PageHero tone="dark" eyebrow="Для інсталяторів / партнерів"
        title="Перетворюйте запити клієнтів на зрозумілі енергетичні рішення швидше"
        intro="Autonomy Planner допомагає інсталяторам збирати структуровані дані від клієнтів, швидше підбирати відповідні конфігурації та презентувати рішення у зрозумілому форматі."
        actions={<>
          <Button variant="accent" size="lg" onClick={()=>onNav&&onNav('contact')}>Стати партнером</Button>
          <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'var(--color-teal-600)' }} onClick={()=>onNav&&onNav('pricing')}>Тарифи Pro</Button>
        </>} />

      <Section>
        <div className="ap-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          <Stat value="−40" unit="%" label="Часу на консультації" tone="eco" align="center" />
          <Stat value="2 400" unit="+" label="Розрахунків за рік" tone="brand" align="center" />
          <Stat value="< 5" unit="хв" label="На один розрахунок" tone="accent" align="center" />
        </div>
      </Section>

      <Section bg="var(--surface-subtle)">
        <div className="ap-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <Placeholder icon="engineering" ratio="4 / 3" tone="teal" label="Фото: інсталятор на об\u2019єкті з планшетом" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow>Менше ручної роботи</Eyebrow>
            <h2 style={{ maxWidth: '20ch' }}>Стандартизуйте подачу рішень клієнтам</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-lead)' }}>
              Платформа зменшує обсяг ручної роботи на етапі попереднього прорахунку, покращує комунікацію з клієнтами та допомагає стандартизувати подачу рішень щодо сонячних панелей, акумуляторів, інверторів і резервного живлення.
            </p>
            <BenefitList items={benefits} />
          </div>
        </div>
      </Section>

      <Section>
        <Card variant="brand">
          <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
            {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={22} color="var(--brand-accent)" fill />)}
          </div>
          <p style={{ fontSize: 'var(--fs-h4)', maxWidth: '52ch', lineHeight: 'var(--lh-heading)', marginBottom: 24 }}>
            «Клієнтам легше прийняти рішення, коли вони бачать точні розрахунки. Autonomy Planner скоротив час консультацій на 40%.»
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Марія Сидоренко" size={48} />
            <span><b style={{ display: 'block' }}>Марія Сидоренко</b><span style={{ color: 'var(--color-teal-200)', fontSize: 'var(--fs-small)' }}>Директор компанії-інсталятора</span></span>
          </div>
        </Card>
      </Section>

      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}

Object.assign(window, { FeaturesPage, HowItWorksPage, HomeownersPage, InstallersPage });

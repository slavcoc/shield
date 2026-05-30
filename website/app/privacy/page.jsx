import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Privacy Policy' : 'Политика за приватност',
    description: isEn
      ? 'How Shield handles data retention, access control, and privacy safeguards for finance workflows.'
      : 'Како Shield управува со задржување на податоци, пристап и приватност за финансиски процеси.',
    alternates: {
      canonical: '/privacy',
    },
  };
}

export default function PrivacyPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Privacy',
        title: 'Privacy policy for finance-sensitive email workflows',
        lede:
          'Shield is designed to reduce payment fraud risk while keeping data exposure minimal. This page summarizes the operating principles used in the current product scope.',
        cta: 'Request a demo',
        block1: 'Data minimization',
        block1a: 'Only data required for alerts, configuration, and audit context is retained.',
        block1b: 'Sensitive bank account values are masked in user-facing views.',
        block1c: 'Retention periods are reviewed with each tenant during onboarding.',
        block2: 'Access and control',
        block2a: 'Role-based access controls are used to limit who can view and change fraud settings.',
        block2b: 'Administrative and review actions are written to an audit trail.',
        block2c: 'Customer-requested deletion and policy changes are handled through support workflows.',
      }
    : {
        eyebrow: 'Приватност',
        title: 'Политика за приватност за финансиски чувствителни е-пошта процеси',
        lede:
          'Shield е дизајниран да го намали ризикот од измами со плаќања со минимална изложеност на податоци. Оваа страница ги сумира оперативните принципи во тековниот опфат на продуктот.',
        cta: 'Побарај демо',
        block1: 'Минимално задржување податоци',
        block1a: 'Се задржуваат само податоци потребни за аларми, конфигурација и ревизиска трага.',
        block1b: 'Чувствителните банкарски податоци се маскирани во корисничките прикази.',
        block1c: 'Периодите на задржување се усогласуваат со секој клиент при воведување.',
        block2: 'Пристап и контрола',
        block2a: 'Се користи пристап според улоги за ограничување на преглед и промени на правила.',
        block2b: 'Административните и проверувачките активности се запишуваат во ревизиска трага.',
        block2c: 'Барања за бришење и промени на политики се обработуваат преку процес за поддршка.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/privacy"
      eyebrow={copy.eyebrow}
      title={copy.title}
      lede={copy.lede}
      ctaLabel={copy.cta}
    >
      <div className="seo-grid">
        <article className="feature-card">
          <h3>{copy.block1}</h3>
          <p>{copy.block1a}</p>
          <p>{copy.block1b}</p>
          <p>{copy.block1c}</p>
        </article>

        <article className="feature-card">
          <h3>{copy.block2}</h3>
          <p>{copy.block2a}</p>
          <p>{copy.block2b}</p>
          <p>{copy.block2c}</p>
        </article>
      </div>
    </SeoArticleLayout>
  );
}

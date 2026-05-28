import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Security Overview' : 'Безбедносен преглед',
    description: isEn
      ? 'Security architecture overview for emailShield invoice and payment fraud detection workflows.'
      : 'Преглед на безбедносната архитектура за процес на детекција на измами со фактури и плаќања.',
    alternates: {
      canonical: '/security',
    },
  };
}

export default function SecurityPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Security',
        title: 'Security overview for invoice and payment fraud prevention',
        lede:
          'emailShield combines automated detection, tenant controls, and auditable decision workflows to reduce payment fraud risk before approvals are finalized.',
        cta: 'Talk to sales',
        block1: 'Detection and response model',
        block1a: 'Invoice and payment-related email signals are analyzed automatically for fraud indicators.',
        block1b: 'Default policy is flag-and-allow, with quarantine available for stricter tenants.',
        block1c: 'Alerts provide explainable reason signals to support finance decisions.',
        block2: 'Platform safeguards',
        block2a: 'Encryption is applied in transit and at rest for supported environments.',
        block2b: 'Role-based access and audit logging are used for accountability.',
        block2c: 'Tenant policy settings are configurable to match operational risk tolerance.',
      }
    : {
        eyebrow: 'Безбедност',
        title: 'Безбедносен преглед за спречување измами со фактури и плаќања',
        lede:
          'emailShield комбинира автоматска детекција, контроли по клиент и ревизиска трага за одлуки за да го намали ризикот пред одобрување плаќања.',
        cta: 'Контактирај продажба',
        block1: 'Модел за детекција и реакција',
        block1a: 'Сигналите од е-пошта поврзани со фактури и плаќања се анализираат автоматски за индикатори на измама.',
        block1b: 'Стандардна политика е flag-and-allow, со карантин за построги клиенти.',
        block1c: 'Предупредувањата прикажуваат објасниви сигнали за побезбедна финансиска одлука.',
        block2: 'Платформски безбедносни контроли',
        block2a: 'Се применува енкрипција при пренос и складирање во поддржаните околини.',
        block2b: 'Се користи пристап според улоги и ревизиска трага за одговорност.',
        block2c: 'Политиките по клиент се конфигурираат според ниво на оперативен ризик.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/security"
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

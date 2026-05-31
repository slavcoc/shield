import SeoArticleLayout from '../components/SeoArticleLayout';

const PARTNER_ICONS = [
  () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
];

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Partners | Shield' : 'Партнери | Shield',
    description: isEn
      ? 'Offer Shield to your clients and build recurring revenue with practical fraud protection for business email workflows.'
      : 'Понудете Shield на клиентите и развивајте повторлив приход со практична заштита од измама во деловна е-пошта.',
    alternates: {
      canonical: '/partners',
    },
  };
}

export default function PartnersPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Partners',
        title: 'Reduce fraud risk for clients and add recurring revenue.',
        lede: 'Offer Shield as a trusted add-on service and help companies stop costly payment-fraud attempts before approval.',
        cta: 'Become a partner',
        visualTopLeft: 'Partner network',
        visualTopRight: 'New revenue stream',
        visualBottomLeft: 'Protected clients',
        visualBottomRight: 'Managed from one place',
        items: [
          { title: 'Recurring commission', text: 'Partner-friendly revenue share' },
          { title: 'Internal use', text: 'Free use for partner teams' },
          { title: 'Tenant management', text: 'Partners can support client tenants' },
        ],
      }
    : {
        eyebrow: 'Партнери',
        title: 'Намалете ризик од измама за клиентите и додадете повторлив приход.',
        lede: 'Понудете го Shield како доверлива дополнителна услуга и помогнете им на компаниите да спречат скапи измами пред одобрување на уплата.',
        cta: 'Станете партнер',
        visualTopLeft: 'Партнерска мрежа',
        visualTopRight: 'Нов извор на приходи',
        visualBottomLeft: 'Заштитени клиенти',
        visualBottomRight: 'Управувани од едно место',
        items: [
          { title: 'Повторлива провизија', text: 'Партнерски модел со јасна поделба на приходи' },
          { title: 'Интерна употреба', text: 'Бесплатна употреба за вашиот партнерски тим' },
          { title: 'Управување со клиенти', text: 'Лесно работење со повеќе клиентски компании од едно место' },
        ],
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/partners"
      eyebrow={copy.eyebrow}
      title={copy.title}
      lede={copy.lede}
      ctaLabel={copy.cta}
    >
      <div className="partners-layout">
        <div className="partners-copy">
          <div className="partner-action">
            <a className="button button-primary" href={isEn ? '/en#contact' : '/#contact'}>
              {copy.cta}
            </a>
          </div>
        </div>

        <div className="partner-visual" aria-hidden="true">
          <div className="partner-visual-frame">
            <div className="partner-visual-glow" />
            <div className="partner-visual-screen">
              <div className="partner-visual-header">
                <span>{copy.visualTopLeft}</span>
                <strong>{copy.visualTopRight}</strong>
              </div>

              <div className="partner-visual-flow">
                {copy.items.map((item, i) => {
                  const Icon = PARTNER_ICONS[i];
                  return (
                  <div className="partner-visual-node" key={item.title}>
                    <div className="partner-visual-icon"><Icon /></div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )})}
              </div>

              <div className="partner-visual-footer">
                <span>{copy.visualBottomLeft}</span>
                <strong>{copy.visualBottomRight}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SeoArticleLayout>
  );
}

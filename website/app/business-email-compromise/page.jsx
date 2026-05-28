import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn
      ? 'Business Email Compromise (BEC) Prevention'
      : 'Заштита од деловна е-пошта измама (BEC)',
    description: isEn
      ? 'Learn how BEC attacks use deception, impersonation, and social engineering, and how SMB teams can stop them early.'
      : 'Дознајте како BEC нападите користат измама, имперсонација и социјален инженеринг, и како МСП тимовите да ги стопираат навреме.',
    alternates: {
      canonical: '/business-email-compromise',
    },
  };
}

export default function BusinessEmailCompromisePage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Business Email Compromise (BEC)',
        title: 'How to stop BEC attacks driven by deception and impersonation',
        lede: 'BEC attacks are not just technical. They rely on trust abuse, urgency, and social pressure to trick teams into sharing sensitive data or moving funds. The safest response is a strong verification process supported by early detection.',
        cta: 'Request a demo',
        card1Title: 'Common BEC attack patterns',
        card1A: 'Executive impersonation asking for urgent confidential action.',
        card1B: 'Vendor impersonation requesting bank-account or payment changes.',
        card1C: 'Thread hijacking where attackers continue a real conversation with altered intent.',
        card2Title: 'Controls that reduce BEC risk',
        card2A: 'Require out-of-band confirmation for payment or data requests.',
        card2B: 'Use role-based approvals for high-risk actions and exceptions.',
        card2C: 'Alert on impersonation signals, urgency language, and unusual request patterns.',
      }
    : {
        eyebrow: 'Business Email Compromise (BEC)',
        title: 'Како да спречите BEC напади базирани на измама и имперсонација',
        lede: 'BEC нападите не се само технички. Тие користат злоупотреба на доверба, итност и психолошки притисок за тимовите да споделат чувствителни податоци или да префрлат средства. Најбезбедниот пристап е силен процес на верификација поддржан со рана детекција.',
        cta: 'Побарај демо',
        card1Title: 'Најчести BEC модели',
        card1A: 'Лажно претставување како директор со итно барање за доверлива акција.',
        card1B: 'Лажно претставување како добавувач со барање за промена на сметка или плаќање.',
        card1C: 'Преземање на разговор каде напаѓач продолжува реална комуникација со изменета цел.',
        card2Title: 'Контроли што го намалуваат BEC ризикот',
        card2A: 'Побарувајте независна потврда за барања за плаќање или податоци.',
        card2B: 'Користете одобрување според улоги за високоризични акции и исклучоци.',
        card2C: 'Алармирајте на имперсонација, јазик на итност и невообичаени барања.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/business-email-compromise"
      eyebrow={copy.eyebrow}
      title={copy.title}
      lede={copy.lede}
      ctaLabel={copy.cta}
    >
      <div className="seo-grid">
        <article className="feature-card">
          <h3>{copy.card1Title}</h3>
          <p>{copy.card1A}</p>
          <p>{copy.card1B}</p>
          <p>{copy.card1C}</p>
        </article>

        <article className="feature-card">
          <h3>{copy.card2Title}</h3>
          <p>{copy.card2A}</p>
          <p>{copy.card2B}</p>
          <p>{copy.card2C}</p>
        </article>
      </div>
    </SeoArticleLayout>
  );
}

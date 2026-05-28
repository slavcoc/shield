import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Payment Change Fraud Protection' : 'Заштита од измама со промена на сметка',
    description: isEn
      ? 'Protect your company from payment instruction fraud when supplier bank account details are changed by attackers.'
      : 'Заштитете ја компанијата од измама со промена на сметка кога напаѓачи ги менуваат платежните инструкции.',
    alternates: {
      canonical: '/payment-change-fraud',
    },
  };
}

export default function PaymentChangeFraudPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Payment Change Fraud',
        title: 'Protect your team from fake bank account change requests',
        lede: 'Payment change fraud happens when attackers replace bank account instructions in real-looking supplier conversations. The process fails when teams trust the email thread instead of independent confirmation.',
        cta: 'Book a demo',
        card1Title: 'Safe process for account changes',
        card1A: 'Never accept account changes from email alone.',
        card1B: 'Call a known supplier contact and verify the request.',
        card1C: 'Record who approved the change and why.',
        card2Title: 'What good controls look like',
        card2A: 'Approved account list per supplier and tenant.',
        card2B: 'Automatic warning when detected details do not match approved values.',
        card2C: 'Audit trail for overrides and payment decisions.',
      }
    : {
        eyebrow: 'Измама со промена на сметка',
        title: 'Заштитете го тимот од лажни барања за промена на банкарска сметка',
        lede: 'Измамата со промена на сметка се случува кога напаѓач менува платежни инструкции во разговор што изгледа легитимно. Проблемот настанува кога тимот верува само на е-пошта без независна потврда.',
        cta: 'Закажи демо',
        card1Title: 'Безбеден процес за промена на сметка',
        card1A: 'Никогаш не прифаќајте промена на сметка само од е-пошта.',
        card1B: 'Јавете се на познат контакт кај добавувачот и потврдете го барањето.',
        card1C: 'Запишете кој ја одобрил промената и зошто.',
        card2Title: 'Како изгледа добра контрола',
        card2A: 'Список на одобрени сметки по добавувач и компанија.',
        card2B: 'Автоматско предупредување кога податоците не се совпаѓаат со одобрените.',
        card2C: 'Ревизиска трага за рачни одобрувања и одлуки за плаќање.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/payment-change-fraud"
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

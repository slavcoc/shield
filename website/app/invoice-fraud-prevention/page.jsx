import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Invoice Fraud Prevention for SMBs' : 'Спречување измами со фактури за МСП',
    description: isEn
      ? 'Learn how small and medium businesses can prevent invoice fraud with practical payment checks and early warning signals.'
      : 'Научете како малите и средни компании да спречат измами со фактури преку практични проверки пред плаќање.',
    alternates: {
      canonical: '/invoice-fraud-prevention',
    },
  };
}

export default function InvoiceFraudPreventionPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Invoice Fraud Prevention',
        title: 'How to stop invoice fraud before money leaves your business',
        lede: 'Invoice fraud usually starts with a normal-looking email. A supplier invoice arrives with changed bank details, an urgent tone, or a small sender typo. If nobody checks it in time, the payment goes to the wrong account.',
        cta: 'Request a demo',
        card1Title: 'What to check before every payment',
        card1A: 'Confirm bank account changes with a known phone number, not by replying to email.',
        card1B: 'Compare invoice details with previous approved invoices from the same supplier.',
        card1C: 'Pause urgent payment requests that pressure your team to skip process.',
        card2Title: 'Common warning signs',
        card2A: 'Sender domain looks familiar but has one extra or missing character.',
        card2B: "Invoice references are unusual compared to the supplier's normal format.",
        card2C: 'Payment instructions changed without prior confirmation.',
      }
    : {
        eyebrow: 'Спречување измами со фактури',
        title: 'Како да спречите измама со фактура пред да заминат парите',
        lede: 'Измамата со фактури најчесто почнува со порака што изгледа нормално. Добавувачот испраќа фактура со сменета сметка, итен тон или мала промена во адресата. Ако не се провери навреме, уплатата оди на погрешна сметка.',
        cta: 'Побарај демо',
        card1Title: 'Што да проверите пред секоја уплата',
        card1A: 'Промената на сметка потврдете ја на познат телефон, не преку одговор на е-пошта.',
        card1B: 'Споредете ги податоците од фактурата со претходно одобрени фактури од истиот добавувач.',
        card1C: 'Стопирајте итни барања за плаќање што бараат да се прескокне стандардната проверка.',
        card2Title: 'Најчести предупредувачки знаци',
        card2A: 'Доменот на испраќачот личи на вистинскиот, но има мала разлика.',
        card2B: 'Референцата или форматот на фактурата е различен од вообичаениот.',
        card2C: 'Платежните инструкции се сменети без претходна најава и потврда.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/invoice-fraud-prevention"
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

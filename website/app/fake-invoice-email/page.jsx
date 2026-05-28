import SeoArticleLayout from '../components/SeoArticleLayout';

export function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Fake Invoice Email Warning Signs' : 'Знаци за лажна фактура по е-пошта',
    description: isEn
      ? 'See the most common fake invoice email patterns and how finance teams can verify suspicious requests safely.'
      : 'Погледнете ги најчестите знаци за лажни фактури по е-пошта и како финансиските тимови безбедно да ги проверат.',
    alternates: {
      canonical: '/fake-invoice-email',
    },
  };
}

export default function FakeInvoiceEmailPage({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  const copy = isEn
    ? {
        eyebrow: 'Fake Invoice Email',
        title: 'How to recognize fake invoice emails quickly',
        lede: 'Most fake invoice emails look urgent and normal at the same time. The design feels familiar, but small details are off. A fast checklist can help your team avoid expensive mistakes.',
        cta: 'Talk to our team',
        card1Title: 'Fast verification checklist',
        card1A: 'Check sender domain carefully, including every character after @.',
        card1B: 'Review invoice amount against previous invoices for that supplier.',
        card1C: 'Verify account changes with direct supplier confirmation.',
        card2Title: 'Why teams miss these scams',
        card2A: 'Attackers time messages around month-end or payment deadlines.',
        card2B: 'They use familiar names and copied signatures from old threads.',
        card2C: 'Busy finance teams are asked to act fast without normal checks.',
      }
    : {
        eyebrow: 'Лажна фактура по е-пошта',
        title: 'Како брзо да препознаете лажни фактури по е-пошта',
        lede: 'Повеќето лажни фактури изгледаат и итно и нормално во исто време. Пораката е позната, но малите детали не се во ред. Кратка проверка може да му заштеди пари на вашиот тим.',
        cta: 'Разговарајте со тимот',
        card1Title: 'Брза листа за проверка',
        card1A: 'Проверете го доменот на испраќачот буква по буква по @.',
        card1B: 'Споредете го износот со претходни фактури од истиот добавувач.',
        card1C: 'Промена на сметка потврдете ја директно со добавувачот.',
        card2Title: 'Зошто тимовите ги пропуштаат овие измами',
        card2A: 'Напаѓачите праќаат пораки пред крај на месец или пред рокови за плаќање.',
        card2B: 'Користат познати имиња и потписи копирани од постари разговори.',
        card2C: 'Финансиските тимови се притиснати да реагираат брзо без стандардна проверка.',
      };

  return (
    <SeoArticleLayout
      language={isEn ? 'en' : 'mk'}
      path="/fake-invoice-email"
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

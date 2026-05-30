export default function SeoArticleLayout({
  language = 'mk',
  path = '/',
  eyebrow,
  title,
  lede,
  ctaLabel,
  children,
}) {
  const isEn = language === 'en';
  const homeHref = isEn ? '/en' : '/';
  const partnersHref = isEn ? '/en/partners' : '/partners';
  const pageEnHref = path === '/' ? '/en' : `/en${path}`;
  const pageMkHref = path;

  const copy = isEn
    ? {
        homeAria: 'emailShield home',
        primaryNavAria: 'Primary navigation',
        languageSwitcherAria: 'Language switcher',
        navProduct: 'Product',
        navWorkflow: 'How it works',
        navPartners: 'Partners',
        navFaq: 'FAQ',
        requestDemo: 'Request demo',
        backHome: 'Back to homepage',
        footerLine1: 'emailShield. BEC protection for SMBs.',
        footerLine2: 'Built from the current MVP positioning and product docs.',
      }
    : {
        homeAria: 'Почетна страница на emailShield',
        primaryNavAria: 'Главна навигација',
        languageSwitcherAria: 'Избор на јазик',
        navProduct: 'Продукт',
        navWorkflow: 'Како работи',
        navPartners: 'Партнери',
        navFaq: 'ЧПП',
        requestDemo: 'Побарај демо',
        backHome: 'Назад на почетна',
        footerLine1: 'emailShield. ДЕИ заштита за мали и средни бизниси.',
        footerLine2: 'Изградено врз основа на тековното MVP позиционирање и продукт документација.',
      };

  const primaryCta = ctaLabel || copy.requestDemo;

  return (
    <>
      <div className="backdrop backdrop-one" />
      <div className="backdrop backdrop-two" />

      <header className="shell topbar">
        <a className="brand" href={homeHref} aria-label={copy.homeAria}>
          <span className="brand-mark">e</span>
          <span className="brand-text">emailShield</span>
        </a>

        <nav className="nav" aria-label={copy.primaryNavAria}>
          <a href={`${homeHref}#product`}>{copy.navProduct}</a>
          <a href={`${homeHref}#workflow`}>{copy.navWorkflow}</a>
          <a href={partnersHref}>{copy.navPartners}</a>
          <a href={`${homeHref}#faq`}>{copy.navFaq}</a>
        </nav>

        <div className="topbar-actions">
          <div className="lang-switch" aria-label={copy.languageSwitcherAria}>
            <a className={!isEn ? 'active' : ''} href={pageMkHref}>
              MK
            </a>
            <a className={isEn ? 'active' : ''} href={pageEnHref}>
              EN
            </a>
          </div>
          <a className="button button-ghost" href={`${homeHref}#contact`}>
            {copy.requestDemo}
          </a>
        </div>
      </header>

      <main className="shell section seo-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>

        {children}

        <div className="cta-row">
          <a className="button button-primary" href={`${homeHref}#contact`}>
            {primaryCta}
          </a>
          <a className="button button-secondary" href={homeHref}>
            {copy.backHome}
          </a>
        </div>
      </main>

      <footer className="shell footer">
        <p>{copy.footerLine1}</p>
        <p>{copy.footerLine2}</p>
      </footer>
    </>
  );
}

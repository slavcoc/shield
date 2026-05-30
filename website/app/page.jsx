'use client';

import { useEffect, useState } from 'react';

const CONTENT = {
  mk: {
    nav: {
      product: 'Продукт',
      workflow: 'Како работи',
      onboarding: 'Вклучување',
      guides: 'Водичи',
      requestDemo: 'Закажете бесплатна консултација',
      primaryNavAria: 'Главна навигација',
      languageSwitcherAria: 'Избор на јазик',
      homeAria: 'Почетна страница на emailShield',
    },
    hero: {
      eyebrow: 'Заштита од деловни емаил измами (ДЕИ)',
      title: 'Заштитете го вашиот бизнис со интелигентна заштита од измами.',
      lede:
        'emailShield открива ДЕИ (деловни емаил измами) напади во деловна е-пошта. Системот препознава лажно претставување, измамнички барања за плаќање и пораки што бараат итна реакција без проверка.',
      ctaPrimary: 'Закажете бесплатна консултација',
      metrics: {
        focusLabel: 'Главен фокус',
        focusValue: 'ДЕИ, лажно претставување и социјален инженеринг',
        modeLabel: 'Оперативен модел',
        modeValue: 'Означи, провери, потврди',
        audienceLabel: 'За кого е',
        audienceValue: 'За бизниси што обработуваат плаќања и чувствителни е-пораки',
      },
      claimsAria: 'Клучни придобивки од продуктот',
      previewAria: 'Преглед на аларм',
    },
    preview: {
      title: 'Преглед на сомнителна ДЕИ емаил порака',
      risk: 'Висок ризик',
      detectedInMail: 'Откриено во емаил',
      approvedAccount: 'Одобрена сметка',
      detectedAccount: 'Откриена сметка',
      signals: [
        'Сомнителна промена на инструкции за плаќање',
        'Притисок за итна реакција без проверка',
      ],
      action: 'Статус',
      actionValue: 'Означено за задолжителна проверка',
      viewWorkflow: 'Погледни процес',
    },
    trust: {
      aria: 'Резиме на позиционирање',
      whyTitle: 'Зошто може да му верувате',
      whyText:
        'emailShield е направен за чувствителни деловни процеси. ВИ (AI) помага брзо да се открие ризик, а пристапот до податоци е ограничен и контролиран.',
      buyerTitle: 'Што е најважно за клиентите',
      buyerText:
        'Клиентите не бараат само аларми. Тие бараат јасни правила за податоци, ревизиска трага и лесна проверка на секоја одлука.',
    },
    efficiency: {
      eyebrow: 'Ефикасност во пракса',
      title: 'Премиум заштита што веднаш се чувствува во секој тим',
      items: [
        {
          value: '24/7 Без прекин',
          label: 'автоматски надзор на ДЕИ ризик',
        },
        {
          value: '3 Слоја Заштита',
          label: 'ВИ + правила + политики по клиент',
        },
        {
          value: '100% Ревизиска Трага',
          label: 'секоја аларм-состојба и одлука се запишува',
        },
        {
          value: 'Аларм за секунди',
          label: 'известување за високоризични пораки во реално време',
        },
      ],
    },
    socialProof: {
      eyebrow: 'Практична доверба',
      title: 'Подготвено за реални тимови и реални процеси',
      logosLabel: 'Фокус на пилот и реални тимови',
      logos: ['Оперативен тим', 'Финансиски тим', 'Безбедносен тим'],
      stat: '24/7',
      statLabel: 'мониторинг на високоризични пораки',
      quote:
        'Тимовите добиваат јасен сигнал што треба да се провери, без да се изгуби време во рачно прегледување.',
    },
    proof: {
      eyebrow: 'Зошто да ни верувате',
      title: 'Јасни докази, без сложени пораки.',
      items: [
        {
          title: 'Брз старт',
          text: 'Јасен план за пилот и активирање.',
        },
        {
          title: 'Безбедност',
          text: 'Преглед на архитектура, задржување и пристап.',
        },
        {
          title: 'Ревизија',
          text: 'Секоја одлука се бележи во ревизиска трага.',
        },
      ],
    },
    product: {
      eyebrow: 'Продукт',
      title: 'Заштитете ги плаќањата од измама.',
      cards: [
        {
          title: 'AI детекција на измама и имперсонација',
          text: 'ВИ (AI) и безбедносни правила откриваат лажно претставување, сомнителни барања и опасна итност.',
        },
        {
          title: 'Јасен процес за проверка',
          text: 'Ризичните пораки се прикажуваат со јасна причина за тимот брзо да провери дали барањето е легитимно.',
        },
        {
          title: 'Инстант SMS и емаил аларми',
          text: 'Штом пристигне сомнителна порака, одговорните лица веднаш добиваат SMS и емаил известување со јасен ризик-сигнал и следен чекор за проверка.',
        },
        {
          title: 'Отворен код и транспарентност',
          text: 'Градено врз open-source основа за поголема доверба и јасен увид во безбедносниот пристап.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Како работи',
      title: 'Од барање за демо до автоматска заштита во реално време.',
      demoTitle: 'Што следува',
      demoSteps: [
        {
          title: 'Контакт во рок од 1 работен ден',
          text: 'Тимот ви се јавува брзо за да го потврди барањето.',
        },
        {
          title: 'Решение по мерка за вашиот конкретен проблем',
          text: 'Креираме пристап според вашиот процес, ризици и внатрешни правила.',
        },
        {
          title: 'Испорака и активирање во вашата мрежа',
          text: 'Го конфигурираме и испорачуваме решението директно во вашата мрежа со јасни следни чекори.',
        },
      ],
      setupTitle: '2) Брзо поставување',
      setupSteps: [
        {
          title: 'Креирајте профил',
          text: 'Се регистрирате и веднаш почнувате.',
        },
        {
          title: 'Поврзете го емаилот',
          text: 'Го поврзувате емаилот, а системот ве води чекор по чекор.',
        },
        {
          title: 'Додајте ги точните сметки за плаќање',
          text: 'Внесувате доверливи платежни податоци за системот да прави споредба.',
        },
      ],
      protectionTitle: 'Како го запираме ризикот пред да стане загуба',
      protectionSteps: [
        {
          title: 'Системот ги анализира дојдовните пораки',
          text: 'Пораките се проверуваат автоматски за ДЕИ сигнали: измама, имперсонација и социјален инженеринг.',
        },
        {
          title: 'ВИ + правила за проверка на ризик',
          text: 'Се откриваат лажни испраќачи, сомнителни промени и барања за чувствителни податоци или плаќање.',
        },
        {
          title: 'Означување и карантин на сомнителниот емаил',
          text: 'Сомнителните пораки се означуваат или се ставаат во карантин според вашите поставки.',
        },
        {
          title: 'Известувања преку емаил и SMS',
          text: 'Одговорните лица добиваат известувања за да реагираат навреме.',
        },
      ],
    },
    security: {
      eyebrow: 'Доверба и безбедност',
      title: 'Безбедноста, приватноста и контролата се вградени во секој чекор.',
      cards: [
        {
          title: 'Автоматска анализа, без рачно читање',
          text: 'Содржината на пораките не е достапна за нашиот тим. Анализата е целосно автоматизирана и поддржана од водечки AI модели.',
        },
        {
          title: 'Поширока заштита од емаил закани',
          text: 'Штити од phishing линкови, малициозни прилози, кражба на креденцијали, преземени разговори и лажни барања за промена на сметка.',
        },
      ],
    },
    partners: {
      eyebrow: 'Партнери',
      title: 'Намалете ризик од измама без да го забавите тимот.',
      text:
        'Понудете го како доверлива дополнителна услуга и помогнете им на клиентите да избегнат скапи ДЕИ измами.',
      items: [
        { title: 'Повторлива провизија', text: 'Партнерски модел со јасна поделба на приходи' },
        { title: 'Интерна употреба', text: 'Бесплатна употреба за вашиот партнерски тим' },
        { title: 'Управување со клиенти', text: 'Лесно работење со повеќе клиентски компании од едно место' },
      ],
    },
    pricing: {
      aria: 'Цени',
      eyebrow: 'Цени',
      title: 'Пакети за месечна претплата',
      lede: 'Изберете пакет според бројот на емаил сандачиња, автоматизацијата и нивото на поддршка што ви треба.',
      popularLabel: 'Најпопуларен',
      packages: [
        {
          name: 'Start',
          price: '3.990 ден',
          period: 'месечно',
          badge: 'За помали тимови',
          delivery: 'Веб админ',
          supportNote: 'Основна поддршка за стартно поставување и вклучување.',
          cta: 'Почни со Start',
          features: [
            'До 2 емаил сандачиња',
            'ДЕИ детекција и означување',
            'SMS и емаил аларми',
            'Основен ревизиски запис',
          ],
        },
        {
          name: 'Growth',
          price: '7.990 ден',
          period: 'месечно',
          badge: 'Најпопуларен',
          delivery: 'Веб админ + desktop app',
          supportNote: 'Поддршка за Growth и Standard, со приоритетни аларми.',
          cta: 'Изберете Growth',
          features: [
            'До 15 емаил сандачиња',
            'Сè од Start пакетот',
            'Десктоп апликација за брзи прегледи',
            'Карантин и приоритетни аларми',
          ],
        },
        {
          name: 'Scale',
          price: '14.990 ден',
          period: 'месечно',
          badge: 'За повеќе тимови',
          delivery: 'Веб админ + desktop app',
          supportNote: 'Приоритетна поддршка, onboarding и повисока оперативна контрола.',
          cta: 'Разгледајте Scale',
          features: [
            '21+ емаил сандачиња',
            'Сè од Growth пакетот',
            'Централизирани политики и улоги',
            'Приоритетна поддршка и onboarding',
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'ЧПП',
      title: 'Кратки одговори на најчестите прашања.',
      items: [
        {
          q: 'Дали ова е целосна заштита за емаил?',
          a: 'Иако нашиот главен фокус е ДЕИ (деловни емаил измами со лажно претставување и социјален инженеринг), апликацијата штити и од phishing линкови, малициозни прилози, обиди за кражба на креденцијали, преземање на постоечки емаил разговори, лажно претставување на домени/испраќачи и сомнителни барања за промена на сметка.',
        },
        {
          q: 'Дали поставувањето е комплицирано?',
          a: 'Не. Во повеќето случаи се поврзува со постојниот емаил со неколку чекори.',
        },
        {
          q: 'Дали може да се користи на македонски и англиски?',
          a: 'Да. И веб-страницата и продуктот поддржуваат двојазична употреба.',
        },
        {
          q: 'Што се случува кога има сомнителна порака?',
          a: 'Добивате предупредување и вие одлучувате дали да одобрите, одбиете или дополнително да проверите.',
        },
        {
          q: 'Како ги штитите нашите податоци?',
          a: 'Податоците се шифрирани, се применува минимално задржување и се води јасна трага на одлуки за ревизија.',
        },
      ],
    },
    seo: {
      eyebrow: 'Корисни водичи',
      title: 'Прочитајте практични совети за ДЕИ, имперсонација и измами со плаќања.',
      items: [
        {
          title: 'Што е ДЕИ и како да го намалите ризикот',
          text: 'Едноставни контроли против измама, лажно претставување и социјален инженеринг.',
          href: '/business-email-compromise',
          cta: 'Отвори ДЕИ водич',
        },
        {
          title: 'Како да спречите измама со фактури',
          text: 'Јасни чекори за вашиот тим пред секоја уплата.',
          href: '/invoice-fraud-prevention',
          cta: 'Отвори водич',
        },
        {
          title: 'Како да препознаете лажна фактура по емаил',
          text: 'Најважни знаци што треба да ги проверите пред плаќање.',
          href: '/fake-invoice-email',
          cta: 'Види знаци',
        },
        {
          title: 'Заштита од измама со промена на сметка',
          text: 'Безбеден процес кога добавувач бара нова сметка за плаќање.',
          href: '/payment-change-fraud',
          cta: 'Прочитај',
        },
      ],
    },
    results: {
      eyebrow: 'Доказ од реална пракса',
      title: 'Што најчесто гледаат тимовите во првите 30 дена',
      lede:
        'Во пилот средини со компании што обработуваат плаќања, системот најчесто открива ризици што претходно останувале незабележани.',
      items: [
        {
          value: '3-7 сигнали',
          label: 'за сомнителни барања поврзани со итност или имперсонација',
        },
        {
          value: '1-2 обиди',
          label: 'за промена на сметка фатени пред одобрување на уплата',
        },
        {
          value: '< 5 минути',
          label: 'просечно време до одлука за ризична порака',
        },
      ],
      note:
        'Ова се типични пилот-резултати и варираат според обем на емаил сообраќај, тип на добавувачи и постоечки контроли.',
    },
    contact: {
      eyebrow: 'Бесплатна консултација',
      title: 'Закажете бесплатна консултација',
      text:
        'Оставете ги вашите податоци и ќе ви се јавиме за да ги разгледаме вашите потреби.',
      name: 'Име',
      email: 'Деловен емаил',
      company: 'Компанија',
      role: 'Улога',
      message: 'Со што можеме да помогнеме?',
      placeholder: 'Накратко опишете го вашиот тим и што сакате прво да заштитите.',
      submitIdle: 'Закажете бесплатна консултација',
      submitLoading: 'Се испраќа...',
      idleStatus: 'Ќе ви се јавиме со следните чекори.',
      sendingStatus: 'Вашето барање се испраќа...',
      successStatus: 'Ви благодариме. Барањето е примено. Ќе ви се јавиме наскоро.',
      fallbackStatus:
        'Барањето е примено. Ќе ве контактираме во најкраток рок.',
      errorStatus: 'Се појави грешка. Обидете се повторно.',
      responseNote: '',
      roles: ['Сопственик / директор', 'Оперативен менаџер', 'ИТ администратор', 'Финансиски менаџер'],
      trustLinks: {
        privacy: 'Политика за приватност',
        security: 'Безбедносен преглед',
      },
    },
    footer: {
      line1: 'emailShield. ДЕИ заштита за мали и средни бизниси.',
      line2: 'Намалете ризик од измама со јасни предупредувања и контроли пред критични деловни одлуки.',
    },
  },
  en: {
    nav: {
      product: 'Product',
      workflow: 'How it works',
      onboarding: 'Onboarding',
      guides: 'Guides',
      requestDemo: 'Schedule a Free Consultation',
      primaryNavAria: 'Primary navigation',
      languageSwitcherAria: 'Language switcher',
      homeAria: 'emailShield home',
    },
    hero: {
      eyebrow: 'BEC and social engineering protection for SMBs',
      title: 'Protect Your Business with Intelligent Fraud Prevention',
      lede:
        'emailShield detects business email compromise (BEC) patterns in real time. It flags impersonation, deceptive requests, and urgency pressure before teams share sensitive data or move funds.',
      ctaPrimary: 'Schedule a Free Consultation',
      metrics: {
        focusLabel: 'Primary focus',
        focusValue: 'BEC, impersonation, and social engineering',
        modeLabel: 'How teams use it',
        modeValue: 'Flag first, verify, then act',
        audienceLabel: 'Audience',
        audienceValue: 'Businesses handling payments and sensitive email workflows',
      },
      claimsAria: 'Key product claims',
      previewAria: 'Product preview',
    },
    preview: {
      title: 'Suspicious BEC message review',
      risk: 'High risk',
      detectedInMail: 'Detected in incoming email',
      approvedAccount: 'Approved account',
      detectedAccount: 'Detected account',
      signals: ['Payment instruction change', 'Urgency and pressure language'],
      action: 'Action',
      actionValue: 'Flagged for review',
      viewWorkflow: 'View workflow',
    },
    trust: {
      aria: 'Positioning summary',
      whyTitle: 'Why you can trust it',
      whyText:
        'emailShield is built for sensitive business workflows. AI helps detect risk quickly, while data access stays controlled and auditable.',
      buyerTitle: 'What customers care about most',
      buyerText:
        'Teams need more than alerts. They need clear privacy safeguards, simple controls, and a visible audit trail.',
    },
    efficiency: {
      eyebrow: 'Efficiency in Practice',
      title: 'Best-in-class protection teams feel immediately',
      items: [
        {
          value: '24/7 Always-on',
          label: 'continuous monitoring of BEC risk',
        },
        {
          value: '3 Protection Layers',
          label: 'AI + rules + tenant policy controls',
        },
        {
          value: '100% Audit Trail',
          label: 'every alert and decision is logged',
        },
        {
          value: 'Alerts in seconds',
          label: 'real-time alerting for high-risk messages',
        },
      ],
    },
    socialProof: {
      eyebrow: 'Practical trust',
      title: 'Built for real teams and real workflows',
      logosLabel: 'Focused on pilots and real teams',
      logos: ['Operations Team', 'Finance Team', 'Security Team'],
      stat: '24/7',
      statLabel: 'monitoring of high-risk messages',
      quote:
        'Teams get a clear signal on what to verify next, without losing time on manual triage.',
    },
    proof: {
      eyebrow: 'Why trust us',
      title: 'Clear proof without heavy jargon.',
      items: [
        {
          title: 'Fast start',
          text: 'Clear pilot and activation plan.',
        },
        {
          title: 'Security',
          text: 'Architecture, retention, and access controls.',
        },
        {
          title: 'Auditability',
          text: 'Every decision is written to an audit trail.',
        },
      ],
    },
    product: {
      eyebrow: 'Product',
      title: 'Stop risky payments before they are approved.',
      cards: [
        {
          title: 'AI-powered deception detection',
          text: 'AI and fraud rules detect impersonation, spoofed senders, and risky request patterns.',
        },
        {
          title: 'Keep verification simple',
          text: 'Reviewers see why a message is risky and quickly confirm whether the request is legitimate.',
        },
        {
          title: 'Instant SMS and email alerts',
          text: 'The moment a suspicious message lands, your team gets real-time SMS and email notifications with clear risk context and the next verification step.',
        },
        {
          title: 'Open-source foundation',
          text: 'Built on an open-source foundation for transparency and stronger trust in security decisions.',
        },
      ],
    },
    workflow: {
      eyebrow: 'How it works',
      title: 'From demo request to automatic real-time protection.',
      demoTitle: 'What happens next',
      demoSteps: [
        {
          title: 'Reply within 1 business day',
          text: 'Our team follows up quickly to confirm your request.',
        },
        {
          title: 'Short workflow call',
          text: 'We review your current approval and verification process.',
        },
        {
          title: 'Clear pilot plan',
          text: 'You receive a proposed scope, timeline, and next actions.',
        },
      ],
      setupTitle: '2) Setup flow',
      setupSteps: [
        {
          title: 'Sign up on the website',
          text: 'Choose English or Macedonian and create a tenant during onboarding.',
        },
        {
          title: 'Connect mailbox via IMAP',
          text: 'Use DNS-based auto-detection to prefill the right email setup where possible.',
        },
        {
          title: 'Register approved bank accounts',
          text: 'Store approved payment references per tenant and keep sensitive data masked in the UI.',
        },
      ],
      protectionTitle: 'How we stop risk before it becomes a loss',
      protectionSteps: [
        {
          title: 'Email intake and analysis',
          text: 'Incoming high-risk business emails are processed automatically for BEC signals.',
        },
        {
          title: 'AI + fraud rules scoring',
          text: 'The system scores risk using AI and focused rules for impersonation and social engineering.',
        },
        {
          title: 'Flag or quarantine in your email provider',
          text: 'Messages are flagged or quarantined based on your policy and confidence level.',
        },
        {
          title: 'SMS and email alerts',
          text: 'Finance and admin users receive fast alerts so they can act in time.',
        },
      ],
    },
    security: {
      eyebrow: 'Trust and security',
      title: 'This is sensitive by nature. Trust, privacy, and control are built into every step.',
      cards: [
        {
          title: 'Automated analysis, no routine manual reading',
          text: 'Message content is not available to our team. Analysis is fully automated and supported by leading AI models.',
        },
        {
          title: 'Encryption in transit and at rest',
          text: 'Data is protected with encryption while transmitted and while stored.',
        },
      ],
    },
    partners: {
      eyebrow: 'Partners',
      title: 'Reduce fraud risk without slowing your team.',
      text:
        'Offer emailShield as a trusted add-on service and help clients avoid costly BEC scams.',
      items: [
        { title: 'Recurring commission', text: 'Partner-friendly revenue share' },
        { title: 'Internal use', text: 'Free use for partner teams' },
        { title: 'Tenant management', text: 'Partners can support client tenants' },
      ],
    },
    pricing: {
      aria: 'Pricing',
      eyebrow: 'Pricing',
      title: 'Clear monthly packages for every team size',
      lede: 'Choose the package that matches your mailbox count, workflow complexity, and support needs.',
      popularLabel: 'Most popular',
      packages: [
        {
          name: 'Start',
          price: 'MKD 3,990',
          period: 'per month',
          badge: 'Best for smaller teams',
          delivery: 'Web admin',
          supportNote: 'Basic support for setup and onboarding.',
          cta: 'Start with Start',
          features: [
            'Up to 2 mailboxes',
            'BEC detection and flagging',
            'SMS and email alerts',
            'Basic audit log',
          ],
        },
        {
          name: 'Growth',
          price: 'MKD 7,990',
          period: 'per month',
          badge: 'Most popular',
          delivery: 'Web admin + desktop app',
          supportNote: 'Support for Growth and Standard, with priority alerts.',
          cta: 'Choose Growth',
          features: [
            'Up to 15 mailboxes',
            'Everything in Start',
            'Desktop app for faster reviews',
            'Quarantine and priority alerts',
          ],
        },
        {
          name: 'Scale',
          price: 'MKD 14,990',
          period: 'per month',
          badge: 'For multi-team operations',
          delivery: 'Web admin + desktop app',
          supportNote: 'Priority support, onboarding, and stronger operational control.',
          cta: 'Review Scale',
          features: [
            '21+ mailboxes',
            'Everything in Growth',
            'Centralized policies and roles',
            'Priority support and onboarding',
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Straight answers to common buying questions.',
      items: [
        {
          q: 'Is this a full email security suite?',
          a: 'Although our primary focus is BEC (deception and impersonation attacks), the app also protects against phishing links, malicious attachments, credential theft attempts, takeover of existing email threads, sender/domain spoofing, and suspicious payment-account change requests.',
        },
        {
          q: 'Does it require MX record changes?',
          a: 'No. Most teams connect their existing mailbox in a few straightforward steps.',
        },
        {
          q: 'Can it work in English and Macedonian?',
          a: 'Yes. Both the website and product experience support English and Macedonian.',
        },
        {
          q: 'What is the default action?',
          a: 'Flag and allow, with quarantine available for stricter tenants.',
        },
        {
          q: 'How do you protect sensitive email data?',
          a: 'Data is encrypted in transit and at rest, retention is minimized, and actions are logged in an auditable trail.',
        },
      ],
    },
    seo: {
      eyebrow: 'Helpful Guides',
      title: 'Read practical guides for BEC, impersonation, and payment fraud scenarios.',
      items: [
        {
          title: 'What is business email compromise (BEC)?',
          text: 'Understand how deception and impersonation are used in real attacks.',
          href: '/business-email-compromise',
          cta: 'Open BEC guide',
        },
        {
          title: 'How to prevent invoice fraud',
          text: 'Simple checks your team can run before every payment.',
          href: '/invoice-fraud-prevention',
          cta: 'Open guide',
        },
        {
          title: 'How to spot fake invoice emails',
          text: 'The warning signs finance teams should verify first.',
          href: '/fake-invoice-email',
          cta: 'See warning signs',
        },
        {
          title: 'Protection from payment-change fraud',
          text: 'A safe process when suppliers ask for new bank details.',
          href: '/payment-change-fraud',
          cta: 'Read guide',
        },
      ],
    },
    results: {
      eyebrow: 'Real-world proof',
      title: 'What teams most often see in their first 30 days',
      lede:
        'In pilot environments with payment-active businesses, teams usually uncover risks that were previously missed.',
      items: [
        {
          value: '3-7 signals',
          label: 'for suspicious requests with urgency pressure or impersonation patterns',
        },
        {
          value: '1-2 attempts',
          label: 'at payment-account changes flagged before approval',
        },
        {
          value: '< 5 minutes',
          label: 'average time to decision on a risky message',
        },
      ],
      note:
        'These are typical pilot outcomes and vary by email volume, supplier profile, and existing controls.',
    },
    contact: {
      eyebrow: 'Free consultation',
      title: 'Schedule a Free Consultation',
      text:
        'Leave your details and we will call you to discuss your needs.',
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      role: 'Role',
      message: 'What do you need help with?',
      placeholder: 'Tell us about your team and what you want to protect first.',
      submitIdle: 'Schedule a Free Consultation',
      submitLoading: 'Sending...',
      idleStatus: 'We will call you with next steps.',
      sendingStatus: 'Sending your request...',
      successStatus: 'Thanks. Your request was received. We will call you soon.',
      fallbackStatus:
        'Thanks. We captured your request and will contact you shortly.',
      errorStatus: 'Something went wrong. Please try again.',
      responseNote: '',
      roles: ['Owner / executive', 'Operations manager', 'IT administrator', 'Finance manager'],
      trustLinks: {
        privacy: 'Privacy policy',
        security: 'Security overview',
      },
    },
    footer: {
      line1: 'emailShield. BEC protection for SMBs.',
      line2: 'Help your team stop email scams with clear alerts before action.',
    },
  },
};

const ICONS = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  eye: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  lock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  flag: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  bell: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  key: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5l3 3L22 7l-3-3" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  dollar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  chevronDown: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

const PRODUCT_ICONS = [ICONS.zap, ICONS.check, ICONS.lock, ICONS.code];
const SECURITY_ICONS = [ICONS.eye, ICONS.database, ICONS.key, ICONS.code];
const WORKFLOW_ICONS = [ICONS.mail, ICONS.zap, ICONS.flag, ICONS.bell];

export default function HomePage({ initialLanguage = 'mk' }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://emailshield.mk';
  const [language, setLanguage] = useState(initialLanguage);
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false);
  const copy = CONTENT[language];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: CONTENT.mk.contact.roles[0],
    website: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  function setLanguageAndUrl(nextLanguage) {
    setLanguage(nextLanguage);
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.pathname = nextLanguage === 'en' ? '/en' : '/';
    url.searchParams.delete('lang');

    window.history.replaceState({}, '', url.toString());
  }

  const checklistHref = language === 'en' ? '/en/business-email-compromise' : '/business-email-compromise';

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      role: copy.contact.roles.includes(prev.role) ? prev.role : copy.contact.roles[0],
    }));

    setSubmitState((prev) => ({
      ...prev,
      message: '',
    }));
  }, [copy]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ status: 'loading', message: copy.contact.sendingStatus });

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(copy.contact.errorStatus);
      }

      setFormState({
        name: '',
        email: '',
        company: '',
        role: copy.contact.roles[0],
        website: '',
        message: '',
      });

      setSubmitState({
        status: 'success',
        message: data.fallback
          ? copy.contact.fallbackStatus
          : copy.contact.successStatus,
      });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error && error.message ? error.message : copy.contact.errorStatus,
      });
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'emailShield',
        url: siteUrl,
        inLanguage: language === 'mk' ? 'mk-MK' : 'en-US',
      },
      {
        '@type': 'Organization',
        name: 'emailShield',
        url: siteUrl,
        description: copy.hero.lede,
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              availableLanguage: ['mk', 'en'],
            },
          ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: copy.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="backdrop backdrop-one" />
      <div className="backdrop backdrop-two" />

      <header className={`shell topbar${isTopbarScrolled ? ' topbar-scrolled' : ''}`}>
        <a className="brand" href="#hero" aria-label={copy.nav.homeAria}>
          <span className="brand-mark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00111d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <span className="brand-text">emailShield</span>
        </a>

        <nav className="nav" aria-label={copy.nav.primaryNavAria}>
          <a href="#product">{copy.nav.product}</a>
          <a href="#workflow">{copy.nav.workflow}</a>
          <a href="#onboarding">{copy.nav.onboarding}</a>
          <a href="#guides">{copy.nav.guides}</a>
        </nav>

        <div className="topbar-actions">
          <div className="lang-switch" aria-label={copy.nav.languageSwitcherAria}>
            <button
              type="button"
              className={language === 'mk' ? 'active' : ''}
              onClick={() => setLanguageAndUrl('mk')}
              aria-pressed={language === 'mk'}
            >
              MK
            </button>
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguageAndUrl('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
          <a className="button button-ghost" href="#contact">
            {copy.nav.requestDemo}
          </a>
        </div>
      </header>

      <main>
        <section className="shell hero reveal" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1 className={language === 'mk' ? 'hero-title-mk' : undefined}>{copy.hero.title}</h1>
            <p className="lede">{copy.hero.lede}</p>

            <div className="cta-row">
              <a className="button button-primary" href="#contact">
                {copy.hero.ctaPrimary}
              </a>
            </div>

          </div>

          <aside className="hero-panel outlook-mail" aria-label={copy.hero.previewAria}>
            <div className="mail-toolbar">
              <div className="mail-toolbar-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="mail-app-label">Outlook</span>
              <span className="mail-toolbar-time">09:41</span>
            </div>

            <div className="mail-shell">
              <aside className="mail-sidebar" aria-hidden="true">
                <span className="mail-sidebar-item active">Inbox</span>
                <span className="mail-sidebar-item">Sent Items</span>
                <span className="mail-sidebar-item">Archive</span>
                <span className="mail-sidebar-item">Junk Email</span>
              </aside>

              <div className="mail-main-pane">
                <div className="mail-message">
                  <div className="mail-subject-row">
                    <strong>{language === 'en' ? 'RE: Updated payment instructions' : 'RE: Ажурирани инструкции за плаќање'}</strong>
                    <span className="spoof-badge">{language === 'en' ? 'High risk' : 'Висок ризик'}</span>
                  </div>

                  <div className="mail-meta-grid">
                    <div className="mail-meta-row">
                      <span>{language === 'en' ? 'From' : 'Од'}</span>
                      <strong>Cristian Fleming, CFO &lt;cfo@company-secure.net&gt;</strong>
                    </div>
                    <div className="mail-meta-row">
                      <span>{language === 'en' ? 'To' : 'До'}</span>
                      <strong>{language === 'en' ? 'Finance Team' : 'Финансиски тим'}</strong>
                    </div>
                  </div>

                  <p className="mail-body-preview">
                    {language === 'en'
                      ? 'Please process this invoice immediately and update the account details below before noon.'
                      : 'Ве молам веднаш процесирајте ја оваа фактура и ажурирајте ги податоците за сметката пред пладне.'}
                  </p>

                  <div className="alert-card">
                    <div className="alert-card-top">
                      <span className="pill pill-danger">{copy.preview.risk}</span>
                      <span className="small-copy">{copy.preview.detectedInMail}</span>
                    </div>
                    <div className="comparison">
                      <div>
                        <span className="comparison-label">{copy.preview.approvedAccount}</span>
                        <strong>MK12 **** 2048</strong>
                      </div>
                      <div className="comparison-arrow">→</div>
                      <div>
                        <span className="comparison-label">{copy.preview.detectedAccount}</span>
                        <strong>MK54 **** 8891</strong>
                      </div>
                    </div>
                    <ul className="signal-list">
                      {copy.preview.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </aside>

          <div className="hero-workflow" id="workflow" aria-label={copy.nav.workflow}>
            <div className="hero-workflow-header">
              <p className="eyebrow">{copy.workflow.eyebrow}</p>
            </div>
            <div className="hero-workflow-grid">
              {copy.workflow.protectionSteps.slice(0, 4).map((step, index) => (
                <article className="hero-workflow-card" key={step.title}>
                  <div className="hero-workflow-meta">
                    <div className="hero-workflow-icon">{WORKFLOW_ICONS[index]}</div>
                    <span className="hero-workflow-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section reveal" id="product">
          <div className="section-heading">
            <p className="eyebrow">{copy.product.eyebrow}</p>
            <h2>{copy.product.title}</h2>
          </div>

          <div className="feature-grid product-grid">
            {[
              ...copy.product.cards.map((card, i) => ({ card, icon: PRODUCT_ICONS[i] })),
              ...copy.security.cards.map((card, i) => ({ card, icon: SECURITY_ICONS[i] })),
            ].map(({ card, icon }) => (
              <article className="feature-card" key={card.title}>
                <div className="card-icon">{icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section reveal results-section" id="results">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.results.eyebrow}</p>
            <h2>{copy.results.title}</h2>
            <p className="lede" style={{ marginTop: 14 }}>{copy.results.lede}</p>
          </div>
          <div className="results-grid results-strip-grid" aria-label={copy.results.eyebrow}>
            {copy.results.items.map((item) => (
              <article className="result-card" key={item.value + item.label}>
                <div className="result-card-inner">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="results-note">{copy.results.note}</p>
        </section>

        <section className="shell section reveal" id="guides">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.seo.eyebrow}</p>
            <h2>{copy.seo.title}</h2>
          </div>
          <div className="feature-grid product-grid">
            {copy.seo.items.map((item) => (
              <article className="feature-card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="seo-link" href={language === 'en' ? `/en${item.href}` : item.href}>
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section pricing reveal" aria-label={copy.pricing.aria}>
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.pricing.eyebrow}</p>
            <h2>{copy.pricing.title}</h2>
            <p className="lede pricing-lede">{copy.pricing.lede}</p>
          </div>
          <div className="pricing-grid">
            {copy.pricing.packages.map((pkg, index) => (
              <article className={`pricing-package${index === 1 ? ' popular' : ''}`} key={pkg.name}>
                <div className="pricing-package-top">
                  <div>
                    <p className="pricing-package-name">{pkg.name}</p>
                    <p className="pricing-package-badge">{pkg.badge}</p>
                  </div>
                  {index === 1 ? <span className="pricing-package-popular">{copy.pricing.popularLabel}</span> : null}
                </div>

                <p className="pricing-package-delivery">{pkg.delivery}</p>

                <p className="pricing-package-support">{pkg.supportNote}</p>

                <div className="pricing-package-price-row">
                  <strong className="pricing-package-price">{pkg.price}</strong>
                  <span className="pricing-package-period">{pkg.period}</span>
                </div>

                <ul className="pricing-package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className={`button ${index === 1 ? 'button-primary' : 'button-secondary'} pricing-package-cta`} href="#contact">
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section reveal" id="faq">
          <div className="section-heading narrow">
            <p className="eyebrow">{copy.faq.eyebrow}</p>
            <h2>{copy.faq.title}</h2>
          </div>
          <div className="faq-list">
            {copy.faq.items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-chevron">{ICONS.chevronDown}</span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="shell section contact reveal" id="contact">
          <div className="contact-main">
            <div className="contact-intro">
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
            </div>
            <div className="contact-form-wrap">
              <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="honeypot" aria-hidden="true">
                  <span>Website</span>
                  <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex="-1"
                    value={formState.website || ''}
                    onChange={(event) => setFormState({ ...formState, website: event.target.value })}
                  />
                </label>
                <label>
                  <span>{copy.contact.name}</span>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                    required
                  />
                </label>
                <label>
                  <span>{copy.contact.email}</span>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                    required
                  />
                </label>
                <label>
                  <span>{copy.contact.company}</span>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={(event) => setFormState({ ...formState, company: event.target.value })}
                    required
                  />
                </label>
                <label>
                  <span>{copy.contact.role}</span>
                  <select
                    name="role"
                    value={formState.role}
                    onChange={(event) => setFormState({ ...formState, role: event.target.value })}
                    required
                  >
                    {copy.contact.roles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </label>
                <label className="form-message">
                  <span>{copy.contact.message}</span>
                  <textarea
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                    placeholder={copy.contact.placeholder}
                  />
                </label>
              </div>

              <div className="form-actions">
                <button className="button button-primary" type="submit" disabled={submitState.status === 'loading'}>
                  {submitState.status === 'loading' ? copy.contact.submitLoading : copy.contact.submitIdle}
                </button>
              </div>

              {copy.contact.responseNote ? <p className="response-note">{copy.contact.responseNote}</p> : null}

              <p className={`form-status form-status-${submitState.status}`} aria-live="polite">
                {submitState.message}
              </p>
              </form>

              <div className="contact-onboarding-inline" id="onboarding">
                <p className="eyebrow">{copy.contact.eyebrow}</p>
                <h3>{copy.workflow.demoTitle}</h3>
                <div className="onboarding-steps" aria-label={copy.workflow.demoTitle}>
                  {[copy.workflow.demoSteps[0], copy.workflow.demoSteps[1], copy.workflow.demoSteps[2]].map((step, index) => (
                    <article className="onboarding-step" key={step.title}>
                      <span className="onboarding-step-num">{String(index + 1).padStart(2, '0')}</span>
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>emailShield</strong>
            <p>{copy.footer.line1}</p>
            <p>{copy.footer.line2}</p>
          </div>
          <div className="footer-meta">
            <div className="footer-links">
              <a href={language === 'en' ? '/en/privacy' : '/privacy'}>{copy.contact.trustLinks.privacy}</a>
              <a href={language === 'en' ? '/en/security' : '/security'}>{copy.contact.trustLinks.security}</a>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} emailShield</p>
          </div>
        </div>
      </footer>

      <div className="mobile-sticky-cta">
        <a className="button button-primary" href="#contact">
          {copy.hero.ctaPrimary}
        </a>
      </div>
    </>
  );
}

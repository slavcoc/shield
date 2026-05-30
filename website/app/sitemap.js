const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shield.mk';

export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/`,
          'en-US': `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/`,
          'en-US': `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/invoice-fraud-prevention`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/invoice-fraud-prevention`,
          'en-US': `${siteUrl}/en/invoice-fraud-prevention`,
        },
      },
    },
    {
      url: `${siteUrl}/en/invoice-fraud-prevention`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/fake-invoice-email`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/fake-invoice-email`,
          'en-US': `${siteUrl}/en/fake-invoice-email`,
        },
      },
    },
    {
      url: `${siteUrl}/en/fake-invoice-email`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/payment-change-fraud`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/payment-change-fraud`,
          'en-US': `${siteUrl}/en/payment-change-fraud`,
        },
      },
    },
    {
      url: `${siteUrl}/en/payment-change-fraud`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}/business-email-compromise`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/business-email-compromise`,
          'en-US': `${siteUrl}/en/business-email-compromise`,
        },
      },
    },
    {
      url: `${siteUrl}/en/business-email-compromise`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/privacy`,
          'en-US': `${siteUrl}/en/privacy`,
        },
      },
    },
    {
      url: `${siteUrl}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${siteUrl}/security`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          'mk-MK': `${siteUrl}/security`,
          'en-US': `${siteUrl}/en/security`,
        },
      },
    },
    {
      url: `${siteUrl}/en/security`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.55,
    },
  ];
}

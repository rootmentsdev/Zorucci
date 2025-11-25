import React from 'react';

function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Zorucci",
    "url": "https://zoruccisite.vercel.app",
    "logo": "https://zoruccisite.vercel.app/logo.png",
    "sameAs": [
      "https://www.instagram.com/zoruccibridal/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6235031144",
      "contactType": "Customer Service"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I buy premium bridal lehengas in Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit any of Zorucci's four showrooms for a curated collection of luxury bridal lehengas."
        }
      },
      {
        "@type": "Question",
        "name": "Does Zorucci offer custom bridal outfits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer full customization including design modifications, fabric selection, and fittings."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer wedding gowns for Christian ceremonies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zorucci specializes in elegant wedding gowns for Christian weddings and receptions."
        }
      },
      {
        "@type": "Question",
        "name": "What bridal outfit types does Zorucci offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Designer bridal lehengas, custom wedding gowns, and premium bridal sarees."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book an appointment online or by phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Call or WhatsApp +91 6235031144 to book your appointment."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default SchemaMarkup;


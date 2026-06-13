import React from "react";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "EcoFlow Services",
    "image": "https://ecoflow-sa.com/hero-bg.png",
    "@id": "https://ecoflow-sa.com/#business",
    "url": "https://ecoflow-sa.com",
    "telephone": "+966500000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahd Road",
      "addressLocality": "Riyadh",
      "postalCode": "12211",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Riyadh" },
      { "@type": "AdministrativeArea", "name": "Jeddah" },
      { "@type": "AdministrativeArea", "name": "Dammam" },
      { "@type": "AdministrativeArea", "name": "Mecca" },
      { "@type": "AdministrativeArea", "name": "Medina" },
      { "@type": "AdministrativeArea", "name": "Khobar" }
    ],
    "knowsAbout": [
      "Air Conditioning Repair",
      "HVAC Installation",
      "Plumbing Leak Detection",
      "Water Booster Pump Installation",
      "Solar Panel Systems",
      "Photovoltaic Engineering"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AC & HVAC Maintenance & Repair",
        "provider": { "@id": "https://ecoflow-sa.com/#business" },
        "areaServed": "SA",
        "description": "Professional AC repairs, split-system duct cleaning, gas recharging, and compressor replacements tailored for Saudi summer climates."
      },
      {
        "@type": "Service",
        "name": "Certified Plumbing & Pipe Repair",
        "provider": { "@id": "https://ecoflow-sa.com/#business" },
        "areaServed": "SA",
        "description": "Non-destructive water leak detection, water pressure booster pump installation, and descaling services."
      },
      {
        "@type": "Service",
        "name": "Solar Panel Installation & Maintenance",
        "provider": { "@id": "https://ecoflow-sa.com/#business" },
        "areaServed": "SA",
        "description": "SEC certified on-grid and off-grid solar energy systems engineering, battery storage backups, and PV panels cleaning."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of solar panel installation for a villa in Riyadh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average cost of residential solar panel installation in Riyadh ranges from SAR 15,000 to SAR 40,000, depending on the system size (typically 5kW to 15kW). Under current SEC net metering regulations, homeowners can offset up to 80% of their electricity bills."
        }
      },
      {
        "@type": "Question",
        "name": "How often should AC filters be cleaned in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Saudi Arabia, AC filters should be cleaned every 2 to 4 weeks during summer and after every dust storm. Full professional coil cleaning and duct inspection are recommended at least twice a year (before summer and winter)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is water pressure low in my Saudi villa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Low water pressure in Saudi villas is commonly caused by a malfunctioning gravity-fed rooftop tank booster pump (dynamo), scale buildup in PPR supply pipes, or underground leakage in the main supply pipe. Installing a smart automatic booster pump resolves this."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

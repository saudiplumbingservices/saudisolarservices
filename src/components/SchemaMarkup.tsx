import { PHONE_E164, BASE_URL, BUSINESS_NAME } from "@/lib/siteConfig";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BUSINESS_NAME,
    "image": `${BASE_URL}/hero-bg.png`,
    "@id": `${BASE_URL}/#business`,
    "url": BASE_URL,
    "telephone": PHONE_E164,
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
        "provider": { "@id": `${BASE_URL}/#business` },
        "areaServed": "SA",
        "description": "Professional AC repairs, split-system duct cleaning, gas recharging, and compressor replacements tailored for Saudi summer climates."
      },
      {
        "@type": "Service",
        "name": "Certified Plumbing & Pipe Repair",
        "provider": { "@id": `${BASE_URL}/#business` },
        "areaServed": "SA",
        "description": "Non-destructive water leak detection, water pressure booster pump installation, and descaling services."
      },
      {
        "@type": "Service",
        "name": "Solar Panel Installation & Maintenance",
        "provider": { "@id": `${BASE_URL}/#business` },
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
      },
      {
        "@type": "Question",
        "name": "Why is my split AC blowing warm air?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is typically caused by: 1) Low refrigerant level due to a copper line leak, 2) A failed compressor capacitor, 3) Heavily soiled condenser coils blocking heat exchange, or 4) A faulty outdoor fan motor."
        }
      },
      {
        "@type": "Question",
        "name": "What is the advantage of VRF AC systems for Saudi villas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VRF (Variable Refrigerant Flow) systems allow a single outdoor unit to connect to multiple indoor units, adjusting motor speed dynamically. This delivers precise zoning, occupies less rooftop space, and reduces monthly electrical consumption by up to 40% compared to standard split AC units."
        }
      },
      {
        "@type": "Question",
        "name": "How do you find water leaks without breaking the walls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize non-destructive technologies like acoustic leak detectors to capture the specific sound frequency of escaping water and thermal imaging cameras to detect hidden moisture patterns and temperature differentials behind concrete walls and floor tiles."
        }
      },
      {
        "@type": "Question",
        "name": "What type of water pipes are best for houses in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPR (Polypropylene Random) pipes are highly recommended for hot and cold water supply lines in KSA. They offer excellent heat resistance, prevent calcium scale buildup, do not corrode from salty coastal air, and are connected using fusion welding to create solid, leak-free joints."
        }
      },
      {
        "@type": "Question",
        "name": "How does dust affect solar panels in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Desert dust accumulation (soiling) is the primary factor reducing solar output in KSA, which can reduce efficiency by 20% to 30% in a few weeks. We recommend manual cleaning or automated brushes at least twice a month."
        }
      },
      {
        "@type": "Question",
        "name": "What is SEC Net Metering and how does it save money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Saudi Electricity Company (SEC) net metering framework allows you to install a bidirectional smart meter. During peak sunny hours, your solar array feeds excess power into the public grid, recording credits that offset the power you draw from the grid at night."
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

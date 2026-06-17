export interface CityData {
  slug: string;
  name: string;
  nameAr: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  ac: {
    headline: string;
    body: string;
    facts: string[];
  };
  plumbing: {
    headline: string;
    body: string;
    facts: string[];
  };
  solar: {
    headline: string;
    body: string;
    facts: string[];
  };
  faq: { question: string; answer: string }[];
  lat: number;
  lng: number;
  postalCode: string;
  street: string;
}

export const cities: CityData[] = [
  {
    slug: "riyadh",
    name: "Riyadh",
    nameAr: "الرياض",
    region: "Central Region",
    metaTitle: "AC, Plumbing & Solar Services in Riyadh | Miyar Technical Services",
    metaDescription: "Certified AC repair, emergency plumbing, and solar panel installation in Riyadh. Available 24/7 across all Riyadh districts — Al Olaya, Al Malaz, Al Nakheel, and more.",
    intro: "Riyadh is Saudi Arabia's capital and its most extreme urban heat environment — summer temperatures regularly exceed 47°C with relentless haboob dust storms from March to June. Our Riyadh team responds within 2 hours to any AC, plumbing, or solar emergency across all city districts, including Al Olaya, Diplomatic Quarter, Al Nakheel, Al Malaz, Sulaymaniyah, and the Eastern Ring Road corridor.",
    ac: {
      headline: "AC Repair & HVAC Maintenance in Riyadh",
      body: "Riyadh's dry desert heat is the most demanding HVAC environment in the country. Condenser units on Riyadh rooftops operate at ambient temperatures exceeding 50°C, driving compressor discharge pressures to the upper limits of equipment ratings. Our Riyadh HVAC engineers are experienced with all leading brands installed across the city's villa districts and high-rise towers — from Daikin and Carrier to LG and Samsung. We handle emergency compressor replacements, gas leak detection, complete coil cleaning after haboob season, and full VRF/central AC system commissioning for new villa builds.",
      facts: [
        "Same-day emergency response across all Riyadh districts",
        "Certified for VRF systems: Daikin VRV, Mitsubishi City Multi, LG Multi V",
        "Post-haboob full AC system cleaning and inspection packages",
        "High-ambient compressor upgrades for buildings experiencing mid-summer lockouts"
      ]
    },
    plumbing: {
      headline: "Plumbing & Leak Detection in Riyadh",
      body: "Riyadh's municipal water TDS averages 600–900 ppm — among the highest in KSA — causing accelerated calcium scale buildup in all pipe types. Our Riyadh plumbing division specialises in non-destructive leak detection using acoustic correlation and thermal imaging, PPR pipe replacement for ageing galvanised steel networks, and smart booster pump (dynamo) installations for multi-storey villas and compounds. We also service water treatment units, softeners, and RO systems throughout the city.",
      facts: [
        "Non-destructive leak detection — pinpoints leaks within 30cm without wall demolition",
        "PPR pipe system upgrades replacing corroded galvanised networks",
        "Smart inverter booster pump installation for consistent water pressure",
        "Water quality testing and softener/RO system maintenance"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Riyadh",
      body: "Riyadh has the highest solar irradiance of any major Saudi city — 6.5 to 7.0 kWh/m²/day average, with summer peak days exceeding 8 kWh/m². A 10kWp SEC-approved solar system in Riyadh generates approximately 18,000–20,000 kWh annually, enough to offset 85–100% of a typical villa's electricity consumption. Our Riyadh solar team handles full SEC net metering applications, high-ambient N-type panel installations, and off-grid systems for farms and remote properties across the Central Region.",
      facts: [
        "SEC net metering application and smart meter coordination",
        "High-ambient N-type (TOPCon/HJT) panels rated for 52°C+ Riyadh summers",
        "10kWp villa systems from SAR 28,000 fully installed",
        "Off-grid systems for Al-Kharj farms and Central Region rural estates"
      ]
    },
    faq: [
      {
        question: "How quickly can you respond to an AC emergency in Riyadh?",
        answer: "Our Riyadh response team operates 24/7 with a guaranteed 2-hour response window to all Riyadh districts. During peak summer months (June–August), we maintain additional on-call technicians to ensure response times do not exceed this window even during high-demand periods."
      },
      {
        question: "What is the best AC brand for Riyadh villas in 2026?",
        answer: "For Riyadh's extreme dry heat, we recommend Daikin high-ambient series or LG Dual Inverter units. Both are rated for 50–52°C ambient operation and have comprehensive authorised service networks in Riyadh. The higher upfront cost versus budget brands recovers within 2 years through electricity savings and fewer breakdown calls."
      },
      {
        question: "How much does solar installation cost for a Riyadh villa?",
        answer: "A 10kWp grid-tied solar system for a typical Riyadh villa costs SAR 28,000–40,000 fully installed, including SEC net metering application and smart meter installation. The system generates approximately 19,000 kWh/year, saving SAR 12,000–18,000 annually in electricity costs at current KSA tariff rates."
      }
    ],
    lat: 24.7136,
    lng: 46.6753,
    postalCode: "12211",
    street: "King Fahd Road"
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    nameAr: "جدة",
    region: "Western Region (Makkah Province)",
    metaTitle: "AC, Plumbing & Solar Services in Jeddah | Miyar Technical Services",
    metaDescription: "Expert AC maintenance, plumbing repair, and solar installation in Jeddah. We serve Al Hamra, Al Rawdah, Al Shati, Obhur, and all Jeddah districts. 24/7 emergency response.",
    intro: "Jeddah's coastal position on the Red Sea creates a uniquely challenging maintenance environment: high ambient humidity accelerating corrosion of outdoor AC units, salt-laden sea air attacking electrical connections, and flash flooding from winter rains stressing drainage networks. Our Jeddah team specialises in the specific maintenance challenges of coastal Saudi Arabia, serving all districts from Al Hamra and Al Rawdah in the north to Al Safa and Al Basateen in the south.",
    ac: {
      headline: "AC Repair & HVAC Maintenance in Jeddah",
      body: "Jeddah's combination of 36–42°C summer heat and 60–85% relative humidity creates a corrosion environment far more aggressive than Riyadh. Outdoor AC condensing units in Jeddah corrode at 3x the rate of inland cities — electrical terminals oxidise, fan motor bearings rust, and cabinet metalwork develops surface rust within 2–3 years without proper treatment. Our Jeddah HVAC service includes corrosion-protection coating for outdoor units, sealed terminal connections, and high-humidity evaporator coil cleaning to prevent mould and bacterial growth that is common in Jeddah's humid indoor environments.",
      facts: [
        "Anti-corrosion treatment for outdoor condensing units — extends life by 5+ years",
        "Mould remediation and antimicrobial evaporator coil treatment",
        "Split, cassette, and central AC service for Jeddah high-rises and villas",
        "Humidity-specific commissioning to prevent condensation damage"
      ]
    },
    plumbing: {
      headline: "Plumbing & Drainage in Jeddah",
      body: "Jeddah has experienced catastrophic flash flooding events in its history, and many districts still have undersized or blocked stormwater drainage infrastructure. Our Jeddah plumbing team provides full drain inspection using CCTV cameras, high-pressure hydro-jetting for calcium and grease-blocked kitchen and sewer lines, and emergency flood response including pump-out and pipe assessment services. Jeddah's desalinated water supply has lower TDS than Riyadh but still causes scale buildup — particularly in high-temperature water heater supply lines in multi-storey buildings.",
      facts: [
        "CCTV drain inspection and high-pressure hydro-jetting service",
        "Flash flood emergency pump-out and drainage restoration",
        "Rooftop water tank cleaning and float valve servicing",
        "Anti-corrosion pipe fittings for Jeddah's coastal salt air environment"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Jeddah",
      body: "Jeddah receives strong solar irradiance (5.8–6.3 kWh/m²/day) with minimal cloud cover throughout the year. The coastal location adds a specific maintenance consideration: salt-spray deposition on panel surfaces reduces light transmission and must be addressed with regular demineralised water cleaning. Our Jeddah solar installations use marine-grade mounting hardware (316 stainless steel) and bifacial panels with enhanced corrosion-resistant frames. We handle all SEC Western Region net metering applications from our Jeddah office.",
      facts: [
        "Marine-grade mounting hardware for coastal salt-air durability",
        "Bifacial panels maximising output from Jeddah's reflective coastal surfaces",
        "Regular demineralised-water cleaning service for salt-spray removal",
        "SEC Western Region net metering applications handled in-house"
      ]
    },
    faq: [
      {
        question: "Why does my AC in Jeddah need more maintenance than friends in Riyadh?",
        answer: "Jeddah's coastal humidity (typically 60–85% in summer) dramatically accelerates corrosion of outdoor AC components. Salt particles suspended in sea air deposit on electrical terminals and metal surfaces, while moisture promotes bacterial growth in evaporator coils. Jeddah ACs need servicing every 2 months versus every 3 months in Riyadh, and require anti-corrosion treatments not needed in dry inland cities."
      },
      {
        question: "Does Jeddah's flooding affect my building's plumbing?",
        answer: "Yes. Jeddah's flash flood events can force silt, debris, and contaminated water into drainage networks through floor drains and cleanout access points. After any major flood event, professional CCTV inspection of main sewer lines is recommended to detect partial blockages and structural damage before they cause backup flooding inside the building."
      },
      {
        question: "Are solar panels worth it in Jeddah's humid climate?",
        answer: "Absolutely. Jeddah's solar yield (approximately 1,700 kWh/kWp/year) is excellent — slightly lower than Riyadh due to higher humidity and occasional coastal haze, but still far above European averages. The humidity does not reduce panel power generation but does require more frequent cleaning to remove salt deposits. We recommend bi-weekly cleaning for optimal Jeddah solar yields."
      }
    ],
    lat: 21.4858,
    lng: 39.1925,
    postalCode: "23514",
    street: "Prince Sultan Road"
  },
  {
    slug: "dammam",
    name: "Dammam",
    nameAr: "الدمام",
    region: "Eastern Province",
    metaTitle: "AC, Plumbing & Solar Services in Dammam | Miyar Technical Services",
    metaDescription: "Professional AC maintenance, plumbing repair, and solar installation in Dammam and the Eastern Province. Serving Al Faisaliyah, Al Shati, Al Noor, and all Dammam neighbourhoods.",
    intro: "Dammam and the broader Eastern Province represent Saudi Arabia's industrial heartland and have unique infrastructure challenges driven by proximity to petrochemical operations. High ambient humidity from the Arabian Gulf, airborne salt particulates, and industrial particle pollution from Jubail and Ras Tanura create accelerated wear on all building systems. Our Eastern Province team provides specialised industrial and residential maintenance services across Dammam, Khobar, Dhahran, Qatif, and Jubail.",
    ac: {
      headline: "AC Repair & HVAC Service in Dammam",
      body: "Dammam's combination of Gulf humidity and industrial particulate pollution creates the most aggressive operating environment for AC systems in Saudi Arabia. Outdoor condensing units attract both salt deposits from sea air and carbon/sulphur particles from regional industrial operations. Our Dammam HVAC engineers use industrial-grade cleaning solvents and apply IHI corrosion-inhibiting coatings to all outdoor units we service. We work across all building types — from residential villas and compounds to large commercial buildings and industrial facilities in the Dammam Second Industrial City.",
      facts: [
        "Industrial corrosion-inhibiting coating for outdoor units near petrochemical areas",
        "Marine-grade terminal connector replacement for salt-air environments",
        "Commercial and industrial HVAC systems servicing for Eastern Province facilities",
        "Rapid parts sourcing through our Eastern Province distributor network"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Dammam",
      body: "Dammam receives desalinated water from SWCC (Saline Water Conversion Corporation) plants on the Gulf coast. This water has lower TDS than Riyadh's groundwater supply but contains higher chloride concentrations that accelerate corrosion of galvanised steel pipes and copper fittings. Our Dammam plumbing specialists focus on pipe material upgrades (to PPR) and corrosion-resistant fittings for all new installations, as well as non-destructive leak detection for the many older concrete-slab villa districts where buried pipe leaks create subsurface erosion.",
      facts: [
        "SWCC desalinated water quality assessment and treatment solutions",
        "PPR pipe upgrades for corrosion-prone galvanised and copper systems",
        "Subsurface leak detection for concrete-slab villa foundations",
        "Industrial facility plumbing maintenance on contract"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Dammam",
      body: "Dammam receives strong solar irradiance (5.8–6.5 kWh/m²/day) year-round. The Eastern Province's industrial wealth and large villa footprints make it one of the highest-ROI solar markets in Saudi Arabia. We handle SEC Eastern Region net metering applications, design systems for both private villas and commercial buildings, and provide ongoing maintenance including the specialised panel cleaning required to remove salt-spray and industrial particle deposits that build up faster than in other Saudi cities.",
      facts: [
        "SEC Eastern Region net metering — full application management",
        "Anti-soiling coated panels for industrial particle environments",
        "Commercial rooftop solar for Eastern Province business facilities",
        "Rapid ROI: average Dammam villa recovers system cost in under 5 years"
      ]
    },
    faq: [
      {
        question: "Does industrial pollution from Jubail affect my AC in Dammam?",
        answer: "Yes, significantly. Prevailing northwest and north winds carry fine industrial particulates from the Jubail Industrial City into Dammam's residential areas. These particles bond to condenser fin surfaces more aggressively than natural desert dust, requiring more frequent professional coil cleaning (every 6–8 weeks versus every 3 months in Riyadh) and industrial-grade cleaning agents that dissolve hydrocarbon deposits."
      },
      {
        question: "What type of water pipes are best for Dammam's desalinated water?",
        answer: "PPR pipes are the optimal choice for Dammam. SWCC desalinated water has higher chloride content than Saudi groundwater sources, which accelerates pitting corrosion in copper pipes and galvanic corrosion at copper-to-steel joint transitions. PPR is completely immune to chloride corrosion and maintains full flow capacity over decades."
      },
      {
        question: "Is there good solar potential in Dammam despite the Gulf humidity?",
        answer: "Yes. Despite higher humidity than Riyadh, Dammam's solar yield remains excellent at 1,650–1,800 kWh/kWp/year. The Gulf humidity primarily affects panel cleaning frequency (higher airborne salt deposition) rather than panel efficiency. With bi-weekly cleaning, a Dammam solar system performs at 95%+ of its design yield throughout the year."
      }
    ],
    lat: 26.4207,
    lng: 50.0888,
    postalCode: "32241",
    street: "King Saud Street"
  },
  {
    slug: "mecca",
    name: "Mecca",
    nameAr: "مكة المكرمة",
    region: "Makkah Province",
    metaTitle: "AC, Plumbing & Solar Services in Mecca | Miyar Technical Services",
    metaDescription: "Reliable AC maintenance, plumbing repair, and solar installation in Mecca. Serving Al Aziziyah, Al Zaher, Ajyad, Mina, and all Mecca districts. Fast response for Hajj and Umrah season.",
    intro: "Mecca's unique profile — a high-altitude inland city (277m above sea level) with extreme summer heat, and year-round peak-demand periods driven by Hajj and Umrah seasons — creates maintenance challenges unlike any other Saudi city. Residential and commercial buildings in Mecca experience dramatic occupancy surges during Hajj (Dhul Hijja) and throughout the year for Umrah, placing extreme short-term stress on AC systems and plumbing infrastructure. Our Mecca team is prepared for surge-demand service with additional technicians mobilised during peak religious seasons.",
    ac: {
      headline: "AC Repair & HVAC Service in Mecca",
      body: "Mecca's summer temperatures reach 44–46°C with significant humidity during Hajj season, creating extreme HVAC load conditions. The Al Haram Grand Mosque area and its surrounding neighbourhoods (Ajyad, Al Zaher, Al Aziziyah) have very high building density, requiring careful outdoor unit placement for adequate air circulation. We service both residential properties and the many apartment buildings that host Hajj and Umrah visitors, with particular expertise in the rapid-response maintenance these high-occupancy buildings require during peak religious seasons.",
      facts: [
        "Priority Hajj and Umrah season response team — additional capacity from Dhu al-Hijja onwards",
        "High-density building HVAC optimisation for Al Haram neighbourhood blocks",
        "Ducted central AC maintenance for Mecca hotel and residential towers",
        "Preventative pre-season full system inspections before Hajj begins"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Mecca",
      body: "Mecca's plumbing infrastructure faces extreme demand spikes during Hajj and major Umrah periods when population density in the city centre multiplies dramatically. Our Mecca plumbing team provides emergency drain unblocking, high-pressure hydro-jetting for grease-blocked commercial kitchen lines, water booster pump installations for multi-floor pilgrims' accommodation, and water tank cleaning services to maintain safe water quality in large storage systems.",
      facts: [
        "24/7 emergency plumbing during Hajj season across all Mecca districts",
        "Commercial kitchen drain unblocking for catering facilities",
        "Multi-floor building booster pump installations for pilgrims' accommodation",
        "Zamzam-safe water system maintenance with appropriate certifications"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Mecca",
      body: "Mecca receives excellent solar irradiance (5.9–6.4 kWh/m²/day) year-round. The city's high electricity consumption from AC systems during hot months makes solar investment particularly attractive. We handle SEC Western Province net metering for Mecca residential and commercial properties, and can design rooftop systems for apartment buildings and residential villas throughout all districts of the city.",
      facts: [
        "SEC Western Province net metering for Mecca properties",
        "Rooftop systems for both residential villas and multi-unit apartment blocks",
        "High-efficiency N-type panels suitable for Mecca's limited urban rooftop space",
        "On-grid systems to offset high Hajj/Umrah season electricity peaks"
      ]
    },
    faq: [
      {
        question: "Can you service AC units in Mecca's restricted central areas near Al Masjid Al Haram?",
        answer: "Yes. Our Mecca team holds the required access permits for the central restricted zones around Al Masjid Al Haram. For buildings within the Inner Boundary, we coordinate access timing with the appropriate authorities to ensure compliance while still maintaining rapid response for genuine emergencies."
      },
      {
        question: "How do we prepare our apartment building's AC for Hajj season?",
        answer: "We recommend a full pre-season HVAC inspection in Shawwal (1–2 months before Hajj): check all refrigerant pressures, replace capacitors nearing end-of-life, clean all evaporator and condenser coils, service the outdoor units, and test all thermostat controls. This prevents mid-Hajj breakdowns when technician availability is stretched across the city."
      },
      {
        question: "Is solar energy suitable for apartment buildings in Mecca?",
        answer: "Yes, with appropriate system design. For multi-unit apartment buildings in Mecca, we design shared rooftop systems where the generation is allocated proportionally across tenants via a sub-metering arrangement. The building owner installs the system, reduces common area electricity costs, and can offer lower utility charges as a competitive advantage to tenants."
      }
    ],
    lat: 21.3891,
    lng: 39.8579,
    postalCode: "24231",
    street: "Ibrahim Al Khalil Road"
  },
  {
    slug: "medina",
    name: "Medina",
    nameAr: "المدينة المنورة",
    region: "Madinah Province",
    metaTitle: "AC, Plumbing & Solar Services in Medina | Miyar Technical Services",
    metaDescription: "Professional AC repair, plumbing maintenance, and solar installation in Medina. Serving Al Anbariyah, Al Aziziyah, Quba, Al Hira, and all Medina districts. 24/7 response.",
    intro: "Medina is Saudi Arabia's second holiest city and shares many of Mecca's seasonal maintenance challenges — high Umrah visitor traffic year-round and major peaks during Ramadan, Hajj, and the Prophet's birthday. Medina's climate is somewhat milder than Mecca due to its higher elevation (650m above sea level) but summers remain intense, with temperatures reaching 42–44°C. Our Medina service team covers all city districts and surrounding areas including Quba, Al Awali, Al Aqiq, and the new residential developments in the eastern expansion zones.",
    ac: {
      headline: "AC Repair & HVAC Service in Medina",
      body: "Medina's relatively lower humidity compared to coastal cities means AC systems face primarily heat-related stress rather than corrosion challenges. The city's high proportion of multi-storey pilgrim accommodation buildings requires careful commercial HVAC management — these buildings run at very high occupancy rates for extended periods, making compressor health and refrigerant charge integrity critical to avoid mid-visit breakdowns. We service all AC brands and system types across Medina's residential, commercial, and government building portfolio.",
      facts: [
        "Pilgrim accommodation HVAC contract maintenance during Ramadan and Hajj",
        "Medina Old City neighbourhood emergency response with access coordination",
        "Central AC and VRF system maintenance for Medina hotel and commercial towers",
        "Pre-Ramadan full inspection packages to ensure peak-season reliability"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Medina",
      body: "Medina's water supply includes both local groundwater (higher mineral content, 400–700 ppm TDS) and desalinated water from the Yanbu–Medina transmission system. Our plumbing team services both residential villa networks and the large commercial properties in the Al Haram area, providing leak detection, booster pump installations, and the sanitary drainage maintenance that high-occupancy buildings in the central district require.",
      facts: [
        "Mixed water supply assessment — groundwater vs desalinated blend analysis",
        "Al Haram district commercial drainage and plumbing maintenance",
        "Water tank cleaning and disinfection with SASO-compliant documentation",
        "Emergency leak response across all Medina districts 24/7"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Medina",
      body: "Medina's elevated location and clear desert skies deliver excellent solar irradiance (6.0–6.5 kWh/m²/day), making it one of the best solar environments in Saudi Arabia. We design and install SEC-approved net metering systems for Medina villas and commercial buildings, managing the full SEC Medina Region application process, and provide ongoing maintenance contracts for installed systems.",
      facts: [
        "Medina Region SEC net metering — full application management",
        "High-yield systems: 6.0–6.5 kWh/m²/day solar irradiance",
        "Villa systems from SAR 26,000 including SEC application fees",
        "Ongoing cleaning and maintenance contracts for installed systems"
      ]
    },
    faq: [
      {
        question: "Can you install solar panels near Al Masjid An Nabawi in Medina?",
        answer: "Solar panel installations in the Al Masjid An Nabawi exclusion zones require coordination with the General Presidency for the Affairs of the Two Holy Mosques and must comply with specific height and aesthetic restrictions. We have experience navigating these approvals and can assess feasibility for your specific property location before proposing a system design."
      },
      {
        question: "What causes water pressure problems in Medina's older districts?",
        answer: "In Medina's older residential areas (pre-1990 construction), low water pressure is most commonly caused by severely corroded galvanised steel supply pipes that have lost 50–70% of their internal diameter to calcium scale and iron oxide. The permanent fix is full pipe replacement with PPR. A new inverter booster pump without pipe replacement provides only temporary improvement."
      },
      {
        question: "How does Ramadan affect our building's AC and plumbing systems?",
        answer: "Ramadan shifts occupancy patterns dramatically — buildings that are quiet during the day see peak AC and water usage between Maghrib prayer and Fajr (sunset to pre-dawn). This reverse-cycle load pattern can stress AC compressors and water heaters that are not designed for concentrated demand peaks. We recommend a pre-Ramadan inspection to identify any components approaching end-of-life before this high-demand period begins."
      }
    ],
    lat: 24.5247,
    lng: 39.5692,
    postalCode: "42311",
    street: "King Fahd Road"
  },
  {
    slug: "khobar",
    name: "Al Khobar",
    nameAr: "الخبر",
    region: "Eastern Province",
    metaTitle: "AC, Plumbing & Solar Services in Al Khobar | Miyar Technical Services",
    metaDescription: "Expert AC maintenance, plumbing repair, and solar installation in Al Khobar. Serving Al Corniche, Al Thuqbah, Al Aqrabiyah, Al Bandariyah, and all Al Khobar districts.",
    intro: "Al Khobar is the Eastern Province's most affluent residential city, home to Saudi Arabia's international business community and a large expatriate population in its well-maintained villa compounds. The city's Gulf waterfront location creates specific maintenance demands: sea salt corrosion on all outdoor equipment, high humidity year-round, and aggressive summer heat (38–43°C). Our Al Khobar team serves all neighbourhoods including Al Corniche, Al Thuqbah, Al Bandariyah, Yarmouk, and the major residential compounds along Half Moon Bay Road.",
    ac: {
      headline: "AC Repair & HVAC Service in Al Khobar",
      body: "Al Khobar's compound and villa market has the highest concentration of premium AC brands in Saudi Arabia — Daikin, Carrier, Mitsubishi Electric, and Trane systems are standard in upscale properties. Our Al Khobar HVAC team maintains EPA 608-equivalent certification for handling all refrigerant types and specialises in the detailed preventative maintenance programs that compound management companies require to meet their service level agreements with residents. We also offer comprehensive annual maintenance contracts for villa owners and companies.",
      facts: [
        "Annual maintenance contracts for compound management companies",
        "Premium brand expertise: Daikin, Carrier, Trane, Mitsubishi VRF systems",
        "Salt-air corrosion treatment and marine-grade component upgrades",
        "Detailed service reports for compound compliance documentation"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Al Khobar",
      body: "Al Khobar's upscale property market expects high standards of workmanship and documentation. Our Al Khobar plumbing team provides complete installation and maintenance services using top-grade materials — PPR-PN20 piping, marine-grade fittings, and Grundfos/Wilo pump systems. We also provide detailed service records for all work, supporting compound management documentation requirements and property resale due diligence.",
      facts: [
        "Premium material specifications: PPR-PN20, marine stainless fittings",
        "Grundfos and Wilo smart inverter pump installations",
        "Service documentation packages for compound compliance",
        "Backflow prevention installation for compound water systems"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Al Khobar",
      body: "Al Khobar's compound and villa market is rapidly adopting solar energy, driven by both electricity cost savings and sustainability commitments. The city's solar irradiance (5.7–6.2 kWh/m²/day) combined with large south-facing villa rooftops makes it ideal for 10–20kWp systems. We design premium solar installations using Tier-1 panels with aesthetic mounting systems that meet compound architectural guidelines, and manage full SEC Eastern Region net metering approvals.",
      facts: [
        "Aesthetic flush-mount systems meeting compound architectural guidelines",
        "20kWp+ systems for large Al Khobar villa rooftops",
        "SEC Eastern Region net metering with compound HOA coordination",
        "SunPower and REC Alpha premium panels for Al Khobar's premium market"
      ]
    },
    faq: [
      {
        question: "Do you work with compound management companies in Al Khobar?",
        answer: "Yes. We hold annual maintenance contracts with several Al Khobar compound management companies, providing scheduled preventative maintenance for all AC systems, plumbing infrastructure, and solar installations within the compound. We provide monthly service reports, emergency on-call coverage, and priority parts ordering for contracted properties."
      },
      {
        question: "How does Al Khobar's sea air affect AC compressors?",
        answer: "Al Khobar's Gulf sea air deposits salt aerosols on outdoor AC units within metres of the Corniche. These salt deposits cause accelerated corrosion of copper tube-to-aluminium fin joints in condensing coils, oxidise electrical terminal connections, and attack outdoor unit cabinet metal. We apply an IHI-grade anti-corrosion coating to all outdoor units we service in Al Khobar, and recommend quarterly cleaning rather than the bi-annual schedule suitable for inland cities."
      },
      {
        question: "What is the best solar panel system for an Al Khobar compound villa?",
        answer: "For premium Al Khobar villas with compound architectural guidelines, we recommend all-black monocrystalline panels (full black frame and backsheet) mounted on low-profile aluminium rail systems with matching colour anodised finish. REC Alpha Pure-R, SunPower Maxeon, or LONGi Hi-MO 7 all-black versions offer the best combination of high efficiency, premium aesthetics, and suitability for Al Khobar's coastal environment."
      }
    ],
    lat: 26.2172,
    lng: 50.1971,
    postalCode: "34441",
    street: "Prince Turki Street"
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

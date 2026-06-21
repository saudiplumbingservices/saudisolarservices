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
  },

  {
    slug: "taif",
    name: "Taif",
    nameAr: "الطائف",
    region: "Makkah Province",
    metaTitle: "AC, Plumbing & Solar Services in Taif | Miyar Technical Services",
    metaDescription: "Expert AC maintenance, plumbing repair, and solar installation in Taif. High-altitude climate specialists serving Al Hada, Al Shafa, Al Rudaf, and all Taif districts.",
    intro: "Taif sits at 1,800 metres above sea level in the Hejaz mountains, making it Saudi Arabia's most climatically distinct major city. Summer temperatures peak at 35–38°C — 10°C cooler than Jeddah and Riyadh — while winters bring genuine cold (down to 3–8°C) that occasionally requires supplementary heating. This unique climate demands AC systems sized differently, plumbing protected from occasional frost, and solar installations that account for the highland's excellent irradiance combined with moderate dust conditions.",
    ac: {
      headline: "AC Repair & HVAC Maintenance in Taif",
      body: "Taif's altitude climate means most residential properties are significantly cooled by outdoor temperatures for 6–7 months of the year, but summer still demands reliable air conditioning at its peak. AC systems in Taif are often undersized by contractors who forget the summer peak, or oversized by those who simply copy Jeddah specifications. Our Taif HVAC engineers calculate cooling loads specific to Taif's altitude-adjusted climate and service both split AC units and the central systems common in Taif's mountain resort properties and luxury summer villas.",
      facts: [
        "Altitude-adjusted cooling load calculations for Taif's 1,800m elevation",
        "Split AC and central HVAC service for Al Hada and Al Shafa resort villas",
        "Winter comfort review — supplementary heating options for cold Taif nights",
        "Annual maintenance contracts for summer-season villa owners"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Taif",
      body: "Taif receives more annual rainfall than almost any other Saudi city (approximately 300–400mm/year from monsoon-influenced weather systems), creating both drainage challenges and a higher groundwater availability than most of the Kingdom. Our Taif plumbing team is experienced with the city's mixed water supply, the drainage requirements of high-rainfall residential areas, and the pipe installation best practices for Taif's mountainous terrain where gradient management is critical.",
      facts: [
        "Drainage system design for Taif's significant annual rainfall",
        "Mountain-terrain pipe routing with correct gradient management",
        "Groundwater well assessment and pump installation for farm properties",
        "Winter pipe protection for properties at the coldest Taif elevations"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Taif",
      body: "Taif's clear mountain air and high altitude deliver excellent solar irradiance (5.5–6.2 kWh/m²/day) with notably lower dust concentration than the lowland desert cities. Solar panels in Taif maintain higher efficiency due to cooler operating temperatures — a solar panel at Taif's ambient temperatures produces 8–12% more power than the same panel in Riyadh's heat. We install SEC-approved systems for Taif villas and manage Western Province net metering applications.",
      facts: [
        "Altitude advantage: 8–12% higher solar output vs. lowland cities due to cooler temperatures",
        "Lower soiling rate — mountain clean air means fewer cleaning visits needed",
        "SEC Western Province net metering for Taif properties",
        "Agricultural solar pumping for Taif's rose and pomegranate farms"
      ]
    },
    faq: [
      {
        question: "Does Taif's cold climate affect AC system sizing?",
        answer: "Yes significantly. A room that needs 1.5 tons in Jeddah may only need 1.0 ton in Taif for the same cooling load due to the lower outdoor design temperature. However, Taif properties also benefit from heat pump technology for winter heating — a reverse-cycle inverter split AC efficiently provides both cooling in summer and supplementary heating in Taif's cool winters at 4–6× the efficiency of electric resistance heating."
      },
      {
        question: "Is solar worth installing in Taif?",
        answer: "Very much so. Taif's combination of good irradiance (5.5–6.2 kWh/m²/day), cooler panel operating temperatures, and clean mountain air gives it one of the best solar performance environments in Saudi Arabia. A 10kWp system in Taif generates approximately 16,000–18,000 kWh annually with minimal soiling losses, paying back in 2–3 years at current electricity tariffs."
      },
      {
        question: "What plumbing precautions are needed for Taif's cold winter nights?",
        answer: "For exposed rooftop pipework and outdoor taps at elevations above 1,500m, insulating exposed pipes is advisable. Taif rarely reaches true freezing temperatures in the city centre, but mountain-top properties (Hada, Al Shafa) can see temperatures below 0°C, sufficient to crack uninsulated water supply pipes. We recommend closed-cell foam lagging on all external pipework for mountain properties."
      }
    ],
    lat: 21.2673,
    lng: 40.4053,
    postalCode: "21944",
    street: "King Faisal Road"
  },

  {
    slug: "tabuk",
    name: "Tabuk",
    nameAr: "تبوك",
    region: "Tabuk Province",
    metaTitle: "AC, Plumbing & Solar Services in Tabuk | Miyar Technical Services",
    metaDescription: "Professional AC maintenance, plumbing, and solar installation in Tabuk. Serving Al Rawdah, Al Muruj, Prince Fahd, and all Tabuk districts. Gateway to NEOM and the Red Sea Riviera.",
    intro: "Tabuk is Saudi Arabia's fastest-growing major city, driven by the proximity of the NEOM mega-project, Red Sea tourism development, and its role as the capital of the northwest. At 768 metres above sea level with a desert climate producing scorching 45°C summers and genuinely cold winters (down to -3°C), Tabuk's HVAC and plumbing requirements span the full temperature range. Our Tabuk team serves residential villas, commercial buildings, and the expanding contractor and expat housing market driven by NEOM project workers.",
    ac: {
      headline: "AC Repair & HVAC Service in Tabuk",
      body: "Tabuk's summer temperatures regularly exceed 43–45°C, placing full demand on air conditioning systems. The city's rapid growth from NEOM-related migration has created strong demand for new AC installations as well as maintenance of older systems in existing residential districts. Our Tabuk HVAC service covers standard split AC installation and repair, VRF systems for the growing commercial sector, and energy-efficient inverter units well-suited to Tabuk's significant temperature range between summer and winter.",
      facts: [
        "New installation and commissioning for Tabuk's rapidly expanding residential districts",
        "High-ambient units rated 45°C+ for peak Tabuk summer conditions",
        "Reverse-cycle heat pump ACs — practical for Tabuk's -3°C winter nights",
        "VRF system installation for commercial and hospitality buildings"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Tabuk",
      body: "Tabuk is one of Saudi Arabia's driest regions — annual rainfall below 50mm and very limited groundwater in many areas means the city depends heavily on desalinated water delivered by pipeline from the Red Sea coast. Water conservation infrastructure (booster pumps, efficient fixtures, and rooftop storage optimisation) is particularly important in Tabuk. Our plumbing team serves the full Tabuk residential market and the construction-phase plumbing needs of new developments.",
      facts: [
        "Water conservation system design for Tabuk's limited water supply",
        "Booster pump installation for multi-storey residential buildings",
        "New construction plumbing for Tabuk's rapidly developing districts",
        "Rooftop storage tank installation and level control systems"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Tabuk",
      body: "Tabuk has some of the best solar conditions in Saudi Arabia — irradiance of 6.0–6.8 kWh/m²/day, very low humidity, minimal cloud cover, and relatively low dust versus central Saudi Arabia. The proximity to NEOM, which is targeting 100% renewable energy, has raised solar awareness in the region significantly. We install SEC-approved net metering systems for Tabuk residential and commercial properties and are equipped to serve the growing contractor accommodation and logistics hub market near NEOM's construction zone.",
      facts: [
        "6.0–6.8 kWh/m²/day — among the highest solar yield in KSA",
        "Low humidity and dust: minimal soiling losses, fewer cleaning visits needed",
        "SEC Tabuk Region net metering application management",
        "NEOM-area contractor accommodation and commercial solar systems"
      ]
    },
    faq: [
      {
        question: "Is Tabuk a good location for solar energy given its cold winters?",
        answer: "Tabuk is an excellent solar location year-round. Even in winter when days are shorter and the sun angle is lower, Tabuk's clear skies and low humidity maintain good generation — typically 3.5–4.5 kWh/kWp/day in December. Cold temperatures actually improve solar panel efficiency (panels produce more power below 25°C), so winter solar output per peak sun hour in Tabuk exceeds summer performance."
      },
      {
        question: "Does the NEOM project affect service availability in Tabuk?",
        answer: "NEOM has significantly increased skilled labour demand in the Tabuk region, and some contractors have moved to NEOM project work. We maintain a dedicated Tabuk residential and commercial service team separate from our NEOM-area operations, ensuring consistent response times for Tabuk city clients regardless of NEOM project phases."
      },
      {
        question: "What causes water pressure problems in Tabuk?",
        answer: "Tabuk's dependence on long-distance desalinated water pipeline supply means network pressure can vary between districts and during peak demand periods. Within buildings, failed booster pumps are the most common cause of low pressure — the same issue as other Saudi cities. However, in Tabuk's newer outer districts where infrastructure is still being installed, municipal supply pressure can genuinely be insufficient without a supplementary pump system."
      }
    ],
    lat: 28.3838,
    lng: 36.5550,
    postalCode: "47914",
    street: "King Fahd Road"
  },

  {
    slug: "abha",
    name: "Abha",
    nameAr: "أبها",
    region: "Asir Province",
    metaTitle: "AC, Plumbing & Solar Services in Abha | Miyar Technical Services",
    metaDescription: "Specialist AC maintenance, plumbing, and solar installation in Abha and the Asir Province. High-altitude climate expertise for Abha, Khamis Mushait, and the Asir mountain region.",
    intro: "Abha is Saudi Arabia's highest major city at 2,270 metres above sea level — and its most climatically unique. Summer temperatures peak at a comfortable 25–28°C, winters can drop below zero, and the city receives 500mm of annual rainfall from Arabian Sea monsoon-influenced systems, more than any other major Saudi city. HVAC in Abha is genuinely different from the rest of the Kingdom: air conditioning is used only in the warmest months, heating is occasionally needed in winter, and the high humidity during summer monsoon season creates unique indoor air quality challenges.",
    ac: {
      headline: "AC & Heating Services in Abha",
      body: "Abha's climate is the Saudi exception: cooling demand peaks at relatively modest temperatures (max 27°C), but humidity can reach 80–90% during the July–August monsoon season, creating real discomfort that requires dehumidification as well as cooling. Standard AC units sized for Saudi lowland conditions are dramatically oversized for Abha — correct sizing and a dehumidification mode are essential. We also install reverse-cycle heat pumps for winter space heating for the growing number of year-round residents in Abha's upscale villa market.",
      facts: [
        "Correct-sized dehumidification systems for Abha's 80–90% monsoon season humidity",
        "Reverse-cycle heat pump ACs providing winter warmth below 0°C ambient",
        "Altitude-specific refrigerant charge calculations for 2,270m elevation",
        "Annual service contracts for Abha's resort and mountain villa market"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Abha",
      body: "Abha's 500mm annual rainfall is a blessing and a challenge: it provides local groundwater recharge but also creates stormwater management requirements unlike the rest of Saudi Arabia. Properties in Abha require proper roof drainage, correct gradient floor drains, and mould-resistant plumbing work to handle the elevated humidity. We service both residential villas and the growing commercial hospitality sector that serves Abha's booming domestic tourism industry.",
      facts: [
        "Stormwater and roof drainage systems designed for 500mm annual rainfall",
        "Anti-mould plumbing materials and ventilation for Abha's humid conditions",
        "Domestic tourism accommodation plumbing maintenance",
        "Mountain-terrain pipe routing with gravity flow calculations"
      ]
    },
    solar: {
      headline: "Solar Installation in Abha",
      body: "Despite its altitude and occasional cloud cover, Abha receives good annual solar irradiance (5.2–5.8 kWh/m²/day). The cooler operating temperatures improve panel efficiency significantly compared to lowland Saudi cities — the same panel produces 12–15% more power at Abha's ambient temperatures than at Riyadh's peak summer heat. We design systems appropriate for Abha's lower year-round electricity consumption profile and manage SEC Asir Province net metering applications.",
      facts: [
        "Cooler temperatures: 12–15% higher panel efficiency vs Riyadh heat",
        "SEC Asir Province net metering for Abha and surrounding areas",
        "Systems designed for Abha's lower consumption profile vs. lowland cities",
        "Mountain villa aesthetics: flush-mount low-profile panel systems available"
      ]
    },
    faq: [
      {
        question: "Does Abha's high altitude affect AC system performance?",
        answer: "Yes. At 2,270m, air density is approximately 20% lower than at sea level. AC compressors move less refrigerant mass per cycle at altitude, reducing effective cooling capacity. A unit rated at 1.5 tons at sea level delivers approximately 1.25 tons at Abha's elevation. Our Abha system designs apply an altitude correction factor to all capacity calculations, ensuring the installed system delivers the required cooling under real Abha conditions."
      },
      {
        question: "Is heating required in Abha?",
        answer: "Yes, occasionally. Abha temperatures drop below 5°C on winter nights, and can approach 0°C at higher elevations in the Asir mountains. Reverse-cycle inverter ACs (heat pumps) efficiently provide supplementary heating and are the most cost-effective solution — they produce 3–4 units of heat for every 1 unit of electricity consumed. Many Abha villas benefit from a combination of AC cooling in summer and heat pump heating on cold winter nights from the same unit."
      },
      {
        question: "How does Abha's rainfall affect solar panel performance?",
        answer: "Abha's summer rain actually benefits solar panels in two ways: rain naturally cleans panels of dust accumulation, reducing cleaning frequency to once per month versus twice per month in Riyadh, and the lower ambient temperatures improve panel efficiency during peak summer generation periods. Overcast monsoon days in late July–August temporarily reduce generation, but the annual performance remains excellent compared to cloudy-climate European systems."
      }
    ],
    lat: 18.2164,
    lng: 42.5053,
    postalCode: "61411",
    street: "King Faisal Road"
  },

  {
    slug: "jubail",
    name: "Jubail",
    nameAr: "الجبيل",
    region: "Eastern Province",
    metaTitle: "AC, Plumbing & Solar Services in Jubail | Miyar Technical Services",
    metaDescription: "Industrial and residential AC maintenance, plumbing, and solar installation in Jubail. Specialist team for petrochemical-environment corrosion, industrial HVAC, and desalinated water systems.",
    intro: "Jubail Industrial City is one of the world's largest industrial complexes and the capital of Saudi Arabia's petrochemical industry. The city is divided into the Industrial City (home to SABIC, ARAMCO, and hundreds of downstream facilities) and Jubail Al Sina'iyah residential city housing workers and their families. The industrial environment creates the most aggressive AC and plumbing maintenance conditions in Saudi Arabia: sulphur compound-laden air accelerates corrosion at rates 5–10× higher than inland cities, and the Gulf coastal humidity adds salt-air attack on top of industrial chemicals.",
    ac: {
      headline: "Industrial & Residential AC Service in Jubail",
      body: "Jubail's AC maintenance requirements go beyond standard service. Outdoor condensing units in the residential city accumulate sulphur and hydrocarbon deposits from the industrial zone that bond to condenser fins and electrical terminals at rates that require bi-monthly cleaning rather than the standard quarterly schedule. Our Jubail HVAC team uses industrial-grade cleaning agents capable of dissolving hydrocarbon deposits, and applies industrial epoxy anti-corrosion coatings to all outdoor units we service. We also maintain HVAC systems for industrial facilities, process buildings, and the large worker accommodation complexes that are the backbone of Jubail's residential market.",
      facts: [
        "Bi-monthly industrial condenser cleaning with hydrocarbon-solvent coil cleaning agents",
        "Industrial epoxy anti-corrosion coating for outdoor units — 5-year protection",
        "Worker accommodation complex HVAC contracts — 50–500 unit buildings",
        "Industrial facility HVAC maintenance: clean rooms, process control buildings, labs"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Jubail",
      body: "Jubail is supplied with SWCC desalinated water that has been further treated to industrial standards — among the highest-quality domestic water in Saudi Arabia in chemical terms. However, the large industrial facilities require comprehensive water treatment and distribution systems that go beyond standard residential plumbing. Our Jubail plumbing team handles both standard residential villa and apartment maintenance and the specialised industrial water systems (process water, cooling tower make-up, fire protection) for smaller industrial facilities.",
      facts: [
        "Residential and industrial water system maintenance",
        "SWCC desalinated supply: high-quality water, chloride-resistant PPR fittings required",
        "Fire protection system maintenance and testing for industrial facilities",
        "Cooling tower blowdown and water treatment services"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Jubail",
      body: "Jubail's industrial environment creates a specific solar maintenance challenge: airborne hydrocarbons from the industrial zone deposit on panel surfaces alongside salt-spray from the Gulf, requiring more frequent cleaning with appropriate solvents rather than plain water. Despite this, Jubail's solar irradiance (5.8–6.3 kWh/m²/day) is excellent. We design systems for both residential villas and commercial industrial facilities, and provide ongoing maintenance contracts that address Jubail's specific soiling conditions.",
      facts: [
        "Solvent-based panel cleaning for hydrocarbon + salt deposit removal",
        "Industrial facility rooftop systems up to 500kWp",
        "SEC Eastern Region net metering for residential Jubail properties",
        "High-frequency maintenance contracts for industrial-soiling environments"
      ]
    },
    faq: [
      {
        question: "How much more maintenance does AC require in Jubail vs other Saudi cities?",
        answer: "Jubail's industrial air environment requires approximately 2× the maintenance frequency of a standard Saudi city. Condenser coil cleaning every 6–8 weeks (vs 12 weeks in Riyadh), terminal connection inspections every 3 months (vs 6 months), and anti-corrosion coating re-application every 18 months (vs 3 years). For residents near the industrial zone boundary, these frequencies increase further. Annual maintenance contract costs in Jubail are typically 40–60% higher than equivalent contracts in Riyadh."
      },
      {
        question: "Are PPR pipes still needed in Jubail given the high-quality desalinated water?",
        answer: "Yes. Even though Jubail's SWCC water is chemically treated and has low TDS, it still contains residual chlorides from the desalination process that attack copper pipes and galvanised steel over time. PPR pipe, being completely non-metallic, is immune to chloride attack regardless of source water chemistry. Additionally, Jubail's industrial environment means any pipe exposed to external air should use non-metal connections wherever possible to avoid galvanic corrosion."
      },
      {
        question: "Can residential solar panels in Jubail cope with industrial air pollution?",
        answer: "Yes, with a more aggressive cleaning programme. A Jubail solar system should be cleaned every 10–14 days rather than monthly — airborne hydrocarbons from the industrial zone create a sticky film on panel glass that bonds additional dust and reduces light transmission more rapidly than plain sand dust. Using a mild surfactant followed by demineralised water rinse removes the hydrocarbon film effectively. With this cleaning frequency, Jubail solar systems perform at 92–95% of design yield."
      }
    ],
    lat: 27.0174,
    lng: 49.6580,
    postalCode: "31961",
    street: "King Fahd Road"
  },

  {
    slug: "yanbu",
    name: "Yanbu",
    nameAr: "ينبو",
    region: "Madinah Province",
    metaTitle: "AC, Plumbing & Solar Services in Yanbu | Miyar Technical Services",
    metaDescription: "Expert AC maintenance, plumbing repair, and solar installation in Yanbu. Serving Yanbu Al Sinaiyah, Yanbu Al Bahr, and all Yanbu residential and industrial districts.",
    intro: "Yanbu is Saudi Arabia's western industrial hub — a major ARAMCO refinery city and Red Sea petrochemical complex on the Madinah Province coast. Like Jubail on the eastern coast, Yanbu combines industrial air quality challenges with Red Sea coastal salt-air corrosion. The city serves a mixed population of industrial facility workers, port professionals, and residents of the adjacent fishing community Yanbu Al Bahr. Our Yanbu team provides both standard residential maintenance and the industrial-grade HVAC and plumbing services that the industrial city's workforce housing and facility buildings require.",
    ac: {
      headline: "AC & HVAC Service in Yanbu",
      body: "Yanbu's dual challenge of coastal salt air and refinery-adjacent industrial emissions requires the same elevated maintenance approach as Jubail. Outdoor condensing units corrode rapidly without anti-corrosion treatment, and the city's high summer temperatures (38–42°C) combined with Red Sea humidity (50–70%) create demanding operating conditions. We serve residential villas, worker accommodation complexes, and commercial buildings with anti-corrosion focused maintenance programmes and rapid emergency response.",
      facts: [
        "Marine + industrial corrosion protection for outdoor units",
        "Worker accommodation block HVAC contracts — 20 to 200 unit buildings",
        "Emergency response for industrial facility support buildings",
        "High-humidity evaporator coil treatment for mould prevention"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Yanbu",
      body: "Yanbu's water supply is primarily desalinated from local Red Sea desalination plants — similar to Jeddah's chemistry but with slightly higher chloride content from the Red Sea water source. Marine-grade PPR fittings and stainless steel isolation valves are the specification standard for all Yanbu plumbing work we undertake. We also service the industrial facility water systems including cooling water circuits, process water treatment, and worker accommodation centralised hot water plants.",
      facts: [
        "Marine-grade PPR and stainless fittings for Red Sea coastal environment",
        "Centralised hot water plant maintenance for large accommodation complexes",
        "Industrial cooling water system maintenance",
        "Emergency plumbing for industrial facility support buildings"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Yanbu",
      body: "Yanbu receives strong solar irradiance (5.8–6.3 kWh/m²/day) from the Red Sea coast. Like Jubail, the industrial air quality requires more frequent panel cleaning to maintain full yield. Marine-grade panel mounting hardware (316-grade stainless) is essential for all Yanbu installations given the salt-air environment. We handle SEC Western Province net metering applications for Yanbu residential properties and can design commercial systems for the industrial facility rooftops.",
      facts: [
        "316-grade stainless marine hardware for all Yanbu coastal installations",
        "SEC Western Province net metering for Yanbu residential properties",
        "Bi-weekly cleaning service to counter salt-spray and industrial soiling",
        "Commercial rooftop solar for industrial facility buildings"
      ]
    },
    faq: [
      {
        question: "Is Yanbu's climate similar to Jeddah for AC maintenance purposes?",
        answer: "Similar but more demanding. Both are Red Sea coastal cities with similar humidity and salt-air exposure. However, Yanbu's proximity to refinery operations adds hydrocarbon deposits to the salt-spray challenge, similar to Jubail on the Eastern Province. This requires the use of industrial-grade cleaning agents rather than plain water, and more frequent anti-corrosion coating re-application. Our Yanbu maintenance contracts are priced accordingly — slightly higher than equivalent Jeddah contracts."
      },
      {
        question: "What type of solar panels are best for Yanbu's marine environment?",
        answer: "For Yanbu's combined salt-air and industrial environment, we recommend panels with enhanced corrosion-resistant frames — specifically anodised aluminium alloy frames with a PVD coating, rather than standard powder-coated aluminium. LONGi Hi-MO 7 and Jinko Tiger Neo both offer corrosion-resistant frame options suited to Gulf and Red Sea coastal environments. The cells themselves are unaffected by salt air — it is the frame and mounting hardware that require the marine-grade specification."
      },
      {
        question: "Can I get an annual maintenance contract for my villa in Yanbu Al Bahr?",
        answer: "Yes. We offer annual maintenance contracts for residential villas in Yanbu Al Bahr covering AC preventative maintenance (4 visits per year with anti-corrosion treatment), plumbing inspection, and solar panel cleaning if applicable. For Yanbu Al Bahr's waterfront location, we recommend contracts that include bi-monthly condenser coil washing rather than quarterly, to counter the direct coastal salt-spray exposure."
      }
    ],
    lat: 24.0895,
    lng: 38.0618,
    postalCode: "41912",
    street: "King Abdul Aziz Road"
  },

  {
    slug: "buraydah",
    name: "Buraydah",
    nameAr: "بريدة",
    region: "Al Qassim Province",
    metaTitle: "AC, Plumbing & Solar Services in Buraydah | Miyar Technical Services",
    metaDescription: "Professional AC repair, plumbing maintenance, and solar installation in Buraydah and Al Qassim Province. Extreme-climate specialists for Saudi Arabia's hottest continental conditions.",
    intro: "Buraydah, capital of the Al Qassim Province, is the agricultural heart of Saudi Arabia — the world's largest date-producing region surrounded by desert farmland. Climatically, Buraydah is the Saudi extreme: summer temperatures exceed 46°C (matching Riyadh at its hottest), while winter nights regularly drop to -2°C to -4°C, creating the widest temperature range of any major Saudi city. This continental climate demands HVAC systems that reliably perform at both temperature extremes and plumbing that can handle both scorching roof temperatures and the occasional frost at street level.",
    ac: {
      headline: "AC & Heating Service in Buraydah",
      body: "Buraydah's extreme temperature range means AC systems must be specified for both 46°C summer cooling and -3°C winter conditions where reverse-cycle heating is genuinely useful. Haboob dust storms are as frequent and severe as Riyadh, creating the same condenser fouling challenges. Our Buraydah HVAC team serves residential villas across the city and the extensive agricultural estate buildings (farm houses, packing sheds, cold storage support facilities) that form a significant part of the region's property portfolio.",
      facts: [
        "High-ambient 46°C+ rated units for Buraydah's peak summer conditions",
        "Reverse-cycle heat pump specification for -3°C winter nights",
        "Agricultural estate HVAC: farm houses, cold storage support, worker accommodation",
        "Haboob-adapted maintenance schedule: post-dust storm response team"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Buraydah",
      body: "Al Qassim has some of Saudi Arabia's hardest water — TDS levels of 700–1,100 ppm are common from local groundwater sources, and the hard water agriculture (date farms use enormous water volumes) means the regional water infrastructure is constantly under high demand. Scale buildup in pipes is faster than almost anywhere in Saudi Arabia. Our Buraydah plumbing team specialises in scale descaling and prevention, PPR pipe replacement for scale-blocked old networks, and agricultural irrigation system maintenance for farm properties.",
      facts: [
        "TDS 700–1,100 ppm scale treatment — fastest scale buildup in KSA",
        "Agricultural irrigation pipe maintenance for date farm properties",
        "Water softener and RO filter installation for residential properties",
        "Emergency pipe replacement for frost-cracked outdoor pipework"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Buraydah",
      body: "Buraydah shares Riyadh's exceptional solar irradiance (6.5–7.0 kWh/m²/day) — among the very highest in Saudi Arabia — combined with a similar dust profile. Al Qassim's agricultural sector is increasingly adopting solar for farm water pumping and electricity generation. We install residential SEC net metering systems for Buraydah villas and design agricultural solar pumping systems for Al Qassim's date farms and other agricultural operations.",
      facts: [
        "6.5–7.0 kWh/m²/day — joint highest solar yield in KSA with Riyadh",
        "Agricultural solar pumping for Al Qassim date farms and irrigation",
        "SEC Al Qassim Region net metering application management",
        "Farm off-grid systems for remote agricultural estates"
      ]
    },
    faq: [
      {
        question: "Does Buraydah's winter cold affect AC systems?",
        answer: "Yes. At -3°C outdoor temperature, standard split AC outdoor units may struggle to defrost their coils efficiently and can produce cold air in heating mode rather than warm — not a common scenario in Saudi Arabia but real in Buraydah. Specifying an inverter heat pump with an enhanced defrost cycle (available from Daikin, Mitsubishi, and LG) ensures effective heating down to -10°C ambient, comfortably covering Buraydah's coldest recorded temperatures."
      },
      {
        question: "Is solar a good investment for Buraydah date farms?",
        answer: "Solar is exceptional for date farm irrigation pumping in Al Qassim. Direct-drive solar submersible pumps (no battery required) can power irrigation systems during daylight hours when pumping demand coincides with solar generation. Buraydah's 6.5–7.0 kWh/m²/day irradiance means a 10kWp system can power a 7.5kW submersible pump for 8–9 hours daily, irrigating 5–10 hectares depending on soil type. ROI on agricultural solar pumping in Al Qassim is typically 2–3 years."
      },
      {
        question: "What causes plumbing scale problems in Buraydah faster than other cities?",
        answer: "Al Qassim's groundwater has naturally high mineral content from the region's geology — calcium carbonate and magnesium sulphate concentrations produce TDS readings of 700–1,100 ppm, compared to 600–900 ppm in Riyadh and 200–400 ppm in coastal desalinated water cities. This higher mineral content means hot water pipes scale 40–60% faster than in Riyadh and 3–5× faster than in coastal cities. Water softeners are strongly recommended for hot water systems in Buraydah."
      }
    ],
    lat: 26.3260,
    lng: 43.9750,
    postalCode: "52341",
    street: "King Abdul Aziz Road"
  },

  {
    slug: "khamis-mushait",
    name: "Khamis Mushait",
    nameAr: "خميس مشيط",
    region: "Asir Province",
    metaTitle: "AC, Plumbing & Solar Services in Khamis Mushait | Miyar Technical Services",
    metaDescription: "Expert AC maintenance, plumbing, and solar installation in Khamis Mushait and southern Asir Province. High-altitude climate specialists for the Khamis Mushait military and residential community.",
    intro: "Khamis Mushait is Asir Province's largest city and a major military hub at 2,100 metres above sea level. Sharing Abha's high-altitude climate but with a larger urban population and a significant military base presence, Khamis Mushait has strong demand for reliable HVAC and plumbing services across a wide range of building types. The city's monsoon-season humidity (June–September), cool winters, and moderate summer temperatures create the same unique climate service requirements as Abha — but at larger scale.",
    ac: {
      headline: "AC & Climate Services in Khamis Mushait",
      body: "Khamis Mushait's summer peak temperatures reach 27–30°C — far more modest than lowland Saudi cities — but the 70–85% relative humidity during monsoon season creates significant thermal discomfort that requires dehumidification-capable AC systems. The city's altitude (2,100m) requires altitude-corrected capacity specifications to ensure systems deliver their rated performance. Our Khamis Mushait team serves residential villas, military housing, government buildings, and the commercial sector across the city.",
      facts: [
        "Altitude-corrected cooling load calculations for 2,100m elevation",
        "Monsoon-season dehumidification mode specification",
        "Military and government building HVAC service available",
        "Reverse-cycle heating for winter nights below 5°C"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Khamis Mushait",
      body: "Khamis Mushait benefits from relatively good water availability from local groundwater and the region's higher rainfall. Plumbing in high-altitude Asir Province faces specific challenges: correct gradient management on rooftop collection systems, proper drainage design for rainfall events, and anti-corrosion specifications that account for the region's volcanic rock geology affecting groundwater chemistry. We service residential villas, commercial buildings, and the military sector with licensed plumbing teams.",
      facts: [
        "Rainfall drainage design for Asir's monsoon-influenced precipitation",
        "Groundwater quality testing and appropriate treatment specification",
        "Military accommodation complex plumbing maintenance contracts",
        "High-altitude pipe gradient calculations for gravity-fed systems"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Khamis Mushait",
      body: "Khamis Mushait receives good solar irradiance (5.2–5.7 kWh/m²/day) from its high-altitude clear skies, though monsoon season cloud cover reduces July–August generation. The cooler ambient temperatures significantly improve panel efficiency compared to lowland installations, and the rainfall provides natural panel cleaning — reducing maintenance costs. We install SEC-approved systems for Khamis Mushait properties and manage Asir Province net metering applications.",
      facts: [
        "Altitude efficiency advantage: 10–14% higher output vs Riyadh ambient temperatures",
        "Monsoon rain natural cleaning reduces annual maintenance costs",
        "SEC Asir Province net metering — full application management",
        "Military housing solar installations where permits allow"
      ]
    },
    faq: [
      {
        question: "Is air conditioning really necessary in Khamis Mushait's mild climate?",
        answer: "For comfort cooling in summer (June–September), yes — not because of extreme heat but because of high humidity. At 27–30°C with 75–85% relative humidity, the heat index (feels-like temperature) reaches 34–37°C, which is uncomfortable for most people. Importantly, an AC system in dehumidification mode provides far more comfort improvement per kWh than simply lowering temperature. Well-specified systems addressing humidity are essential for quality of life in Khamis Mushait's summer."
      },
      {
        question: "What solar yield can I expect in Khamis Mushait?",
        answer: "A 10kWp system in Khamis Mushait generates approximately 14,000–16,000 kWh/year — lower than Riyadh (18,000–20,000 kWh) due to higher latitude, more cloud cover, and shorter peak sun hours, but with the compensating benefit of higher efficiency from cooler operating temperatures. The financial case is slightly less strong than lowland cities (payback 2.5–4 years vs 1.5–2.5 years in Riyadh) but still highly positive."
      },
      {
        question: "How does military base proximity affect service access in Khamis Mushait?",
        answer: "Access to properties within or adjacent to King Khalid Air Base requires advance coordination with base security. We hold the standard contractor clearances required for residential service work in Khamis Mushait's military-adjacent areas and can coordinate access for scheduled maintenance visits. Emergency access to military zones is handled through direct communication with the relevant base administration, which we assist clients in navigating."
      }
    ],
    lat: 18.3066,
    lng: 42.7293,
    postalCode: "62453",
    street: "King Fahd Road"
  },

  {
    slug: "hail",
    name: "Ha'il",
    nameAr: "حائل",
    region: "Ha'il Province",
    metaTitle: "AC, Plumbing & Solar Services in Ha'il | Miyar Technical Services",
    metaDescription: "Professional AC maintenance, plumbing repair, and solar installation in Ha'il. Northern Saudi Arabia specialists serving Al Qadisiyah, Al Aziziyah, Al Hamra, and all Ha'il districts.",
    intro: "Ha'il is the capital of northwestern Saudi Arabia's Ha'il Province — a historic city on the edge of the Nafud desert known for its horse breeding, dates, and as a gateway to the northern regions. The climate is a true continental desert: scorching 46°C summers with intense dust from the adjacent Nafud, and genuinely cold winters that regularly drop to -5°C. Ha'il's growing population, expanding university city, and development as a domestic tourism destination (AMAALA project access, Jubbah rock art UNESCO site) are creating strong demand for quality HVAC and solar services.",
    ac: {
      headline: "AC & Heating Service in Ha'il",
      body: "Ha'il's 46°C summers and -5°C winters require HVAC systems that perform reliably at both extremes. High-ambient inverter units for summer and reverse-cycle heat pump specification for winter make the selection more complex than in most Saudi cities. The Nafud desert's fine sand produces some of the most severe dust storm conditions in Saudi Arabia, requiring vigilant condenser maintenance. We serve residential villas, the university city buildings, and the growing hospitality sector catering to domestic tourists and AMAALA-area visitors.",
      facts: [
        "High-ambient 46°C cooling + reverse-cycle heating to -5°C in single systems",
        "Nafud dust storm response: post-haboob condenser cleaning service",
        "University city and student accommodation HVAC maintenance contracts",
        "New-build AC installation for Ha'il's expanding residential districts"
      ]
    },
    plumbing: {
      headline: "Plumbing Services in Ha'il",
      body: "Ha'il's water supply is primarily from deep groundwater wells in the region, supplemented by water trucking and limited municipal supply expansion. The groundwater has moderate-to-high mineral content, and infrastructure in the city's older residential areas uses the same ageing galvanised steel pipe networks found across Saudi Arabia's pre-2000 residential stock. We serve all plumbing needs from standard residential maintenance to new-build projects and emergency leak detection.",
      facts: [
        "Groundwater quality assessment and treatment recommendations",
        "PPR pipe replacement for ageing galvanised networks",
        "Emergency leak detection for Ha'il's older residential districts",
        "New construction plumbing for university and expansion zone developments"
      ]
    },
    solar: {
      headline: "Solar Panel Installation in Ha'il",
      body: "Ha'il is one of the best solar locations in Saudi Arabia — its northern desert position delivers 6.5–7.0 kWh/m²/day irradiance, matching Riyadh's exceptional yield. The low humidity and clear desert skies maximise generation efficiency, while the colder winters mean panels operate at higher efficiency for several months per year. We install SEC Ha'il Region net metering systems and design off-grid systems for the remote farm and livestock properties of the Ha'il Province.",
      facts: [
        "6.5–7.0 kWh/m²/day — exceptional yield matching Riyadh's best conditions",
        "SEC Ha'il Region net metering full application service",
        "Off-grid solar for remote Ha'il Province farm and livestock properties",
        "Winter efficiency advantage: panels operate in ideal temperature range Oct–Mar"
      ]
    },
    faq: [
      {
        question: "Does Ha'il's cold winter make solar investment less attractive?",
        answer: "No — quite the opposite. Ha'il's cold winters (October–March) actually improve solar output per peak sun hour compared to summer, because panels operate more efficiently at cooler temperatures. While winter days are shorter (reducing daily generation), each hour of winter sunlight produces more power per panel than summer hours at 46°C ambient. On an annual basis, Ha'il's solar yield of 6.5–7.0 kWh/m²/day is among the best in Saudi Arabia, giving payback periods of 1.8–2.5 years."
      },
      {
        question: "What special AC features do I need for Ha'il's cold winters?",
        answer: "For Ha'il's winter temperatures down to -5°C, specify an inverter split AC with a low-ambient heating kit — a crankcase heater and refrigerant charge optimised for low-temperature operation. Standard inverter heat pumps operate in heating mode down to approximately -10°C, which safely covers Ha'il's coldest recorded temperatures. Brands with proven low-ambient performance in Saudi Arabia's northern climate: Daikin (ATKF series), Mitsubishi Electric (MSZ-FH), and Gree (Fairy series)."
      },
      {
        question: "Are there any solar projects near Ha'il I can reference?",
        answer: "The Al Qurayyat solar project (200MW) and Sakaka solar plant (300MW) in the neighboring Al Jawf Province demonstrate the exceptional solar resource available in northern Saudi Arabia. Several Ha'il Province agricultural cooperatives have adopted solar pumping for their wheat and date irrigation, providing accessible local references for off-grid and agricultural solar performance in Ha'il's conditions. We can connect interested clients with these installations for reference visits."
      }
    ],
    lat: 27.5219,
    lng: 41.7057,
    postalCode: "55421",
    street: "King Abdul Aziz Road"
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

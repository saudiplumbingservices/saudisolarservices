export interface Blog {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "AC & HVAC" | "Plumbing" | "Solar Energy";
  categoryColor: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: BlogSection[];
  faq: { question: string; answer: string }[];
}

interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "callout";
  text?: string;
  items?: string[];
}

export const blogs: Blog[] = [
  {
    slug: "dust-storms-ac-riyadh",
    title: "How Dust Storms Destroy Your AC in Riyadh — And How to Prevent It",
    metaTitle: "Dust Storm AC Damage in Riyadh: Prevention & Maintenance Tips | EcoFlow",
    metaDescription: "Riyadh dust storms clog AC filters, block condenser coils, and reduce cooling by 40%. Learn how to protect your split AC with professional maintenance before peak summer.",
    category: "AC & HVAC",
    categoryColor: "#06b6d4",
    date: "June 10, 2025",
    readTime: "6 min read",
    excerpt: "Riyadh experiences some of the world's most intense dust storms (haboobs). Each event forces fine desert particulate deep into your AC system, accelerating wear and slashing cooling output by up to 40%.",
    content: [
      {
        type: "paragraph",
        text: "Every year between March and June, Riyadh and the central provinces of Saudi Arabia face a relentless succession of haboobs — towering walls of desert sand that reduce visibility to near zero within minutes. While residents rush indoors, their air conditioning systems stand exposed on external walls and rooftops, continuously inhaling millions of fine silica particles with every cubic metre of air processed."
      },
      {
        type: "heading",
        text: "What Dust Does to Your AC System"
      },
      {
        type: "paragraph",
        text: "The moment a dust storm passes, the damage has already begun inside your AC unit. Dust accumulates in four critical areas that progressively destroy cooling performance and component lifespan."
      },
      {
        type: "list",
        items: [
          "Air Filters: Within 48 hours of a major haboob, woven filter media can reach 90% blockage capacity. A blocked filter forces the blower motor to work 35% harder, spiking electricity consumption and causing the evaporator coil to freeze.",
          "Evaporator Coil Fins: Fine particles that bypass the filter bond to moist evaporator fins, creating an insulating layer that prevents heat exchange. Even a 1mm dust layer reduces cooling efficiency by 18%.",
          "Condenser Coil (Outdoor Unit): The outdoor condenser must reject heat efficiently. A dust-caked condenser coil causes head pressure to spike, overloading the compressor and dramatically shortening its operational life.",
          "Bearings & Fan Blades: Airborne abrasive silica wears down fan blade surfaces and infiltrates motor bearings, causing vibration and eventual motor failure."
        ]
      },
      {
        type: "heading",
        text: "The Warning Signs Your AC Has Dust Damage"
      },
      {
        type: "list",
        items: [
          "AC runs continuously but room temperature stays above 25°C",
          "Electricity bill increases by 25–40% without change in usage patterns",
          "Unusual rattling or vibration from the indoor unit",
          "Ice forming on the indoor unit copper pipe or evaporator coil",
          "Unpleasant musty or dusty odour from the air vents"
        ]
      },
      {
        type: "heading",
        text: "Saudi-Specific Maintenance Schedule"
      },
      {
        type: "paragraph",
        text: "Standard international maintenance schedules are insufficient for Saudi conditions. Based on our engineering experience across Riyadh, Qassim, and Ha'il, we recommend the following dust-adapted maintenance protocol."
      },
      {
        type: "list",
        items: [
          "Every 2–3 weeks (Summer/Dust Season): Clean and rinse the air filter under running water. Allow to fully dry before reinstalling.",
          "After every major dust storm: Inspect the outdoor condenser coil for visible blockage. Use compressed air to blow from inside out.",
          "Every 3 months: Full professional evaporator coil cleaning using alkaline coil cleaner foam to dissolve bonded dust and biological growth.",
          "Bi-annually (pre-summer & pre-winter): Full service: duct inspection, gas pressure check, electrical connection tightening, and compressor health diagnostics."
        ]
      },
      {
        type: "callout",
        text: "Professional Tip: Install an external pre-filter (also called a weather louvre or sand filter hood) over your outdoor condensing unit. This simple modification reduces condenser dust ingress by 60% and extends compressor life by 3–5 years in high-dust environments like Riyadh."
      }
    ],
    faq: [
      {
        question: "How often should I clean my AC filter in Riyadh?",
        answer: "In Riyadh, AC filters should be cleaned every 2 to 3 weeks during summer and after every dust storm, compared to the monthly cleaning recommended in milder climates. During a severe haboob season, weekly inspection is advisable."
      },
      {
        question: "Can dust permanently damage an AC compressor?",
        answer: "Yes. Sustained operation with a clogged condenser coil causes high-pressure lockout and thermal overload in the compressor. Over multiple seasons, this causes permanent valve failure and refrigerant contamination, requiring full compressor replacement which costs SAR 800–2,500 depending on the unit capacity."
      },
      {
        question: "Is professional AC cleaning worth it in Saudi Arabia?",
        answer: "Absolutely. Studies show that a professionally cleaned AC system in Saudi Arabia consumes 20–35% less electricity than a dust-impacted unit. For a typical family villa running 6 split units, this translates to SAR 300–500 in monthly savings — far exceeding the cost of a SAR 150–250 service visit."
      }
    ]
  },
  {
    slug: "low-water-pressure-saudi-villa",
    title: "Low Water Pressure in Your Saudi Villa? Here Are the Real Causes and Fixes",
    metaTitle: "Low Water Pressure in Saudi Villas: Booster Pump Repair & Solutions | EcoFlow",
    metaDescription: "Discover why Saudi villas lose water pressure: faulty booster dynamos, scaled PPR pipes, hidden leaks. Expert plumbers explain the fix for Riyadh, Jeddah & Dammam.",
    category: "Plumbing",
    categoryColor: "#3b82f6",
    date: "June 8, 2025",
    readTime: "5 min read",
    excerpt: "Weak water flow from your showers or kitchen taps in Saudi Arabia is almost always caused by one of three engineering failures. Understanding which one applies to your villa determines whether the fix costs SAR 50 or SAR 5,000.",
    content: [
      {
        type: "paragraph",
        text: "Low water pressure is one of the most commonly reported residential maintenance problems across Saudi Arabia. Whether you are in a Riyadh compound, a Jeddah beachfront villa, or a Dammam townhouse, insufficient water pressure creates daily frustration and can indicate underlying damage to your plumbing infrastructure."
      },
      {
        type: "heading",
        text: "The Saudi Water Distribution System Explained"
      },
      {
        type: "paragraph",
        text: "Most Saudi residential buildings receive municipal water through a ground-level connection into a main storage tank (khazzan). Water is then pumped up to a rooftop header tank (which stores a day's supply) by an electric booster pump, commonly called a 'dynamo'. Gravity then delivers this elevated water to your taps and appliances. This two-tank system means pressure problems can originate at three different points."
      },
      {
        type: "heading",
        text: "Cause 1: Faulty Booster Pump (Dynamo)"
      },
      {
        type: "paragraph",
        text: "The most common cause of low pressure — particularly if the problem occurred suddenly — is a malfunctioning rooftop booster pump. These pumps run in extreme Saudi heat conditions (rooftop temperatures can exceed 70°C in summer), causing motor winding insulation to degrade and impeller seals to fail. Signs of a failing dynamo include a humming sound without water flow, intermittent pressure drops, and pump that runs continuously without switching off."
      },
      {
        type: "heading",
        text: "Cause 2: Calcium Scale Buildup in Pipes"
      },
      {
        type: "paragraph",
        text: "Saudi municipal water has very high calcium hardness (TDS levels of 400–800 ppm in Riyadh, higher in coastal areas). Over years of hot water use, calcium carbonate deposits build up inside pipes, particularly at elbow joints and inside water heater supply lines, restricting flow diameter by up to 60% in older galvanised steel or CPVC pipe networks."
      },
      {
        type: "callout",
        text: "Did You Know? A pipe with 50% calcium scale buildup delivers only 25% of its original flow rate due to the squared relationship between pipe radius and flow volume (Hagen-Poiseuille Law). This means gradual scale buildup creates a dramatic, sudden-seeming pressure collapse."
      },
      {
        type: "heading",
        text: "Cause 3: Hidden Underground or In-Wall Leak"
      },
      {
        type: "paragraph",
        text: "Concealed leaks continuously bleed pressure from the supply network. A pinhole leak in a buried main supply pipe or inside a bathroom wall can lose 5–20 litres per hour — enough to drop system pressure by 30% while simultaneously causing structural water damage behind tiles and under flooring. These leaks are identified using acoustic sensors and thermal imaging cameras without requiring wall demolition."
      },
      {
        type: "heading",
        text: "Professional Diagnosis: When to Call a Plumber"
      },
      {
        type: "list",
        items: [
          "Pressure drops affect all fixtures simultaneously → likely pump or supply line issue",
          "Only hot water has low pressure → likely scale blockage in water heater supply line",
          "Pressure is good in lower floor but weak upstairs → rooftop tank not filling (pump failure or float valve fault)",
          "Water meter spins when all taps are closed → active leak — call immediately"
        ]
      }
    ],
    faq: [
      {
        question: "How much does booster pump replacement cost in Saudi Arabia?",
        answer: "A standard residential rooftop booster pump replacement in Saudi Arabia costs between SAR 400 and SAR 1,200, including parts and labour. Premium smart inverter pumps with variable speed control and automatic shut-off cost SAR 1,500–2,800 but save significant electricity."
      },
      {
        question: "Can I install a booster pump myself in my Saudi villa?",
        answer: "Not recommended. Improper pump sizing (too high flow rate) can cause water hammer — destructive pressure waves that burst pipe joints. A licensed plumber will calculate the correct pump head pressure and flow rate for your building height and number of bathrooms."
      },
      {
        question: "How do plumbers find hidden leaks without breaking walls?",
        answer: "Professional leak detection in Saudi Arabia uses acoustic correlation sensors (listening for the specific frequency of pressurised water escaping), digital pressure decay testing, and thermal imaging cameras. This allows pinpointing the exact leak location within a 30cm radius without excavation or tile removal."
      }
    ]
  },
  {
    slug: "sec-net-metering-guide-saudi",
    title: "SEC Net Metering in Saudi Arabia: The Complete Homeowner's Guide (2025)",
    metaTitle: "SEC Net Metering 2025: Solar Grid Connection Guide for Saudi Homeowners | EcoFlow",
    metaDescription: "Step-by-step guide to connecting your solar panels to the SEC grid in Saudi Arabia. Eligibility, application, bidirectional metering, and savings calculation explained.",
    category: "Solar Energy",
    categoryColor: "#eab308",
    date: "June 5, 2025",
    readTime: "8 min read",
    excerpt: "Saudi Arabia's net metering program allows homeowners to sell surplus solar electricity back to the national grid. Here is everything you need to know to connect your PV system to the Saudi Electricity Company (SEC) grid in 2025.",
    content: [
      {
        type: "paragraph",
        text: "Saudi Arabia's Vision 2030 renewable energy strategy has set an ambitious target of 50% renewable electricity generation by 2030. As part of this initiative, the Saudi Electricity Company (SEC) has expanded its Net Energy Metering (NEM) program, allowing residential and commercial customers to generate their own solar electricity, consume what they need, and export the surplus back to the national grid in exchange for utility bill credits."
      },
      {
        type: "heading",
        text: "What Is Net Metering and How Does It Work in KSA?"
      },
      {
        type: "paragraph",
        text: "Net metering works through a bidirectional smart electricity meter installed by SEC. During daylight hours, your solar panels generate electricity. What your household consumes is supplied directly from the panels (free electricity). Any surplus generation flows back through the smart meter into the national grid. SEC records this exported energy and credits it against your consumption during night-time or cloudy periods, effectively using the grid as a virtual battery."
      },
      {
        type: "callout",
        text: "Saudi Net Metering Savings Example: A 10kW solar system in Riyadh generates approximately 1,600 kWh per month. A typical villa consumes 1,400 kWh. The 200 kWh surplus is exported to SEC and credited at the current residential tariff. Annual savings can reach SAR 12,000–18,000 depending on tariff tier."
      },
      {
        type: "heading",
        text: "Eligibility Requirements for SEC Net Metering"
      },
      {
        type: "list",
        items: [
          "Active residential or commercial SEC electricity account in your name",
          "Property must be located in an area with SEC distribution infrastructure",
          "Solar PV system must use SEC-approved grid-tie inverters (must comply with SASO/IEC 61727 standards)",
          "System capacity must not exceed your contracted demand capacity (in kVA)",
          "Professional installation by a registered Solar Contractor with MOMRA licensing"
        ]
      },
      {
        type: "heading",
        text: "Step-by-Step SEC Net Metering Application Process"
      },
      {
        type: "list",
        items: [
          "Step 1 - System Design: Your solar contractor prepares a technical design package including single-line diagram, equipment specifications, and site survey.",
          "Step 2 - Submit Pre-Application: Upload documents to the SEC Customer Portal (musaned.com.sa) or visit your regional SEC office.",
          "Step 3 - SEC Technical Review: SEC engineers review the design for grid compatibility (typically 2–4 weeks).",
          "Step 4 - Installation: After approval, your certified installer installs the PV panels, inverter, and isolation switch.",
          "Step 5 - SEC Inspection: An SEC field inspector visits to verify physical installation matches the approved design.",
          "Step 6 - Smart Meter Installation: SEC replaces your existing meter with a bidirectional smart meter at no cost.",
          "Step 7 - Commissioning: System goes live and net metering credits begin appearing on your monthly bill."
        ]
      },
      {
        type: "heading",
        text: "How Much Can You Save with Solar in Saudi Arabia?"
      },
      {
        type: "paragraph",
        text: "Saudi Arabia has some of the highest solar irradiance values globally (5.5–7.0 kWh/m²/day in Riyadh), meaning solar panels here generate significantly more electricity per installed kilowatt than equivalent systems in Europe. A correctly designed 10kW system in Riyadh will generate approximately 18,000–20,000 kWh annually — enough to offset 85–100% of a typical Saudi villa's electricity consumption."
      }
    ],
    faq: [
      {
        question: "How long does SEC net metering approval take in Saudi Arabia?",
        answer: "The complete SEC net metering process from application to active smart meter installation takes between 6 and 14 weeks in most major cities (Riyadh, Jeddah, Dammam). Delays can occur in new residential developments where grid infrastructure upgrade is needed."
      },
      {
        question: "What happens to my excess solar credits in Saudi Arabia?",
        answer: "Surplus monthly credits are carried forward and applied to the next billing cycle. Credits accumulated over a full year may be settled by SEC at the end of the annual reconciliation period. Currently, SEC does not pay cash for surplus energy — credits can only offset future electricity consumption."
      },
      {
        question: "Do I need a battery if I apply for SEC net metering?",
        answer: "No. In a grid-tied net metering setup, the SEC grid acts as your virtual battery — you export surplus during the day and import at night. Adding physical battery storage is optional but provides backup power during grid outages, which are more common in rural areas of KSA."
      }
    ]
  },
  {
    slug: "vrf-vs-split-ac-saudi-villas",
    title: "VRF vs Split AC Systems for Saudi Villas: Which Is Right for You in 2025?",
    metaTitle: "VRF vs Split AC Systems in Saudi Arabia 2025: Cost, Efficiency & Comparison | EcoFlow",
    metaDescription: "Compare Variable Refrigerant Flow (VRF) and split AC systems for Saudi villas. Upfront costs, electricity savings, and which system handles 45°C Saudi summers better.",
    category: "AC & HVAC",
    categoryColor: "#06b6d4",
    date: "June 3, 2025",
    readTime: "7 min read",
    excerpt: "As Saudi villa sizes grow larger, homeowners face a critical HVAC decision: install multiple split ACs in every room, or invest in a single VRF system? The answer depends on villa size, usage patterns, and a long-term cost analysis that most contractors never explain clearly.",
    content: [
      {
        type: "paragraph",
        text: "Saudi Arabia has the highest per-capita air conditioning consumption in the world — understandably so, given summer temperatures that regularly breach 45°C in Riyadh and exceed 38°C with oppressive humidity in Jeddah. Choosing the right HVAC architecture for your villa is not just a comfort decision — it is a significant financial one that will affect your electricity bills for the next 15–20 years."
      },
      {
        type: "heading",
        text: "Understanding Split AC Systems"
      },
      {
        type: "paragraph",
        text: "A conventional split AC system consists of one outdoor condensing unit paired with one indoor evaporator unit. Most Saudi villas use multiple split systems — typically one per bedroom plus units for the living room, majlis, and kitchen. A 400m² villa may have 8–12 individual split units running simultaneously during summer."
      },
      {
        type: "heading",
        text: "Understanding VRF (Variable Refrigerant Flow) Systems"
      },
      {
        type: "paragraph",
        text: "VRF technology uses one or two large outdoor units connected to multiple indoor units (fan coil units) throughout the building via insulated copper refrigerant pipes. An inverter-driven compressor modulates its speed continuously, delivering precisely the amount of refrigerant each indoor zone requires at any given moment. This dynamic matching of supply to demand is what delivers VRF's famous energy efficiency."
      },
      {
        type: "heading",
        text: "Head-to-Head Comparison: Saudi Arabia Context"
      },
      {
        type: "list",
        items: [
          "Upfront Installation Cost: Split ACs (12 units) = SAR 25,000–40,000. VRF System (12 zones) = SAR 55,000–90,000.",
          "Monthly Electricity Consumption: Split ACs = 2,800–3,500 kWh/month. VRF = 1,600–2,100 kWh/month (40% savings).",
          "Payback Period: At current Saudi tariffs, VRF typically pays back its premium cost within 4–6 years through electricity savings.",
          "Noise Level: Split ACs generate audible compressor noise from each outdoor unit. VRF systems centralise noise at one outdoor location, allowing quieter building environments.",
          "Zone Control: Split ACs offer basic on/off control per room. VRF systems integrate with building management systems for per-zone temperature scheduling and occupancy-based automation.",
          "Maintenance: Split ACs require maintenance of every individual unit. VRF requires centralised maintenance of one system, reducing service call frequency."
        ]
      },
      {
        type: "callout",
        text: "VRF systems are most cost-effective for villas larger than 350m² where 8+ indoor zones are needed. For smaller apartments or properties with 3–4 rooms, high-efficiency inverter split ACs from top-tier brands offer the best value without the high VRF installation complexity."
      },
      {
        type: "heading",
        text: "Which System Handles Saudi Heat Better?"
      },
      {
        type: "paragraph",
        text: "Both systems can handle Saudi summer temperatures when properly sized. However, VRF systems have a critical engineering advantage: their inverter compressors maintain operation even when outdoor ambient temperatures exceed 52°C, whereas many entry-level split AC compressors trip on high-pressure lockout above 48°C — precisely when you need cooling most. Premium split AC brands (Daikin, Carrier, Trane) have addressed this with high-ambient variants rated to 54°C."
      }
    ],
    faq: [
      {
        question: "Is VRF air conditioning worth the extra cost in Saudi Arabia?",
        answer: "For villas larger than 350m² with 8 or more air-conditioned zones, yes. The electricity savings of 35–45% compared to conventional split ACs typically recover the additional investment within 4–6 years at current Saudi electricity tariff rates. For smaller properties, inverter split ACs offer better value."
      },
      {
        question: "Can a VRF system be installed in an existing Saudi villa?",
        answer: "Yes, but retrofit installations require careful planning. Refrigerant pipe runs must be routed through walls or ceilings (typically using false ceiling spaces). In fully furnished villas, minor demolition and reinstatement work is required. The process takes 5–10 working days for a typical 4-bedroom villa."
      },
      {
        question: "What brands of VRF are available in Saudi Arabia?",
        answer: "The leading VRF brands available and supported by certified service networks in KSA include Daikin (VRV), Mitsubishi Electric (City Multi), LG (Multi V), Samsung (DVM), and Carrier (i-Vu). Daikin and Mitsubishi Electric are most commonly specified by HVAC consultants for their superior high-ambient performance."
      }
    ]
  },
  {
    slug: "solar-water-heater-saudi-arabia",
    title: "Solar Water Heaters in Saudi Arabia: Electric vs Solar — Which Saves More in 2025?",
    metaTitle: "Solar Water Heater vs Electric Heater in Saudi Arabia 2025 | EcoFlow",
    metaDescription: "Compare solar water heaters vs electric water heaters for Saudi homes. Installation costs, savings, and which system is most reliable during Ramadan and winter in KSA.",
    category: "Solar Energy",
    categoryColor: "#eab308",
    date: "May 30, 2025",
    readTime: "6 min read",
    excerpt: "Saudi Arabia's abundant sunshine makes solar water heating one of the highest-ROI home upgrades available. But not all solar water heater systems perform equally in KSA's extreme climate — and making the wrong choice can cost thousands in premature replacements.",
    content: [
      {
        type: "paragraph",
        text: "Water heating accounts for 15–25% of a typical Saudi household's electricity consumption — making it the second largest energy cost after air conditioning. Given Saudi Arabia receives year-round sunshine averaging 8–10 peak sun hours per day, solar water heating technology is remarkably well-suited to the local climate and can generate significant long-term savings."
      },
      {
        type: "heading",
        text: "Types of Solar Water Heaters Suitable for Saudi Arabia"
      },
      {
        type: "paragraph",
        text: "Not all solar thermal technologies perform equally under Saudi conditions. The two main types available in KSA are flat-plate collectors and evacuated tube collectors, each with distinct performance characteristics relevant to Saudi climate zones."
      },
      {
        type: "list",
        items: [
          "Flat Plate Collectors (FPC): Durable, simple design with a black-coated absorber plate under tempered glass. Performs excellently in Riyadh's dry heat but loses efficiency in Jeddah's higher ambient temperatures due to thermal equilibrium effects. Best for inland, dry climates.",
          "Evacuated Tube Collectors (ETC): Each vacuum-sealed glass tube acts as a thermos, maintaining higher fluid temperatures even in ambient heat exceeding 45°C. Suitable for all Saudi climate zones, particularly coastal humid areas like Jeddah and Dammam.",
          "Heat Pump Water Heaters (Hybrid): Not solar-thermal, but extract heat from ambient air using a refrigeration cycle. Highly efficient (COP 3.0–4.5) in Saudi warm climates where outdoor air is always warm. A modern option for apartments without roof access."
        ]
      },
      {
        type: "heading",
        text: "Cost Comparison: Solar vs Electric Water Heaters in KSA"
      },
      {
        type: "list",
        items: [
          "Standard Electric Water Heater (80L): SAR 300–800 purchase cost. Monthly operating cost: SAR 80–150 (electricity at KSA residential tariffs).",
          "Evacuated Tube Solar Water Heater (150L): SAR 2,500–5,000 installed. Monthly operating cost: SAR 10–20 (backup electric element in winter only).",
          "Payback Period: Solar water heater pays back in 2–4 years through electricity savings alone. Lifespan: 15–20 years vs 7–10 years for electric."
        ]
      },
      {
        type: "heading",
        text: "Special Considerations for Saudi Arabia"
      },
      {
        type: "list",
        items: [
          "Dust Impact: Solar collector glazing must be cleaned regularly (every 2–4 weeks) to maintain efficiency. Automated sprinkler cleaning systems are available for flat rooftop installations.",
          "Water Hardness: Saudi water's high calcium content causes scale buildup inside collector tubes. Installing a magnetic water conditioner on the cold supply inlet significantly reduces scaling.",
          "Ramadan Usage Patterns: Ramadan shifts hot water demand to pre-dawn and post-sunset hours when solar yield is zero. A properly sized thermal storage tank (200L+) bridges this demand gap.",
          "Summer Overheating: In July–August, solar collectors can overheat if the household is away or usage drops. Quality systems include a thermostatic mixing valve and pressure relief to prevent scalding and system damage."
        ]
      },
      {
        type: "callout",
        text: "Best Practice for Saudi Villas: Install a 200–300L evacuated tube solar collector system as the primary heater, with an integrated 2kW electric backup element for pre-dawn Ramadan demand and rare overcast winter days. This hybrid approach achieves 90%+ solar fraction across the year."
      }
    ],
    faq: [
      {
        question: "Do solar water heaters work during Saudi winters?",
        answer: "Yes. Even in Riyadh's coldest months (December–February), solar irradiance remains strong enough to heat water to 45–55°C. The electric backup element only engages on genuinely overcast days, which are rare in central Saudi Arabia. In coastal cities like Jeddah, winter solar performance is even stronger due to minimal cloud cover."
      },
      {
        question: "How large a solar water heater do I need for a Saudi villa?",
        answer: "A standard rule of thumb is 50–75 litres of storage per person per day. For a family of 6 in a Saudi villa, a 300–400L system with 3–4m² of collector area is appropriate. For extended families or high-demand households, 500L+ systems with dual-collector arrays are available."
      },
      {
        question: "Is there a government subsidy for solar water heaters in Saudi Arabia?",
        answer: "As of 2025, there is no direct consumer subsidy for solar thermal water heaters in Saudi Arabia, though the National Renewable Energy Program (NREP) has facilitated commercial-scale incentives. However, several municipalities have approved building code requirements mandating solar water heating in new residential construction in specific zones."
      }
    ]
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

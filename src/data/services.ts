export type ServiceCategory = "ac" | "plumbing" | "solar";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  category: ServiceCategory;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  color: string;
  categoryLabel: string;
  categoryHref: string;
  intro: string;
  offerings: ServiceOffering[];
  process: ServiceStep[];
  pricing: string;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const allServices: ServiceData[] = [

  // ══════════════════════════════════════════════════
  // AC & HVAC
  // ══════════════════════════════════════════════════

  {
    slug: "split-ac-installation",
    category: "ac",
    title: "Split AC Installation & Commissioning",
    metaTitle: "Split AC Installation Saudi Arabia 2026: Cost & Expert Guide | Miyar Technical Services",
    metaDescription: "Professional split AC installation across Saudi Arabia. Correct sizing, copper pipe flaring, pressure testing, and commissioning by SASO-certified HVAC engineers.",
    tagline: "Precision installation from wall bracket to first cool air — by certified HVAC engineers.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "A split AC system is only as good as its installation. Incorrect pipe routing, improper vacuuming, or wrong refrigerant charge — all common shortcuts — cause efficiency loss of 15–30% from day one. Our installations follow SASO and manufacturer specifications precisely: every copper joint is flared and brazed, every system is vacuum-tested to 500 microns, and every unit is commissioned with full refrigerant pressure logging.",
    offerings: [
      { title: "Site Survey & Load Calculation", description: "We calculate the exact cooling load for your room — square footage, insulation, window orientation, occupancy — to specify the correct capacity. Oversized units cycle too fast and fail early; undersized units run non-stop and can't cool." },
      { title: "Bracket & Pipe Routing", description: "Heavy-duty wall brackets rated for 3× unit weight, installed into structural concrete (not just plaster). Copper pipe routing optimised to minimise bends and pipe run length — every metre of unnecessary pipe reduces efficiency." },
      { title: "Copper Pipe Flaring & Brazing", description: "All copper joints flared to ISO 7241 standard and silver-brazed with nitrogen purge running to prevent oxidation inside the copper circuit. This eliminates the pinhole leaks that develop within 2–3 years in poorly installed systems." },
      { title: "Vacuum & Pressure Testing", description: "System evacuated to below 500 microns using a two-stage vacuum pump. Vacuum held for 30 minutes and measured — if it rises, there is a leak. We find and fix it before charging with refrigerant, not after." },
      { title: "Refrigerant Charging & Commissioning", description: "System charged to manufacturer-specified superheat and subcooling values using calibrated manifold gauges. Commissioning report provided with suction/discharge pressures, current draw, and outlet temperature readings." },
      { title: "Electrical Connection & Safety Check", description: "Correct cable sizing, RCD protection, and dedicated circuit breaker installed. All connections torqued to specification and tested under load before handover." },
    ],
    process: [
      { step: "Site Survey", description: "Measure the room, check wall construction, identify cable and pipe routing path, confirm electrical supply capacity." },
      { step: "Bracket & Trunking Install", description: "Install indoor unit bracket, outdoor unit stand or wall bracket, and PVC trunking for cable and pipe runs." },
      { step: "Indoor Unit Mounting", description: "Mount indoor unit, feed copper pipes and drain tube through wall, connect drain to external discharge point with 1/50 slope." },
      { step: "Outdoor Unit Installation", description: "Mount outdoor unit, connect copper pipes, and run electrical cabling. Ensure minimum clearances for airflow per manufacturer spec." },
      { step: "Vacuum & Leak Test", description: "Evacuate system, hold vacuum for 30 minutes, confirm integrity before opening refrigerant service valves." },
      { step: "Commissioning & Handover", description: "Power up, measure operating parameters, demonstrate remote control functions, issue commissioning certificate." },
    ],
    pricing: "1-ton split AC installation: SAR 400–650. 1.5-ton: SAR 500–750. 2-ton: SAR 600–900. Multi-split (per additional indoor unit): SAR 300–500 extra. Prices include labour and standard fittings — excludes unit purchase price and any civil works (core drilling, trunking extension).",
    faq: [
      { question: "How long does a split AC installation take in Saudi Arabia?", answer: "A standard single split unit installation takes 3–5 hours from arrival to commissioning. A villa with 4–6 units takes one full day (8–10 hours) with our 2-person team. We schedule multi-unit installations to minimise disruption to occupied rooms." },
      { question: "What is the correct AC size for my room?", answer: "As a starting rule: 1 ton (12,000 BTU) per 15–18 m² in Saudi Arabia's climate. However, rooms with large west-facing windows, poor insulation, or high occupancy need more capacity. Our free site survey calculates this precisely — avoid oversizing, which causes short-cycling and humidity problems." },
      { question: "Do you install all AC brands in Saudi Arabia?", answer: "Yes. We install Daikin, Mitsubishi Electric, LG, Samsung, Gree, Midea, Carrier, Trane, and all other brands available in the Saudi market. We recommend Daikin and Mitsubishi Electric for their coastal corrosion resistance and long-term reliability in Saudi Arabia's climate." },
      { question: "Is the vacuum testing step really necessary?", answer: "Critical. Skipping vacuum testing is the most common shortcut taken by low-cost installers. A system with moisture in the refrigerant circuit develops acid sludge that destroys the compressor within 2–4 years. Proper vacuum removes all moisture. The 30-minute test adds 45 minutes to the job — it is essential insurance for the system's lifetime." },
    ],
    relatedSlugs: ["ac-maintenance", "refrigerant-recharge", "vrf-central-ac"],
  },

  {
    slug: "ac-repair",
    category: "ac",
    title: "Emergency AC Repair & Diagnostics",
    metaTitle: "Emergency AC Repair Saudi Arabia 2026: 2-Hour Response | Miyar Technical Services",
    metaDescription: "Fast AC repair across Saudi Arabia — 2-hour response, 24/7 availability. Capacitor, compressor, gas leak, fan motor repair by certified HVAC engineers.",
    tagline: "AC breakdown in 47°C Saudi heat? We respond within 2 hours, 24/7.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "An AC failure in Saudi Arabia's summer is a health emergency. Our emergency repair team responds across all major Saudi cities within 2 hours, equipped with the parts most likely needed — capacitors, fan motors, contactors, and refrigerant — to resolve 80% of breakdowns on the first visit. We diagnose systematically before replacing components, so you are never billed for parts that were not needed.",
    offerings: [
      { title: "Capacitor Replacement", description: "Run and start capacitors are the most common cause of AC failure (40% of calls). We carry a full range of capacitor values on every van and typically complete this repair in under 45 minutes." },
      { title: "Refrigerant Leak Detection & Recharge", description: "Electronic leak detection to find the source, brazing or flaring repair, nitrogen pressure test, and refrigerant recharge to precise manufacturer specification." },
      { title: "Compressor Diagnosis & Replacement", description: "Compressor failure testing with megger and current analysis. Replacement with OEM-equivalent units carrying 12-month warranty. We advise honestly on repair vs replacement economics." },
      { title: "Fan Motor Replacement", description: "Outdoor condenser fan and indoor evaporator fan motor replacement. Motor winding resistance testing confirms failure before replacement." },
      { title: "Control Board & PCB Repair", description: "Visual inspection and component-level testing of control boards. Board replacement where repair is not possible — we stock common boards for major brands." },
      { title: "Electrical Fault Diagnosis", description: "Tripped breakers, failed contactors, burnt wiring, capacitor failure — full electrical diagnostic from supply cable to control board." },
    ],
    process: [
      { step: "Emergency Dispatch", description: "Call received, nearest engineer dispatched. ETA confirmed by WhatsApp. Parts loaded based on your described symptoms." },
      { step: "System Diagnosis", description: "Full diagnostic sequence: visual inspection, electrical measurements, refrigerant pressure check, temperature differential test." },
      { step: "Fault Confirmation", description: "We explain the fault and the repair cost before any parts are fitted. No surprise invoices." },
      { step: "Repair Execution", description: "Component replacement, brazing, or electrical repair as needed. System restarted and performance verified." },
      { step: "Post-Repair Check", description: "Measure outlet temperature, current draw, and pressures after repair. Confirm system is operating within specification." },
      { step: "Service Report", description: "Written report issued with fault found, parts fitted, repair date, and 30-day labour warranty on the repair." },
    ],
    pricing: "Emergency call-out (within 2 hours): SAR 100–200 service charge + parts. Capacitor replacement: SAR 150–300 total. Refrigerant leak repair + recharge: SAR 450–900. Fan motor replacement: SAR 300–700. Compressor replacement: SAR 900–3,000 depending on capacity. Evening (after 8pm) surcharge: SAR 100–150.",
    faq: [
      { question: "How fast can you respond to an AC emergency in Riyadh/Jeddah/Dammam?", answer: "Our standard response time is 2 hours during working hours (7am–8pm) across all major Saudi cities. Between 8pm and midnight, response is 2–4 hours. We maintain a night emergency team for critical situations. Compound and annual contract customers receive priority dispatch." },
      { question: "Why does my AC turn on but not cool?", answer: "The three most common causes are: (1) low refrigerant from a leak — the unit runs but cannot transfer heat effectively, (2) severely blocked condenser coil preventing heat rejection, or (3) failed run capacitor causing the compressor to run at reduced efficiency. All three require a technician visit to diagnose — the symptom alone is not enough to distinguish between them." },
      { question: "Do you offer a warranty on AC repairs?", answer: "Yes. All repairs carry a 30-day labour warranty — if the same fault recurs within 30 days, we return free of charge. Parts carry the manufacturer warranty (typically 3–12 months for capacitors and motors, 12 months for compressors). For annual maintenance contract customers, emergency repairs are included in the contract." },
      { question: "My AC compressor is making a loud noise — do I need a replacement?", answer: "Not necessarily. Loud compressor noise can be caused by: loose mounting bolts vibrating against the cabinet (fix: retorque bolts, SAR 100–200), refrigerant overcharge causing liquid slugging (fix: recover excess refrigerant, SAR 300–450), or a genuinely failing compressor (replace). We diagnose before recommending — we will not quote a compressor replacement without confirming the diagnosis with current and pressure readings." },
    ],
    relatedSlugs: ["ac-maintenance", "refrigerant-recharge", "split-ac-installation"],
  },

  {
    slug: "ac-maintenance",
    category: "ac",
    title: "Preventative AC Maintenance Contracts",
    metaTitle: "AC Annual Maintenance Contract Saudi Arabia 2026 | Miyar Technical Services",
    metaDescription: "AC preventative maintenance contracts for Saudi villas, compounds, and commercial buildings. Scheduled service, emergency cover, and documented service reports.",
    tagline: "Stop breakdowns before they happen — with a scheduled annual maintenance programme.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "The difference between an AC that fails on the hottest day in July and one that runs reliably for 15 years is almost entirely in the preventative maintenance programme. Annual maintenance contracts provide scheduled service visits, emergency response priority, and documented equipment history — eliminating the reactive cycle of emergency repairs at premium rates.",
    offerings: [
      { title: "Quarterly Full Service Visit", description: "Full coil clean (evaporator + condenser), filter cleaning, electrical inspection, refrigerant pressure check, drainage clear, and thermostat calibration. Four visits per year — timed to the Saudi seasonal calendar." },
      { title: "Anti-Corrosion Treatment", description: "IHI or equivalent polymer coating applied to condenser fins twice per year — essential for coastal cities (Jeddah, Khobar) and strongly recommended everywhere. Prevents galvanic corrosion that destroys aluminium fins within 3–5 years without protection." },
      { title: "Priority Emergency Response", description: "Contract customers receive priority dispatch ahead of non-contract calls. Guaranteed 2-hour response during business hours. No emergency call-out surcharge — emergency labour included in contract rate." },
      { title: "Capacitor Prophylactic Replacement", description: "Annual capacity testing of all run and start capacitors. Any unit below 90% of rated value is replaced preventatively — the most cost-effective way to eliminate the most common AC failure mode." },
      { title: "Documented Service Reports", description: "After every visit: digital service report with refrigerant pressures, electrical measurements, coil condition ratings, photos, and technician recommendations. Equipment history on file for warranty and resale purposes." },
      { title: "Annual System Health Report", description: "At year-end: comprehensive report on all units — projected remaining life, units recommended for replacement in the next 12 months, and maintenance cost summary for building management." },
    ],
    process: [
      { step: "Site Audit & Quote", description: "Free audit of all AC units. We count units, assess their age and condition, and price an annual contract." },
      { step: "Contract Agreement", description: "Contract signed, payment schedule agreed (monthly, quarterly, or annual). Equipment list registered in our system." },
      { step: "Scheduled Visit Dates Set", description: "Four quarterly visit dates agreed for the year — aligned to Saudi seasons (before summer peak, mid-summer, before winter, mid-winter)." },
      { step: "Service Visits Executed", description: "Each visit: full service of all units per the checklist. Service report issued within 24 hours." },
      { step: "Emergency Response", description: "Any breakdown during the contract year: priority dispatch, emergency labour included in contract rate." },
      { step: "Annual Review", description: "Year-end health report. Contract renewal discussion with any equipment recommendations." },
    ],
    pricing: "Single villa (up to 8 units): SAR 2,800–4,500/year. 10-unit building: SAR 4,500–7,000/year. Compound (20 villas, ~160 units): SAR 55,000–85,000/year. Commercial building (per floor, per unit): SAR 250–400/unit/year. Contracts include 4 service visits, anti-corrosion treatment, priority emergency response, and annual health report.",
    faq: [
      { question: "How much does an annual AC maintenance contract cost in Saudi Arabia?", answer: "For a typical 4-bedroom Saudi villa with 6–8 split AC units, an annual contract costs SAR 2,800–4,500 per year. This covers 4 quarterly service visits, emergency labour for any breakdowns, anti-corrosion treatment, and annual health report. Compared to the cost of a single emergency compressor replacement (SAR 900–3,000), the contract typically pays for itself within the first prevented breakdown." },
      { question: "What is included in a standard AC service visit in the contract?", answer: "Each quarterly visit includes: evaporator coil foaming clean, condenser coil pressure wash, filter cleaning, condensate drain clear, electrical connections inspection and retorque, refrigerant pressure check (not recharge — just monitoring), thermostat calibration check, anti-corrosion coating touch-up, and written service report." },
      { question: "Can I get an AC maintenance contract for my whole compound in Al Khobar?", answer: "Yes — compound maintenance contracts are one of our main service lines in the Eastern Province and Western Region. We provide dedicated technician allocation for large compounds, resident-facing English/Arabic service communication, and monthly management reports. Contact us for a compound-specific pricing schedule." },
      { question: "Do maintenance contracts cover parts replacement?", answer: "Contracts cover labour for all service visits and emergency responses. Parts are charged separately at contract rates (typically 10–15% below standard retail). Some contracts include a small parts allowance (e.g., filters, capacitors under 20 µF) — specify this when discussing the contract scope." },
    ],
    relatedSlugs: ["ac-repair", "split-ac-installation", "duct-cleaning"],
  },

  {
    slug: "vrf-central-ac",
    category: "ac",
    title: "VRF & Central AC Systems for Saudi Villas & Commercial Buildings",
    metaTitle: "VRF Central AC Installation Saudi Arabia 2026: Daikin, Mitsubishi | Miyar Technical Services",
    metaDescription: "VRF (Variable Refrigerant Flow) and central AC system design, installation, and maintenance in Saudi Arabia. Daikin VRV, Mitsubishi City Multi, and LG Multi V certified engineers.",
    tagline: "Multi-zone cooling for large Saudi villas and commercial buildings — one outdoor unit, perfect zoning.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "VRF (Variable Refrigerant Flow) technology is the optimal cooling solution for large Saudi villas, hotels, office buildings, and compounds with multiple zones requiring independent temperature control. A single outdoor unit connects to 8–64 indoor units, each controlled individually, saving 30–40% on electricity versus conventional split system equivalents while eliminating the noise and mechanical complexity of ducted central systems.",
    offerings: [
      { title: "System Design & Load Calculation", description: "Full building load analysis: room-by-room cooling load calculation, pipe network design, indoor unit selection by room function, and outdoor unit capacity sizing with diversity factor. Design submitted to client for approval before procurement." },
      { title: "Daikin VRV System Installation", description: "Factory-certified Daikin VRV IV and VRV 5 system installation. Includes refrigerant pipe brazing, BS EN standards, system charging to Daikin specification, and commissioning with Daikin Service Checker software." },
      { title: "Mitsubishi Electric City Multi", description: "Factory-certified CITY MULTI R2 and R3 installation. Branch controller wiring, centralized controller programming, and AG-150 building management system integration." },
      { title: "LG Multi V & Samsung DVM", description: "LG Multi V5 and Samsung DVM S installation and commissioning. Central controller setup and integration with KNX or BACnet building management if required." },
      { title: "Chilled Water Central AC", description: "Air-cooled or water-cooled chiller plant, AHU design and installation, and 4-pipe fan coil unit systems for large commercial buildings and hotels." },
      { title: "VRF System Maintenance & Diagnostics", description: "Manufacturer-software diagnostics (Daikin Service Checker, Mitsubishi Analyzer), refrigerant circuit health testing, annual performance verification, and emergency call-out with priority response." },
    ],
    process: [
      { step: "Building Survey & Load Calculation", description: "Site visit to survey all rooms, review architectural drawings, assess electrical supply capacity, and calculate cooling loads." },
      { step: "System Design", description: "VRF system designed with pipe network, indoor unit selection and positioning, outdoor unit location, electrical schematic." },
      { step: "Design Review & Approval", description: "Design presented to client with 3D pipe layout, energy consumption estimate, and investment summary." },
      { step: "Equipment Procurement", description: "Equipment ordered from manufacturer-authorised distributor. Lead time: typically 2–4 weeks for standard configurations." },
      { step: "Installation", description: "Indoor unit installation first, pipe network installation, outdoor unit installation, electrical connections, refrigerant charging." },
      { step: "Commissioning & Training", description: "Factory-guided commissioning using manufacturer software. Building management training provided. Commissioning certificate issued." },
    ],
    pricing: "VRF system design and installation is priced per project. Indicative ranges: 8-zone villa VRF system (Daikin or Mitsubishi): SAR 65,000–110,000 installed. 16-zone commercial system: SAR 120,000–200,000. 32-zone hotel/office floor system: SAR 200,000–350,000. Prices include equipment, installation labour, commissioning, and 12-month warranty. Annual maintenance contracts are additional.",
    faq: [
      { question: "Is VRF better than multiple split ACs for a large Saudi villa?", answer: "For villas with 8+ rooms requiring independent temperature control, VRF is superior in three ways: (1) electricity efficiency — VRF compressors modulate speed with demand, saving 30–40% vs fixed-speed splits, (2) aesthetics — no visible outdoor units per floor, pipe runs are concealed, (3) reliability — one premium compressor with a 5-year warranty vs 8+ basic split compressors each needing individual maintenance. The higher upfront cost is recovered in 4–6 years through electricity savings." },
      { question: "Which VRF brand is best for Saudi Arabia — Daikin or Mitsubishi?", answer: "Both are excellent. Daikin VRV has the larger KSA service network with more authorised service centres nationally. Mitsubishi Electric City Multi has a slightly better heat pump efficiency rating and Blue Fin coastal corrosion protection. For coastal properties (Jeddah, Khobar), Mitsubishi's marine protection is marginally better. For inland large-villa installations, both are equivalent in practice." },
      { question: "How long does VRF system installation take for a villa?", answer: "A residential VRF installation for a 5–6 bedroom villa (12–16 indoor units) typically takes 8–12 working days for a complete installation team. This includes refrigerant pipe installation, indoor unit mounting, outdoor unit placement, electrical work, and commissioning. We work around your occupancy schedule." },
      { question: "Can VRF systems be integrated with smart home systems in Saudi Arabia?", answer: "Yes. Daikin VRV and Mitsubishi City Multi both support BACnet, Modbus, and KNX protocol gateways for integration with Crestron, Savant, Control4, and other smart home platforms widely used in Saudi premium villas. We provide the gateway hardware and configuration as part of the installation scope." },
    ],
    relatedSlugs: ["split-ac-installation", "ac-maintenance", "duct-cleaning"],
  },

  {
    slug: "refrigerant-recharge",
    category: "ac",
    title: "AC Refrigerant Recharge & Gas Leak Repair",
    metaTitle: "AC Refrigerant Recharge R410A Saudi Arabia 2026 | Miyar Technical Services",
    metaDescription: "AC refrigerant gas top-up and leak repair for R410A and R22 systems in Saudi Arabia. Electronic leak detection, brazing repair, and correct charge by certified engineers.",
    tagline: "Low refrigerant ruins your AC and your wallet. We find the leak, fix it, and charge correctly.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "Refrigerant does not naturally deplete — if your system is low on gas, it has a leak. Simply topping up refrigerant without finding and fixing the leak is money poured into the atmosphere. We locate every leak with electronic detectors, repair it by brazing or re-flaring, pressure-test the repair, and charge the system to exact manufacturer specification with calibrated manifold gauges. The result lasts — not 6 months until the next top-up.",
    offerings: [
      { title: "Electronic Leak Detection", description: "Heated diode and heated pentode leak detectors sensitive to 5 grams/year — the most precise portable leak detection method available. We test every joint, valve, and penetration in the refrigerant circuit." },
      { title: "Brazing Leak Repair", description: "Silver-phosphor brazing of leaking copper joints under nitrogen purge. This is the permanent repair method — not sealant injection or stop-leak products, which we do not use as they contaminate the system." },
      { title: "Flare Joint Re-Making", description: "Failed or incorrectly made flare joints (at indoor/outdoor unit connections) remade to ISO 7241 standard using calibrated flare tool. The most common site of leak in poorly installed systems." },
      { title: "Refrigerant Recovery & Correct Recharge", description: "Refrigerant recovered into certified cylinder before repair (required by Saudi regulations). System recharged after repair using weighing scale method or superheat/subcooling method — not pressure charts alone." },
      { title: "R410A & R32 Systems", description: "Full service for all modern refrigerants. R22 systems also serviced — we advise on R22 phase-out timelines and retrofit options where appropriate." },
      { title: "Condenser Coil Leak Repair", description: "Hairline cracks in condenser coils (from vibration or corrosion) repaired by TIG welding or coil replacement where welding is not viable." },
    ],
    process: [
      { step: "Initial Diagnosis", description: "Measure suction and discharge pressures with calibrated manifold gauges to confirm refrigerant undercharge before beginning leak search." },
      { step: "Electronic Leak Search", description: "Systematic search of all circuit components: indoor coil, outdoor coil, all joints, service valves, and every accessible copper run section." },
      { step: "Leak Location Confirmation", description: "Confirmed leak location marked. Leak rate estimated. If multiple leaks found, all are documented before repair." },
      { step: "Refrigerant Recovery", description: "Refrigerant recovered to certified cylinder. System depressurised for repair." },
      { step: "Repair & Nitrogen Pressure Test", description: "Brazing or re-flaring repair completed. System pressurised to 350 PSI with dry nitrogen and held for 24 hours for leak verification." },
      { step: "Evacuation & Recharge", description: "System evacuated to below 500 microns. Refrigerant charged to manufacturer specification. Operating parameters logged." },
    ],
    pricing: "Electronic leak detection (diagnostic): SAR 200–350. Minor leak repair (1 joint) + recharge (1 kg R410A): SAR 450–700. Major leak repair (multiple joints or coil) + recharge: SAR 700–1,400. R410A refrigerant: SAR 150–200/kg. R22 refrigerant: SAR 200–300/kg (price rising as supply reduces). Note: we do not charge for refrigerant used in topping-up without confirming a leak is fixed.",
    faq: [
      { question: "How do I know if my AC is low on refrigerant?", answer: "Key signs: (1) AC runs continuously but room doesn't reach setpoint temperature, (2) ice forming on the indoor copper pipe or evaporator coil (counterintuitive but caused by reduced pressure from low charge), (3) suction line feels warmer than normal (should feel cold to the touch), (4) higher than normal electricity consumption without explanation. A technician with manifold gauges can confirm low charge within 5 minutes of arrival." },
      { question: "Can I just top up the gas without finding the leak?", answer: "You can, but it's a false economy. R410A refrigerant costs SAR 150–200/kg, and a typical residential system holds 1.5–3 kg. If a leak causes you to top up every 12–18 months, you spend SAR 250–600 per year indefinitely. Finding and repairing the leak costs SAR 450–1,400 once, and the system runs without further refrigerant cost for its remaining life." },
      { question: "What is the difference between R410A and R22 refrigerant?", answer: "R22 was the standard refrigerant until 2010 and is now being phased out globally due to ozone depletion potential. R410A (and newer R32) replaced it. R22 is still available in Saudi Arabia but at rising prices as supply dwindles. If you have an old R22 system that develops a major leak, we advise: for systems over 10 years old, replace the unit with a new R410A/R32 system rather than repairing the R22 circuit." },
      { question: "Does refrigerant leak endanger my family?", answer: "R410A and R22 are non-toxic at residential indoor concentrations — a slowly leaking system does not create a health hazard in normal conditions. However, if refrigerant leaks into a very small enclosed space (a sealed cupboard or machine room without ventilation) in large quantity, it can displace oxygen. Standard residential leaks in normal rooms pose no health risk but should be repaired to protect the system and the environment." },
    ],
    relatedSlugs: ["ac-repair", "split-ac-installation", "ac-maintenance"],
  },

  {
    slug: "duct-cleaning",
    category: "ac",
    title: "Duct Cleaning & Air Sanitization",
    metaTitle: "AC Duct Cleaning Saudi Arabia 2026: Indoor Air Quality | Miyar Technical Services",
    metaDescription: "Professional duct cleaning and air sanitization in Saudi Arabia. Remove desert dust, mould, and allergens from ducted AC systems. NADCA-method cleaning for Saudi villas and offices.",
    tagline: "Saudi desert dust accumulates in ducts faster than anywhere on earth — clean air starts with clean ducts.",
    color: "#06b6d4",
    categoryLabel: "AC & HVAC",
    categoryHref: "/services/ac",
    intro: "Saudi Arabia's haboob dust storms and continuous sand-laden winds fill AC ductwork with particulate matter at rates 3–4× higher than Europe or North America. Dusty ducts redistribute allergens, bacteria, and fine particulates throughout every room every time the AC runs. For families with respiratory conditions, asthma, or allergies — and for any building that has been closed for several months — duct cleaning is one of the highest-value maintenance investments available.",
    offerings: [
      { title: "HEPA-Vacuum Duct Cleaning", description: "Negative air pressure machine creates vacuum in the duct system while rotary brush agitators loosen compacted dust deposits from duct walls. All dislodged material is captured in HEPA-filtered collection units — not released into the room." },
      { title: "Evaporator Coil Deep Clean", description: "Foaming coil cleaner applied to evaporator coil, allowed to dwell, and rinsed. Removes biofilm, mould spores, and dust that standard filter cleaning misses. The coil is the primary source of indoor air quality problems in ducted systems." },
      { title: "Antimicrobial Sanitization", description: "EPA-registered antimicrobial fogger applied to the internal duct surfaces and coil after cleaning. Eliminates bacteria, mould, and fungi present in the duct biofilm — remains effective for 3–6 months." },
      { title: "Grille & Diffuser Cleaning", description: "All supply and return grilles removed, cleaned in degreasing solution, and reinstalled. Visible grilles are the most obvious indicator of duct cleanliness — and the most frequently neglected." },
      { title: "Filter Replacement", description: "Standard panel filters replaced. HEPA filter upgrades available — we size and retrofit HEPA filter housings into existing duct systems for allergy sufferers." },
      { title: "Indoor Air Quality Report", description: "Before and after particulate count measurements (PM2.5 and PM10) using portable particle counter, with written report showing improvement achieved." },
    ],
    process: [
      { step: "System Inspection", description: "Access panels opened, ductwork inspected with camera probe to assess contamination level and confirm cleaning method." },
      { step: "Duct Sealing & Setup", description: "Supply and return vents sealed. Negative air machine connected to main duct trunk." },
      { step: "Mechanical Agitation", description: "Rotary brush system driven through each duct branch, loosening accumulated deposits into the airstream toward the collection unit." },
      { step: "Coil & Plenum Clean", description: "Air handler opened, evaporator coil cleaned, plenum chamber vacuumed." },
      { step: "Antimicrobial Treatment", description: "Fogged antimicrobial solution applied to all duct surfaces and coil." },
      { step: "System Restart & Air Quality Test", description: "Grilles reinstalled, system restarted, air quality particle count measured and reported." },
    ],
    pricing: "Standard ducted system (4-bedroom villa, 10 vents): SAR 1,200–1,800. Large villa (7+ bedrooms, 20+ vents): SAR 2,200–3,500. Commercial office (per floor): SAR 1,500–3,000. Add HEPA filter retrofit: SAR 400–800. Add antimicrobial fogging only (without mechanical cleaning): SAR 400–600. Air quality report included in all full cleaning packages.",
    faq: [
      { question: "How often should AC ducts be cleaned in Saudi Arabia?", answer: "In Saudi Arabia's dust-intensive environment, we recommend full duct cleaning every 2–3 years for permanently occupied homes, and before re-occupying a property that has been closed for 3+ months. After major construction or renovation (which generates enormous dust volumes), duct cleaning should be done before the system is run normally." },
      { question: "Can dirty ducts cause health problems?", answer: "Yes. Saudi ductwork collects desert dust (fine silica particles — PM2.5 and PM10 fractions), mould spores from condensate moisture on evaporator coils, and bacterial biofilm. In homes with members who have asthma, rhinitis, or dust allergies, contaminated ducts can significantly worsen symptoms. Even for healthy occupants, high airborne particle concentrations increase long-term respiratory health risk." },
      { question: "Is duct cleaning safe for my AC system?", answer: "When done correctly, yes — duct cleaning improves system efficiency by removing the insulating dust layer from coil surfaces (a 0.1mm dust layer reduces coil efficiency by up to 20%). However, aggressive cleaning with incorrect tools can dislodge flexible duct joints or damage coil fins. We use correctly sized brushes and controlled suction to avoid damage — always inspect before cleaning rather than applying maximum agitation." },
      { question: "How can I tell if my ducts need cleaning?", answer: "Visible signs: dust accumulation on supply grilles even immediately after cleaning, musty or stale smell from vents when AC starts, visible dark staining around vent diffusers. Technical signs: reduction in airflow from supply registers, increased filter loading frequency, occupant allergy symptoms worse when AC is running." },
    ],
    relatedSlugs: ["ac-maintenance", "split-ac-installation", "ac-repair"],
  },

  // ══════════════════════════════════════════════════
  // PLUMBING
  // ══════════════════════════════════════════════════

  {
    slug: "leak-detection",
    category: "plumbing",
    title: "Acoustic Leak Detection — Find Hidden Pipe Leaks Without Breaking Walls",
    metaTitle: "Acoustic Leak Detection Saudi Arabia 2026: No-Dig Pipe Leak Finding | Miyar Technical Services",
    metaDescription: "Find hidden pipe leaks without breaking tiles or walls. Acoustic leak detection, thermal imaging, and tracer gas testing in Saudi Arabia by certified plumbing engineers.",
    tagline: "Find the leak before you break a single tile — with acoustic and thermal technology.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "A hidden pipe leak behind tiles or under a slab can run for months before it becomes visible — causing structural damage to walls, promoting mould growth, and driving water bills up by thousands of riyals per year. Our non-destructive leak detection methods find the leak source within 0.5–1.0 metre accuracy, allowing targeted excavation rather than wholesale tile removal across an entire room.",
    offerings: [
      { title: "Acoustic Leak Detection", description: "Ground microphones and acoustic correlators pick up the sound signature of water escaping a pressurised pipe. The correlator compares the sound delay between two measurement points to triangulate the exact leak location in the pipe between them." },
      { title: "Thermal Imaging Survey", description: "FLIR thermal camera shows temperature differentials in walls and floors caused by water movement from a leak. Effective for leaks in hot water pipes (which show clearly as heat signatures) and for leaks below slabs affecting ground-floor surface temperatures." },
      { title: "Tracer Gas Testing", description: "Nitrogen/hydrogen tracer gas injected into the pipe under pressure. Gas escapes at the leak point and diffuses upward through slab or tile to the surface, where it is detected with a hand-held sensor. Accurate to within 30cm." },
      { title: "Pressure Drop Testing", description: "System pressure isolation and monitoring — identifies which circuit (hot, cold, or heating) has the active leak, and which zone it is in. Prerequisite for acoustic detection in systems with multiple circuits." },
      { title: "CCTV Drain Survey", description: "Push-rod camera inspection of drain lines to identify blockages, root intrusion, pipe deformation, or joint failures causing water to escape the drain system and enter the building structure." },
      { title: "Water Meter Test", description: "Boundary isolation test using the water meter to confirm the leak is on the building supply (meter still spinning with all taps closed) versus the mains supply pipe (outside the building)." },
    ],
    process: [
      { step: "Preliminary Isolation", description: "Identify which circuit has the leak through pressure isolation. Confirm the leak is on the building supply, not the municipality main." },
      { step: "Meter Test", description: "Confirm active leak by checking meter rotation with all taps and appliances off." },
      { step: "Acoustic Survey", description: "Ground microphones placed at regular intervals along pipe routes. Acoustic correlator processes data to triangulate leak location." },
      { step: "Thermal Imaging Scan", description: "Scan walls and floors over suspected leak zone for temperature anomaly confirmation." },
      { step: "Tracer Gas Confirmation (if needed)", description: "For leaks in dense concrete or below deep slabs, tracer gas provides centimetre-level accuracy before any excavation." },
      { step: "Report & Repair Recommendation", description: "Written report with leak location marked on a floor plan, recommended excavation scope, and repair method." },
    ],
    pricing: "Acoustic leak detection survey (residential): SAR 350–600. Thermal imaging survey: SAR 400–700 (includes camera calibration and thermal report). Tracer gas test: SAR 500–800 per circuit. Combined full survey (acoustic + thermal): SAR 650–1,000. Detection survey fees are credited against repair invoice if we perform the repair. CCTV drain survey: SAR 400–800.",
    faq: [
      { question: "Can you find a leak without breaking any tiles in my Saudi villa?", answer: "In most cases, yes. Acoustic correlation and thermal imaging together locate the leak with enough accuracy for a single targeted access point rather than removing all tiles. For leaks under thick concrete slabs, tracer gas achieves 20–30cm accuracy so excavation is minimised to the exact leak location. We cannot guarantee zero excavation — but we regularly reduce excavation scope from 'the entire bathroom floor' to 'one 30×30cm tile.'" },
      { question: "My water bill is high but I can't see any leak — could it be underground?", answer: "Yes, very common. A 3mm pinhole in a concealed supply pipe can lose 1,000–3,000 litres per day — 30,000–90,000 litres per month — with no visible wet patch above surface. The water soaks into the slab or soil beneath, sometimes emerging metres away from the leak source. If your meter spins with all taps off, you have an active concealed leak that needs detection." },
      { question: "How accurate is acoustic leak detection in Saudi Arabia?", answer: "Accuracy depends on pipe material and depth. For PPR or copper pipes in concrete slabs at 200–300mm depth, correlation accuracy is typically ±0.5m in a 20m pipe run. For deeper pipes or pipes surrounded by granular backfill (which disperses sound), we add tracer gas to achieve ±0.3m accuracy. For drain leaks (not pressure leaks), CCTV camera provides exact location regardless of depth." },
      { question: "The previous plumber broke the whole bathroom floor to find a leak — why can't you?", answer: "Traditional leak finding was systematic excavation — start at one end and keep going until you find it. Acoustic correlation technology (developed for municipal water networks finding leaks in buried mains) applies the same physics to building pipe networks. The acoustic sensor and signal processing that previously required expensive fixed installation equipment is now available in portable form that we bring to every survey." },
    ],
    relatedSlugs: ["pipe-replacement", "drain-cleaning", "booster-pump"],
  },

  {
    slug: "pipe-replacement",
    category: "plumbing",
    title: "PPR Pipe Replacement & Installation",
    metaTitle: "PPR Pipe Replacement Saudi Arabia 2026: Cost & Complete Guide | Miyar Technical Services",
    metaDescription: "Full hot and cold PPR pipe replacement for Saudi villas and buildings. Eliminate galvanised steel corrosion, calcium scale, and chronic leaks permanently with heat-fusion welded PPR.",
    tagline: "Replace corroding galvanised steel and scale-blocked copper with 50-year-life PPR — permanently.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "Most Saudi villas built before 2005 have galvanised steel or copper supply pipes that are now corroding from the inside out — either from Riyadh's high-TDS groundwater depositing calcium scale, or from the Eastern Province's chloride-rich desalinated water attacking metal directly. PPR (Polypropylene Random Copolymer) pipe is completely immune to both failure modes: it cannot corrode, cannot scale, and has a rated service life of 50 years at Saudi operating conditions. A full PPR replacement eliminates the chronic repair cycle permanently.",
    offerings: [
      { title: "Full Hot & Cold Supply Replacement", description: "All existing galvanised steel or copper supply pipes replaced with PN20-rated PPR pipe (ISO 15874). Heat-fusion welding at every joint — no fittings or adhesives that can leak." },
      { title: "Partial Section Replacement", description: "Targeted replacement of sections showing active corrosion or chronic leaks while retaining serviceable existing pipework. Appropriate where full replacement is not yet economically justified." },
      { title: "Bathroom Branch Replacement", description: "Kitchen and bathroom internal branch replacement — the short runs from riser to fixtures — using PPR or flexible braided stainless hose connections rated for Saudi chloride water." },
      { title: "Civil Works & Reinstatement", description: "Our team handles all required chasing, core drilling, access panel creation, and surface reinstatement — we deliver a finished job, not bare concrete. Tile matching and plaster reinstatement included in scope." },
      { title: "Pressure Testing", description: "All new PPR pipework pressure tested at 1.5× operating pressure for 1 hour before wall reinstatement. Test report issued." },
      { title: "Flushing & Water Quality Test", description: "System flushed before connection to fixtures. Optional water quality test for TDS, hardness, chlorides, and bacterial count." },
    ],
    process: [
      { step: "Site Survey & Design", description: "Existing pipe routes traced, riser and branch layout mapped, access points identified. Replacement design drawn showing new pipe routes." },
      { step: "Isolation & Drain-Down", description: "Building water supply isolated. All pipes drained. Existing pipe removal begins from the top (highest floor) downward." },
      { step: "PPR Pipe Installation", description: "PPR pipe installed in chases and through slabs. All joints heat-fusion welded using calibrated fusion tool — joint temperature logged for quality record." },
      { step: "Pressure Test", description: "System pressurised to 1.5× operating pressure (typically 9 bar). Held for 1 hour — all joints inspected visually during the test." },
      { step: "Civil Reinstatement", description: "Wall chases plastered, tiles replaced, access panels reinstated. Colour match attempted for tile and plaster finishes." },
      { step: "Commissioning & Handover", description: "Water supply reinstated, all fixtures checked, system flushed. As-built drawing and test report issued." },
    ],
    pricing: "Partial section replacement (single bathroom supply branch): SAR 800–2,000. Single floor full replacement (4-bathroom villa): SAR 6,000–12,000. Full 3-floor villa (cold + hot): SAR 14,000–28,000. Prices include PPR material, heat-fusion fittings, labour, basic civil reinstatement, and pressure test report. Tile matching and premium plaster finishes quoted separately.",
    faq: [
      { question: "Why is PPR pipe better than copper or galvanised steel in Saudi Arabia?", answer: "Galvanised steel corrodes from the inside in Saudi water chemistry — the zinc coating fails within 15–25 years, then the steel pipe body rusts through. Copper pipe is attacked by the elevated chloride content in SWCC desalinated water (Eastern Province and Medina) causing pinhole corrosion within 15–20 years. PPR has no metal content to corrode — it is chemically inert to Saudi water chemistry, will not scale, and maintains full bore diameter for 50 years." },
      { question: "How long does full PPR pipe replacement take in a villa?", answer: "A full hot and cold supply replacement for a 4-bedroom, 3-bathroom villa typically takes 5–8 working days with a 3-person team. The building has no running water for 2–3 days during the removal and installation phase — we coordinate timing to minimise disruption and can arrange phased working if the property is occupied." },
      { question: "Does PPR pipe replacement require breaking all the walls and floors?", answer: "Not always. We route new PPR pipes through existing ceiling or void spaces wherever possible, chasing walls only where no alternative route exists. For multi-storey villas, vertical risers are typically routed through cupboards or service cavities without wall chasing. Surface-exposed PPR pipework in utility areas (water heater room, pump room) requires no civil works at all." },
      { question: "Do I need to move out during PPR pipe replacement?", answer: "For occupied villas, we recommend vacating for 3–5 days during the core installation phase (no running water). For phased replacements (floor by floor), occupancy is possible with water interruption limited to working hours. We can maintain a temporary water supply connection to keep bathrooms partially functional during the work if needed." },
    ],
    relatedSlugs: ["leak-detection", "booster-pump", "water-heater"],
  },

  {
    slug: "booster-pump",
    category: "plumbing",
    title: "Booster Pump Installation & Repair",
    metaTitle: "Booster Pump Installation Saudi Arabia 2026: Grundfos, Wilo & Repair | Miyar Technical Services",
    metaDescription: "Rooftop booster pump (dynamo) installation and repair for Saudi villas and buildings. Grundfos, Wilo, and DAB inverter pump supply, installation, and emergency repair.",
    tagline: "Correct pump sizing and inverter technology solve low pressure once and for all.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "The rooftop booster pump (known locally as the 'dynamo') is the heart of every Saudi villa's water supply system. Undersized, ageing, or failed pumps cause persistent low pressure that worsens over time. Replacing a failing or inadequate pump with a correctly sized inverter pump eliminates the problem immediately and provides 30–50% lower electricity consumption than fixed-speed pumps while handling demand fluctuations that would stall a fixed-speed motor.",
    offerings: [
      { title: "Pump Sizing & Selection", description: "Peak demand calculation based on number of bathrooms, expected simultaneous usage, pipe network head loss, and rooftop height. Correct pump specification prevents the common failure of oversizing (pump hunts and short-cycles) or undersizing (pressure inadequate at peak demand)." },
      { title: "Grundfos CM/CME Inverter Installation", description: "Grundfos CM and CME series — the most reliable residential booster pumps in KSA service experience. Variable frequency drive (VFD) modulates motor speed with actual demand. Dry-run protection and built-in pressure monitoring included." },
      { title: "Wilo MVI/SiBoost Installation", description: "Wilo inverter pumps for multi-storey buildings and compounds. SiBoost series provides smart pressure maintenance across variable flow conditions — ideal for compound water distribution systems." },
      { title: "DAB, Pedrollo & Leo Installation", description: "Economy-range installation for standard residential applications where budget is the primary constraint. These brands offer solid reliability at 60–70% of Grundfos/Wilo price." },
      { title: "Emergency Pump Repair", description: "Same-day repair for failed pump motors, pressure vessel replacement, pressure switch calibration, and non-return valve replacement. We carry common pump models on our service vans for direct swap where repair is uneconomical." },
      { title: "Pressure Vessel & System Accessories", description: "Expansion vessel sizing and installation, pressure gauge installation, isolation valves, inlet strainer, and non-return valve — all components of a properly designed pump station." },
    ],
    process: [
      { step: "Demand Analysis", description: "Count bathrooms, identify fixtures, measure existing pressure at ground and top floors, estimate peak simultaneous demand." },
      { step: "Pump Specification", description: "Select pump model, motor size, and pressure setting. Verify electrical supply capacity for new pump." },
      { step: "Old Pump Removal", description: "Isolate water supply, drain tank and pump pipework, disconnect and remove old pump unit." },
      { step: "New Pump Installation", description: "Mount pump, connect inlet and outlet pipework, install isolation valves, pressure vessel, and non-return valve." },
      { step: "Electrical Connection", description: "Connect to dedicated MCB on distribution board. Set inverter parameters for pressure setpoint and dry-run protection." },
      { step: "Commissioning & Pressure Verification", description: "Fill system, start pump, verify pressure at all floors. Set final pressure parameters. Issue installation certificate." },
    ],
    pricing: "Economy pump (DAB/Leo/Pedrollo, fixed speed): SAR 400–700 supply + SAR 300–500 installation. Mid-range inverter (Grundfos CM5/CM10): SAR 900–1,400 supply + SAR 400–600 installation. Premium inverter (Grundfos CME with integrated VFD): SAR 1,400–2,200 supply + SAR 500–700 installation. Large building/compound pump station (Grundfos Hydro MPC): SAR 4,000–12,000 installed. Emergency pump repair: SAR 300–800 + parts.",
    faq: [
      { question: "What pump do you recommend for a 3-floor villa in Riyadh?", answer: "For a standard 3-floor, 4-bedroom villa in Riyadh, we specify a Grundfos CM5-5 or CM10-3 inverter pump (0.75–1.1 kW), matched with a 24-litre pressure vessel. This delivers 40–55 L/min at 3.5–4.5 bar throughout the building. The inverter modulates speed with demand, drawing full power only when multiple taps are open simultaneously — saving 25–35% on pump electricity versus fixed-speed alternatives." },
      { question: "Why does my booster pump keep burning out in the summer?", answer: "The most common causes are: (1) wrong-sized pump running at 100% continuously — remedy is to upsize the pump so it operates at 70–80% of rated flow, (2) dry-run operation due to insufficient tank level or float valve fault — remedy is to install dry-run protection and check tank fill valve, (3) voltage fluctuations in the Saudi grid during peak summer load causing motor overheating — remedy is a dedicated voltage stabiliser on the pump circuit." },
      { question: "Is an inverter pump worth the extra cost in Saudi Arabia?", answer: "For most Saudi buildings, yes. A Grundfos CME inverter pump costs SAR 700–1,000 more than an equivalent fixed-speed pump. It saves 25–35% on pump electricity (typically SAR 600–1,200/year for a villa-sized pump running during Saudi summer peak), lasts 30–50% longer due to reduced thermal stress from variable-speed operation, and eliminates the pressure surges that cause premature tap washer and valve failure in the building. ROI is 1–2 years." },
      { question: "Can I install a variable speed pump on an existing system or do I need new pipework?", answer: "In almost all cases, an inverter pump replaces the existing fixed-speed pump using the same pipe connections. The pump footprint is identical or smaller, and the electrical connection uses the same supply cable (same kW rating). No new pipework is needed. The only exception is if the existing pipe connections use non-standard fittings — we carry a full set of BSP/metric adaptor unions to handle all configurations found in Saudi buildings." },
    ],
    relatedSlugs: ["pipe-replacement", "leak-detection", "water-heater"],
  },

  {
    slug: "water-heater",
    category: "plumbing",
    title: "Water Heater Installation & Repair",
    metaTitle: "Water Heater Installation Saudi Arabia 2026: Electric, Solar & Heat Pump | Miyar Technical Services",
    metaDescription: "Water heater installation and repair in Saudi Arabia. Electric storage, solar thermal, and heat pump water heaters for Saudi villas, apartments, and commercial buildings.",
    tagline: "The right water heater for Saudi Arabia: sized correctly, installed safely, and maintained.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "Saudi Arabia's water heating landscape is changing rapidly — high electricity costs are driving adoption of solar thermal and heat pump water heaters that reduce heating electricity costs by 60–90% versus standard electric storage units. We install all types, correctly sized for Saudi occupancy patterns and peak hot water demand, with safety compliance for the Saudi Building Code's requirements for TPR valves, earthing, and insulated pipework.",
    offerings: [
      { title: "Electric Storage Water Heater", description: "Standard 50–200L electric units from Ariston, Siemens, and EcoStar. Correct sizing based on occupancy, thermostat calibration, TPR valve installation, and earthing continuity verified." },
      { title: "Solar Thermal System", description: "Evacuated tube or flat plate collectors with insulated storage tanks (100–500L). SWCC-approved systems for KSA. Backup electric element included for early morning demand periods or overcast days." },
      { title: "Heat Pump Water Heater", description: "COP 3.5–4.5 heat pump units — extract heat from ambient air to heat water, using 70–75% less electricity than direct electric heating. Suitable for Saudi Arabia's warm climate year-round. Ariston Nuos Primo and Midea heat pump units available." },
      { title: "Tankless (Instantaneous) Heater", description: "Electric or gas instantaneous heaters for kitchens or secondary bathrooms where storage tank space is limited. Gas units require gas supply availability and municipality approval." },
      { title: "Commercial Storage Systems", description: "200–2,000L central hot water plants for apartment buildings, hotels, and offices. Including centralised calorifiers, circulating pump with timer, and insulated distribution pipework." },
      { title: "Water Heater Repair & Descaling", description: "Element replacement, thermostat replacement, anode replacement, and annual descaling (citric acid flush) to restore full element power output reduced by calcium scale." },
    ],
    process: [
      { step: "Hot Water Demand Assessment", description: "Calculate peak hot water demand based on occupancy, number of bathrooms, and usage patterns (shower, bath, prayer washing)." },
      { step: "System Selection", description: "Recommend technology type (electric/solar/heat pump) based on available roof space, budget, and electricity tariff profile." },
      { step: "Installation", description: "Unit mounted, hot and cold connections made, TPR valve and drain installed, pressure reducer fitted if supply pressure exceeds 5 bar." },
      { step: "Electrical / Solar Connection", description: "Dedicated MCB connection for electric units. Evacuated tube collectors mounted and connected for solar units." },
      { step: "Safety Verification", description: "TPR valve function tested, earth continuity measured, thermal expansion vessel pressure checked." },
      { step: "Commissioning & Handover", description: "Temperature setpoint configured (60°C for anti-Legionella compliance), timed boost programmed for solar units, maintenance schedule discussed." },
    ],
    pricing: "50L electric storage installation: SAR 300–500 (unit) + SAR 200–350 (installation). 100L electric: SAR 500–800 + SAR 250–400. Solar thermal (200L, 2 collectors): SAR 4,000–7,000 installed. Heat pump water heater (200L): SAR 3,500–6,000 installed. Water heater descaling service: SAR 200–400. Element replacement: SAR 200–450.",
    faq: [
      { question: "What size water heater do I need for a Saudi villa?", answer: "Standard rule: 50L per adult per day for Saudi Arabia's shower and prayer-washing patterns. A family of 4 needs 200L minimum. For prayer and religious washing (wudhu), where hot water is used more frequently than in Western households, add 20–30% to the calculated volume. For Ramadan months, further increase for pre-dawn Suhoor and evening Iftar demand peaks." },
      { question: "Is a solar water heater worth installing in Saudi Arabia?", answer: "Consistently one of the best investments for Saudi homeowners. Solar irradiance of 5.8–7.0 kWh/m²/day across KSA means a correctly sized solar thermal system achieves 85–95% solar fraction year-round — virtually free hot water except for backup heating on rare cloudy days. A 200L evacuated tube system costs SAR 4,000–7,000 installed and saves SAR 2,500–5,000 per year in electricity, paying back in 1.5–2.5 years." },
      { question: "Why is there no hot water pressure in my villa even though the pump is fine?", answer: "Hot water pressure problems independent of cold water pressure almost always trace to: (1) blocked hot water supply pipe — in Riyadh and Medina, calcium scale in the pipe between the tank and fixtures reduces the internal diameter by 50%+ in 10 years, (2) failed tempering valve or mixing valve — the mixing valve at the tank outlet can fail closed on the hot side, (3) cold inlet pressure reducer on the tank set too low, reducing hot outlet pressure below useful level." },
      { question: "What temperature should I set my water heater in Saudi Arabia?", answer: "60°C for all storage water heaters — this is the minimum temperature for Legionella prevention (Legionella bacteria cannot survive at 60°C). Higher settings waste energy. For heat pump water heaters with a sanitation cycle, set the weekly sanitation temperature to 65°C and the normal setpoint to 55°C to balance efficiency and safety." },
    ],
    relatedSlugs: ["pipe-replacement", "booster-pump", "drain-cleaning"],
  },

  {
    slug: "drain-cleaning",
    category: "plumbing",
    title: "Drain Cleaning & Hydro-Jetting",
    metaTitle: "Drain Cleaning Hydro-Jetting Saudi Arabia 2026 | Miyar Technical Services",
    metaDescription: "Professional drain cleaning, hydro-jetting, and CCTV survey in Saudi Arabia. Clear blocked kitchen drains, main sewer lines, and floor drains across all Saudi cities.",
    tagline: "High-pressure hydro-jetting clears what rods cannot — including hardened grease and calcium scale.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "Saudi Arabia's drainage infrastructure faces high-concentration challenges: cooking oil from traditional cuisine entering residential kitchen drains, calcium from hard Riyadh groundwater depositing inside drain pipes, and sand and silt entering external drainage from wind-blown desert particulate. Standard drain rods dislodge soft blockages but cannot clear hardened grease deposits or calcium scale — only high-pressure hydro-jetting (3,000–4,000 PSI) cuts through these materials to restore full drain bore.",
    offerings: [
      { title: "Kitchen Drain Grease Clearing", description: "Hydro-jet with rotating nozzle at 3,500 PSI cuts through solidified cooking oil and grease deposits that build up in kitchen drain lines over years. The rotating action cleans the full pipe circumference, not just a channel through the middle." },
      { title: "Main Sewer Line Jetting", description: "High-pressure jetting of main sewer lines (100–150mm) clearing calcium carbonate scale, grease, and accumulated solids. Pre and post CCTV survey to confirm clearance and identify any structural issues." },
      { title: "Floor Drain Clearing", description: "Bathroom and utility room floor drain clearing — often blocked with hair, soap scum, and calcium deposits. Mechanical snake or hydro-jet depending on blockage type." },
      { title: "Outdoor & Storm Drain Clearing", description: "Perimeter drainage channels, outdoor gully traps, and car park drains cleared of sand, silt, and leaf debris accumulation. Critical pre-rain season maintenance in Jeddah." },
      { title: "CCTV Drain Survey", description: "Push-rod camera inspection of all drain diameters. Real-time video shown to client. Report with footage identifies blockages, roots, deformed pipe, and incorrect gradients." },
      { title: "Grease Trap Cleaning", description: "Restaurant and commercial kitchen grease trap pump-out and cleaning. Regular scheduled service to prevent grease trap overflow contaminating the drain network." },
    ],
    process: [
      { step: "Drain Assessment", description: "Identify affected drains, locate cleanout access points, assess blockage nature (grease, scale, physical obstruction)." },
      { step: "CCTV Survey (if needed)", description: "Camera inspection from nearest cleanout or manhole confirms blockage location and drain condition." },
      { step: "Hydro-Jet Setup", description: "High-pressure unit (3,000–4,000 PSI, 25 L/min) set up. Correct nozzle selected for pipe diameter and blockage type." },
      { step: "Jetting", description: "Jetting hose fed into drain from downstream cleanout, pulled upstream against flow direction. Rotating nozzle cleans full pipe bore as it travels." },
      { step: "Post-Jet Inspection", description: "CCTV or flush test confirms drain is clear. Debris flushed to nearest manhole." },
      { step: "Report & Preventative Advice", description: "Service report issued. Maintenance interval recommendation based on drain condition found." },
    ],
    pricing: "Kitchen drain clearing (under 10m): SAR 200–400. Blocked main sewer line (10–30m): SAR 400–800. Hydro-jet + CCTV survey: SAR 600–1,200. Outdoor perimeter drain clearing: SAR 300–600. Grease trap pump-out (under 500L): SAR 400–800. Emergency same-day response surcharge: SAR 100–200.",
    faq: [
      { question: "Why does the kitchen drain block repeatedly even after clearing it?", answer: "Repeated kitchen drain blockage indicates a structural grease deposit in the drain — typically a section where grease has hardened into a solid ring on the inside of the pipe, narrowing the bore to 20–30% of its original diameter. Rod clearing punches a channel through but doesn't remove the ring. Hydro-jetting at 3,500+ PSI is required to cut the grease deposit away from the pipe wall and restore full bore. After full jetting, the drain should not reblock for 12–18 months with normal usage." },
      { question: "How often should the main sewer drain be cleaned preventatively in a Saudi villa?", answer: "For a typical family villa: annual hydro-jetting of the main sewer line (from house to street manhole) is sufficient maintenance. For properties with large fig or palm trees close to drain lines, roots can enter pipe joints and should be surveyed every 2 years. For Jeddah properties with a history of flooding, pre-rain season jetting in October–November is strongly recommended." },
      { question: "Can drain blocking cause damage beyond just a blocked sink?", answer: "Yes. A fully blocked main drain causes drain back-pressure that pushes effluent up through floor drains and WC pans in lower floors — the lowest fixture in the system is where the overflow occurs first. In buildings with basement or ground-floor apartments, main drain blockage above can flood the lower units with wastewater. Beyond the immediate overflow, sustained drain back-pressure can crack old drain pipes at joints." },
      { question: "What is hydro-jetting and is it safe for my Saudi villa's drainage pipes?", answer: "Hydro-jetting uses water pressure (3,000–4,000 PSI) to cut through blockages. It is safe for all standard drain pipe materials: PVC, UPVC, vitrified clay (terracotta), and cast iron. For old grey clay pipes that are already cracked or deformed, hydro-jetting pressure can cause further damage — which is why we recommend a CCTV survey before jetting older pipe systems, to identify fragile sections that need jetting at reduced pressure or pipe replacement rather than jetting." },
    ],
    relatedSlugs: ["leak-detection", "pipe-replacement", "bathroom-fitting"],
  },

  {
    slug: "bathroom-fitting",
    category: "plumbing",
    title: "Bathroom & Kitchen Fitting Installation",
    metaTitle: "Bathroom & Kitchen Fitting Installation Saudi Arabia 2026 | Miyar Technical Services",
    metaDescription: "Professional bathroom and kitchen plumbing fitting installation in Saudi Arabia. Taps, showers, bidets, WC, bathtubs, and kitchen sinks fitted by certified plumbers.",
    tagline: "New fittings, perfectly installed — with the right connections for Saudi Arabia's water chemistry.",
    color: "#3b82f6",
    categoryLabel: "Plumbing",
    categoryHref: "/services/plumbing",
    intro: "Bathroom and kitchen fitting installation seems straightforward but has a specific set of failure points in Saudi Arabia: the wrong flexible connection hose, an incompatible fitting material for local water chemistry, or an incorrectly set thermostatic shower valve. We install all fitting types — from standard Saudi market brands to premium Grohe, Hansgrohe, and American Standard — with the correct materials for Saudi Arabia's hard and chloride-rich water.",
    offerings: [
      { title: "Tap & Basin Installation", description: "Basin mixer taps, single-lever kitchen taps, pillar taps. Correct ceramic disc cartridge specification for Saudi water chemistry — we do not install rubber washer taps, which require frequent re-washering in Saudi conditions." },
      { title: "Shower System Installation", description: "Concealed or exposed thermostatic shower valves, overhead rain showers, body jets, and handheld showers. Thermostatic valve calibration and anti-scald temperature setting." },
      { title: "WC & Bidet Suite Installation", description: "Close-coupled, back-to-wall, and wall-hung WC suites. Japanese bidet seat (Toto, Duravit) and traditional bidet installation. In-wall cistern fitting within pre-installed Geberit or Grohe framing." },
      { title: "Bathtub & Shower Tray Installation", description: "Freestanding and built-in bath installation, waste fitting, overflow connection, and chrome bath mixer fitting. Level and waterproofed shower tray with correctly graded linear drain." },
      { title: "Kitchen Sink & Waste Disposal", description: "Under-mount and top-mount sink fitting, waste disposal unit installation, dishwasher connection, and kitchen mixer tap installation with pull-out spray." },
      { title: "Flexible Connection Upgrade", description: "Replace failed or ageing rubber flexible hoses with braided stainless steel flexible connections (rated 10 bar, chloride resistant) at all under-sink, under-WC, and appliance connections." },
    ],
    process: [
      { step: "Supply & Drain Survey", description: "Confirm supply pipe sizes, isolation valve positions, and drain connection points before fitting ordering." },
      { step: "Old Fitting Removal", description: "Isolate supply, remove old fitting, clean surfaces, check sub-surface condition." },
      { step: "New Fitting Installation", description: "Install new fitting per manufacturer instructions. PTFE thread sealing on all threaded connections. Correct torque on compression fittings." },
      { step: "Connection & Seal", description: "Connect supply flexible hoses, waste trap and drain connection. Apply silicone seal at fitting-to-surface joint." },
      { step: "Pressure & Leak Test", description: "Supply restored, all connections checked under pressure. Drain function verified with water flow test." },
      { step: "Commissioning & Cleaning", description: "Thermostatic temperature verified, installation area cleaned. Fitting warranty card registered." },
    ],
    pricing: "Basin tap installation: SAR 100–200. Thermostatic shower valve installation: SAR 300–600. WC suite installation: SAR 200–500. Bathtub fitting: SAR 400–800. Kitchen sink installation: SAR 200–400. Flexible connection replacement (per fitting): SAR 80–150. Grohe/Hansgrohe premium fitting installation (per item): SAR 150–400 labour additional to standard rates.",
    faq: [
      { question: "Why do flexible hose connections under the sink keep failing in Saudi Arabia?", answer: "Standard rubber flexible hoses (the grey or white braided type commonly used in Saudi plumbing) have a rated service life of 5–7 years under ideal conditions. In Saudi Arabia's hard water (Riyadh) or high-chloride water (Eastern Province), the rubber inner tube degrades faster — the polymer is attacked by residual chlorine in treated water. Braided stainless outer hoses with EPDM rubber inner liners rated for 10+ years in chlorinated water are the correct specification for Saudi conditions." },
      { question: "Which tap brand is best for Saudi Arabia?", answer: "Grohe and Hansgrohe (both German brands, widely available in KSA through Al Babtain and other distributors) are our first recommendation — their ceramic disc cartridges and chrome finishes are formulated for hard water. For more affordable options, Roca and Ideal Standard perform well. Avoid very low-cost Chinese brands with no warranty — ceramic discs in these brands typically fail within 2–3 years in Saudi conditions, and replacement cartridges are often unavailable." },
      { question: "Can you install Japanese smart bidet seats in Saudi Arabia?", answer: "Yes. Toto Washlet and equivalent Japanese smart bidet seats are increasingly popular in Saudi premium villas. They require a nearby 220V power outlet, a cold water supply connection, and a drain. We install Toto, Duravit SensoWash, and compatible third-party units. Installation typically takes 1–2 hours per unit. The warm water wash function is particularly valued for prayer and hygiene requirements." },
      { question: "Why is my new tap dripping after installation?", answer: "A dripping new tap almost always indicates either: (1) ceramic disc contamination during installation — sand or calcium particle trapped between the discs causes them not to seat fully (fix: disassemble, clean disc faces, reassemble), or (2) excessive mains pressure (above 5 bar) forcing the disc open slightly (fix: install pressure reducer on the supply — a standard solution in Saudi buildings where mains pressure often exceeds 5 bar)." },
    ],
    relatedSlugs: ["pipe-replacement", "drain-cleaning", "water-heater"],
  },

  // ══════════════════════════════════════════════════
  // SOLAR
  // ══════════════════════════════════════════════════

  {
    slug: "solar-installation",
    category: "solar",
    title: "Grid-Tied Solar Panel Installation in Saudi Arabia",
    metaTitle: "Solar Panel Installation Saudi Arabia 2026: Cost, ROI & SEC Guide | Miyar Technical Services",
    metaDescription: "Complete grid-tied solar installation in Saudi Arabia. SEC-certified design, Tier-1 panels, string inverters, and net metering application handled end-to-end.",
    tagline: "From site survey to first kWh — end-to-end solar installation by SEC-certified engineers.",
    color: "#eab308",
    categoryLabel: "Solar Energy",
    categoryHref: "/services/solar",
    intro: "Saudi Arabia has the highest solar irradiance of any major economy in the world — 5.8–7.0 kWh/m²/day depending on city and season. A grid-tied solar system allows your villa or commercial building to generate electricity during the day, export excess to the SEC grid for credit, and draw from the grid at night. Correctly designed and installed, a 10–15 kWp residential system eliminates 70–90% of your KAHRABA bill within 2–3 years of installation cost recovery.",
    offerings: [
      { title: "System Design & Feasibility Study", description: "Roof survey, shading analysis, consumption profile review, system sizing, 3D panel layout, projected annual generation, ROI analysis, and SEC connection feasibility — all compiled into a written feasibility report before you commit." },
      { title: "Tier-1 Panel Supply & Installation", description: "LONGi Hi-MO 7, Jinko Tiger Neo, REC Alpha, or JA Solar N-Type TOPCon panels — all from the Bloomberg Tier-1 bankable manufacturer list. Aluminium mounting frames, stainless or anodised marine-grade hardware for coastal properties." },
      { title: "String Inverter & Optimiser Installation", description: "Huawei SUN2000, SMA Sunny Boy, and Sungrow SG string inverters. SolarEdge HD-Wave with power optimisers for roofs with partial shading. Correct inverter sizing and string configuration per IEC 62109." },
      { title: "DC/AC Cabling & Combiner Box", description: "UV-resistant solar DC cable (TÜV 2Pfg1169 specification), correctly sized string combiners with fused DC isolators, and AC disconnect switches. All cabling in conduit or cable tray — no exposed cable runs." },
      { title: "SEC Net Metering Application", description: "Full SEC net metering application management: technical design submission, coordination with SEC regional office, smart meter installation scheduling. We manage the process from submission to active net metering." },
      { title: "System Commissioning & Monitoring Setup", description: "Inverter commissioning, yield verification against design estimate, SolarEdge/Huawei monitoring app setup, and commissioning certificate with measured performance data." },
    ],
    process: [
      { step: "Free Site Survey & Feasibility", description: "Roof survey, shading analysis, meter reading review, SEC connection check. Written feasibility report within 3 business days." },
      { step: "System Design", description: "Panel layout, string configuration, inverter selection, cable routing design, SEC single-line diagram." },
      { step: "SEC Application Submission", description: "Technical documents submitted to SEC regional office. Application status tracked weekly." },
      { step: "Equipment Procurement", description: "Panels and inverter ordered from manufacturer/authorised distributor. Lead time: 1–3 weeks." },
      { step: "Installation", description: "Mounting structure installation, panel placement, DC and AC cabling, inverter installation, connection to distribution board." },
      { step: "SEC Inspection & Smart Meter", description: "SEC engineer visits for inspection. Smart meter installed by SEC. System commissioned and monitoring app set up." },
    ],
    pricing: "5kWp residential system: SAR 16,000–24,000. 10kWp residential system: SAR 28,000–40,000. 15kWp residential system: SAR 40,000–58,000. 20kWp commercial system: SAR 55,000–80,000. Prices include panels, inverter, mounting, DC/AC cabling, installation labour, and SEC application management. Monitoring equipment included. Annual savings on a 10kWp Riyadh system: SAR 16,000–22,000.",
    faq: [
      { question: "How long does the SEC net metering process take in Saudi Arabia?", answer: "The complete process from application submission to active smart meter typically takes 8–14 weeks for most KSA cities: 2–4 weeks for SEC technical review, 1–2 weeks for approval and installation scheduling, and 2–4 weeks for smart meter installation coordination. The Eastern Province (SEC Eastern Region) and Western Province (SEC Western Region) tend to be faster than Central Region for straightforward residential applications." },
      { question: "What is the ROI on a solar installation in Saudi Arabia?", answer: "For a 10kWp system in Riyadh (installed cost SAR 32,000–38,000): annual generation 19,000–21,000 kWh, annual electricity savings SAR 15,000–22,000, payback period 1.8–2.8 years. For Medina (higher irradiance at altitude): payback of 1.6–2.4 years. For coastal Jeddah (slightly lower irradiance, higher hardware cost for marine grade): payback 2.5–3.5 years. These are among the fastest solar payback periods anywhere in the world." },
      { question: "Can I install solar on a rented villa in Saudi Arabia?", answer: "Possible but requires landlord written consent, as the system is a permanent structural modification. SEC net metering registration is also in the property owner's name. For tenants, the practical solution is to negotiate a long-term tenancy agreement (3+ years) that includes landlord approval for solar installation, with an agreed framework for handling the system at lease end. We can provide the template documentation for this negotiation." },
      { question: "Do solar panels in Saudi Arabia require planning permission?", answer: "For most residential properties, SEC net metering approval is the main regulatory requirement — this covers the electrical connection approval. Municipality planning permission is not generally required for roof-mounted solar panels on single-family villas. Properties in controlled aesthetic zones around Al Masjid Al Haram or Al Masjid An Nabawi require additional architectural review. We confirm permitting requirements as part of the free feasibility assessment." },
    ],
    relatedSlugs: ["sec-net-metering", "battery-storage", "solar-panel-cleaning"],
  },

  {
    slug: "sec-net-metering",
    category: "solar",
    title: "SEC Net Metering Application & Grid Connection",
    metaTitle: "SEC Net Metering Saudi Arabia 2026: Application Guide | Miyar Technical Services",
    metaDescription: "SEC net metering application management for solar systems in Saudi Arabia. We handle the entire process — technical design, submission, SEC coordination, and smart meter installation.",
    tagline: "We manage your entire SEC net metering application — you focus on using the savings.",
    color: "#eab308",
    categoryLabel: "Solar Energy",
    categoryHref: "/services/solar",
    intro: "The Saudi Electricity Company's net metering programme allows solar system owners to export excess electricity to the grid and receive equivalent credits against their consumption — effectively using the grid as a free battery. The application process is multi-step and requires specific technical documentation that must meet SEC standards. We prepare and submit every document, track your application status, and coordinate the smart meter installation — so the process requires minimum involvement from you.",
    offerings: [
      { title: "SEC Technical Design Package", description: "Complete technical documentation package per SEC requirements: single-line electrical diagram, site plan, panel layout drawing, inverter specification, protection relay settings, system generation estimate, and building electrical assessment." },
      { title: "Application Submission & Tracking", description: "Submission to the correct SEC regional office (Central, Western, Eastern, Southern, or Northern). Weekly status tracking. Direct liaison with SEC technical reviewers to resolve any queries that would otherwise cause delays." },
      { title: "SEC Pre-Inspection Preparation", description: "Preparation of the system for SEC site inspection: labelling of all components, confirmation of protection relay settings, verification of AC disconnect switch accessibility, and coordination of inspection date." },
      { title: "Smart Meter Coordination", description: "Coordination with SEC metering department for smart meter installation scheduling. Bidirectional smart meter records both import (from grid) and export (to grid) — net metering calculation applied on your monthly bill." },
      { title: "Certificate of Connection", description: "SEC Certificate of No Objection and Connection Agreement documentation handled. These are required by some municipal authorities and homeowner associations before installation can proceed." },
      { title: "Existing System Registration", description: "For systems already installed without net metering approval, we prepare and submit retrospective applications to bring unregistered systems into the SEC net metering programme." },
    ],
    process: [
      { step: "Document Preparation", description: "Prepare full technical design package per SEC current requirements for the applicable regional office." },
      { step: "Application Submission", description: "Submit to SEC online portal and regional office. Receive application reference number." },
      { step: "SEC Technical Review", description: "SEC reviews technical documents (2–4 weeks). We respond to any clarification requests within 24 hours to prevent delays." },
      { step: "Installation Approval", description: "SEC issues installation approval. System installation proceeds (if not already installed)." },
      { step: "Post-Installation Inspection", description: "SEC engineer visits property for compliance inspection. We attend the inspection and resolve any punch list items immediately." },
      { step: "Smart Meter Installation", description: "SEC metering team installs bidirectional smart meter. First net metering bill cycle begins." },
    ],
    pricing: "SEC net metering application management (included with system installation): SAR 0. Standalone net metering application for self-installed or other-contractor systems: SAR 2,000–4,000 depending on system size and region. Retrospective registration for unregistered existing systems: SAR 2,500–5,000. Application timeline: 8–14 weeks (cannot be shortened below SEC's minimum review period).",
    faq: [
      { question: "What documents does SEC require for a net metering application?", answer: "SEC requires: (1) single-line electrical diagram showing the PV system, inverter, AC disconnect, and connection to the distribution board, (2) site layout drawing showing panel positions on roof, (3) inverter specification sheet confirming anti-islanding protection certification, (4) system generation estimate (kWh/year), (5) completed SEC application form signed by the property owner, (6) copy of electricity account details. We prepare all of these as standard." },
      { question: "Can I submit the SEC net metering application myself?", answer: "Technically yes — the SEC portal accepts applications from property owners. However, the technical documentation requirements (single-line diagram to SEC standards, protection relay settings, anti-islanding certification references) require electrical engineering knowledge to prepare correctly. Incorrect applications are rejected, requiring resubmission that adds 4–6 weeks. We prepare correct applications the first time." },
      { question: "Does SEC net metering work the same in all Saudi cities?", answer: "The process is standardised nationally, but execution speed and specific requirements vary by SEC regional office. Eastern Region (Dammam) is generally fastest. Western Region (Jeddah) has the most experience with residential applications. Central Region (Riyadh) has the highest volume of applications — allowing for standard approvals but sometimes slower response on queries. We know each regional office's preferences and format our applications accordingly." },
      { question: "What happens to my net metering credits if I export more than I import?", answer: "Under the current SEC net metering framework, excess export credits can be carried forward to the next billing cycle — they do not expire within the same billing year. If you consistently export more than you import (system is oversized for your consumption), the unused credits accumulate. SEC does not currently pay cash for excess generation at residential scale — oversizing the system beyond your consumption profile does not increase your financial return." },
    ],
    relatedSlugs: ["solar-installation", "battery-storage", "solar-panel-cleaning"],
  },

  {
    slug: "battery-storage",
    category: "solar",
    title: "Solar Battery Storage Systems in Saudi Arabia",
    metaTitle: "Solar Battery Storage Saudi Arabia 2026: Huawei LUNA, BYD & Cost | Miyar Technical Services",
    metaDescription: "Solar battery storage installation in Saudi Arabia. Huawei LUNA2000, BYD Battery-Box, and hybrid inverter systems for energy independence and backup power.",
    tagline: "Store your solar energy for the night — and stay powered during grid outages.",
    color: "#eab308",
    categoryLabel: "Solar Energy",
    categoryHref: "/services/solar",
    intro: "Grid-tied solar generates power only when the sun shines — which does not always align with peak consumption (evening AC and lighting load). Battery storage captures excess daytime solar energy and releases it during the evening, significantly increasing self-consumption and providing genuine power backup when the Saudi grid experiences outages. In Al Khobar and coastal cities where summer thunderstorms cause brief outages, and in areas with grid reliability concerns, battery backup transforms solar from an electricity cost reducer to a resilience asset.",
    offerings: [
      { title: "Huawei LUNA2000 Battery System", description: "Lithium iron phosphate (LFP) chemistry, modular 5kWh units stackable to 30kWh per string. Pairs with Huawei SUN2000 hybrid inverter. 10-year warranty with intelligent battery management. Industry-leading cell quality and BMS software." },
      { title: "BYD Battery-Box Premium HVS/HVM", description: "BYD LFP high-voltage battery (100–400V range) compatible with multiple inverter brands. HVS series for small-medium residential (2.56–10.24 kWh), HVM for larger installations (8.96–22.4 kWh). 10-year warranty." },
      { title: "Hybrid Inverter Upgrade", description: "If you have an existing grid-tied system with a standard string inverter, upgrade to a hybrid inverter (Huawei SUN2000-M2, Sungrow SH series) to enable battery integration. The battery can then be added at any point without replacing panels." },
      { title: "Load Analysis & Battery Sizing", description: "Analysis of your consumption patterns, prioritised backup loads (essential circuits: bedroom AC, lighting, Wi-Fi, kitchen), and battery capacity sizing to cover essential loads for 6–10 hours." },
      { title: "Essential Loads Backup Panel", description: "Installation of a dedicated essential loads sub-panel that is backed up by battery and solar. Keeps priority circuits running during grid outage without powering the full building load (which would drain battery in 2–3 hours)." },
      { title: "Monitoring & Remote Management", description: "Battery system monitoring through Huawei FusionSolar or SolarEdge Energy Hub app — real-time state of charge, charge/discharge history, grid import/export, and battery health reporting." },
    ],
    process: [
      { step: "Load Profile Analysis", description: "Review electricity bills, identify evening consumption peak, list essential backup loads." },
      { step: "Battery Sizing", description: "Calculate required battery capacity for target backup duration of priority loads." },
      { step: "Inverter Compatibility Check", description: "Assess whether existing inverter supports battery addition or requires replacement." },
      { step: "Installation", description: "Battery modules mounted, DC connections to inverter, essential loads panel installed, communication cables connected." },
      { step: "BMS Configuration", description: "Battery management system programmed: charge/discharge schedule, backup mode trigger, minimum SOC level." },
      { step: "Testing & Commissioning", description: "Simulate grid outage to verify backup function. Verify monitoring app reporting. Issue system commissioning certificate." },
    ],
    pricing: "5kWh Huawei LUNA2000 module: SAR 8,000–10,000 (hardware). 10kWh system (2 modules): SAR 15,000–20,000. 15kWh system: SAR 22,000–30,000. Hybrid inverter upgrade (if needed): SAR 5,000–9,000. Essential loads panel: SAR 1,500–3,000. Full 10kWp solar + 10kWh battery turnkey: SAR 55,000–75,000 installed. Battery payback: 8–12 years on electricity savings alone (shorter if grid outage resilience has high value to you).",
    faq: [
      { question: "How many hours of backup power does a 10kWh battery provide in a Saudi villa?", answer: "With essential loads only (2 bedroom ACs at 1.5 ton each = ~1.6 kW total, LED lighting = 0.3 kW, Wi-Fi and security = 0.2 kW = total ~2.1 kW): 10 ÷ 2.1 = approximately 4.5–5 hours of backup. With the full AC load running (6 units at 2.5 kW each = 15 kW total): 10 ÷ 15 = less than 1 hour. For meaningful backup, an essential loads sub-panel selecting only priority circuits is critical — otherwise the battery drains very quickly." },
      { question: "Is LFP battery chemistry better than NMC for Saudi Arabia's heat?", answer: "Yes. Lithium Iron Phosphate (LFP) — used in Huawei LUNA2000 and BYD Battery-Box — tolerates Saudi Arabia's high ambient temperatures better than Nickel Manganese Cobalt (NMC) chemistry. LFP operates safely at cell temperatures up to 60°C, has no thermal runaway risk under normal conditions, and degrades more slowly in hot climates. All batteries must be installed in ventilated locations away from direct sun — we always review installation location for adequate ventilation." },
      { question: "Can I add batteries to my existing solar system?", answer: "If your existing inverter is a hybrid inverter (check the model — Huawei SUN2000-KTL-M2, Sungrow SH, GoodWe ET, SolarEdge StorEdge), batteries can be added directly. If your inverter is a standard string inverter (SMA Sunny Boy, Huawei SUN2000-L without the 'M' suffix), you need to replace it with a hybrid model before adding batteries. We assess your existing inverter model and provide the most cost-effective upgrade path." },
      { question: "Does battery storage make financial sense in Saudi Arabia?", answer: "At current Saudi electricity tariffs, battery storage alone (without solar) has a very long payback period (15–20 years). Batteries make financial sense as an add-on to an existing solar system where: (1) you have high evening consumption that cannot be served by daytime solar generation, (2) grid outages have a significant cost to you (home office, medical equipment, elderly or vulnerable occupants), or (3) you want energy independence regardless of pure financial return. The resilience value is genuine even where the pure financial case is marginal." },
    ],
    relatedSlugs: ["solar-installation", "sec-net-metering", "off-grid-solar"],
  },

  {
    slug: "solar-panel-cleaning",
    category: "solar",
    title: "Solar Panel Cleaning & Maintenance",
    metaTitle: "Solar Panel Cleaning Saudi Arabia 2026: Dust & Salt Removal | Miyar Technical Services",
    metaDescription: "Professional solar panel cleaning in Saudi Arabia. Demineralised water washing, dust and salt removal, performance monitoring, and annual maintenance contracts.",
    tagline: "Saudi desert dust costs you 15–30% of your solar output — clean panels pay for themselves.",
    color: "#eab308",
    categoryLabel: "Solar Energy",
    categoryHref: "/services/solar",
    intro: "Solar panels in Saudi Arabia face the most severe soiling challenge of any major solar market: haboob dust storms deposit thick layers of fine sand and clay particles, and coastal cities add salt-spray onto the settled dust to create a hard, adhesive film. Without regular cleaning, a Saudi rooftop solar system loses 15–30% of its design output within 4–6 weeks during haboob season. Professional cleaning with demineralised water (not tap water, which leaves calcium deposits) restores 100% of the lost generation.",
    offerings: [
      { title: "Demineralised Water Panel Wash", description: "Panels washed with water purified to under 50 ppm TDS (reverse osmosis unit on our cleaning vehicles). Using normal Riyadh tap water (600–900 ppm TDS) leaves a white calcium film that actually increases soiling rate — demineralised water evaporates without residue." },
      { title: "Salt Deposit Removal (Coastal Cities)", description: "Panels in Jeddah, Khobar, and coastal Dammam develop hard salt deposits from sea spray that standard brushing cannot remove. We use a dilute citric acid pre-rinse (pH 4.5) to dissolve salt crystals before demineralised water wash." },
      { title: "Dry Brush Cleaning", description: "Soft-bristle carbon fibre brush cleaning for panels in locations where water use must be minimised or access for water equipment is limited. Less effective than wet wash but maintains 85–90% of output between full wet washes." },
      { title: "Annual Maintenance Contract", description: "Scheduled cleaning programme: 24 bi-weekly clean visits per year for coastal/desert systems, or 12 monthly visits for inland systems with lower soiling rates. Performance monitoring between visits to detect abnormal yield drops." },
      { title: "Panel Inspection & Electrical Check", description: "During cleaning visits: visual inspection for cracked cells, delamination, hotspots (detected with thermal camera), loose connectors, and mounting hardware integrity. Electrical insulation resistance check annually." },
      { title: "Inverter & System Health Check", description: "Inverter performance data review with each cleaning visit — compare actual vs expected yield to identify inverter, panel, or string faults before they cause significant generation loss." },
    ],
    process: [
      { step: "Access Setup", description: "Roof access confirmed (ladder, rope access, or cherry picker for flat-roof systems). Safety equipment deployed." },
      { step: "Pre-Rinse", description: "Panels pre-rinsed with demineralised water to soften loose dust deposits. Salt pre-treatment applied if coastal installation." },
      { step: "Brush Wash", description: "Soft-bristle brush wash with demineralised water flowing through the brush (water-fed pole system) removes adhered deposits without scratching panel glass." },
      { step: "Final Rinse & Squeegee", description: "Final rinse from top to bottom. Squeegee removes water before it can evaporate and leave residue." },
      { step: "Inspection", description: "Visual inspection of each panel, mounting hardware, DC cable connections, and junction box seals." },
      { step: "Performance Report", description: "Yield data snapshot before and after cleaning. Cleaning effectiveness reported as generation recovered (kWh)." },
    ],
    pricing: "One-time clean, residential (10kWp, 18–20 panels): SAR 250–450 (Riyadh), SAR 350–600 (Jeddah coastal — salt removal extra). Annual contract (12 monthly cleans, Riyadh): SAR 1,800–3,000. Annual contract (24 bi-weekly cleans, Jeddah coastal): SAR 4,500–7,000. Panel inspection + thermal imaging (per annual visit): SAR 400–700 additional. Inverter health check: SAR 200–400.",
    faq: [
      { question: "How often should solar panels be cleaned in Saudi Arabia?", answer: "In Riyadh and inland cities: once per month is the minimum to maintain 90%+ of design yield. During peak haboob season (March–June), bi-weekly cleaning recovers an additional 5–8% annual yield. For Jeddah, Khobar, and coastal Dammam: bi-weekly cleaning is the minimum — salt deposits accumulate quickly and are far more damaging to long-term panel glass integrity than inland dust." },
      { question: "Can I clean solar panels myself with a garden hose?", answer: "The garden hose water will work adequately for loose dust but has three problems in Saudi Arabia: (1) tap water TDS of 600–900 ppm (Riyadh) leaves a calcium film that increases soiling adhesion — you may actually reduce output versus an uncleaned panel after multiple tap water washes, (2) garden hoses lack the brush agitation needed to remove adhered salt deposits (coastal) or hardened clay dust (haboob deposits), (3) tap water pressure can force water into junction box seals if aimed directly. Use demineralised water or rely on professional cleaning." },
      { question: "What is the revenue impact of not cleaning my Riyadh solar panels?", answer: "A 10kWp Riyadh system that is never cleaned generates approximately 15,000 kWh/year against a design yield of 19,000 kWh — a 4,000 kWh loss worth SAR 3,000–4,500 per year at current tariffs. Annual cleaning contract cost: SAR 1,800–3,000. Net benefit of maintaining a cleaning contract: SAR 1,000–2,500 per year — the contract pays for itself each year." },
      { question: "How do I know if my solar panels are underperforming due to soiling?", answer: "Compare your inverter's daily generation (kWh) against the design estimate for the same day (your installer should provide a monthly generation target table). If actual generation is more than 15% below the design estimate on a clear day with no shading changes, soiling is the most likely explanation. The Huawei FusionSolar and SolarEdge monitoring apps allow this comparison directly from your phone." },
    ],
    relatedSlugs: ["solar-installation", "sec-net-metering", "battery-storage"],
  },

  {
    slug: "off-grid-solar",
    category: "solar",
    title: "Off-Grid & Hybrid Solar Systems for Saudi Arabia",
    metaTitle: "Off-Grid Solar Saudi Arabia 2026: Farm, Remote, Hybrid Systems | Miyar Technical Services",
    metaDescription: "Off-grid solar systems for Saudi farms, remote properties, and diesel-dependent sites. Hybrid solar+battery+generator systems designed for 24/7 reliable power without grid connection.",
    tagline: "No grid connection? No problem — solar plus battery gives you 24/7 reliable power.",
    color: "#eab308",
    categoryLabel: "Solar Energy",
    categoryHref: "/services/solar",
    intro: "Saudi Arabia's vast agricultural estates, remote desert camps, border facilities, and islands far from SEC grid infrastructure have historically relied on diesel generators — expensive, loud, and requiring fuel logistics. A correctly designed off-grid solar and battery system can eliminate diesel consumption by 70–95%, providing 24/7 power at a fraction of the operating cost. For sites already using diesel, the investment typically pays back in 2–5 years through fuel savings alone.",
    offerings: [
      { title: "Off-Grid System Design", description: "Load analysis of all electrical equipment (HVAC, water pumps, lighting, refrigeration, communications), autonomy design (days of backup storage without solar), and panel/battery/inverter sizing to meet the 100% reliability requirement." },
      { title: "Battery Bank Design & Supply", description: "Lithium Iron Phosphate (LFP) battery banks (BYD, CATL) for cycle-intensive off-grid applications. Correctly sized for your target autonomy (typically 1–3 days for Saudi farming estates with reliable sun). Battery management system with remote monitoring." },
      { title: "Off-Grid Inverter/Charger", description: "Victron MultiPlus, SMA Sunny Island, or Schneider XW+ off-grid inverter/chargers that manage solar, battery, grid (if available), and diesel generator inputs simultaneously with intelligent priority management." },
      { title: "Diesel Generator Hybrid Integration", description: "For critical facilities requiring 100% uptime, integrate an existing or new diesel generator as the backup source. The hybrid controller starts the generator automatically only when battery reaches the minimum state of charge — reducing generator run-time by 70–90% versus continuous operation." },
      { title: "Water Pumping Solar Systems", description: "Solar-powered borehole pumps (AC or DC) for agricultural irrigation and livestock watering. Grundfos SQFlex, Lorentz PS, and Shakti solar pump systems sized for Saudi groundwater depth and daily volume requirements." },
      { title: "Remote Monitoring & Management", description: "Victron Remote Management (VRM), SMA Sunny Portal, or custom SCADA for facilities with technical staff. SMS/WhatsApp alert system for battery low, fault, and generator auto-start events." },
    ],
    process: [
      { step: "Site Survey & Load Audit", description: "Visit site, measure all loads, review generator fuel consumption logs, assess solar resource, evaluate available space." },
      { step: "System Design", description: "System designed for 95%+ solar fraction in design month (worst solar month). Battery autonomy and generator backup integrated." },
      { step: "Design Review & Approval", description: "Design presented with energy flow diagram, annual fuel savings calculation, and investment ROI analysis." },
      { step: "Procurement & Delivery", description: "Equipment procured and delivered to site. Remote sites require logistics planning for large battery bank and panel pallet deliveries." },
      { step: "Installation", description: "Mounting structure, panels, battery bank, inverter/charger, generator interface, and monitoring system installed." },
      { step: "Commissioning & Training", description: "System commissioned, all operating modes tested, site staff trained on system operation and basic fault response." },
    ],
    pricing: "Small off-grid system (farm accommodation, 3kW load, 1-day autonomy): SAR 45,000–75,000 installed. Medium farm system (10kW load, 1.5-day autonomy): SAR 120,000–200,000 installed. Large remote facility (30kW load, diesel hybrid): SAR 350,000–600,000 installed. Solar water pump (10m³/day from 50m depth): SAR 18,000–35,000. Annual operating cost savings vs diesel: 70–90% of current diesel fuel spend.",
    faq: [
      { question: "Can solar replace a diesel generator completely on a Saudi farm?", answer: "In most cases, 90–95% diesel elimination is achievable with a solar + battery system. Complete 100% elimination is technically possible but requires a very large battery bank sized for the worst-case consecutive cloudy day scenario (rare in Saudi Arabia but not impossible). For critical facilities, retaining the diesel generator as a backup (which may run only 5–10 times per year) is the more economical design — this is called a hybrid system." },
      { question: "How much does diesel fuel currently cost for farm generators in Saudi Arabia?", answer: "Commercial diesel in Saudi Arabia is currently subsidised at approximately SAR 0.67–0.75/litre for registered commercial users, and SAR 1.10–1.25/litre for unregistered/retail purchase. A 20kVA diesel generator consumes approximately 5–7 litres/hour at 75% load — roughly SAR 3,500–5,000/month for an agricultural application running 16 hours/day. A solar+battery system eliminating 85% of this consumption saves SAR 3,000–4,250/month — SAR 36,000–51,000/year." },
      { question: "What battery technology is best for Saudi Arabia's extreme heat in off-grid systems?", answer: "Lithium Iron Phosphate (LFP) is the only viable chemistry for Saudi Arabia's outdoor off-grid battery installations where ambient temperature regularly exceeds 45°C in summer. LFP has a thermal runaway temperature above 270°C (versus 150°C for NMC), degrades more slowly at high temperatures, and can operate (with appropriate BMS cooling) up to 50°C ambient. All battery banks must be installed in shade or insulated battery rooms with forced ventilation — we design the battery enclosure as part of the off-grid system scope." },
      { question: "Do off-grid solar systems require SEC approval in Saudi Arabia?", answer: "Off-grid systems (not connected to the SEC network) do not require SEC net metering approval — they have no connection to the public grid. They may require a municipality building permit for the mounting structure on permanent buildings (same as any rooftop construction). Agricultural installations on farm land in remote areas typically require no permits beyond standard farm operation licensing. We confirm permitting requirements for each specific site during the feasibility assessment." },
    ],
    relatedSlugs: ["solar-installation", "battery-storage", "sec-net-metering"],
  },
];

export function getServicesByCategory(category: ServiceCategory): ServiceData[] {
  return allServices.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}

export const SERVICE_CATEGORY_META = {
  ac: {
    label: "AC & HVAC",
    color: "#06b6d4",
    href: "/services/ac",
    description: "Split AC installation, emergency repair, annual maintenance, VRF systems, refrigerant recharge, and duct cleaning.",
  },
  plumbing: {
    label: "Plumbing",
    color: "#3b82f6",
    href: "/services/plumbing",
    description: "Leak detection, PPR pipe replacement, booster pump installation, water heaters, drain cleaning, and bathroom fittings.",
  },
  solar: {
    label: "Solar Energy",
    color: "#eab308",
    href: "/services/solar",
    description: "Grid-tied solar installation, SEC net metering, battery storage, panel cleaning, and off-grid systems.",
  },
};

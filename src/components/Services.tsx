import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const servicesData = [
    {
      id: "ac",
      title: "AC & HVAC Services",
      description: "Beating the Saudi heat requires optimal cooling performance. We provide comprehensive AC solutions from installations to quick diagnostic repairs.",
      className: styles.cardAC,
      iconClass: styles.iconAC,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <path d="M22 12H2M12 2L9 5M12 22l3-3M2 12l3 3M22 12l-3-3" strokeWidth="1.5" />
          <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>
      ),
      subservices: [
        "Split & Central AC Installation",
        "AC Gas Charging (R22/R410a)",
        "Deep Duct & Filter Cleaning",
        "Compressor & Fan Repair",
        "Annual Maintenance Contracts (AMC)"
      ]
    },
    {
      id: "plumbing",
      title: "Certified Plumbing",
      description: "From hidden leaks to complex installations, our certified plumbers ensure your water systems run smoothly with minimum disruption.",
      className: styles.cardPlumbing,
      iconClass: styles.iconPlumbing,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/>
          <path d="M12 18a3 3 0 0 0 3-3c0-1.8-3-4.7-3-4.7S9 13.2 9 15a3 3 0 0 0 3 3z" />
        </svg>
      ),
      subservices: [
        "Hidden Water Leak Detection",
        "Booster & Submersible Pump Repair",
        "Smart Water Heater Setup",
        "Clogged Drain & Sewer Jetting",
        "Complete Pipe Fitting & Retrofits"
      ]
    },
    {
      id: "solar",
      title: "Solar Panel Installation",
      description: "Harness the Saudi sun to reduce your electricity bills. We plan, install, and maintain high-efficiency photovoltaic systems for clean energy.",
      className: styles.cardSolar,
      iconClass: styles.iconSolar,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth="1.5"/>
          <line x1="12" y1="7" x2="12" y2="17" strokeWidth="1"/>
          <line x1="7" y1="12" x2="17" y2="12" strokeWidth="1"/>
        </svg>
      ),
      subservices: [
        "On-Grid & Off-Grid Solar Setup",
        "Tier-1 Monocrystalline PV Panels",
        "Hybrid Inverter & Battery Storage",
        "Net Metering Application Assistance",
        "Solar Panel Cleaning & Maintenance"
      ]
    }
  ];

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Our Core Offerings</span>
          <h2 className="section-title">Professional Maintenance & Energy Solutions</h2>
          <p className="section-desc">
            We provide dependable, licensed services to maintain your comfort and power your sustainability goals in Saudi Arabia.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <div key={service.id} className={`${styles.card} ${service.className}`}>
              <div className={`${styles.iconWrapper} ${service.iconClass}`}>
                {service.icon}
              </div>
              
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              
              <ul className={styles.subserviceList}>
                {service.subservices.map((sub, idx) => (
                  <li key={idx} className={styles.subserviceItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={`/services/${service.id}`} className={styles.learnMoreBtn}>
                <span>Explore Services</span>
                <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

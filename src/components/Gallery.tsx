"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

type ProjectCategory = "all" | "ac" | "plumbing" | "solar";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  description: string;
  bgClass: string;
  icon: React.ReactNode;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "120kW Commercial Solar Roof",
      category: "solar",
      categoryLabel: "Solar Energy",
      location: "Riyadh, KSA",
      description: "Installed high-efficiency monocrystalline panels on a large commercial warehouse, cutting utility bills by 45%. Integrated with net metering.",
      bgClass: styles.bgSolar,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Jeddah Ducted AC Retrofit",
      category: "ac",
      categoryLabel: "HVAC / AC",
      location: "Jeddah, KSA",
      description: "Complete overhaul of a multi-story residential building's AC ducting, air filters, and copper piping. Improved air distribution and cooling efficiency.",
      bgClass: styles.bgAC,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Booster Pump & Filtration Setup",
      category: "plumbing",
      categoryLabel: "Plumbing",
      location: "Dammam, KSA",
      description: "Installed a smart pressure booster pump and reverse-osmosis filtration system for a luxury villa to secure consistent, clean water pressure.",
      bgClass: styles.bgPlumbing,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Mecca Commercial Chiller Service",
      category: "ac",
      categoryLabel: "HVAC / AC",
      location: "Mecca, KSA",
      description: "Diagnostic repair and preventative maintenance for a hotel chiller system. Replaced compressor valves and restored 100% cooling output.",
      bgClass: styles.bgAC,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Hybrid Off-Grid Solar Power",
      category: "solar",
      categoryLabel: "Solar Energy",
      location: "Medina, KSA",
      description: "Engineered and deployed a standalone hybrid solar farm with heavy-duty lithium batteries to power an agricultural estate completely off-grid.",
      bgClass: styles.bgSolar,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Premium Villa Pipe Fitting",
      category: "plumbing",
      categoryLabel: "Plumbing",
      location: "Khobar, KSA",
      description: "Re-piped entire hot/cold water supply using corrosion-resistant PEX pipes. Tested under high pressure to guarantee leak-free operation.",
      bgClass: styles.bgPlumbing,
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Showcasing Recent Projects</h2>
          <p className="section-desc">
            Take a look at some of the HVAC repairs, plumbing overhauls, and solar systems we have successfully completed in Saudi Arabia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {(["all", "ac", "plumbing", "solar"] as const).map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${activeCategory === cat ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all" ? "All Projects" : cat.toUpperCase() + " Services"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={`${styles.visualPlaceholder} ${project.bgClass}`}>
                <div className={styles.cardIcon}>{project.icon}</div>
                <span className={styles.badge}>{project.categoryLabel}</span>
                <span className={styles.locationBadge}>{project.location}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

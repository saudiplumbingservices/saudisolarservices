"use client";

import { useState } from "react";
import styles from "./FaqAccordion.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  accentColor?: string;
}

export default function FaqAccordion({ items, accentColor = "#0e7490" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.iconBox} style={{ background: accentColor + "18", borderColor: accentColor + "30" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>{items.length} questions answered by our certified engineers</p>
        </div>
      </div>

      {/* Accordion Items */}
      <div className={styles.list}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              style={isOpen ? { borderColor: accentColor + "50" } : {}}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                {/* Number badge */}
                <span
                  className={styles.num}
                  style={isOpen
                    ? { background: accentColor, color: "#fff", borderColor: accentColor }
                    : { borderColor: accentColor + "40", color: accentColor }
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Question text */}
                <span className={styles.questionText}>{item.question}</span>

                {/* Chevron */}
                <span
                  className={styles.chevron}
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: accentColor }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                <div className={styles.answerInner} style={{ borderLeftColor: accentColor }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

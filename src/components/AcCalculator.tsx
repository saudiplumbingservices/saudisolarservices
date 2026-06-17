"use client";

import React, { useState } from "react";
import styles from "./AcCalculator.module.css";

export default function AcCalculator() {
  const [length, setLength] = useState<number>(5);
  const [width, setWidth] = useState<number>(4);
  const [occupants, setOccupants] = useState<number>(2);
  const [roomType, setRoomType] = useState<string>("bedroom");
  const [exposure, setExposure] = useState<string>("moderate");

  const calculateBTU = () => {
    const areaSqM = length * width;
    
    // Base cooling load in BTU (approx 650 BTU per square meter for Saudi climate)
    let baseBTU = areaSqM * 650;
    
    // Room type factor
    let roomFactor = 1.0;
    if (roomType === "kitchen") roomFactor = 1.3; // high heat source
    if (roomType === "majlis_roof") roomFactor = 1.25; // directly under roof
    
    // Exposure factor
    let exposureFactor = 1.0;
    if (exposure === "high") exposureFactor = 1.15; // heavy afternoon sun
    if (exposure === "low") exposureFactor = 0.9; // shaded/north facing
    
    // Occupant load (400 BTU per additional person above 1)
    const occupantBTU = Math.max(0, occupants - 1) * 400;
    
    const totalBTU = (baseBTU * roomFactor * exposureFactor) + occupantBTU;
    
    // Tonnage (1 Ton = 12,000 BTU)
    const tonnage = totalBTU / 12000;
    
    // Recommend nearest standard AC size
    let recommendedTons = 1.5;
    if (tonnage <= 1.0) recommendedTons = 1.0;
    else if (tonnage <= 1.5) recommendedTons = 1.5;
    else if (tonnage <= 2.0) recommendedTons = 2.0;
    else if (tonnage <= 2.5) recommendedTons = 2.5;
    else recommendedTons = 3.0; // 3 Tons (usually floor standing or cassette)

    return {
      area: areaSqM.toFixed(1),
      btu: Math.round(totalBTU),
      tons: recommendedTons.toFixed(1),
      tonnageReal: tonnage.toFixed(2),
    };
  };

  const result = calculateBTU();

  return (
    <div className={styles.calculatorCard}>
      <h3 className={styles.calcTitle}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
        Saudi AC Tonnage & Cooling Calculator (GEO Resource)
      </h3>
      <p className={styles.calcDesc}>
        Calculate the exact cooling capacity (BTU & Tons) required for your room, customized for Saudi Arabia's extreme summer conditions.
      </p>

      <div className={styles.grid}>
        {/* Inputs */}
        <div className={styles.inputsColumn}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Room Size (Length × Width in meters)</label>
            <div className={styles.rangeRow}>
              <div className={styles.rangeCol}>
                <span className={styles.rangeVal}>L: {length}m</span>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="0.5"
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value))}
                  className={styles.slider}
                />
              </div>
              <div className={styles.rangeCol}>
                <span className={styles.rangeVal}>W: {width}m</span>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className={styles.slider}
                />
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="room-type" className={styles.label}>Room Type</label>
              <select
                id="room-type"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className={styles.select}
              >
                <option value="bedroom">Standard Bedroom / Office</option>
                <option value="living">Living Room / Majlis (Ground)</option>
                <option value="majlis_roof">Top Floor Majlis / Penthouse</option>
                <option value="kitchen">Kitchen (High Heat)</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="exposure" className={styles.label}>Sunlight Exposure</label>
              <select
                id="exposure"
                value={exposure}
                onChange={(e) => setExposure(e.target.value)}
                className={styles.select}
              >
                <option value="low">Shaded / Low (North Facing)</option>
                <option value="moderate">Moderate / Standard</option>
                <option value="high">High Exposure (Roof/West Facing)</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="occupants" className={styles.label}>Average Occupants: {occupants}</label>
            <input
              type="range"
              id="occupants"
              min="1"
              max="10"
              value={occupants}
              onChange={(e) => setOccupants(parseInt(e.target.value))}
              className={styles.slider}
            />
          </div>
        </div>

        {/* Results */}
        <div className={styles.resultsColumn}>
          <div className={styles.resultBox}>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Calculated Area</span>
              <span className={styles.resultValue}>{result.area} m²</span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Required Capacity</span>
              <span className={styles.resultValue}>{result.btu.toLocaleString()} BTU/hr</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.tonnageBox}>
              <span className={styles.tonnageLabel}>Recommended AC Size</span>
              <span className={styles.tonnageValue}>{result.tons} Tons</span>
              <span className={styles.tonnageDetail}>Exact tonnage required: {result.tonnageReal} Tons</span>
            </div>
          </div>
          {parseFloat(result.tonnageReal) > 3.0 && (
            <div style={{
              marginTop: "12px",
              padding: "12px 16px",
              background: "rgba(234, 179, 8, 0.1)",
              border: "1px solid rgba(234, 179, 8, 0.35)",
              borderRadius: "8px",
              fontSize: "0.85rem",
              color: "var(--foreground)",
            }}>
              ⚠️ <strong>Large space detected:</strong> This room requires a commercial-grade system ({result.tonnageReal} tons). Contact us for a custom multi-unit or cassette AC design.
            </div>
          )}

          <a
            href={`/?service=AC%20Installation%20%26%20Repair&message=I%20used%20the%20AC%20calculator%20and%20need%20a%20quote%20for%20a%20${result.tons}%20Ton%20AC%20unit.#contact`}
            className="btn btn-accent"
            style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
          >
            Request Installation Quote
          </a>
        </div>
      </div>
      <div className={styles.calcFooter}>
        * This calculation is optimized for extreme Saudi summer heat zones (Riyadh, Dammam, Jeddah) where peak summer temperatures routinely exceed 45°C.
      </div>
    </div>
  );
}

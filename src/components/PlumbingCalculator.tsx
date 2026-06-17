"use client";

import { useState } from "react";
import styles from "./PlumbingCalculator.module.css";

export default function PlumbingCalculator() {
  const [calcMode, setCalcMode] = useState<"leak" | "pump">("leak");

  // Leak Calculator States
  const [leakRate, setLeakRate] = useState<string>("fast_drip");

  // Pump Sizer States
  const [floors, setFloors] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(4);

  // Leak calculations
  const calculateLeak = () => {
    let litersPerDay = 0;
    let desc = "";
    
    switch (leakRate) {
      case "slow_drip":
        litersPerDay = 10;
        desc = "Typical slow faucet drip (approx. 10 drops per minute)";
        break;
      case "fast_drip":
        litersPerDay = 120;
        desc = "Fast faucet drip or minor pipe pinhole leak";
        break;
      case "trickle":
        litersPerDay = 1500;
        desc = "Continuous toilet tank flush leak or cracked pipe joint";
        break;
      case "burst":
        litersPerDay = 12000;
        desc = "Burst main line or completely stuck toilet float valve";
        break;
    }

    const monthlyLiters = litersPerDay * 30;
    const monthlyCubicMeters = monthlyLiters / 1000;

    // Calculate KSA NWC (National Water Company) Residential Tiered Tariff
    // Tier 1: 0 - 15 m3 = 0.15 SAR/m3 (with wastewater: 0.10 SAR/m3 total ~ 0.25)
    // Tier 2: >15 - 30 m3 = 1.00 SAR/m3 (with wastewater: 1.50 SAR/m3)
    // Tier 3: >30 - 45 m3 = 3.00 SAR/m3 (with wastewater: 4.50 SAR/m3)
    // Tier 4: >45 - 60 m3 = 4.00 SAR/m3 (with wastewater: 6.00 SAR/m3)
    // Tier 5: >60 m3 = 6.00 SAR/m3 (with wastewater: 9.00 SAR/m3)
    let cost = 0;
    let rem = monthlyCubicMeters;

    // Tier 1
    const t1 = Math.min(15, rem);
    cost += t1 * 0.25;
    rem -= t1;

    // Tier 2
    if (rem > 0) {
      const t2 = Math.min(15, rem);
      cost += t2 * 1.50;
      rem -= t2;
    }
    // Tier 3
    if (rem > 0) {
      const t3 = Math.min(15, rem);
      cost += t3 * 4.50;
      rem -= t3;
    }
    // Tier 4
    if (rem > 0) {
      const t4 = Math.min(15, rem);
      cost += t4 * 6.00;
      rem -= t4;
    }
    // Tier 5
    if (rem > 0) {
      cost += rem * 9.00;
    }

    return {
      dailyLiters: litersPerDay,
      monthlyCubic: monthlyCubicMeters.toFixed(2),
      monthlyCost: cost.toFixed(2),
      desc,
    };
  };

  // Pump calculations
  const calculatePump = () => {
    // Height head estimation (approx 3.5m per floor + 5m standard pressure head)
    const totalHeadMeters = (floors * 3.5) + 5;
    
    // Required flow rate (approx 10 liters/minute per bathroom concurrent use factor)
    const requiredFlowLPM = bathrooms * 8;
    
    // HP estimation
    let recommendedHP = 0.5;
    let pumpType = "Standard Centrifugal Pump with automatic pressure switch (Dynamo)";
    
    if (floors <= 2 && bathrooms <= 4) {
      recommendedHP = 0.5;
    } else if (floors <= 3 && bathrooms <= 7) {
      recommendedHP = 1.0;
      pumpType = "High-Flow Centrifugal Pump or Smart Automatic Booster Pump";
    } else if (floors <= 4 && bathrooms <= 10) {
      recommendedHP = 1.5;
      pumpType = "Multi-Stage Automatic Booster Pump or Smart Inverter Dynamo";
    } else {
      recommendedHP = 2.0;
      pumpType = "Twin-Pump Booster System with Smart VFD (Variable Frequency Drive)";
    }

    // Recommended pressure range
    const minBar = (totalHeadMeters / 10) + 1.0;
    const maxBar = minBar + 1.5;

    return {
      head: totalHeadMeters.toFixed(1),
      flow: requiredFlowLPM.toFixed(0),
      hp: recommendedHP.toFixed(1),
      type: pumpType,
      pressureRange: `${minBar.toFixed(1)} - ${maxBar.toFixed(1)} Bar (${(minBar * 14.5).toFixed(0)} - ${(maxBar * 14.5).toFixed(0)} PSI)`,
    };
  };

  const leakResult = calculateLeak();
  const pumpResult = calculatePump();

  return (
    <div className={styles.calculatorCard}>
      {/* Tab Selectors */}
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabBtn} ${calcMode === "leak" ? styles.activeTab : ""}`}
          onClick={() => setCalcMode("leak")}
        >
          💧 Water Leak Cost Estimator
        </button>
        <button
          className={`${styles.tabBtn} ${calcMode === "pump" ? styles.activeTab : ""}`}
          onClick={() => setCalcMode("pump")}
        >
          🔌 Booster Pump (Dynamo) Sizer
        </button>
      </div>

      {calcMode === "leak" ? (
        <div>
          <h3 className={styles.calcTitle}>
            Saudi Water Leak Cost Estimator (GEO Resource)
          </h3>
          <p className={styles.calcDesc}>
            Estimate the volume of water lost and the corresponding increase in your monthly NWC (National Water Company) bill based on typical KSA residential tariffs.
          </p>

          <div className={styles.grid}>
            {/* Inputs */}
            <div className={styles.inputsColumn}>
              <div className={styles.formGroup}>
                <label htmlFor="leak-rate" className={styles.label}>Estimated Leak Severity</label>
                <select
                  id="leak-rate"
                  value={leakRate}
                  onChange={(e) => setLeakRate(e.target.value)}
                  className={styles.select}
                >
                  <option value="slow_drip">Slow Drip (Faucet/Pipe Joint)</option>
                  <option value="fast_drip">Fast Drip (Continuous)</option>
                  <option value="trickle">Continuous Trickle (Toilet/Drain)</option>
                  <option value="burst">Major Flow / Burst Underground Pipe</option>
                </select>
                <span className={styles.inputDetail}>{leakResult.desc}</span>
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsColumn}>
              <div className={styles.resultBox}>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Est. Water Loss</span>
                  <span className={styles.resultValue}>{leakResult.dailyLiters} Liters/Day</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Monthly Volume</span>
                  <span className={styles.resultValue}>{leakResult.monthlyCubic} m³ / Month</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.tonnageBox}>
                  <span className={styles.tonnageLabel}>Est. Added Cost</span>
                  <span className={styles.tonnageValue} style={{ color: "var(--accent-red, #ef4444)" }}>
                    {leakResult.monthlyCost} SAR
                  </span>
                  <span className={styles.tonnageDetail}>Includes NWC wastewater surcharges</span>
                </div>
              </div>

              <a
                href={`/?service=Emergency%20Plumbing%20Repair&message=I%20used%20the%20Leak%20Cost%20Calculator%20and%20suspect%20a%20leak%20losing%20about%20${leakResult.dailyLiters}%20liters%20per%20day.#contact`}
                className="btn btn-accent"
                style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
              >
                Book Leak Detection Service
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.calcTitle}>
            Booster Pump & Dynamo Sizer (GEO Resource)
          </h3>
          <p className={styles.calcDesc}>
            Calculate the recommended horsepower (HP) and pressure parameters for your villa's rooftop water pump based on building height and outlets.
          </p>

          <div className={styles.grid}>
            {/* Inputs */}
            <div className={styles.inputsColumn}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Building Height (Floors: {floors})</label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={floors}
                  onChange={(e) => setFloors(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Number of Bathrooms / Outlets: {bathrooms}</label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsColumn}>
              <div className={styles.resultBox} style={{ background: "linear-gradient(135deg, rgba(37, 99, 235, 0.04), rgba(37, 99, 235, 0.08))", borderColor: "rgba(37, 99, 235, 0.15)" }}>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Required Flow</span>
                  <span className={styles.resultValue}>{pumpResult.flow} Liters/Min</span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>Recommended Pressure</span>
                  <span className={styles.resultValue} style={{ fontSize: "0.95rem" }}>{pumpResult.pressureRange}</span>
                </div>
                <div className={styles.divider} style={{ backgroundColor: "rgba(37, 99, 235, 0.15)" }}></div>
                <div className={styles.tonnageBox}>
                  <span className={styles.tonnageLabel} style={{ color: "#2563eb" }}>Recommended Pump Size</span>
                  <span className={styles.tonnageValue} style={{ color: "#2563eb" }}>{pumpResult.hp} HP</span>
                  <span className={styles.tonnageDetail} style={{ fontSize: "0.8rem", color: "var(--foreground)", marginTop: "4px" }}>
                    {pumpResult.type}
                  </span>
                </div>
              </div>

              <a
                href={`/?service=Water%20Pump%20%26%20Heater%20Setup&message=I%20used%20the%20Booster%20Pump%20Sizer%20and%20need%20a%20quote%20for%20a%20${pumpResult.hp}%20HP%20water%20pump%20for%20my%20${floors}-floor%20villa.#contact`}
                className="btn btn-accent"
                style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
              >
                Request Pump Installation
              </a>
            </div>
          </div>
        </div>
      )}

      <div className={styles.calcFooter}>
        * Estimates are calculated according to the Saudi Arabian Uniform Plumbing Code (UPC) and National Water Company (NWC) standard utility tariffs for residential customers in the Kingdom.
      </div>
    </div>
  );
}

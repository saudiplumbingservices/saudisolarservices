"use client";

import React, { useState } from "react";
import styles from "./SolarCalculator.module.css";

export default function SolarCalculator() {
  const [bill, setBill] = useState<number>(800); // in SAR
  const [roofSpace, setRoofSpace] = useState<number>(120); // in sqm

  const calculateSolar = () => {
    // KSA average residential electricity tariff is approx 0.18 SAR per kWh
    const estimatedMonthlyKWh = bill / 0.18;
    
    // 1 kW of solar in Saudi Arabia (e.g. Riyadh) generates approx 150 kWh per month (1,800 kWh annually)
    // We target offseting 80% of the household consumption
    const targetOffsetKWh = estimatedMonthlyKWh * 0.8;
    
    // Required system capacity in kW
    let requiredKW = targetOffsetKWh / 150;
    
    // Floor & Ceil limits for typical residential villas (5kW to 30kW)
    if (requiredKW < 5) requiredKW = 5;
    if (requiredKW > 30) requiredKW = 30;
    
    // Check if roof space is sufficient (approx 6 sqm is required per 1 kW of solar panels)
    const maxKWByRoof = roofSpace / 6;
    const recommendedKW = Math.min(requiredKW, maxKWByRoof);
    
    // Calculate standard panels (assuming modern 450W monocrystalline panels)
    const panelCount = Math.ceil((recommendedKW * 1000) / 450);
    
    // Estimated Installation Cost (approx SAR 2,800 per kW for complete turnkey system)
    const estimatedCost = recommendedKW * 2800;
    
    // Estimated Annual Generation in kWh
    const annualGenerationKWh = recommendedKW * 1800;
    
    // Annual Savings in SAR (generation * 0.18 tariff)
    const annualSavings = annualGenerationKWh * 0.18;
    
    // Payback Period (years)
    const paybackYears = annualSavings > 0 ? estimatedCost / annualSavings : 0;

    return {
      systemSize: recommendedKW.toFixed(1),
      panels: panelCount,
      cost: Math.round(estimatedCost).toLocaleString(),
      annualSavings: Math.round(annualSavings).toLocaleString(),
      monthlySavings: Math.round(annualSavings / 12).toLocaleString(),
      payback: paybackYears.toFixed(1),
      roofCheck: maxKWByRoof < requiredKW,
    };
  };

  const result = calculateSolar();

  return (
    <div className={styles.calculatorCard}>
      <h3 className={styles.calcTitle}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        Saudi Solar Savings & Payback Estimator (GEO Resource)
      </h3>
      <p className={styles.calcDesc}>
        Input your average monthly utility bill and available roof space to estimate your recommended PV system size, panel count, installation costs, and payback period under the SEC Net Metering framework.
      </p>

      <div className={styles.grid}>
        {/* Inputs */}
        <div className={styles.inputsColumn}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="bill">Average Monthly Electricity Bill: <span className={styles.valueHighlight}>SAR {bill}</span></label>
            <input
              type="range"
              id="bill"
              min="200"
              max="4000"
              step="50"
              value={bill}
              onChange={(e) => setBill(parseInt(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>SAR 200</span>
              <span>SAR 4,000</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="roof">Available Rooftop Area: <span className={styles.valueHighlight}>{roofSpace} m²</span></label>
            <input
              type="range"
              id="roof"
              min="30"
              max="500"
              step="10"
              value={roofSpace}
              onChange={(e) => setRoofSpace(parseInt(e.target.value))}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>30 m²</span>
              <span>500 m²</span>
            </div>
          </div>

          {result.roofCheck && (
            <div className={styles.warningAlert}>
              ⚠️ <strong>Note:</strong> Your available roof space limits the maximum recommended solar capacity. The calculation has been adjusted to fit your roof dimensions.
            </div>
          )}
        </div>

        {/* Results */}
        <div className={styles.resultsColumn}>
          <div className={styles.resultBox}>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Recommended System</span>
              <span className={styles.resultValue}>{result.systemSize} kWp</span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Required PV Panels</span>
              <span className={styles.resultValue}>{result.panels} Panels (450W)</span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>Est. Installation Cost</span>
              <span className={styles.resultValue}>SAR {result.cost}</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.savingsBox}>
              <span className={styles.savingsLabel}>Annual Bill Savings</span>
              <span className={styles.savingsValue}>SAR {result.annualSavings}</span>
              <span className={styles.savingsDetail}>Est. Monthly Savings: SAR {result.monthlySavings}</span>
              <span className={styles.paybackDetail}>Estimated Payback Period: <strong>{result.payback} Years</strong></span>
            </div>
          </div>

          <a 
            href={`/#contact?service=Solar%20Panel%20System%20Install&message=I%20used%20the%20Solar%20Savings%20Calculator%20and%20need%20a%20feasibility%20quote%20for%20a%20${result.systemSize}%20kWp%20system%20with%20${result.panels}%20panels.`} 
            className="btn btn-accent"
            style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
          >
            Request Feasibility Quote
          </a>
        </div>
      </div>
      <div className={styles.calcFooter}>
        * Estimates are calculated using standard 0.18 SAR/kWh residential tariffs. Payback periods and savings may vary depending on local shading, dust accumulation rates, and grid integration approvals.
      </div>
    </div>
  );
}

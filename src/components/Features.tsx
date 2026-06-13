import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section} id="why-us">
      <div className={`${styles.grid} container`}>
        {/* Left Column: Description & Bullet Cards */}
        <div className={styles.leftCol}>
          <span className={styles.tag}>Why Choose EcoFlow</span>
          <h2 className={styles.title}>Setting the Gold Standard for Service in Saudi Arabia</h2>
          <p className={styles.desc}>
            We combine licensed engineering standards with rapid customer support. Whether you need immediate relief from a broken AC, emergency plumbing repairs, or a long-term investment in solar power, we have you covered.
          </p>

          <div className={styles.bullets}>
            <div className={styles.bulletCard}>
              <h3 className={styles.bulletTitle}>24/7 Response</h3>
              <p className={styles.bulletDesc}>
                AC break-down in the middle of a hot summer night? Water pipe burst? Our emergency team is ready to dispatch.
              </p>
            </div>
            <div className={styles.bulletCard}>
              <h3 className={styles.bulletTitle}>Certified Engineers</h3>
              <p className={styles.bulletDesc}>
                Solar integration requires regulatory compliance and precision. Our engineers are certified for SEC grid-tie systems.
              </p>
            </div>
            <div className={styles.bulletCard}>
              <h3 className={styles.bulletTitle}>Upfront Pricing</h3>
              <p className={styles.bulletDesc}>
                No surprises or hidden fees. We diagnose the issue first and provide a detailed quote before starting.
              </p>
            </div>
            <div className={styles.bulletCard}>
              <h3 className={styles.bulletTitle}>Work Warranty</h3>
              <p className={styles.bulletDesc}>
                We back our services with a comprehensive warranty on replacement parts and craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Process Outline */}
        <div className={styles.rightCol}>
          <div className={styles.interactiveConsole}>
            <h3 className={styles.consoleTitle}>
              <span className={styles.pulseDot}></span>
              Our Service Process
            </h3>
            <ul className={styles.stepList}>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepText}>
                  <span className={styles.stepHeader}>Request a Free Quote</span>
                  <span className={styles.stepDesc}>Submit our online form, call us, or chat via WhatsApp.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepText}>
                  <span className={styles.stepHeader}>Diagnostic Visit</span>
                  <span className={styles.stepDesc}>A technician arrives at your site to inspect and provide an upfront estimate.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepText}>
                  <span className={styles.stepHeader}>Professional Execution</span>
                  <span className={styles.stepDesc}>We carry out the repair or installation according to global safety standards.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>4</div>
                <div className={styles.stepText}>
                  <span className={styles.stepHeader}>Quality Testing & Sign-off</span>
                  <span className={styles.stepDesc}>We verify all systems are fully functional, clean up, and activate your warranty.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

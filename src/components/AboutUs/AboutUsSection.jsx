import React from "react";
import styles from "./AboutUsSection.module.css";
import resortImage1 from "../../assets/img-about-us/img-about-us-1.jpg";
import resortImage2 from "../../assets/img-about-us/img-about-us-2.jpg";

export default function AboutUsSection() {
  return (
    <div className={styles.aboutUsContainer}>
      {/* Sectiunea 1: imaginea este in partea stanga si textul in dreapta */}
      <section className={`${styles.resortSection} ${styles.sectionLeft}`}>
        <div className={styles.imageContainer}>
          <img
            className={styles.resortImage}
            src={resortImage1}
            alt="resort's beach"
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.sectionTitle}>
            Sunset Breeze Luxury - A Hidden Paradise on Racha Yai Island
          </h1>
          <p className={styles.description}>
            Hidden away on the unspoiled shores of Racha Yai Island just 25
            minutes by speedboat from the buzz of Phuket you will find a
            tropical retreat like no other. Here, the warmth of Thai tradition
            meets modern luxury in perfect balance. Designed as a charming
            village of reimagined Thai villas, our resort blends seamlessly into
            the island's stunning landscape. Enjoy total privacy while soaking
            in the breathtaking beauty of the Andaman Sea.
          </p>
        </div>
      </section>

      {/* Sectiunea 2: imaginea este in partea dreapta si textul in stanga */}
      <section className={`${styles.resortSection} ${styles.sectionRight}`}>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>Designed for Descovery</h2>
          <p className={styles.description}>
            As one of Phuket's most exclusive retreats, we pamper guests with:
          </p>
          <ul className={styles.featuresList}>
            <li>Sunrise yoga on the beach</li>
            <li>Private longtail boat tours to hidden coves</li>
            <li>Authentic Thai cooking classes with our master chef</li>
            <li>Holistic spa using indigenous ingredients</li>
            <li>Michelin-starred dining with fresh local seafood</li>
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.resortImage}
            src={resortImage2}
            alt="resort's beach"
          />
        </div>
      </section>
    </div>
  );
}

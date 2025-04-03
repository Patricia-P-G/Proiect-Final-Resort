import React from "react";
import styles from "./Facilities.module.css";

export default function Facilities() {
  // Array-ul de obiecte cu facilitatile resort-ului
  const facilities = [
    {
      icon: "wifi",
      title: "High Speed Wifi",
      description: "Enjoy fast and reliable Wi-Fi keeping you connected with ease",
    },
    {
      icon: "pool",
      title: "Swimming Pool",
      description: "Dive into relaxation with our refreshing swimming pool and beautiful scenery",
    },
    {
      icon: "spa",
      title: "Spa and Wellness",
      description: "The spa includes relaxing treatments for your ultimate comfort",
    },
    {
      icon: "restaurant",
      title: "Breakfast Buffet",
      description: "The breakfast buffet includes a delicious variety to start your day",
    },
    {
      icon: "beach_access",
      title: "Beachfront",
      description: "It offers direct access to stunning views and refreshing sea breezes",
    },
    {
      icon: "local_bar",
      title: "Bar",
      description: "The bar provides a selection of drinks to enjoy throughout your night",
    },
  ];

  return (
    <div className={styles.facilitiesContainer}>
      <h2 className={styles.sectionTitle}>Our Facilities</h2>
      <p className={styles.sectionDescription}>
        Relax and recharge with our inviting facilities, from serene pools and
        soothing spas to lush gardens and cozy lounges. Let go of stress and
        immerse yourself in the perfect escape, where every detail is designed
        for your comfort.
      </p>

      <div className={styles.facilitiesGrid}>
        {/* Iterez prin array-ul de facilitati */}
        {facilities.map((facility, index) => (
          <div key={index} className={styles.facilityCard}>
            <span
              className={`material-symbols-outlined ${styles.facilityIcon}`}
              aria-hidden="true"
            >
              {facility.icon}
            </span>
            <h3 className={styles.facilityTitle}>{facility.title}</h3>
            <p className={styles.facilityDescription}>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

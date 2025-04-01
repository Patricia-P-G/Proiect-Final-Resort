import React from "react";
import styles from "./Facilities.module.css";

export default function Facilities() {

  // Array-ul de obiecte cu facilitatile resort-ului
  const facilities = [
    {
      icon: "wifi",
      title: "High Speed Wifi",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: "pool",
      title: "Swimming Pool",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: "spa",
      title: "Spa and Wellness",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: "restaurant",
      title: "Breakfast Buffet",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: "beach_access",
      title: "Beachfront",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    },
    {
      icon: "local_bar",
      title: "Bar",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
    }
  ];

  return (
    <div className={styles.facilitiesContainer}>
      <h2 className={styles.sectionTitle}>Our Facilities</h2>
      <p className={styles.sectionDescription}>Relax and recharge with our inviting facilities, from serene pools and
        soothing spas to lush gardens and cozy lounges. Whether you are here to
        unwind or explore, our resort provides the perfect setting for a
        peaceful and memorable escape.</p>
      
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


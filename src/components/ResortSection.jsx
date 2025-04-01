import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResortSection.module.css";
import resortSection from "../assets/img-main/resort-section.jpg";

export default function ResortSection() {
  const navigate = useNavigate();

  // Aici este functia de navigare
  const handleReadMoreClick = () => {
    navigate("/about-us");
  };

  return (
    <section className={styles.resortSection}>
      <div className={styles.imagesAboutUs}>
        <img
          className={styles.homePic}
          src={resortSection}
          alt="resort's garden"
        />
      </div>

      <div className={styles.aboutUsWrapper}>
        <h1>Top Rated Resort in Thailand</h1>
        <p className={styles.description}>
          At Sunset Breeze Resort, we pride ourselves on being one of Thailand's
          most secure and top-rated hotels. Your safety and comfort are our top
          priorities, ensuring the highest standards of quality and security.
          Whether you are here for relaxation or adventure, we offer unparalleled
          safety and exceptional service.
          <br />
          <br />
          Experience Thailand like never before at our luxurious beachfront
          retreat, where golden sands meet tranquil waves. Nestled in a prime
          location, Sunset Breeze Luxury blends modern elegance with tropical
          charm. From exquisite suites to world-class dining and a rejuvenating
          spa, every detail ensures an extraordinary stay.
        </p>
        <button
          className={styles.readMore}
          onClick={handleReadMoreClick}
        >
          Read More
        </button>
      </div>
    </section>
  );
}
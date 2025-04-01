import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import heroImage from "../assets/img-main/hero-main.png";

export default function HeroSection({
  title,
  description,
  backgroundImage,
  buttonText,
  buttonLink,
}) {

  // Navigarea pe o alta pagina
  const navigate = useNavigate();

  // Functia este apelata atunci cand dau click pe buton
  const handleButtonClick = () => {
    if (buttonLink) {
      navigate(buttonLink);
    }
  };

  return (
    <section
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.heroContent}>
        {/* Rendeaza HTML direct din props*/}
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p
          className={styles.heroDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        {/* Se apeleaza functia handleButtonClick la click pe buton*/}
        {buttonText && buttonLink && (
          <button className={styles.heroButton} onClick={handleButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

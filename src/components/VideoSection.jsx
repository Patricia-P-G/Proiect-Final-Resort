import React, { useState } from "react";
import styles from "./VideoSection.module.css"; 
import VideoImage from "../assets/img-main/resort-video.png"; 

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className={styles.videoSection}
      style={{ backgroundImage: `url(${VideoImage})` }}
    >
      <div className={styles.videoContent}>
        <h1>Explore Our Resort</h1>
        {/* Se apeleaza functia openModal pentru inchidere */}
        <button className={styles.playButton} onClick={openModal}>
          <span className={styles.playIcon}></span>
        </button>
      </div>

      {/* Modal pentru video */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* Se apeleaza functia closeModal pentru inchidere */}
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AIkOXGTx_SY?si=zlq2yjWeRkKgUzhX"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}


import React, { useState } from "react";
import styles from "./GallerySection.module.css";

import image1 from "../../assets/img-gallery/img1.jpg";
import image2 from "../../assets/img-gallery/img2.jpg";
import image3 from "../../assets/img-gallery/img3.jpg";
import image4 from "../../assets/img-gallery/img4.jpg";
import image5 from "../../assets/img-gallery/img5.jpg";
import image6 from "../../assets/img-gallery/img6.jpg";
import image7 from "../../assets/img-gallery/img7.jpg";
import image8 from "../../assets/img-gallery/img8.jpg";
import image9 from "../../assets/img-gallery/img4.jpg";
import image10 from "../../assets/img-gallery/img10.jpg";
import image11 from "../../assets/img-gallery/img11.jpg";
import image12 from "../../assets/img-gallery/img12.jpg";
import image13 from "../../assets/img-gallery/img13.jpg";
import image14 from "../../assets/img-gallery/img14.jpg";
import image15 from "../../assets/img-gallery/img15.jpg";
import image16 from "../../assets/img-gallery/img16.jpg";



export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array-ul cu imaginile din gallery
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <div className={styles.imageGrid}>
          {/* Iterez prin array-ul de imagini */}
          {images.map((image, index) => (
            // Pentru fiecare imagine creez un div cu clasa imageCard
            <div
              key={index}
              className={styles.imageCard}
              // La click pe orice imagine, apelez setSelectedImage(image) pentru a o afisa în modal
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>


      {/* Se executa DOAR daca selectedImage nu este null (are o valoare) (cand exista o imagine selectata) */}
      {selectedImage && (
        // div-ul care acopera toata pagina (overlay)
        // La click pe el, apelez setSelectedImage(null) pentru a inchide modalul
        <div className={styles.imageModal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className={styles.modalImage} />
        </div>
      )}
    </section>
  );
}
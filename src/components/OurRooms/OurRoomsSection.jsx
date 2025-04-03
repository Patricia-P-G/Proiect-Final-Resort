import React, { useState } from "react";
import styles from "./OurRoomsSection.module.css";

// Import array-ul cu obiecte pentru camere
import { rooms } from "../roomsData.js";


export default function RoomCards() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  // Functia selecteaza o camera si reseteaza slider-ul imaginii
  const handleCardClick = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  // Functia pentru a merge inapoi la lista de camere - reseteaza camera selectata
  const handleBackClick = () => {
    setSelectedRoom(null);
  };

  // Functia pentru a schimba imaginea la urmatoarea
  const nextImage = () => {
    // Aici incrementeaza index-ul imaginii
    setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
  };

  // Functia pentru a schimba imaginea anterioara
  const prevImage = () => {
    // Aici decrementeaza index-ul imaginii
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length
    );
  };

  return (
    <section className={styles.roomContainer}>

      {/*Se afiseaza grid-ul cu camerele  */}
      {/* Daca selectedRoom este null atunci se afiseaza grid-ul cu camerele, iar daca selctedRoom are 
      o camera specificata atunci se afiseaza detaliile camerei selectate */}
      {!selectedRoom ? (

        <div className={styles.roomsGrid}>
          {/* Iterez prin array-ul rooms si creez un card pentru fiecare camera */}
          {rooms.map((room) => (
            <div
              key={room.id}
              className={styles.roomCard}
              onClick={() => handleCardClick(room)}
            >
              <img
              // Se afiseaza prima imagine din array-ul de imagini
                src={room.images[0]}
                alt={room.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3>{room.title}</h3>
                <div className={styles.price}>{room.price}</div>
                <ul className={styles.featuresList}>
                  {room.features.map((feature, i) => (
                    <li key={i}>
                      <span
                        className={`material-symbols-outlined ${styles.featureIcon}`}
                      >
                        {feature.icon}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        //  Aici afisez viuzalizarea detaliata a camerei - cand o camera este selectata
      ) : (


        <div className={styles.roomDetail}>
          {/* La click se apeleaza fuctia handleBackClick care inchide de vizualizarea detaliata a camerei*/}
          <button onClick={handleBackClick} className={styles.backButton}>
            ← Back to Rooms
          </button>

          <div className={styles.detailContent}>

            {/* In partea stanga se afiseaza slider-ul */}
            <div className={styles.imageSlider}>
              <img
                // Se afiseaza imaginea curenta din array-ul cu imagini
                src={selectedRoom.images[currentImageIndex]}
                alt={selectedRoom.title}
                className={styles.detailImage}
              />

              {/* Afisarea butoanelor prev si next */}
              {selectedRoom.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={styles.sliderArrow}
                    style={{ left: "10px" }}
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextImage}
                    className={styles.sliderArrow}
                    style={{ right: "10px" }}
                  >
                    ❯
                  </button>

                  {/* Dots pentru slider */}
                  <div className={styles.sliderDots}>
                    {/* Itereaza prin fiecare iamgine, ignora imagina in sine */}
                    {selectedRoom.images.map((_, index) => (
                      <span
                        key={index}
                        className={`${styles.dot} ${
                          index === currentImageIndex ? styles.activeDot : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

              {/* Descrierea camerei - titlu si subtitlu */}
            <div className={styles.detailInfo}>
              <h2>{selectedRoom.title}</h2>
              <p className={styles.detailDescription}>
                {selectedRoom.description}
              </p>

              {/* Lista de features */}
              <div className={styles.detailFeatures}>
                <h3>Room Features</h3>
                <ul>
                  {selectedRoom.features.map((feature, i) => (
                    <li key={i}>
                      <span
                        className={`material-symbols-outlined ${styles.featureIcon}`}
                      >
                        {feature.icon}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Sectiunea pretului si butonului */}
              <div className={styles.priceSection}>
                <span className={styles.detailPrice}>{selectedRoom.price}</span>
                <span className={styles.priceNote}>per night</span>
                <button
                  className={styles.bookButton}
                  onClick={() => window.open("https://www.booking.com", "_blank")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};



import React, { useState } from "react";
import styles from "./OurRoomsSection.module.css";
import { useNavigate } from "react-router-dom";
// First room
import roomImage1 from "../../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-1.jpg";
import roomImage11 from "../../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-2.jpg";
import roomImage12 from "../../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-3.jpg";

// Second room
import roomImage2 from "../../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-1.jpg";
import roomImage22 from "../../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-2.jpg";
import roomImage23 from "../../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-3.jpg";

// Third room
import roomImage3 from "../../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-1.jpg";
import roomImage32 from "../../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-2.jpg";
import roomImage33 from "../../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-3.jpg";

// Fourth room
import roomImage4 from "../../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-1.jpg";
import roomImage42 from "../../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-2.jpg";
import roomImage43 from "../../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-3.jpg";

// Fifth room
import roomImage5 from "../../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-1.jpg";
import roomImage52 from "../../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-2.jpg";
import roomImage53 from "../../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-3.jpg";

// Sixth room
import roomImage6 from "../../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-1.jpg";
import roomImage62 from "../../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-2.jpg";
import roomImage63 from "../../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-3.jpg";

export default function RoomCards() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Array-ul de obiecte cu detaliile camerelor
  const rooms = [
    {
      id: 1,
      title: "Deluxe King Garden View",
      description:
        "Laid out in pairs within semi-detached pavilions, villas feature a private terrace with a daybed and a spacious bathroom with indoor and outdoor rain showers.",
      price: "$484",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "43 Sq. m." },
        { icon: "bed", text: "1 queen bed" },
      ],
      images: [roomImage1, roomImage11, roomImage12],
    },
    {
      id: 2,
      title: "Grand Deluxe Garden View",
      description:
        "Features a spacious outdoor terrace with a large living area and bathroom with outdoor rain shower.",
      price: "$815",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "54 Sq. m." },
        { icon: "bed", text: "1 king bed" },
      ],
      images: [roomImage2, roomImage22, roomImage23],
    },
    {
      id: 3,
      title: "Junior Pool Suite",
      description:
        "Private pool suite with luxurious amenities and comfortable seating area.",
      price: "$400",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "48 Sq. m." },
        { icon: "bed", text: "1 king bed" },
      ],
      images: [roomImage3, roomImage32, roomImage33],
    },
    {
      id: 4,
      title: "Grand Pool Suite Seaview",
      description: "Luxurious suite with private pool and panoramic sea views.",
      price: "$350",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "55 Sq. m." },
        { icon: "bed", text: "1 king bed" },
      ],
      images: [roomImage4, roomImage42, roomImage43],
    },
    {
      id: 5,
      title: "Spa Pool Suites",
      description: "Suite features a spa pool and separate living room.",
      price: "$450",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "50 Sq. m." },
        { icon: "bed", text: "1 king bed" },
      ],
      images: [roomImage5, roomImage52, roomImage53],
    },
    {
      id: 6,
      title: "Grand Pool Suite Beachfront",
      description:
        "Spacious room for families with additional children's amenities.",
      price: "$500",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "65 Sq. m." },
        { icon: "bed", text: "1 queen bed" },
      ],
      images: [roomImage6, roomImage62, roomImage63],
    },
  ];

  // Functia selecteaza o camera si reseteaza slider-ul imaginii
  const handleCardClick = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  // Functia pentru a merge inapoi la lista de camere - reseteaza camera selectata
  const handleBackClick = () => {
    setSelectedRoom(null);
  };

  // Functia pentru a naviga la pagina de rezervare
  const handleBookNow = (roomId) => {
    navigate(`/book-now/${roomId}`);
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
                  onClick={() => handleBookNow(selectedRoom.id)}
                  className={styles.bookButton}
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



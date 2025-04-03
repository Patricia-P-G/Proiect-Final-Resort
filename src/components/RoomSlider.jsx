import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./RoomSlider.module.css";

// Import array-ul de obiecte cu camerele
import { rooms } from "./roomsData.js";

// Componentele pentru arrows
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customArrow} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
    />
  );
};

export default function RoomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.roomSlider}>
      <h1>Rooms & Suites</h1>
      <p>
        Escape to comfort and luxury in our beautifully designed rooms and
        suites. Whether you are looking for a cozy hideaway or a spacious
        retreat, each space is thoughtfully created to offer the perfect mix of
        relaxation and style.
      </p>

      <Slider {...settings}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.card}>
            <img
              src={room.images[0]}
              alt={room.title}
              className={styles.cardImage}
            />
            <h3>{room.title}</h3>
            <p>{room.description}</p>

            {/* Sectiunea features */}
            <div className={styles.featuresContainer}>
              {room.features.map((feature, i) => (
                <div key={i} className={styles["feature-with-icon"]}>
                  <span
                    className={`material-symbols-outlined ${styles["feature-icon"]}`}
                  >
                    {feature.icon}
                  </span>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.price}>{room.price}</div>
            <button
              className={styles.bookButton}
              onClick={() => window.open("https://www.booking.com", "_blank")}
            >
              Book Now
            </button>
          </div>
        ))}
      </Slider>
    </section>
  );
}

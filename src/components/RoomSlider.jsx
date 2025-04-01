import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./RoomSlider.module.css";

import roomImage1 from "../assets/img-our-rooms/deluxe-king-garden/img-deluxe-garden-1.jpg";
import roomImage2 from "../assets/img-our-rooms/grand-deluxe-garden/img-grand-deluxe-garden-1.jpg";
import roomImage3 from "../assets/img-our-rooms/junior-pool-suite/img-junior-pool-suite-1.jpg";
import roomImage4 from "../assets/img-our-rooms/grand-pool-suite-seaview/img-grand-pool-suite-seaview-1.jpg";
import roomImage5 from "../assets/img-our-rooms/spa-pool-suites/img-spa-pool-suite-1.jpg";
import roomImage6 from "../assets/img-our-rooms/grand-pool-suite-beachfront/img-grand-pool-suite-beachfront-1.jpg";


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

  // Datele pentru carduri - structura nouă
  const rooms = [
    {
      id: 1,
      title: "Deluxe King Garden View",
      description: "Fatures a private terrace with a spacious bathroom with indoor and outdoor rain showers.",
      price: "$484",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "43 Sq. m." },
        { icon: "bed", text: "1 queen bed" }
      ],
      images: [roomImage1]
    },
    {
      id: 2,
      title: "Grand Deluxe Garden View",
      description: "Features an outdoor terrace with a large living area and bathroom with outdoor rain shower.",
      price: "$815",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "54 Sq. m." },
        { icon: "bed", text: "1 king bed" }
      ],
      images: [roomImage2]
    },
    {
      id: 3,
      title: "Junior Pool Suite",
      description: "Private pool suite with luxurious amenities and comfortable seating area.",
      price: "$400",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "48 Sq. m." },
        { icon: "bed", text: "1 king bed" }
      ],
      images: [roomImage3]
    },
    {
      id: 4,
      title: "Grand Pool Suite Seaview",
      description: "Luxurious suite with private pool and panoramic sea views.",
      price: "$350",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "55 Sq. m." },
        { icon: "bed", text: "1 king bed" }
      ],
      images: [roomImage4]
    },
    {
      id: 5,
      title: "Spa Pool Suites",
      description: "Suite features a spa pool and separate living room.hhhhhhhhh",
      price: "$450",
      features: [
        { icon: "person", text: "Max. Guests: 2" },
        { icon: "square_foot", text: "50 Sq. m." },
        { icon: "bed", text: "1 king bed" }
      ],
      images: [roomImage5]
    },
    {
      id: 6,
      title: "Grand Pool Suite Beachfront",
      description: "Spacious room for families with additional children's amenities.",
      price: "$500",
      features: [
        { icon: "person", text: "Max. Guests: 4" },
        { icon: "square_foot", text: "65 Sq. m." },
        { icon: "bed", text: "2 queen beds" }
      ],
      images: [roomImage6]
    }
  ];

  return (
    <section className={styles.roomSlider}>
      <h1>Rooms & Suites</h1>
      <p>
        Escape to comfort and luxury in our thoughtfully designed rooms and
        suites. Whether you're seeking a cozy retreat or a spacious haven, each
        space is crafted to provide the perfect blend of relaxation and style.
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
            
            {/* Sectiunea features modificată pentru iconițe verticale */}
            <div className={styles.featuresContainer}>
              {room.features.map((feature, i) => (
                <div key={i} className={styles['feature-with-icon']}>
                  <span className={`material-symbols-outlined ${styles['feature-icon']}`}>
                    {feature.icon}
                  </span>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className={styles.price}>{room.price}</div>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        ))}
      </Slider>
    </section>
  );
};
import React from "react";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import heroImage from "../assets/img-main/hero-main.png";
import OurRoomsSection from "../components/OurRooms/OurRoomsSection";

function OurRooms() {
  return (
    <div>
      <Hero
        title="Our Rooms"
        description="Discover our luxurious accommodations designed for your comfort. 
        Every room offers a perfect blend of style and relaxation, complemented by premium
        facilities. Enjoy an exceptional stay with elegance in every detail."
        backgroundImage={heroImage}
      />
      <OurRoomsSection />
      <Footer />
    </div>
  );
}

export default OurRooms;

import React from "react";
import Hero from "../components/HeroSection";
import GallerySection from "../components/Gallery/GallerySection";
import Footer from "../components/Footer";
import heroImage from "../assets/img-main/hero-main.png";

function Gallery() {
  return (
    <div>
      <Hero
        title="Gallery"
        description="Take a look at our cozy rooms, sunny pool area, and peaceful garden spots. These pictures show the simple comfort and
         warm atmosphere you will find during your stay with us. We hope these glimpses help you picture your own relaxing getaway. At Sunset
         Breeze, we have created a space where time slows down and everyday worries fade away."
        backgroundImage={heroImage}
      />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default Gallery;

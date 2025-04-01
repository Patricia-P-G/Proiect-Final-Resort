import React from "react";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import heroImage from "../assets/img-main/hero-main.png";
import BookSection from "../components/BookNow/BookNowSection.jsx";

 function BookNow() { 
  return (
    <div>
      <Hero
        title="Book Now"
        description="Choose from our elegant rooms, each with its own charm and personality and enjoy a stay that exceeds expectations.
        Fill out the form now to benefit from our exceptional guests and premium services."
        backgroundImage={heroImage}
      />
      <BookSection />  
      <Footer />
    </div>
  );
}

export default BookNow;
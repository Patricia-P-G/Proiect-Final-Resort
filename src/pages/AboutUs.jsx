import React from "react";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import heroImage from "../assets/img-main/hero-main.png";
import AboutUsSection from "../components/AboutUs/AboutUsSection";

function AboutUsPage() {
  return (
    <div>
      <Hero
        title="About Us"
        description="On this page, you will discover more about our resort and the unique experiences we offer at Sunset Breeze Luxury. Explore
        what makes our resort unique from pristine beaches to curated experiences, every detail is designed to immerse you in the beauty of Racha
        Yai Island."
        backgroundImage={heroImage}
      />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default AboutUsPage;

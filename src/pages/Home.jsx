import React from "react";
import Hero from "../components/HeroSection"; 
import ResortSection from "../components/ResortSection"; 
import Facilities from "../components/Facilities";
import RoomSlider from "../components/RoomSlider";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import heroImage from "../assets/img-main/hero-main.png"



function Home() {
  return (
    <div>
      <Hero 
        title="Your Luxury Escape<br>at Sunset Breeze Resort"
        description="Step into a world of timeless sophistication at <strong>Sunset Breeze Resort</strong>, where the golden sands
        meet the azure waves. Nestled alone, the pristine shores of <strong>Raya Yai</strong>, our hotel
        offers a harmonious blend of modern luxury and tropical charm."
        backgroundImage={heroImage}
        buttonText="See Our Rooms"
        buttonLink="/our-rooms"
      />
      <ResortSection />
      <Facilities />
      <RoomSlider />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default Home;

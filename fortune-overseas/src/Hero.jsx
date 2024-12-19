import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";

const Hero = () => {
  // Array of images and corresponding background colors
  const images = [
    { src: "/src/assets/almond.jpg", color: "#8B4513" }, // Brown for Almonds
    { src: "/src/assets/cashews.jpg", color: "#FFFDD0" }, // Cream for Cashews
    { src: "/src/assets/dates.jpg", color: "#5B3A29" },   // Dark Brown for Dates
    { src: "/src/assets/cramberry.jpg", color: "#B11226" }, // Dark Red for Cranberries
  ];

  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image and background color after each animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds to match the animation duration

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Get the current image and background color
  const currentImage = images[currentIndex];

  return (
    <>
    <Navbar heroColor={currentImage.color} /> 
    <div
      className="hero-section"
      style={{ backgroundColor: currentImage.color }} // Dynamic background color
    >
      {/* Left Section */}
      <div className="left-section">
      <div className="text-box">
        <h1 className="company-name">Fortune Overseas</h1>
        <p className="tagline-1">Premium Dry Fruits, Crafted by Nature.</p>
        <p className="tagline">"Goodness Sealed in Every Pack"</p>
      </div>
      </div>

      {/* Right Section - Carousel */}
      <div className="right-section">
        <div className="carousel">
          <img
            src={currentImage.src} // Dynamically update the image
            alt="Dry Fruit"
            className="carousel-item"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
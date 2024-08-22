/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Carruselimg.css";

// Import images using relative paths
import image1 from "../../assets/carrusel/3.png";
import image2 from "../../assets/carrusel/4.png";
import image3 from "../../assets/carrusel/5.png";
import image4 from "../../assets/carrusel/6.png";
import image5 from "../../assets/carrusel/7.png";
import image6 from "../../assets/carrusel/8.png";
import image7 from "../../assets/carrusel/9.png";
import image8 from "../../assets/carrusel/10.png";

const Carruselimg = () => {
  const images = [
    { src: image1, alt: 'COBRE INOX', title: 'DISEÑA SU FORMA DE INSTALACIÓN' },
    { src: image2, alt: 'COBRE INOX', title: 'OFICINAS' },
    { src: image3, alt: 'COBRE INOX', title: 'INSTALACIÓN FUERA DE AREQUIPA' },
    { src: image4, alt: 'COBRE INOX', title: 'INSTALACIÓN DE TANQUES DE AGUA' },
    { src: image5, alt: 'COBRE INOX', title: 'INSTALACIÓN DE TANQUES DE AGUA' },
    { src: image6, alt: 'COBRE INOX', title: 'INSTALACIÓN DE TANQUES DE AGUA' },
    { src: image7, alt: 'COBRE INOX', title: 'INSTALACIÓN DE TANQUES DE AGUA' },
    { src: image8, alt: 'COBRE INOX', title: 'INSTALACIÓN DE TANQUES DE AGUA' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrusel-container">
      <h2 className="carrusel-title">
        <span className="cobre">COBRE </span><span className="inox">INOX</span>
      </h2>
      <div className="carrusel-wrapper">
        <button className="carrusel-button prev" onClick={prevSlide}>&lt;</button>
        <div className="carrusel-content">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="carrusel-item"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img src={image.src} alt={image.alt} />
              <div className="carrusel-caption">
                <h3>{image.alt}</h3>
                <p>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carrusel-button next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Carruselimg;
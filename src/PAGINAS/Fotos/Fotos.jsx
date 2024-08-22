/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Fotos.css";
import 'animate.css';  // Importa animate.css

// Corrige las rutas de importación
import img1 from "../images/foto (1).jpg";
import img2 from "../images/foto (2).jpg";
import img3 from "../images/foto (3).jpg";
import img4 from "../images/foto (4).jpg";
import img5 from "../images/foto (5).jpg";
import img6 from "../images/foto (6).jpg";
import img7 from "../images/foto (7).jpg";
import img8 from "../images/foto (8).jpg";
import img9 from "../images/foto (9).jpg";
import img10 from "../images/foto (10).jpg";
import img11 from "../images/foto (11).jpg";
import img12 from "../images/foto (12).jpg";
import img13 from "../images/foto (13).jpg";
import img14 from "../images/foto (14).jpg";
import img15 from "../images/foto (15).jpg";
import img16 from "../images/foto (16).jpg";
import img17 from "../images/foto (17).jpg";
import img18 from "../images/foto (18).jpg";
import img19 from "../images/foto (19).jpg";
import img20 from "../images/foto (20).jpg";
import img21 from "../images/foto (21).jpg";
import img22 from "../images/foto (22).jpg";
import img23 from "../images/foto (23).jpg";
import img24 from "../images/foto (24).jpg";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23,
    img24,
  ];

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="fotos">
      <div className="galeria">
        <h1 className="animate__animated animate__fadeInDown">Galería Cobre Inox</h1>
        <div className="imagenes-galeria">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              onClick={() => openImage(index)}
              className="animate__animated animate__zoomIn"
            />
          ))}
        </div>

        {selectedImage !== null && (
          <div className="overlay animate__animated animate__fadeIn">
            <div className="close" onClick={closeImage}>
              &times;
            </div>
            <div className="arrow left" onClick={previousImage}>
              &#10094;
            </div>
            <img
              src={images[selectedImage]}
              alt={`Imagen ${selectedImage + 1}`}
              className="full-image animate__animated animate__zoomIn"
            />
            <div className="arrow right" onClick={nextImage}>
              &#10095;
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;

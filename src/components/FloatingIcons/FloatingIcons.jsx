/* eslint-disable no-unused-vars */
import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "51945809532"; // Reemplaza con el número de teléfono real
    const message = `Hola, estoy interesado en sus productos. Por favor, envíame más información. Mi nombre es [tu nombre].`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleMessengerClick = () => {
    const pageID = "yourpage"; // Reemplaza con el ID de tu página de Facebook
    const message = `Hola, estoy interesado en sus productos. Por favor, envíame más información. Mi nombre es [tu nombre].`;
    const messengerURL = `https://m.me/${pageID}?message=${encodeURIComponent(message)}`;
    window.open(messengerURL, "_blank");
  };

  return (
    <div className="floating-icons">
      <div className="icon whatsapp" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </div>
      <div className="icon messenger" onClick={handleMessengerClick}>
        <FaFacebookMessenger />
      </div>
    </div>
  );
};

export default FloatingIcons;

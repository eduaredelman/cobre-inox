/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Contactos</h4>
          <p>950770631</p>
          <p>945809532</p>
          <p>941965090</p>
        </div>
        <div className="footer-column">
          <h4>Tecnología</h4>
          <p>Soldadura TIG</p>
          <p>Soldadura Autógena</p>
          <p>Soldadura MIG MAG</p>
          <p>Opción 4</p>
        </div>
        <div className="footer-column">
          <h4>Beneficios</h4>
          <p>Somos Fabricantes</p>
          <p>Agua Caliente 24h</p>
          <p>Ahorre Dinero</p>
          <p>Energía Natural</p>
        </div>
        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/alfredo.chani" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:tuemail@example.com" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://www.youtube.com/@termassolarcobreinox960" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <h1>Cobre<span>Inox</span></h1>
      </div>
      <p className="footer-text">
        Estamos aquí para responder a todas sus preguntas y ayudarle a dar el paso hacia un sistema de calefacción de agua más eficiente y amigable con el medio ambiente en todos los departamentos y provincias de Arequipa. ¡Póngase en contacto con nosotros hoy mismo para programar una visita gratuita a su hogar y obtener su presupuesto personalizado! Termas Solar Cobre Inox está listo para servirle en toda Arequipa.
      </p>
    </footer>
  );
};

export default Footer;

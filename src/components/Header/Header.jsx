/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../Header/Header.css";

import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId, page) => {
    navigate(`/${page}`);
    setMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "51945809532";
    const message = "Hola, me gustaría hablar con un experto sobre termas solares.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${menuOpen ? "active" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={() => handleNavigation("inicio", "")}>
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <nav className={`desktop-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => handleNavigation("inicio", "")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" onClick={() => handleNavigation(null, "productos")}>
              Productos
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/nosotros" onClick={() => handleNavigation("sachaca", "nosotros")}>
              Nosotros
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4>Hogar & Oficina</h4>
                <a onClick={() => handleNavigation("sachaca", "nosotros")}>
                  Sachaca
                </a>
                <a onClick={() => handleNavigation("sachaca", "nosotros")}>
                  Cerro Colorado
                </a>
              </div>
              <div className="dropdown-section">
                <h4>Empresa</h4>
                <a onClick={() => handleNavigation("informacion", "nosotros")}>
                  Información
                </a>
                <a onClick={() => handleNavigation("info-tecnica", "nosotros")}>
                  Información Técnica
                </a>
                <a onClick={() => handleNavigation("linea-empresarial", "nosotros")}>
                  Línea Empresarial
                </a>
              </div>
              <div className="dropdown-section">
                <h4>Productos</h4>
                <Link to="/Productos" onClick={() => handleNavigation("precio", "productos")}>
                  Precio
                </Link>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/termas-solares" onClick={() => handleNavigation("tanques-acero-inoxidable", "termas-solares")}>
              Termas Solares
            </Link>
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h4>Tanques</h4>
                <a onClick={() => handleNavigation("tanques-acero-inoxidable", "termas-solares")}>
                  Acero Inoxidable
                </a>
                <a onClick={() => handleNavigation("tanques-acero-lac", "termas-solares")}>
                  Acero LAC
                </a>
              </div>
              <div className="dropdown-section">
                <h4>Paneles</h4>
                <a onClick={() => handleNavigation("paneles-tubos-cobre-rigido", "termas-solares")}>
                  Tubos de Cobre Rígido
                </a>
                <a onClick={() => handleNavigation("paneles-tubos-cobre-rigido", "termas-solares")}>
                  Tubos al Vacío
                </a>
                <a onClick={() => handleNavigation("paneles-tubos-cobre-rigido", "termas-solares")}>
                  Modelo-Omega Plus
                </a>
              </div>
              <div className="dropdown-section">
                <h4>Soldadura</h4>
                <a onClick={() => handleNavigation("tecnologia", "termas-solares")}>
                  Tecnologia
                </a>
              </div>
              <div className="dropdown-section">
                <h4>Galería Inox</h4>
                <Link to="/fotos" onClick={() => handleNavigation("Fotos", "fotos")}>
                  Fotos
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="burger-icon" />
      </div>

      <div className="contact-info">
        <div className="contact-item" onClick={handleWhatsAppClick}>
          <p>Habla con un experto</p>
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </div>
        <div className="contact-item">
          <p className="phone-number">945809532</p>
        </div>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <FontAwesomeIcon icon={faUser} className="user-icon" onClick={() => navigate('/login')} />
      </div>
    </header>
  );
};

export default Header;

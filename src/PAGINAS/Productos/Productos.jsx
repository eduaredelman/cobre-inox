/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Productos.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

// Importa las imágenes
import image1 from "../../assets/img-productos/image1.png";
import image2 from "../../assets/img-productos/img venta.png";
import image3 from "../../assets/img-productos/Agregar un título.png";
import image4 from "../../assets/img-productos/ventas 180.png";
import image5 from "../../assets/img-productos/img ventas2.png";
import image6 from "../../assets/img-productos/venta de 300lt.png";
import image7 from "../../assets/img-productos/baseytanque.png";
import image8 from "../../assets/img-productos/tanques.png";
import image9 from "../../assets/img-productos/paneles.png";

const productos = [
  { capacidad: "90 Lts.", duchas: "2/3", image: image1 },
  { capacidad: "120 Lts.", duchas: "3/4", image: image2 },
  { capacidad: "150 Lts.", duchas: "4/5", image: image3 },
  { capacidad: "180 Lts.", duchas: "5/6", image: image4 },
  { capacidad: "240 Lts.", duchas: "7/8", image: image5 },
  { capacidad: "300 Lts.", duchas: "9/10", image: image6 },
  {
    titulo: "Tanque de Agua + Base",
    descripcion: "Ideal para almacenamiento de agua con soporte resistente.",
    image: image7,
  },
  {
    titulo: "Tanque de Agua",
    descripcion: "Tanque de alta capacidad para diversas necesidades.",
    image: image8,
  },
  {
    titulo: "Panel Solar",
    descripcion: "Panel solar eficiente para energía sostenible.",
    image: image9,
  },
];

const Productos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleWhatsAppClick = (producto, action) => {
    const phoneNumber = "51945809532"; // Reemplaza con el número de teléfono real
    let message = "";

    if (producto.capacidad) {
      message = `Hola, estoy interesado en ${action} el producto con capacidad de ${producto.capacidad}, que proporciona ${producto.duchas} duchas por día.`;
    } else {
      message = `Hola, estoy interesado en ${action} el producto ${producto.titulo}, que es ${producto.descripcion}.`;
    }

    message += " Mi nombre es [tu nombre]. Por favor, envíame más información.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="precio">
      <div className="productos-container">
        <h1>Termas Solares Arequipa</h1>
        <div className="productos-grid">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="producto-card animate__animated"
              data-aos="fade-up"
            >
              <img
                src={producto.image}
                alt={`Termas ${producto.capacidad || producto.titulo}`}
              />
              {producto.capacidad ? (
                <>
                  <h3>Capacidad: {producto.capacidad}</h3>
                  <p>{producto.duchas} Duchas por día</p>
                </>
              ) : (
                <>
                  <h3>{producto.titulo}</h3>
                  <p>{producto.descripcion}</p>
                </>
              )}
              <div className="button-container">
                <button
                  className="consultar-btn"
                  onClick={() => handleWhatsAppClick(producto, "consultar sobre")}
                >
                  <FaWhatsapp /> Consultar
                </button>
                <button
                  className="comprar-btn"
                  onClick={() => handleWhatsAppClick(producto, "comprar")}
                >
                  <FaShoppingCart /> Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="agradecimiento-container">
          <p>Gracias por visitar nuestra página o comprar nuestros productos.</p>
          <button
            className="consultar-btn"
            onClick={() =>
              handleWhatsAppClick({
                descripcion: "Quiero saber más sobre visitas gratuitas.",
              }, "solicitar información sobre")
            }
          >
            Visitas Gratuitas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productos;
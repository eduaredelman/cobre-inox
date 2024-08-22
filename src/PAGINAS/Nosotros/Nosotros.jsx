/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Nosotros.css";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import cobreInoxImage from "../../assets/nosotros/terma.png";
import imagen1 from "../../assets/nosotros/foto 2.jpg";
import imagen2 from "../../assets/nosotros/foto 1.jpg";


const Nosotros = () => {
  const location = useLocation();
  const headerHeight = 80; // Altura del header

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="nosotros">
      <section id="sachaca" className="nosotros" data-aos="fade-up">
        <h1>Nuestras Tiendas</h1>
        <div className="tiendas">
          <div className="tienda" data-aos="fade-up">
            <h2>AREQUIPA. SACHACA</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.387446244305!2d-71.54922282444355!3d-16.44967454030009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424abf516f9b15%3A0x21491a9a9e66af67!2sVilla%20El%20Triunfo%2C%20Sachaca%2004012%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1689002731001!5m2!1ses-419!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>VILLA EL TRIUNFO ZN.B.Mz.f Lt.1</p>
            <p>Teléfono: 945809532</p>
          </div>

          <div className="tienda" data-aos="fade-up">
            <h2>AREQUIPA. CERRO COLORADO</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4275830558163!2d-71.54512382444345!3d-16.448556540300004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424abcba71f9b3%3A0x8b2e0ff5ff6aaf67!2sCerro%20Colorado%2C%20Arequipa%2004012%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1689002731001!5m2!1ses-419!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>asc.via las flores zn.1 Mz.k Lt.2 Av.54</p>
            <p>Teléfono: 941965090</p>
          </div>
        </div>
      </section>
      <hr data-aos="fade-up" />
      <section id="informacion" className="informacion" data-aos="fade-up">
        <h2>
          INFORMACIÓN <span>COBRE</span> INOX
        </h2>
        <div className="content">
          <div data-aos="fade-up">
            <h3>Cobre Inox</h3>
            <p>
              Termas solares de cobre inoxidable. Somos líderes en la
              fabricación y distribución de sistemas de termas solares de alta
              calidad, diseñados para proporcionar agua caliente de manera
              eficiente y sostenible. Nuestros productos están elaborados con
              los mejores materiales y tecnologías disponibles en el mercado,
              garantizando un rendimiento excepcional y durabilidad a largo
              plazo.
            </p>
            <h4>Detalles</h4>
            <ul className="detalles">
              <li>Termas solares 100% acero inoxidable</li>
              <li>Agua caliente 24h</li>
              <li>Para el hogar, hotelería</li>
              <li>Garantía 5 años</li>
              <li>Instalación profesional incluida</li>
              <li>Resistente a la corrosión y la oxidación</li>
              <li>Ahorro energético</li>
              <li>Materiales de alta calidad</li>
            </ul>
          </div>
          <div data-aos="fade-up">
            <h3>Técnico en Cobre Inox</h3>
            <p>
              Soldador en Sachaca, Arequipa, Perú. Estudió operaciones en
              Instituto Tecnológico Privado Flavisur. Estudió en Independencia
              Americana. Vive en Sachaca, Arequipa, Perú. Experiencia en la
              industria del cobre inoxidable: 10 años. Certificaciones en
              soldadura de alta precisión. Conocimiento avanzado en tecnologías
              de energía solar. Comprometido con la excelencia y la satisfacción
              del cliente.
            </p>
            <img
              src={cobreInoxImage}
              alt="Cobre Inox"
            />
          </div>
        </div>
      </section>
      <hr data-aos="fade-up" />
      
      <section id="info-tecnica" data-aos="fade-up">
        <h2>Contacto Técnico</h2>
        <p>
          ¡Contáctanos hoy para obtener más información o para programar una
          consulta gratuita!
        </p>
        <p>Teléfono: +51 945809532</p>
        <p>Correo electrónico: info@cobreinox.com</p>
        <p>Dirección: VILLA EL TRIUNFO ZN.B.Mz.f Lt.1</p>
        <p>Horario de atención: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
        <hr data-aos="fade-up" />
        <div className="imagenes" data-aos="fade-up">
          <img
            src={imagen1}
            alt="Imagen 1"
            className="imagen"
          />
          <img
            src={imagen2}
            alt="Imagen 2"
            className="imagen"
          />
        </div>
        <hr data-aos="fade-up" />
        <div className="additional-info" data-aos="fade-up">
          <h3>Oficinas Regionales</h3>
          <p>
            Contamos con oficinas en diversas regiones para atender tus
            necesidades localmente.
          </p>
          <ul>
            <li>Arequipa: +51 945809532</li>
            <li>Lima: +51 941234567</li>
            <li>Cusco: +51 947654321</li>
          </ul>
        </div>
        <div className="support" data-aos="fade-up">
          <h3>Soporte Técnico</h3>
          <p>
            Nuestro equipo de soporte técnico está disponible para asistirte con
            cualquier problema o consulta que puedas tener.
          </p>
          <p>Horario de soporte: Lunes a Viernes, 8:00 AM - 6:00 PM</p>
        </div>
      </section>
      <hr data-aos="fade-up" />

      <section id="linea-empresarial" data-aos="fade-up">
        <h2>Línea Empresarial</h2>
        <div className="card-container">
          <div className="card" data-aos="fade-up">
            <h3>Eficiencia Energética</h3>
            <p>
              Nuestras termas solares están diseñadas para aprovechar al máximo
              la energía del sol y convertirla en agua caliente para su uso en
              el hogar, la hotelería y otras aplicaciones comerciales. Con
              nuestros sistemas, puedes disfrutar de agua caliente las 24 horas
              del día, de manera sostenible y económica.
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Calidad Superior</h3>
            <p>
              Utilizamos cobre inoxidable de alta calidad en la fabricación de
              nuestros productos, lo que garantiza resistencia a la corrosión y
              la oxidación, así como una vida útil prolongada. Nuestras termas
              solares están construidas para soportar las condiciones más
              exigentes y proporcionar un rendimiento confiable a lo largo del
              tiempo.
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Instalación Profesional</h3>
            <p>
              Ofrecemos servicios de instalación profesional incluidos en la
              compra de nuestros sistemas de termas solares. Nuestro equipo de
              técnicos expertos se encargará de instalar tu sistema de manera
              rápida y eficiente, asegurando un funcionamiento óptimo desde el
              primer día.
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Garantía de 5 Años</h3>
            <p>
              Respaldamos la calidad y fiabilidad de nuestros productos con una
              garantía de 5 años. Esto te brinda tranquilidad y confianza en tu
              inversión, sabiendo que estamos comprometidos a ofrecer productos
              de la más alta calidad y satisfacción al cliente.
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Soporte Técnico</h3>
            <p>
              Nuestro equipo de soporte técnico está disponible para ayudarte
              con cualquier consulta o problema que puedas tener con tu sistema
              de termas solares. Ofrecemos soporte continuo para asegurar que tu
              sistema funcione de manera óptima en todo momento.
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Distribución Nacional</h3>
            <p>
              Estamos comprometidos a llevar nuestros productos a todo el país.
              Ofrecemos distribución y servicios de instalación fuera de
              Arequipa para asegurarnos de que todos puedan beneficiarse de
              nuestras soluciones de termas solares de alta calidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
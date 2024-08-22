/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./TermasSolares.css";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import imgTanqueInoxidable from "../../assets/termas solares/img.webp";
import imgTanqueLacado from "../../assets/termas solares/mg2.jpg";
import imgPanelCobre from "../../assets/termas solares/panel.jpg";
import imgPanelVacio from "../../assets/termas solares/66217bb1e010fa000d431fd2.jpg";
import imgOmegaPlus from "../../assets/termas solares/Diseño sin título (5).png";
import imgSoldaduraTIG from "../../assets/termas solares/soldarura.jpg";
import imgSoldaduraAutogena from "../../assets/termas solares/autogena.jpg";
import imgSoldaduraMIGMAG from "../../assets/termas solares/curso-soldadura-mig-mag.jpg";


const TermasSolares = () => {
  const location = useLocation();
  const headerHeight = 80; // Altura del header

  useEffect(() => {
    AOS.init({ duration: 1150 });

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
    <div className="termas-solares main-content">
      <section id="tanques-acero-inoxidable" className="termas-solares">
        <h1 data-aos="fade-up">Tipos de Tanques y Tecnologías Solares</h1>
        <p data-aos="fade-up">
          En Termas Solares, ofrecemos una variedad de tanques y tecnologías
          solares diseñadas para proporcionar eficiencia y durabilidad en la
          captura y almacenamiento de energía solar. Nuestros productos están
          construidos con los más altos estándares de calidad y están diseñados
          para adaptarse a las necesidades específicas de cada cliente.
          Ofrecemos tanques de diferentes tamaños y capacidades, así como
          tecnologías solares avanzadas que garantizan un rendimiento óptimo y
          una larga vida útil. ¡Confíe en Termas Solares para obtener la mejor
          solución en energía solar!
        </p>

        <div className="tanques-contenedor">
          <div className="tanque" data-aos="fade-right">
            <h2 className="section-title">Tanques de Acero Inoxidable</h2>
            <img
              src={imgTanqueInoxidable}
              alt="Tanque de Acero Inoxidable"
            />
            <p>
              Tanques fabricados con acero inoxidable de alta calidad, ideales
              para resistir la corrosión y garantizar una larga vida útil.
            </p>
          </div>

          <div className="tanque" data-aos="fade-right">
            <h2 className="section-title">Tanques de Acero Lacado</h2>
            <img
              src={imgTanqueLacado}
              alt="Tanque de Acero Lacado"
            />
            <p>
              Tanques recubiertos con una capa de pintura especial que
              proporciona protección contra la corrosión y los elementos
              externos, asegurando una excelente durabilidad.
            </p>
          </div>
        </div>
      </section>
      <hr />

      <section id="paneles-tubos-cobre-rigido" className="termas-solares">
        <h1 data-aos="fade-up">Paneles Solares</h1>

        <div className="paneles-contenedor">
          <div className="panel" data-aos="fade-left">
            <img
              src={imgPanelCobre}
              alt="Rejilla de Tubos de Cobre Rígido"
            />
            <h2 className="section-title">Rejilla de Tubos de Cobre Rígido</h2>
            <p>
              Los paneles solares con rejilla de tubos de cobre rígido son una
              opción eficiente para la captura de energía solar. La disposición
              de los tubos de cobre garantiza una mayor superficie de captación,
              lo que resulta en una mayor eficiencia energética.
            </p>
          </div>

          <div className="panel" data-aos="fade-left">
            <img
              src={imgPanelVacio}
              alt="Tubos al Vacío"
            />
            <h2 className="section-title">Panel con Tubos al Vacío</h2>
            <p>
              Los paneles solares con tubos al vacío son ideales para maximizar
              la captura de energía solar incluso en condiciones de baja
              radiación. Estos tubos están diseñados para mantener el vacío en
              su interior, lo que minimiza la pérdida de calor y asegura un
              rendimiento óptimo.
            </p>
          </div>

          <div className="panel" data-aos="fade-left">
            <img
              src={imgOmegaPlus}
              alt="Modelo Omega Plus"
            />
            <h2 className="section-title">Modelo Omega Plus</h2>
            <p>
              El modelo Omega Plus es una opción avanzada en paneles solares.
              Con características innovadoras y un diseño robusto, este modelo
              garantiza un alto rendimiento y una larga vida útil. Es una
              excelente elección para aquellos que buscan una solución duradera
              y eficiente en energía solar.
            </p>
          </div>
        </div>
      </section>
      <hr />

      <section id="tecnologia" className="tecnologia-soldaduras">
        <h2 className="section-title" data-aos="fade-up">Tecnologías en Soldaduras</h2>

        <div className="soldadura" data-aos="fade-right">
          <div className="text-content">
            <h2>Soldadura TIG: Calidad y Limpieza Excepcionales</h2>
            <p>
              Descubre cómo la soldadura TIG proporciona una de las soldaduras
              más limpias y de alta calidad disponibles en el mercado. Con esta
              técnica, eliminamos por completo la posibilidad de inclusiones en
              el metal depositado, garantizando una calidad excepcional y una
              durabilidad incomparable. En Termas Solares Arequipa, nos
              enorgullecemos de ofrecer soldaduras TIG que superan las
              expectativas de nuestros clientes en términos de calidad y
              durabilidad.
            </p>
          </div>
          <img
            src={imgSoldaduraTIG}
            alt="Soldadura TIG"
          />
        </div>
        <div className="soldadura" data-aos="fade-right">
          <div className="text-content">
            <h2>
              Soldadura Autógena: Excelencia en la Unión de Tubos de Cobre
            </h2>
            <p>
              Descubre los beneficios de la soldadura autógena, una técnica que
              aplicamos en todos nuestros trabajos de unión de tubos de cobre y
              mantenimiento. Con la llama de acetileno y oxígeno, podemos
              ajustar perfectamente las características de la soldadura y el
              punto de fusión, garantizando una unión sólida y duradera. En
              Termas Solares Arequipa, nuestra soldadura autógena es sinónimo de
              alta calidad y excelencia en la producción.
            </p>
          </div>
          <img
            src={imgSoldaduraAutogena}
            alt="Soldadura Autógena"
          />
        </div>
        <div className="soldadura" data-aos="fade-right">
          <div className="text-content">
            <h2>
              Soldadura MIG-MAG: Eficiencia y Productividad en la Soldadura
            </h2>
            <p>
              Explora los beneficios de la soldadura MIG-MAG, el método más
              utilizado en Europa occidental, Estados Unidos y Japón debido a su
              elevada productividad y facilidad de automatización. En Termas
              Solares Arequipa, empleamos esta técnica para garantizar
              soldaduras limpias y de alta calidad, cumpliendo con todas las
              medidas de protección para el medio ambiente. Confía en nosotros
              para obtener resultados eficientes y sostenibles en tus proyectos
              de soldadura.
            </p>
          </div>
          <img
            src={imgSoldaduraMIGMAG}
            alt="Soldadura MIG-MAG"
          />
        </div>
      </section>
    </div>
  );
};

export default TermasSolares;

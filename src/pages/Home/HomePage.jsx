/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./HomePage.css";
import iconCalor from "../../assets/iconos/foto (4).png";
import iconAhorro from "../../assets/iconos/foto (9).png";
import iconEcologia from "../../assets/iconos/foto (8).png";
import iconBeneficios from "../../assets/iconos/foto (3).png";
import ecoImage from "../../assets/iconos/foto (6).jpg"; // Ruta a la imagen de la tierra
import inoxImage from "../../assets/iconos/foto (7).png"; // Ruta a la imagen del panel solar
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1050 });
  }, []);

  return (
    <main className="home">
      <h1 className="home-title" data-aos="fade-up">BIENVENIDO</h1>
      <h2 className="home-subtitle" data-aos="fade-up">TERMAS SOLARES COBRE INOX</h2>
      <p className="home-description" data-aos="fade-up">
        ¡Agua caliente garantizada las 24 horas de Garantía 5 años! Con nuestras
        innovadoras Termas Solares de Cobre Inoxidable, disfruta de un
        suministro constante de agua caliente sin preocupaciones. Olvídate de
        los cortes de energía y las facturas elevadas: nuestra tecnología de
        vanguardia te brinda confort y ahorro a largo plazo. Además, con una
        garantía líder en la industria, puedes confiar en la calidad y
        durabilidad de nuestros productos. Descubre una nueva forma de bienestar
        y sostenibilidad con nuestras termas solares. ¡Tu comodidad y el cuidado
        del planeta van de la mano!
      </p>
      <div className="features">
        <div className="feature" data-aos="fade-right">
          <img src={iconCalor} alt="Calor" className="feature-icon" />
          <h3 className="feature-title">Calor</h3>
          <p className="feature-description">Ingeniería Solar en su hogar.</p>
        </div>
        <div className="feature" data-aos="fade-right">
          <img src={iconAhorro} alt="Ahorro" className="feature-icon" />
          <h3 className="feature-title">Ahorro</h3>
          <p className="feature-description">Se notará drásticamente.</p>
        </div>
        <div className="feature" data-aos="fade-right">
          <img src={iconEcologia} alt="Ecología" className="feature-icon" />
          <h3 className="feature-title">Ecología</h3>
          <p className="feature-description">Usamos energía sustentable.</p>
        </div>
        <div className="feature" data-aos="fade-right">
          <img src={iconBeneficios} alt="Beneficios" className="feature-icon" />
          <h3 className="feature-title">Beneficios</h3>
          <p className="feature-description">Experiencia: Más de 25 años.</p>
        </div>
      </div>

      <section className="additional-section">
        <hr />
        <br />
        <h2 className="section-title" data-aos="fade-up">POR QUÉ ELEGIRNOS</h2>

        <p className="section-description" data-aos="fade-up">
          Cobre Inox es sinónimo de calidad, innovación y compromiso con la
          sostenibilidad. Con una sólida garantía y un equipo profesional,
          ofrecemos una experiencia excepcional. Confiar en Cobre Inox es elegir
          un futuro consciente del medio ambiente para tu hogar.
        </p>

        <hr />
        <div className="section-content">
          <div className="section-item" data-aos="fade-up">
            <img src={ecoImage} alt="Eco" className="section-image" />
            <div className="section-text">
              <h3 className="section-subtitle">Beneficios y Ahorro</h3>
              <p>
                Al elegir Cobre Inox para tus necesidades de energía solar,
                experimentarás una serie de beneficios significativos. No solo
                disfrutarás de un confort excepcional durante todo el año, sino
                que también reducirás notablemente tus costos energéticos.
                Aprovecha la energía solar y contribuye activamente a la
                preservación del medio ambiente, reduciendo tu huella de
                carbono. Nuestra tecnología avanzada garantiza un rendimiento
                óptimo, asegurando que tu inversión se traduzca en ahorros
                sustanciales a largo plazo.
              </p>
            </div>
          </div>
          <div className="section-item" data-aos="fade-up">
            <img src={inoxImage} alt="Inox" className="section-image" />
            <div className="section-text">
              <h3 className="section-subtitle">COBRE INOX</h3>
              <p>
                Nuestros productos son el resultado de un equipo profesional
                dedicado a la innovación y la durabilidad. Cada uno de nuestros
                productos es una obra maestra de ingeniería, diseñada para
                ofrecerte una eficiencia superior y una longevidad incomparable.
                Con una cobertura de hasta 5 años, puedes estar seguro de que tu
                inversión está protegida. Confía en Cobre Inox para transformar
                tu hogar en un espacio más eficiente y sostenible. Nuestros
                expertos están siempre disponibles para brindarte asesoramiento
                personalizado y soporte técnico.
              </p>
            </div>
          </div>
        </div>

        <br />
        <hr />

        <h2 className="section-title" data-aos="fade-up">MANTENIMIENTO Y VISITAS</h2>
        <p className="section-description" data-aos="fade-up">
          No solo ofrecemos productos de calidad excepcional en energía solar,
          sino que también brindamos un servicio completo. Con nosotros,
          recibirás mantenimiento y visitas gratuitas, asegurando que tu sistema
          de energía solar funcione de manera óptima en todo momento. Únete a la
          revolución solar con Cobre Inox y experimenta la diferencia que
          podemos hacer en tu vida. ¡Contáctanos hoy mismo!.
        </p>
        <hr />
      </section>
    </main>
  );
};

export default HomePage;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import Carruselimg from "./pages/Carruselimg/Carruselimg";
import Nosotros from "./PAGINAS/Nosotros/Nosotros";
import TermasSolares from "./PAGINAS/TermasSolares/TermasSolares";
import Productos from "./PAGINAS/Productos/Productos";
import Fotos from "./PAGINAS/Fotos/Fotos";
import FloatingIcons from "./components/FloatingIcons/FloatingIcons";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard"; // Actualiza la ruta según la estructura de tus archivos

import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <Router>
      <Header setActiveSection={setActiveSection} />
      <FloatingIcons />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <HomePage />
              <Carruselimg />
            </>
          }
        />
        <Route path="/nosotros" element={<Nosotros activeSection={activeSection} />} />
        <Route path="/termas-solares" element={<TermasSolares />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Actualiza la ruta para Dashboard */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

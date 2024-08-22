/* eslint-disable no-unused-vars */
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Panel de Control</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total de Usuarios</h3>
          <p>1,234</p>
        </div>
        <div className="summary-card">
          <h3>Proyectos Activos</h3>
          <p>56</p>
        </div>
        <div className="summary-card">
          <h3>Ingresos</h3>
          <p>$45,678</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Actividad Reciente</h2>
        <ul>
          <li>Usuario1 completó el proyecto A</li>
          <li>Usuario2 creó un nuevo ticket</li>
          <li>Usuario3 actualizó su perfil</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
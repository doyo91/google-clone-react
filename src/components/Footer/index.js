import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__countryInfo">
        <p>España</p>
      </div>
      <div className="footer__links">
        <div className="footer__linksLeft">
          <Link to="#">Publicidad</Link>
          <Link to="#">Empresa</Link>
          <Link to="#">Cómo funciona la Búsqueda</Link>
        </div>
        <div className="footer__linksRight">
          <Link to="#">Privacidad</Link>
          <Link to="#">Términos</Link>
          <Link to="#">Configuración</Link>
        </div>
      </div>
    </div>
  );
};

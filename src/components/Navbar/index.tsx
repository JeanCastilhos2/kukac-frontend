// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">KUKAC</Link>
      </div>
      <div className="right">
        <Link to="/PALINDROMOS">Desafio 1</Link>
        <Link to="/TROCO">Desafio 2</Link>
        <Link to="/VEICULOS">Desafio 3</Link>
        <Link to="/CEPS">Desafio 4</Link>
      </div>
    </nav>
  );
};

export default Navbar;

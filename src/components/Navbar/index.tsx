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
        <Link to="/desafio1">Desafio 1</Link>
        <Link to="/desafio2">Desafio 2</Link>
        <Link to="/desafio3">Desafio 3</Link>
        <Link to="/desafio4">Desafio 4</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// src/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <img
            src="https://kukac.com.br/wp-content/uploads/20211110174809.png"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="right">
        <Link to="/palindromos">Palindromos</Link>
        <Link to="/troco">Troco</Link>
        <Link to="/cadastrar-veiculo">Cadastrar Veiculos</Link>
        <Link to="/veiculos">Veiculos</Link>
        <Link to="/ceps">CEP's</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Palindromos from "./pages/Palindromos";
import Troco from "./pages/Troco";
import CadastroVeiculos from "./pages/Desafio3";
import Ceps from "./pages/Ceps";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="palindromos" element={<Palindromos />} />
          <Route path="troco" element={<Troco />} />
          <Route path="cadastrar-veiculo" element={<CadastroVeiculos />} />
          <Route path="ceps" element={<Ceps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

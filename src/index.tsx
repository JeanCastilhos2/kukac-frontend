import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Desafio1 from './pages/Desafio1';
import Desafio2 from './pages/Desafio2';
import Desafio3 from './pages/Desafio3';
import Desafio4 from './pages/Desafio4';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="desafio1" element={<Desafio1 />} />
          <Route path="desafio2" element={<Desafio2 />} />
          <Route path="desafio3" element={<Desafio3 />} />
          <Route path="desafio4" element={<Desafio4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



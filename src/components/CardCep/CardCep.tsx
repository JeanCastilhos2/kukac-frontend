import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";

interface CepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const CardCep: React.FC = () => {
  const [ceps, setCeps] = useState<string[]>(['', '', '', '', '']);
  const [responses, setResponses] = useState<CepResponse[]>([]);

  const handleBuscarCepsClick = async () => {
    const newResponses: CepResponse[] = [];

    for (const cep of ceps) {
      try {
        const response = await axios.get<CepResponse>(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        newResponses.push(response.data);
      } catch (error) {
        console.error(`Erro ao buscar CEP ${cep}:`, error);
        newResponses.push({
          cep,
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
        });
      }
    }

    setResponses(newResponses);
  };

  const handleReiniciarClick = () => {
    setCeps(['', '', '', '', '']);
    setResponses([]);
  };

  return (
    <div className="card-cep">
      <h2>Buscar CEP's</h2>
      <div>
        {ceps.map((cep, index) => (
          <div key={index}>
            <label>CEP {index + 1}:</label>
            <input
              type="text"
              value={cep}
              onChange={(e) => {
                const newCeps = [...ceps];
                newCeps[index] = e.target.value;
                setCeps(newCeps);
              }}
            />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleBuscarCepsClick}>Buscar CEP's</button>
        <button onClick={handleReiniciarClick}>Reiniciar</button>
      </div>
      {responses.length > 0 && (
        <div className="response">
          <h3>Resultado:</h3>
          <ul>
            {responses.map((response, index) => (
              <li key={index}>
                <strong>CEP:</strong> {response.cep}<br />
                <strong>Logradouro:</strong> {response.logradouro}<br />
                <strong>Complemento:</strong> {response.complemento}<br />
                <strong>Bairro:</strong> {response.bairro}<br />
                <strong>Localidade:</strong> {response.localidade}<br />
                <strong>UF:</strong> {response.uf}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardCep;

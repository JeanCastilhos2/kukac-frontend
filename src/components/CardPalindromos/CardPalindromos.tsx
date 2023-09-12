import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

interface PalindromeResponse {
  numerosPalindromos: number[];
}

const CardPalindromos: React.FC = () => {
  const [numero1, setNumero1] = useState<string>("");
  const [numero2, setNumero2] = useState<string>("");
  const [response, setResponse] = useState<PalindromeResponse | null>(null);

  const handlePalindromosClick = async () => {
    try {
      const response = await axios.get<PalindromeResponse>(
        `http://localhost:8000/palindromos?numInicio=${numero1}&numFim=${numero2}`
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Erro ao buscar palíndromos:", error);
    }
  };

  const handleReiniciarClick = () => {
    setNumero1("");
    setNumero2("");
    setResponse(null);
  };

  return (
    <div className="card-palindromos">
      <h2>Verificar Palíndromos</h2>
      <div>
        <label>Número 1:</label>
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
      </div>
      <div>
        <label>Número 2:</label>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handlePalindromosClick}>Palíndromos</button>
        <button onClick={handleReiniciarClick}>Reiniciar</button>
      </div>
      {response && (
        <div className="response">
          <h3>Números Palíndromos:</h3>
          <div className="scrollable-list">
            <ul>
              {response.numerosPalindromos.map((num) => (
                <li key={num}>{num}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPalindromos;

import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

interface TrocoResponse {
  valorCompra: number;
  valorEntregue: number;
  quantidadeNotas1: number;
  quantidadeNotas10: number;
  quantidadeNotas100: number;
}

const CardTroco: React.FC = () => {
  const [valorCompra, setValorCompra] = useState<string>("");
  const [valorEntregue, setValorEntregue] = useState<string>("");
  const [response, setResponse] = useState<TrocoResponse | null>(null);

  const handleCalcularTrocoClick = async () => {
    try {
      const response = await axios.get<TrocoResponse>(
        `http://localhost:8000/troco?valorCompra=${valorCompra}&valorEntregue=${valorEntregue}`
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Erro ao calcular troco:", error);
    }
  };

  const handleReiniciarClick = () => {
    setValorCompra("");
    setValorEntregue("");
    setResponse(null);
  };

  return (
    <div className="card-troco">
      <h2>Calcular Troco</h2>
      <div>
        <label>Valor Compra:</label>
        <input
          type="text"
          value={valorCompra}
          onChange={(e) => setValorCompra(e.target.value)}
        />
      </div>
      <div>
        <label>Valor Entregue:</label>
        <input
          type="text"
          value={valorEntregue}
          onChange={(e) => setValorEntregue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalcularTrocoClick}>Calcular Troco</button>
        <button onClick={handleReiniciarClick}>Reiniciar</button>
      </div>
      {response && (
        <div className="response">
          <h3>Resultado:</h3>
          <p>Valor Compra: R$ {response.valorCompra}</p>
          <p>Valor Entregue: R$ {response.valorEntregue}</p>
          <p>Quantidade de Notas de R$ 1: {response.quantidadeNotas1}</p>
          <p>Quantidade de Notas de R$ 10: {response.quantidadeNotas10}</p>
          <p>Quantidade de Notas de R$ 100: {response.quantidadeNotas100}</p>
        </div>
      )}
    </div>
  );
};

export default CardTroco;

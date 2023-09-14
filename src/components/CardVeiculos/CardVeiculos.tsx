import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

interface Veiculo {
  id: number;
  nome: string;
  marca: string;
  anoFabricacao: number;
  quantidadePortas?: number;
  passageiros?: number;
}

const CardVeiculos: React.FC = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    axios
      .get<Veiculo[]>("http://localhost:8000/veiculos")
      .then((response) => {
        setVeiculos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar veículos:", error);
      });
  }, []);

  const getTipoVeiculo = (veiculo: Veiculo): string => {
    if (veiculo.quantidadePortas) {
      return "Carro";
    } else if (veiculo.passageiros) {
      return "Moto";
    }
    return "Tipo desconhecido";
  };

  return (
    <div className="card-container">
      {veiculos.length === 0 ? (
        <h1>Não há veiculos cadastrados até o momento</h1>
      ) : (
        veiculos.map((veiculo) => (
          <div key={veiculo.id} className="card">
            <h2>{veiculo.nome}</h2>
            <p>Marca: {veiculo.marca}</p>
            <p>Ano: {veiculo.anoFabricacao}</p>
            <p>Tipo: {getTipoVeiculo(veiculo)}</p>
            {veiculo.quantidadePortas && (
              <p>Quantidade de Portas: {veiculo.quantidadePortas}</p>
            )}
            {veiculo.passageiros && <p>Passageiros: {veiculo.passageiros}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default CardVeiculos;

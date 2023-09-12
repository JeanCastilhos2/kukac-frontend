import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

interface Veiculo {
  modelo: string;
  anoFabricacao: number;
  quantidadePortas: number;
  marca: string;
}

const CardVeiculos: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [modelo, setModelo] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState(0);
  const [quantidadePortas, setQuantidadePortas] = useState(0);
  const [marca, setMarca] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = async () => {
    try {
      const response = await axios.get<Veiculo[]>("http://localhost:8000/veiculos");
      setVeiculos(response.data);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
    }
  };

  const handleCadastrarClick = async () => {
    try {
      await axios.post("http://localhost:8000/veiculos", {
        modelo,
        anoFabricacao,
        quantidadePortas,
        marca,
      });
      setMensagem("Veículo cadastrado com sucesso!");
      setModelo("");
      setAnoFabricacao(0);
      setQuantidadePortas(0);
      setMarca("");
      fetchVeiculos();
    } catch (error) {
      console.error("Erro ao cadastrar veículo:", error);
    }
  };

  return (
    <div className="card-veiculos">
      <h2>Veículos</h2>
      <div>
        <button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "Veículos" : "Cadastrar"}
        </button>
      </div>
      {formVisible ? (
        <div>
          <h3>Cadastrar Veículo</h3>
          <div>
            <label>Modelo:</label>
            <input
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
          </div>
          <div>
            <label>Ano de Fabricação:</label>
            <input
              type="number"
              value={anoFabricacao}
              onChange={(e) => setAnoFabricacao(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Quantidade de Portas:</label>
            <input
              type="number"
              value={quantidadePortas}
              onChange={(e) => setQuantidadePortas(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Marca:</label>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleCadastrarClick}>Cadastrar</button>
          </div>
          {mensagem && <p>{mensagem}</p>}
        </div>
      ) : (
        <div>
          <h3>Veículos Cadastrados</h3>
          {veiculos.map((veiculo, index) => (
            <div key={index} className="veiculo-card">
              <strong>Modelo:</strong> {veiculo.modelo}<br />
              <strong>Ano de Fabricação:</strong> {veiculo.anoFabricacao}<br />
              <strong>Quantidade de Portas:</strong> {veiculo.quantidadePortas}<br />
              <strong>Marca:</strong> {veiculo.marca}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardVeiculos;

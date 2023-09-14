import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

type Veiculo = {
  modelo: string;
  anoFabricacao: number;
  marca: string;
} & (
  | {
      tipo: "carro";
      quantidadePortas: number;
    }
  | {
      tipo: "moto";
      passageiros: number;
    }
);

const CardCadastroVeiculos: React.FC = () => {
  const [modelo, setModelo] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState(0);
  const [marca, setMarca] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoVeiculo, setTipoVeiculo] = useState<"carro" | "moto">("carro"); 
  const [quantidadePortas, setQuantidadePortas] = useState(0);
  const [passageiros, setPassageiros] = useState(0);

  const handleCadastrarClick = async () => {
    try {
      const veiculo: Veiculo =
        tipoVeiculo === "carro"
          ? {
              modelo,
              anoFabricacao,
              quantidadePortas,
              marca,
              tipo: "carro",
            }
          : {
              modelo,
              anoFabricacao,
              marca,
              passageiros,
              tipo: "moto",
            };

      const url =
        tipoVeiculo === "carro"
          ? "http://localhost:8000/carro"
          : "http://localhost:8000/moto";

      await axios.post(url, veiculo);
      setMensagem(
        `${tipoVeiculo === "carro" ? "Carro" : "Moto"} cadastrado com sucesso!`
      );
      resetForm();
    } catch (error) {
      console.error(
        `Erro ao cadastrar ${tipoVeiculo === "carro" ? "carro" : "moto"}:`,
        error
      );
    }
  };

  const resetForm = () => {
    setModelo("");
    setAnoFabricacao(0);
    setQuantidadePortas(0);
    setMarca("");
    setPassageiros(0);
  };

  return (
    <div className="card-cadastro">
      <h2>Cadastrar Veículo</h2>
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
          type="text"
          value={anoFabricacao}
          onChange={(e) => setAnoFabricacao(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Tipo de Veículo:</label>
        <select
          value={tipoVeiculo}
          onChange={(e) => setTipoVeiculo(e.target.value as "carro" | "moto")}
        >
          <option value="carro">Carro</option>
          <option value="moto">Moto</option>
        </select>
      </div>
      {tipoVeiculo === "carro" && (
        <div>
          <label>Quantidade de Portas:</label>
          <select
            value={quantidadePortas}
            onChange={(e) => setQuantidadePortas(Number(e.target.value))}
          >
            <option value={2}>2 Portas</option>
            <option value={4}>4 Portas</option>
          </select>
        </div>
      )}
      <div>
        <label>Marca:</label>
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
      </div>
      {tipoVeiculo === "moto" && (
        <div>
          <label>Passageiros:</label>
          <select
            value={passageiros}
            onChange={(e) => setPassageiros(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
      )}
      <div>
        <button onClick={handleCadastrarClick}>Cadastrar</button>
      </div>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CardCadastroVeiculos;

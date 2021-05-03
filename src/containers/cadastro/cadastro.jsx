import React, { useState, useEffect } from "react";
import { Cadastro, Input, FormContainer, Button, TabelaFuncs } from "./styled";
import firebase from "./../../firebaseConnection";

function CadastroFunc() {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    cpf: "",
    salarioBruto: "",
    descontoPrev: "",
    dependentes: "",
  });
  const [listaFunc, setListaFunc] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFuncionario((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleCpfMask = (e) => {
    const { id, value } = e.target;

    let newCPF = value;
    newCPF = newCPF.replace(/\D/g, "");
    newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
    newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
    newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    if (newCPF.length < 15) {
      setFuncionario((prevState) => ({
        ...prevState,
        [id]: value,
        cpf: newCPF,
      }));
    }
  };

  useEffect(() => {
    async function buscaFuncionarios() {
      await firebase
        .firestore()
        .collection("funcionarios")
        .onSnapshot((doc) => {
          let lista = [];
          doc.forEach((item) => {
            lista.push({
              id: item.id,
              nome: item.data().nome,
              cpf: item.data().cpf,
              salarioBruto: item.data().salarioBruto,
              descontoPrev: item.data().descontoPrev,
              dependentes: item.data().dependentes,
              salarioBase: item.data().salarioBase,
              descontoIR: item.data().descontoIR,
            })
          })
          setListaFunc(lista);
          console.log(lista)
        });
    }
    buscaFuncionarios();
  }, []);

  async function calculaIR(funcionario) {
    const deducao = 164.56;
    const salarioBaseIR =
      funcionario.salarioBruto -
      funcionario.descontoPrev -
      deducao * funcionario.dependentes;
    setFuncionario((prevState) => ({
      ...prevState,
      salarioBase: salarioBaseIR,
    }));

    let aliquota = 0;
    let parcelaDeducao = 0;

    if (salarioBaseIR <= 1903.98) {
      aliquota = 0;
      parcelaDeducao = 0;
    } else if (salarioBaseIR > 1903.98 && salarioBaseIR <= 2826.65) {
      parcelaDeducao = 142.8;
      aliquota = 0.075;
    } else if (salarioBaseIR > 2826.65 && salarioBaseIR <= 3751.05) {
      parcelaDeducao = 354.8;
      aliquota = 0.15;
    } else if (salarioBaseIR > 3751.05 && salarioBaseIR <= 4664.68) {
      parcelaDeducao = 636.13;
      aliquota = 0.225;
    } else if (salarioBaseIR > 4664.68) {
      parcelaDeducao = 869.36;
      aliquota = 0.275;
    }
    const descontoIRRF = salarioBaseIR * aliquota - parcelaDeducao;
    setFuncionario((prevState) => ({
      ...prevState,
      descontoIR: descontoIRRF.toFixed(2),
    }));
    await firebase
      .firestore()
      .collection("funcionarios")
      .doc(funcionario.cpf)
      .set({
        ...funcionario,
        descontoIR: descontoIRRF.toFixed(2),
        salarioBase: salarioBaseIR,
      });

    return descontoIRRF;
  }

  async function excluirFuncionario(id) {
    if (window.confirm('Deseja exlcuir este funcionário da lista?')) {
      await firebase
        .firestore()
        .collection("funcionarios")
        .doc(id)
        .delete()
        .then(() => {
          alert("Funcionário excluído");
        });
    }
  }

  async function cadastraFuncionario(e) {
    e.preventDefault();
    const funcCadastrado = listaFunc.some(
      (func) => func.id === funcionario.cpf
    );

    if (funcCadastrado) {
      alert("este cpf já está cadastrado!");
      return;
    }

    await firebase
      .firestore()
      .collection("funcionarios")
      .doc(funcionario.cpf)
      .set({
        nome: funcionario.nome,
        cpf: funcionario.cpf,
        salarioBruto: Number(funcionario.salarioBruto),
        descontoPrev: Number(funcionario.descontoPrev),
        dependentes: Number(funcionario.dependentes),
      })
      .then(async () => {
        console.log("funcionario inserido com sucesso");
        await firebase
          .firestore()
          .collection("funcionarios")
          .doc(funcionario.cpf)
          .get()
          .then((snapshot) => {
            console.log(snapshot.data());
            calculaIR(snapshot.data());
          });
      })
      .catch((error) => {
        console.log("rolou errro", error);
      });
  }

  return (
    <Cadastro>
      <header>
        <h1>Seidor - Cadastro de Funcionários</h1>
      </header>
      <FormContainer>
        <form onSubmit={cadastraFuncionario}>
          <label htmlFor="nome">Nome:</label>
          <Input>
            <input
              name="nome"
              required
              type="text"
              id="nome"
              value={funcionario.nome}
              onChange={handleChange}
              placeholder="Nome"
            />
          </Input>
          <label htmlFor="cpf">CPF:</label>
          <Input>
            <input
              name="cpf"
              required
              type="text"
              id="cpf"
              value={funcionario.cpf}
              onChange={handleCpfMask}
              placeholder="000.000.000-00"
            />
          </Input>
          <label htmlFor="salarioBruto">Salário Bruto:</label>
          <Input>
            <input
              name="salarioBruto"
              required
              type="number"
              id="salarioBruto"
              value={funcionario.salarioBruto}
              onChange={handleChange}
              placeholder="Só numeros(0000.00)"
            />
          </Input>
          <label htmlFor="descontoPrev">Desconto da previdência:</label>
          <Input>
            <input
              name="descontoPrev"
              required
              type="number"
              id="descontoPrev"
              value={funcionario.descontoPrev}
              onChange={handleChange}
              placeholder="Só numeros(0000.00)"
            />
          </Input>
          <label htmlFor="dependentes">Número de dependentes:</label>
          <Input>
            <input
              name="dependentes"
              required
              type="number"
              id="dependentes"
              value={funcionario.dependentes}
              onChange={handleChange}
              placeholder="Só numeros"
            />
          </Input>
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>

      <h2>Seus funcionários: </h2>

      <TabelaFuncs>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto</th>
            <th>Dependentes</th>
            <th>Base de cálculo</th>
            <th>Desconto IRRF</th>
            <th>Excluir</th>
          </tr>
        </thead>
        {listaFunc.length !== 0 && (
          <tbody>
            {listaFunc.map((func) => {
              return (
                <tr key={func.id}>
                  <td>{func.nome}</td>
                  <td>{func.cpf}</td>
                  <td>{func.salarioBruto}</td>
                  <td>{func.descontoPrev}</td>
                  <td>{func.dependentes}</td>
                  <td>{func.salarioBase}</td>
                  <td>{func.descontoIR}</td>
                  <td>
                    <button onClick={() => excluirFuncionario(func.id)}>X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TabelaFuncs>
      <br />
      <br />
      <br />
      <br />
    </Cadastro>
  );
}

export default CadastroFunc;

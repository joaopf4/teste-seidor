import React, { useState, useEffect } from "react";
import { Cadastro } from "./styled";
import firebase from "./../../firebaseConnection";
import Tabela from "../../components/Tabela"
import FormCadastro from "../../components/FormCadastro/formCadastro";

function CadastroFunc() {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    cpf: "",
    salarioBruto: "",
    descontoPrev: "",
    dependentes: "",
  });
  const [listaFunc, setListaFunc] = useState([]);
  const [edit, setEdit] = useState(false);

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
  };

  return (
    <Cadastro>
      <header>
        <h1>Seidor - Cadastro de Funcionários</h1>
      </header>
      <FormCadastro 
          edit={edit}
          funcionario={funcionario}
          setFuncionario={setFuncionario}
          calculaIR={calculaIR}
          setEdit={setEdit}
          listaFunc={listaFunc}
      />

      <h2>Seus funcionários: </h2>

      <Tabela 
        listaFunc={listaFunc}
        edit={edit}
        setEdit={setEdit}
        setFuncionario={setFuncionario}
      />

      <br />
      <br />
      <br />
    </Cadastro>
  );
}

export default CadastroFunc;

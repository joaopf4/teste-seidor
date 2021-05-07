import { TabelaFuncs, TableDiv } from "./styled";
import { toast } from "react-toastify";
import firebase from "./../../firebaseConnection"

export default function Tabela({
  listaFunc,
  edit,
  setEdit,
  setFuncionario,
}) {

  async function excluirFuncionario(id) {
    if (window.confirm('Deseja exlcuir este funcionário da lista?')) {
      setEdit(false);
      setFuncionario({
        nome:'',
        cpf:'',
        salarioBruto:'',
        descontoPrev:'',
        dependentes:''
      });
      await firebase
        .firestore()
        .collection("funcionarios")
        .doc(id)
        .delete()
        .then(() => {
          toast.info("Funcionário excluído");
        });
    }
  };

  async function editarFuncionario(id) {
    setEdit(true);
    await firebase
    .firestore()
    .collection("funcionarios")
    .doc(id)
    .get()
    .then((snapshot) => {
      setFuncionario({
        nome: snapshot.data().nome,
        cpf: snapshot.data().cpf,
        salarioBruto: snapshot.data().salarioBruto,
        descontoPrev: snapshot.data().descontoPrev,
        dependentes: snapshot.data().dependentes
      })
    })
  }

  return (
    <TableDiv>
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
            <th>Editar</th>
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
                    {!edit ? (
                      <button onClick={() => editarFuncionario(func.id)}>
                        Editar
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEdit(false);
                          setFuncionario({
                            nome: "",
                            cpf: "",
                            salarioBruto: "",
                            descontoPrev: "",
                            dependentes: "",
                          });
                        }}
                      >
                        Cancelar
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => excluirFuncionario(func.id)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </TabelaFuncs>
    </TableDiv>
  );
}

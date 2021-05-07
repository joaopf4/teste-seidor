import { FormContainer, Input, Button } from "./styled";

export default function FormCadastro({
  handleCpfMask,
  edit,
  cadastraFuncionario,
  efetuarEdicao,
  funcionario,
  handleChange,
}) {
  return (
    <FormContainer>
    <form onSubmit={!edit ? cadastraFuncionario : efetuarEdicao}>
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
      <Button type="submit">{!edit ? 'Cadastrar' : 'Editar'}</Button>
    </form>
  </FormContainer>
  );
}

import React from 'react';
import {
    Cadastro,
    Input,
    FormContainer
} from './styled';

function CadastroFunc() {
    return (
        <Cadastro>
            <header><h1>Seidor - Cadastro de Funcionários</h1></header>
            <FormContainer>                
                <form>
                    <label>Nome:</label>
                    <Input><input /></Input>
                    <label>CPF:</label>
                    <Input><input /></Input>
                    <label>Salário Bruto:</label>
                    <Input><input /></Input>
                    <label>Desconto da previdência:</label>
                    <Input><input /></Input>
                    <label>Número de dependentes:</label>
                    <Input><input /></Input>
                </form>
            </FormContainer>
        </Cadastro>
    );
}

export default CadastroFunc;
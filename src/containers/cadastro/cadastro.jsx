import React, { useState, useEffect } from 'react';
import {
    Cadastro,
    Input,
    FormContainer,
    Button,
    TabelaFuncs
} from './styled';

function CadastroFunc() {
    const [funcionario, setFuncionario] = useState({
        nome : '',
        cpf : '',
        salarioBruto: Number(''),
        descontoPrev: Number(''),
        dependentes: Number(''),
        descontoIR: '',
        salarioBase: '',
    });
    const [calculoFunc, setCalculoFunc] = useState(false);
    const [listaFunc, setListaFunc] = useState([]);
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setFuncionario(prevState => ({
            ...prevState,
            [id] : value,
        }));
    }
    const handleCpfMask = (e) => {
        const {id, value} = e.target

        let newCPF = value
        newCPF = newCPF.replace(/\D/g, ""); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

        if (newCPF.length < 15) {
            setFuncionario (prevState => ({
                ...prevState,
                [id] : value,
                cpf: newCPF
            })); 
        }           
    }


    //  useEffect(() => {
    // //     const funcionariosStorage = localStorage.getItem('funcionario');
    // //     if(funcionariosStorage){
    // //         addFuncionario(JSON.parse(funcionariosStorage));
    // //     }
    // //     return() => {}
    // }, [calculoFunc]);
    async function salvaFunc(funcionario) {
        // await calculaIR(funcionario);
        setListaFunc([...listaFunc, funcionario])
        console.log(listaFunc);

    }

    function calculaIR(funcionario) {
        setCalculoFunc(true);
        const deducao = 164.56;
        const salarioBaseIR = (funcionario.salarioBruto - funcionario.descontoPrev) - (deducao * funcionario.dependentes);
        setFuncionario(prevState => ({
            ...prevState,
            salarioBase: salarioBaseIR
        })); 

        let aliquota = 0;
        let parcelaDeducao = 0;

        if (salarioBaseIR <= 1903.98) {
            aliquota = 0;
            parcelaDeducao = 0;
        } 
        else if (salarioBaseIR > 1903.98 && salarioBaseIR <= 2826.65) {
            parcelaDeducao = 142.8;
            aliquota = 0.075;
        } 
        else if (salarioBaseIR > 2826.65 && salarioBaseIR <= 3751.05 ) {
            parcelaDeducao = 354.80;
            aliquota = 0.15;
        }
        else if (salarioBaseIR > 3751.05 && salarioBaseIR <= 4664.68 ) {
            parcelaDeducao = 636.13;
            aliquota = 0.225;
        } 
        else if (salarioBaseIR > 4664.68) {
            parcelaDeducao = 869.36;
            aliquota = 0.275;
        }
        const descontoIRRF = (salarioBaseIR * aliquota) - parcelaDeducao;
        setFuncionario(prevState => ({
            ...prevState,
            descontoIR: descontoIRRF.toFixed(2)
        })); 
        salvaFunc(funcionario);
        console.log(descontoIRRF)
        return descontoIRRF;
    }
    function cadastraFunc(e) {
        e.preventDefault();
        calculaIR(funcionario);
        console.log(funcionario);
        // console.log(`O salário base para cálculo do IR do funcionário ${funcionario.nome} é de ${salarioBaseIR}, e seu desconto no IR é de ${descontoIRRF}`);

    }



    return (
        <Cadastro>
            <header><h1>Seidor - Cadastro de Funcionários</h1></header>
            <FormContainer>                
                <form onSubmit={cadastraFunc}>
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
                    <Button
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </form>
            </FormContainer>

            <h2>Seus funcionários: </h2>
            {  !calculoFunc ?
                <TabelaFuncs>
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
                </TabelaFuncs>
                :
                <TabelaFuncs>
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
                    <tr>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.cpf}</td>
                        <td>{funcionario.salarioBruto}</td>
                        <td>{funcionario.descontoPrev}</td>
                        <td>{funcionario.dependentes}</td>
                        <td>{funcionario.salarioBase}</td>
                        <td>{funcionario.descontoIR}</td>
                        <td><button>X</button></td>
                    </tr>
                </TabelaFuncs>

            }     
            <br/>
            <br/>
            <br/>
            <br/>
        </Cadastro>
    );
}

export default CadastroFunc;
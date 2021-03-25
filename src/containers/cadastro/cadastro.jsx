import React from 'react';
import {
    Cadastro,
    Input,
    FormContainer,
    Button
} from './styled';

function CadastroFunc() {
    const [state , setState] = React.useState({
        nome : '',
        cpf : '',
        salarioBruto: '',
        descontoPrev: '',
        dependentes: ''

    });
    const [calculoFunc, setCalculoFunc] = React.useState(false);
    const [salarioBase, setSalarioBase] = React.useState('');
    const [descontoIR, setDescontoIR] = React.useState('');

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
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
            setState (prevState => ({
                ...prevState,
                [id] : value,
                cpf: newCPF
            })); 
        }           
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCalculoFunc(true);
        const salario = Number(state.salarioBruto);
        const desconto = Number(state.descontoPrev);
        const dependentes = Number(state.dependentes);
        const deducao = 164.56;      
        
        const salarioBaseIR = (salario - desconto) - (deducao * dependentes);
        setSalarioBase(salarioBaseIR);

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
        setDescontoIR(descontoIRRF);



        console.log(`O salário base para cálculo do IR do funcionário ${state.nome} é de ${salarioBaseIR}, e seu desconto no IR é de ${descontoIRRF}`);

        return descontoIRRF;
    }


    return (
        <Cadastro>
            <header><h1>Seidor - Cadastro de Funcionários</h1></header>
            <FormContainer>                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label>
                    <Input>
                        <input 
                            name="nome"
                            required
                            type="text"
                            id="nome"
                            value={state.nome}
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
                            value={state.cpf}
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
                            value={state.salarioBruto}
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
                            value={state.descontoPrev}
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
                            value={state.dependentes}
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
            {
                calculoFunc &&
                <h3>
                    O salário base para cálculo do IR do funcionário {state.nome} é de R$ {salarioBase}, e seu desconto no IR é de R$ {descontoIR} 
                </h3>
            }
        </Cadastro>
    );
}

export default CadastroFunc;
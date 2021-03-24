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

    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value,
        }))
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
            })) 
        }           
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state);
        console.log(state.nome);
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
                            placeholder="Só números"
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
                            placeholder="Só numeros"
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
        </Cadastro>
    );
}

export default CadastroFunc;
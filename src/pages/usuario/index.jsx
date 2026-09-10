
import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Funcionario() {

    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('PASSE O MOUSE AQUI');

    // Parte 1 - Nome
    function alterarNome(event) {
        setNome(event.target.value);

        console.log('Nome digitado:', event.target.value);
    }

    // Parte 2 - Departamento
    function alterarDepartamento(event) {
        if (event.target.value !== '') {
            alert('Departamento selecionado: ' + event.target.value);
        }
    }

    // Parte 3 - Tipo de funcionário
    function alterarTipo(event) {
        console.log('Tipo de funcionário:', event.target.value);
    }

    // Parte 4 - Mouse entrou
    function mouseEntrou() {
        setMensagem('O mouse entrou na área!');
    }

    // Parte 4 - Mouse saiu
    function mouseSaiu() {
        setMensagem('O mouse saiu da área!');
    }

    // Parte 5 - Botão
    function cadastrar() {
        alert('Funcionário cadastrado com sucesso!');
    }

    return (

        <div className="funcionario">

            <div className="box">

                <h2>Cadastro de Funcionário</h2>

                <label>
                    Nome do funcionário:
                </label>

                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={alterarNome}
                />


                <label>
                    Departamento:
                </label>

                <select onChange={alterarDepartamento}>

                    <option value="">Selecione</option>

                    <option value="Administração">
                        Administração
                    </option>

                    <option value="Recursos Humanos">
                        Recursos Humanos
                    </option>

                    <option value="Financeiro">
                        Financeiro
                    </option>

                    <option value="Marketing">
                        Marketing
                    </option>

                    <option value="TI">
                        TI
                    </option>

                </select>


                <div className="tipo">

                    <h3>Tipo de funcionário</h3>

                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="Efetivo"
                            onChange={alterarTipo}
                        />
                        Efetivo
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="Temporário"
                            onChange={alterarTipo}
                        />
                        Temporário
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="Estagiário"
                            onChange={alterarTipo}
                        />
                        Estagiário
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="tipo"
                            value="Jovem Aprendiz"
                            onChange={alterarTipo}
                        />
                        Jovem Aprendiz
                    </label>

                </div>


                <div
                    className="mouse"
                    onMouseEnter={mouseEntrou}
                    onMouseLeave={mouseSaiu}
                >
                    {mensagem}
                </div>


                <button onClick={cadastrar}>
                    Cadastrar Funcionário
                </button>


                <Link to="/">
                    Voltar
                </Link>

            </div>

        </div>

    );

}

import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Variavel() {

    const [cor, setCor] = useState('#c1dcfc');

    const [tituloButao, setTituloButao] = useState('Titulo');
    const [inputValor, setInputValor] = useState('');

    function digitarinput(e) {
        setInputValor(e.target.value);
    }

    function mudarCor(e) {
        const novacor = e.target.value;

        setCor(novacor);

        document.body.style.backgroundColor = novacor;
    }

    function tituloclick() {
        setTituloButao(inputValor);
    }

    return (
        <div className="secao" style={{ backgroundColor: cor }}>

            {/* Área do título */}
            <section className="titulo-area">

                <h1>{tituloButao}</h1>

                <input
                    type="text"
                    onChange={digitarinput}
                    placeholder="Digite um título"
                />

                <button onClick={tituloclick}>
                    Mudar Titulo
                </button>

            </section>


            {/* Área da cor */}
            <section className="cor-area">

                <h2>Escolha uma cor para o fundo</h2>

                <p>Cor selecionada: {cor}</p>

                <input
                    type="color"
                    value={cor}
                    onChange={mudarCor}
                />

            </section>


            {/* Botão voltar */}
            <Link className="voltar" to="/">
                Voltar
            </Link>

        </div>
    );
}
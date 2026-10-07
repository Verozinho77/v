import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

export default function Calculo() {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [boolean, setBoolean] = useState(false);

    function somar() {
        setResultado(Number(valor1) + Number(valor2));
    }

    return (
        <div className="secao">

            <h1>Calculadora de Soma</h1>

            <input
                type="number"
                placeholder="Primeiro número"
                value={valor1}
                onChange={(e) => setValor1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Segundo número"
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
            />

            <button onClick={somar}>
                Somar
            </button>

            <h2>
                Resultado: {resultado}
            </h2>

            <h2>
                Você gosta de sorvete? {boolean ? 'Sim' : 'Não'}
            </h2>

      <input type="checkbox" checked={boolean} onChange={(e) => setBoolean(e.target.checked)} />

            <Link to="/">
                Voltar
            </Link>

        </div>
    );
}
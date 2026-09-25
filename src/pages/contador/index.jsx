import { Link } from 'react-router-dom';
import './index.scss';

import { useState } from 'react';

export default function Contador() {

    const [contador, setcontador] = useState(0);


     function nao() {
        if (contador > 0) {
        setcontador(contador - 1);
        }
    }

    function limite() {
        if (contador < 20) {
        setcontador(contador + 1);
        }
    }


    return (
        <div className="secao">

            <h1>Contador</h1>

            <div className="Container">

                <button onClick={nao}>
                    -
                </button>

                <p>{contador}</p>

                <button onClick={limite}>
                    +
                </button>

                

            </div>

            <Link to="/">
                Voltar
            </Link>

        </div>
    );
}
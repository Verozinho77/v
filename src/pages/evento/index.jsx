import './index.scss'
import { Link } from 'react-router-dom';

export default function Evento() {

    function npasse() {
        alert('Você clicou no botão');
    }

    function ntext() {
        alert('Você clicou no texto');
    }
    
    function Algumacoisa(e){

        let novovalor = e.target.value;
        alert('O usuário mudou para: ' + novovalor);



    }

    return (

        <div className="eventin">

            <div className='caixa'>

                <h2>Escolhas</h2>


                <input onChange={Algumacoisa}  type="text" placeholder="Digite algo" />

                <p onMouseMove={ntext}>A Odisseia narra a longa e perigosa jornada de Odisseu, rei de Ítaca, para retornar ao seu lar após o fim da Guerra de Troia. Enquanto o herói passa dez anos perdido no mar enfrentando a fúria de deuses e criaturas míticas — como o ciclope Polifemo e a feiticeira Circe —, sua esposa Penélope e seu filho Telêmaco lutam para proteger o reino contra pretendentes gananciosos que tentam usurpar o trono. Trata-se de um clássico épico sobre perseverança, lealdade e sobrevivência.</p>


                <select >

                    <option >Selecione</option>

                    <option >Opção 1</option>

                    <option >Opção 2</option>

                    <option >Opção 3</option>

                    <option >Opção 4</option>


                </select>

                <div className="opcoes">

                    <label>
                        <input type="radio" name="opcao" />
                        assistir
                    </label>

                    <label>
                        <input type="radio" name="opcao" />
                        ler
                    </label>

                    <label>
                        <input type="radio" name="opcao" />
                        teste
                    </label>

                    <label>
                        <input type="radio" name="opcao" />
                        forma
                    </label>

                </div>

                <button >Clique aqui</button>


                <Link to="/">Voltar</Link>
            </div>


        </div>

    );
}



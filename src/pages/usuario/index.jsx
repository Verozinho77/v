import './index.scss'
import { Link } from 'react-router-dom';

export default function User() {

   

    return (

        <div className="usersin">

            <div className='box'>

                <h2>Seu nome</h2>


                <input type="text" placeholder="Digite algo" />

                <p>As cores são a forma como os nossos olhos e o cérebro interpretam a luz que reflete nas coisas ao nosso redor. Elas funcionam como uma linguagem silenciosa que transforma o mundo em um lugar vivo e cheio de nuances.</p>


                <select >

                    <option >Escolha uma cor</option>

                    <option >Azul</option>

                    <option >Verde</option>

                    <option >Vermelho</option>

                    <option >Roxo</option>


                </select>

                <div className="soun">

                   <h2>É sua cor preferida</h2>

                    <label>
                        <input type="radio" name="opcao" />
                        É minha favorita
                    </label>

                    <label>
                        <input type="radio" name="opcao" />
                    Não é minha favorita
                    </label>

                    
                </div>

                <button >Confirmar</button>


                <Link to="/">Voltar</Link>
            </div>


        </div>

    );


}


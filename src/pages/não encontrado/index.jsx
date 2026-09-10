import './index.scss'
import { Link } from 'react-router-dom';

export default function NotFound() {

    return(

        <div className='pagina-NotFound pagina' >

            <header className='cabecalho'>

                <h1>A pagina que está tentando procurar não existe</h1>
                <Link to='/'> Voltar para a pagina inicial</Link>

            </header>


        </div>

    );

}
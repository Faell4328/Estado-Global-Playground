import { Link } from 'react-router';
import { useDispatch } from 'react-redux';

import { iniciar, parar, zerar } from '../../redux/timer';

export default function Home(){
    const dispatch = useDispatch();

    return (
        <div>
            <p>Você está na página Home</p>
            <Link to='/sobre'>Sobre</Link><br />
            <Link to='/teste'>404</Link>
            <hr />
            <button onClick={ () => dispatch(iniciar()) }>Iniciar o Timer</button>
            <button onClick={ () => dispatch(parar()) }>Parar o Timer</button>
            <button onClick={ () => dispatch(zerar()) }>Resetar o Timer</button>
        </div>
    )
}
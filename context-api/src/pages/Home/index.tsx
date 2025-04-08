import { Link } from 'react-router';
import { useContext } from 'react';
import { TimerContext } from '../../contexts/timer';

export default function Home(){

    const { iniciarTimer, pararTimer, zerarTimer } = useContext(TimerContext);

    return (
        <div>
            <p>Você está na página Home</p>
            <Link to='/sobre'>Sobre</Link><br />
            <Link to='/teste'>404</Link>
            <hr />
            <button onClick={ () => iniciarTimer() }>Iniciar o Timer</button>
            <button onClick={ () => pararTimer() }>Parar o Timer</button>
            <button onClick={ () => zerarTimer() }>Resetar o Timer</button>
        </div>
    )
}
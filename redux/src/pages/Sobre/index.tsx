import { Link } from 'react-router';
import { useDispatch } from 'react-redux';

import { iniciar, parar, zerar } from '../../redux/timer';

export default function Sobre(){
    const dispatch = useDispatch();

    return (
        <div>
            <p style={{fontSize: '20px', textAlign: 'center'}}>Você está na página <b>Sobre</b></p>
            <Link to='/'>Home</Link><br /><br />
            <Link to='/teste'>404</Link><br /><br />
            <hr />
            <button onClick={ () => dispatch(iniciar()) }>Iniciar o Timer</button>
            <button onClick={ () => dispatch(parar()) }>Parar o Timer</button>
            <button onClick={ () => dispatch(zerar()) }>Resetar o Timer</button>
        </div>
    )
}
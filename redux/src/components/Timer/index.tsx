import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementar } from '../../redux/timer';

interface InitialStateProps{
    timer: number;
    ativo: boolean;
}

export default function Timer() {
    const dispatch = useDispatch();

    const { timer, ativo }: InitialStateProps = useSelector((rootReducer: any) => rootReducer.timer);
    const [timerFormatado, setTimerFormatado] = useState('00:00:00');

    useEffect(() => {
        let interval: number;

        if(ativo){
            interval = setInterval( () => {
                dispatch(incrementar())
            }, 1000);
        }

        return() => clearInterval(interval);

    }, [ativo, dispatch])

    useEffect(() => {
        const horas = String(Math.floor(timer / 3600)).padStart(2, '0');
        const minutos = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
        const segundos = String(timer % 60).padStart(2, '0');
        setTimerFormatado(`${horas}:${minutos}:${segundos}`);
    }, [timer]);
    
    return (
        <div style={{backgroundColor: '#000', color: '#fff', textAlign: 'center', fontSize: '24px', paddingTop: '4px'}}>
            { <p>Time: {timerFormatado}</p> }
            <hr />
        </div>
    );
}

import { useState, useEffect, useContext } from 'react';
import { TimerContext } from '../../contexts/timer';

export default function Timer() {
    const { timer } = useContext(TimerContext);
    const [timerFormatado, setTimerFormatado] = useState('00:00:00');

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

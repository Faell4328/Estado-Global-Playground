import { ReactNode, createContext, useState, useRef, useEffect } from 'react';

interface TimerContextProps{
    timer: number;
    iniciarTimer: () => void;
    pararTimer: () => void;
    zerarTimer: () => void;
}

interface TimerProviderProps{
    children: ReactNode;
}

export const TimerContext = createContext({} as TimerContextProps);

function TimerProvider({ children }: TimerProviderProps){
    const [timer, setTimer] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    function iniciarTimer(): void{
        if (intervalRef.current) return
        intervalRef.current = setInterval( () => {
            setTimer(prev => prev + 1);
        }, 1000);
    }

    function pararTimer(): void{
        if (!intervalRef.current) return
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function zerarTimer(): void{
        setTimer(0);
    }

    useEffect( () => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [])

    return(
        <TimerContext value = {{timer, iniciarTimer, pararTimer, zerarTimer}} >
            { children }
        </TimerContext>
    )
}

export default TimerProvider;
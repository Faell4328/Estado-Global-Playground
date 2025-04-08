import { createSlice } from '@reduxjs/toolkit';

interface InitialStateProps{
    timer: number;
    ativo: boolean;
}

const initialState: InitialStateProps = {
    timer: 0,
    ativo: false,
}

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers:{
        iniciar: (state) => {
            state.ativo = true
        },
        parar: (state) => {
            state.ativo = false
        },
        zerar: (state) => {
            state.timer = 0
        },
        incrementar: (state) => {
            if(state.ativo){
                state.timer += 1;
            }
        }
    }
})

export const { iniciar, parar, zerar, incrementar } = timerSlice.actions;
export default timerSlice.reducer;
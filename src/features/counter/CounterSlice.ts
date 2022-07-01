import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    counters: number[]
}

const initialState: CounterState = {
    counters: [0]
}

export const CounterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counters[action.payload] += 1
        },
        decrement: (state, action) => {
            state.counters[action.payload] -= 1
        },
        addCounter: (state) => {
            state.counters.push(state.counters.reduce((acc, curr) => acc+curr, 0))
        },
        deleteCounter: (state, action) => {
            state.counters.splice(action.payload, 1);
        }
    }
})

export const { increment, decrement, addCounter, deleteCounter } = CounterSlice.actions;

export default CounterSlice.reducer;

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nextPhaseEnabled: false,
    currentPhase: 1,
}
export const nextPhaseSlice = createSlice({
    name: 'nextPhaseState',
    initialState,
    reducers: {
        setNextPhaseEnabled: (state, action) => {
            state.nextPhaseEnabled = action.payload;
        },
        setCurrentPhase: (state, action) => {
            state.currentPhase = action.payload;
        },
    },
});

export const {setNextPhaseEnabled, setCurrentPhase} = nextPhaseSlice.actions;

export default nextPhaseSlice.reducer;

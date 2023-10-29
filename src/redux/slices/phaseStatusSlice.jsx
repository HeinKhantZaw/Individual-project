import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nextPhaseEnabled: false,
    currentPhase: 1,
}
export const phaseStatusSlice = createSlice({
    name: 'phaseStatus',
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

export const {setNextPhaseEnabled, setCurrentPhase} = phaseStatusSlice.actions;

export default phaseStatusSlice.reducer;

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nextPhaseEnabled: false,
    currentPhase: 1,
    uploaded: 0,
    infoToggle: false,
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
        setPhaseStatusState: (state, action) => {
            state.nextPhaseEnabled = action.payload.nextPhaseEnabled;
            state.currentPhase = action.payload.currentPhase;
            state.uploaded++;
        },
        toggleInfo: (state) => {
            state.infoToggle = !state.infoToggle;
        }
    },
});

export const {setNextPhaseEnabled, setCurrentPhase, setPhaseStatusState, toggleInfo} = phaseStatusSlice.actions;

export default phaseStatusSlice.reducer;

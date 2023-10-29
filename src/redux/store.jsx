import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.jsx";
import nextPhaseReducer from "./slices/nextPhaseSlice.jsx";

export const store = configureStore({
    reducer: {
        nextPhase: nextPhaseReducer,
        phaseOne: phaseOneReducer
    }
})

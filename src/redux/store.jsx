import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.jsx";
import phaseStatusReducer from "./slices/phaseStatusSlice.jsx";
import phaseTwoReducer from "./slices/phaseTwoSlice.jsx";
import phaseThreeReducer from "./slices/phaseThreeSlice.jsx";

export const store = configureStore({
    reducer: {
        phaseStatus: phaseStatusReducer,
        phaseOne: phaseOneReducer,
        phaseTwo: phaseTwoReducer,
        phaseThree: phaseThreeReducer
    }
})

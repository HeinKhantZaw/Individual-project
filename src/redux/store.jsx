import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.jsx";
import phaseStatusReducer from "./slices/phaseStatusSlice.jsx";
import phaseTwoReducer from "./slices/phaseTwoSlice.jsx";
import phaseThreeReducer from "./slices/phaseThreeSlice.jsx";
import phaseFourReducer from "./slices/phaseFourSlice.jsx";

export const store = configureStore({
    reducer: {
        phaseStatus: phaseStatusReducer,
        phaseOne: phaseOneReducer,
        phaseTwo: phaseTwoReducer,
        phaseThree: phaseThreeReducer,
        phaseFour: phaseFourReducer
    }
})

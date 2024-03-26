import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.js";
import phaseStatusReducer from "./slices/phaseStatusSlice.js";
import phaseTwoReducer from "./slices/phaseTwoSlice.js";
import phaseThreeReducer from "./slices/phaseThreeSlice.js";
import phaseFourReducer from "./slices/phaseFourSlice.js";
import phaseFiveReducer from "./slices/phaseFiveSlice.js";

export const store = configureStore({
    reducer: {
        phaseStatus: phaseStatusReducer,
        phaseOne: phaseOneReducer,
        phaseTwo: phaseTwoReducer,
        phaseThree: phaseThreeReducer,
        phaseFour: phaseFourReducer,
        phaseFive: phaseFiveReducer,
    }
})

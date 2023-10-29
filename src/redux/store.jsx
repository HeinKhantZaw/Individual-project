import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.jsx";
import phaseStatusReducer from "./slices/phaseStatusSlice.jsx";

export const store = configureStore({
    reducer: {
        phaseStatus: phaseStatusReducer,
        phaseOne: phaseOneReducer
    }
})

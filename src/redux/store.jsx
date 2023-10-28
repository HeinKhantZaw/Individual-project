import {configureStore} from '@reduxjs/toolkit';
import phaseOneReducer from "./slices/phaseOneSlice.jsx";

export const store = configureStore({
    reducer: {
        phaseOne: phaseOneReducer
    }
})

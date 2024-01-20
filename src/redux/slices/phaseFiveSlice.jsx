import {initialNodes} from "../../pages/PhaseFive/initial-nodes.jsx";
import {initialEdges} from "../../pages/PhaseFive/initial-edges.jsx";
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    nodeState: initialNodes,
    edgeState: initialEdges,
    hiddenEdges: [],
    hiddenNodes: [],
    hiddenTactics: [],
    uploaded: 0,
}
export const phaseFiveSlice = createSlice({
    name: 'phaseFive',
    initialState,
    reducers: {
        setPhaseFiveNodes: (state, action) => {
            state.nodeState = action.payload
        },
    }
});

export const {setPhaseFiveNodes} = phaseFiveSlice.actions;

export default phaseFiveSlice.reducer;


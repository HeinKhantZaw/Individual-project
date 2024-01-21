import {initialNodes} from "../../pages/PhaseFive/initial-nodes.jsx";
import {initialEdges} from "../../pages/PhaseFive/initial-edges.jsx";
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    nodeState: initialNodes,
    originalNodesIds: initialNodes.map(node => node.id),
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
            const removedNodeIds = state.originalNodesIds.filter(id => !action.payload.map(node => node.id).includes(id));
            state.edgeState = state.edgeState.filter(edge => {
                return !removedNodeIds.includes(edge.target)
            })
            const sourceIds = state.edgeState.map(edge => edge.source)
            const targetIds = state.edgeState.map(edge => edge.target)
            state.nodeState = state.nodeState.filter(node => {
                return sourceIds.includes(node.id) || targetIds.includes(node.id)
            })
        },
    }
});

export const {setPhaseFiveNodes} = phaseFiveSlice.actions;

export default phaseFiveSlice.reducer;


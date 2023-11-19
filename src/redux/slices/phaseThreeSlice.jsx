import {createSlice} from "@reduxjs/toolkit";
import getTacticNodes from "../../utils/getTacticNodes.jsx";
import {PhaseThreeANodes} from "../../data/PhaseThreeANodes.jsx";

const initialState = {
    initialTacticNodes: [],
    selectedTacticNodes: [],
    disabledTacticNodes: [],
    uploaded: 0,
}
export const phaseThreeSlice = createSlice({
    name: 'phaseThree',
    initialState,
    reducers: {
        setInitialTacticNodes: (state, action) => {
            const totalNodes = action.payload.map((node)=>node.id);
            const uniqueValues = new Set();
            const regex = /-\d*$/;
            getTacticNodes(totalNodes).forEach(item => {
                const value = item.replace(regex, ''); // Remove the hyphen and numbers at the end
                uniqueValues.add(value);
            });
            const uniqueValuesArray = Array.from(uniqueValues);
            state.initialTacticNodes = PhaseThreeANodes.filter((node) => uniqueValuesArray.includes(node.id));
            state.selectedTacticNodes = state.initialTacticNodes;
        },
        hideTactic: (state, action) => {
            state.disabledTacticNodes = [...state.disabledTacticNodes, action.payload]
            state.initialTacticNodes.map((node) => {
                if (node.id === action.payload) {
                    node.data.isHidden = !node.data.isHidden
                }
            });
            state.selectedTacticNodes = state.initialTacticNodes.filter((node) => {
                return !node.data.isHidden
            });
        },
    }});
export const {
    setInitialTacticNodes,
    hideTactic,
} = phaseThreeSlice.actions

export default phaseThreeSlice.reducer

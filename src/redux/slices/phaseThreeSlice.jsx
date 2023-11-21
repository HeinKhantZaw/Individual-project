import {createSlice} from "@reduxjs/toolkit";
import getTacticNodes from "../../utils/getTacticNodes.jsx";
import {Phase3aNodes} from "../../data/PhaseThreeNodes.jsx";

const initialState = {
    initialPhase3aTacticNodes: [],
    selectedTacticNodes: [],
    disabledTacticNodes: [],
    initialPhase3cTacticNodes: [],
    uploaded: 0,
}
export const phaseThreeSlice = createSlice({
    name: 'phaseThree',
    initialState,
    reducers: {
        setPhase3aTacticNodes: (state, action) => {
            const totalNodes = action.payload.map((node)=>node.id);
            const uniqueValues = new Set();
            const regex = /-\d*$/;
            getTacticNodes(totalNodes).forEach(item => {
                const value = item.replace(regex, ''); // Remove the hyphen and numbers at the end
                uniqueValues.add(value);
            });
            const uniqueValuesArray = Array.from(uniqueValues);
            state.initialPhase3aTacticNodes = Phase3aNodes.filter((node) => uniqueValuesArray.includes(node.id));
            state.selectedTacticNodes = state.initialPhase3aTacticNodes;
        },
        hideTactic: (state, action) => {
            state.disabledTacticNodes = [...state.disabledTacticNodes, action.payload]
            state.initialPhase3aTacticNodes.map((node) => {
                if (node.id === action.payload) {
                    node.data.isHidden = !node.data.isHidden
                }
            });
            state.selectedTacticNodes = state.initialPhase3aTacticNodes.filter((node) => {
                return !node.data.isHidden
            });
        },
        setPhase3cNodes: (state, action) => {
            state.initialPhase3cTacticNodes = action.payload.filter((node) => {
                if(node.data.gamifiedTactic){
                    return true;
                } else {
                    if(state.selectedTacticNodes.length === 0){
                        return false;
                    }
                    return state.selectedTacticNodes.every((selectedNode) => {
                        return node.id === selectedNode.id
                    })
                }
            })
        },
        setChosenTactic: (state, action) => {
            state.initialPhase3cTacticNodes.map((node) => {
                if (node.id === action.payload) {
                    node.data.isChosen = !node.data.isChosen
                }
            })
        }
    }});
export const {
    setPhase3aTacticNodes,
    hideTactic,
    setChosenTactic,
    setPhase3cNodes
} = phaseThreeSlice.actions

export default phaseThreeSlice.reducer

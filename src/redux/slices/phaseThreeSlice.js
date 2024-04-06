import {createSlice} from "@reduxjs/toolkit";
import getTacticNodes from "../../utils/getTacticNodes.js";
import {Phase3aNodes} from "../../data/PhaseThreeNodes.js";

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
        resetPhaseThree: (state) => {
            state.initialPhase3aTacticNodes = [];
            state.selectedTacticNodes = [];
            state.disabledTacticNodes = [];
            state.initialPhase3cTacticNodes = [];
            state.uploaded = 0;
        },
        setPhase3aTacticNodes: (state, action) => {
            const totalNodes = action.payload.map((node) => node.id);
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
        setHiddenTactic: (state, action) => {
            state.initialPhase3aTacticNodes.map((node2) => {
                action.payload.map((node) => {
                    if (node2.id === node) {
                        node2.data.isHidden = true
                    }
                })
                return node2;
            });
        },
        setPhase3cNodes: (state, action) => {
            const ids = state.selectedTacticNodes.map((node) => node.id);
            state.initialPhase3cTacticNodes = action.payload.filter((node) => {
                if (node.data.tacticType === "gamified") {
                    return true;
                } else {
                    return ids.includes(node.id)
                }
            })
        },
        setChosenTactic: (state, action) => {
            const otherTactic = action.payload === "create-fair-competition" ? "create-unfair-competition" : "create-fair-competition";
            state.initialPhase3cTacticNodes.map((node) => {
                // special case for avoiding conflict in next phase
                if (node.id === otherTactic && (action.payload === "create-fair-competition" || action.payload === "create-unfair-competition")) {
                    node.data.isChosen = false;
                }
                if (node.id === action.payload) {
                    node.data.isChosen = !node.data.isChosen
                }
            })
            state.selectedTacticNodes = state.initialPhase3cTacticNodes.filter((node) => node.data.isChosen);
        }
    }
});
export const {
    setPhase3aTacticNodes,
    hideTactic,
    setChosenTactic,
    setPhase3cNodes,
    setHiddenTactic,
    resetPhaseThree
} = phaseThreeSlice.actions

export default phaseThreeSlice.reducer

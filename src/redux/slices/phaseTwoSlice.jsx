import {createSlice} from '@reduxjs/toolkit'
import {PhaseTwoTreeDS} from "../../data/PhaseTwoTreeDS.jsx";

const initialState = {
    nodeState: [],
    nodeTree: PhaseTwoTreeDS,
    uploaded: 0,
}

export const phaseTwoSlice = createSlice({
    name: 'phaseOne',
    initialState,
    reducers: {
        updateNodes: (state, action) => {
            state.nodeState = action.payload
        },
        updateTree: (state, action) => {
            state.nodeTree = action.payload
        },
        toggleHidden: (state, action) => {
            state.nodeState.map((node) => {
                if (node.id === action.payload) {
                    node.data.isHidden = !node.data.isHidden
                }
            });
        },
        setPhaseTwoState: (state, action) => {
            state.nodeState = action.payload.nodeState
            state.uploaded++;
        }
    },
})

export const {updateNodes, updateTree, toggleHidden,  setPhaseTwoState} = phaseTwoSlice.actions

export default phaseTwoSlice.reducer

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
        setPhaseTwoState: (state, action) => {
            state.nodeState = action.payload.nodeState
            state.uploaded++;
        }
    },
})

export const {updateNodes, updateTree,  setPhaseTwoState} = phaseTwoSlice.actions

export default phaseTwoSlice.reducer

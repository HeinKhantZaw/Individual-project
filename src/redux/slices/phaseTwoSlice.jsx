import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nodeState: [],
    uploaded: 0,
}

export const phaseTwoSlice = createSlice({
    name: 'phaseOne',
    initialState,
    reducers: {
        updateNodes: (state, action) => {
            state.nodeState = action.payload
        },
        setPhaseTwoState: (state, action) => {
            state.uploaded++;
        }
    },
})

export const {updateNodes, setPhaseTwoState} = phaseTwoSlice.actions

export default phaseTwoSlice.reducer

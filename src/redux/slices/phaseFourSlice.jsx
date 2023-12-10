import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    phaseFourNodes: [],
}

export const phaseFourSlice = createSlice({
    name: 'phaseFour',
    initialState,
    reducers: {
        setPhaseFourNodes: (state, action) => {
            state.phaseFourNodes = action.payload
        },
        showSelectedNodes: (state, action) => {
            const selectedNodes = action.payload.map(node => node.data.label)
            state.phaseFourNodes.map(node => {
                if (selectedNodes.includes(node.data.label)) {
                    node.data.tacticType = "acceptance"
                    node.data.isChosen = true
                }
            })
            // state.phaseFourNodes.push(action.payload)
        },
    },
})

export const {showSelectedNodes, setPhaseFourNodes} = phaseFourSlice.actions;
export default phaseFourSlice.reducer;

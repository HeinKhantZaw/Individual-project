import {createSlice} from "@reduxjs/toolkit";

const gamifiedNodes = [
    {
        "id": "fast-design",
        "type": "oval",
        "position": {
            "x": 5000,
            "y": 1850,
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Fast_Design",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "low-cost-design",
        "type": "oval",
        "position": {
            "x": 5500,
            "y": 1850,
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Low_Cost_Design",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "high-design-quality",
        "type": "oval",
        "position": {
            "x": 6000,
            "y": 1850,
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "High_Design_Quality",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "increase-user-surprise",
        "type": "oval",
        "position": {
            "x": 6500,
            "y": 1850,
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Increase_User_Surprise",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-system-loyalty",
        "type": "oval",
        "position": {
            "x": 7000,
            "y": 1850,
        },
        "sourcePosition": "top",
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Improve_System_Loyalty",
            "type": "tactic",
            "num": "[1]",
            "sourceTop": true
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-system-perception",
        "type": "oval",
        "position": {
            "x": 7500,
            "y": 1850,
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Improve_System_Perception",
            "type": "tactic",
            "top": "no",
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "promote-ethical-behavior",
        "type": "oval",
        "position": {
            "x": 5250,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Promote_Ethical_Behavior",
            "type": "tactic",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "promote-altruistic-behavior",
        "type": "oval",
        "position": {
            "x": 5750,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Promote_Altruistic_Behavior",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-system-perception-by-humans",
        "type": "oval",
        "position": {
            "x": 6250,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Improve_System_Perception_by_Humans",
            "type": "tactic",
            "num": "[1]",
            "width": 300,
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "increase-profit",
        "type": "oval",
        "position": {
            "x": 6750,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Increase_Profit",
            "type": "tactic",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "increase-worth-vagueness",
        "type": "oval",
        "position": {
            "x": 7250,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Increase_Worth_Vagueness",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-trust",
        "type": "oval",
        "position": {
            "x": 7750,
            "y": 2050
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Improve_Trust",
            "type": "tactic",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "support-user-penalization",
        "type": "oval",
        "position": {
            "x": 8250,
            "y": 1850
        },
        "data": {
            "tacticType": "gamified",
            "isHidden": false,
            "isChosen": true,
            "label": "Support_User_Penalization",
            "type": "tactic",
            "width": 300,
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    }
]
const initialState = {
    phaseFourNodes: [],
    selectedTacticNodes: [
        // "fast-design",
        // "low-cost-design",
        // "high-design-quality",
        // "increase-user-surprise",
        // "improve-perceived-status",
        // "promote-collaboration",
        // "improve-minor-assistance"
    ],
    selectedNodeNames: []
}

export const phaseFourSlice = createSlice({
    name: 'phaseFour',
    initialState,
    reducers: {
        setPhaseFourNodes: (state, action) => {
            state.phaseFourNodes = action.payload
            state.selectedTacticNodes = []
        },
        showSelectedNodes: (state, action) => {
            const selectedNodes = action.payload.map(node => node.data.label)
            state.phaseFourNodes.map(node => {
                if (selectedNodes.includes(node.data.label)) {
                    node.data.tacticType = "acceptance"
                    node.data.isChosen = true
                }
            })
            gamifiedNodes.map(node => {
                if (selectedNodes.includes(node.data.label)) {
                    state.phaseFourNodes.push(node)
                }
            })
            state.selectedTacticNodes = selectedNodes.map(node => node.toLowerCase().replaceAll("_", "-"));
            state.selectedNodeNames = selectedNodes
        },
    },
})

export const {showSelectedNodes, setPhaseFourNodes} = phaseFourSlice.actions;
export default phaseFourSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import getTacticNodes from "../../utils/getTacticNodes.jsx";

const initialNodes = [
    {
        "id": "improve-system-perception-via-IT",
        "type": "oval",
        "position": {
            "x": 700,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Perception_via_IT",
            "type": "tactic",
            "num": "[2]",
            "top": "no"
        },
        "draggable": false,
        "width": 450,
        "height": 100
    },
    {
        "id": "improve-system-advantage-perception-vs-competitor-systems-via-it",
        "type": "oval",
        "position": {
            "x": 1200,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Advantage_Perception_VS_Competitor_Systems_via_IT",
            "width": 450,
            "height": 100,
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 450,
        "height": 100
    },
    {
        "id": "support-achievement-4",
        "type": "oval",
        "position": {
            "x": 1800,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Support_Achievement",
            "type": "tactic",
            "num": "[4]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-perceived-status-4",
        "type": "oval",
        "position": {
            "x": 2300,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Improve_Perceived_Status",
            "type": "tactic",
            "num": "[4]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "support-skill-improvement-3",
        "type": "oval",
        "position": {
            "x": 1000,
            "y": -300
        },
        "data": {
            "isHidden": false,
            "label": "Support_Skill_Improvement",
            "type": "tactic",
            "num": "[3]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-system-awareness-2",
        "type": "oval",
        "position": {
            "x": 1500,
            "y": -300
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Awareness",
            "type": "tactic",
            "num": "[2]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-minor-assistance-2",
        "type": "oval",
        "position": {
            "x": 500,
            "y": -300
        },
        "data": {
            "isHidden": false,
            "label": "Improve_Minor_Assistance",
            "type": "tactic",
            "num": "[2]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "support-social-behavior",
        "type": "oval",
        "position": {
            "x": 2000,
            "y": -300
        },
        "data": {
            "isHidden": false,
            "label": "Support_Social_Behavior",
            "type": "tactic",
            "num": "[5]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "promote-collaboration-1",
        "type": "oval",
        "position": {
            "x": 2500,
            "y": -300
        },
        "data": {
            "isHidden": false,
            "label": "Promote_Collaboration",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    }
]

const initialState = {
    initialTacticNodes: initialNodes,
    removedTacticNodes: [],
    disabledTacticNodes: [],
    uploaded: 0,
}
export const phaseThreeSlice = createSlice({
    name: 'phaseThree',
    initialState,
    reducers: {
        setInitialTacticNodes: (state, action) => {
            const totalNodes = action.payload.map((node)=>node.id);
            const tacticNodes = [...new Set(getTacticNodes(totalNodes))];
        },
        hideTactic: (state, action) => {
            state.disabledTacticNodes = [...state.disabledTacticNodes, action.payload]
            console.log(action.payload)
            state.initialTacticNodes.map((node) => {
                if (node.id === action.payload) {
                    node.data.isHidden = !node.data.isHidden
                }
            });
        },
    }});
export const {
    setInitialTacticNodes,
    hideTactic,
} = phaseThreeSlice.actions

export default phaseThreeSlice.reducer

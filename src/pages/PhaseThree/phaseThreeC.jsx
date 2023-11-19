import React, {useEffect} from "react";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import ReactFlow, {Background, useEdgesState, useNodesState} from "reactflow";
import Heading from "arwes/lib/Heading/index.js";
import {phase3Style} from "./style.jsx";
import {useDispatch} from "react-redux";
import {setPhase3Value} from "../../redux/slices/phaseStatusSlice.jsx";
import {markerConfig} from "../../components/Arrows/Marker.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";

const PhaseThreeCNodes  = [
    {
        "id": "fast-design",
        "type": "oval",
        "position": {
            "x": 0,
            "y": 0
        },
        "data": {
            "isHidden": false,
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
            "x": 500,
            "y": 0
        },
        "data": {
            "isHidden": false,
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
            "x": 1000,
            "y": 0
        },
        "data": {
            "isHidden": false,
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
        "id": "support-skill-improvement",
        "type": "oval",
        "position": {
            "x": 1500,
            "y": 0
        },
        "data": {
            "isHidden": false,
            "label": "Support_Skill_Improvement",
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
            "x": 2000,
            "y": 0
        },
        "data": {
            "isHidden": false,
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
        "id": "support-achievement",
        "type": "oval",
        "position": {
            "x": 2500,
            "y": 0
        },
        "data": {
            "isHidden": false,
            "label": "Support_Achievement",
            "type": "tactic",
            "num": "[1]",
            "top": "no",
            "bottom": true,
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-perceived-status",
        "type": "oval",
        "position": {
            "x": 3000,
            "y": 0
        },
        "data": {
            "isHidden": false,
            "label": "Improve_Perceived_Status",
            "type": "tactic",
            "num": "[1]",
            "top": "no",
            "bottom": true,
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    //2nd layer
    {
        "id": "improve-system-loyalty",
        "type": "oval",
        "position": {
            "x": 2750,
            "y": 200
        },
        "sourcePosition": "top",
        "data": {
            "isHidden": false,
            "label": "Improve_System_Loyalty",
            "type": "tactic",
            "num": "[1]",
            "sourceTop": true
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    //3rd layer
    {
        "id": "improve-system-advantage-perception-vs-competitor-systems-via-it",
        "type": "oval",
        "position": {
            "x": 400,
            "y": 500
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
        "id": "promote-collaboration",
        "type": "oval",
        "position": {
            "x": 1500,
            "y": 500
        },
        "data": {
            "isHidden": false,
            "label": "Promote_Collaboration",
            "type": "tactic",
            "num": "[2]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "improve-system-perception",
        "type": "oval",
        "position": {
            "x": 2750,
            "y": 500
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Perception",
            "type": "tactic",
            "top": "no",
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    //4th layer
    {
        "id": "support-social-behavior",
        "type": "oval",
        "position": {
            "x": 500,
            "y": 800
        },
        "data": {
            "isHidden": false,
            "label": "Support_Social_Behavior",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "promote-ethical-behavior",
        "type": "oval",
        "position": {
            "x": 1000,
            "y": 800
        },
        "data": {
            "isHidden": false,
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
            "x": 1500,
            "y": 800
        },
        "data": {
            "isHidden": false,
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
        "id": "improve-minor-assistance",
        "type": "oval",
        "position": {
            "x": 2000,
            "y": 800
        },
        "data": {
            "isHidden": false,
            "label": "Improve_Minor_Assistance",
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
            "x": 2500,
            "y": 800
        },
        "data": {
            "isHidden": false,
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
        "id": "improve-system-perception-via-it",
        "type": "oval",
        "position": {
            "x": 3000,
            "y": 800
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Perception_Via_IT",
            "type": "tactic",
            "num": "[1]",
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    //5th layer
    {
        "id": "improve-system-awareness",
        "type": "oval",
        "position": {
            "x": 500,
            "y": 1200
        },
        "data": {
            "isHidden": false,
            "label": "Improve_System_Awareness",
            "type": "tactic",
            "num": "[1]",
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
    {
        "id": "increase-profit",
        "type": "oval",
        "position": {
            "x": 1000,
            "y": 1200
        },
        "data": {
            "isHidden": false,
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
            "x": 1500,
            "y": 1200
        },
        "data": {
            "isHidden": false,
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
            "x": 2000,
            "y": 1200
        },
        "data": {
            "isHidden": false,
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
            "x": 2500,
            "y": 1200
        },
        "data": {
            "isHidden": false,
            "label": "Support_User_Penalization",
            "type": "tactic",
            "width": 300,
            "top": "no"
        },
        "draggable": false,
        "width": 240,
        "height": 80
    },
]
const edgeState = [
    {
        id: "e1-0",
        source: "improve-system-loyalty",
        target: "support-achievement",
        type: "dotted",
        sourceHandle: "oval_source_top",
        markerStart: markerConfig,
    },
    {
        id: "e1-1",
        source: "improve-system-loyalty",
        target: "improve-perceived-status",
        type: "dotted",
        sourceHandle: "oval_source_top",
        markerStart: markerConfig,
    },
    {
        id: "e2-0",
        source: "improve-system-perception",
        target: "improve-system-perception-by-humans",
        type: "dotted",
        sourceHandle: "oval_source_top",
        markerStart: markerConfig,
    },
    {
        id: "e2-1",
        source: "improve-system-perception",
        target: "improve-system-perception-via-it",
        type: "dotted",
        sourceHandle: "oval_source_top",
        markerStart: markerConfig,
    },
]
const nodeTypes = {oval: OvalNode};
const edgeTypes = {dotted: DottedEdge};

export default function PhaseThreeC() {
    const [nodes, setNodes, onNodesChange] = useNodesState(PhaseThreeCNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPhase3Value("Phase 3(c)"))
    }, []);

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <Heading node="h2" style={phase3Style.title}>
                The operationalization chosen can operationalize also other tactics, the following ones:
                <br/>
                <span>do you want to include some of them?</span>
            </Heading>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                deleteKeyCode={''}
                fitView
                maxZoom={1.2}
                minZoom={0.4}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                // onNodeClick={handleElementClick}
            >
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

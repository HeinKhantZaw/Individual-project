import React, {useEffect} from "react";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import ReactFlow, {Background, useNodesState} from "reactflow";
import Heading from "arwes/lib/Heading/index.js";
import {phase3Style} from "./style.jsx";
import {useDispatch} from "react-redux";
import {setPhase3Value} from "../../redux/slices/phaseStatusSlice.jsx";

let initialNodes = [
    {
        "id": "design-gamification",
        "type": "oval",
        "position": {
            "x": 700,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Design_Gamification",
            "type": "tactic",
            "titleDisable": true,
            "top": "no"
        },
        "draggable": false,
        "width": 450,
        "height": 100
    },
    {
        "id": "design-tangible-incentives",
        "type": "oval",
        "position": {
            "x": 1000,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Design_Tangible_Incentives",
            "type": "tactic",
            "titleDisable": true,
            "top": "no"
        },
        "draggable": false,
        "width": 450,
        "height": 100
    },
    {
        "id": "design-serious-games",
        "type": "oval",
        "position": {
            "x": 1300,
            "y": -700
        },
        "data": {
            "isHidden": false,
            "label": "Design_Serious_Games",
            "type": "tactic",
            "titleDisable": true,
            "top": "no"
        },
        "draggable": false,
        "width": 450,
        "height": 100
    },
];
const nodeTypes = {oval: OvalNode};

export default function PhaseThreeC() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPhase3Value("Phase 3(c)"))
    }, []);
    const handleElementClick = (event, element) => {
        initialNodes.map((node) => {
            if (node.id === element.id) {
                node.data.isHidden = !node.data.isHidden;
            }
        });
        onNodesChange(initialNodes);
    };
    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <Heading node="h2" style={phase3Style.title}>
                The operationalization chosen can operationalize also other tactics, the following ones:
                <br/>
                <span>do you want to include some of them?</span>
            </Heading>
            <ReactFlow
                nodes={nodes}
                deleteKeyCode={''}
                fitView
                maxZoom={1.2}
                minZoom={0.6}
                nodeTypes={nodeTypes}
                onNodeClick={handleElementClick}
            >
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

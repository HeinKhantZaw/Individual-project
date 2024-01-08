import React, {useEffect} from "react";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import ReactFlow, {Background, useEdgesState, useNodesState} from "reactflow";
import Heading from "arwes/lib/Heading/index.js";
import {phase3Style} from "./style.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhase, setPhase3Value} from "../../redux/slices/phaseStatusSlice.jsx";
import {markerConfig} from "../../components/Arrows/Marker.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";
import {Phase3cNodes} from "../../data/PhaseThreeNodes.jsx";
import {setChosenTactic, setPhase3aTacticNodes, setPhase3cNodes} from "../../redux/slices/phaseThreeSlice.jsx";

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
    const {initialPhase3cTacticNodes} = useSelector(state => state.phaseThree);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialPhase3cTacticNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentPhase(3));
        dispatch(setPhase3Value("Phase C3"))
        dispatch(setPhase3cNodes(Phase3cNodes));
    }, []);
    useEffect(() => {
        setNodes(initialPhase3cTacticNodes);
    }, [initialPhase3cTacticNodes]);
    const handleElementClick = (event, element) => {
        if (element.data.tacticType === "gamified") {
            dispatch(setChosenTactic(element.id));
        }
    }

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
                zoomOnDoubleClick={false}
                fitView
                maxZoom={1.2}
                minZoom={0.4}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodeClick={handleElementClick}
            >
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

import React, {useEffect} from "react";
import ReactFlow, {Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import FloatingEdge from "../../components/FloatingEdge";
import ConnectionLine from "../../components/ConnectionLine";
import {useDispatch, useSelector} from "react-redux";
import GamificationNode from "../../components/Shapes/GamificationNode.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import StraightEdge from "../../components/StraightEdge";
import NeedDottedEdge from "../../components/DottedEdge/NeedDottedEdge.jsx";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import {removeNegativeConnections, setPhaseFiveNodes} from "../../redux/slices/phaseFiveSlice.jsx";
import {evalAndRegexConditions} from "../../utils/evalAndRegexConditions.jsx";
import {OperationalMarker} from "../../components/Arrows/OperationalMarker.jsx";


export default function PhaseFive() {
    const {nodeState, edgeState, hiddenNodes, uploaded} = useSelector((state) => state.phaseFive);
    const [nodes, setNodes, onNodesChange] = useNodesState(nodeState);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    // const {selectedNodeNames} = useSelector((state) => state.phaseFour);
    const nodeTypes = {gamification: GamificationNode, operator: OperatorNode, oval: OvalNode};
    const edgeTypes = {floating: FloatingEdge, dotted: NeedDottedEdge, straightLabel: StraightEdge};
    const dispatch = useDispatch();
    // const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);
    const userSelectedNodes = ['C13', 'C3', 'C4', 'C14', 'C16', 'C21', 'C27', 'C33', 'C34', 'C5', 'C1', 'C2', 'C8', 'C9', 'C10']
    const selectedNodeNames = [
        "Fast_Design",
        "Low_Cost_Design",
        "Promote_Collaboration",
        // "High_Design_Quality",
        // "Support_Skill_Improvement",
        // "Increase_User_Surprise",
        // "Support_Achievement",
        // "Improve_Perceived_Status",
        // "Promote_Collaboration",
        // "Improve_System_Perception",
        // "Promote_Ethical_Behavior",
        // "Promote_Altruistic_Behavior",
        // "Improve_Minor_Assistance",
        // "Improve_System_Perception_by_Humans",
        // "Improve_System_Perception_via_IT",
        // "Improve_System_Awareness",
        // "Increase_Profit",
        // "Increase_Worth_Vagueness"
    ]
    const updateGraph = () => evalAndRegexConditions(nodeState, userSelectedNodes);


    useEffect(() => {
        dispatch(setPhaseFiveNodes({
            nodes: updateGraph(),
            selectedTacticNodes: selectedNodeNames
        }));
        dispatch(removeNegativeConnections(selectedNodeNames.map(node => node.toLowerCase().replaceAll("_", "-"))))
        dispatch(setCurrentPhase(5));
        dispatch(setNextPhaseEnabled(true));
    }, []);

    useEffect(() => {
        setNodes(nodeState);
        setEdges(edgeState)
    }, [nodeState, edgeState, uploaded]);

    const defaultEdgeOptions = {
        style: {strokeWidth: 2, stroke: 'white'},
        type: 'floating',
    };
    const connectionLineStyle = {
        strokeWidth: 3,
        stroke: 'grey',
        strokeDasharray: '5,5',
    };

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <OperationalMarker/>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                panOnScroll={true}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineComponent={ConnectionLine}
                zoomOnDoubleClick={false}
                connectionLineStyle={connectionLineStyle}
                deleteKeyCode={''}
                fitView
                maxZoom={1.5}
                minZoom={0.18}
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

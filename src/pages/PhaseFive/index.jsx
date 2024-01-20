import React, {useEffect} from "react";
import ReactFlow, {Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import FloatingEdge from "../../components/FloatingEdge/index.jsx";
import ConnectionLine from "../../components/ConnectionLine/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import GamificationNode from "../../components/Shapes/GamificationNode.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import StraightEdge from "../../components/StraightEdge/index.jsx";
import NeedDottedEdge from "../../components/DottedEdge/NeedDottedEdge.jsx";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import {setPhaseFiveNodes} from "../../redux/slices/phaseFiveSlice.jsx";


export default function PhaseFive() {
    const {nodeState, edgeState, hiddenNodes, uploaded, nodeTree} = useSelector((state) => state.phaseFive);
    const [nodes, setNodes, onNodesChange] = useNodesState(nodeState);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const nodeTypes = {gamification: GamificationNode, operator: OperatorNode, oval: OvalNode};
    const edgeTypes = {floating: FloatingEdge, dotted: NeedDottedEdge, straightLabel: StraightEdge};
    const dispatch = useDispatch();
    const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);
    const {nextPhaseEnabled, currentPhase} = useSelector((state) => state.phaseStatus);

    // useEffect(() => {
    //     dispatch(setCurrentPhase(1))
    //     if(phaseTwoState.length > 0) {
    //         dispatch(resetPhaseTwo())
    //     }
    //     if(initialPhase3aTacticNodes.length > 0 || initialPhase3cTacticNodes.length > 0) {
    //         dispatch(resetPhaseThree())
    //     }
    // }, [currentPhase]);

    // useEffect(() => {
    //     if (edges.length > 102 && !nextPhaseEnabled) {
    //         dispatch(setNextPhaseEnabled(true))
    //     }
    //     dispatch(connectEdge(edges));
    // }, [edges]);

    // useEffect(() => {
    //     setEdges(edgeState);
    // }, [phaseOneState.uploaded])
    const updateGraph = () => {
        return nodeState.filter(node => {
            if (!node.conditions) return true;
            else {
                const replacedExpression = node.conditions.replace(/\b\w+\b/g, (match) => {
                    if (userSelectedNodes.includes(match)) {
                        return "true";
                    } else if (match === "NOT") {
                        return "!";
                    } else if (match === "OR") {
                        return "||";
                    } else if (match === "AND") {
                        return "&&";
                    } else {
                        return "false";
                    }
                });
                return eval(replacedExpression);
            }
        });
    };

    useEffect(() => {
        dispatch(setPhaseFiveNodes(updateGraph()));
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

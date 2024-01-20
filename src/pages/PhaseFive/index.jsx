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
        // dispatch(setPhaseFiveNodes(updateGraph()));
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
            <svg style={{position: 'absolute', top: 0, left: 0}}>
                <defs>
                    <marker
                        id="operate"
                        viewBox="0 0 40 40"
                        markerHeight={20}
                        markerWidth={20}
                        refX={20}
                        refY={40}
                    >
                        <path
                            d="M35 23H25C23.8954 23 23 23.8954 23 25V35C23 36.1046 23.8954 37 25 37H35C36.1046 37 37 36.1046 37 35V25C37 23.8954 36.1046 23 35 23Z"
                            stroke="#1A192B"
                            stroke-width="2"
                            fill="white"
                        />
                        <path
                            d="M35 3H25C23.8954 3 23 3.89543 23 5V15C23 16.1046 23.8954 17 25 17H35C36.1046 17 37 16.1046 37 15V5C37 3.89543 36.1046 3 35 3Z"
                            stroke="#FF0072"
                            stroke-width="2"
                            fill="white"
                        />
                        <path
                            d="M15 23H5C3.89543 23 3 23.8954 3 25V35C3 36.1046 3.89543 37 5 37H15C16.1046 37 17 36.1046 17 35V25C17 23.8954 16.1046 23 15 23Z"
                            stroke="#1A192B"
                            stroke-width="2"
                            fill="white"
                        />
                        <path
                            d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3Z"
                            stroke="#1A192B"
                            stroke-width="2"
                            fill="white"
                        />
                        <path
                            d="M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z"
                            fill="white"
                        />
                        <path
                            d="M23 13C24.6569 13 26 11.6569 26 10C26 8.34315 24.6569 7 23 7C21.3431 7 20 8.34315 20 10C20 11.6569 21.3431 13 23 13Z"
                            fill="white"
                        />
                        <path
                            d="M30 20C31.6569 20 33 18.6569 33 17C33 15.3431 31.6569 14 30 14C28.3431 14 27 15.3431 27 17C27 18.6569 28.3431 20 30 20Z"
                            fill="white"
                        />
                        <path
                            d="M30 26C31.6569 26 33 24.6569 33 23C33 21.3431 31.6569 20 30 20C28.3431 20 27 21.3431 27 23C27 24.6569 28.3431 26 30 26Z"
                            fill="white"
                        />
                        <path
                            d="M17 33C18.6569 33 20 31.6569 20 30C20 28.3431 18.6569 27 17 27C15.3431 27 14 28.3431 14 30C14 31.6569 15.3431 33 17 33Z"
                            fill="white"
                        />
                        <path
                            d="M23 33C24.6569 33 26 31.6569 26 30C26 28.3431 24.6569 27 23 27C21.3431 27 20 28.3431 20 30C20 31.6569 21.3431 33 23 33Z"
                            fill="white"
                        />
                        <path
                            d="M30 25C31.1046 25 32 24.1046 32 23C32 21.8954 31.1046 21 30 21C28.8954 21 28 21.8954 28 23C28 24.1046 28.8954 25 30 25Z"
                            fill="#1A192B"
                        />
                        <path
                            d="M17 32C18.1046 32 19 31.1046 19 30C19 28.8954 18.1046 28 17 28C15.8954 28 15 28.8954 15 30C15 31.1046 15.8954 32 17 32Z"
                            fill="#1A192B"
                        />
                        <path
                            d="M23 32C24.1046 32 25 31.1046 25 30C25 28.8954 24.1046 28 23 28C21.8954 28 21 28.8954 21 30C21 31.1046 21.8954 32 23 32Z"
                            fill="#1A192B"
                        />
                        <path opacity="0.35" d="M22 9.5H18V10.5H22V9.5Z" fill="#1A192B"/>
                        <path opacity="0.35" d="M29.5 17.5V21.5H30.5V17.5H29.5Z" fill="#1A192B"/>
                        <path opacity="0.35" d="M22 29.5H18V30.5H22V29.5Z" fill="#1A192B"/>
                        <path
                            d="M17 12C18.1046 12 19 11.1046 19 10C19 8.89543 18.1046 8 17 8C15.8954 8 15 8.89543 15 10C15 11.1046 15.8954 12 17 12Z"
                            fill="#1A192B"
                        />
                        <path
                            d="M23 12C24.1046 12 25 11.1046 25 10C25 8.89543 24.1046 8 23 8C21.8954 8 21 8.89543 21 10C21 11.1046 21.8954 12 23 12Z"
                            fill="#FF0072"
                        />
                        <path
                            d="M30 19C31.1046 19 32 18.1046 32 17C32 15.8954 31.1046 15 30 15C28.8954 15 28 15.8954 28 17C28 18.1046 28.8954 19 30 19Z"
                            fill="#FF0072"
                        />
                    </marker>
                </defs>
            </svg>
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

import React, {useCallback, useEffect, useState} from "react";
import ReactFlow, {addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import CircleNode from "../../components/Shapes/CircleNode.jsx";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import HexagonNode from "../../components/Shapes/HexagonNode.jsx";
import FloatingEdge from "../../components/FloatingEdge";
import ConnectionLine from "../../components/ConnectionLine";
import {useDispatch, useSelector} from "react-redux";
import {connectEdge, setPhaseOneState, updateNodes} from "../../redux/slices/phaseOneSlice.jsx";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import {resetPhaseTwo} from "../../redux/slices/phaseTwoSlice.jsx";
import {resetPhaseThree} from "../../redux/slices/phaseThreeSlice.jsx";
import Heading from "arwes/lib/Heading/index.js";
import {phase3Style} from "../PhaseThree/style.jsx";
import {getGlossary} from "../../utils/getGlossary.jsx";
import Project from "arwes/lib/Project/index.js";
import Button from "arwes/lib/Button/index.js";
import {templateOne} from "../../data/Phase1_template.js";

const nodeTypes = {circle: CircleNode, operator: OperatorNode, hexagon: HexagonNode};

export default function PhaseOne() {
    const phaseOneState = useSelector((state) => state.phaseOne);
    const phaseTwoState = useSelector((state) => state.phaseTwo.nodeState);
    const [useTemplate, setUseTemplate] = useState(false);
    const [loading, setLoading] = useState(true);
    const {initialPhase3aTacticNodes, initialPhase3cTacticNodes} = useSelector((state) => state.phaseThree);
    const {edgeState, nodeState} = phaseOneState;
    const [nodes, setNodes, onNodesChange] = useNodesState(nodeState);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const edgeTypes = {floating: FloatingEdge};
    const dispatch = useDispatch()
    const {nextPhaseEnabled, currentPhase} = useSelector((state) => state.phaseStatus);

    useEffect(() => {
        dispatch(setCurrentPhase(1))
        if (phaseTwoState.length > 0) {
            dispatch(resetPhaseTwo())
        }
        if (initialPhase3aTacticNodes.length > 0 || initialPhase3cTacticNodes.length > 0) {
            dispatch(resetPhaseThree())
        }
    }, [currentPhase]);

    useEffect(() => {
        if (edges.length > 102 && !nextPhaseEnabled) {
            dispatch(setNextPhaseEnabled(true))
        }
        dispatch(connectEdge(edges));
    }, [edges]);

    useEffect(() => {
        if(useTemplate) {
            dispatch(setPhaseOneState(templateOne))
        }
    }, [useTemplate]);

    useEffect(() => {
        setNodes(nodeState)
    }, [nodeState]);

    useEffect(() => {
        setEdges(edgeState);
    }, [phaseOneState.uploaded])


    const regexForXor = /xor(\d+)$/;

    const defaultEdgeOptions = {
        style: {strokeWidth: 2, stroke: 'white'},
        type: 'floating',
    };
    const connectionLineStyle = {
        strokeWidth: 3,
        stroke: 'grey',
        strokeDasharray: '5,5',
    };

    // const onConnect = useCallback((params) => {
    //     const {source} = params;
    //     const xorNode = source.match(regexForXor);
    //         setEdges((edges) => {
    //             if (xorNode) {
    //                 edges = edges.filter((edge) => !edge.source.includes(xorNode[0]));
    //             }
    //             const updatedEdge = {
    //                 ...params,
    //                 id: source + "-edge",
    //                 animated: true
    //             };
    //             return addEdge(updatedEdge, edges);
    //         });
    //         setNodes((nodes) => {
    //             return nodes.map((node) => {
    //                 if (node.id === source) {
    //                     node.data.isChosen = true;
    //                 }
    //                 return node;
    //             })
    //         });
    //
    // }, [setEdges]);

    const connectToBase = useCallback((event, element) => {
        const xorNode = element.id.match(regexForXor);
        const clickedNode = nodes.find(node => node.id === element.id);
        if (!clickedNode.data.isConnectable) {
            return;
        }
        if (clickedNode.data.isChosen) {
            setEdges((edges) => edges.filter(edge => edge.id !== element.id + "-edge"));
        } else {
            setEdges((edges) => {
                if (xorNode) {
                    edges = edges.filter((edge) => !edge.source.includes(xorNode[0]));
                }
                const updatedEdge = {
                    id: element.id + "-edge",
                    target: "phase-one-result",
                    source: element.id,
                    animated: true,
                    ...defaultEdgeOptions
                };
                return addEdge(updatedEdge, edges);
            });

        }
        dispatch(updateNodes(element.id))
    }, [setEdges, nodes, setNodes]);

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            {
                loading && <>
                    <Heading node="h2" style={phase3Style.title}>
                        Do you wanna use default template in this phase?
                    </Heading>
                <div className={"flex justify-center gap-4"}>
                    <Button animate layer="alert" className={"hover:bg-slate-900"} onClick={()=>setLoading(false)}>NO</Button>
                    <Button animate layer="success" className={"hover:bg-slate-900"} onClick={()=>{
                        setLoading(false);
                        setUseTemplate (true);
                    }}>YES</Button>
                </div>
                </>
            }
            {!loading &&
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    panOnScroll={true}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    // onConnect={onConnect}
                    defaultEdgeOptions={defaultEdgeOptions}
                    connectionLineComponent={ConnectionLine}
                    connectionLineStyle={connectionLineStyle}
                    deleteKeyCode={''}
                    onNodeClick={connectToBase}
                    fitView
                    maxZoom={1.5}
                    minZoom={0.18}
                >
                    <Controls/>
                    <MiniMap pannable zoomable/>
                    <Background variant="dots" gap={12} size={1}/>
                </ReactFlow>
            }
        </div>
    );
}

import React, {useCallback, useEffect} from "react";
import ReactFlow, {addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import CircleNode from "../../components/Shapes/CircleNode.jsx";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import HexagonNode from "../../components/Shapes/HexagonNode.jsx";
import FloatingEdge from "../../components/FloatingEdge";
import ConnectionLine from "../../components/ConnectionLine";
import {useDispatch, useSelector} from "react-redux";
import {connectEdge, setPhaseOneState, updateNodes} from "../../redux/slices/phaseOneSlice.js";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.js";
import {resetPhaseTwo} from "../../redux/slices/phaseTwoSlice.js";
import {resetPhaseThree} from "../../redux/slices/phaseThreeSlice.js";
import {templateOne} from "../../data/Phase1_template.js";

const nodeTypes = {circle: CircleNode, operator: OperatorNode, hexagon: HexagonNode};

export default function PhaseOne() {
    const phaseOneState = useSelector((state) => state.phaseOne);
    const phaseTwoState = useSelector((state) => state.phaseTwo.nodeState);
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
        if (edges.length >= 105) {
            !nextPhaseEnabled && dispatch(setNextPhaseEnabled(true));
        }
        else {
            dispatch(setNextPhaseEnabled(false));
        }
        dispatch(connectEdge(edges));
    }, [edges]);

    useEffect(() => {
        dispatch(setPhaseOneState(templateOne))
    }, []);

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
            <ReactFlow
                nodes={nodes}
                edges={edges}
                panOnScroll={true}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineComponent={ConnectionLine}
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
        </div>
    );
}

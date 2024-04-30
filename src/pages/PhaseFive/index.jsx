import React, {useEffect, useState} from "react";
import ReactFlow, {Background, Controls, isNode, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch, useSelector} from "react-redux";
import GamificationNode from "../../components/Shapes/GamificationNode.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import StraightEdge from "../../components/StraightEdge";
import NeedDottedEdge from "../../components/DottedEdge/NeedDottedEdge.jsx";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.js";
import {
    hideElements,
    preResolveConflict, removeNegativeConnections,
    resolveConflicts,
    setPhaseFiveNodes
} from "../../redux/slices/phaseFiveSlice.js";
import {evalAndRegexConditions} from "../../utils/evalAndRegexConditions.js";
import {OperationalMarker} from "../../components/Arrows/OperationalMarker.jsx";
import Loading from "arwes/lib/Loading/index.js";
import {phase3Style} from "../PhaseThree/style.jsx";
import Heading from "arwes/lib/Heading/index.js";
import {getGlossary} from "../../utils/getGlossary.js";
import Project from "arwes/lib/Project/index.js";
import {findNodeById} from "../../utils/findNodeById.js";

const nodeTypes = {gamification: GamificationNode, operator: OperatorNode, oval: OvalNode};
const edgeTypes = {dotted: NeedDottedEdge, straightLabel: StraightEdge};

export default function PhaseFive() {
    const [elements, setElements] = useState([]);

    const [loading, setLoading] = useState(true);
    const [solved, setSolved] = useState(false);
    const [conflictNodes, setConflictNodes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [removedNode, setRemovedNode] = useState([]);

    const {nodeState, edgeState, hiddenNodes, uploaded, treeMap} = useSelector((state) => state.phaseFive);
    const [nodes, setNodes, onNodesChange] = useNodesState(nodeState);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const {selectedNodeNames} = useSelector((state) => state.phaseFour);
    const dispatch = useDispatch();
    const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);
    // const userSelectedNodes = [
    //     "C7",
    //     "C4",
    //     "C2",
    //     "C1",
    //     "C5",
    //     "C14",
    //     "C17",
    //     "C18",
    //     "C12",
    //     "C24",
    //     "C25",
    //     "C29",
    //     "C26",
    //     "C33",
    //     "C34",
    //     "C8",
    //     "C11"
    // ];
    // const selectedNodeNames = [
    //     "High_Design_Quality",
    //     "Increase_User_Surprise",
    //     "Promote_Collaboration",
    //     "Improve_Minor_Assistance",
    //     "Improve_System_Perception_via_IT",
    //     "Improve_System_Awareness",
    //     "Improve_Trust"
    // ]
    //     "Fast_Design",
    //     "Low_Cost_Design",
    //     "Promote_Collaboration",
    //     "High_Design_Quality",
    //     "Support_Skill_Improvement",
    //     "Increase_User_Surprise",
    //     "Support_Achievement",
    //     "Improve_Perceived_Status",
    //     "Promote_Collaboration",
    //     "Improve_System_Perception",
    //     "Promote_Ethical_Behavior",
    //     "Promote_Altruistic_Behavior",
    //     "Improve_Minor_Assistance",
    //     "Improve_System_Perception_by_Humans",
    //     "Improve_System_Perception_via_IT",
    //     "Improve_System_Awareness",
    //     "Increase_Profit",
    //     "Increase_Worth_Vagueness",
    //     "Create_Fair_Competition"
    // ]
    const handleNodeClick = (event, element) => {
        if(element.type === "gamification" && element.id !== "design-gamification"){
            dispatch(hideElements(element.id));
        }
    }

    const checkConflicts = () => {
        let conflictNodes = [];
        edgeState.map(edge => {
            if (edge.data && edge.data.label === "!") {
                conflictNodes.push({n1: edge.source, n2: edge.target})
            }
        });
        if(conflictNodes.length > 0) {
            setConflictNodes(conflictNodes);
        } else {
            setSolved(true);
        }
    }

    const resolveConflict = (node) => {
        const newRemovedNode = [...removedNode, node];
        setRemovedNode(newRemovedNode);
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === conflictNodes.length - 1) {
            dispatch(resolveConflicts(newRemovedNode));
            setSolved(true);
        }
    }

    useEffect(() => {
        dispatch(setPhaseFiveNodes({
            nodes: evalAndRegexConditions(nodeState, userSelectedNodes),
            selectedTacticNodes: selectedNodeNames,
        }));
        dispatch(removeNegativeConnections(selectedNodeNames.map(node => node.toLowerCase().replaceAll("_", "-"))))
        dispatch(setCurrentPhase(5));
        dispatch(setNextPhaseEnabled(true));
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            // special case
            if(selectedNodeNames.includes("Create_Fair_Competition")) {
                dispatch(preResolveConflict("create-unfair-competition"));
            } else if (selectedNodeNames.includes("Create_Unfair_Competition")){
                dispatch(preResolveConflict("create-fair-competition"));
            }
            checkConflicts();
        }
    }, [loading]);

    useEffect(() => {
        setNodes(nodeState);
        setEdges(edgeState)
    }, [nodeState, edgeState, uploaded]);

    // a recursive function to find all the nodes connected to the selected one
    const getAllRelations = (node, nodes, edges, prevOutgoers = []) => {
        const outgoers = getOutgoingRelations(node, nodes, edges);
        return outgoers.reduce(
            (memo, outgoer) => {
                memo.push(outgoer);
                if ((prevOutgoers.findIndex(n => n.id === outgoer.id) === -1)) {
                    prevOutgoers.push(outgoer);
                    getAllRelations(outgoer, nodes, edges, prevOutgoers).forEach((foundNode) => {
                        memo.push(foundNode);
                        if ((prevOutgoers.findIndex(n => n.id === foundNode.id) === -1)) {
                            prevOutgoers.push(foundNode);
                        }
                    });
                }
                return memo;
            },
            []
        )
    }

    const getOutgoingRelations = (node, nodes, edges) => {
        if (!isNode(node)) {
            return [];
        }
        const outgoerIds = edges
            .filter((e) => e.source === node.id)
            .map((e) => e.target);

        return nodes.filter((n) => outgoerIds.map((id) => {
            const matches = /([\w-^]+)__([\w-]+)/.exec(id);
            if (matches === null) {
                return id;
            }
            return matches[1];
        }).includes(n.id));
    };

    // highlighting connected edges and nodes for better visualization
    const highlightPath = (node, nodes, edges, selection) => {
        if (node && [...nodes, ...edges]) {
            const allRelations = getAllRelations(node, nodes, edges)
            if (allRelations.length === 0) {
                return;
            }
            const connectedId = allRelations.map((o) => o.id)
            setEdges((prevElements)=>{
                return prevElements?.map((elem) => {
                    let newElem = {}
                        if (selection) {
                            const isConnected =
                                (connectedId.includes(elem.target) && node.id === elem.source)
                            newElem = {
                                ...elem,
                                selected: isConnected,
                                style: {
                                    ...elem.style,
                                    stroke: isConnected ? "#0F0" : "#b1b1b7",
                                    strokeWidth: isConnected ? 5 : 3,
                                }
                            };
                        } else {
                            newElem = {
                                ...elem,
                                selected: true,
                                style: {
                                    ...elem.style,
                                    stroke: '#b1b1b7',
                                    strokeWidth: 2,
                                }
                            }
                        }
                    return newElem
                })
            })
            setNodes((prevElements) => {
                return prevElements?.map((elem) => {
                    let newElem = {}
                    if (isNode(elem) && (allRelations.length > 0)) {
                        const highlight = elem.id === node.id || connectedId.includes(elem.id)
                        newElem = {
                            ...elem,
                            style: {
                                ...elem.style,
                                opacity: highlight ? 1 : 0.25,
                            }
                        }
                    }
                    return newElem
                })
            })
        }
    }

    const resetNodeStyles = () => {
        setEdges((prevElements) => {
            return prevElements?.map((elem) => {
                let newElem = {}
                newElem = {
                    ...elem,
                    animated: false,
                    selected: false,
                    style: {
                        ...elem.style,
                        stroke: "#FFF",
                        strokeWidth: 2,
                        opacity: 1,
                    }
                }
                return newElem
            })
        });
        setNodes((prevElements) => {
            return prevElements?.map((elem) => {
                let newElem= {}
                    newElem = {
                        ...elem,
                        style: {
                            ...elem.style,
                            opacity: 1,
                        }
                    }
                return newElem
            })
        })
    }


    return (
        <div style={{width: "100vw", height: "93vh"}}>
            {loading && <Loading
                animate={true}
                show={loading}
                size={2}
                speed={4}
                full
            />}
            {!loading && conflictNodes.length > 0 && !solved &&
                <>
                    <Heading node="h2" style={phase3Style.title} className={"!text-black dark:!text-cyan-400"}>
                        Conflict Detected
                        <br/>
                        <span>There are conflicts in the graph. Please resolve them by choosing one.</span>
                    </Heading>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <Project
                            animate
                            classes={{root: "heading-font"}}
                            header={conflictNodes[currentIndex].n1}
                            style={{cursor: "pointer"}}
                            onClick={() => resolveConflict(conflictNodes[currentIndex].n2)}>
                                    <span>
                                        {getGlossary(conflictNodes[currentIndex].n1.replace(/-/g, "_").replace(/_[0-9]+$/, ""))}
                                    </span>
                        </Project>
                        <Project
                            animate
                            classes={{root: "heading-font"}}
                            header={conflictNodes[currentIndex].n2}
                            style={{cursor: "pointer"}}
                            onClick={() => resolveConflict(conflictNodes[currentIndex].n1)}
                        >
                                    <span>
                                        {getGlossary(conflictNodes[currentIndex].n2.replace(/-/g, "_").replace(/_[0-9]+$/, ""))}
                                    </span>
                        </Project>
                    </div>
                </>
            }
            <OperationalMarker/>
            {!loading && solved &&
                <ReactFlow
                    elements={elements || []}
                    nodes={nodes}
                    edges={edges}
                    // onNodesChange={onNodesChange}
                    // onEdgesChange={onEdgesChange}
                    snapToGrid={true}
                    preventScrolling={true}
                    snapGrid={[10, 10]}
                    elementsSelectable={true}
                    onSelectionChange={(selectedElements) => {
                        if(selectedElements.nodes[0] && selectedElements.nodes[0].type === "oval") {
                            const node = selectedElements.nodes[0]
                            highlightPath(node, nodes, edges, true)
                        }
                    }}
                    onPaneClick={() => {resetNodeStyles()}}
                    panOnScroll={true}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    zoomOnDoubleClick={false}
                    deleteKeyCode={""}
                    fitView
                    maxZoom={1.5}
                    minZoom={0.00001}
                    onNodeClick={handleNodeClick}
                >
                    <Controls/>
                    <MiniMap pannable zoomable/>
                    <Background variant="dots" gap={12} size={1}/>
                </ReactFlow>
            }
        </div>
    );
}

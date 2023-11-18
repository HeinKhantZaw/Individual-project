import React, {useEffect, useState} from "react";
import ReactFlow, {Background, Controls, MarkerType, MiniMap, useEdgesState, useNodesState,} from "reactflow";
import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";
import {
    addEdges,
    filterEdges,
    hideEdges, phaseTwoSlice,
    setHiddenNodes,
    toggleHidden,
    updateNodes
} from "../../redux/slices/phaseTwoSlice.jsx";
import {flattenNodes} from "../../utils/flattenNodes.jsx";
import {removeAndFlattenNodes} from "../../utils/removeAndFlattenNodes.jsx";
import {findNodeById} from "../../utils/findNodeById.jsx";
import {getAllChildrenIds} from "../../utils/getAllChildrenIds.jsx";
import {buildTree} from "../../utils/buildTree.jsx";
import {searchNode} from "../../utils/searchNode.jsx";
import getTacticNodes from "../../utils/getTacticNodes.jsx";


const nodeTypes = {oval: OvalNode, operator: OperatorNode};
const edgeTypes = {dotted: DottedEdge};
export default function PhaseTwo() {
    const {nodeState, edgeState, hiddenNodes, uploaded, nodeTree} = useSelector((state) => state.phaseTwo);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    let idToBeRemoved = [];


    const dispatch = useDispatch();
    const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);
    const initialNodes = flattenNodes(nodeTree);
    const treeMap = buildTree(initialNodes);
    // for testing purpose
    // const userSelectedNodes = ['C7','C15','C2', 'C13', 'C14','C12','C16','C18','C28','C12','C31','C30','C26','C32','C34','C6','C9'];
    // const userSelectedNodes = ['C13', 'C3', 'C4', 'C14', 'C16', 'C21', 'C27', 'C33', 'C34', 'C5', 'C1', 'C2', 'C8', 'C9', 'C10', 'C28']

    const updateGraph = () => {
        const visibleNodes = initialNodes.filter(node => {
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

                // (C3 OR C8 OR C9 OR C20 OR C24 OR C25 OR C26 OR C29) AND (NOT C28)
                // (true || false || true || false || false || false || false || false) && (!true)
                return eval(replacedExpression);
            }
        });
        const invisibleNodes = initialNodes.filter(node => !visibleNodes.includes(node));
        idToBeRemoved = invisibleNodes.map(item => item.id);
        const allHiddenIds = idToBeRemoved.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
        const hiddenEdges = edgeState.filter(edge => allHiddenIds.includes(edge.source));
        dispatch(hideEdges(hiddenEdges));
        return removeAndFlattenNodes(nodeTree, idToBeRemoved);
    };

    useEffect(() => {
        dispatch(updateNodes(updateGraph()));
        dispatch(setCurrentPhase(2));
        dispatch(setNextPhaseEnabled(true));
    }, []);

    useEffect(() => {
        setNodes(nodeState);
        setEdges(edgeState)
    }, [nodeState, edgeState, uploaded]);

    const handleElementClick = (event, element) => {
            if (!element.data.type) {
                const checkNodes = findNodeById(hiddenNodes, element.id);
                if (checkNodes) {
                    const newNodes = [...nodeState, ...checkNodes.children];
                    dispatch(updateNodes(newNodes));
                    dispatch(addEdges(checkNodes.children.length > 0 ? checkNodes.children.filter(c=>!c.data.isHidden).map(child=>child.id) : checkNodes.id));
                    dispatch(setHiddenNodes(hiddenNodes.filter(node => node.id !== element.id)));
                } else {
                    const ids = getAllChildrenIds(searchNode(treeMap, element.id));
                    let tacticNodes = getTacticNodes(ids);
                    const needNodes = ids.filter(id => !tacticNodes.includes(id));
                    const newNodes = nodeState.filter(node => !needNodes.includes(node.id));
                    dispatch(updateNodes(newNodes));
                    dispatch(filterEdges({
                        clickedNode: element.id,
                        needNodes: needNodes,
                        tacticNodes: tacticNodes,
                    }));
                    dispatch(setHiddenNodes(
                        [...hiddenNodes,
                            {
                                id: element.id,
                                children: nodeState.filter(node => needNodes.includes(node.id))
                            }])
                    );
                }
                dispatch(toggleHidden(element.id))
            }
        }
    ;

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                deleteKeyCode={''}
                fitView
                maxZoom={2}
                minZoom={0.1}
                onNodeClick={handleElementClick}
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

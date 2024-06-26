import React, {useEffect} from "react";
import ReactFlow, {Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";
import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.js";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import DottedEdge from "../../components/DottedEdge";
import {
    addEdges,
    filterEdges,
    hideEdges,
    setHiddenNodes,
    toggleHidden,
    updateNodes
} from "../../redux/slices/phaseTwoSlice.js";
import {flattenNodes} from "../../utils/flattenNodes.js";
import {removeAndFlattenNodes} from "../../utils/removeAndFlattenNodes.js";
import {findNodeById} from "../../utils/findNodeById.js";
import {getAllChildrenIds} from "../../utils/getAllChildrenIds.js";
import {buildTree} from "../../utils/buildTree.js";
import {searchNode} from "../../utils/searchNode.js";
import getTacticNodes from "../../utils/getTacticNodes.js";
import {evalAndRegexConditions} from "../../utils/evalAndRegexConditions.js";


const nodeTypes = {oval: OvalNode, operator: OperatorNode};
const edgeTypes = {dotted: DottedEdge};


export default function PhaseTwo() {
    const {nodeState, edgeState, hiddenNodes, uploaded, nodeTree} = useSelector((state) => state.phaseTwo);
    const {currentPhase} = useSelector((state) => state.phaseStatus);
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
        const visibleNodes = evalAndRegexConditions(initialNodes, userSelectedNodes);
        const invisibleNodes = initialNodes.filter(node => !visibleNodes.includes(node));
        idToBeRemoved = invisibleNodes.map(item => item.id);
        const allHiddenIds = idToBeRemoved.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
        const removedIds = visibleNodes.map(node=>node.id).concat(allHiddenIds);
        const removedEdges = edgeState.filter(edge => !removedIds.includes(edge.source));
        const hiddenEdges = edgeState.filter(edge => allHiddenIds.includes(edge.source));
        dispatch(hideEdges(hiddenEdges.concat(removedEdges)));
        return removeAndFlattenNodes(nodeTree, idToBeRemoved);
    };

    useEffect(() => {
        if(currentPhase < 2) {
            dispatch(updateNodes(updateGraph()));
        }
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
                    // There are some special cases that need to be handled separately
                    if (checkNodes.id === "improve-perceived-relative-advantage" ||
                        checkNodes.id === "improve-perceived-compatibility" ||
                        checkNodes.id === "improve-perceived-usefulness"){
                        dispatch(addEdges(checkNodes.id));
                    } else if (checkNodes.id === "increase-social-influence") {
                        dispatch(addEdges(checkNodes.children.filter(c => !c.data.isHidden).map(child => child.id)));
                        dispatch(addEdges(checkNodes.id));
                    } else {
                        dispatch(addEdges(checkNodes.children.length > 0 ? checkNodes.children.filter(c => !c.data.isHidden).map(child => child.id) : checkNodes.id));
                    }
                    dispatch(setHiddenNodes(hiddenNodes.filter(node => node.id !== element.id)));
                } else {
                    const ids = getAllChildrenIds(searchNode(treeMap, element.id));
                    const tacticNodes = getTacticNodes(ids);
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
        };

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <ReactFlow
                nodes={nodes}
                panOnScroll={true}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                zoomOnDoubleClick={false}
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

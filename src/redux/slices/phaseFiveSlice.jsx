import {initialNodes} from "../../pages/PhaseFive/initial-nodes.jsx";
import {initialEdges} from "../../pages/PhaseFive/initial-edges.jsx";
import {createSlice} from "@reduxjs/toolkit";
import {buildTree} from "../../utils/buildTree.jsx";
import {getAllChildrenIds} from "../../utils/getAllChildrenIds.jsx";
import {searchNode} from "../../utils/searchNode.jsx";
import {flattenNodes} from "../../utils/flattenNodes.jsx";
import {PhaseFiveTreeDS} from "../../data/PhaseFiveTreeDS.js";
const initialState = {
    nodeState: initialNodes,
    originalNodesIds: initialNodes.map(node => node.id),
    edgeState: initialEdges,
    hiddenEdges: [],
    hiddenNodes: [],
    hiddenTactics: [],
    uploaded: 0,
}
const treeMap = buildTree(flattenNodes(PhaseFiveTreeDS))

export const phaseFiveSlice = createSlice({
    name: 'phaseFive',
    initialState,
    reducers: {
        setPhaseFiveNodes: (state, action) => {
            const removedNodeIds = state.originalNodesIds.filter(id => !action.payload.nodes.map(node => node.id).includes(id));
            state.edgeState = state.edgeState.filter(edge => {
                return !removedNodeIds.includes(edge.target)
            })
            const sourceIds = state.edgeState.map(edge => edge.source)
            const targetIds = state.edgeState.map(edge => edge.target)
            state.nodeState = state.nodeState.filter(node => {
                return sourceIds.includes(node.id) || targetIds.includes(node.id)
            })
            state.nodeState.map(node => {
                if(action.payload.selectedTacticNodes.includes(node.data.label)){
                    node.data.isChosen = true;
                }
            })
        },
        removeNegativeConnections: (state, action) => {
            const regex = new RegExp(`^(${action.payload.join('|')})-?\\d*$`);
            const selectedEdges = state.edgeState.filter(edge => regex.test(edge.source));
            let weights = {};
            let parentNodesToRemove = [];
            selectedEdges.forEach(edge => {
                // Add the weight to the corresponding target
                weights[edge.target] = (weights[edge.target] || 0) + edge.data.weight;
            });
            // If the weight is negative, it should be removed
            for (let target in weights) {
                if (weights[target] < 0) {
                    parentNodesToRemove.push(target);
                }
            }
            // Get all child nodes of the parent
            let childNodesToRemove = parentNodesToRemove.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            // Removing all the edges with that have negative impact on the user selected tactic
            state.edgeState = state.edgeState.filter(edge => !parentNodesToRemove.includes(edge.target))
            // const needEdgeConditions = state.edgeState.filter(edge => childNodesToRemove.includes(edge.target) && edge.data && edge.data.label === "Need").map(e=>e.target);

            // filter out needEdgeConditions from child nodes
            // Discuss with Luca to add this feature or not
            // childNodesToRemove = childNodesToRemove.filter(node => !needEdgeConditions.includes(node));

            // can finally change the nodes state now
            state.nodeState =  state.nodeState.filter(node => !childNodesToRemove.includes(node.id) && !parentNodesToRemove.includes(node.id));
        },
        resolveConflicts: (state, action) => {
            const childNodes = action.payload.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            state.nodeState = state.nodeState.filter(node => !childNodes.includes(node.id) && !action.payload.includes(node.id));
        }
    }
});

export const {setPhaseFiveNodes, removeNegativeConnections, resolveConflicts} = phaseFiveSlice.actions;

export default phaseFiveSlice.reducer;


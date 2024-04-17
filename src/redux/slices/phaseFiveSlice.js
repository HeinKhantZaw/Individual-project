import {initialNodes} from "../../pages/PhaseFive/initial-nodes.jsx";
import {initialEdges} from "../../pages/PhaseFive/initial-edges.jsx";
import {createSlice} from "@reduxjs/toolkit";
import {buildTree} from "../../utils/buildTree.js";
import {getAllChildrenIds} from "../../utils/getAllChildrenIds.js";
import {searchNode} from "../../utils/searchNode.js";
import {flattenNodes} from "../../utils/flattenNodes.js";
import {PhaseFiveTreeDS} from "../../data/PhaseFiveTreeDS.js";
import _ from "lodash";
import {getAllParentIds} from "../../utils/getAllParentIds.js";
import {findNodeById} from "../../utils/findNodeById.js";
import {searchNodeInMultipleRoots} from "../../utils/searchNodeInMultipleRoots.js";

const initialState = {
    nodeState: initialNodes,
    originalNodesIds: initialNodes.map(node => node.id),
    edgeState: initialEdges,
    hiddenEdges: [],
    hiddenNodes: [],
    hiddenTactics: [],
    uploaded: 0,
}
const treeMap = buildTree(flattenNodes(PhaseFiveTreeDS));
console.log(treeMap)

export const phaseFiveSlice = createSlice({
    name: 'phaseFive',
    initialState,
    reducers: {
        setPhaseFiveNodes: (state, action) => {
            // console.log(generateJSONTree(initialNodes, initialEdges))
            const removedNodeIds = state.originalNodesIds.filter(id => !action.payload.nodes.map(node => node.id).includes(id));
            let childNodesToRemove = removedNodeIds.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            state.edgeState = state.edgeState.filter(edge => {
                return !removedNodeIds.includes(edge.target) && !childNodesToRemove.includes(edge.target)
            })
            const sourceIds = state.edgeState.map(edge => edge.source)
            const targetIds = state.edgeState.map(edge => edge.target)
            state.nodeState = state.nodeState.filter(node => (sourceIds.includes(node.id) || targetIds.includes(node.id)) && (!removedNodeIds.includes(node.id) && !childNodesToRemove.includes(node.id)));
            state.nodeState.map(node => {
                if(action.payload.selectedTacticNodes.includes(node.data.label)){
                    node.data.isChosen = true;
                }
            })
        },
        removeNegativeConnections: (state, action) => {
            const regex = new RegExp(`^(${action.payload.join('|')})-?\\d*$`);
            const selectedEdges = state.edgeState.filter(edge => regex.test(edge.source) && _.has(edge, "data") && _.has(edge.data, "weight"));
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
            let tacticNodesToRemove = state.edgeState.filter(edge => parentNodesToRemove.includes(edge.target) && _.has(edge.data, "weight")).map(e=>e.source);
            // Removing all the edges with that have negative impact on the user selected tactic
            state.edgeState = state.edgeState.filter(edge => !parentNodesToRemove.includes(edge.target))
            for(let edge of state.edgeState){
                if(tacticNodesToRemove.includes(edge.source)){
                    // if there is a source, remove from tacticNodesToRemove, it should not be removed
                    tacticNodesToRemove = tacticNodesToRemove.filter(node => node !== edge.source);
                }
            }

            // const needEdgeConditions = state.edgeState.filter(edge => childNodesToRemove.includes(edge.target) && edge.data && edge.data.label === "Need").map(e=>e.target);

            // filter out needEdgeConditions from child nodes
            // Discuss with Luca to add this feature or not
            // childNodesToRemove = childNodesToRemove.filter(node => !needEdgeConditions.includes(node));

            // can finally change the nodes state now
            state.nodeState =  state.nodeState.filter(node => !childNodesToRemove.includes(node.id) && !parentNodesToRemove.includes(node.id) && !tacticNodesToRemove.includes(node.id));
            // state.nodeTree =  removeAndFlattenNodes(nodeTree, idToBeRemoved);
        },
        preResolveConflict: (state, action) => {
            state.nodeState = state.nodeState.filter(node => action.payload !== node.id);
            state.edgeState = state.edgeState.filter(edge => action.payload !== edge.source && action.payload !== edge.target);
        },
        resolveConflicts: (state, action) => {
            const childNodes = action.payload.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            if(action.payload.includes("define-virtual-currency")){
                childNodes.push("increase-worth-vagueness-2")
            }
            let tacticNodesToRemove = state.edgeState.filter(edge => action.payload.includes(edge.target) && _.has(edge, "data") && edge.data.label !== "!").map(e=>e.source);
            state.edgeState = state.edgeState.filter(edge => !childNodes.includes(edge.target) && !action.payload.includes(edge.target));
            for(let edge of state.edgeState){
                if(tacticNodesToRemove.includes(edge.source)){
                    // if there is a source, remove from tacticNodesToRemove
                    tacticNodesToRemove = tacticNodesToRemove.filter(node => node !== edge.source);
                }
            }
            state.nodeState = state.nodeState.filter(node => !childNodes.includes(node.id) && !action.payload.includes(node.id) && !tacticNodesToRemove.includes(node.id));
        },
        hideElements: (state, action) => {
            let searchNodeData = searchNode(treeMap, action.payload);
            let ids = getAllChildrenIds(searchNodeData);
            if(searchNodeData === null){
                searchNodeData = searchNodeInMultipleRoots(PhaseFiveTreeDS, action.payload);
                // ids = state.edgeState
            }
            const totalIds = [action.payload, ...ids]
            const parents = getAllParentIds(state.edgeState, totalIds);
            let isHidden = state.nodeState.find(node => node.id === action.payload).data.isHidden;
            if(!isHidden) {
                state.hiddenEdges = [...state.hiddenEdges, state.edgeState.filter(edge => parents.includes(edge.source) && totalIds.includes(edge.target))].flat();
                state.edgeState = state.edgeState.filter(edge => !(parents.includes(edge.source) && totalIds.includes(edge.target)));
                const parentsWithConnection = state.edgeState.filter(edge => parents.includes(edge.source)).map(e => e.source);
                const parentsToBeHidden = parents.filter(parent => !parentsWithConnection.includes(parent));
                state.hiddenNodes = [
                    ...state.hiddenNodes,
                    {
                        id: action.payload,
                        children: state.nodeState.filter(node => ids.includes(node.id) || parentsToBeHidden.includes(node.id)),
                    }
                ]
                state.nodeState = state.nodeState.filter(node => !ids.includes(node.id) && !parentsToBeHidden.includes(node.id));
            } else {
                state.nodeState = [
                    ...state.nodeState,
                    ...state.hiddenNodes.find(node => node.id === action.payload).children
                ]
                const checkNodes = findNodeById(state.hiddenNodes, action.payload);
                const filter = checkNodes.children.filter(c => !c.data.isHidden).map(child => child.id);
                const i = [...filter, action.payload]
                const edgesToBeAdded = state.hiddenEdges.filter(edge => (
                    i.includes(edge.target)
                ))
                state.hiddenEdges = state.hiddenEdges.filter(edge => !i.includes(edge.target));
                state.edgeState = [
                    ...state.edgeState,
                    ...edgesToBeAdded
                ]
                const targetList = edgesToBeAdded.map(edge => edge.source)
                console.log(targetList)
                const check = targetList.every(target => state.nodeState.some(node => node.id === target));
                console.log(check)
                if(!check) {
                    const tacticNodesToBeAdded = state.hiddenNodes.map(node => node.children.filter(target => targetList.includes(target.id))).flat();
                    console.log(JSON.parse(JSON.stringify(tacticNodesToBeAdded)));
                    state.hiddenNodes = state.hiddenNodes.filter((node) => {
                        return !i.includes(node.id)
                    })
                    state.nodeState = [...state.nodeState, ...tacticNodesToBeAdded]
                }
                state.hiddenNodes = state.hiddenNodes.filter(node => node.id !== action.payload);
            }
            state.nodeState.find(node => node.id === action.payload).data.isHidden = !isHidden;
        }
    }
});

export const {setPhaseFiveNodes, removeNegativeConnections, preResolveConflict, resolveConflicts, hideElements} = phaseFiveSlice.actions;

export default phaseFiveSlice.reducer;


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
    isNeedOn: false,
}
const treeMap = buildTree(flattenNodes(PhaseFiveTreeDS));

export const phaseFiveSlice = createSlice({
    name: 'phaseFive',
    initialState,
    reducers: {
        setPhaseFiveNodes: (state, action) => {
            const removedNodeIds = state.originalNodesIds.filter(id => !action.payload.nodes.map(node => node.id).includes(id));
            let childNodesToRemove = removedNodeIds.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            state.edgeState = state.edgeState.filter(edge => {
                return !removedNodeIds.includes(edge.target) && !childNodesToRemove.includes(edge.target)
            })
            const sourceIds = state.edgeState.map(edge => edge.source)
            const targetIds = state.edgeState.map(edge => edge.target)
            state.nodeState = state.nodeState.filter(node => (sourceIds.includes(node.id) || targetIds.includes(node.id)) && (!removedNodeIds.includes(node.id) && !childNodesToRemove.includes(node.id)));
            state.nodeState.map(node => {
                if (action.payload.selectedTacticNodes.includes(node.data.label)) {
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
            let tacticNodesToRemove = state.edgeState.filter(edge => parentNodesToRemove.includes(edge.target) && _.has(edge.data, "weight")).map(e => e.source);
            // Removing all the edges with that have negative impact on the user selected tactic
            state.edgeState = state.edgeState.filter(edge => !parentNodesToRemove.includes(edge.target))
            for (let edge of state.edgeState) {
                if (tacticNodesToRemove.includes(edge.source)) {
                    // if there is a source, remove from tacticNodesToRemove, it should not be removed
                    tacticNodesToRemove = tacticNodesToRemove.filter(node => node !== edge.source);
                }
            }
            state.nodeState = state.nodeState.filter(node => !childNodesToRemove.includes(node.id) && !parentNodesToRemove.includes(node.id) && !tacticNodesToRemove.includes(node.id));
        },
        preResolveConflict: (state, action) => {
            state.nodeState = state.nodeState.filter(node => action.payload !== node.id);
            state.edgeState = state.edgeState.filter(edge => action.payload !== edge.source && action.payload !== edge.target);
        },
        resolveConflicts: (state, action) => {
            const childNodes = action.payload.map(id => getAllChildrenIds(searchNode(treeMap, id))).flat();
            if (action.payload.includes("define-virtual-currency")) {
                childNodes.push("increase-worth-vagueness-2")
            }
            let tacticNodesToRemove = state.edgeState.filter(edge => action.payload.includes(edge.target) && _.has(edge, "data") && edge.data.label !== "!").map(e => e.source);
            state.edgeState = state.edgeState.filter(edge => !childNodes.includes(edge.target) && !action.payload.includes(edge.target));
            for (let edge of state.edgeState) {
                if (tacticNodesToRemove.includes(edge.source)) {
                    // if there is a source, remove from tacticNodesToRemove
                    tacticNodesToRemove = tacticNodesToRemove.filter(node => node !== edge.source);
                }
            }
            state.nodeState = state.nodeState.filter(node => !childNodes.includes(node.id) && !action.payload.includes(node.id) && !tacticNodesToRemove.includes(node.id));
        },
        hideElements: (state, action) => {
            let searchNodeData = searchNode(treeMap, action.payload);
            let neededChildren = [];
            let neededParents = [];
            let ids = searchNodeData === null ? getAllChildrenIds(searchNodeInMultipleRoots(PhaseFiveTreeDS, action.payload)) : getAllChildrenIds(searchNodeData);
            let totalIds = [action.payload, ...ids]
            let parents = getAllParentIds(state.edgeState, totalIds);
            let isHidden = state.nodeState.find(node => node.id === action.payload).data.isHidden;
            let isAndRelation = state.edgeState.find(edge => edge.target === action.payload && edge.source.endsWith("-and") && edge.source !== "design-gamification-and")?.source;
            if(totalIds.includes("link-roles-to-path")) {
                isAndRelation = "set-paths-and";
            }
            let siblings = "";
            if (!isHidden) {
                // special case with both dependency
                const doubleNeed = state.edgeState.filter(edge => edge.source !== action.payload && !ids.includes(edge.source) && parents.includes(edge.source) && (_.has(edge, "markerStart") && _.has(edge, "markerEnd"))).map(e => e.source).flat();
                if (doubleNeed.length > 0) {
                    neededChildren = getAllChildrenIds(searchNode(treeMap, doubleNeed[0])).filter(id => id !== action.payload);
                    neededParents = getAllParentIds(state.edgeState, neededChildren);
                    ids = [...ids, ...neededChildren, doubleNeed[0]];
                    totalIds = [action.payload, ...ids];
                }
                parents = [...parents, ...neededParents];
                if (isAndRelation) {
                    siblings = state.edgeState.filter(edge => edge.source === isAndRelation && edge.target !== action.payload).map(e => e.target);
                    for (let sibling of siblings) {
                        const siblingIds = getAllChildrenIds(searchNode(treeMap, sibling));
                        if (doubleNeed.length === 0) {
                            ids = [...ids, ...siblingIds, sibling];
                            totalIds = [...ids];
                        } else {
                            const doesExist = state.nodeState.find(node => node.id === doubleNeed[0]);
                            if (!doesExist) {
                                ids = [...ids, ...siblingIds, sibling];
                                totalIds = [...ids];
                            } else {
                                if (doubleNeed[0] === "assign-badges" || doubleNeed[0] === "use-badge-icons") {
                                    ids = [...ids, ...siblingIds, sibling];
                                }
                                totalIds = [...ids, ...siblingIds, sibling];
                            }
                        }
                        const newParents = getAllParentIds(state.edgeState, totalIds);
                        parents = [...parents, ...newParents];
                    }

                }
                state.hiddenEdges = [...state.hiddenEdges, state.edgeState.filter(edge => parents.includes(edge.source) && totalIds.includes(edge.target))].flat();
                state.edgeState = state.edgeState.filter(edge => !(parents.includes(edge.source) && totalIds.includes(edge.target)));
                let parentsWithConnection = state.edgeState.filter(edge => parents.includes(edge.source)).map(e => e.source);
                let parentsToBeHidden = parents.filter(parent => !parentsWithConnection.includes(parent) && parent !== action.payload);
                // special case
                if (parentsToBeHidden.includes("support-achievement") && parentsToBeHidden.includes("improve-perceived-status")) {
                    parentsToBeHidden.push("improve-system-loyalty");
                }
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
                const filter = checkNodes.children.length > 0 ? checkNodes.children.filter(c => !c.data.isHidden).map(child => child.id) : [];
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
                const check = targetList.every(target => state.nodeState.some(node => node.id === target));
                if (!check) {
                    const tacticNodesToBeAdded = state.hiddenNodes.map(node => node.children.filter(target => targetList.includes(target.id))).flat();
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

export const {
    setPhaseFiveNodes,
    removeNegativeConnections,
    preResolveConflict,
    resolveConflicts,
    hideElements
} = phaseFiveSlice.actions;

export default phaseFiveSlice.reducer;


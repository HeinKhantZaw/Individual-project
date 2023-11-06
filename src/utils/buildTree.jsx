import {TreeModel} from "../classes/TreeModel.jsx";
import _ from "lodash";

export const buildTree = (nodeList, metaFunc) => {
    /**
     * Assuming node list of structure
     *  {
     *      "id": string,
     *      "parentId": string,
     *      "taskName": string,         // TODO: Generalize.
     *
     *  }
     *
     *  metaFunc - a method which is customizable and can attach meta properties to the node.
     * defaulting it to
     */
        // Mapping for TaskID -> Index in response Array.
        // For fast lookup of details of each ID.

    const idMapping = nodeList.reduce((acc, el, i) => {
            acc[el.id] = i;
            return acc;
        }, {});

    let idMapMaps = {}

    // Mapping for ParentID -> ListOfChildrenIDs - O(N)
    nodeList.forEach(task => {
        if (!(task.parentId in idMapMaps)) {
            idMapMaps[task.parentId] = {}
        }
        idMapMaps[task.parentId][task.id] = true;
    });

    // BFS to create the tree - O(N)
    let root = nodeList[idMapping[Object.keys(idMapMaps["null"])[0]]]
    root = new TreeModel(root.id, root.parentId)

    let q = [root];
    while (q.length) {
        let len_q = q.length;
        for (let i = 0; i < len_q; i++) {
            let curr = q.shift();
            if (curr.key in idMapMaps) {
                _.forEach(Object.keys(idMapMaps[curr.key]), child => {
                    let thisTreeModel = new TreeModel(
                        nodeList[idMapping[child]].id,
                        nodeList[idMapping[child]].parentId);
                    curr.addChildren(thisTreeModel);
                    q.push(thisTreeModel);
                });
            }
        }
    }
    return root;
}

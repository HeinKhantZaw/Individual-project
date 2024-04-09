import {searchNode} from "../utils/searchNode.js";
import {buildTree} from "../utils/buildTree.js";

describe("searchNode", () => {
    it("should return null if root is falsy", () => {
        const result = searchNode(null, "key");
        expect(result).toBeNull();
    });

    it("should return null if root does not have a key property", () => {
        const result = searchNode({}, "key");
        expect(result).toBeNull();
    });
    it("should return the node if the root has a key property", () => {
        const nodeList = [
            { id: 1, parentId: null },
            { id: 2, parentId: 1 },
            { id: 3, parentId: 1 },
            { id: 4, parentId: 2 },
            { id: 5, parentId: 2 },
            { id: 6, parentId: 3 },
        ];

        const treeMap = buildTree(nodeList)
        const result = searchNode(treeMap, 6);
        expect(result).toEqual({"children": [], "key": 6, "parentId": 3});
    });
});

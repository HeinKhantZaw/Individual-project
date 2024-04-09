import {buildTree} from "../utils/buildTree.js";
import {TreeModel} from "../classes/TreeModel.js";

describe("Build Tree with Parent-Child Relationships", () => {
    it("should build a tree from a list of nodes with parent-child relationships", () => {
        const nodeList = [
            { id: 1, parentId: null },
            { id: 2, parentId: 1 },
            { id: 3, parentId: 1 },
            { id: 4, parentId: 2 },
            { id: 5, parentId: 2 },
            { id: 6, parentId: 3 },
        ];

        const result = buildTree(nodeList);

        expect(result).toBeInstanceOf(TreeModel);
        expect(result.key).toBe(1);
        expect(result.parentId).toBeNull();
        expect(result.children.length).toBe(2);
        expect(result.children[0].key).toBe(2);
        expect(result.children[0].parentId).toBe(1);
        expect(result.children[0].children.length).toBe(2);
        expect(result.children[0].children[0].key).toBe(4);
        expect(result.children[0].children[0].parentId).toBe(2);
        expect(result.children[0].children[1].key).toBe(5);
        expect(result.children[0].children[1].parentId).toBe(2);
        expect(result.children[1].key).toBe(3);
        expect(result.children[1].parentId).toBe(1);
        expect(result.children[1].children.length).toBe(1);
        expect(result.children[1].children[0].key).toBe(6);
        expect(result.children[1].children[0].parentId).toBe(3);
    });
});

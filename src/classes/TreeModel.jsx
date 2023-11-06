export class TreeModel {
    constructor(key, parentId) {
        this.key = key;
        this.parentId = parentId;
        this.children = [];
    }
    get isLeaf() {
        return this.children.length === 0;
    }
    addChildren(child) {
        if (!this.children) {
            this.children = [];
        }
        this.children.push(child);
    }
}

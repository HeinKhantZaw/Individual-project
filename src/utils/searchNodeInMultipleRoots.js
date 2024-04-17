export const searchNodeInMultipleRoots = (roots, key) => {
    for (let root of roots) {
        if (root.id === key) {
            return root;
        }
    }
    return null;
}

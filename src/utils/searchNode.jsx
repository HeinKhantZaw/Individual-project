export const searchNode = (root, key) => {

    if (!root || !("key" in root)) {
        return null;
    }
    // We search using Level-Order(BFS). Complexity worst Case - O(N)
    let q = [root];

    while (q.length) {
        // nodes at this height.
        let len_q = q.length;
        for (let i = 0; i < len_q; i++) {
            let el = q.shift();

            if (el.key === key) return el;

            if (el.children) {
                el.children.forEach(child => {
                    q.push(child);
                });
            }
        }
    }
    return null
}

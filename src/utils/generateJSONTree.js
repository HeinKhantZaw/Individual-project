// Used during development, not included in the production
import _ from "lodash";

export function generateJSONTree(initialNodes, initialEdges) {
    const tree = {};

    // Create a map to store nodes by their ID for easy access
    const nodeMap = new Map();
    initialNodes.forEach((node) => {
        nodeMap.set(node.id, node);
    });

    // Initialize the tree with nodes that don't have any parent (no incoming edges)
    initialNodes.forEach((node) => {
        if (!initialEdges.some((edge) => edge.target === node.id)) {
            tree[node.id] = {...node};
        }
    });

    // Recursively build the tree starting from the root nodes
    const buildTree = (parentId, parent) => {
        const children = initialEdges
            .filter((edge) => edge.source === parentId && !(_.has(edge, "markerEnd") && _.has(edge, "markerStart"))).map((edge) => {
                const targetNode = nodeMap.get(edge.target);
                return {
                    ...targetNode,
                    parentId: parentId,
                    children: buildTree(targetNode.id, targetNode),
                };
            });

        return children.length > 0 ? children : null;
    };

    for (const rootId in tree) {
        tree[rootId].children = buildTree(rootId, tree[rootId]);
    }

    return Object.values(tree);
}

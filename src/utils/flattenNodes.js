export function flattenNodes(initialNodes) {
    const resultNodes = [];
    function processNodes(nodes) {
        for (const node of nodes) {
            // Add the node to the result
            resultNodes.push({
                id: node.id,
                type: node.type,
                position: node.position,
                data: node.data,
                draggable: node.draggable,
                conditions: node.conditions,
                parentId: node.parentId || "null",
            });
            // Recursively process the children
            if (node.children) {
                processNodes(node.children);
            }
        }
    }

    processNodes(initialNodes);

    return resultNodes;
}

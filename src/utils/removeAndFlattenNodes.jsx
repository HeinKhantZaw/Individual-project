export function removeAndFlattenNodes(initialNodes, nodesToRemove) {
    const resultNodes = [];
    function processNodes(nodes) {
        for (const node of nodes) {
            if (!nodesToRemove.includes(node.id)) {
                // If the node should not be removed, add it to the result
                resultNodes.push({
                    id: node.id,
                    type: node.type,
                    position: node.position,
                    data: node.data,
                    draggable: node.draggable,
                    hidden: node.hidden || false,
                    parentId: node.parentId,
                });
                // Recursively process the children
                if (node.children) {
                    processNodes(node.children);
                }
            }
        }
    }

    processNodes(initialNodes);

    return resultNodes;
}

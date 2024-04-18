import _ from 'lodash';

export function getAllParentIds(edges, ids) {
    let parentIds = [];
    ids.forEach(id => {
        edges.map(edge => {
            if ((id === edge.target) && (_.has(edge.data, "weight") || edge.data?.label === "Need")) {
                parentIds.push(edge.source);
            }
        });
    })

    return parentIds;
}

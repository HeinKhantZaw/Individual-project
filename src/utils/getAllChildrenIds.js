import _ from 'lodash';

export function getAllChildrenIds(data) {
    const result = [];
    if (_.isNull(data)) return result;
    if (data.children) {
        data.children.forEach(child => {
            if(_.has(child, "key")) {
                result.push(child.key); // Add the child's key (ID) to the result
            } else {
                result.push(child.id); // Add the child's key (ID) to the result
            }
            result.push(...getAllChildrenIds(child)); // Recursively get children IDs
        });
    }
    return result;
}

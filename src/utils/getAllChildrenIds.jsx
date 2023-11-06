export function getAllChildrenIds(data) {
    const result = [];
    if (data.children) {
        data.children.forEach(child => {
            result.push(child.key); // Add the child's key (ID) to the result
            result.push(...getAllChildrenIds(child)); // Recursively get children IDs
        });
    }
    return result;
}

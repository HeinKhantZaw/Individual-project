export function findNodeById(arr, id) {
        for (const element of arr) {
            if (element.id === id) {
                return element;
            }
            if (element.children) {
                const childResult = findNodeById(element.children, id);
                if (childResult) {
                    return childResult;
                }
            }
        }
        return null;
    }

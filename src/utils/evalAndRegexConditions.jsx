export function evalAndRegexConditions(initialNodes, userSelectedNodes) {
    return initialNodes.filter(node => {
        if (!node.conditions) return true;
        else {
            const replacedExpression = node.conditions.replace(/\b\w+\b/g, (match) => {
                if (userSelectedNodes.includes(match)) {
                    return "true";
                } else if (match === "NOT") {
                    return "!";
                } else if (match === "OR") {
                    return "||";
                } else if (match === "AND") {
                    return "&&";
                } else {
                    return "false";
                }
            });

            // (C3 OR C8 OR C9 OR C20 OR C24 OR C25 OR C26 OR C29) AND (NOT C28)
            // (true || false || true || false || false || false || false || false) && (!true)
            return eval(replacedExpression);
        }
    });
}

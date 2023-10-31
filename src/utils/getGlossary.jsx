import {NodeGlossary} from "../data/NodeGlossary.jsx";

export function getGlossary(term) {
    for (const type of NodeGlossary) {
            const definition = type.glossary[term];
            if (definition) {
                return definition;
            }
        }
    return "Term not available.";
}
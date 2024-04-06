import {NodeGlossary} from "../data/NodeGlossary.js";

export function getGlossary(term) {
    const lowerCaseTerm = term.toLowerCase();
    for (const type of NodeGlossary) {
        for (const key in type.glossary) {
            if (key.toLowerCase() === lowerCaseTerm) {
                return type.glossary[key];
            }
        }
    }
    return "Term not available.";
}

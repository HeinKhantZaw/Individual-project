const regex = /.*-(.*)/; // tactic nodes have number value
export default function getTacticNodes(ids) {
    return ids.map((id) => {
        const match = regex.exec(id);
        if ((match && !isNaN(parseInt(match[1]))) || id === "improve-system-advantage-perception-vs-competitor-systems-via-it" || id === "support-social-behavior" || id === "improve-system-perception-via-IT") {
            return id;
        }
        return null;
    })
        .filter(Boolean);
}

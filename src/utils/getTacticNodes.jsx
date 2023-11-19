const regex = /.*-(.*)/; // tactic nodes have number value
export default function getTacticNodes(ids) {
    return ids.map((id) => {
        const match = regex.exec(id);
        if ((match && !isNaN(parseInt(match[1])))) {
            return id;
        }
        return null;
    })
        .filter(Boolean);
}

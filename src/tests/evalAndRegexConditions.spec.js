import {evalAndRegexConditions} from "../utils/evalAndRegexConditions.js";


describe("evalAndRegexConditions", () => {
    it("should return all initial nodes if none of them have conditions", () => {
        const initialNodes = [
            { id: 1, conditions: null },
            { id: 2, conditions: null },
            { id: 3, conditions: null },
        ];
        const userSelectedNodes = [];

        const result = evalAndRegexConditions(initialNodes, userSelectedNodes);

        expect(result).toEqual(initialNodes);
    });
    it("should throw an error if the condition string contains invalid characters", () => {
        const initialNodes = [
            { id: 1, conditions: "C1 && C2 || C3" },
            { id: 2, conditions: "C4 && C5 || C6" },
            { id: 3, conditions: "console.log()" },
        ];
        const userSelectedNodes = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"];

        expect(() => evalAndRegexConditions(initialNodes, userSelectedNodes)).toThrow("Invalid characters in condition");
    });
    it("should eval correctly the conditions and return the nodes that match the conditions", () => {
        const initialNodes = [
            { id: 1, conditions: "C1 && C2 || C3" },
            { id: 2, conditions: "C4 && C5 || C6" },
            { id: 3, conditions: "C7 && C8" },
        ];
        const userSelectedNodes = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];

        const result = evalAndRegexConditions(initialNodes, userSelectedNodes);

        expect(result).toEqual([initialNodes[0], initialNodes[1]]);
    });
});

import {findNodeById} from "../utils/findNodeById.js";

describe("findNodeById", () => {
    it("should return the correct node when the id matches an element in the array", () => {
        const arr = [
            {id: 1, children: [{id: 2}, {id: 3}]},
            {id: 4, children: [{id: 5}, {id: 6}]},
        ];
        const id = 3;

        const result = findNodeById(arr, id);

        expect(result).toEqual({id: 3});
    });

    it("should return null when the input array is empty", () => {
        const arr = [];
        const id = 1;

        const result = findNodeById(arr, id);

        expect(result).toBeNull();
    });
});

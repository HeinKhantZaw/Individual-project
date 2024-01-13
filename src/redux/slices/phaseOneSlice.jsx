import {createSlice} from '@reduxjs/toolkit'
import {PhaseOneKeyValue, PhaseOneSecondaryLogic} from "../../data/PhaseOneKeyValue.jsx";

const initialEdges = [
    // 1st edge
    {id: "e1-2", source: "acceptance-context", target: "user", type: "straight"},
    {id: "e1-3", source: "acceptance-context", target: "acceptance-subject", type: "straight"},
    {id: "e1-4", source: "acceptance-context", target: "acceptance-goal", type: "straight"},
    {id: "e1-5", source: "acceptance-context", target: "acceptance-task", type: "straight"},
    {id: "e1-6", source: "acceptance-context", target: "social-structure", type: "straight"},
    {id: "e1-7", source: "acceptance-context", target: "nature-of-good", type: "straight"},

    // 2nd edge
    {id: "e2-8", source: "user", target: "human", type: "straight"},
    {id: "e2-9", source: "user", target: "player", type: "straight"},
    {id: "e2-10", source: "user", target: "worker", type: "straight"},
    {id: "e2-11", source: "acceptance-subject", target: "subject-awareness", type: "straight"},
    {id: "e2-12", source: "acceptance-subject", target: "acceptance-voluntariness", type: "straight"},
    {id: "e2-13", source: "acceptance-subject", target: "precursor-subject", type: "straight"},
    {id: "e2-14", source: "acceptance-goal", target: "goal-communication", type: "straight"},
    {id: "e2-15", source: "acceptance-goal", target: "goal-participation", type: "straight"},
    {id: "e2-16", source: "acceptance-goal", target: "goal-clarity", type: "straight"},
    {id: "e2-17", source: "acceptance-task", target: "task-variety", type: "straight"},
    {id: "e2-18", source: "acceptance-task", target: "task-specificity", type: "straight"},
    {id: "e2-19", source: "acceptance-task", target: "task-identification", type: "straight"},
    {id: "e2-20", source: "acceptance-task", target: "required-skills", type: "straight"},
    {id: "e2-21", source: "social-structure", target: "social-structure-xor", type: "straight"},
    {
        id: "e2l-22",
        source: "social-structure-xor",
        sourceHandle: "operator_left",
        target: "hierarchy-neutral-xor14",
        type: "straight"
    },
    {
        id: "e2r-23",
        source: "social-structure-xor",
        sourceHandle: "operator_right",
        target: "hierarchy-xor14",
        type: "straight"
    },
    {id: "e2-24", source: "nature-of-good", target: "nature-of-good-xor", type: "straight"},
    {
        id: "e2l-25",
        source: "nature-of-good-xor",
        sourceHandle: "operator_left",
        target: "public-good-non-rival-non-exclusive-xor15",
        type: "straight"
    },
    {
        id: "e2r-26",
        source: "nature-of-good-xor",
        sourceHandle: "operator_right",
        target: "private-good-rival-exclusive-xor15",
        type: "straight"
    },

    // 3rd edge
    {id: "e3-27", source: "human", target: "gender", type: "straight"},
    {id: "e3-28", source: "human", target: "age", type: "straight"},
    {id: "e3-29", source: "player", target: "player-type", type: "straight"},
    {id: "e3-30", source: "worker", target: "employed", type: "straight"},
    {id: "e3-31", source: "subject-awareness", target: "expertise-level", type: "straight"},
    {id: "e3-32", source: "acceptance-voluntariness", target: "mandatory", type: "straight"},
    {id: "e3-33", source: "precursor-subject", target: "existing", type: "straight"},
    {id: "e3-34", source: "goal-communication", target: "communication-level", type: "straight"},
    {id: "e3-35", source: "goal-participation", target: "participation-level", type: "straight"},
    {id: "e3-36", source: "goal-clarity", target: "clarity-level", type: "straight"},
    {id: "e3-37", source: "task-variety", target: "variety-level", type: "straight"},
    {id: "e3-38", source: "task-specificity", target: "specificity-level", type: "straight"},
    {id: "e3-39", source: "task-identification", target: "identification-level", type: "straight"},
    {id: "e3-40", source: "required-skills", target: "skill-kind", type: "straight"},

    // 4th edge
    {id: "e4-41", source: "gender", target: "gender-xor", type: "straight"},
    {id: "e4-42", source: "age", target: "age-xor", type: "straight"},
    {id: "e4-43", source: "player-type", target: "socializer", type: "straight"},
    {id: "e4-44", source: "player-type", target: "achiever", type: "straight"},
    {id: "e4-45", source: "player-type", target: "explorer", type: "straight"},
    {id: "e4-46", source: "player-type", target: "killer", type: "straight"},
    {id: "e4-47", source: "employed", target: "employed-xor", type: "straight"},
    {id: "e4-48", source: "expertise-level", target: "expertise-level-xor", type: "straight"},
    {id: "e4-49", source: "mandatory", target: "mandatory-xor", type: "straight"},
    {id: "e4-50", source: "existing", target: "existing-xor", type: "straight"},
    {id: "e4-51", source: "communication-level", target: "communication-xor", type: "straight"},
    {id: "e4-52", source: "participation-level", target: "participation-xor", type: "straight"},
    {id: "e4-53", source: "clarity-level", target: "clarity-xor", type: "straight"},
    {id: "e4-54", source: "variety-level", target: "variety-xor", type: "straight"},
    {id: "e4-55", source: "specificity-level", target: "specificity-xor", type: "straight"},
    {id: "e4-56", source: "identification-level", target: "identification-xor", type: "straight"},
    {id: "e4-57", source: "skill-kind", target: "skill-kind-xor", type: "straight"},
    {id: "e4l-58", source: "gender-xor", sourceHandle: "operator_left", target: "female-xor1", type: "straight"},
    {id: "e4r-59", source: "gender-xor", sourceHandle: "operator_right", target: "male-xor1", type: "straight"},
    {id: "e4l-60", source: "age-xor", sourceHandle: "operator_left", target: "young-xor2", type: "straight"},
    {id: "e4r-61", source: "age-xor", sourceHandle: "operator_right", target: "senior-xor2", type: "straight"},
    {
        id: "e4l-62",
        source: "employed-xor",
        sourceHandle: "operator_left",
        target: "employed-yes-xor3",
        type: "straight"
    },
    {
        id: "e4r-63",
        source: "employed-xor",
        sourceHandle: "operator_right",
        target: "employed-no-xor3",
        type: "straight"
    },
    {
        id: "e4l-64",
        source: "expertise-level-xor",
        sourceHandle: "operator_left",
        target: "junior-xor4",
        type: "straight"
    },
    {
        id: "e4r-65",
        source: "expertise-level-xor",
        sourceHandle: "operator_right",
        target: "senior-xor4",
        type: "straight"
    },
    {
        id: "e4l-66",
        source: "mandatory-xor",
        sourceHandle: "operator_left",
        target: "mandatory-yes-xor5",
        type: "straight"
    },
    {
        id: "e4r-67",
        source: "mandatory-xor",
        sourceHandle: "operator_right",
        target: "mandatory-no-xor5",
        type: "straight"
    },
    {
        id: "e4l-68",
        source: "existing-xor",
        sourceHandle: "operator_left",
        target: "existing-yes-xor6",
        type: "straight"
    },
    {
        id: "e4r-69",
        source: "existing-xor",
        sourceHandle: "operator_right",
        target: "existing-no-xor6",
        type: "straight"
    },
    {
        id: "e4l-70",
        source: "communication-xor",
        sourceHandle: "operator_left",
        target: "communication-low-xor7",
        type: "straight"
    },
    {
        id: "e4m-71",
        source: "communication-xor",
        sourceHandle: "operator_bottom",
        target: "communication-medium-xor7",
        type: "straight"
    },
    {
        id: "e4r-72",
        source: "communication-xor",
        sourceHandle: "operator_right",
        target: "communication-high-xor7",
        type: "straight"
    },
    {
        id: "e4l-73",
        source: "participation-xor",
        sourceHandle: "operator_left",
        target: "participation-low-xor8",
        type: "straight"
    },
    {
        id: "e4m-74",
        source: "participation-xor",
        sourceHandle: "operator_bottom",
        target: "participation-medium-xor8",
        type: "straight"
    },
    {
        id: "e4r-75",
        source: "participation-xor",
        sourceHandle: "operator_right",
        target: "participation-high-xor8",
        type: "straight"
    },
    {id: "e4l-76", source: "clarity-xor", sourceHandle: "operator_left", target: "clarity-low-xor9", type: "straight"},
    {
        id: "e4m-77",
        source: "clarity-xor",
        sourceHandle: "operator_bottom",
        target: "clarity-medium-xor9",
        type: "straight"
    },
    {
        id: "e4r-78",
        source: "clarity-xor",
        sourceHandle: "operator_right",
        target: "clarity-high-xor9",
        type: "straight"
    },
    {id: "e4l-79", source: "variety-xor", sourceHandle: "operator_left", target: "variety-low-xor10", type: "straight"},
    {
        id: "e4m-80",
        source: "variety-xor",
        sourceHandle: "operator_bottom",
        target: "variety-medium-xor10",
        type: "straight"
    },
    {
        id: "e4r-81",
        source: "variety-xor",
        sourceHandle: "operator_right",
        target: "variety-high-xor10",
        type: "straight"
    },
    {
        id: "e4l-82",
        source: "specificity-xor",
        sourceHandle: "operator_left",
        target: "specificity-low-xor11",
        type: "straight"
    },
    {
        id: "e4m-83",
        source: "specificity-xor",
        sourceHandle: "operator_bottom",
        target: "specificity-medium-xor11",
        type: "straight"
    },
    {
        id: "e4r-84",
        source: "specificity-xor",
        sourceHandle: "operator_right",
        target: "specificity-high-xor11",
        type: "straight"
    },
    {
        id: "e4l-85",
        source: "identification-xor",
        sourceHandle: "operator_left",
        target: "identification-low-xor12",
        type: "straight"
    },
    {
        id: "e4r-86",
        source: "identification-xor",
        sourceHandle: "operator_right",
        target: "identification-high-xor12",
        type: "straight"
    },
    {
        id: "e4l-87",
        source: "skill-kind-xor",
        sourceHandle: "operator_left",
        target: "trivial-common-xor13",
        type: "straight"
    },
    {
        id: "e4r-88",
        source: "skill-kind-xor",
        sourceHandle: "operator_right",
        target: "highly-specific-xor13",
        type: "straight"
    }
];
const initialState = {
    edgeState: initialEdges,
    resultName: "",
    selectedNodes: [],
    uploaded: 0,
}

export const phaseOneSlice = createSlice({
    name: 'phaseOne',
    initialState,
    reducers: {
        connectEdge: (state, action) => {
            state.edgeState = action.payload
            state.selectedNodes = [] // reset selected nodes
            const result = state.edgeState.slice(87)
            for (const edge of result) {
                PhaseOneKeyValue[edge.source] && state.selectedNodes.push(PhaseOneKeyValue[edge.source]);
            }
            for (const logic of PhaseOneSecondaryLogic) {
                const {requiredNodes, resultNode} = logic;
                if (resultNode && requiredNodes.every(node => state.selectedNodes.includes(node))) {
                    state.selectedNodes.push(resultNode);
                }
            }
        },
        updateResultName: (state, action) => {
            state.resultName = action.payload
        },
        setPhaseOneState: (state, action) => {
            state.edgeState = action.payload.edgeState
            state.resultName = action.payload.resultName
            state.selectedNodes = action.payload.selectedNodes
            state.uploaded++;
        }
    },
})

export const {connectEdge, updateResultName, setPhaseOneState} = phaseOneSlice.actions

export default phaseOneSlice.reducer

import React, {useCallback} from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge, ConnectionLineType,
} from "reactflow";

import "reactflow/dist/style.css";
import MainLayout from "../../components/Layout/MainLayout.jsx";
import CircleNode from "../../components/Shapes/CircleNode.jsx";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";

let initialNodes = [
    {
        id: "acceptance-context",
        type: "circle",
        position: {x: 0, y: 0},
        data: {label: "Acceptance Context", top: "no"},
        draggable: false
    },

    // 2nd layer
    {
        id: "user",
        type: "circle",
        position: {x: -1000, y: 200},
        data: {label: "User", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-subject",
        type: "circle",
        position: {x: -400, y: 200},
        data: {label: "Acceptance Subject", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-goal",
        type: "circle",
        position: {x: 0, y: 200},
        data: {label: "Acceptance Goal", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-task",
        type: "circle",
        position: {x: 400, y: 200},
        data: {label: "Acceptance Task", background: "black"},
        draggable: false
    },
    {
        id: "social-structure",
        type: "circle",
        position: {x: 700, y: 200},
        data: {label: "Social Structure", background: "black"},
        draggable: false
    },
    {
        id: "nature-of-good",
        type: "circle",
        position: {x: 1000, y: 200},
        data: {label: "Nature of good being produced", background: "black"},
        draggable: false
    },

    // 3rd layer
    {
        id: "human",
        type: "circle",
        position: {x: -1300, y: 500},
        data: {label: "Human"},
        draggable: false
    },
    {
        id: "player",
        type: "circle",
        position: {x: -1000, y: 500},
        data: {label: "Player"},
        draggable: false
    },
    {
        id: "worker",
        type: "circle",
        position: {x: -700, y: 500},
        data: {label: "Worker"},
        draggable: false
    },
    {
        id: "subject-awareness",
        type: "circle",
        position: {x: -400, y: 500},
        data: {label: "Subject Awareness"},
        draggable: false
    },
    {
        id: "acceptance-voluntariness",
        type: "circle",
        position: {x: -200, y: 500},
        data: {label: "Subject Voluntariness"},
        draggable: false
    },
    {
        id: "precursor-subject",
        type: "circle",
        position: {x: 0, y: 500},
        data: {label: "Precursor Subject"},
        draggable: false
    },
    {
        id: "goal-communication",
        type: "circle",
        position: {x: 200, y: 500},
        data: {label: "Goal Communication"},
        draggable: false
    },
    {
        id: "goal-participation",
        type: "circle",
        position: {x: 400, y: 500},
        data: {label: "Goal participation(in defining the goal)", size: 130},
        draggable: false
    },
    {
        id: "goal-clarity",
        type: "circle",
        position: {x: 600, y: 500},
        data: {label: "Goal Clarity"},
        draggable: false
    },
    {
        id: "task-variety",
        type: "circle",
        position: {x: 800, y: 500},
        data: {label: "Task Variety"},
        draggable: false
    },
    {
        id: "task-specificity",
        type: "circle",
        position: {x: 1000, y: 500},
        data: {label: "Task Specificity"},
        draggable: false
    },
    {
        id: "task-identification",
        type: "circle",
        position: {x: 1200, y: 500},
        data: {label: "Task Identification"},
        draggable: false
    },
    {
        id: "required-skills",
        type: "circle",
        position: {x: 1400, y: 500},
        data: {label: "Required Skills"},
        draggable: false
    },
    {
        id: "social-structure-xor",
        type: "operator",
        position: {x: 1600, y: 400},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "hierarchy-neutral",
        type: "circle",
        position: {x: 1600, y: 500},
        data: {label: "Hierarchy-Neutral"},
        draggable: false
    },
    {
        id: "hierarchical",
        type: "circle",
        position: {x: 1800, y: 500},
        data: {label: "Hierarchical"},
        draggable: false
    },
    {
        id: "nature-of-good-xor",
        type: "operator",
        position: {x: 2000, y: 400},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "public-good-non-rival-non-exclusive",
        type: "circle",
        position: {x: 2000, y: 500},
        data: {label: "Public Good(Non Rival, Non Exclusive)", size: 140},
        draggable: false
    },
    {
        id: "private-good-rival-exclusive",
        type: "circle",
        position: {x: 2200, y: 500},
        data: {label: "Private Good(Rival, Exclusive)"},
        draggable: false
    },

    // 3rd layer
    {
        id: "gender",
        type: "circle",
        position: {x: -1500, y: 700},
        data: {label: "Gender", background: "black"},
        draggable: false
    },
    {
        id: "age",
        type: "circle",
        position: {x: -1300, y: 700},
        data: {label: "Age", background: "black"},
        draggable: false
    },
    {
        id: "player-type",
        type: "circle",
        position: {x: -1100, y: 700},
        data: {label: "Player Type", background: "black"},
        draggable: false
    },
    {
        id: "employed",
        type: "circle",
        position: {x: -900, y: 700},
        data: {label: "Employed", background: "black"},
        draggable: false
    },
    {
        id: "expertise-level",
        type: "circle",
        position: {x: -700, y: 700},
        data: {label: "Expertise Level", background: "black"},
        draggable: false
    },
    {
        id: "mandatory",
        type: "circle",
        position: {x: -500, y: 700},
        data: {label: "Mandatory", background: "black"},
        draggable: false
    },
    {
        id: "existing",
        type: "circle",
        position: {x: -300, y: 700},
        data: {label: "Existing", background: "black"},
        draggable: false
    },
    {
        id: "communication-level",
        type: "circle",
        position: {x: -100, y: 700},
        data: {label: "Communication Level", background: "black"},
        draggable: false
    },
    {
        id: "participation-level",
        type: "circle",
        position: {x: 100, y: 700},
        data: {label: "Participation Level", background: "black"},
        draggable: false
    },
    {
        id: "clarity-level",
        type: "circle",
        position: {x: 300, y: 700},
        data: {label: "Clarity Level", background: "black"},
        draggable: false
    },
    {
        id: "variety-level",
        type: "circle",
        position: {x: 500, y: 700},
        data: {label: "Variety Level", background: "black"},
        draggable: false
    },
    {
        id: "specificity-level",
        type: "circle",
        position: {x: 700, y: 700},
        data: {label: "Specificity Level", background: "black"},
        draggable: false
    },
    {
        id: "identification-level",
        type: "circle",
        position: {x: 900, y: 700},
        data: {label: "Identification Level", background: "black"},
        draggable: false
    },
    {
        id: "skill-kind",
        type: "circle",
        position: {x: 1100, y: 700},
        data: {label: "Skill Kind", background: "black"},
        draggable: false
    },

    // 4th layer
    {
        id: "gender-xor",
        type: "operator",
        position: {x: -1700, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "male",
        type: "circle",
        position: {x: -1800, y: 1000},
        data: {label: "Male"},
        draggable: false
    },
    {
        id: "female",
        type: "circle",
        position: {x: -1600, y: 1000},
        data: {label: "Female"},
        draggable: false
    },
    {
        id: "age-xor",
        type: "operator",
        position: {x: -1300, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "young",
        type: "circle",
        position: {x: -1400, y: 1000},
        data: {label: "Young"},
        draggable: false
    },
    {
        id: "senior-0",
        type: "circle",
        position: {x: -1200, y: 1000},
        data: {label: "Senior"},
        draggable: false
    },
    {
        id: "socializer",
        type: "circle",
        position: {x: -1000, y: 1000},
        data: {label: "Socializer"},
        draggable: false
    },
    {
        id: "achiever",
        type: "circle",
        position: {x: -800, y: 1000},
        data: {label: "Achiever"},
        draggable: false
    },
    {
        id: "explorer",
        type: "circle",
        position: {x: -600, y: 1000},
        data: {label: "Explorer"},
        draggable: false
    },
    {
        id: "killer",
        type: "circle",
        position: {x: -400, y: 1000},
        data: {label: "Killer"},
        draggable: false
    },
    {
        id: "employed-xor",
        type: "operator",
        position: {x: -100, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "employed-yes",
        type: "circle",
        position: {x: -200, y: 1000},
        data: {label: "Yes"},
        draggable: false
    },
    {
        id: "employed-no",
        type: "circle",
        position: {x: 0, y: 1000},
        data: {label: "No"},
        draggable: false
    },
    {
        id: "expertise-level-xor",
        type: "operator",
        position: {x: 300, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "junior",
        type: "circle",
        position: {x: 200, y: 1000},
        data: {label: "Junior"},
        draggable: false
    },
    {
        id: "senior",
        type: "circle",
        position: {x: 400, y: 1000},
        data: {label: "Senior"},
        draggable: false
    },
    {
        id: "mandatory-xor",
        type: "operator",
        position: {x: 700, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "mandatory-yes",
        type: "circle",
        position: {x: 600, y: 1000},
        data: {label: "Yes"},
        draggable: false
    },
    {
        id: "mandatory-no",
        type: "circle",
        position: {x: 800, y: 1000},
        data: {label: "No"},
        draggable: false
    },
    {
        id: "existing-xor",
        type: "operator",
        position: {x: 1100, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "existing-yes",
        type: "circle",
        position: {x: 1000, y: 1000},
        data: {label: "Yes"},
        draggable: false
    },
    {
        id: "existing-no",
        type: "circle",
        position: {x: 1200, y: 1000},
        data: {label: "No"},
        draggable: false
    },
    {
        id: "communication-xor",
        type: "operator",
        position: {x: 1600, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "communication-low",
        type: "circle",
        position: {x: 1400, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "communication-medium",
        type: "circle",
        position: {x: 1600, y: 1000},
        data: {label: "Medium"},
        draggable: false
    },
    {
        id: "communication-high",
        type: "circle",
        position: {x: 1800, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "participation-xor",
        type: "operator",
        position: {x: 2200, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "participation-low",
        type: "circle",
        position: {x: 2000, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "participation-medium",
        type: "circle",
        position: {x: 2200, y: 1000},
        data: {label: "Medium"},
        draggable: false
    },
    {
        id: "participation-high",
        type: "circle",
        position: {x: 2400, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "clarity-xor",
        type: "operator",
        position: {x: 2700, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "clarity-low",
        type: "circle",
        position: {x: 2600, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "clarity-medium",
        type: "circle",
        position: {x: 2700, y: 1000},
        data: {label: "Medium"},
        draggable: false
    },
    {
        id: "clarity-high",
        type: "circle",
        position: {x: 2800, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "variety-xor",
        type: "operator",
        position: {x: 3200, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "variety-low",
        type: "circle",
        position: {x: 3000, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "variety-medium",
        type: "circle",
        position: {x: 3200, y: 1000},
        data: {label: "Medium"},
        draggable: false
    },
    {
        id: "variety-high",
        type: "circle",
        position: {x: 3400, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "specificity-xor",
        type: "operator",
        position: {x: 3800, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "specificity-low",
        type: "circle",
        position: {x: 3600, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "specificity-medium",
        type: "circle",
        position: {x: 3800, y: 1000},
        data: {label: "Medium"},
        draggable: false
    },
    {
        id: "specificity-high",
        type: "circle",
        position: {x: 4000, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "identification-xor",
        type: "operator",
        position: {x: 4400, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "identification-low",
        type: "circle",
        position: {x: 4200, y: 1000},
        data: {label: "Low"},
        draggable: false
    },
    {
        id: "identification-high",
        type: "circle",
        position: {x: 4400, y: 1000},
        data: {label: "High"},
        draggable: false
    },
    {
        id: "skill-kind-xor",
        type: "operator",
        position: {x: 4700, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "trivial-common",
        type: "circle",
        position: {x: 4600, y: 1000},
        data: {label: "Common"},
        draggable: false
    },
    {
        id: "highly-specific",
        type: "circle",
        position: {x: 4800, y: 1000},
        data: {label: "Specific"},
        draggable: false
    }
];
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
        target: "hierarchy-neutral",
        type: "straight"
    },
    {
        id: "e2r-23",
        source: "social-structure-xor",
        sourceHandle: "operator_right",
        target: "hierarchical",
        type: "straight"
    },
    {id: "e2-24", source: "nature-of-good", target: "nature-of-good-xor", type: "straight"},
    {
        id: "e2l-25",
        source: "nature-of-good-xor",
        sourceHandle: "operator_left",
        target: "public-good-non-rival-non-exclusive",
        type: "straight"
    },
    {
        id: "e2r-26",
        source: "nature-of-good-xor",
        sourceHandle: "operator_right",
        target: "private-good-rival-exclusive",
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
    {id: "e4l-58", source: "gender-xor", sourceHandle: "operator_left", target: "male", type: "straight"},
    {id: "e4r-59", source: "gender-xor", sourceHandle: "operator_right", target: "female", type: "straight"},
    {id: "e4l-60", source: "age-xor", sourceHandle: "operator_left", target: "young", type: "straight"},
    {id: "e4r-61", source: "age-xor", sourceHandle: "operator_right", target: "senior-0", type: "straight"},
    {id: "e4l-62", source: "employed-xor", sourceHandle: "operator_left", target: "employed-yes", type: "straight"},
    {id: "e4r-63", source: "employed-xor", sourceHandle: "operator_right", target: "employed-no", type: "straight"},
    {id: "e4l-64", source: "expertise-level-xor", sourceHandle: "operator_left", target: "junior", type: "straight"},
    {id: "e4r-65", source: "expertise-level-xor", sourceHandle: "operator_right", target: "senior", type: "straight"},
    {id: "e4l-66", source: "mandatory-xor", sourceHandle: "operator_left", target: "mandatory-yes", type: "straight"},
    {id: "e4r-67", source: "mandatory-xor", sourceHandle: "operator_right", target: "mandatory-no", type: "straight"},
    {id: "e4l-68", source: "existing-xor", sourceHandle: "operator_left", target: "existing-yes", type: "straight"},
    {id: "e4r-69", source: "existing-xor", sourceHandle: "operator_right", target: "existing-no", type: "straight"},
    {
        id: "e4l-70",
        source: "communication-xor",
        sourceHandle: "operator_left",
        target: "communication-low",
        type: "straight"
    },
    {
        id: "e4m-71",
        source: "communication-xor",
        sourceHandle: "operator_middle",
        target: "communication-medium",
        type: "straight"
    },
    {
        id: "e4r-72",
        source: "communication-xor",
        sourceHandle: "operator_right",
        target: "communication-high",
        type: "straight"
    },
    {
        id: "e4l-73",
        source: "participation-xor",
        sourceHandle: "operator_left",
        target: "participation-low",
        type: "straight"
    },
    {
        id: "e4m-74",
        source: "participation-xor",
        sourceHandle: "operator_middle",
        target: "participation-medium",
        type: "straight"
    },
    {
        id: "e4r-75",
        source: "participation-xor",
        sourceHandle: "operator_right",
        target: "participation-high",
        type: "straight"
    },
    {id: "e4l-76", source: "clarity-xor", sourceHandle: "operator_left", target: "clarity-low", type: "straight"},
    {
        id: "e4m-77",
        source: "clarity-xor",
        sourceHandle: "operator_middle",
        target: "clarity-medium",
        type: "straight"
    },
    {id: "e4r-78", source: "clarity-xor", sourceHandle: "operator_right", target: "clarity-high", type: "straight"},
    {id: "e4l-79", source: "variety-xor", sourceHandle: "operator_left", target: "variety-low", type: "straight"},
    {
        id: "e4m-80",
        source: "variety-xor",
        sourceHandle: "operator_middle",
        target: "variety-medium",
        type: "straight"
    },
    {id: "e4r-81", source: "variety-xor", sourceHandle: "operator_right", target: "variety-high", type: "straight"},
    {
        id: "e4l-82",
        source: "specificity-xor",
        sourceHandle: "operator_left",
        target: "specificity-low",
        type: "straight"
    },
    {
        id: "e4m-83",
        source: "specificity-xor",
        sourceHandle: "operator_middle",
        target: "specificity-medium",
        type: "straight"
    },
    {
        id: "e4r-84",
        source: "specificity-xor",
        sourceHandle: "operator_right",
        target: "specificity-high",
        type: "straight"
    },
    {
        id: "e4l-85",
        source: "identification-xor",
        sourceHandle: "operator_left",
        target: "identification-low",
        type: "straight"
    },
    {
        id: "e4r-86",
        source: "identification-xor",
        sourceHandle: "operator_right",
        target: "identification-high",
        type: "straight"
    },
    {id: "e4l-87", source: "skill-kind-xor", sourceHandle: "operator_left", target: "trivial-common", type: "straight"},
    {
        id: "e4r-88",
        source: "skill-kind-xor",
        sourceHandle: "operator_right",
        target: "highly-specific",
        type: "straight"
    }
];
const nodeTypes = {circle: CircleNode, operator: OperatorNode};

export default function PhaseOne() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <MainLayout>
            <div style={{width: "100vw", height: "93vh"}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    onConnect={onConnect}
                    fitView
                >
                    <Controls/>
                    <MiniMap/>
                    <Background variant="dots" gap={12} size={1}/>
                </ReactFlow>
            </div>
        </MainLayout>
    );
}

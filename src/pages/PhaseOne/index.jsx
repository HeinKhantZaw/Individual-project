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

const initialNodes = [
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
        id: "e2b-22",
        source: "social-structure-xor",
        sourceHandle: "operator_left",
        target: "hierarchy-neutral",
        type: "straight"
    },
    {
        id: "e2-23",
        source: "social-structure-xor",
        sourceHandle: "operator_right",
        target: "hierarchical",
        type: "straight"
    },
    {id: "e2-24", source: "nature-of-good", target: "nature-of-good-xor", type: "straight"},
    {
        id: "e2b-25",
        source: "nature-of-good-xor",
        sourceHandle: "operator_left",
        target: "public-good-non-rival-non-exclusive",
        type: "straight"
    },
    {
        id: "e2-26",
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

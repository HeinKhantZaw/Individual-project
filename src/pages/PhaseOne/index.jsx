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

];

export default function PhaseOne() {
    const nodeTypes = {circle: CircleNode};

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

import React, {useCallback, useEffect} from "react";
import ReactFlow, {addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import CircleNode from "../../components/Shapes/CircleNode.jsx";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import HexagonNode from "../../components/Shapes/HexagonNode.jsx";
import FloatingEdge from "../../components/FloatingEdge/index.jsx";
import ConnectionLine from "../../components/ConnectionLine/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {connectEdge} from "../../redux/slices/phaseOneSlice.jsx";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import {resetPhaseTwo} from "../../redux/slices/phaseTwoSlice.jsx";
import {resetPhaseThree} from "../../redux/slices/phaseThreeSlice.jsx";

let initialNodes = [
    {
        id: "acceptance-context",
        type: "circle",
        position: {x: 2200, y: -200},
        data: {label: "Acceptance Context", top: "no"},
        draggable: false
    },
    // 2nd layer
    {
        id: "user",
        type: "circle",
        position: {x: -700, y: 200},
        data: {label: "User", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-subject",
        type: "circle",
        position: {x: 700, y: 200},
        data: {label: "Acceptance Subject", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-goal",
        type: "circle",
        position: {x: 2200, y: 200},
        data: {label: "Acceptance Goal", background: "black"},
        draggable: false
    },
    {
        id: "acceptance-task",
        type: "circle",
        position: {x: 4250, y: 200},
        data: {label: "Acceptance Task", background: "black"},
        draggable: false
    },
    {
        id: "social-structure",
        type: "circle",
        position: {x: 5200, y: 200},
        data: {label: "Social Structure", background: "black"},
        draggable: false
    },
    {
        id: "nature-of-good",
        type: "circle",
        position: {x: 5595, y: 200},
        data: {label: "Nature of good being produced", background: "black"},
        draggable: false
    },

    // 3rd layer
    {
        id: "human",
        type: "circle",
        position: {x: -1500, y: 500},
        data: {label: "Human"},
        draggable: false
    },
    {
        id: "player",
        type: "circle",
        position: {x: -700, y: 500},
        data: {label: "Player"},
        draggable: false
    },
    {
        id: "worker",
        type: "circle",
        position: {x: -100, y: 500},
        data: {label: "Worker"},
        draggable: false
    },
    {
        id: "subject-awareness",
        type: "circle",
        position: {x: 300, y: 500},
        data: {label: "Subject Awareness"},
        draggable: false
    },
    {
        id: "acceptance-voluntariness",
        type: "circle",
        position: {x: 700, y: 500},
        data: {label: "Subject Voluntariness"},
        draggable: false
    },
    {
        id: "precursor-subject",
        type: "circle",
        position: {x: 1100, y: 500},
        data: {label: "Precursor Subject"},
        draggable: false
    },
    {
        id: "goal-communication",
        type: "circle",
        position: {x: 1600, y: 500},
        data: {label: "Goal Communication"},
        draggable: false
    },
    {
        id: "goal-participation",
        type: "circle",
        position: {x: 2185, y: 500},
        data: {label: "Goal participation(in defining the goal)", size: 130},
        draggable: false
    },
    {
        id: "goal-clarity",
        type: "circle",
        position: {x: 2800, y: 500},
        data: {label: "Goal Clarity"},
        draggable: false
    },
    {
        id: "task-variety",
        type: "circle",
        position: {x: 3400, y: 500},
        data: {label: "Task Variety"},
        draggable: false
    },
    {
        id: "task-specificity",
        type: "circle",
        position: {x: 4000, y: 500},
        data: {label: "Task Specificity"},
        draggable: false
    },
    {
        id: "task-identification",
        type: "circle",
        position: {x: 4500, y: 500},
        data: {label: "Task Identification"},
        draggable: false
    },
    {
        id: "required-skills",
        type: "circle",
        position: {x: 4900, y: 500},
        data: {label: "Required Skills"},
        draggable: false
    },
    {
        id: "social-structure-xor",
        type: "operator",
        position: {x: 5225, y: 400},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "hierarchy-neutral-xor14",
        type: "circle",
        position: {x: 5100, y: 500},
        data: {label: "Hierarchy-Neutral", isConnectable: true},
        draggable: false
    },
    {
        id: "hierarchy-xor14",
        type: "circle",
        position: {x: 5300, y: 500},
        data: {label: "Hierarchical", isConnectable: true},
        draggable: false
    },
    {
        id: "nature-of-good-xor",
        type: "operator",
        position: {x: 5620, y: 400},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "public-good-non-rival-non-exclusive-xor15",
        type: "circle",
        position: {x: 5500, y: 500},
        data: {label: "Public Good(Non Rival, Non Exclusive)", size: 140, isConnectable: true},
        draggable: false
    },
    {
        id: "private-good-rival-exclusive-xor15",
        type: "circle",
        position: {x: 5700, y: 500},
        data: {label: "Private Good(Rival, Exclusive)", isConnectable: true},
        draggable: false
    },

    // 3rd layer
    {
        id: "gender",
        type: "circle",
        position: {x: -1700, y: 700},
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
        position: {x: -700, y: 700},
        data: {label: "Player Type", background: "black"},
        draggable: false
    },
    {
        id: "employed",
        type: "circle",
        position: {x: -100, y: 700},
        data: {label: "Employed", background: "black"},
        draggable: false
    },
    {
        id: "expertise-level",
        type: "circle",
        position: {x: 300, y: 700},
        data: {label: "Expertise Level", background: "black"},
        draggable: false
    },
    {
        id: "mandatory",
        type: "circle",
        position: {x: 700, y: 700},
        data: {label: "Mandatory", background: "black"},
        draggable: false
    },
    {
        id: "existing",
        type: "circle",
        position: {x: 1100, y: 700},
        data: {label: "Existing", background: "black"},
        draggable: false
    },
    {
        id: "communication-level",
        type: "circle",
        position: {x: 1600, y: 700},
        data: {label: "Communication Level", background: "black"},
        draggable: false
    },
    {
        id: "participation-level",
        type: "circle",
        position: {x: 2200, y: 700},
        data: {label: "Participation Level", background: "black"},
        draggable: false
    },
    {
        id: "clarity-level",
        type: "circle",
        position: {x: 2800, y: 700},
        data: {label: "Clarity Level", background: "black"},
        draggable: false
    },
    {
        id: "variety-level",
        type: "circle",
        position: {x: 3400, y: 700},
        data: {label: "Variety Level", background: "black"},
        draggable: false
    },
    {
        id: "specificity-level",
        type: "circle",
        position: {x: 4000, y: 700},
        data: {label: "Specificity Level", background: "black"},
        draggable: false
    },
    {
        id: "identification-level",
        type: "circle",
        position: {x: 4500, y: 700},
        data: {label: "Identification Level", background: "black"},
        draggable: false
    },
    {
        id: "skill-kind",
        type: "circle",
        position: {x: 4900, y: 700},
        data: {label: "Skill Kind", background: "black"},
        draggable: false
    },

    // 4th layer
    {
        id: "gender-xor",
        type: "operator",
        position: {x: -1675, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "female-xor1",
        type: "circle",
        position: {x: -1800, y: 1000},
        data: {label: "Female", isConnectable: true},
        draggable: false
    },
    {
        id: "male-xor1",
        type: "circle",
        position: {x: -1600, y: 1000},
        data: {label: "Male", isConnectable: true},
        draggable: false
    },
    {
        id: "age-xor",
        type: "operator",
        position: {x: -1275, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "young-xor2",
        type: "circle",
        position: {x: -1400, y: 1000},
        data: {label: "Young", isConnectable: true},
        draggable: false
    },
    {
        id: "senior-xor2",
        type: "circle",
        position: {x: -1200, y: 1000},
        data: {label: "Senior", isConnectable: true},
        draggable: false
    },
    {
        id: "socializer",
        type: "circle",
        position: {x: -1000, y: 1000},
        data: {label: "Socializer", isConnectable: true},
        draggable: false
    },
    {
        id: "achiever",
        type: "circle",
        position: {x: -800, y: 1000},
        data: {label: "Achiever", isConnectable: true},
        draggable: false
    },
    {
        id: "explorer",
        type: "circle",
        position: {x: -600, y: 1000},
        data: {label: "Explorer", isConnectable: true},
        draggable: false
    },
    {
        id: "killer",
        type: "circle",
        position: {x: -400, y: 1000},
        data: {label: "Killer", isConnectable: true},
        draggable: false
    },
    {
        id: "employed-xor",
        type: "operator",
        position: {x: -75, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "employed-yes-xor3",
        type: "circle",
        position: {x: -200, y: 1000},
        data: {label: "Yes", isConnectable: true},
        draggable: false
    },
    {
        id: "employed-no-xor3",
        type: "circle",
        position: {x: 0, y: 1000},
        data: {label: "No", isConnectable: true},
        draggable: false
    },
    {
        id: "expertise-level-xor",
        type: "operator",
        position: {x: 325, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "junior-xor4",
        type: "circle",
        position: {x: 200, y: 1000},
        data: {label: "Junior", isConnectable: true},
        draggable: false
    },
    {
        id: "senior-xor4",
        type: "circle",
        position: {x: 400, y: 1000},
        data: {label: "Senior", isConnectable: true},
        draggable: false
    },
    {
        id: "mandatory-xor",
        type: "operator",
        position: {x: 725, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "mandatory-yes-xor5",
        type: "circle",
        position: {x: 600, y: 1000},
        data: {label: "Yes", isConnectable: true},
        draggable: false
    },
    {
        id: "mandatory-no-xor5",
        type: "circle",
        position: {x: 800, y: 1000},
        data: {label: "No", isConnectable: true},
        draggable: false
    },
    {
        id: "existing-xor",
        type: "operator",
        position: {x: 1125, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "existing-yes-xor6",
        type: "circle",
        position: {x: 1000, y: 1000},
        data: {label: "Yes", isConnectable: true},
        draggable: false
    },
    {
        id: "existing-no-xor6",
        type: "circle",
        position: {x: 1200, y: 1000},
        data: {label: "No", isConnectable: true},
        draggable: false
    },
    {
        id: "communication-xor",
        type: "operator",
        position: {x: 1625, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "communication-low-xor7",
        type: "circle",
        position: {x: 1400, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "communication-medium-xor7",
        type: "circle",
        position: {x: 1600, y: 1000},
        data: {label: "Medium", isConnectable: true},
        draggable: false
    },
    {
        id: "communication-high-xor7",
        type: "circle",
        position: {x: 1800, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "participation-xor",
        type: "operator",
        position: {x: 2225, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "participation-low-xor8",
        type: "circle",
        position: {x: 2000, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "participation-medium-xor8",
        type: "circle",
        position: {x: 2200, y: 1000},
        data: {label: "Medium", isConnectable: true},
        draggable: false
    },
    {
        id: "participation-high-xor8",
        type: "circle",
        position: {x: 2400, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "clarity-xor",
        type: "operator",
        position: {x: 2825, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "clarity-low-xor9",
        type: "circle",
        position: {x: 2700, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "clarity-high-xor9",
        type: "circle",
        position: {x: 2900, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "variety-xor",
        type: "operator",
        position: {x: 3425, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "variety-low-xor10",
        type: "circle",
        position: {x: 3200, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "variety-medium-xor10",
        type: "circle",
        position: {x: 3400, y: 1000},
        data: {label: "Medium", isConnectable: true},
        draggable: false
    },
    {
        id: "variety-high-xor10",
        type: "circle",
        position: {x: 3600, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "specificity-xor",
        type: "operator",
        position: {x: 4025, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "specificity-low-xor11",
        type: "circle",
        position: {x: 3800, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "specificity-medium-xor11",
        type: "circle",
        position: {x: 4000, y: 1000},
        data: {label: "Medium", isConnectable: true},
        draggable: false
    },
    {
        id: "specificity-high-xor11",
        type: "circle",
        position: {x: 4200, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "identification-xor",
        type: "operator",
        position: {x: 4525, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "identification-low-xor12",
        type: "circle",
        position: {x: 4400, y: 1000},
        data: {label: "Low", isConnectable: true},
        draggable: false
    },
    {
        id: "identification-high-xor12",
        type: "circle",
        position: {x: 4600, y: 1000},
        data: {label: "High", isConnectable: true},
        draggable: false
    },
    {
        id: "skill-kind-xor",
        type: "operator",
        position: {x: 4925, y: 900},
        data: {label: "XOR"},
        draggable: false
    },
    {
        id: "trivial-common-xor13",
        type: "circle",
        position: {x: 4800, y: 1000},
        data: {label: "Trivial Common", isConnectable: true},
        draggable: false
    },
    {
        id: "highly-specific-xor13",
        type: "circle",
        position: {x: 5000, y: 1000},
        data: {label: "Highly Specific", isConnectable: true},
        draggable: false
    },

    // final layer
    {
        id: "phase-one-result",
        type: "hexagon",
        position: {x: 2125, y: 1500},
        draggable: true,
    },
];
const nodeTypes = {circle: CircleNode, operator: OperatorNode, hexagon: HexagonNode};

export default function PhaseOne() {
    const phaseOneState = useSelector((state) => state.phaseOne);
    const phaseTwoState = useSelector((state) => state.phaseTwo.nodeState);
    const {initialPhase3aTacticNodes, initialPhase3cTacticNodes} = useSelector((state) => state.phaseThree);
    const {edgeState} = phaseOneState;
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgeState);
    const edgeTypes = {floating: FloatingEdge};
    const dispatch = useDispatch()
    const {nextPhaseEnabled, currentPhase} = useSelector((state) => state.phaseStatus);

    useEffect(() => {
        dispatch(setCurrentPhase(1))
        if(phaseTwoState.length > 0) {
            dispatch(resetPhaseTwo())
        }
        if(initialPhase3aTacticNodes.length > 0 || initialPhase3cTacticNodes.length > 0) {
            dispatch(resetPhaseThree())
        }
    }, [currentPhase]);

    useEffect(() => {
        if (edges.length > 102 && !nextPhaseEnabled) {
            dispatch(setNextPhaseEnabled(true))
        }
        dispatch(connectEdge(edges));
    }, [edges]);

    useEffect(() => {
        setEdges(edgeState);
    }, [phaseOneState.uploaded])


    const regexForXor = /xor(\d+)$/;

    const defaultEdgeOptions = {
        style: {strokeWidth: 2, stroke: 'white'},
        type: 'floating',
    };
    const connectionLineStyle = {
        strokeWidth: 3,
        stroke: 'grey',
        strokeDasharray: '5,5',
    };

    const onConnect = useCallback((params) => {
        const {source} = params;
        const xorNode = source.match(regexForXor);

        setEdges((edges) => {
            if (xorNode) {
                edges = edges.filter((edge) => !edge.source.includes(xorNode[0]));
            }
            const updatedEdge = {...params, animated: true};
            return addEdge(updatedEdge, edges);
        });
    }, [setEdges]);


    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onConnect={onConnect}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionLineComponent={ConnectionLine}
                connectionLineStyle={connectionLineStyle}
                deleteKeyCode={''}
                fitView
                maxZoom={1.5}
                minZoom={0.18}
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

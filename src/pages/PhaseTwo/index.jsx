import React, {useCallback, useEffect} from "react";
import ReactFlow, {addEdge, Background, Controls, MarkerType, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch} from "react-redux";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";

let initialNodes = [
    {
        id: "sufficient-acceptance",
        type: "oval",
        position: {x: 2200, y: -200},
        data: {label: "Sufficient_Acceptance", top: "no"},
        draggable: false
    },

    // 2nd layer
    {
        id: "improve-behavioral-intention",
        type: "oval",
        position: {x: -700, y: 200},
        data: {label: "Improve_behavioral_intention"},
        draggable: false
    },
    {
        id: "create-facilitating-conditions",
        type: "oval",
        position: {x: 4250, y: 200},
        data: {label: "Create_Facilitating_Conditions"},
        draggable: false
    },

    // Left 3rd layer
    {
        id: "improve-performance-expectancy",
        type: "oval",
        position: {x: -1500, y: 500},
        data: {label: "Improve_Performance_Expectancy"},
        draggable: false
    },
    {
        id: "reduce-effort-expectancy",
        type: "oval",
        position: {x: 700, y: 500},
        data: {label: "Reduce_Effort_Expectancy"},
        draggable: false
    },
    // Right 3rd layer
    {
        id: "improve-perceive-behavioral-control",
        type: "oval",
        position: {x: 3400, y: 500},
        data: {label: "Improve_Perceive_Behavioral_Control"},
        draggable: false
    },
    {
        id: "increase-assistance",
        type: "oval",
        position: {x: 5100, y: 500},
        data: {label: "Increase_Assistance"},
        draggable: false
    },

    // Left 4th layer
    {
        id: "improve-perceived-relative-advantage",
        type: "oval",
        position: {x: -1700, y: 750},
        data: {label: "Improve_Perceived_Relative_Advantage_VS_Prev_Subj", width: 350, height: 90},
        draggable: false
    },
    {
        id: "increase-outcome-expectations",
        type: "oval",
        position: {x: -700, y: 750},
        data: {label: "Increase_Outcome_Expectations"},
        draggable: false
    },
    {
        id: "improve-perceive-ease-of-use",
        type: "oval",
        position: {x: 300, y: 750},
        data: {label: "Improve_Perceive_Ease_of_Use", width: 250},
        draggable: false
    },
    {
        id: "improve-ease-of-use",
        type: "oval",
        position: {x: 1600, y: 750},
        data: {label: "Improve_Ease_of_Use"},
        draggable: false
    },

    // Right 4th
    {
        id: "improve-perceived-adequacy-on-personal-resources-needed",
        type: "oval",
        position: {x: 2500, y: 750},
        data: {label: "Improve_Perceived_Adequacy_on_Personal_Resources_Needed", width: 400, height: 100},
        draggable: false
    },
    {
        id: "improve-perceived-adequacy-on-personal-knowledge-needed",
        type: "oval",
        position: {x: 3200, y: 750},
        data: {label: "Improve_Perceived_Adequacy_on_Personal_Knowledge_Needed", width: 400, height: 100},
        draggable: false
    },
    {
        id: "improve-perceived-compatibility",
        type: "oval",
        position: {x: 3900, y: 770},
        data: {label: "Improve_Perceived_Compatibility"},
        draggable: false
    },
    /////////////
    {
        id: "charge-a-person-for-assistance",
        type: "oval",
        position: {x: 4400, y: 770},
        data: {label: "Charge_a_Person_for_Assistance"},
        draggable: false
    },
    {
        id: "create-assistance-group",
        type: "oval",
        position: {x: 4900, y: 770},
        data: {label: "Create_Assistance_Group"},
        draggable: false
    },
    {
        id: "create-assistance-systems",
        type: "oval",
        position: {x: 5300, y: 770},
        data: {label: "Create_Assistance_Systems"},
        draggable: false
    },

    // Left 5th Layer
    {
        id: "improve-perceived-speed",
        type: "oval",
        position: {x: -2500, y: 1000},
        data: {label: "Improve_Perceived_Speed_VS_Prev_Subj", width: 280},
        draggable: false
    },
    {
        id: "improve-perceived-performance-quality",
        type: "oval",
        position: {x: -2000, y: 1000},
        data: {label: "Improve_Perceived_Performance_Quality_VS_Prev_Subj", width: 350},
        draggable: false
    },
    {
        id: "improve-perceived-productivity",
        type: "oval",
        position: {x: -1500, y: 1000},
        data: {label: "Improve_Perceived_Productivity_VS_Prev_Subj", width: 290},
        draggable: false
    },
    {
        id: "improve-perceived-effectiveness",
        type: "oval",
        position: {x: -1000, y: 1000},
        data: {label: "Improve_Perceived_Effectiveness_VS_Prev_Subj", width: 340},
        draggable: false
    },
    /////////////////
    {
        id: "save-time-for-interesting-activities",
        type: "oval",
        position: {x: -500, y: 1000},
        data: {label: "Save_Time_for_Interesting_Activities", width: 270},
        draggable: false
    },
    {
        id: "increase-chances-for-improvements",
        type: "oval",
        position: {x: 0, y: 1000},
        data: {label: "Increase_Chances_for_Improvements", width: 290},
        draggable: false
    },
    {
        id: "improve-skills",
        type: "oval",
        position: {x: 500, y: 1000},
        data: {label: "Improve_Skills"},
        draggable: false
    },
    {
        id: "obtain-additional-income",
        type: "oval",
        position: {x: 1000, y: 1000},
        data: {label: "Obtain_Additional_Income"},
        draggable: false
    },
    ////////////////
    {
        id: "improve-perceived-clearness",
        type: "oval",
        position: {x: 1500, y: 1000},
        data: {label: "Improve_Perceived_Clearness", width: 250},
        draggable: false
    },
    {
        id: "improve-perceived-understandability",
        type: "oval",
        position: {x: 2000, y: 1000},
        data: {label: "Improve_Perceived_Understandability", width: 320},
        draggable: false
    },
    {
        id: "improve-perceived-usability",
        type: "oval",
        position: {x: 2500, y: 1000},
        data: {label: "Improve_Perceived_Usability", width: 260},
        draggable: false
    },
    {
        id: "improve-perceived-easy-learning",
        type: "oval",
        position: {x: 3000, y: 1000},
        data: {label: "Improve_Perceived_Easy_Learning", width: 280},
        draggable: false
    },
    ///////////////
    {
        id: "improve-clearness",
        type: "oval",
        position: {x: 3500, y: 1000},
        data: {label: "Improve_Clearness"},
        draggable: false
    },
    {
        id: "improve-understandability",
        type: "oval",
        position: {x: 4000, y: 1000},
        data: {label: "Improve_Understandability"},
        draggable: false
    },
    {
        id: "improve-usability",
        type: "oval",
        position: {x: 4500, y: 1000},
        data: {label: "Improve_Usability"},
        draggable: false
    },
    {
        id: "improved-learning",
        type: "oval",
        position: {x: 5000, y: 1000},
        data: {label: "Improved_Learning"},
        draggable: false
    },

    // Right 5th Layer
    {
        id: "with-systems-involved",
        type: "oval",
        position: {x: 6000, y: 1000},
        data: {label: "With_Systems_Involved"},
        draggable: false
    },
    {
        id: "with-behaviors-involved",
        type: "oval",
        position: {x: 6500, y: 1000},
        data: {label: "With_Behaviors_Involved"},
        draggable: false
    },
    {
        id: "with-personal-commitments",
        type: "oval",
        position: {x: 7000, y: 1000},
        data: {label: "With_Personal_Commitments"},
        draggable: false
    },
    {
        id: "with-personal-style",
        type: "oval",
        position: {x: 7500, y: 1000},
        data: {label: "With_Personal_Style"},
        draggable: false
    },

    // Mid 5th and 6th Layer
    {
        id: "increase-chances-for-improving-social-status",
        type: "oval",
        position: {x: -300, y: 1250},
        data: {label: "Increase_Chances_for_Improving_Social_Status", width: 340},
        draggable: false
    },
    {
        id: "increase-chances-for-a-promotion",
        type: "oval",
        position: {x: 300, y: 1250},
        data: {label: "Increase_Chances_for_a_Promotion", width: 250},
        draggable: false
    },

    // Left 6th layer
    {
        id: "with-personal-style",
        type: "oval",
        position: {x: -2500, y: 1500},
        data: {
            label: "Improve_System_Advantage_Perception_VS_Competitor_Systems_via_IT",
            width: 450,
            height: 100,
            type: "tactic",
            num: "[1]"
        },
        draggable: false
    },
    {
        id: "support-achievement",
        type: "oval",
        position: {x: 0, y: 1500},
        data: {label: "Support_Achievement", type: "tactic", num: "[4]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-3",
        type: "oval",
        position: {x: 1000, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "improve-system-awareness-2",
        type: "oval",
        position: {x: 1500, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[2]"},
        draggable: false
    },
    {
        id: "improve-system-perception-via-it-3",
        type: "oval",
        position: {x: 2800, y: 1500},
        data: {label: "Improve_System_Perception_via-IT", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "improve-minor-assistance-it",
        type: "oval",
        position: {x: 4000, y: 1500},
        data: {label: "Improve_Minor_Assistance-IT", type: "tactic", num: "[2]"},
        draggable: false
    },
    {
        id: "improve-system-awareness-3",
        type: "oval",
        position: {x: 4500, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-4",
        type: "oval",
        position: {x: 5000, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[4]"},
        draggable: false
    },

    // Right 6th Layer
    {
        id: "improve-system-awareness-4",
        type: "oval",
        position: {x: 5500, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[4]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-5",
        type: "oval",
        position: {x: 6000, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[5]"},
        draggable: false
    },
    {
        id: "improve-system-perception-via-it-4",
        type: "oval",
        position: {x: 6500, y: 1500},
        data: {label: "Improve_System_Perception_via_IT", type: "tactic", num: "[4]"},
        draggable: false
    },
    {
        id: "promote-collaboration",
        type: "oval",
        position: {x: 7300, y: 1500},
        data: {label: "Promote_Collaboration", type: "tactic", num: "[2]"},
        draggable: false
    },
    {
        id: "improve-minor-assistance",
        type: "oval",
        position: {x: 7800, y: 1500},
        data: {label: "Improve_Minor_Assistance", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "improve-system-awareness-5",
        type: "oval",
        position: {x: 8300, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[5]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-6",
        type: "oval",
        position: {x: 8800, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[6]"},
        draggable: false
    },


    // 7th Layer
    {
        id: "improve-perceived-status",
        type: "oval",
        position: {x: 0, y: 1700},
        data: {label: "Improve_Perceived_Status", type: "tactic", num: "[4]"},
        draggable: false
    },

];
let initialEdges = [
    {
        id: "e1-2",
        source: "sufficient-acceptance",
        target: "improve-behavioral-intention",
        type: "dotted",
        markerStart: {
            type: MarkerType.ArrowClosed,
            width: 30,
            height: 30,
            color: '#fff',
        }
    },
];

const nodeTypes = {oval: OvalNode, operator: OperatorNode};
const edgeTypes = {dotted: DottedEdge};

export default function PhaseTwo() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPhase(2))
        dispatch(setNextPhaseEnabled(true))
    }, []);

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                deleteKeyCode={''}
                fitView
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

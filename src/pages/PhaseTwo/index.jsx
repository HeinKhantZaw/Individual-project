import React, {useEffect} from "react";
import ReactFlow, { Background, Controls, MarkerType, MiniMap, useEdgesState, useNodesState,} from "reactflow";

import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";


const markerConfig = {
    type: MarkerType.ArrowClosed,
    width: 30,
    height: 20,
    color: '#fff',
};
const arrowEdgeStyle = {
    stroke: '#fff',
    strokeWidth: 2,
    pointerEvents: 'none'
};
let initialNodes = [
    {
        id: "sufficient-acceptance",
        type: "oval",
        position: {x: 3800, y: -200},
        data: {label: "Sufficient_Acceptance", top: "no"},
        draggable: false
    },

    // 2nd layer
    {
        id: "improve-behavioral-intention",
        type: "oval",
        position: {x: 250, y: 200},
        data: {label: "Improve_Behavioral_Intention"},
        draggable: false
    },
    {
        id: "create-facilitating-conditions",
        type: "oval",
        position: {x: 8500, y: 200},
        data: {label: "Create_Facilitating_Conditions"},
        draggable: false,
        conditions: [
            {
                node: "C11",
                operator: "OR"
            },
            {
                node: "C24",
                operator: "OR",
            },
            {
                node: "C25",
                operator: "OR",
            },
            {
                node: "C26",
                operator: "OR",
            },
            {
                node: "C29",
                operator: "OR",
            },
            {
                node: "C28",
                operator: "AND NOT",
            },
        ],
    },

    // Left 3rd layer
    {
        id: "improve-performance-expectancy",
        type: "oval",
        position: {x: -1650, y: 500},
        data: {label: "Improve_Performance_Expectancy"},
        draggable: false,
        conditions: [
            {
                node: "C7",
                operator: "OR"
            },
            {
                node: "C6",
                operator: "OR",
            },
            {
                node: "C22",
                operator: "OR",
            },
            {
                node: "C30",
                operator: "OR",
            },
            {
                node: "C32",
                operator: "OR",
            },
            {
                node: "C34",
                operator: "OR",
            },
        ],
    },
    {
        id: "reduce-effort-expectancy",
        type: "oval",
        position: {x: 3075, y: 500},
        data: {label: "Reduce_Effort_Expectancy"},
        draggable: false,
        conditions: [
            {
                node: "C3",
                operator: "OR"
            },
            {
                node: "C8",
                operator: "OR",
            },
            {
                node: "C9",
                operator: "OR",
            },
            {
                node: "C20",
                operator: "OR",
            },
            {
                node: "C24",
                operator: "OR",
            },
            {
                node: "C25",
                operator: "OR",
            },
            {
                node: "C26",
                operator: "OR",
            },
            {
                node: "C29",
                operator: "OR",
            },
            {
                node: "C28",
                operator: "AND NOT",
            },
        ]
    },
    {
        id: "increase-social-influence",
        type: "oval",
        position: {x: 5700, y: 500},
        data: {label: "Increase_Social_Influence", sourceLeft: true, sourceRight: true},
        draggable: false,
        conditions: [
            {
                node: "C3",
                operator: "OR"
            },
            {
                node: "C10",
                operator: "OR",
            },
            {
                node: "C23",
                operator: "OR",
            },
            {
                node: "C30",
                operator: "OR",
            },
            {
                node: "C32",
                operator: "OR",
            },
        ]
    },

    // Right 3rd layer
    {
        id: "improve-perceived-behavioral-control",
        type: "oval",
        position: {x: 7700, y: 500},
        data: {label: "Improve_Perceived_Behavioral_Control"},
        draggable: false
    },
    {
        id: "increase-assistance",
        type: "oval",
        position: {x: 9300, y: 500},
        data: {label: "Increase_Assistance"},
        draggable: false
    },

    // Left 4th layer
    {
        id: "improve-perceived-usefulness",
        type: "oval",
        position: {x: -3000, y: 750},
        data: {label: "Improve_Perceived_Usefulness"},
        draggable: false
    },
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
        position: {x: 250, y: 750},
        data: {label: "Increase_Outcome_Expectations"},
        draggable: false
    },
    {
        id: "improve-perceived-ease-of-use",
        type: "oval",
        position: {x: 2250, y: 750},
        data: {label: "Improve_Perceived_Ease_of_Use", width: 250},
        draggable: false
    },
    {
        id: "improve-ease-of-use",
        type: "oval",
        position: {x: 3900, y: 750},
        data: {label: "Improve_Ease_of_Use"},
        draggable: false
    },
    {
        id: "improve-subjective-norm",
        type: "oval",
        position: {x: 5200, y: 750},
        data: {label: "Improve_Subjective_Norm"},
        draggable: false
    },
    {
        id: "improve-social-factors",
        type: "oval",
        position: {x: 6150, y: 750},
        data: {label: "Improve_Social_Factors"},
        draggable: false
    },

    // Right 4th
    {
        id: "improve-perceived-adequacy-on-personal-resources-needed",
        type: "oval",
        position: {x: 7200, y: 750},
        data: {label: "Improve_Perceived_Adequacy_on_Personal_Resources_Needed", width: 400, height: 100},
        draggable: false
    },
    {
        id: "improve-perceived-adequacy-on-personal-knowledge-needed",
        type: "oval",
        position: {x: 7700, y: 750},
        data: {label: "Improve_Perceived_Adequacy_on_Personal_Knowledge_Needed", width: 400, height: 100},
        draggable: false
    },
    {
        id: "improve-perceived-compatibility",
        type: "oval",
        position: {x: 8200, y: 770},
        data: {label: "Improve_Perceived_Compatibility"},
        draggable: false
    },
    {
        id: "charge-a-person-for-assistance",
        type: "oval",
        position: {x: 9000, y: 770},
        data: {label: "Charge_a_Person_for_Assistance"},
        draggable: false
    },
    {
        id: "create-assistance-group",
        type: "oval",
        position: {x: 9300, y: 770},
        data: {label: "Create_Assistance_Group"},
        draggable: false
    },
    {
        id: "create-assistance-systems",
        type: "oval",
        position: {x: 9600, y: 770},
        data: {label: "Create_Assistance_Systems"},
        draggable: false
    },

    // Left 5th Layer
    {
        id: "improve-perceived-speed",
        type: "oval",
        position: {x: -3500, y: 1000},
        data: {label: "Improve_Perceived_Speed", width: 280},
        draggable: false
    },
    {
        id: "improve-perceived-performance-quality",
        type: "oval",
        position: {x: -3200, y: 1000},
        data: {label: "Improve_Perceived_Performance_Quality", width: 290},
        draggable: false
    },
    {
        id: "improve-perceived-productivity",
        type: "oval",
        position: {x: -2870, y: 1000},
        data: {label: "Improve_Perceived_Productivity", width: 260},
        draggable: false
    },
    {
        id: "improve-perceived-effectiveness",
        type: "oval",
        position: {x: -2600, y: 1000},
        data: {label: "Improve_Perceived_Effectiveness", width: 340},
        draggable: false
    },
    {
        id: "improve-perceived-speed-vs",
        type: "oval",
        position: {x: -2200, y: 1000},
        data: {label: "Improve_Perceived_Speed_VS_Prev_Subj", width: 280},
        draggable: false
    },
    {
        id: "improve-perceived-performance-quality-vs",
        type: "oval",
        position: {x: -1900, y: 1000},
        data: {label: "Improve_Perceived_Performance_Quality_VS_Prev_Subj", width: 350},
        draggable: false
    },
    {
        id: "improve-perceived-productivity-vs",
        type: "oval",
        position: {x: -1500, y: 1000},
        data: {label: "Improve_Perceived_Productivity_VS_Prev_Subj", width: 290},
        draggable: false
    },
    {
        id: "improve-perceived-effectiveness-vs",
        type: "oval",
        position: {x: -1200, y: 1000},
        data: {label: "Improve_Perceived_Effectiveness_VS_Prev_Subj", width: 340},
        draggable: false
    },
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
        data: {label: "Improve_Skills", width: 300},
        draggable: false
    },
    {
        id: "obtain-additional-income",
        type: "oval",
        position: {x: 1000, y: 1000},
        data: {label: "Obtain_Additional_Income"},
        draggable: false
    },
    {
        id: "improve-perceived-clearness",
        type: "oval",
        position: {x: 1700, y: 1000},
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
        position: {x: 2400, y: 1000},
        data: {label: "Improve_Perceived_Usability", width: 260},
        draggable: false
    },
    {
        id: "improve-perceived-easy-learning",
        type: "oval",
        position: {x: 2700, y: 1000},
        data: {label: "Improve_Perceived_Easy_Learning", width: 280},
        draggable: false
    },
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
        position: {x: 3800, y: 1000},
        data: {label: "Improve_Understandability"},
        draggable: false
    },
    {
        id: "improve-usability",
        type: "oval",
        position: {x: 4100, y: 1000},
        data: {label: "Improve_Usability"},
        draggable: false
    },
    {
        id: "improve-learning",
        type: "oval",
        position: {x: 4400, y: 1000},
        data: {label: "Improve_Learning"},
        draggable: false
    },
    {
        id: "increase-influence-of-important-people",
        type: "oval",
        position: {x: 5050, y: 1000},
        data: {label: "Increase_Influence_of_Important_People", width: 300},
        draggable: false
    },
    {
        id: "maximize-impact-of-influencer",
        type: "oval",
        position: {x: 5400, y: 1000},
        data: {label: "Maximize_Impact_of_Influencer"},
        draggable: false
    },
    {
        id: "show-many-people-embrace-the-subject",
        type: "oval",
        position: {x: 5750, y: 1000},
        data: {label: "Show_Many_People_Embrace_the_Subject", width: 300},
        draggable: false
    },
    {
        id: "show-embracing-the-subject-is-socially-pushed",
        type: "oval",
        position: {x: 6100, y: 1000},
        data: {label: "Show_Embracing_the_Subject_is_Socially_Pushed", width: 350},
        draggable: false
    },
    {
        id: "show-embracing-the-subject-is-socially-supported",
        type: "oval",
        position: {x: 6500, y: 1000},
        data: {label: "Show_Embracing_the_Subject_is_Socially_Supported", width: 350, sourceLeft: true},
        draggable: false
    },

    // Right 5th Layer
    {
        id: "with-systems-involved",
        type: "oval",
        position: {x: 8000, y: 1000},
        data: {label: "With_Systems_Involved"},
        draggable: false
    },
    {
        id: "with-behaviors-involved",
        type: "oval",
        position: {x: 8250, y: 1000},
        data: {label: "With_Behaviors_Involved"},
        draggable: false
    },
    {
        id: "with-personal-commitments",
        type: "oval",
        position: {x: 8500, y: 1000},
        data: {label: "With_Personal_Commitments"},
        draggable: false
    },
    {
        id: "with-personal-style",
        type: "oval",
        position: {x: 8800, y: 1000},
        data: {label: "With_Personal_Style"},
        draggable: false
    },

    // Mid 5th and 6th Layer
    {
        id: "increase-chances-for-improving-social-status",
        type: "oval",
        position: {x: -300, y: 1250},
        data: {label: "Increase_Chances_for_Improving_Social_Status", width: 340, sourceLeft: true},
        draggable: false
    },
    {
        id: "increase-chances-for-a-promotion",
        type: "oval",
        position: {x: 300, y: 1250},
        data: {label: "Increase_Chances_for_a_Promotion", width: 250, sourceRight: true},
        draggable: false
    },

    // Left 6th layer
    {
        id: "improve-system-perception-via-IT-2",
        type: "oval",
        position: {x: -3200, y: 1500},
        data: {
            label: "Improve_System_Perception_via_IT",
            width: 450,
            height: 100,
            type: "tactic",
            num: "[2]"
        },
        draggable: false
    },
    {
        id: "improve-system-advantage-perception-vs-competitor-systems-via-it",
        type: "oval",
        position: {x: -1500, y: 1500},
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
        id: "support-achievement-4",
        type: "oval",
        position: {x: 0, y: 1500},
        data: {
            label: "Support_Achievement",
            type: "tactic",
            num: "[4]",
            left: true,
            right: true,
            bottom: true,
            top: "no"
        },
        draggable: false
    },
    {
        id: "support-skill-improvement-3",
        type: "oval",
        position: {x: 700, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "improve-system-awareness-2",
        type: "oval",
        position: {x: 1200, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[2]"},
        draggable: false
    },
    {
        id: "improve-system-perception-via-it-3",
        type: "oval",
        position: {x: 2200, y: 1500},
        data: {label: "Improve_System_Perception_via_IT", type: "tactic", num: "[3]", bottom: true},
        draggable: false
    },
    {
        id: "improve-minor-assistance-2",
        type: "oval",
        position: {x: 3500, y: 1500},
        data: {label: "Improve_Minor_Assistance", type: "tactic", num: "[2]", left: true},
        draggable: false
    },
    {
        id: "improve-system-awareness-3",
        type: "oval",
        position: {x: 4300, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-4",
        type: "oval",
        position: {x: 4600, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[4]"},
        draggable: false
    },
    {
        id: "support-social-behavior",
        type: "oval",
        position: {x: 4900, y: 1500},
        data: {label: "Support_Social_Behavior", type: "tactic", num: "[5]"},
        draggable: false
    },
    {
        id: "promote-collaboration-1",
        type: "oval",
        position: {x: 6350, y: 1500},
        data: {label: "Promote_Collaboration", type: "tactic", num: "[1]"},
        draggable: false
    },
    {
        id: "support-achievement-5",
        type: "oval",
        position: {x: 6700, y: 1500},
        data: {
            label: "Support_Achievement",
            type: "tactic",
            num: "[5]",
        },
        draggable: false
    },

    // Right 6th Layer
    {
        id: "improve-system-awareness-4",
        type: "oval",
        position: {x: 7500, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[4]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-5",
        type: "oval",
        position: {x: 8000, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[5]"},
        draggable: false
    },
    {
        id: "improve-system-perception-via-it-4",
        type: "oval",
        position: {x: 8500, y: 1500},
        data: {label: "Improve_System_Perception_via_IT", type: "tactic", num: "[4]", right: true, bottom: true},
        draggable: false
    },
    {
        id: "promote-collaboration-2",
        type: "oval",
        position: {x: 9300, y: 1500},
        data: {label: "Promote_Collaboration", type: "tactic", num: "[2]"},
        draggable: false
    },
    {
        id: "improve-minor-assistance-3",
        type: "oval",
        position: {x: 9800, y: 1500},
        data: {label: "Improve_Minor_Assistance", type: "tactic", num: "[3]"},
        draggable: false
    },
    {
        id: "improve-system-awareness-5",
        type: "oval",
        position: {x: 10100, y: 1500},
        data: {label: "Improve_System_Awareness", type: "tactic", num: "[5]"},
        draggable: false
    },
    {
        id: "support-skill-improvement-6",
        type: "oval",
        position: {x: 10400, y: 1500},
        data: {label: "Support_Skill_Improvement", type: "tactic", num: "[6]"},
        draggable: false
    },


    // 7th Layer
    {
        id: "improve-perceived-status",
        type: "oval",
        position: {x: 0, y: 1700},
        data: {label: "Improve_Perceived_Status", type: "tactic", num: "[4]", left: true, right: true, top: "no"},
        draggable: false
    },

];
let initialEdges = [
    {
        id: "e1-0",
        source: "sufficient-acceptance",
        target: "improve-behavioral-intention",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e1-1",
        source: "sufficient-acceptance",
        target: "create-facilitating-conditions",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-2",
        source: "improve-behavioral-intention",
        target: "improve-performance-expectancy",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-3",
        source: "improve-behavioral-intention",
        target: "reduce-effort-expectancy",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-3_1",
        source: "improve-behavioral-intention",
        target: "increase-social-influence",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-4",
        source: "create-facilitating-conditions",
        target: "improve-perceived-behavioral-control",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-5",
        source: "create-facilitating-conditions",
        target: "increase-assistance",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-6",
        source: "improve-performance-expectancy",
        target: "improve-perceived-usefulness",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-7",
        source: "improve-performance-expectancy",
        target: "improve-perceived-relative-advantage",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-8",
        source: "improve-performance-expectancy",
        target: "increase-outcome-expectations",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-9",
        source: "reduce-effort-expectancy",
        target: "improve-perceived-ease-of-use",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-10",
        source: "reduce-effort-expectancy",
        target: "improve-ease-of-use",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-10_1",
        source: "increase-social-influence",
        target: "improve-subjective-norm",
        type: "dotted",
        sourceHandle: "oval_bottom",
        markerStart: markerConfig,
    },
    {
        id: "e3-10_2",
        source: "increase-social-influence",
        target: "improve-social-factors",
        sourceHandle: "oval_bottom",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-11",
        source: "improve-perceived-behavioral-control",
        target: "improve-perceived-adequacy-on-personal-resources-needed",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-12",
        source: "improve-perceived-behavioral-control",
        target: "improve-perceived-adequacy-on-personal-knowledge-needed",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-13",
        source: "improve-perceived-behavioral-control",
        target: "improve-perceived-compatibility",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-14",
        source: "increase-assistance",
        target: "charge-a-person-for-assistance",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-15",
        source: "increase-assistance",
        target: "create-assistance-group",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-16",
        source: "increase-assistance",
        target: "create-assistance-systems",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-17",
        source: "improve-perceived-usefulness",
        target: "improve-perceived-speed",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-18",
        source: "improve-perceived-usefulness",
        target: "improve-perceived-performance-quality",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-19",
        source: "improve-perceived-usefulness",
        target: "improve-perceived-productivity",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-20",
        source: "improve-perceived-usefulness",
        target: "improve-perceived-effectiveness",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-21",
        source: "improve-perceived-relative-advantage",
        target: "improve-perceived-speed-vs",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-22",
        source: "improve-perceived-relative-advantage",
        target: "improve-perceived-performance-quality-vs",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-23",
        source: "improve-perceived-relative-advantage",
        target: "improve-perceived-productivity-vs",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-24",
        source: "improve-perceived-relative-advantage",
        target: "improve-perceived-effectiveness-vs",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e4-25",
        source: "increase-outcome-expectations",
        target: "save-time-for-interesting-activities",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-26",
        source: "increase-outcome-expectations",
        target: "increase-chances-for-improvements",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-27",
        source: "increase-outcome-expectations",
        target: "improve-skills",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-28",
        source: "increase-outcome-expectations",
        target: "obtain-additional-income",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-29",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-clearness",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-30",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-understandability",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-31",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-usability",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-32",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-easy-learning",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-33",
        source: "improve-ease-of-use",
        target: "improve-clearness",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-34",
        source: "improve-ease-of-use",
        target: "improve-understandability",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-35",
        source: "improve-ease-of-use",
        target: "improve-usability",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36",
        source: "improve-ease-of-use",
        target: "improve-learning",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_1",
        source: "improve-subjective-norm",
        target: "increase-influence-of-important-people",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_2",
        source: "improve-subjective-norm",
        target: "maximize-impact-of-influencer",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_6",
        source: "improve-social-factors",
        target: "show-many-people-embrace-the-subject",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_8",
        source: "improve-social-factors",
        target: "show-embracing-the-subject-is-socially-pushed",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_10",
        source: "improve-social-factors",
        target: "show-embracing-the-subject-is-socially-supported",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-36_11",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "support-achievement-5",
        sourceHandle: "oval_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e4-36_12",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "support-skill-improvement-5",
        sourceHandle: "oval_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e4-37",
        source: "improve-perceived-compatibility",
        target: "with-systems-involved",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-38",
        source: "improve-perceived-compatibility",
        target: "with-behaviors-involved",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-39",
        source: "improve-perceived-compatibility",
        target: "with-personal-commitments",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-40",
        source: "improve-perceived-compatibility",
        target: "with-personal-style",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e5-41",
        source: "increase-chances-for-improvements",
        target: "increase-chances-for-improving-social-status",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e5-42",
        source: "increase-chances-for-improvements",
        target: "increase-chances-for-a-promotion",
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e6-42",
        source: "improve-perceived-usefulness",
        target: "improve-system-perception-via-IT-2",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-43",
        source: "improve-perceived-relative-advantage",
        target: "improve-system-advantage-perception-vs-competitor-systems-via-it",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-44",
        source: "increase-chances-for-improving-social-status",
        target: "support-achievement-4",
        targetHandle: "oval_left",
        sourceHandle: "oval_bottom",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-45",
        source: "increase-chances-for-a-promotion",
        target: "support-achievement-4",
        targetHandle: "oval_right",
        sourceHandle: "oval_bottom",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-46",
        source: "obtain-additional-income",
        target: "support-achievement-4",
        targetHandle: "oval_target_bottom",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-47",
        source: "improve-skills",
        target: "support-skill-improvement-3",
        targetHandle: "oval_target_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-48",
        source: "obtain-additional-income",
        target: "support-skill-improvement-3",
        targetHandle: "oval_target_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-49",
        source: "improve-skills",
        target: "improve-system-awareness-2",
        targetHandle: "oval_target_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-50",
        source: "obtain-additional-income",
        target: "improve-system-awareness-2",
        targetHandle: "oval_target_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-51",
        source: "improve-perceived-clearness",
        target: "improve-system-perception-via-it-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-52",
        source: "improve-perceived-understandability",
        target: "improve-system-perception-via-it-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-53",
        source: "improve-perceived-usability",
        target: "improve-system-perception-via-it-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-54",
        source: "improve-perceived-easy-learning",
        target: "improve-system-perception-via-it-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-55",
        source: "improve-perceived-clearness",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-56",
        source: "improve-perceived-understandability",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-57",
        source: "improve-perceived-usability",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-58",
        source: "improve-perceived-easy-learning",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-59",
        source: "improve-clearness",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_top",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-60",
        source: "improve-learning",
        target: "improve-system-awareness-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-59_1",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "improve-minor-assistance-2",
        sourceHandle: "oval_source_left",
        targetHandle: "oval_top",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-60_1",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "improve-system-awareness-3",
        sourceHandle: "oval_source_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-60_2",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "improve-system-perception-via-it-3",
        targetHandle: "oval_target_bottom",
        sourceHandle: "oval_bottom",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-61",
        source: "improve-learning",
        target: "support-skill-improvement-4",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-61_1",
        source: "increase-social-influence",
        target: "support-social-behavior",
        type: "step",
        sourceHandle: "oval_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-61_2",
        source: "increase-social-influence",
        target: "promote-collaboration-1",
        sourceHandle: "oval_source_right",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-62",
        source: "improve-perceived-adequacy-on-personal-knowledge-needed",
        target: "improve-system-awareness-4",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-63",
        source: "improve-perceived-adequacy-on-personal-knowledge-needed",
        target: "support-skill-improvement-5",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-64",
        source: "improve-perceived-adequacy-on-personal-resources-needed",
        target: "improve-system-perception-via-it-4",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-65",
        source: "create-assistance-systems",
        target: "improve-system-perception-via-it-4",
        type: "step",
        targetHandle: "oval_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-65_1",
        source: "improve-perceived-adequacy-on-personal-knowledge-needed",
        target: "improve-system-perception-via-it-4",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-65_2",
        source: "improve-perceived-compatibility",
        target: "improve-system-perception-via-it-4",
        type: "step",
        targetHandle: "oval_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-66",
        source: "create-assistance-group",
        target: "promote-collaboration-2",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-67",
        source: "create-assistance-systems",
        target: "improve-minor-assistance-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-68",
        source: "create-assistance-systems",
        target: "improve-system-awareness-5",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-69",
        source: "create-assistance-systems",
        target: "support-skill-improvement-6",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e7-70",
        source: "increase-chances-for-improving-social-status",
        target: "improve-perceived-status",
        targetHandle: "oval_left",
        sourceHandle: "oval_source_left",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e7-71",
        source: "increase-chances-for-a-promotion",
        target: "improve-perceived-status",
        targetHandle: "oval_right",
        sourceHandle: "oval_source_right",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    }
];

const nodeTypes = {oval: OvalNode, operator: OperatorNode};
const edgeTypes = {dotted: DottedEdge};

export default function PhaseTwo() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const dispatch = useDispatch();
    const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);

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
                maxZoom={2}
                minZoom={0.01}
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

import {arrowEdgeStyle} from "../../components/Arrows/ArrowEdge.jsx";
import {markerConfig} from "../../components/Arrows/Marker.jsx";

export const initialNodes = [
    {
        id: "design-gamification",
        type: "gamification",
        position: {x: 2200, y: -200},
        data: {label: "Design_Gamification", top: "no"},
        draggable: false
    },
    // 2nd layer
    {
        id: "design-gamification-and",
        type: "operator",
        position: {x: 2294, y: -50},
        data: {label: "AND"},
        draggable: false
    },

    // gamification to set-roles
    {
        id: "set-roles",
        type: "gamification",
        position: {x: -8500, y: 150},
        data: {label: "Set_Roles"},
        draggable: false
    },

    // set-roles children
    {
        id: "set-single-roles",
        type: "gamification",
        position: {x: -9000, y: 550},
        data: {label: "Set_Single_Roles", num: "(1)"},
        draggable: false
    },

    // set-single-roles + set-team-roles children
    {
        id: "fast-design",
        type: "oval",
        position: {x: -7500, y: 2000},
        data: {
            "isHidden": false,
            "label": "Fast_Design",
            "type": "tactic",
            "num": "(1)",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        },
        draggable: false
    },
    {
        id: "low-cost-design",
        type: "oval",
        position: {x: -7000, y: 2000},
        data: {
            "isHidden": false,
            "label": "Low_Cost_Design",
            "type": "tactic",
            "num": "(1)",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        },
        draggable: false
    },

    // set-roles children
    {
        id: "set-team-roles",
        type: "gamification",
        position: {x: -8000, y: 550},
        data: {label: "Set_Team_Roles", num: "(1)"},
        draggable: false
    },

    // set-team-roles children
    {
        id: "promote-collaboration",
        type: "oval",
        position: {x: -8300, y: 2000},
        data: {
            "isHidden": false,
            "label": "Promote_Collaboration",
            "type": "tactic",
            "num": "(3)",
            "sourceTop": true,
        },
        draggable: false
    },
    {
        id: "set-gamifiable-actions",
        type: "gamification",
        position: {x: -7000, y: 150},
        data: {label: "Set_Gamifiable_Actions", sourceRight: true, num: "(1)"},
        draggable: false
    },
    // set-gamifiable-actions and operator
    {
        id: "set-gamifiable-actions-and",
        type: "operator",
        position: {x: -6870, y: 300},
        data: {label: "AND"},
        draggable: false
    },
    // set-gamifiable-action children
    {
        id: "choose-gamifiable-actions",
        type: "gamification",
        position: {x: -7100, y: 450},
        data: {label: "Choose_Gamifiable_Actions"},
        draggable: false,
    },
    {
        id: "set-kinds",
        type: "gamification",
        position: {x: -6800, y: 450},
        data: {label: "Set_Kinds"},
        draggable: false
    },

    // set-kinds children
    {
        id: "set-as-directly-unlocked",
        type: "gamification",
        position: {x: -6900, y: 650},
        data: {label: "Set_As_Directly_Unlocked", sourceRight: true},
        draggable: false
    },
    {
        id: "set-as-unlockable",
        type: "gamification",
        position: {x: -6500, y: 650},
        data: {label: "Set_As_Unlockable", num: "(1)"},
        draggable: false
    },


    {
        id: "set-experience-points-system",
        type: "gamification",
        position: {x: -5500, y: 150},
        data: {
            label: "Set_Experience_Points_System",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
            num: "(1)"},
        draggable: false,
    },
    {
        id: "select-gamifiable-actions",
        type: "gamification",
        position: {x: -5900, y: 600},
        data: {label: "Select_Gamifiable_Actions"},
        draggable: false
    },
    {
        id: "assign-points-to-gamifiable-actions",
        type: "gamification",
        position: {x: -5500, y: 600},
        data: {label: "Assign_Points_to_Gamifiable_Actions"},
        draggable: false
    },
    // assign-points-to-gamifiable-actions children
    {
        id: "set-same-points-to-each-action",
        type: "gamification",
        position: {x: -5700, y: 850}, // Adjust position as needed
        data: {label: "Set_Same_Points_To_Each_Action", sourceRight: true},
        draggable: false
    },
    {
        id: "define-metric",
        type: "gamification",
        position: {x: -5300, y: 850}, // Adjust position as needed
        data: {label: "Define_Metric", left: true},
        draggable: false
    },
    // define-metric children
    {
        id: "high-design-quality",
        type: "oval",
        position: {x: -5500, y: 2000},
        data: {
            "isHidden": false,
            "label": "High_Design_Quality",
            "type": "tactic",
            "num": "(1)",
            "sourceTop": true,
            "sourceRight": true,
            "sourceLeft": true,
        },
        draggable: false
    },

    {
        id: "set-expiration-time",
        type: "gamification",
        position: {x: -5000, y: 600},
        data: {label: "Set_Expiration_Time"},
        draggable: false
    },

    // set-experience-points-system-and
    {
        id: "set-experience-points-system-and",
        type: "operator",
        position: {x: -5400, y: 350},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "set-game-mechanics-and-dynamics",
        type: "gamification",
        position: {x: -2000, y: 150},
        data: {label: "Set_Game_Mechanics_and_Dynamics"},
        draggable: false
    },
    // set-game-mechanics-and-dynamics children
    {
        id: "set-game-structure",
        type: "gamification",
        position: {x: -4000, y: 450},
        data: {label: "Set_Game_Structure", num: "(1)"},
        draggable: false
    },
    // set-game-structure-and
    {
        id: "set-game-structure-and",
        type: "operator",
        position: {x: -3900, y: 600},
        data: {label: "AND"},
        draggable: false
    },
    {
        id: "set-paths",
        type: "gamification",
        position: {x: -4600, y: 750},
        data: {label: "Set_Paths", right: true, left: true, bottom:true, sourceLeft: true, sourceRight: true, sourceTop: true},
        draggable: false
    },
    // set-paths-and
    {
        id: "set-paths-and",
        type: "operator",
        position: {x: -4500, y: 900},
        data: {label: "AND"},
        draggable: false
    },
    // set-path-and children
    {
        id: "define-paths",
        type: "gamification",
        position: {x: -4900, y: 1000},
        data: {label: "Define_Paths"},
        draggable: false
    },
    // define-paths children
    {
        id: "define-parallel-paths",
        type: "gamification",
        position: {x: -5150, y: 1200},
        data: {label: "Define_Parallel_Paths"},
        draggable: false
    },
    {
        id: "define-tree-paths",
        type: "gamification",
        position: {x: -4900, y: 1200},
        data: {label: "Define_Tree_Paths"},
        draggable: false
    },
    {
        id: "define-graph-paths",
        type: "gamification",
        position: {x: -4650, y: 1200},
        data: {label: "Define_Graph_Paths",},
        draggable: false
    },

    {
        id: "link-roles-to-path",
        type: "gamification",
        position: {x: -4400, y: 1000},
        data: {label: "Link_Roles_to_Path"},
        draggable: false
    },


    {
        id: "set-levels",
        type: "gamification",
        position: {x: -3600, y: 750},
        data: {label: "Set_Levels", right: true, left: true, bottom:true, sourceLeft: true, sourceRight: true, sourceTop: true},
        draggable: false
    },
    // set-level-and
    {
        id: "set-levels-and",
        type: "operator",
        position: {x: -3500, y: 900},
        data: {label: "AND"},
        draggable: false
    },
    // set-level-and children
    {
        id: "choose-level-names",
        type: "gamification",
        position: {x: -3800, y: 1050}, // Adjust position as needed
        data: {label: "Choose_Level_Names"},
        draggable: false
    },
    {
        id: "set-achievement-rule",
        type: "gamification",
        position: {x: -3500, y: 1050}, // Adjust position as needed
        data: {label: "Set_Achievement_Rule"},
        draggable: false
    },
    // set-achievement-rule children
    {
        id: "by-gamifiable-actions",
        type: "gamification",
        position: {x: -3750, y: 1300}, // Adjust position as needed
        data: {label: "By_Gamifiable_Actions"},
        draggable: false
    },
    // by-gamifiable-actions children
    {
        id: "set-gamifiable-actions-2",
        type: "gamification",
        position: {x: -4000, y: 1450}, // Adjust position as needed
        data: {label: "Set_Gamifiable_Actions", num: "(2)"},
        draggable: false
    },
    {
        id: "by-points",
        type: "gamification",
        position: {x: -3500, y: 1300}, // Adjust position as needed
        data: {label: "By_Points"},
        draggable: false
    },
    // by-points-and
    {
        id: "by-points-and",
        type: "operator",
        position: {x: -3400, y: 1450}, // Adjust position as needed
        data: {label: "AND"},
        draggable: false
    },
    // by-points-and-children
    {
        id: "set-thresholds",
        type: "gamification",
        position: {x: -3600, y: 1600}, // Adjust position as needed
        data: {label: "Set_Thresholds"},
        draggable: false
    },
    {
        id: "choose-point-kinds",
        type: "gamification",
        position: {x: -3200, y: 1600}, // Adjust position as needed
        data: {label: "Choose_Point_Kinds"},
        draggable: false
    },
    // choose-point-kinds children
    {
        id: "choose-experience-points",
        type: "gamification",
        position: {x: -3350, y: 1850}, // Adjust position as needed
        data: {label: "Choose_Experience_Points", sourceLeft: true},
        draggable: false
    },
    {
        id: "choose-other-kinds",
        type: "gamification",
        position: {x: -3050, y: 1850}, // Adjust position as needed
        data: {label: "Choose_Other_Kinds"},
        draggable: false
    },
    // choose-other-kinds needs
    {
        id: "set-point-systems-2",
        type: "gamification",
        position: {x: -3350, y: 2000}, // Adjust position as needed
        data: {label: "Set_Point_Systems", num:"(2)"},
        draggable: false
    },
    {
        id: "support-skill-improvement",
        type: "oval",
        position: {x: -4500, y: 2000},
        data: {
            "isHidden": false,
            "label": "Support_Skill_Improvement",
            "type": "tactic",
            "num": "(1)",
            "sourceTop": true,
            "sourceRight": true,
            "sourceLeft": true,
        },
        draggable: false
    },


    {
        id: "by-other-achievements",
        type: "gamification",
        position: {x: -3250, y: 1300}, // Adjust position as needed
        data: {label: "By_Other_Achievements"},
        draggable: false
    },
    {
        id: "link-levels-to-paths",
        type: "gamification",
        position: {x: -3200, y: 1050}, // Adjust position as needed
        data: {label: "Link_Levels_to_Paths"},
        draggable: false
    },
    {
        id: "define-difficulty-among-levels",
        type: "gamification",
        position: {x: -2900, y: 1050}, // Adjust position as needed
        data: {label: "Define_Difficulty_Among_Levels"},
        draggable: false
    },
    {
        id: "use-linear-difficulty-progression",
        type: "gamification",
        position: {x: -3000, y: 1150}, // Adjust position as needed
        data: {label: "Use_Linear_Difficulty_Progression"},
        draggable: false
    },


    {
        id: "set-virtual-environments",
        type: "gamification",
        position: {x: 4000, y: 150},
        data: {label: "Set_Virtual_Environments"},
        draggable: false
    },
    {
        id: "set-supporting-systems",
        type: "gamification",
        position: {x: 5500, y: 150},
        data: {label: "Set_Supporting_Systems"},
        draggable: false
    },

];
export const initialEdges = [
    {
        id: "e1",
        source: "design-gamification",
        target: "design-gamification-and",
        type: "straight",
        sourceHandle: "oval_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e2",
        source: "design-gamification-and",
        target: "set-roles",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e3",
        source: "design-gamification-and",
        target: "set-gamifiable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e4",
        source: "design-gamification-and",
        target: "set-experience-points-system",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e5",
        source: "design-gamification-and",
        target: "set-game-mechanics-and-dynamics",
        type: "straight",
        sourceHandle: "operator_middle",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6",
        source: "design-gamification-and",
        target: "set-virtual-environments",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e7",
        source: "design-gamification-and",
        target: "set-supporting-systems",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-roles children relationship
    {
        id: "e8",
        source: "set-roles",
        target: "set-single-roles",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e9",
        source: "set-roles",
        target: "set-team-roles",
        type: "straightLabel",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        data: {
            label: "(C2[Socializer] OR C3[Female] OR C4[Senior] OR C23[Goal.Participation.Low] OR\n" +
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR\n" +
                "C30[Task.Identification.Low] OR C26[Task.RequiredSkills.AdvancedSkills]) AND\n" +
                "NOT (C36[Killer]))"
        },
    },

    //set-single-roles children relationship
    {
        id: "e10",
        target: "set-single-roles",
        source: "fast-design",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e11",
        target: "set-single-roles",
        source: "low-cost-design",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    // set-team-roles children relationship
    {
        id: "e12",
        target: "set-team-roles",
        source: "fast-design",
        data: {label: "-"},
        type: "dotted",
        sourceHandle: "oval_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e13",
        target: "set-team-roles",
        source: "low-cost-design",
        data: {label: "-"},
        sourceHandle: "oval_source_left",
        type: "dotted",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    // set-team-roles children relationship
    {
        id: "e14",
        target: "set-team-roles",
        source: "promote-collaboration",
        sourceHandle: "oval_source_top",
        type: "floating",
        style: arrowEdgeStyle,
    },

    // set-gamifiable-actions children relationship
    {
        id: "e15",
        source: "set-gamifiable-actions",
        target: "set-gamifiable-actions-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e16",
        source: "set-gamifiable-actions-and",
        target: "set-kinds",
        type: "straight",
        style: arrowEdgeStyle,
        sourceHandle: "operator_right",
        markerStart: markerConfig,
    },
    {
        id: "e17",
        source: "set-gamifiable-actions-and",
        target: "choose-gamifiable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    // set-kinds children relationship
    {
        id: "e18",
        source: "set-kinds",
        target: "set-as-directly-unlocked",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e19",
        source: "set-kinds",
        target: "set-as-unlockable",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e20",
        source: "set-gamifiable-actions",
        target: "set-experience-points-system",
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e21",
        source: "set-experience-points-system",
        target: "set-experience-points-system-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e22",
        source: "set-experience-points-system-and",
        target: "select-gamifiable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e23",
        source: "set-experience-points-system-and",
        target: "assign-points-to-gamifiable-actions",
        type: "straight",
        sourceHandle: "operator_middle",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e24",
        source: "set-experience-points-system-and",
        target: "set-expiration-time",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e25",
        source: "assign-points-to-gamifiable-actions",
        target: "set-same-points-to-each-action",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e26",
        source: "assign-points-to-gamifiable-actions",
        target: "define-metric",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // connect e25 and e26
    {
        id: "e27",
        source: "set-same-points-to-each-action",
        target: "define-metric",
        type: "dotted",
        data: {label: "!"},
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    // set-same-points-to-each-action to fast-design and low-cost-design
    {
        id: "e28",
        target: "set-same-points-to-each-action",
        source: "fast-design",
        sourceHandle: "oval_source_right",
        type: "dotted",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e29",
        target: "set-same-points-to-each-action",
        source: "low-cost-design",
        type: "dotted",
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // define-metric to high-design-quality
    {
        id: "e30",
        target: "define-metric",
        source: "high-design-quality",
        type: "dotted",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-game-mechnics-and-dynamics children relationship
    {
        id: "e31",
        source: "set-game-mechanics-and-dynamics",
        target: "set-game-structure",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-game-structure-and children relationship
    {
        id: "e32",
        source: "set-game-structure",
        target: "set-game-structure-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e33",
        source: "set-game-structure-and",
        target: "set-paths",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e34",
        source: "set-game-structure-and",
        target: "set-levels",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-paths-and children relationship
    {
        id: "e35",
        source: "set-paths",
        target: "set-paths-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e36",
        source: "set-paths-and",
        target: "define-paths",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e37",
        source: "set-paths-and",
        target: "link-roles-to-path",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-paths-and children
    {
        id: "e38",
        source: "define-paths",
        target: "define-parallel-paths",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e39",
        source: "define-paths",
        target: "define-tree-paths",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e40",
        source: "define-paths",
        target: "define-graph-paths",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // define-parallel-paths to fast-design and low-cost-design
    {
        id: "e41",
        target: "define-parallel-paths",
        source: "fast-design",
        type: "dotted",
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e42",
        target: "define-parallel-paths",
        source: "low-cost-design",
        type: "dotted",
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // define-graph-paths to fast-design and lost-cost-design
    {
        id: "e43",
        target: "define-graph-paths",
        source: "fast-design",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e44",
        target: "define-graph-paths",
        source: "low-cost-design",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_right",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-paths and set-levels
    {
        id: "e41",
        source: "set-paths",
        target: "set-levels",
        type: "dotted",
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig,
    },

    // set-level relationships
    {
        id: "e45",
        source: "set-levels",
        target: "set-levels-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e46",
        source: "set-levels-and",
        target: "choose-level-names",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e47",
        source: "set-levels-and",
        target: "set-achievement-rule",
        type: "straight",
        sourceHandle: "operator_middle",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e48",
        source: "set-levels-and",
        target: "link-levels-to-paths",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e49",
        source: "set-levels-and",
        target: "define-difficulty-among-levels",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-achievement-rule relationships
    {
        id: "e50",
        source: "set-achievement-rule",
        target: "by-gamifiable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e51",
        source: "set-achievement-rule",
        target: "by-points",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e52",
        source: "set-achievement-rule",
        target: "by-other-achievements",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // by-points and by-points-and
    {
        id: "e53",
        source: "by-points",
        target: "by-points-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e54",
        source: "by-points-and",
        target: "set-thresholds",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e55",
        source: "by-points-and",
        target: "choose-point-kinds",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-gamifiable-actions-2
    {
        id: "e56",
        source: "by-gamifiable-actions",
        target: "set-gamifiable-actions-2",
        type: "dotted",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
    // choose-point-kinds relationship
    {
        id: "e57",
        source: "choose-point-kinds",
        target: "choose-experience-points",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e57_1",
        source: "choose-experience-points",
        target: "set-experience-points-system",
        type: "dotted",
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
    {
        id: "e58",
        source: "choose-point-kinds",
        target: "choose-other-kinds",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // choose-other-kinds needs set-point-systems
    {
        id: "e59",
        source: "choose-other-kinds",
        target: "set-point-systems-2",
        type: "dotted",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
    // set-paths and support-skill-improvement
    {
        id: "e60",
        source: "set-paths",
        target: "support-skill-improvement",
        type: "step",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
    },
    // set-levels and support-skill-improvement
    {
        id: "e61",
        source: "set-levels",
        target: "support-skill-improvement",
        type: "step",
        style: arrowEdgeStyle,
    },
    // link-role-to-path needs set-roles
    {
        id: "e62",
        source: "link-roles-to-path",
        target: "set-roles",
        type: "dotted",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
];

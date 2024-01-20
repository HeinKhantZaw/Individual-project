import {arrowEdgeStyle} from "../../components/Arrows/ArrowEdge.jsx";
import {markerConfig} from "../../components/Arrows/Marker.jsx";

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
        sourceHandle: "operator_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6",
        source: "design-gamification-and",
        target: "set-virtual-environments",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        type: "straightLabel",
        data: {
            label: "Pref(C1[Achiever] OR C5[Explorer] OR C2[Socializer] OR C3[Female] OR C4[Old])"
        },
    },
    {
        id: "e7",
        source: "design-gamification-and",
        target: "set-supporting-systems",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        type: "straightLabel",
        data: {
            label: "Pref"
        },
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
        type: "straight",
        markerStart: "operate",
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
        sourceHandle: "operator_bottom",
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
        data: {label: "+"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e29",
        target: "set-same-points-to-each-action",
        source: "low-cost-design",
        type: "dotted",
        data: {label: "+"},
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
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-game-mechnics-and-dynamics children relationship
    {
        id: "e31",
        source: "set-game-mechanics-and-dynamics",
        target: "set-game-structure",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR C4[Old] OR C19[Employed.No] OR \n" +
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR \n" +
                "C26[Task.RequiredSkills.AdvancedSkills]) AND " +
                "(NOT(C28[Task.Variety.Low, RequiredSkills.TrivialCommon]))"
        },
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
        data: {label: "+"},
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e42",
        target: "define-parallel-paths",
        source: "low-cost-design",
        type: "dotted",
        data: {label: "+"},
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
        data: {label: "-"},
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
        id: "e41_1",
        source: "set-paths",
        target: "set-levels",
        type: "dotted",
        data: {label: "Need"},

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
        sourceHandle: "operator_bottom",
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
        data: {label: "Need"},
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
        data: {label: "Need"},

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
        target: "choose-other-kinds",
        source: "set-point-systems-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-paths and support-skill-improvement
    {
        id: "e60",
        target: "set-paths",
        source: "support-skill-improvement",
        type: "step",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
    },
    // set-levels and support-skill-improvement
    {
        id: "e61",
        target: "set-levels",
        source: "support-skill-improvement",
        type: "step",
        style: arrowEdgeStyle,
    },
    // use-skill-points and support-skill-improvement
    {
        id: "e61_1",
        target: "use-skill-points",
        source: "support-skill-improvement",
        type: "step",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
    },
    // link-role-to-path needs set-roles
    {
        id: "e62",
        source: "link-roles-to-path",
        target: "set-roles",
        type: "dotted",
        data: {label: "Need"},
        targetHandle: "gamification_target_right",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
    {
        id: "e63",
        source: "define-difficulty-among-levels",
        target: "use-linear-difficulty-progression",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e64",
        source: "define-difficulty-among-levels",
        target: "use-alternated-difficulty",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-game-structure to high-design-quality
    {
        id: "e64_1",
        target: "set-game-structure",
        source: "high-design-quality",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_right",
        targetHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e65",
        source: "use-linear-difficulty-progression",
        target: "use-alternated-difficulty",
        type: "dotted",
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        data: {label: "!"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    //by-other-achievements to
    {
        id: "e65_1",
        target: "by-other-achievements",
        source: "set-game-mechanics-and-dynamics",
        type: "dotted",
        data: {label: "Need"},
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e66",
        source: "use-alternated-difficulty",
        target: "use-alternated-difficulty-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // use-alternated-difficulty-and children
    {
        id: "e67",
        source: "use-alternated-difficulty-and",
        target: "define-main-trend",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e68",
        source: "use-alternated-difficulty-and",
        target: "insert-alternated-difficulties",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // define-main-trend child
    {
        id: "e69",
        source: "define-main-trend",
        target: "use-increasing-difficulty",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // insert-alternated-difficulties-and children
    {
        id: "e70",
        source: "insert-alternated-difficulties",
        target: "insert-alternated-difficulties-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e71",
        source: "insert-alternated-difficulties-and",
        target: "choose-candidate-levels",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e72",
        source: "insert-alternated-difficulties-and",
        target: "insert-unexpected-difficulties",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e73",
        source: "insert-unexpected-difficulties",
        target: "insert-positive-difficulties",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e74",
        source: "insert-unexpected-difficulties",
        target: "insert-negative-difficulties",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // use-linear-diifficulty-progression to fast-design and low-cost-design
    {
        id: "e75",
        target: "use-linear-difficulty-progression",
        source: "fast-design-2",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e76",
        target: "use-linear-difficulty-progression",
        source: "low-cost-design-2",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // use-alternated-difficulty to high-design-quality and increase-user-surprise
    {
        id: "e77",
        target: "use-alternated-difficulty",
        source: "high-design-quality-2",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e77_1",
        target: "use-alternated-difficulty",
        source: "increase-user-surprise",
        type: "straight",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
    },

    //use-redeemable-points to rp-define-exchange-points-rewards
    {
        id: "e78",
        target: "use-redeemable-points",
        source: "rp-define-exchange-points-rewards-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    //use-redeemable-points to choose-kinds-of-points
    {
        id: "e79",
        source: "choose-kinds-of-points",
        target: "use-redeemable-points",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR C36[Killer] OR \n" +
                "C32[SocialStructure.Hierarchical] OR \n" +
                "C34[GoodProduct.Public])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //use-skill-points to choose-kinds-of-points
    {
        id: "e80",
        source: "choose-kinds-of-points",
        target: "use-skill-points",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR \n" +
                "C19[Employed.No]) AND \n" +
                "(C16[Empertise.Junior])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //use-karma-points to choose-kinds-of-points
    {
        id: "e81",
        source: "choose-kinds-of-points",
        target: "use-karma-points",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C3[Female]\n" +
                "OR C4[Old]) AND (NOT (C36[Killer]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //use-reputation-points to choose-kinds-of-points
    {
        id: "e81_1",
        source: "choose-kinds-of-points",
        target: "use-reputation-points",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C1[Achiever] OR\n" +
                "C5[Explorer]) AND (NOT (C36[Killer]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //use-karma-points to gp-define-exchange-points-rewards
    {
        id: "e82",
        target: "use-karma-points",
        source: "gp-define-exchange-points-rewards-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e83",
        target: "use-redeemable-points",
        source: "support-achievement",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e84",
        target: "use-redeemable-points",
        source: "improve-perceived-status",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e84_1",
        target: "use-redeemable-points",
        source: "increase-worth-vagueness",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },

    //support-achievement to improve-system-loyalty
    {
        id: "e85",
        target: "support-achievement",
        source: "improve-system-loyalty",
        type: "straight",
        sourceHandle: "oval_source_top",
        targetHandle: "oval_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //improve-perceived-status to improve-system-loyalty
    {
        id: "e86",
        target: "improve-perceived-status",
        source: "improve-system-loyalty",
        type: "straight",
        sourceHandle: "oval_source_top",
        targetHandle: "oval_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },


    {
        id: "e87",
        target: "use-karma-points",
        source: "support-social-behavior",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e88",
        target: "use-karma-points",
        source: "promote-ethical-behavior",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e89",
        target: "use-karma-points",
        source: "promote-altruistic-behavior",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e90",
        target: "use-karma-points",
        source: "increase-worth-vagueness",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e91",
        target: "use-reputation-points",
        source: "improve-trust",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    // set-point-systems-and connection
    {
        id: "e92",
        source: "set-point-systems",
        target: "set-point-systems-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e93",
        source: "set-point-systems-and",
        target: "set-achievement-rules",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e94",
        source: "set-point-systems-and",
        target: "choose-kinds-of-points",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-achievement-rules and choose-kinds-of-points
    {
        id: "e95",
        source: "set-achievement-rules",
        target: "choose-kinds-of-points",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle:"gamification_target_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig,
        markerStart: markerConfig
    },

    //set-achievement-rules and set-achievement-rules-and
    {
        id: "e96",
        source: "set-achievement-rules",
        target: "set-achievement-rules-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e97",
        source: "set-achievement-rules-and",
        target: "set-triggers",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e98",
        source: "set-achievement-rules-and",
        target: "set-amount-of-points",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-amount-of-points and set-amount-of-points-and
    {
        id: "e99",
        source: "set-amount-of-points",
        target: "set-amount-of-points-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e100",
        source: "set-amount-of-points-and",
        target: "set-sign-of-points",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e101",
        source: "set-amount-of-points-and",
        target: "set-quantity-of-points",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-triggers to by-gamifiable-actions-2 and by-other-achievements-2
    {
        id: "e102",
        source: "set-triggers",
        target: "by-gamifiable-actions-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e103",
        source: "set-triggers",
        target: "by-other-achievements-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e103_1",
        source: "set-game-mechanics-and-dynamics",
        target: "by-other-achievements-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // by-gamifiable-actions-2 and set-gamifiable-actions-3
    {
        id: "e104",
        source: "by-gamifiable-actions-2",
        target: "set-gamifiable-actions-3",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerEnd: markerConfig
    },
    // set-sign-of-points to set-positive and set-negative
    {
        id: "e105",
        source: "set-sign-of-points",
        target: "set-positive",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e106",
        source: "set-sign-of-points",
        target: "set-negative",
        type: "straightLabel",
        data: {label: "(NOT (C1[Achiever])"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e107",
        source: "support-user-penalization",
        target: "set-negative",
        sourceHandle: "oval_source_top",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    // set-quantity-of-points to used-fixed-amount and define-calculated-amount
    {
        id: "e108",
        source: "set-quantity-of-points",
        target: "used-fixed-amount",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e109",
        source: "set-quantity-of-points",
        target: "define-calculated-amount",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // define-calculated-amount to define-calculated-amount-and
    {
        id: "e110",
        source: "define-calculated-amount",
        target: "define-calculated-amount-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e111",
        source: "define-calculated-amount-and",
        target: "by-functions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e112",
        source: "define-calculated-amount-and",
        target: "by-parameters",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // by-parameters children
    {
        id: "e113",
        source: "by-parameters",
        target: "use-trigger-params",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e114",
        source: "by-parameters",
        target: "use-context-params",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // use-context-params children relationship
    {
        id: "e115",
        source: "use-context-params",
        target: "by-player-profile",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e116",
        source: "use-context-params",
        target: "by-user-profile",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e117",
        source: "use-context-params",
        target: "by-other-context-profiles",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // define-calculated-amount and dotted need to fast-design-3, low-cost-design-3, high-design-quality-3
    {
        id: "e118",
        target: "define-calculated-amount",
        source: "fast-design-3",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e118_1",
        target: "used-fixed-amount",
        source: "fast-design-3",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e119",
        target: "define-calculated-amount",
        source: "low-cost-design-3",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e120",
        target: "define-calculated-amount",
        source: "high-design-quality-3",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    //set-badges-kinds to negative-actions-badges, successes-badges, failures-badges
    {
        id: "e121",
        source: "set-badges-kinds",
        target: "negative-actions-badges",
        type: "straightLabel",
        data:{label: "(C36[Killer])"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e122",
        source: "set-badges-kinds",
        target: "successes-badges",
        type: "straightLabel",
        data:{
            label: "(C1[Achiever] OR C5[Explorer] OR\n" +
                "C7[Male] OR C19[Employed.No] OR\n"+
                "C33[SocialStructure.Hierarchy.Neutral] OR\n"+
                "C35[GoodProduced.Private])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e123",
        source: "set-badges-kinds",
        target: "failures-badges",
        type: "straightLabel",
        data: {label: "(C36[Killer]) AND \n(NOT (C1[Achiever]))"},
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e124",
        source: "set-game-mechanics-and-dynamics",
        target: "set-point-systems",
        type: "straight",
        sourceHandle: "operator_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e125",
        target: "use-trigger-params",
        source: "set-triggers",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e126",
        target: "failures-badges",
        source: "support-user-penalization",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_right",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e127",
        target: "negative-actions-badges",
        source: "promote-ethical-behavior-2",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e128",
        target: "negative-actions-badges",
        source: "promote-altruistic-behavior-3",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e129",
        target: "negative-actions-badges",
        source: "create-unfair-competition",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e130",
        target: "negative-actions-badges",
        source: "create-fair-competition",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e131",
        target: "negative-actions-badges",
        source: "support-social-behavior-2",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e132",
        target: "successes-badges",
        source: "create-unfair-competition",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e133",
        target: "successes-badges",
        source: "create-fair-competition",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e134",
        target: "failures-badges",
        source: "support-social-behavior-2",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e135",
        source: "set-social-badges-kinds",
        target: "set-publishable",
        type: "straightLabel",
        data:{
            label: "(MandFor(C5[Explorer] OR C19[Employed.No] OR\n" +
                "C2[Socializer] OR C3[Female] OR C4[Old] OR\n"+
                "C33[SocialStructure.Hierarchy-Neutral] OR\n"+
                "C35[GoodProduced.Private]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e136",
        source: "set-social-badges-kinds",
        target: "set-not-publishable",
        type: "straightLabel",
        data:{
            label: "(NOT (C5[Explorer] OR C19[Employed.No] OR\n" +
                "C2[Socializer] OR C3[Female] OR C4[Old] OR\n"+
                "C33[SocialStructure.Hierarchy-Neutral] OR\n"+
                "C35[GoodProduced.Private]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e137",
        source: "set-publishable",
        target: "set-not-publishable",
        type: "dotted",
        data: {label: "!"},
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e138",
        target: "set-publishable",
        source: "set-community-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e139",
        target: "set-publishable",
        source: "create-fair-competition",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e140",
        target: "set-publishable",
        source: "support-social-behavior-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_bottom",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e140_1",
        target: "set-publishable",
        source: "improve-perceived-status-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_bottom",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e140_2",
        target: "social-leader-boards",
        source: "improve-perceived-status-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e141",
        target: "set-not-publishable",
        source: "support-social-behavior-2",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e142",
        target: "set-badges-kinds",
        source: "set-social-badges-kinds",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e143",
        source: "set-badges-typologies",
        target: "set-badges-typologies-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e144",
        source: "set-badges-typologies-and",
        target: "set-badges-kinds",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e145",
        source: "set-badges-typologies-and",
        target: "set-social-badges-kinds",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e146",
        source: "set-game-mechanics-and-dynamics",
        target: "set-badges",
        type: "straight",
        sourceHandle: "operator_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e147",
        source: "set-badges",
        target: "set-badges-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e148_1",
        source: "set-badges-and",
        target: "set-badges-typologies",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e149_1",
        source: "set-badges-and",
        target: "configure-badges",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e150",
        target: "set-badges-typologies",
        source: "configure-badges",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e147_1",
        source: "configure-badges",
        target: "configure-badges-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e148",
        source: "configure-badges-and",
        target: "set-names",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e149",
        source: "configure-badges-and",
        target: "set-icons",
        type: "straight",
        sourceHandle: "operator_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e150_1",
        source: "configure-badges-and",
        target: "set-achievement-rules-2",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e151",
        source: "set-icons",
        target: "use-common-icons",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e152",
        source: "set-icons",
        target: "use-artistic-icons",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e153",
        source: "set-achievement-rules-2",
        target: "set-achievement-rules-2-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e154",
        source: "set-achievement-rules-2-and",
        target: "set-triggers-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e155",
        source: "set-achievement-rules-2-and",
        target: "set-badges-achieved",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e156",
        source: "set-triggers-2",
        target: "by-gamifiable-actions-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e157",
        source: "set-triggers-2",
        target: "by-other-achievements-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e158",
        target: "set-badges-achieved",
        source: "set-game-mechanics-and-dynamics-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e159",
        target: "use-common-icons",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e160",
        target: "use-common-icons",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e161",
        target: "use-artistic-icons",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e162",
        target: "use-artistic-icons",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e163",
        target: "use-artistic-icons",
        source: "high-design-quality-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e164",
        target: "by-gamifiable-actions-3",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e165",
        target: "by-gamifiable-actions-3",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e166",
        target: "by-other-achievements-3",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e167",
        target: "by-other-achievements-3",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e168",
        source: "create-unfair-competition",
        target: "create-fair-competition",
        type: "dotted",
        data: {label: "!"},
        sourceHandle: "oval_source_right",
        targetHandle: "oval_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    // support-achievement and set-badges
    {
        id: "e169",
        source: "support-achievement-2",
        target: "set-badges",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_bottom",
        style: arrowEdgeStyle,
    },
    // set-leader-board and set-leader-board-and
    {
        id: "e170",
        source: "set-leader-boards",
        target: "set-leader-boards-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-kinds-2 and set-leader-boards-and
    {
        id: "e171",
        source: "set-leader-boards-and",
        target: "set-kinds-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e172",
        source: "set-kinds-2",
        target: "single-leader-boards",
        type: "straightLabel",
        data: {label: "(C1[Achiever] OR C5[Explorer] OR C36[Killer])"},
        sourceHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e173",
        source: "set-kinds-2",
        target: "team-leader-boards",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C3[Female] OR C4[Old] OR C23[Goal.Participation.Low] OR\n" +
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR\n"+
                "C30[Task.Identification.Low] OR C26[Task.RequiredSkills.AdvancedSkills]) AND\n"+
                "(NOT (C36[Killer]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-kinds-2 to private-you-vs-you-leader-boards, social-leader-boards, time-dependent-leader-boards
    {
        id: "e174",
        source: "set-kinds-2",
        target: "private-you-vs-you-leader-boards",
        type: "straightLabel",
        data: {
            label: "(NOT (C5[Explorer] OR \n"+
                "C2[Socializer] OR C3[Female] OR C4[Old]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e175",
        source: "set-kinds-2",
        target: "social-leader-boards",
        type: "straightLabel",
        data: {
            label: "(MandFor(C2[Socializer] OR C5[Explorer] OR\n"+
                "C3[Female] OR C4[Old] OR\n"+
                "C33[SocialStructure.Hierarchy.Neutral]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e176",
        source: "set-kinds-2",
        target: "time-dependent-leader-boards",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR\n"+
                "C5[Explorer] OR C36[Killer])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e177",
        source: "set-kinds-2",
        target: "geo-localized-leader-boards",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C3[Female] OR\n"+
                "C4[Old] OR C19[Employed.No])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // team-leader-boards and set-team-roles-2 need relation
    {
        id: "e178",
        target: "team-leader-boards",
        source: "set-team-roles-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // private-you to set-single-roles-2
    {
        id: "e179",
        target: "private-you-vs-you-leader-boards",
        source: "set-single-roles-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e180",
        target: "single-leader-boards",
        source: "set-single-roles-2",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-leader-boards and set-game-mechanics-and-dynamics
    {
        id: "e181",
        target: "set-leader-boards",
        source: "set-game-mechanics-and-dynamics",
        type: "straight",
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-badges and set-game-mechanics-and-dynamics
    {
        id: "e182",
        target: "set-badges",
        source: "set-game-mechanics-and-dynamics",
        type: "straight",
        sourceHandle: "gamification_source_bottom",
        targetHandle: "gamification_target_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // create-fair-competition and social-leader-boards
    {
        id: "e183",
        target: "social-leader-boards",
        source: "create-fair-competition-2",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // promote-collaboration-4 and social-leader-boards
    {
        id: "e184",
        target: "team-leader-boards",
        source: "promote-collaboration-4",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    // support-social-behavior-3 and social-leader-boards
    {
        id: "e185",
        target: "social-leader-boards",
        source: "support-social-behavior-3",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    // support-social-behavior-3 and private-you
    {
        id: "e186",
        target: "private-you-vs-you-leader-boards",
        source: "support-social-behavior-3",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    // set-podium children: set-traditional-podium and set-number-of-winners
    {
        id: "e187",
        source: "set-podium",
        target: "set-traditional-podium",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e188",
        source: "set-podium",
        target: "set-number-of-winners",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    //set-winner-titles children: set-new-titles and use-badge-names
    {
        id: "e189",
        source: "set-winner-titles",
        target: "set-new-titles",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e190",
        source: "set-winner-titles",
        target: "use-badge-names",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    // set-winner-icons children: use-common-icons-2, use-artistic-icons-2 and use-badge-icons
    {
        id: "e191",
        source: "set-winner-icons",
        target: "use-common-icons-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e192",
        source: "set-winner-icons",
        target: "use-artistic-icons-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e193",
        source: "set-winner-icons",
        target: "use-badge-icons",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-winner and set-winner-and
    {
        id: "e194",
        source: "set-winners",
        target: "set-winners-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-winner-and children: set-winner-titles, set-winner-icons and set-podium
    {
        id: "e195",
        source: "set-winners-and",
        target: "set-winner-titles",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_bottom"
    },
    {
        id: "e196",
        source: "set-winners-and",
        target: "set-winner-icons",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    {
        id: "e197",
        source: "set-winners-and",
        target: "set-podium",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // configure-leader-board and configure-leader-board-and
    {
        id: "e198",
        source: "configure-leader-boards",
        target: "configure-leader-boards-and",
        type: "straight",
        sourceHandle: "gamification_source_bottom",
        targetHandle: "oval_target_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // configure-leader-board-and to set-name, set-winner, set-achievement-rules-3
    {
        id: "e199",
        source: "configure-leader-boards-and",
        target: "set-name",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e200",
        source: "configure-leader-boards-and",
        target: "set-winners",
        type: "straight",
        sourceHandle: "operator_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e201",
        source: "configure-leader-boards-and",
        target: "set-achievement-rules-3",
        type: "straight",
        sourceHandle: "operator_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // configure leader board and set-kinds need relations
    {
        id: "e202",
        target: "set-kinds-2",
        source: "configure-leader-boards",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    // configure-leader-boards and set-leader-boards-and
    {
        id: "e203",
        source: "set-leader-boards-and",
        target: "configure-leader-boards",
        type: "straight",
        sourceHandle: "operator_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e204",
        target: "use-badge-names",
        source: "set-badges",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_right",

        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e205",
        target: "use-badge-names",
        source: "use-badge-icons",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_bottom",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e206",
        target: "use-common-icons-2",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e207",
        target: "use-common-icons-2",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e208",
        target: "use-artistic-icons-2",
        source: "fast-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e209",
        target: "use-artistic-icons-2",
        source: "low-cost-design-4",
        type: "dotted",
        data: {label: "-"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e210",
        target: "use-artistic-icons-2",
        source: "high-design-quality-4",
        type: "dotted",
        data: {label: "+"},
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e211",
        source: "support-achievement-2",
        target: "set-leader-boards",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_bottom",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
    },
    {
        id: "e212",
        source: "set-achievement-rules-3",
        target: "set-leader-boards-calculation-strategy",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e213",
        source: "set-achievement-rules-3",
        target: "set-rewards",
        type: "straightLabel",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        data:{
            label:"Pref"
        },
    },
    {
        id: "e214",
        source: "set-leader-boards-calculation-strategy",
        target: "by-conditions",
        type: "straightLabel",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        data:{
            label:"Pref"
        },
    },
    {
        id: "e215",
        source: "set-leader-boards-calculation-strategy",
        target: "by-point-systems",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e216",
        source: "set-point-systems-3",
        target: "by-point-systems",
        sourceHandle: "gamification_source_bottom",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e217",
        source: "set-gamifiable-actions-4",
        target: "by-gamifiable-actions-4",
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e218",
        source: "by-conditions",
        target: "by-gamifiable-actions-4",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e219",
        source: "by-conditions",
        target: "by-other-achievements-4",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e220",
        source: "set-rewards",
        target: "assign-badges",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e221",
        source: "set-rewards",
        target: "assign-other-achievements",
        type: "straight",
        sourceHandle:"gamification_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },

    {
        id: "e223",
        source: "set-game-mechanics-and-dynamics-3",
        target: "by-other-achievements-4",
        sourceHandle: "gamification_source_left",
        targetHandle:"gamification_target_bottom",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e224",
        source: "set-game-mechanics-and-dynamics-3",
        target: "assign-other-achievements",
        targetHandle:"gamification_target_bottom",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e225",
        target: "use-badge-icons",
        source: "assign-badges",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_bottom",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e226",
        target: "by-gamifiable-actions-3",
        source: "set-gamifiable-actions-4",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,

    },
    {
        id: "e227",
        source: "set-kinds-3",
        target: "team-challenges",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C5[Explorer] OR\n" +
                "C3[Female] OR C4[Old]) AND\n" +
                "(NOT (C36[Killer]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e228",
        source: "set-kinds-3",
        target: "personal-challenges",
        type: "straightLabel",
        data: {
            label: "(C7[Male] OR C1[Achiever]\n" +
                "OR\n" +
                "C5[Explorer] OR C36[Killer])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-challenges and set-challenges-and
    {
        id: "e229",
        source: "set-challenges",
        target: "set-challenges-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // set-challenges-and children: set-kinds-3 and configure-challenges
    {
        id: "e230",
        source: "set-challenges-and",
        target: "set-kinds-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e231",
        source: "set-challenges-and",
        target: "configure-challenges",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    // set-kinds-3 and configure-challenges need relations
    {
        id: "e232",
        target: "set-kinds-3",
        source: "configure-challenges",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    // set-team-roles, set-community needs team-challenges
    {
        id: "e233",
        target: "team-challenges",
        source: "set-team-roles-3",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e234",
        target: "team-challenges",
        source: "set-community-4",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // personal-challenges and set-single-roles-3
    {
        id: "e235",
        target: "personal-challenges",
        source: "set-single-roles-3",
        type: "dotted",
        data: {label: "Need"},
        sourceHandle: "gamification_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // team-challenges straight with promote-collaboration-4 and support-social-behavior-3
    {
        id: "e236",
        target: "team-challenges",
        source: "promote-collaboration-4",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e237",
        target: "team-challenges",
        source: "support-social-behavior-3",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e238",
        target: "set-challenges",
        source: "create-fair-competition-3",
        type: "dotted",
        data: {label: "+"},
        style: arrowEdgeStyle,
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        markerStart: markerConfig,
    },
    // support-achievement-6 straight with personal challenges
    {
        id: "e239",
        target: "personal-challenges",
        source: "support-achievement-6",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },

    // configure-challenges and configure-challenges-and
    {
        id: "e240",
        source: "configure-challenges",
        target: "configure-challenges-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // configure-challenges-and children: set-names and set-achievement-rules
    {
        id: "e241",
        source: "configure-challenges-and",
        target: "set-names-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e242",
        source: "configure-challenges-and",
        target: "set-achievement-rules-4",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    // set-achievement-rules-4 has set-triggers and set-rewards
    {
        id: "e243",
        source: "set-achievement-rules-4",
        target: "set-triggers-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e244",
        source: "set-achievement-rules-4",
        target: "set-rewards-2",
        type: "straightLabel",
        data: {
            label: "Pref"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-triggers has by-gamifiable-actions and by-other-achievements
    {
        id: "e245",
        source: "set-triggers-3",
        target: "by-gamifiable-actions-5",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e246",
        source: "set-triggers-3",
        target: "by-other-achievements-5",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e247",
        target: "by-gamifiable-actions-5",
        source: "set-gamifiable-actions-6",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    // set-rewards has assign-badges and assign-other-achievements
    {
        id: "e248",
        source: "set-rewards-2",
        target: "assign-badges-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e249",
        source: "set-rewards-2",
        target: "assign-other-achievements-2",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // by-other-achievements and assign-other-achievements need set-game-mechanics-and-dynamics
    {
        id: "e250",
        target: "by-other-achievements-5",
        source: "set-game-mechanics-and-dynamics-4",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,

    },
    {
        id: "e251",
        target: "assign-other-achievements-2",
        source: "set-game-mechanics-and-dynamics-4",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,

    },
    // set-community-3 needs provide-forum
    {
        id: "e252",
        source: "set-community-3",
        target: "provide-forum",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        sourceHandle: "gamification_source_bottom",
        markerStart: markerConfig,
    },
    // choose-training-elements children: provide-forum,  provide-suggestions, provide-tricks, provide-tours, provide-tutorials
    {
        id: "e253",
        source: "choose-training-elements",
        target: "provide-forum",
        type: "straightLabel",
        data: {
            label: "(C23[Goal.Participation.Low] OR\n"+
                "C30[Task.Identification.Low] OR\n"+
                "C2[Socializer] OR C5[Explorer] OR\n"+
                "C3[Female] OR C4[Old])"
        },
        sourceHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e254",
        source: "choose-training-elements",
        target: "provide-suggestions",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR\n"+
                "C4[Old]) AND (C16[Expertise.Junior])"
        },
        sourceHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e255",
        source: "choose-training-elements",
        target: "provide-tricks",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C36[Killer] OR\n"+
                "C5[Explorer])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e256",
        source: "choose-training-elements",
        target: "provide-tours",
        type: "straightLabel",
        data:{
            label: "(C1[Achiever] OR\n"+
                "C5[Explorer] OR\n"+
                "C4[Old])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e257",
        source: "choose-training-elements",
        target: "provide-tutorials",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR C4[Old] OR C19[Employed.No] OR\n"+
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR\n"+
                "C26[Task.RequiredSkills.AdvancedSkills]) AND (C16[Expertise.Junior] AND\n"+
                "(NOT (C28[Task.Variety.Low, RequiredSkills.TrivialCommon])))"
        },
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // choose-presentation-elements to set-basic-elementss and set-avatar-trainer
    {
        id: "e258",
        source: "choose-presentation-elements",
        target: "set-basic-elements",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e259",
        source: "choose-presentation-elements",
        target: "set-avatar-trainer",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // choose-training-topics to minimal-system-features, entire-system-procedures and advantage-vs-competitor-systems
    {
        id: "e260",
        source: "choose-training-topics",
        target: "minimal-system-features",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e261",
        source: "choose-training-topics",
        target: "entire-system-procedures",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e262",
        source: "choose-training-topics",
        target: "advantage-vs-competitor-systems",
        type: "straightLabel",
        data: {
            label: "C12[Precursor.Existing.Yes]"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    //define-strategy to train-before-playing and train-during-playing
    {
        id: "e264",
        source: "define-strategy",
        target: "train-before-playing",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e265",
        source: "define-strategy",
        target: "train-during-playing",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-basic-training to set-basic-training-and
    {
        id: "e266",
        source: "set-basic-training",
        target: "set-basic-training-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-basic-training-and to choose-training-elements, choose-presentation-elements, choose-training-topics, define-strategy
    {
        id: "e267",
        source: "set-basic-training-and",
        target: "choose-training-elements",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e268",
        source: "set-basic-training-and",
        target: "choose-presentation-elements",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_bottom"
    },
    {
        id: "e269",
        source: "set-basic-training-and",
        target: "choose-training-topics",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_bottom"
    },
    {
        id: "e270",
        source: "set-basic-training-and",
        target: "define-strategy",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    // training-rewards-by-point-systems needs use-skill-points-2
    {
        id: "e271",
        target: "training-rewards-by-point-systems",
        source: "use-skill-points-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    // by-badges needs set-badges-2
    {
        id: "e272",
        target: "by-badges",
        source: "set-badges-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    // set-rewards-3 to training-rewards-by-point-systems, by-badges, by-other-achievements-6
    {
        id: "e273",
        source: "set-rewards-3",
        target: "training-rewards-by-point-systems",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e274",
        source: "set-rewards-3",
        target: "by-badges",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e275",
        source: "set-rewards-3",
        target: "by-other-achievements-6",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // define-training-paths needs set-game-structure-2
    {
        id: "e276",
        target: "define-training-paths",
        source: "set-game-structure-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    // set-advanced-training to set-rewards-3 and define-training-paths
    {
        id: "e277",
        source: "set-advanced-training",
        target: "set-rewards-3",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e278",
        source: "set-advanced-training",
        target: "define-training-paths",
        type: "straightLabel",
        data: {
            label: " (C1[Achiever] OR C5[Explorer] OR C4[Old] OR C19[Employed.No] OR\n"+
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR\n"+
                "C26[Task.RequiredSkills.AdvancedSkills] OR C29[Task.Specificity.High] OR\n"+
                "C30[Task.Identification.Low]) AND (C16[Expertise.Junior] AND\n"+
                "(NOT (C28[Task.Variety.Low, RequiredSkills.TrivialCommon])))"
        },
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-advanced-training needs set-basic-training
    {
        id: "e279",
        target: "set-advanced-training",
        source: "set-basic-training",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_left",
        sourceHandle: "gamification_source_right",
        markerStart: markerConfig,
    },
    // set-gamified-training-elements to set-basic-training and set-advanced-training
    {
        id: "e280",
        source: "set-gamified-training-elements",
        target: "set-basic-training",
        type: "straight",
        sourceHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e281",
        source: "set-gamified-training-elements",
        target: "set-advanced-training",
        type: "straight",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    // set-game-mechanics-and-dynamics to set-gamified-training-elements
    {
        id: "e282",
        source: "set-game-mechanics-and-dynamics",
        target: "set-gamified-training-elements",
        type: "straight",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-game-mechanics-and-dynamics to set-challenges
    {
        id: "e283",
        source: "set-game-mechanics-and-dynamics",
        target: "set-challenges",
        type: "straight",
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // improve-system-perception to improve-system-perception-by-humans and improve-system-perception-via-it
    {
        id: "e284",
        source: "improve-system-perception",
        target: "improve-system-perception-by-humans",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e285",
        source: "improve-system-perception",
        target: "improve-system-perception-via-it",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // improve-system-loyalty to improve-system-awareness and support-skill-improvement
    {
        id: "e286",
        source: "improve-system-loyalty-2",
        target: "improve-system-awareness",
        type: "straight",
        style: arrowEdgeStyle,
        sourceHandle: "oval_source_left",
        targetHandle: "oval_target_bottom",
        markerStart: markerConfig,
    },
    {
        id: "e287",
        source: "improve-system-loyalty-2",
        target: "support-skill-improvement-2",
        type: "straight",
        sourceHandle: "oval_source_right",
        targetHandle: "oval_target_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-activity-suggestions to user-suggests-to-a-user
    {
        id: "e288",
        source: "set-activity-suggestions",
        target: "user-suggests-to-a-user",
        type: "straightLabel",
        data: {
            label: "MandFor(C23[Goal.Participation.Low] OR \n"+
                "C30[Task.Identification.Low] OR\n"+
                "C32[SocialStructure.Hierarchical])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-activity-suggestions to system-suggests-an-event
    {
        id: "e289",
        source: "set-activity-suggestions",
        target: "system-suggests-an-event",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-community to  set-add-friend, set-remove-friend, set-friendship-suggestions, set-activity-suggestions
    {
        id: "e290",
        source: "set-community",
        target: "set-add-friend",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e291",
        source: "set-community",
        target: "set-remove-friend",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e292",
        source: "set-community",
        target: "set-friendship-suggestions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e293",
        source: "set-community",
        target: "set-activity-suggestions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // user-suggests-to-a-user children: to-participate-to-an-event, to-carry-out-an-activity
    {
        id: "e294",
        source: "user-suggests-to-a-user",
        target: "to-participate-to-an-event",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_left"
    },
    {
        id: "e295",
        source: "user-suggests-to-a-user",
        target: "to-carry-out-an-activity",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_right"
    },
    // set-friendship-suggestions to system-suggests-friendship, user-suggests-friendship-to-a-user
    {
        id: "e296",
        source: "set-friendship-suggestions",
        target: "system-suggests-friendship",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e297",
        source: "set-friendship-suggestions",
        target: "user-suggests-friendship-to-a-user",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-virtual-environments to set-community
    {
        id: "e298",
        source: "set-virtual-environments",
        target: "set-community",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C3[Female] OR C4[Old] OR C23[Goal.Participation.Low] OR C30[Task.Identification.Low] OR C32[SocialStructure.Hierarchical])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    // add-rewards to add-virtual-rewards, add-tangible-rewards, add-unlockable-powers straightLabel
    {
        id: "e299",
        source: "add-rewards",
        target: "add-virtual-rewards",
        type: "straightLabel",
        data: {
            label: "MandFor(C32[SocialStructure.Hierarchical] OR\n"+
                "C34[GoodProduced.Public])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e300",
        source: "add-rewards",
        target: "add-tangible-rewards",
        type: "straightLabel",
        data: {
            label: "MandFor(C32[SocialStructure.Hierarchical] OR\n"+
                "C34[GoodProduced.Public])"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e301",
        source: "add-rewards",
        target: "add-unlockable-powers",
        type: "straightLabel",
        data: {
            label: "C1[Achiever] OR C5[Explorer] OR\n"+
                "C36[Killer] OR C32[SocialStructure.Hierarchical]"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e302",
        source: "add-unlockable-powers",
        target: "add-unlockable-powers-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    // create-new-powers to create-new-powers-and
    {
        id: "e303",
        source: "create-new-powers",
        target: "create-new-powers-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // create-unlockable-powers-and to choose-unlockable-actions, create-new-powers
    {
        id: "e304",
        source: "add-unlockable-powers-and",
        target: "choose-unlockable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e305",
        source: "add-unlockable-powers-and",
        target: "create-new-powers",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    // create-new-powers-and to set-power-names and link-power-to-unlockable-actions
    {
        id: "e306",
        source: "create-new-powers-and",
        target: "set-power-names",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e307",
        source: "create-new-powers-and",
        target: "link-powers-to-unlockable-actions",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },

    // set-gamifiable-actions-5 needs add-unlockable-powers
    {
        id: "e308",
        source: "set-gamifiable-actions-5",
        target: "add-unlockable-powers",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_left",
        sourceHandle: "gamification_source_right",
        markerStart: markerConfig,
    },
    // set-as-unlockable-2 needs add-unlockable-powers
    {
        id: "e309",
        source: "set-as-unlockable-2",
        target: "add-unlockable-powers",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_right",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    // set-gamified-market-and to add-rewards
    {
        id: "e310",
        source: "set-gamified-market-and",
        target: "add-rewards",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        targetHandle: "gamification_target_right",
    },
    // set-gamified-market and set-gamified-market-and
    {
        id: "e311",
        source: "set-gamified-market",
        target: "set-gamified-market-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-gamified-market to set-virtual-environments straightLabel
    {
        id: "e312",
        target: "set-gamified-market",
        source: "set-virtual-environments",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR C2[Socializer] OR\n"+
                "C3[Female] OR C4[Old] OR\n"+
                "C32[SocialStructure.Hierarchical] OR C34[GoodProduced.Public])"
        },
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    // set-gamified-market-and and set-market-policies
    {
        id: "e313",
        source: "set-gamified-market-and",
        target: "set-market-policies",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    // set-market-policies to set-redeeming-policy, set-making-gift-policy, set-purchase-policy straightLabel
    {
        id: "e314",
        source: "set-market-policies",
        target: "set-redeeming-policy",
        type: "straightLabel",
        data: {
            label: "(C1[Achiever] OR C5[Explorer] OR\n"+
                "C32[SocialStructure.Hierarchical] OR\n"+
                "C34[GoodProduced.Public])"
        },
        sourceHandle: "gamification_source_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e315",
        source: "set-market-policies",
        target: "set-making-gift-policy",
        type: "straightLabel",
        data: {
            label: "(C2[Socializer] OR C3[Female] OR C4[Old] AND (NOT (C36[Killer]))"
        },
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e316",
        source: "set-market-policies",
        target: "set-purchase-policy",
        sourceHandle: "gamification_source_right",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e317",
        target: "by-point-systems",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e318",
        target: "by-point-systems",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_bottom",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e319",
        target: "by-conditions",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_right",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e320",
        target: "by-conditions",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_right",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e321",
        target: "provide-forum",
        source: "promote-collaboration-6",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e322",
        target: "provide-forum",
        source: "support-social-behavior-6",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e323",
        target: "provide-forum",
        source: "improve-system-perception-via-it-5",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e324",
        target: "provide-forum",
        source: "improve-system-awareness-6",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e325",
        target: "provide-forum",
        source: "improve-minor-assistance",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e326",
        target: "provide-suggestions",
        source: "increase-user-surprise-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e327",
        target: "provide-suggestions",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e328",
        target: "provide-suggestions",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e329",
        target: "provide-suggestions",
        source: "improve-minor-assistance",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e330",
        target: "provide-tricks",
        source: "increase-user-surprise-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e331",
        target: "provide-tricks",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e332",
        target: "provide-tricks",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e333",
        target: "provide-tricks",
        source: "improve-minor-assistance",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e334",
        target: "provide-tours",
        source: "improve-system-perception-via-it",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e335",
        source: "provide-tutorials",
        target: "define-training-paths",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_right",
        markerStart: markerConfig,
    },
    {
        id: "e336",
        target: "provide-tutorials",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e337",
        target: "provide-tutorials",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e338",
        target: "provide-tutorials",
        source: "high-design-quality-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e339",
        target: "provide-tutorials",
        source: "improve-system-awareness",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
    },
    {
        id: "e340",
        target: "set-basic-elements",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e341",
        target: "set-basic-elements",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e342",
        source: "set-basic-elements",
        target: "set-avatar-trainer",
        type: "dotted",
        data: {label: "!"},
        sourceHandle: "gamification_source_right",
        targetHandle: "gamification_target_left",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e343",
        target: "set-avatar-trainer",
        source: "increase-user-surprise-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e344",
        target: "set-avatar-trainer",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e345",
        target: "set-avatar-trainer",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e346",
        target: "set-avatar-trainer",
        source: "high-design-quality-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e347",
        target: "advantage-vs-competitor-systems",
        source: "improve-system-advantage-perception-vs-competitor-systems-via-it",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e348",
        target: "define-training-paths",
        source: "support-skill-improvement-2",
        type: "straight",
        markerStart: "operate",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
    },
    {
        id: "e349",
        target: "training-rewards-by-point-systems",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_left",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e350",
        target: "training-rewards-by-point-systems",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_left",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e351",
        target: "training-rewards-by-point-systems",
        source: "high-design-quality-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_left",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e352",
        target: "by-badges",
        source: "high-design-quality-5",
        type: "dotted",
        data: {label: "+"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e349_1",
        target: "by-other-achievements-6",
        source: "fast-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e350_1",
        target: "by-other-achievements-6",
        source: "low-cost-design-5",
        type: "dotted",
        data: {label: "-"},
        targetHandle: "gamification_target_bottom",
        sourceHandle: "oval_source_top",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },
    {
        id: "e351_1",
        target: "by-other-achievements-6",
        source: "assign-other-achievements-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_right",
        markerStart: markerConfig,
    },
    {
        id: "e352_1",
        source: "set-redeeming-policy",
        target: "rp-by-points",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        targetHandle: "gamification_target_top",
        sourceHandle: "gamification_source_bottom",
    },
    {
        id: "e353",
        source: "rp-by-points",
        target: "rp-define-exchange-points-rewards",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        targetHandle: "gamification_target_top",
        sourceHandle: "gamification_source_bottom",
    },
    {
        id: "e354",
        target: "rp-define-exchange-points-rewards",
        source: "use-redeemable-points-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    {
        id: "e355",
        source: "set-making-gift-policy",
        target: "gp-by-points",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        targetHandle: "gamification_target_top",
        sourceHandle: "gamification_source_bottom",
    },
    {
        id: "e356",
        source: "gp-by-points",
        target: "gp-define-exchange-points-rewards",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        targetHandle: "gamification_target_top",
        sourceHandle: "gamification_source_bottom",
    },
    {
        id: "e357",
        target: "gp-define-exchange-points-rewards",
        source: "use-karma-points-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_bottom",
        sourceHandle: "gamification_source_top",
        markerStart: markerConfig,
    },
    {
        id: "e358",
        source: "set-purchase-policy",
        target: "set-purchase-policy-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e359",
        source: "set-purchase-policy-and",
        target: "set-payment-system",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e360",
        source: "set-purchase-policy-and",
        target: "define-currency",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },

    {
        id: "e361",
        source: "define-currency",
        target: "define-virtual-currency",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },

    {
        id: "e362",
        source: "define-currency",
        target: "by-money",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },
    {
        id: "e362_2",
        target: "define-virtual-currency",
        source: "by-money",
        type: "dotted",
        data: {label: "!"},
        sourceHandle: "gamification_source_left",
        targetHandle: "gamification_target_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e363",
        source: "define-virtual-currency",
        target: "define-virtual-currency-and",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
    },

    {
        id: "e364",
        source: "define-virtual-currency-and",
        target: "define-exchange-money-currency",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_left"
    },
    {
        id: "e365",
        source: "define-virtual-currency-and",
        target: "define-exchange-currency-rewards",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "operator_right"
    },
    {
        id: "e366",
        source: "by-money",
        target: "define-exchange-money-rewards",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },
    {
        id: "e367",
        target: "by-money",
        source: "increase-worth-vagueness-2",
        type: "dotted",
        data: {label: "!"},
        targetHandle: "gamification_target_right",
        sourceHandle: "oval_source_right",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        markerEnd: markerConfig
    },
    {
        id: "e368",
        source: "set-supporting-systems",
        target: "set-monitoring-system",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },
    {
        id: "e369",
        source: "set-supporting-systems",
        target: "set-analyzing-system",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },
    {
        id: "e370",
        source: "set-supporting-systems",
        target: "set-adaptation-system",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig,
        sourceHandle: "gamification_source_bottom"
    },
    {
        id: "e371",
        target: "set-supporting-systems",
        source: "set-experience-points-system-2",
        type: "dotted",
        data: {label: "Need"},
        style: arrowEdgeStyle,
        targetHandle: "gamification_target_right",
        sourceHandle: "gamification_source_left",
        markerStart: markerConfig,
    },
    {
        id: "e373",
        target: "to-carry-out-an-activity",
        source: "promote-collaboration-5",
        sourceHandle: "oval_source_top",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },

    {
        id: "e374",
        target: "set-redeeming-policy",
        source: "support-achievement-3",
        sourceHandle: "oval_source_top",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e375",

        source: "improve-perceived-status-3",
        target: "set-redeeming-policy",
        sourceHandle: "oval_source_top",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e376",

        source: "support-social-behavior-4",
        target: "set-community",
        sourceHandle: "oval_source_left",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e377",
        target: "set-making-gift-policy",
        source: "support-social-behavior-4",
        sourceHandle: "oval_source_right",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e378",
        target: "set-making-gift-policy",
        source: "promote-altruistic-behavior-2",
        sourceHandle: "oval_source_top",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e379",
        target: "set-purchase-policy",
        source: "increase-profit",
        sourceHandle: "oval_source_top",
        targetHandle:"gamification_target_left",
        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
    {
        id: "e380",
        target: "set-market-policies",
        source: "increase-worth-vagueness-2",
        sourceHandle: "oval_source_top",

        type: "straight",
        markerStart: "operate",
        style: arrowEdgeStyle,
    },
];

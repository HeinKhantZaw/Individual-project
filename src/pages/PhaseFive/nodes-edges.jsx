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
            num: "(1)"
        },
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
        position: {x: -5700, y: 850},
        data: {label: "Set_Same_Points_To_Each_Action", sourceRight: true},
        draggable: false
    },
    {
        id: "define-metric",
        type: "gamification",
        position: {x: -5300, y: 850},
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
        position: {x: 4000, y: 150},
        data: {label: "Set_Game_Mechanics_and_Dynamics", num: "(1)"},
        draggable: false
    },
    // set-game-mechanics-and-dynamics children
    {
        id: "set-game-structure",
        type: "gamification",
        position: {x: -4000, y: 450},
        data: {label: "Set_Game_Structure", num: "(1)", sourceLeft: true, sourceRight: true, sourceTop: true,},
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
        data: {
            label: "Set_Paths",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true
        },
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
        position: {x: -4650, y: 1150},
        data: {label: "Define_Graph_Paths",},
        draggable: false
    },

    {
        id: "link-roles-to-path",
        type: "gamification",
        position: {x: -4200, y: 1000},
        data: {label: "Link_Roles_to_Path"},
        draggable: false
    },


    {
        id: "set-levels",
        type: "gamification",
        position: {x: -3600, y: 750},
        data: {
            label: "Set_Levels",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true
        },
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
        position: {x: -3800, y: 1050},
        data: {label: "Choose_Level_Names"},
        draggable: false
    },
    {
        id: "set-achievement-rule",
        type: "gamification",
        position: {x: -3500, y: 1050},
        data: {label: "Set_Achievement_Rule"},
        draggable: false
    },
    // set-achievement-rule children
    {
        id: "by-gamifiable-actions",
        type: "gamification",
        position: {x: -3750, y: 1300},
        data: {label: "By_Gamifiable_Actions"},
        draggable: false
    },
    // by-gamifiable-actions children
    {
        id: "set-gamifiable-actions-2",
        type: "gamification",
        position: {x: -4000, y: 1450},
        data: {label: "Set_Gamifiable_Actions", num: "(2)"},
        draggable: false
    },
    {
        id: "by-points",
        type: "gamification",
        position: {x: -3500, y: 1300},
        data: {label: "By_Points"},
        draggable: false
    },
    // by-points-and
    {
        id: "by-points-and",
        type: "operator",
        position: {x: -3400, y: 1450},
        data: {label: "AND"},
        draggable: false
    },
    // by-points-and-children
    {
        id: "set-thresholds",
        type: "gamification",
        position: {x: -3600, y: 1600},
        data: {label: "Set_Thresholds"},
        draggable: false
    },
    {
        id: "choose-point-kinds",
        type: "gamification",
        position: {x: -3300, y: 1600},
        data: {label: "Choose_Point_Kinds"},
        draggable: false
    },
    // choose-point-kinds children
    {
        id: "choose-experience-points",
        type: "gamification",
        position: {x: -3450, y: 1850},
        data: {label: "Choose_Experience_Points", sourceLeft: true},
        draggable: false
    },
    {
        id: "choose-other-kinds",
        type: "gamification",
        position: {x: -3150, y: 1850},
        data: {label: "Choose_Other_Kinds"},
        draggable: false
    },
    // choose-other-kinds needs
    {
        id: "set-point-systems-2",
        type: "gamification",
        position: {x: -3350, y: 2000},
        data: {label: "Set_Point_Systems", num: "(2)"},
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
        position: {x: -3250, y: 1300},
        data: {label: "By_Other_Achievements", right: true},
        draggable: false
    },
    {
        id: "link-levels-to-paths",
        type: "gamification",
        position: {x: -3200, y: 1050},
        data: {label: "Link_Levels_to_Paths"},
        draggable: false
    },
    {
        id: "define-difficulty-among-levels",
        type: "gamification",
        position: {x: -2700, y: 1050},
        data: {label: "Define_Difficulty_Among_Levels"},
        draggable: false
    },
    {
        id: "use-linear-difficulty-progression",
        type: "gamification",
        position: {x: -2950, y: 1250},
        data: {
            label: "Use_Linear_Difficulty_Progression",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "use-alternated-difficulty",
        type: "gamification",
        position: {x: -2500, y: 1250},
        data: {
            label: "Use_Alternated_Difficulty",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "use-alternated-difficulty-and",
        type: "operator",
        position: {x: -2400, y: 1400},
        data: {label: "AND"},
        draggable: false
    },
    {
        id: "define-main-trend",
        type: "gamification",
        position: {x: -2600, y: 1550},
        data: {
            label: "Define_Main_Trend",
        },
        draggable: false
    },
    // define-main-trend child
    {
        id: "use-increasing-difficulty",
        type: "gamification",
        position: {x: -2600, y: 1700},
        data: {
            label: "Use_Increasing_Difficulty",
        },
        draggable: false
    },
    {
        id: "insert-alternated-difficulties",
        type: "gamification",
        position: {x: -2200, y: 1550},
        data: {
            label: "Insert_Alternated_Difficulties",
        },
        draggable: false
    },
    {
        id: "insert-alternated-difficulties-and",
        type: "operator",
        position: {x: -2100, y: 1700},
        data: {label: "AND"},
        draggable: false
    },
    // insert-alternated-difficulties-and
    {
        id: "choose-candidate-levels",
        type: "gamification",
        position: {x: -2300, y: 1850},
        data: {
            label: "Choose_Candidate_Levels",
        },
        draggable: false
    },
    {
        id: "insert-unexpected-difficulties",
        type: "gamification",
        position: {x: -1900, y: 1850},
        data: {
            label: "Insert_Unexpected_Difficulties",
        },
        draggable: false
    },
    // insert-unexpcted-difficulties children
    {
        id: "insert-positive-difficulties",
        type: "gamification",
        position: {x: -2100, y: 2000},
        data: {
            label: "Insert_Positive_Difficulties",
        },
        draggable: false
    },
    {
        id: "insert-negative-difficulties",
        type: "gamification",
        position: {x: -1700, y: 2000},
        data: {
            label: "Insert_Negative_Difficulties",
        },
        draggable: false
    },
    {
        id: "fast-design-2",
        type: "oval",
        position: {x: -3050, y: 2500},
        data: {
            "isHidden": false,
            "label": "Fast_Design",
            "type": "tactic",
            "num": "(2)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "low-cost-design-2",
        type: "oval",
        position: {x: -2750, y: 2500},
        data: {
            "isHidden": false,
            "label": "Low_Cost_Design",
            "type": "tactic",
            "num": "(2)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "high-design-quality-2",
        type: "oval",
        position: {x: -2350, y: 2500},
        data: {
            "isHidden": false,
            "label": "High_Design_Quality",
            "type": "tactic",
            "num": "(2)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "increase-user-surprise",
        type: "oval",
        position: {x: -2050, y: 2500},
        data: {
            "isHidden": false,
            "label": "Increase_User_Surprise",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "use-redeemable-points",
        type: "gamification",
        position: {x: -1500, y: 1050},
        data: {
            label: "Use_Redeemable_Points",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "use-skill-points",
        type: "gamification",
        position: {x: -800, y: 1150},
        data: {
            label: "Use_Skill_Points",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    {
        id: "use-karma-points",
        type: "gamification",
        position: {x: -200, y: 1300},
        data: {
            label: "Use_Karma_Points",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    {
        id: "use-reputation-points",
        type: "gamification",
        position: {x: 300, y: 1050},
        data: {
            label: "Use_Reputation_Points",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    {
        id: "choose-kinds-of-points",
        type: "gamification",
        position: {x: -400, y: 800},
        data: {
            label: "Choose_Kinds_of_Points",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    {
        id: "rp-define-exchange-points-rewards",
        type: "gamification",
        position: {x: -1700, y: 1250},
        data: {
            label: "RP_Define_Exchange_Points_Rewards",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "gp-define-exchange-points-rewards",
        type: "gamification",
        position: {x: -50, y: 1450},
        data: {
            label: "GP_Define_Exchange_Points_Rewards",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "support-achievement",
        type: "oval",
        position: {x: -1400, y: 2500},
        data: {
            "isHidden": false,
            "label": "Support_Achievement",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
            bottom: true,
        },
        draggable: false
    },
    {
        id: "improve-perceived-status",
        type: "oval",
        position: {x: -1100, y: 2500},
        data: {
            "isHidden": false,
            "label": "Improve_Perceived_Status",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
            bottom: true,
        },
        draggable: false
    },

    {
        id: "improve-system-loyalty",
        type: "oval",
        position: {x: -1250, y: 2800},
        data: {
            "isHidden": false,
            "label": "Improve_System_Loyalty",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "support-social-behavior",
        type: "oval",
        position: {x: -800, y: 2500},
        data: {
            "isHidden": false,
            "label": "Support_Social_Behavior",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "promote-ethical-behavior",
        type: "oval",
        position: {x: -500, y: 2500},
        data: {
            "isHidden": false,
            "label": "Promote_Ethical_Behavior",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "promote-altruistic-behavior",
        type: "oval",
        position: {x: -200, y: 2500},
        data: {
            "isHidden": false,
            "label": "Promote_Altruistic_Behavior",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "increase-worth-vagueness",
        type: "oval",
        position: {x: 100, y: 2500},
        data: {
            "isHidden": false,
            "label": "Increase_Worth_Vagueness",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "improve-trust",
        type: "oval",
        position: {x: 400, y: 2500},
        data: {
            "isHidden": false,
            "label": "Improve_Trust",
            "type": "tactic",
            "num": "(1)",
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "set-point-systems",
        type: "gamification",
        position: {x: 500, y: 500},
        data: {
            label: "Set_Point_Systems",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-point-systems-and",
        type: "operator",
        position: {x: 600, y: 700},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "set-achievement-rules",
        type: "gamification",
        position: {x: 1300, y: 800},
        data: {
            label: "Set_Achievement_Rules",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-achievement-rules-and",
        type: "operator",
        position: {x: 1400, y: 1000},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "set-triggers",
        type: "gamification",
        position: {x: 850, y: 1050},
        data: {
            label: "Set_Triggers",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-amount-of-points",
        type: "gamification",
        position: {x: 1700, y: 1050},
        data: {
            label: "Set_Amount_of_Points",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-amount-of-points-and",
        type: "operator",
        position: {x: 1800, y: 1200},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "by-gamifiable-actions-2",
        type: "gamification",
        position: {x: 700, y: 1350},
        data: {
            label: "By_Gamifiable_Actions",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-gamifiable-actions-3",
        type: "gamification",
        position: {x: 700, y: 1550},
        data: {
            label: "Set_Gamifiable_Actions",
            num: "(3)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "by-other-achievements-2",
        type: "gamification",
        position: {x: 1000, y: 1350},
        data: {
            label: "By_Other_Achievements",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-sign-of-points",
        type: "gamification",
        position: {x: 1500, y: 1350},
        data: {
            label: "Set_Sign_of_Points",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    // set-sign-of-points children
    {
        id: "set-positive",
        type: "gamification",
        position: {x: 1300, y: 1650},
        data: {
            label: "Set_Positive",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-negative",
        type: "gamification",
        position: {x: 1600, y: 1650},
        data: {
            label: "Set_Negative",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "support-user-penalization",
        type: "oval",
        position: {x: 1600, y: 2100},
        data: {
            "isHidden": false,
            "label": "Support_User_Penalization",
            "type": "tactic",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        },
        draggable: false
    },
    {
        id: "set-quantity-of-points",
        type: "gamification",
        position: {x: 2100, y: 1350},
        data: {
            label: "Set_Quantity_of_Points",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "used-fixed-amount",
        type: "gamification",
        position: {x: 1900, y: 1550},
        data: {
            label: "Used_Fixed_Amount",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    //define-calculated-amount
    {
        id: "define-calculated-amount",
        type: "gamification",
        position: {x: 2300, y: 1550},
        data: {
            label: "Define_Calculated_Amount",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "define-calculated-amount-and",
        type: "operator",
        position: {x: 2400, y: 1700},
        data: {label: "AND"},
        draggable: false
    },
    // define-calculated-amount-and children: by-functions, by-parameters
    {
        id: "by-functions",
        type: "gamification",
        position: {x: 2200, y: 1850},
        data: {
            label: "By_Functions",
        },
    },
    {
        id: "by-parameters",
        type: "gamification",
        position: {x: 2600, y: 1850},
        data: {
            label: "By_Parameters",
        },
    },
    {
        id: "use-trigger-params",
        type: "gamification",
        position: {x: 2500, y: 2050},
        data: {
            label: "Use_Trigger_Params",left:true,
        },
    },
    {
        id: "use-context-params",
        type: "gamification",
        position: {x: 2900, y: 2050},
        data: {
            label: "Use_Context_Params",
        },
    },
    // use-context-params children: by-player-profile, by-user-profile, by-other-context-profiles
    {
        id: "by-player-profile",
        type: "gamification",
        position: {x: 2700, y: 2300},
        data: {
            label: "By_Player_Profile",
        },
    },
    {
        id: "by-user-profile",
        type: "gamification",
        position: {x: 3100, y: 2300},
        data: {
            label: "By_User_Profile",
        },
    },
    {
        id: "by-other-context-profiles",
        type: "gamification",
        position: {x: 3500, y: 2300},
        data: {
            label: "By_Other_Context_Profiles",
        },
    },
    // fast-design-3, low-cost-design-3, high-design-quality-3
    {
        id: "fast-design-3",
        type: "oval",
        position: {x: 2000, y: 2700},
        data: {
            "isHidden": false,
            "label": "Fast_Design",
            "type": "tactic",
            "num": "(3)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "low-cost-design-3",
        type: "oval",
        position: {x: 2300, y: 2700},
        data: {
            "isHidden": false,
            "label": "Low_Cost_Design",
            "type": "tactic",
            "num": "(3)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "high-design-quality-3",
        type: "oval",
        position: {x: 2600, y: 2700},
        data: {
            "isHidden": false,
            "label": "High_Design_Quality",
            "type": "tactic",
            "num": "(3)",
            sourceTop: true,
        },
        draggable: false
    },
    // set-badges-kinds
    {
        id: "set-badges-kinds",
        type: "gamification",
        position: {x: 3800, y: 1150},
        data: {
            label: "Set_Badges_Kinds",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "negative-actions-badges",
        type: "gamification",
        position: {x: 3300, y: 1500},
        data: {
            label: "Negative_Actions_Badges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "successes-badges",
        type: "gamification",
        position: {x: 3800, y: 1800},
        data: {
            label: "Successes_Badges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "failures-badges",
        type: "gamification",
        position: {x: 4400, y: 1500},
        data: {
            label: "Failures_Badges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    // promote-ethical-behavior-2, promote-altruistic-behavior-3, create-unfair-competition, create-fair-competition, support-social-behavior-2
    {
        id: "promote-ethical-behavior-2",
        type: "oval",
        position: {x: 3300, y: 2700},
        data: {
            "isHidden": false,
            "label": "Promote_Ethical_Behavior",
            "type": "tactic",
            "num": "(2)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "promote-altruistic-behavior-3",
        type: "oval",
        position: {x: 3600, y: 2700},
        data: {
            "isHidden": false,
            "label": "Promote_Altruistic_Behavior",
            "type": "tactic",
            "num": "(3)",
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "create-unfair-competition",
        type: "oval",
        position: {x: 3850, y: 2700},
        data: {
            "isHidden": false,
            "label": "Create_Unfair_Competition",
            "type": "tactic",
            "num": "(1)",
            right: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "create-fair-competition",
        type: "oval",
        position: {x: 4250, y: 2700},
        data: {
            "isHidden": false,
            "label": "Create_Fair_Competition",
            "type": "tactic",
            "num": "(1)",
            left: true,
            sourceLeft: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "support-social-behavior-2",
        type: "oval",
        position: {x: 4500, y: 2700},
        data: {
            "isHidden": false,
            "label": "Support_Social_Behavior",
            "type": "tactic",
            "num": "(2)",
            sourceTop: true,
        },
        draggable: false
    },


    {
        id: "set-virtual-environments",
        type: "gamification",
        position: {x: 5000, y: 150},
        data: {label: "Set_Virtual_Environments"},
        draggable: false
    },
    {
        id: "set-supporting-systems",
        type: "gamification",
        position: {x: 6000, y: 150},
        data: {label: "Set_Supporting_Systems"},

        draggable: false
    },

    {
        id: "set-social-badges-kinds",
        type: "gamification",
        position: {x: 5600, y: 1150},
        data: {
            label: "Set_Social_Badges_Kinds",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
        draggable: false
    },
    {
        id: "set-publishable",
        type: "gamification",
        position: {x: 5100, y: 1500},
        data: {
            label: "Set_Publishable",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "set-not-publishable",
        type: "gamification",
        position: {x: 6200, y: 1500},
        data: {
            label: "Set_Not_Publishable",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "set-community-2",
        type: "gamification",
        position: {x: 5300, y: 1800},
        data: {
            label: "Set_Community",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "set-badges-typologies",
        type: "gamification",
        position: {x: 4700, y: 850},
        data: {label: "Set_Badges_Typologies",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "set-badges-typologies-and",
        type: "operator",
        position: {x: 4800, y: 1000},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "configure-badges",
        type: "gamification",
        position: {x: 6900, y: 850},
        data: {label: "Configure_Badges",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "configure-badges-and",
        type: "operator",
        position: {x: 7000, y: 1000},
        data: {label: "AND"},
        draggable: false
    },
    {
        id: "set-names",
        type: "gamification",
        position: {x: 6400, y: 1150},
        data: {
            label: "Set_Names",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
        draggable: false
    },

    {
        id: "set-icons",
        type: "gamification",
        position: {x: 6900, y: 1150},
        data: {
            label: "Set_Icons",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
        draggable: false
    },

    {
        id: "use-common-icons",
        type: "gamification",
        position: {x: 6700, y: 1500},
        data: {
            label: "Use_Common_Icons",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "use-artistic-icons",
        type: "gamification",
        position: {x: 7000, y: 1500},
        data: {
            label: "Use_Artistic_Icons",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "set-achievement-rules-2",
        type: "gamification",
        position: {x: 7600, y: 1150},
        data: {
            label: "Set_Achievement_Rules",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            left: true,
            right: true,
            bottom: true,
        },
        draggable: false
    },
    {
        id: "set-achievement-rules-2-and",
        type: "operator",
        position: {x: 7700, y: 1300},
        data: {label: "AND"},
        draggable: false
    },
    {
        id: "set-triggers-2",
        type: "gamification",
        position: {x: 7400, y: 1500},
        data: {
            label: "Set_Triggers",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "set-badges-achieved",
        type: "gamification",
        position: {x: 7800, y: 1500},
        data: {
            label: "Set_Badges_Achieved",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "by-gamifiable-actions-3",
        type: "gamification",
        position: {x: 7200, y: 1800},
        data: {
            label: "By_Gamifiable_Actions",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "by-other-achievements-3",
        type: "gamification",
        position: {x: 7600, y: 1800},
        data: {
            label: "By_Other_Achievements",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "set-game-mechanics-and-dynamics-2",
        type: "gamification",
        position: {x: 8000, y: 1800},
        data: {
            label: "Set_Game_Mechanics_and_Dynamics",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "fast-design-4",
        type: "oval",
        position: {x: 7400, y: 2700},
        data: {
            "isHidden": false,
            "label": "Fast_Design",
            "type": "tactic",
            "num": "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "low-cost-design-4",
        type: "oval",
        position: {x: 7850, y: 2700},
        data: {
            "isHidden": false,
            "label": "Low_Cost_Design",
            "type": "tactic",
            "num": "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "high-design-quality-4",
        type: "oval",
        position: {x: 8300, y: 2700},
        data: {
            "isHidden": false,
            "label": "High_Design_Quality",
            "type": "tactic",
            "num": "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },

    {
        id: "set-badges",
        type: "gamification",
        position: {x: 5800, y: 500},
        data: {
            label: "Set_Badges",
            num: "(1)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-badges-and",
        type: "operator",
        position: {x: 5900, y: 700},
        data: {label: "AND"},
        draggable: false
    },

    {
        id: "support-achievement-2",
        type: "oval",
        position: {x: 8800, y: 2700},
        data: {
            "isHidden": false,
            "label": "Support_Achievement",
            "type": "tactic",
            "num": "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
        draggable: false
    },
    {
        id: "improve-perceived-status-2",
        type: "oval",
        position: {x: 9200, y: 2700},
        data: {
            "isHidden": false,
            "label": "Improve_Perceived_Status",
            "type": "tactic",
            "num": "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
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
        sourceHandle: "operator_bottom",
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
        source: "choose-other-kinds",
        target: "set-point-systems-2",
        type: "dotted",
        data: {label: "Need"},
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
    // use-skill-points and support-skill-improvement
    {
        id: "e61_1",
        source: "use-skill-points",
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
        data: {label: "Need"},

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
    //by-other-achivements to
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
        id: "e77",
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
        source: "rp-define-exchange-points-rewards",
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
        id: "e81",
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
        source: "gp-define-exchange-points-rewards",
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
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e84",
        target: "use-redeemable-points",
        source: "improve-perceived-status",
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e84_1",
        target: "use-redeemable-points",
        source: "increase-worth-vagueness",
        type: "floating",
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
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e88",
        target: "use-karma-points",
        source: "promote-ethical-behavior",
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e89",
        target: "use-karma-points",
        source: "promote-altruistic-behavior",
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e90",
        target: "use-karma-points",
        source: "increase-worth-vagueness",
        type: "floating",
        sourceHandle: "oval_source_top",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e91",
        target: "use-reputation-points",
        source: "improve-trust",
        type: "floating",
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
        sourceHandle: "gamification_source_right",
        style: arrowEdgeStyle,
        markerEnd: markerConfig
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
        type: "floating",
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
        type: "floating",
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
        type: "floating",
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
        type: "floating",
        sourceHandle: "oval_source_bottom",
        targetHandle: "gamification_target_bottom",
        style: arrowEdgeStyle,
    },
    {
        id: "e140_1",
        target: "set-publishable",
        source: "improve-perceived-status-2",
        type: "floating",
        sourceHandle: "oval_source_bottom",
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
        id: "e148",
        source: "set-badges-and",
        target: "set-badges-typologies",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e149",
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
        id: "e147",
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
        id: "e150",
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
];

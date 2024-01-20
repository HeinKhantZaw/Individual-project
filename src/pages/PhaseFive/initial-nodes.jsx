export const initialNodes = [
    {
        id: "design-gamification",
        type: "gamification",
        position: {x: 2200, y: -200},
        data: {label: "Design_Gamification", top: "no"}
    },
    // 2nd layer
    {
        id: "design-gamification-and",
        type: "operator",
        position: {x: 2294, y: -50},
        data: {label: "AND"}
    },

    // gamification to set-roles
    {
        id: "set-roles",
        type: "gamification",
        position: {x: -8500, y: 150},
        data: {
            label: "Set_Roles",
            right: true,
        }
    },

    // set-roles children
    {
        id: "set-single-roles",
        type: "gamification",
        position: {x: -9000, y: 550},
        data: {label: "Set_Single_Roles", num: "(1)"}
    },

    // set-single-roles + set-team-roles children
    {
        id: "fast-design",
        type: "oval",
        position: {x: -7500, y: 2000},
        data: {
            isHidden: false,
            label: "Fast_Design",
            type: "tactic",
            num: "(1)",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        }
    },
    {
        id: "low-cost-design",
        type: "oval",
        position: {x: -7000, y: 2000},
        data: {
            isHidden: false,
            label: "Low_Cost_Design",
            type: "tactic",
            num: "(1)",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        }
    },

    // set-roles children
    {
        id: "set-team-roles",
        conditions: "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
        parentId: "set-roles",
        type: "gamification",
        position: {x: -8000, y: 550},
        data: {label: "Set_Team_Roles", num: "(1)"}
    },

    // set-team-roles children
    {
        id: "promote-collaboration",
        type: "oval",
        position: {x: -8300, y: 2000},
        data: {
            isHidden: false,
            label: "Promote_Collaboration",
            type: "tactic",
            num: "(3)",
            "sourceTop": true,
        }
    },
    {
        id: "set-gamifiable-actions",
        type: "gamification",
        position: {x: -6965, y: 150},
        data: {label: "Set_Gamifiable_Actions", sourceRight: true, num: "(1)"}
    },
    // set-gamifiable-actions and operator
    {
        id: "set-gamifiable-actions-and",
        type: "operator",
        position: {x: -6870, y: 300},
        data: {label: "AND"}
    },
    // set-gamifiable-action children
    {
        id: "choose-gamifiable-actions",
        type: "gamification",
        position: {x: -7100, y: 450},
        data: {label: "Choose_Gamifiable_Actions"},
    },
    {
        id: "set-kinds",
        type: "gamification",
        position: {x: -6800, y: 450},
        data: {label: "Set_Kinds"}
    },

    // set-kinds children
    {
        id: "set-as-directly-unlocked",
        type: "gamification",
        position: {x: -6900, y: 650},
        data: {label: "Set_As_Directly_Unlocked", sourceRight: true}
    },
    {
        id: "set-as-unlockable",
        type: "gamification",
        position: {x: -6500, y: 650},
        data: {label: "Set_As_Unlockable", num: "(1)"}
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
    },
    {
        id: "select-gamifiable-actions",
        type: "gamification",
        position: {x: -5900, y: 600},
        data: {label: "Select_Gamifiable_Actions"}
    },
    {
        id: "assign-points-to-gamifiable-actions",
        type: "gamification",
        position: {x: -5500, y: 600},
        data: {label: "Assign_Points_to_Gamifiable_Actions"}
    },
    // assign-points-to-gamifiable-actions children
    {
        id: "set-same-points-to-each-action",
        type: "gamification",
        position: {x: -5700, y: 850},
        data: {label: "Set_Same_Points_To_Each_Action", sourceRight: true}
    },
    {
        id: "define-metric",
        type: "gamification",
        position: {x: -5300, y: 850},
        data: {label: "Define_Metric", left: true}
    },
    // define-metric children
    {
        id: "high-design-quality",
        type: "oval",
        position: {x: -5500, y: 2000},
        data: {
            isHidden: false,
            label: "High_Design_Quality",
            type: "tactic",
            num: "(1)",
            "sourceTop": true,
            "sourceRight": true,
            "sourceLeft": true,
        }
    },

    {
        id: "set-expiration-time",
        type: "gamification",
        position: {x: -5000, y: 600},
        data: {label: "Set_Expiration_Time"}
    },

    // set-experience-points-system-and
    {
        id: "set-experience-points-system-and",
        type: "operator",
        position: {x: -5400, y: 350},
        data: {label: "AND"}
    },

    {
        id: "set-game-mechanics-and-dynamics",
        type: "gamification",
        position: {x: 4000, y: 150},
        data: {
            label: "Set_Game_Mechanics_and_Dynamics",
            num: "(1)",
            sourceRight: true,
        }
    },
    // set-game-mechanics-and-dynamics children
    {
        id: "set-game-structure",
        conditions: "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26) AND (NOT C28)",
        parentId: "set-game-mechanics-and-dynamics",
        type: "gamification",
        position: {x: -4000, y: 450},
        data: {label: "Set_Game_Structure", num: "(1)", sourceLeft: true, sourceRight: true, sourceTop: true,}
    },
    // set-game-structure-and
    {
        id: "set-game-structure-and",
        type: "operator",
        position: {x: -3900, y: 600},
        data: {label: "AND"}
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
        }
    },
    // set-paths-and
    {
        id: "set-paths-and",
        type: "operator",
        position: {x: -4500, y: 900},
        data: {label: "AND"}
    },
    // set-path-and children
    {
        id: "define-paths",
        type: "gamification",
        position: {x: -4900, y: 1000},
        data: {label: "Define_Paths"}
    },
    // define-paths children
    {
        id: "define-parallel-paths",
        type: "gamification",
        position: {x: -5150, y: 1200},
        data: {label: "Define_Parallel_Paths"}
    },
    {
        id: "define-tree-paths",
        type: "gamification",
        position: {x: -4900, y: 1200},
        data: {label: "Define_Tree_Paths"}
    },
    {
        id: "define-graph-paths",
        type: "gamification",
        position: {x: -4650, y: 1150},
        data: {label: "Define_Graph_Paths",}
    },

    {
        id: "link-roles-to-path",
        type: "gamification",
        position: {x: -4200, y: 1000},
        data: {label: "Link_Roles_to_Path"}
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
        }
    },
    // set-level-and
    {
        id: "set-levels-and",
        type: "operator",
        position: {x: -3500, y: 900},
        data: {label: "AND"}
    },
    // set-level-and children
    {
        id: "choose-level-names",
        type: "gamification",
        position: {x: -3800, y: 1050},
        data: {label: "Choose_Level_Names"}
    },
    {
        id: "set-achievement-rule",
        type: "gamification",
        position: {x: -3500, y: 1050},
        data: {label: "Set_Achievement_Rule"}
    },
    // set-achievement-rule children
    {
        id: "by-gamifiable-actions",
        type: "gamification",
        position: {x: -3750, y: 1300},
        data: {label: "By_Gamifiable_Actions"}
    },
    // by-gamifiable-actions children
    {
        id: "set-gamifiable-actions-2",
        type: "gamification",
        position: {x: -4000, y: 1450},
        data: {label: "Set_Gamifiable_Actions", num: "(2)"}
    },
    {
        id: "by-points",
        type: "gamification",
        position: {x: -3500, y: 1300},
        data: {label: "By_Points"}
    },
    // by-points-and
    {
        id: "by-points-and",
        type: "operator",
        position: {x: -3400, y: 1450},
        data: {label: "AND"}
    },
    // by-points-and-children
    {
        id: "set-thresholds",
        type: "gamification",
        position: {x: -3600, y: 1600},
        data: {label: "Set_Thresholds"}
    },
    {
        id: "choose-point-kinds",
        type: "gamification",
        position: {x: -3300, y: 1600},
        data: {label: "Choose_Point_Kinds"}
    },
    // choose-point-kinds children
    {
        id: "choose-experience-points",
        type: "gamification",
        position: {x: -3450, y: 1850},
        data: {label: "Choose_Experience_Points", sourceLeft: true}
    },
    {
        id: "choose-other-kinds",
        type: "gamification",
        position: {x: -3150, y: 1850},
        data: {label: "Choose_Other_Kinds"}
    },
    // choose-other-kinds needs
    {
        id: "set-point-systems-2",
        type: "gamification",
        position: {x: -3350, y: 2000},
        data: {label: "Set_Point_Systems", num: "(2)"}
    },
    {
        id: "support-skill-improvement",
        type: "oval",
        position: {x: -4500, y: 2000},
        data: {
            isHidden: false,
            label: "Support_Skill_Improvement",
            type: "tactic",
            num: "(1)",
            "sourceTop": true,
            "sourceRight": true,
            "sourceLeft": true,
        }
    },


    {
        id: "by-other-achievements",
        type: "gamification",
        position: {x: -3250, y: 1300},
        data: {label: "By_Other_Achievements", right: true}
    },
    {
        id: "link-levels-to-paths",
        type: "gamification",
        position: {x: -3200, y: 1050},
        data: {label: "Link_Levels_to_Paths"}
    },
    {
        id: "define-difficulty-among-levels",
        type: "gamification",
        position: {x: -2700, y: 1050},
        data: {label: "Define_Difficulty_Among_Levels"}
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
        }
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
        }
    },
    {
        id: "use-alternated-difficulty-and",
        type: "operator",
        position: {x: -2400, y: 1400},
        data: {label: "AND"}
    },
    {
        id: "define-main-trend",
        type: "gamification",
        position: {x: -2600, y: 1550},
        data: {
            label: "Define_Main_Trend",
        }
    },
    // define-main-trend child
    {
        id: "use-increasing-difficulty",
        type: "gamification",
        position: {x: -2600, y: 1700},
        data: {
            label: "Use_Increasing_Difficulty",
        }
    },
    {
        id: "insert-alternated-difficulties",
        type: "gamification",
        position: {x: -2200, y: 1550},
        data: {
            label: "Insert_Alternated_Difficulties",
        }
    },
    {
        id: "insert-alternated-difficulties-and",
        type: "operator",
        position: {x: -2100, y: 1700},
        data: {label: "AND"}
    },
    // insert-alternated-difficulties-and
    {
        id: "choose-candidate-levels",
        type: "gamification",
        position: {x: -2300, y: 1850},
        data: {
            label: "Choose_Candidate_Levels",
        }
    },
    {
        id: "insert-unexpected-difficulties",
        type: "gamification",
        position: {x: -1900, y: 1850},
        data: {
            label: "Insert_Unexpected_Difficulties",
        }
    },
    // insert-unexpcted-difficulties children
    {
        id: "insert-positive-difficulties",
        type: "gamification",
        position: {x: -2100, y: 2000},
        data: {
            label: "Insert_Positive_Difficulties",
        }
    },
    {
        id: "insert-negative-difficulties",
        type: "gamification",
        position: {x: -1700, y: 2000},
        data: {
            label: "Insert_Negative_Difficulties",
        }
    },
    {
        id: "fast-design-2",
        type: "oval",
        position: {x: -3050, y: 2500},
        data: {
            isHidden: false,
            label: "Fast_Design",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },
    {
        id: "low-cost-design-2",
        type: "oval",
        position: {x: -2750, y: 2500},
        data: {
            isHidden: false,
            label: "Low_Cost_Design",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },
    {
        id: "high-design-quality-2",
        type: "oval",
        position: {x: -2350, y: 2500},
        data: {
            isHidden: false,
            label: "High_Design_Quality",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },
    {
        id: "increase-user-surprise",
        type: "oval",
        position: {x: -2050, y: 2500},
        data: {
            isHidden: false,
            label: "Increase_User_Surprise",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },
    {
        id: "use-redeemable-points",
        conditions: "C1 OR C5 OR C36 OR C32 OR C34",
        parentId: "choose-kinds-of-points",
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
        conditions: "(C1 OR C5 OR C19) AND C16",
        parentId: "choose-kinds-of-points",
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
        conditions: "(C2 OR C3 OR C4) AND (NOT C36)",
        parentId: "choose-kinds-of-points",
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
        conditions: "(C2 OR C1 OR C5) AND (NOT C36)",
        parentId: "choose-kinds-of-points",
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
        id: "rp-define-exchange-points-rewards-2",
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
        }
    },
    {
        id: "gp-define-exchange-points-rewards-2",
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
        }
    },
    {
        id: "support-achievement",
        type: "oval",
        position: {x: -1400, y: 2500},
        data: {
            isHidden: false,
            label: "Support_Achievement",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
            bottom: true,
        }
    },
    {
        id: "improve-perceived-status",
        type: "oval",
        position: {x: -1100, y: 2500},
        data: {
            isHidden: false,
            label: "Improve_Perceived_Status",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
            bottom: true,
        }
    },

    {
        id: "improve-system-loyalty",
        type: "oval",
        position: {x: -1250, y: 2800},
        data: {
            isHidden: false,
            label: "Improve_System_Loyalty",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },

    {
        id: "support-social-behavior",
        type: "oval",
        position: {x: -800, y: 2500},
        data: {
            isHidden: false,
            label: "Support_Social_Behavior",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },
    {
        id: "promote-ethical-behavior",
        type: "oval",
        position: {x: -500, y: 2500},
        data: {
            isHidden: false,
            label: "Promote_Ethical_Behavior",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },
    {
        id: "promote-altruistic-behavior",
        type: "oval",
        position: {x: -200, y: 2500},
        data: {
            isHidden: false,
            label: "Promote_Altruistic_Behavior",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },
    {
        id: "increase-worth-vagueness",
        type: "oval",
        position: {x: 100, y: 2500},
        data: {
            isHidden: false,
            label: "Increase_Worth_Vagueness",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
    },
    {
        id: "improve-trust",
        type: "oval",
        position: {x: 400, y: 2500},
        data: {
            isHidden: false,
            label: "Improve_Trust",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
        }
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
        data: {label: "AND"}
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
        data: {label: "AND"}
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
        data: {label: "AND"}
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
        conditions: "NOT C1",
        parentId: "set-sign-of-points",
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
            isHidden: false,
            label: "Support_User_Penalization",
            type: "tactic",
            "top": "no",
            "sourceRight": true,
            "sourceLeft": true,
        }
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
        data: {label: "AND"}
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
            isHidden: false,
            label: "Fast_Design",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
    },
    {
        id: "low-cost-design-3",
        type: "oval",
        position: {x: 2300, y: 2700},
        data: {
            isHidden: false,
            label: "Low_Cost_Design",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
    },
    {
        id: "high-design-quality-3",
        type: "oval",
        position: {x: 2600, y: 2700},
        data: {
            isHidden: false,
            label: "High_Design_Quality",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
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
        conditions: "C36",
        parentId: "set-badges-kinds",
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
        conditions: "C1 OR C5 OR C7 OR C19 OR C33 OR C35",
        parentId: "set-badges-kinds",
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
        conditions: "C36 AND (NOT C1)",
        parentId: "set-badges-kinds",
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
            isHidden: false,
            label: "Promote_Ethical_Behavior",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },
    {
        id: "promote-altruistic-behavior-3",
        type: "oval",
        position: {x: 3600, y: 2700},
        data: {
            isHidden: false,
            label: "Promote_Altruistic_Behavior",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
    },
    {
        id: "create-unfair-competition",
        type: "oval",
        position: {x: 3850, y: 2700},
        data: {
            isHidden: false,
            label: "Create_Unfair_Competition",
            type: "tactic",
            num: "(1)",
            right: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "create-fair-competition",
        type: "oval",
        position: {x: 4250, y: 2700},
        data: {
            isHidden: false,
            label: "Create_Fair_Competition",
            type: "tactic",
            num: "(1)",
            left: true,
            sourceLeft: true,
            sourceTop: true,
        }
    },
    {
        id: "support-social-behavior-2",
        type: "oval",
        position: {x: 4500, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Social_Behavior",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },


    {
        id: "set-virtual-environments",
        conditions: "C1 OR C5 OR C2 OR C3 OR C4 OR C32 OR C34",
        parentId: "set-gamified-market",
        type: "gamification",
        position: {x: 33500, y: 150},
        data: {label: "Set_Virtual_Environments"}
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
        }
    },
    {
        id: "set-publishable",
        conditions: "C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35",
        parentId: "set-social-badges-kinds",
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
        }
    },
    {
        id: "set-not-publishable",
        conditions: "NOT (C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35)",
        parentId: "set-social-badges-kinds",
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
        }
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
        }
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
        }
    },
    {
        id: "set-badges-typologies-and",
        type: "operator",
        position: {x: 4800, y: 1000},
        data: {label: "AND"}
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
        }
    },
    {
        id: "configure-badges-and",
        type: "operator",
        position: {x: 7000, y: 1000},
        data: {label: "AND"}
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
        }
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
        }
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
        }
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
        }
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
        }
    },
    {
        id: "set-achievement-rules-2-and",
        type: "operator",
        position: {x: 7700, y: 1300},
        data: {label: "AND"}
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
        }
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
        }
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
        }
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
        }
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
        }
    },
    {
        id: "fast-design-4",
        type: "oval",
        position: {x: 7400, y: 2700},
        data: {
            isHidden: false,
            label: "Fast_Design",
            type: "tactic",
            num: "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },

    {
        id: "low-cost-design-4",
        type: "oval",
        position: {x: 7850, y: 2700},
        data: {
            isHidden: false,
            label: "Low_Cost_Design",
            type: "tactic",
            num: "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "high-design-quality-4",
        type: "oval",
        position: {x: 8300, y: 2700},
        data: {
            isHidden: false,
            label: "High_Design_Quality",
            type: "tactic",
            num: "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },

    {
        id: "set-badges",
        type: "gamification",
        position: {x: 5800, y: 400},
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
        data: {label: "AND"}
    },

    {
        id: "support-achievement-2",
        type: "oval",
        position: {x: 8800, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Achievement",
            type: "tactic",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "improve-perceived-status-2",
        type: "oval",
        position: {x: 9200, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_Perceived_Status",
            type: "tactic",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-leader-boards",
        type: "gamification",
        position: {x: 11000, y: 450},
        data: {
            label: "Set_Leader_boards",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "set-leader-boards-and",
        type: "operator",
        position: {x: 11100, y: 600},
        data: {label: "AND"}
    },
    // set-kinds
    {
        id: "set-kinds-2",
        type: "gamification",
        position: {x: 9500, y: 700},
        data: {
            label: "Set_Kinds",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,

        },
    },
    {
        id: "single-leader-boards",
        conditions: "C1 OR C5 OR C36",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 8000, y: 1050},
        data: {
            label: "Single_Leader_boards",
            sourceLeft: true,
            sourceTop: true,
            bottom: true,
        },
    },
    {
        id: "team-leader-boards",
        conditions: "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 9000, y: 1200},
        data: {
            label: "Team_Leader_boards",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // team-leader-boards child set-team-roles-2
    {
        id: "set-team-roles-2",
        type: "gamification",
        position: {x: 8900, y: 1400},
        data: {
            label: "Set_Team_Roles",
            num: "(2)",
            sourceRight: true,
            sourceTop: true,
            right: true,
        },
    },
    {
        id: "private-you-vs-you-leader-boards",
        conditions: "NOT (C5 OR C2 OR C3 OR C4)",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 9500, y: 1400},
        data: {
            label: "Private_You_vs_You_Leader_boards",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true
        },
    },
    // private-you child set-single-roles-2
    {
        id: "set-single-roles-2",
        type: "gamification",
        position: {x: 9400, y: 1600},
        data: {
            label: "Set_Single_Roles",
            num: "(2)",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "social-leader-boards",
        conditions: "C2 OR C5 OR C3 OR C4 OR C33",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 10300, y: 1200},
        data: {
            label: "Social_Leader_boards",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "time-dependent-leader-boards",
        conditions: "C1 OR C5 OR C36",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 11000, y: 1250},
        data: {
            label: "Time_Dependent_Leader_boards",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "geo-localized-leader-boards",
        conditions: "C2 OR C3 OR C4 OR C19",
        parentId: "set-kinds-2",
        type: "gamification",
        position: {x: 11600, y: 1150},
        data: {
            label: "Geo_Localized_Leader_boards",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "create-fair-competition-2",
        type: "oval",
        position: {x: 10500, y: 2700},
        data: {
            isHidden: false,
            label: "Create_Fair_Competition",
            type: "tactic",
            num: "(2)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    // promote-collaboration-4
    {
        id: "promote-collaboration-4",
        type: "oval",
        position: {x: 11000, y: 2700},
        data: {
            isHidden: false,
            label: "Promote_Collaboration",
            type: "tactic",
            num: "(4)",
            sourceTop: true,
        }
    },
    // support-social-behavior-3
    {
        id: "support-social-behavior-3",
        type: "oval",
        position: {x: 11500, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Social_Behavior",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
    },
    {
        id: "configure-leader-boards",
        type: "gamification",
        position: {x: 14000, y: 550},
        data: {
            label: "Configure_Leader_boards",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        }
    },
    // configure-leader-board-and only
    {
        id: "configure-leader-boards-and",
        type: "operator",
        position: {x: 14100, y: 700},
        data: {label: "AND"}
    },
    {
        id: "set-name",
        type: "gamification",
        position: {x: 12250, y: 850},
        data: {
            label: "Set_Name",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "set-winners",
        type: "gamification",
        position: {x: 13250, y: 850},
        data: {
            label: "Set_Winners",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },

    {
        id: "set-winners-and",
        type: "operator",
        position: {x: 13350, y: 980},
        data: {label: "AND"}
    },
    {
        id: "set-podium",
        type: "gamification",
        position: {x: 12250, y: 1100},
        data: {
            label: "Set_Podium",
        }
    },
    {
        id: "set-traditional-podium",
        type: "gamification",
        position: {x: 12000, y: 1350},
        data: {
            label: "Set_Traditional_Podium",
        }
    },
    {
        id: "set-number-of-winners",
        type: "gamification",
        position: {x: 12500, y: 1350},
        data: {
            label: "Set_Number_of_Winners",
        }
    },

    {
        id: "set-winner-titles",
        type: "gamification",
        position: {x: 13250, y: 1100},
        data: {
            label: "Set_Winner_Titles",
        }
    },
    {
        id: "set-new-titles",
        type: "gamification",
        position: {x: 13000, y: 1350},
        data: {
            label: "Set_New_Titles",
        }
    },
    {
        id: "use-badge-names",
        type: "gamification",
        position: {x: 13500, y: 1350},
        data: {
            label: "Use_Badge_Names",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-winner-icons",
        type: "gamification",
        position: {x: 14500, y: 1100},
        data: {
            label: "Set_Winner_Icons",
        }
    },
    {
        id: "use-common-icons-2",
        type: "gamification",
        position: {x: 14000, y: 1350},
        data: {
            label: "Use_Common_Icons",
            bottom: true,
            left: true,
        }
    },
    {
        id: "use-artistic-icons-2",
        type: "gamification",
        position: {x: 14500, y: 1350},
        data: {
            label: "Use_Artistic_Icons",
            bottom: true,
            left: true,
        }
    },
    {
        id: "use-badge-icons",
        type: "gamification",
        position: {x: 15000, y: 1350},
        data: {
            label: "Use_Badge_Icons",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-achievement-rules-3",
        type: "gamification",
        position: {x: 16500, y: 850},
        data: {
            label: "Set_Achievement_Rules",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "set-leader-boards-calculation-strategy",
        type: "gamification",
        position: {x: 16000, y: 1100},
        data: {
            label: "Set_Leader-boards_Calculation_Strategy",
            bottom: true,
        }
    },
    {
        id: "set-rewards",
        type: "gamification",
        position: {x: 17000, y: 1100},
        data: {
            label: "Set_Rewards",
            bottom: true,
        }
    },
    {
        id: "by-point-systems",
        type: "gamification",
        position: {x: 15750, y: 1350},
        data: {
            label: "By_Point_Systems",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "by-conditions",
        type: "gamification",
        position: {x: 16250, y: 1350},
        data: {
            label: "By_Conditions",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "assign-badges",
        type: "gamification",
        position: {x: 16750, y: 1350},
        data: {
            label: "Assign_Badges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "assign-other-achievements",
        type: "gamification",
        position: {x: 17250, y: 1350},
        data: {
            label: "Assign_Other_Achievements",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-point-systems-3",
        type: "gamification",
        position: {x: 15500, y: 1150},
        data: {
            label: "Set_Point_Systmes",
            num: "(3)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "by-gamifiable-actions-4",
        type: "gamification",
        position: {x: 16000, y: 1600},
        data: {
            label: "By_Gamifiable_Actions",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "by-other-achievements-4",
        type: "gamification",
        position: {x: 16500, y: 1600},
        data: {
            label: "By_Other_Achievements",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-gamifiable-actions-4",
        type: "gamification",
        position: {x: 15500, y: 1600},
        data: {
            label: "Set_Gamifiable_Actions",
            num: "(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-game-mechanics-and-dynamics-3",
        type: "gamification",
        position: {x: 17500, y: 1700},
        data: {
            label: "Set_Game_Mechanics_and_Dynamics",
            num: "(3)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },

    {
        id: "set-challenges",
        type: "gamification",
        position: {x: 20000, y: 550},
        data: {
            label: "Set_Challenges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-challenges-and",
        type: "operator",
        position: {x: 20100, y: 700},
        data: {label: "AND"}
    },
    {
        id: "set-kinds-3",
        type: "gamification",
        position: {x: 19250, y: 850},
        data: {
            label: "Set_Kinds",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "configure-challenges",
        type: "gamification",
        position: {x: 20750, y: 850},
        data: {
            label: "Configure_Challenges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    {
        id: "configure-challenges-and",
        type: "operator",
        position: {x: 20850, y: 1000},
        data: {label: "AND"}
    },
    // configure-challenges-and children: set-names, set-achievement-rules
    {
        id: "set-names-2",
        type: "gamification",
        position: {x: 20500, y: 1150},
        data: {
            label: "Set_Names",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "set-achievement-rules-4",
        type: "gamification",
        position: {x: 21200, y: 1150},
        data: {
            label: "Set_Achievement_Rules",
            sourceRight: true,
            sourceTop: true,
            right: true,
        },
    },
    {
        id: "set-triggers-3",
        type: "gamification",
        position: {x: 21000, y: 1350},
        data: {
            label: "Set_Triggers",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    // set-triggers-3 children has only two nodes: by-gamifiable-actions, by-other-achievements
    {
        id: "by-gamifiable-actions-5",
        type: "gamification",
        position: {x: 20650, y: 1600},
        data: {
            label: "By_Gamifiable_Actions",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    // by-gamifiable-actions-5 has set-gamifiable-actions-6
    {
        id: "set-gamifiable-actions-6",
        type: "gamification",
        position: {x: 20500, y: 1800},
        data: {
            label: "Set_Gamifiable_Actions",
            num: "(6)",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "by-other-achievements-5",
        type: "gamification",
        position: {x: 21000, y: 1600},
        data: {
            label: "By_Other_Achievements",
            sourceRight: true,
            sourceTop: true,
            right: true,
        },
    },
    {
        id: "set-rewards-2",
        type: "gamification",
        position: {x: 21500, y: 1350},
        data: {
            label: "Set_Rewards",
            sourceRight: true,
            sourceTop: true,
            right: true,
        },
    },
    // set-rewards-2 has only two children: assign-badges and assign-other-achievements
    {
        id: "assign-badges-2",
        type: "gamification",
        position: {x: 21500, y: 1600},
        data: {
            label: "Assign_Badges",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "assign-other-achievements-2",
        type: "gamification",
        position: {x: 22000, y: 1600},
        data: {
            label: "Assign_Other_Achievements",
            sourceRight: true,
            sourceTop: true,
            right: true,
        },
    },
    {
        id: "set-game-mechanics-and-dynamics-4",
        type: "gamification",
        position: {x: 21500, y: 1800},
        data: {
            label: "Set_Game_Mechanics_and_Dynamics",
            num: "(4)",
            sourceLeft: true,
            sourceTop: true,
            left: true,
        },
    },
    {
        id: "team-challenges",
        conditions: "(C2 OR C5 OR C3 OR C4) AND (NOT C36)",
        parentId: "set-kinds-3",
        type: "gamification",
        position: {x: 18750, y: 1100},
        data: {
            label: "Team_Challenges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "personal-challenges",
        conditions: "C7 OR C1 OR C5 OR C36",
        parentId: "set-kinds-3",
        type: "gamification",
        position: {x: 19750, y: 1100},
        data: {
            label: "Personal_Challenges",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-team-roles-3",
        type: "gamification",
        position: {x: 18500, y: 1350},
        data: {
            label: "Set_Team_Roles",
            num:"(3)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-community-4",
        type: "gamification",
        position: {x: 19000, y: 1350},
        data: {
            label: "Set_Community",
            num:"(4)",
            right: true,
            left: true,
            bottom: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "set-single-roles-3",
        type: "gamification",
        position: {x: 19750, y: 1600},
        data: {
            label: "Set_Single_Roles",
            num: "(3)",
            sourceTop: true,
        }
    },

    {
        id: "create-fair-competition-3",
        type: "oval",
        position: {x: 19750, y: 2700},
        data: {
            isHidden: false,
            label: "Create_Fair_Competition",
            type: "tactic",
            num: "(3)",
            sourceTop: true,
        }
    },
    {
        id: "support-achievement-6",
        type: "oval",
        position: {x: 20500, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Achievement",
            type: "tactic",
            num: "(6)",
            sourceTop: true,
        }
    },
    {
        id: "promote-collaboration-6",
        type: "oval",
        position: {x: 21500, y: 2700},
        data: {
            isHidden: false,
            label: "Promote_Collaboration",
            type: "tactic",
            num: "(6)",
            sourceTop: true,
        }
    },
    {
        id: "support-social-behavior-6",
        type: "oval",
        position: {x: 22000, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Social_Behavior",
            type: "tactic",
            num: "(6)",
            sourceTop: true,
        }
    },
    {
        id: "improve-system-perception-via-it-5",
        type: "oval",
        position: {x: 22500, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Perception_via_IT",
            type: "tactic",
            num: "(5)",
            sourceTop: true,
        }
    },
    {
        id: "improve-system-awareness-6",
        type: "oval",
        position: {x: 23000, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Awareness",
            type: "tactic",
            num: "(6)",
            sourceTop: true,
        }
    },
    {
        id: "increase-user-surprise-2",
        type: "oval",
        position: {x: 23500, y: 2700},
        data: {
            isHidden: false,
            label: "Increase_User_Surprise",
            type: "tactic",
            num: "(2)",
            sourceTop: true,
        }
    },

    {
        id: "fast-design-5",
        type: "oval",
        position: {x: 23900, y: 2700},
        data: {
            isHidden: false,
            label: "Fast_Design",
            type: "tactic",
            num: "(5)",
            sourceTop: true,
        }
    },
    {
        id: "low-cost-design-5",
        type: "oval",
        position: {x: 24500, y: 2700},
        data: {
            isHidden: false,
            label: "Low_Cost_Design",
            type: "tactic",
            num: "(5)",
            sourceTop: true,
        }
    },
    {
        id: "high-design-quality-5",
        type: "oval",
        position: {x: 25100, y: 2700},
        data: {
            isHidden: false,
            label: "High_Design_Quality",
            type: "tactic",
            num: "(5)",
            sourceTop: true,
        }
    },
    {
        id: "improve-minor-assistance",
        type: "oval",
        position: {x: 25500, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_Minor_Assistance",
            type: "tactic",
            num: "(1)",
            sourceTop: true,
            left: true,
            sourceLeft:true,
        }
    },

    {
        id: "set-basic-training",
        type: "gamification",
        position: {x: 25900, y: 800},
        data: {
            label: "Set_Basic_Training",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "set-basic-training-and",
        type: "operator",
        position: {x: 25995, y: 950},
        data: {
            label: "AND",
        },
    },

    {
        id: "set-community-3",
        type: "gamification",
        position: {x: 22100, y: 1200},
        data: {
            label: "Set_Community",
            num:"(3)"
        },
    },
    // choose-training-elements
    {
        id: "choose-training-elements",
        type: "gamification",
        position: {x: 23500, y: 1200},
        data: {
            label: "Choose_Training_Elements",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // provide forum
    {
        id: "provide-forum",
        conditions: "C23 OR C30 OR C2 OR C5 OR C3 OR C4",
        parentId: "choose-training-elements",
        type: "gamification",
        position: {x: 22500, y: 1450},
        data: {
            label: "Provide_Forum",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // provide-suggestions, provide-tricks, provide-tours, provide-tutorials
    {
        id: "provide-suggestions",
        conditions: "(C1 OR C5 OR C4) AND C16",
        parentId: "choose-training-elements",
        type: "gamification",
        position: {x: 23000, y: 1650},
        data: {
            label: "Provide_Suggestions",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "provide-tricks",
        conditions: "C1 OR C36 OR C5",
        parentId: "choose-training-elements",
        type: "gamification",
        position: {x: 23500, y: 1550},
        data: {
            label: "Provide_Tricks",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "provide-tours",
        conditions: "C1 OR C5 OR C4",
        parentId: "choose-training-elements",
        type: "gamification",
        position: {x: 24000, y: 1650},
        data: {
            label: "Provide_Tours",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "provide-tutorials",
        conditions: "(C1 OR C5 OR C19 OR C24 OR C25 OR C26) AND (C16 AND (NOT C28))",
        type: "gamification",
        position: {x: 24500, y: 1350},
        data: {
            label: "Provide_Tutorials",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "choose-presentation-elements",
        type: "gamification",
        position: {x: 25250, y: 1200},
        data: {
            label: "Choose_Presentation_Elements",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // choose-presentation-elements children: set-basic-elements, set-avatar-trainer
    {
        id: "set-basic-elements",
        type: "gamification",
        position: {x: 25000, y: 1450},
        data: {
            label: "Set_Basic_Elements",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "set-avatar-trainer",
        type: "gamification",
        position: {x: 25500, y: 1450},
        data: {
            label: "Set_Avatar_Trainer",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
            left:true,
        },
    },
    {
        id: "choose-training-topics",
        type: "gamification",
        position: {x: 26500, y: 1200},
        data: {
            label: "Choose_Training_Topics",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // choose-training-topics children: minimal-system-features, entire-system-procedures, advantage-vs-competitor-systems
    {
        id: "minimal-system-features",
        type: "gamification",
        position: {x: 26000, y: 1450},
        data: {
            label: "Minimal_System_Features",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "entire-system-procedures",
        type: "gamification",
        position: {x: 26500, y: 1450},
        data: {
            label: "Entire_System_Procedures",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "advantage-vs-competitor-systems",
        conditions: "C12",
        parentId: "choose-training-topics",
        type: "gamification",
        position: {x: 27000, y: 1450},
        data: {
            label: "Advantage_vs_Competitor_Systems",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "define-strategy",
        type: "gamification",
        position: {x: 27750, y: 1200},
        data: {
            label: "Define_Strategy",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // define-strategy children: train-before-playing, train-during-playing
    {
        id: "train-before-playing",
        type: "gamification",
        position: {x: 27500, y: 1450},
        data: {
            label: "Train_Before_Playing",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "train-during-playing",
        type: "gamification",
        position: {x: 28000, y: 1450},
        data: {
            label: "Train_During_Playing",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // training-rewards-by-point-systems
    {
        id: "training-rewards-by-point-systems",
        type: "gamification",
        position: {x: 28500, y: 1450},
        data: {
            label: "Training_Rewards_by_Point_Systems",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
            left:true,
        },
    },
    // training-rewards-by-point-systems child: use-skill-points
    {
        id: "use-skill-points-2",
        type: "gamification",
        position: {x: 28300, y: 1600},
        data: {
            label: "Use_Skill_Points",
            num: "(2)",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // by-badges, by-other-achievements
    {
        id: "by-badges",
        type: "gamification",
        position: {x: 29000, y: 1450},
        data: {
            label: "By_Badges",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // set-badges
    {
        id: "set-badges-2",
        type: "gamification",
        position: {x: 28800, y: 1600},
        data: {
            label: "Set_Badges",
            num: "(2)",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "by-other-achievements-6",
        type: "gamification",
        position: {x: 29500, y: 1450},
        data: {
            label: "By_Other_Achievements",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    //set-advanced-training
    {
        id: "set-advanced-training",
        type: "gamification",
        position: {x: 29500, y: 800},
        data: {
            label: "Set_Advanced_Training",
            num: "(1)",
            left: true,
            bottom: true,
        },
    },
    // set-rewards
    {
        id: "set-rewards-3",
        type: "gamification",
        position: {x: 29000, y: 1300},
        data: {
            label: "Set_Rewards",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // define-training-paths
    {
        id: "define-training-paths",
        conditions: "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26 OR C29 OR C30) AND (C16 AND (NOT C28))",
        parentId: "set-advanced-training",
        type: "gamification",
        position: {x: 29980, y: 1300},
        data: {
            label: "Define_Training_Paths",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    {
        id: "set-game-structure-2",
        type: "gamification",
        position: {x: 30000, y: 1450},
        data: {
            label: "Set_Game_Structure",
            num: "(2)",
            sourceRight: true,
            sourceTop: true,
            right: true,
            bottom: true,
        },
    },
    // set-gamified-training-elements is between set-basic-training and set-advanced-training but above them
    {
        id: "set-gamified-training-elements",
        type: "gamification",
        position: {x: 27700, y: 600},
        data: {
            label: "Set_Gamified_Training_Elements",
            sourceLeft: true,
            sourceRight: true
        },
    },
    {
        id: "improve-system-advantage-perception-vs-competitor-systems-via-it",
        type: "oval",
        position: {x: 27000, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Advantage_Perception_vs_Competitor_Systems_via_IT",
            type: "tactic",
            width: 450,
            height: 100,
            num: "(1)",
            sourceTop: true,
        }
    },
    // improve-system-perception is above them
    {
        id: "improve-system-perception",
        type: "oval",
        position: {x: 27750, y: 2500},
        data: {
            isHidden: false,
            label: "Improve_System_Perception",
            type: "tactic",
        }
    },

    // improve-system-perception-by-humans, improve-system-perception-by-it, improve-system-awareness, support-skill-improvement
    {
        id: "improve-system-perception-by-humans",
        type: "oval",
        position: {x: 27500, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Perception_by_Humans",
            type: "tactic",
            width: 350,
            sourceTop: true,
        }
    },
    {
        id: "improve-system-perception-via-it",
        type: "oval",
        position: {x: 28000, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Perception_via_IT",
            num: "(1)",
            type: "tactic",
            sourceTop: true,
        }
    },
    {
        id: "improve-system-awareness",
        type: "oval",
        position: {x: 28500, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_System_Awareness",
            num: "(1)",
            type: "tactic",
            sourceTop: true,
            bottom: true,
        }
    },
    {
        id: "support-skill-improvement-2",
        type: "oval",
        position: {x: 29000, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Skill_Improvement",
            num: "(2)",
            type: "tactic",
            bottom: true,
            right: true,
        }
    },
    // between improve-system-awareness and support-skill-improvement-2, there is improve-system-loyalty under them
    {
        id: "improve-system-loyalty-2",
        type: "oval",
        position: {x: 28750, y: 2900},
        data: {
            isHidden: false,
            label: "Improve_System_Loyalty",
            num: "(2)",
            type: "tactic",
            sourceRight: true,
            sourceLeft: true,
            sourceTop: true,
        }
    },

    // set-add-friend
    {
        id: "set-add-friend",
        type: "gamification",
        position: {x: 30500, y: 700},
        data: {
            label: "Set_Add_Friend",
        },
    },
    // set-remove-friend, set-friendship-suggestion
    {
        id: "set-remove-friend",
        type: "gamification",
        position: {x: 31000, y: 700},
        data: {
            label: "Set_Remove_Friend",
        },
    },
    {
        id: "set-friendship-suggestions",
        type: "gamification",
        position: {x: 31500, y: 700},
        data: {
            label: "Set_Friendship_Suggestions",
        },
    },
    // set-friendship-suggestion children: system-suggests-friendship, user-suggests-friendship-to-a-user
    {
        id: "system-suggests-friendship",
        type: "gamification",
        position: {x: 31250, y: 950},
        data: {
            label: "System_Suggests_Friendship",
        },
    },
    {
        id: "user-suggests-friendship-to-a-user",
        type: "gamification",
        position: {x: 31750, y: 950},
        data: {
            label: "User_Suggests_Friendship_to_a_User",
        },
    },

    // set-activity-suggestions is between them and above
    {
        id: "set-activity-suggestions",
        type: "gamification",
        position: {x: 32250, y: 700},
        data: {
            label: "Set_Activity_Suggestions",
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },
    // system-suggest-an-event, user-suggests-to-a-user
    {
        id: "system-suggests-an-event",
        type: "gamification",
        position: {x: 32000, y: 950},
        data: {
            label: "System_Suggests_an_Event",
        },
    },
    {
        id: "user-suggests-to-a-user",
        conditions: "C23 OR C30 OR C32",
        parentId: "set-activity-suggestions",
        type: "gamification",
        position: {x: 32570, y: 950},
        data: {
            label: "User_Suggests_to_a_User",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    // user-suggests-to-a-user children: to-participate-to-an-event, to-carry-out-an-activity
    {
        id: "to-participate-to-an-event",
        type: "gamification",
        position: {x: 32300, y: 1200},
        data: {
            label: "To_Participate_to_an_Event",
        },
    },
    {
        id: "to-carry-out-an-activity",
        type: "gamification",
        position: {x: 32800, y: 1200},
        data: {
            label: "To_Carry_out_an_Activity",
        },
    },

    // set-community is above them
    {
        id: "set-community",
        conditions: "C2 OR C3 OR C4 OR C23 OR C30 OR C32",
        parentId: "set-virtual-environments",
        type: "gamification",
        position: {x: 31500, y: 500},
        data: {
            label: "Set_Community",
            num: "(1)",
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        },
    },

    {
        id: "add-rewards",
        type: "gamification",
        position: {x: 33750, y: 600},
        data: {
            label: "Add_Rewards",
            sourceRight: true,
            sourceLeft: true,
            right:true,
        },
    },

    {
        id: "add-virtual-rewards",
        conditions: "C32 OR C34",
        parentId: "add-rewards",
        type: "gamification",
        position: {x: 33150, y: 950},
        data: {
            label: "Add_Virtual_Rewards",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "add-tangible-rewards",
        conditions: "C32 OR C34",
        parentId: "add-rewards",
        type: "gamification",
        position: {x: 33750, y: 1100},
        data: {
            label: "Add_Tangible_Rewards",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "add-unlockable-powers",
        conditions: "C1 OR C5 OR C36 OR C32",
        parentId: "add-rewards",
        type: "gamification",
        position: {x: 34350, y: 950},
        data: {
            label: "Add_Unlockable_Powers",
            sourceRight: true,
            sourceLeft: true,
            left: true,
            right: true
        },
    },
    // add-unlockable-power-and
    {
        id: "add-unlockable-powers-and",
        type: "operator",
        position: {x: 34450, y: 1100},
        data: {
            label: "AND",
        },
    },
    // set-gamifiable-actions
    {
        id: "set-gamifiable-actions-5",
        type: "gamification",
        position: {x: 33800, y: 1350},
        data: {
            label: "Set_Gamifiable_Actions",
            num: "(5)",
            sourceRight: true,
        },
    },
    // his children: choose-unlockable-actions, create-new-powers
    {
        id: "choose-unlockable-actions",
        type: "gamification",
        position: {x: 34200, y: 1350},
        data: {
            label: "Choose_Unlockable_Actions",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "create-new-powers",
        type: "gamification",
        position: {x: 34700, y: 1350},
        data: {
            label: "Create_New_Powers",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    // set-as-unlockable-2
    {
        id: "set-as-unlockable-2",
        type: "gamification",
        position: {x: 35000, y: 1350},
        data: {
            label: "Set_as_Unlockable",
            num: "(2)",
            sourceTop: true,
        },
    },
    // create-new-powers-and
    {
        id: "create-new-powers-and",
        type: "operator",
        position: {x: 34800, y: 1550},
        data: {
            label: "AND",
        },
    },
    // his children: set-power-names, link-powers-to-unlockable-actions
    {
        id: "set-power-names",
        type: "gamification",
        position: {x: 34400, y: 1650},
        data: {
            label: "Set_Power_Names",
        },
    },
    {
        id: "link-powers-to-unlockable-actions",
        type: "gamification",
        position: {x: 35000, y: 1650},
        data: {
            label: "Link_Powers_to_Unlockable_Actions",
        },
    },

    {
        id: "set-gamified-market",
        type: "gamification",
        position: {x: 35750, y: 450},
        data: {
            label: "Set_Gamified_Market",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    // set-gamified-market-and
    {
        id: "set-gamified-market-and",
        type: "operator",
        position: {x: 35845, y: 600},
        data: {
            label: "AND",
        },
    },

    {
        id: "set-market-policies",
        type: "gamification",
        position: {x: 36750, y: 600},
        data: {
            label: "Set_Market_Policies",
            sourceRight: true,
            sourceLeft: true,
            right:true,
        },
    },
    // set-market-policies children: set-redeeming-policy, set-making-gift-policy, set-purchase-policy
    {
        id: "set-redeeming-policy",
        conditions: "C1 OR C5 OR C32 OR C34",
        parentId: "set-market-policies",
        type: "gamification",
        position: {x: 35850, y: 900},
        data: {
            label: "Set_Redeeming_Policy",
            left: true,
            sourceLeft:true,
        },
    },
    {
        id: "set-making-gift-policy",
        conditions: "(C2 OR C3 OR C4) AND (NOT C36)",
        parentId: "set-market-policies",
        type: "gamification",
        position: {x: 36850, y: 900},
        data: {
            label: "Set_Making_Gift_Policy",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "set-purchase-policy",
        type: "gamification",
        position: {x: 38000, y: 900},
        data: {
            label: "Set_Purchase_Policy",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "set-purchase-policy-and",
        type: "operator",
        position: {x: 38100, y: 1125},
        data: {
            label: "AND",
        },
    },

    {
        id: "rp-by-points",
        type: "gamification",
        position: {x: 35850, y: 1350},
        data: {
            label: "RP_By_Points",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },

    {
        id: "rp-define-exchange-points-rewards",
        type: "gamification",
        position: {x: 35850, y: 1650},
        data: {
            label: "RP_Define_Exchange_Points_Rewards",
            num: "(1)",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },
    {
        id: "use-redeemable-points-2",
        type: "gamification",
        position: {x: 35750, y: 1950},
        data: {
            label: "Use_Redeemable_Points",
            num: "(2)",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },

    {
        id: "gp-by-points",
        type: "gamification",
        position: {x: 36850, y: 1350},
        data: {
            label: "GP_By_Points",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },

    {
        id: "gp-define-exchange-points-rewards",
        type: "gamification",
        position: {x: 36850, y: 1650},
        data: {
            label: "GP_Define_Exchange_Points_Rewards",
            num: "(1)",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },
    {
        id: "use-karma-points-2",
        type: "gamification",
        position: {x: 36950, y: 1950},
        data: {
            label: "Use_Redeemable_Points",
            num: "(2)",
            sourceTop: true,
            top : true,
            bottom: true,
        },
    },
    {
        id: "set-payment-system",
        type: "gamification",
        position: {x: 37500, y: 1350},
        data: {
            label: "Set_Payment_System",
            right: true,
        },
    },
    {
        id: "define-currency",
        type: "gamification",
        position: {x: 38500, y: 1350},
        data: {
            label: "Define_Currency",
            left: true,
            bottom: true,
        },
    },
    {
        id: "define-virtual-currency",
        type: "gamification",
        position: {x: 38000, y: 1650},
        data: {
            label: "Define_Virtual_Currency",
            sourceTop: true,
            top : true,
            bottom: true,
            right: true,
        },
    },
    {
        id: "define-virtual-currency-and",
        type: "operator",
        position: {x: 38100, y: 1850},
        data: {
            label: "AND",
        },
    },
    {
        id: "by-money",
        type: "gamification",
        position: {x: 39000, y: 1650},
        data: {
            label: "By_Money",
            sourceTop: true,
            sourceLeft: true,
            sourceRight: true,
            top : true,
            bottom: true,
            right: true,
            left: true,
        },
    },

    {
        id: "define-exchange-money-currency",
        type: "gamification",
        position: {x: 37750, y: 1950},
        data: {
            label: "Define_Exchange_Money_Currency",
            sourceTop: true,
            top : true,
        },
    },
    {
        id: "define-exchange-currency-rewards",
        type: "gamification",
        position: {x: 38250, y: 1950},
        data: {
            label: "Define_Exchange_Currency_Rewards",
            sourceTop: true,
            top : true,
        },
    },
    {
        id: "define-exchange-money-rewards",
        type: "gamification",
        position: {x: 39000, y: 1950},
        data: {
            label: "Define_Exchange_Money_Rewards",
            sourceTop: true,
            top : true,
        },
    },
    {
        id: "set-supporting-systems",
        type: "gamification",
        position: {x: 38500, y: 150},
        data: {label: "Set_Supporting_Systems"},
        bottom: true,
        right: true,
        draggable: false
    },
    {
        id: "set-monitoring-system",
        type: "gamification",
        position: {x: 38100, y: 450},
        data: {
            label: "Set_Monitoring_System",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "set-analyzing-system",
        type: "gamification",
        position: {x: 38500, y: 450},
        data: {
            label: "Set_Analyzing_System",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "set-adaptation-system",
        type: "gamification",
        position: {x: 38900, y: 450},
        data: {
            label: "Set_Adaptation_System",
            sourceRight: true,
            sourceLeft: true,
        },
    },
    {
        id: "set-experience-points-system-2",
        type: "gamification",
        position: {x: 38900, y:  600},
        data: {
            label: "Set_Experience_Points_System",
            num: "(2)",
            sourceRight: true,
            sourceLeft: true,

        },
    },
    {
        id: "promote-collaboration-5",
        type: "oval",
        position: {x: 32800, y: 2700},
        data: {
            isHidden: false,
            label: "Promote_Collaboration",
            num: "(5)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "support-achievement-3",
        type: "oval",
        position: {x: 34000, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Achievement",
            num: "(3)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "improve-perceived-status-3",
        type: "oval",
        position: {x: 34500, y: 2700},
        data: {
            isHidden: false,
            label: "Improve_Perceivd_Status",
            num: "(3)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "support-social-behavior-4",
        type: "oval",
        position: {x: 35000, y: 2700},
        data: {
            isHidden: false,
            label: "Support_Social_Behavior",
            num: "(4)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "promote-altruistic-behavior-2",
        type: "oval",
        position: {x: 35500, y: 2700},
        data: {
            isHidden: false,
            label: "Promote_Altruistic_Behavior",
            num: "(2)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "increase-profit",
        type: "oval",
        position: {x: 36000, y: 2700},
        data: {
            isHidden: false,
            label: "Increase_Profit",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
    {
        id: "increase-worth-vagueness-2",
        type: "oval",
        position: {x: 36500, y: 2700},
        data: {
            isHidden: false,
            label: "Increase_Worth_Vagues",
            num: "(2)",
            type: "tactic",
            bottom: true,
            right: true,
            sourceLeft: true,
            sourceRight: true,
            sourceTop: true,
        }
    },
];

export const PhaseFiveTreeDS = [
    {
        "id": "design-gamification",
        "type": "gamification",
        "position": {
            "x": 2200,
            "y": -500
        },
        "data": {
            "label": "Design_Gamification",
            "top": "no"
        },
        "children": [
            {
                "id": "design-gamification-and",
                "type": "operator",
                "position": {
                    "x": 2294,
                    "y": -300
                },
                "data": {
                    "label": "AND"
                },
                "parentId": "design-gamification",
                "children": [
                    {
                        "id": "set-roles",
                        "type": "gamification",
                        "position": {
                            "x": -8500,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Roles",
                            "right": true
                        },
                        "parentId": "design-gamification-and",
                        "children": [
                            {
                                "id": "set-single-roles",
                                "type": "gamification",
                                "position": {
                                    "x": -9000,
                                    "y": 550
                                },
                                "data": {
                                    "label": "Set_Single_Roles",
                                    "num": "(1)"
                                },
                                "parentId": "set-roles",
                                "children": null
                            },
                            {
                                "id": "set-team-roles",
                                "conditions": "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
                                "parentId": "set-roles",
                                "type": "gamification",
                                "position": {
                                    "x": -8000,
                                    "y": 550
                                },
                                "data": {
                                    "label": "Set_Team_Roles",
                                    "num": "(1)"
                                },
                                "children": null
                            }
                        ]
                    },
                    {
                        "id": "set-gamifiable-actions",
                        "type": "gamification",
                        "position": {
                            "x": -6965,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Gamifiable_Actions",
                            "sourceRight": true,
                            "num": "(1)"
                        },
                        "parentId": "design-gamification-and",
                        "children": [
                            {
                                "id": "set-gamifiable-actions-and",
                                "type": "operator",
                                "position": {
                                    "x": -6870,
                                    "y": 300
                                },
                                "data": {
                                    "label": "AND"
                                },
                                "parentId": "set-gamifiable-actions",
                                "children": [
                                    {
                                        "id": "set-kinds",
                                        "type": "gamification",
                                        "position": {
                                            "x": -6800,
                                            "y": 450
                                        },
                                        "data": {
                                            "label": "Set_Kinds"
                                        },
                                        "parentId": "set-gamifiable-actions-and",
                                        "children": [
                                            {
                                                "id": "set-as-directly-unlocked",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -6900,
                                                    "y": 650
                                                },
                                                "data": {
                                                    "label": "Set_As_Directly_Unlocked",
                                                    "sourceRight": true
                                                },
                                                "parentId": "set-kinds",
                                                "children": null
                                            },
                                            {
                                                "id": "set-as-unlockable",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -6500,
                                                    "y": 650
                                                },
                                                "data": {
                                                    "label": "Set_As_Unlockable",
                                                    "num": "(1)"
                                                },
                                                "parentId": "set-kinds",
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "choose-gamifiable-actions",
                                        "type": "gamification",
                                        "position": {
                                            "x": -7100,
                                            "y": 450
                                        },
                                        "data": {
                                            "label": "Choose_Gamifiable_Actions"
                                        },
                                        "parentId": "set-gamifiable-actions-and",
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "set-experience-points-system",
                                "type": "gamification",
                                "position": {
                                    "x": -5500,
                                    "y": 150
                                },
                                "data": {
                                    "label": "Set_Experience_Points_System",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true,
                                    "num": "(1)"
                                },
                                "parentId": "set-gamifiable-actions",
                                "children": [
                                    {
                                        "id": "set-experience-points-system-and",
                                        "type": "operator",
                                        "position": {
                                            "x": -5400,
                                            "y": 350
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-experience-points-system",
                                        "children": [
                                            {
                                                "id": "select-gamifiable-actions",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -5900,
                                                    "y": 600
                                                },
                                                "data": {
                                                    "label": "Select_Gamifiable_Actions"
                                                },
                                                "parentId": "set-experience-points-system-and",
                                                "children": null
                                            },
                                            {
                                                "id": "assign-points-to-gamifiable-actions",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -5500,
                                                    "y": 600
                                                },
                                                "data": {
                                                    "label": "Assign_Points_to_Gamifiable_Actions"
                                                },
                                                "parentId": "set-experience-points-system-and",
                                                "children": [
                                                    {
                                                        "id": "set-same-points-to-each-action",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -5700,
                                                            "y": 850
                                                        },
                                                        "data": {
                                                            "label": "Set_Same_Points_To_Each_Action",
                                                            "sourceRight": true
                                                        },
                                                        "parentId": "assign-points-to-gamifiable-actions",
                                                        "children": [
                                                            {
                                                                "id": "define-metric",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -5300,
                                                                    "y": 850
                                                                },
                                                                "data": {
                                                                    "label": "Define_Metric",
                                                                    "left": true
                                                                },
                                                                "parentId": "set-same-points-to-each-action",
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "define-metric",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -5300,
                                                            "y": 850
                                                        },
                                                        "data": {
                                                            "label": "Define_Metric",
                                                            "left": true
                                                        },
                                                        "parentId": "assign-points-to-gamifiable-actions",
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "set-expiration-time",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -5000,
                                                    "y": 600
                                                },
                                                "data": {
                                                    "label": "Set_Expiration_Time"
                                                },
                                                "parentId": "set-experience-points-system-and",
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "set-experience-points-system",
                        "type": "gamification",
                        "position": {
                            "x": -5500,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Experience_Points_System",
                            "right": true,
                            "left": true,
                            "bottom": true,
                            "sourceLeft": true,
                            "sourceRight": true,
                            "sourceTop": true,
                            "num": "(1)"
                        },
                        "parentId": "design-gamification-and",
                        "children": [
                            {
                                "id": "set-experience-points-system-and",
                                "type": "operator",
                                "position": {
                                    "x": -5400,
                                    "y": 350
                                },
                                "data": {
                                    "label": "AND"
                                },
                                "parentId": "set-experience-points-system",
                                "children": [
                                    {
                                        "id": "select-gamifiable-actions",
                                        "type": "gamification",
                                        "position": {
                                            "x": -5900,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "Select_Gamifiable_Actions"
                                        },
                                        "parentId": "set-experience-points-system-and",
                                        "children": null
                                    },
                                    {
                                        "id": "assign-points-to-gamifiable-actions",
                                        "type": "gamification",
                                        "position": {
                                            "x": -5500,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "Assign_Points_to_Gamifiable_Actions"
                                        },
                                        "parentId": "set-experience-points-system-and",
                                        "children": [
                                            {
                                                "id": "set-same-points-to-each-action",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -5700,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Set_Same_Points_To_Each_Action",
                                                    "sourceRight": true
                                                },
                                                "parentId": "assign-points-to-gamifiable-actions",
                                                "children": [
                                                    {
                                                        "id": "define-metric",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -5300,
                                                            "y": 850
                                                        },
                                                        "data": {
                                                            "label": "Define_Metric",
                                                            "left": true
                                                        },
                                                        "parentId": "set-same-points-to-each-action",
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "define-metric",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -5300,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Define_Metric",
                                                    "left": true
                                                },
                                                "parentId": "assign-points-to-gamifiable-actions",
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "set-expiration-time",
                                        "type": "gamification",
                                        "position": {
                                            "x": -5000,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "Set_Expiration_Time"
                                        },
                                        "parentId": "set-experience-points-system-and",
                                        "children": null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "set-game-mechanics-and-dynamics",
                        "type": "gamification",
                        "position": {
                            "x": 4000,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Game_Mechanics_and_Dynamics",
                            "num": "(1)",
                            "sourceRight": true,
                            "sourceLeft": true
                        },
                        "parentId": "design-gamification-and",
                        "children": [
                            {
                                "id": "set-game-structure",
                                "conditions": "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26) AND (NOT C28)",
                                "parentId": "set-game-mechanics-and-dynamics",
                                "type": "gamification",
                                "position": {
                                    "x": -4000,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Game_Structure",
                                    "num": "(1)",
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true,
                                    "top": true
                                },
                                "children": [
                                    {
                                        "id": "set-game-structure-and",
                                        "type": "operator",
                                        "position": {
                                            "x": -3900,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-game-structure",
                                        "children": [
                                            {
                                                "id": "set-paths",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -4600,
                                                    "y": 750
                                                },
                                                "data": {
                                                    "label": "Set_Paths",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-game-structure-and",
                                                "children": [
                                                    {
                                                        "id": "set-paths-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": -4500,
                                                            "y": 900
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "set-paths",
                                                        "children": [
                                                            {
                                                                "id": "define-paths",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -4900,
                                                                    "y": 1000
                                                                },
                                                                "data": {
                                                                    "label": "Define_Paths"
                                                                },
                                                                "parentId": "set-paths-and",
                                                                "children": [
                                                                    {
                                                                        "id": "define-parallel-paths",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -5150,
                                                                            "y": 1200
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Parallel_Paths"
                                                                        },
                                                                        "parentId": "define-paths",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "define-tree-paths",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -4900,
                                                                            "y": 1200
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Tree_Paths"
                                                                        },
                                                                        "parentId": "define-paths",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "define-graph-paths",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -4650,
                                                                            "y": 1150
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Graph_Paths"
                                                                        },
                                                                        "parentId": "define-paths",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "link-roles-to-path",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -4200,
                                                                    "y": 1000
                                                                },
                                                                "data": {
                                                                    "label": "Link_Roles_to_Path"
                                                                },
                                                                "parentId": "set-paths-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-roles",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -8500,
                                                                            "y": 150
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Roles",
                                                                            "right": true
                                                                        },
                                                                        "parentId": "link-roles-to-path",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-single-roles",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -9000,
                                                                                    "y": 550
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Single_Roles",
                                                                                    "num": "(1)"
                                                                                },
                                                                                "parentId": "set-roles",
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "set-team-roles",
                                                                                "conditions": "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
                                                                                "parentId": "set-roles",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -8000,
                                                                                    "y": 550
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Team_Roles",
                                                                                    "num": "(1)"
                                                                                },
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "set-levels",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -3600,
                                                            "y": 750
                                                        },
                                                        "data": {
                                                            "label": "Set_Levels",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "parentId": "set-paths",
                                                        "children": [
                                                            {
                                                                "id": "set-levels-and",
                                                                "type": "operator",
                                                                "position": {
                                                                    "x": -3500,
                                                                    "y": 900
                                                                },
                                                                "data": {
                                                                    "label": "AND"
                                                                },
                                                                "parentId": "set-levels",
                                                                "children": [
                                                                    {
                                                                        "id": "choose-level-names",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3800,
                                                                            "y": 1050
                                                                        },
                                                                        "data": {
                                                                            "label": "Choose_Level_Names"
                                                                        },
                                                                        "parentId": "set-levels-and",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "set-achievement-rule",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3500,
                                                                            "y": 1050
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Achievement_Rule"
                                                                        },
                                                                        "parentId": "set-levels-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "by-gamifiable-actions",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -3750,
                                                                                    "y": 1300
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Gamifiable_Actions"
                                                                                },
                                                                                "parentId": "set-achievement-rule",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-gamifiable-actions-2",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -4000,
                                                                                            "y": 1450
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Gamifiable_Actions",
                                                                                            "num": "(2)"
                                                                                        },
                                                                                        "parentId": "by-gamifiable-actions",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "by-points",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -3500,
                                                                                    "y": 1300
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Points"
                                                                                },
                                                                                "parentId": "set-achievement-rule",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "by-points-and",
                                                                                        "type": "operator",
                                                                                        "position": {
                                                                                            "x": -3400,
                                                                                            "y": 1450
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "AND"
                                                                                        },
                                                                                        "parentId": "by-points",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "set-thresholds",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -3600,
                                                                                                    "y": 1600
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Set_Thresholds"
                                                                                                },
                                                                                                "parentId": "by-points-and",
                                                                                                "children": null
                                                                                            },
                                                                                            {
                                                                                                "id": "choose-point-kinds",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -3300,
                                                                                                    "y": 1600
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Choose_Point_Kinds"
                                                                                                },
                                                                                                "parentId": "by-points-and",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "choose-experience-points",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -3450,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Choose_Experience_Points",
                                                                                                            "sourceLeft": true
                                                                                                        },
                                                                                                        "parentId": "choose-point-kinds",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "set-experience-points-system",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -5500,
                                                                                                                    "y": 150
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Set_Experience_Points_System",
                                                                                                                    "right": true,
                                                                                                                    "left": true,
                                                                                                                    "bottom": true,
                                                                                                                    "sourceLeft": true,
                                                                                                                    "sourceRight": true,
                                                                                                                    "sourceTop": true,
                                                                                                                    "num": "(1)"
                                                                                                                },
                                                                                                                "parentId": "choose-experience-points",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "set-experience-points-system-and",
                                                                                                                        "type": "operator",
                                                                                                                        "position": {
                                                                                                                            "x": -5400,
                                                                                                                            "y": 350
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "AND"
                                                                                                                        },
                                                                                                                        "parentId": "set-experience-points-system",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "id": "select-gamifiable-actions",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -5900,
                                                                                                                                    "y": 600
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Select_Gamifiable_Actions"
                                                                                                                                },
                                                                                                                                "parentId": "set-experience-points-system-and",
                                                                                                                                "children": null
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "id": "assign-points-to-gamifiable-actions",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -5500,
                                                                                                                                    "y": 600
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Assign_Points_to_Gamifiable_Actions"
                                                                                                                                },
                                                                                                                                "parentId": "set-experience-points-system-and",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "id": "set-same-points-to-each-action",
                                                                                                                                        "type": "gamification",
                                                                                                                                        "position": {
                                                                                                                                            "x": -5700,
                                                                                                                                            "y": 850
                                                                                                                                        },
                                                                                                                                        "data": {
                                                                                                                                            "label": "Set_Same_Points_To_Each_Action",
                                                                                                                                            "sourceRight": true
                                                                                                                                        },
                                                                                                                                        "parentId": "assign-points-to-gamifiable-actions",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "id": "define-metric",
                                                                                                                                                "type": "gamification",
                                                                                                                                                "position": {
                                                                                                                                                    "x": -5300,
                                                                                                                                                    "y": 850
                                                                                                                                                },
                                                                                                                                                "data": {
                                                                                                                                                    "label": "Define_Metric",
                                                                                                                                                    "left": true
                                                                                                                                                },
                                                                                                                                                "parentId": "set-same-points-to-each-action",
                                                                                                                                                "children": null
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "id": "define-metric",
                                                                                                                                        "type": "gamification",
                                                                                                                                        "position": {
                                                                                                                                            "x": -5300,
                                                                                                                                            "y": 850
                                                                                                                                        },
                                                                                                                                        "data": {
                                                                                                                                            "label": "Define_Metric",
                                                                                                                                            "left": true
                                                                                                                                        },
                                                                                                                                        "parentId": "assign-points-to-gamifiable-actions",
                                                                                                                                        "children": null
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "id": "set-expiration-time",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -5000,
                                                                                                                                    "y": 600
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Set_Expiration_Time"
                                                                                                                                },
                                                                                                                                "parentId": "set-experience-points-system-and",
                                                                                                                                "children": null
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "id": "choose-other-kinds",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -3150,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Choose_Other_Kinds"
                                                                                                        },
                                                                                                        "parentId": "choose-point-kinds",
                                                                                                        "children": null
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "by-other-achievements",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -3250,
                                                                                    "y": 1300
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Other_Achievements",
                                                                                    "right": true
                                                                                },
                                                                                "parentId": "set-achievement-rule",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "link-levels-to-paths",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3200,
                                                                            "y": 1050
                                                                        },
                                                                        "data": {
                                                                            "label": "Link_Levels_to_Paths"
                                                                        },
                                                                        "parentId": "set-levels-and",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "define-difficulty-among-levels",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -2700,
                                                                            "y": 1050
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Difficulty_Among_Levels"
                                                                        },
                                                                        "parentId": "set-levels-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "use-linear-difficulty-progression",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -2950,
                                                                                    "y": 1250
                                                                                },
                                                                                "data": {
                                                                                    "label": "Use_Linear_Difficulty_Progression",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "define-difficulty-among-levels",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "use-alternated-difficulty",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -2500,
                                                                                            "y": 1250
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Alternated_Difficulty",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "use-linear-difficulty-progression",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "use-alternated-difficulty-and",
                                                                                                "type": "operator",
                                                                                                "position": {
                                                                                                    "x": -2400,
                                                                                                    "y": 1400
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "AND"
                                                                                                },
                                                                                                "parentId": "use-alternated-difficulty",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "define-main-trend",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -2600,
                                                                                                            "y": 1550
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Define_Main_Trend"
                                                                                                        },
                                                                                                        "parentId": "use-alternated-difficulty-and",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "use-increasing-difficulty",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -2600,
                                                                                                                    "y": 1700
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Use_Increasing_Difficulty"
                                                                                                                },
                                                                                                                "parentId": "define-main-trend",
                                                                                                                "children": null
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "id": "insert-alternated-difficulties",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -2200,
                                                                                                            "y": 1550
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Insert_Alternated_Difficulties"
                                                                                                        },
                                                                                                        "parentId": "use-alternated-difficulty-and",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "insert-alternated-difficulties-and",
                                                                                                                "type": "operator",
                                                                                                                "position": {
                                                                                                                    "x": -2100,
                                                                                                                    "y": 1700
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "AND"
                                                                                                                },
                                                                                                                "parentId": "insert-alternated-difficulties",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "choose-candidate-levels",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -2300,
                                                                                                                            "y": 1850
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Choose_Candidate_Levels"
                                                                                                                        },
                                                                                                                        "parentId": "insert-alternated-difficulties-and",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "insert-unexpected-difficulties",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -1900,
                                                                                                                            "y": 1850
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Insert_Unexpected_Difficulties"
                                                                                                                        },
                                                                                                                        "parentId": "insert-alternated-difficulties-and",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "id": "insert-positive-difficulties",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -2100,
                                                                                                                                    "y": 2000
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Insert_Positive_Difficulties"
                                                                                                                                },
                                                                                                                                "parentId": "insert-unexpected-difficulties",
                                                                                                                                "children": null
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "id": "insert-negative-difficulties",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -1700,
                                                                                                                                    "y": 2000
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Insert_Negative_Difficulties"
                                                                                                                                },
                                                                                                                                "parentId": "insert-unexpected-difficulties",
                                                                                                                                "children": null
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "use-alternated-difficulty",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -2500,
                                                                                    "y": 1250
                                                                                },
                                                                                "data": {
                                                                                    "label": "Use_Alternated_Difficulty",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "define-difficulty-among-levels",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "use-alternated-difficulty-and",
                                                                                        "type": "operator",
                                                                                        "position": {
                                                                                            "x": -2400,
                                                                                            "y": 1400
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "AND"
                                                                                        },
                                                                                        "parentId": "use-alternated-difficulty",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "define-main-trend",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -2600,
                                                                                                    "y": 1550
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Define_Main_Trend"
                                                                                                },
                                                                                                "parentId": "use-alternated-difficulty-and",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "use-increasing-difficulty",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -2600,
                                                                                                            "y": 1700
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Use_Increasing_Difficulty"
                                                                                                        },
                                                                                                        "parentId": "define-main-trend",
                                                                                                        "children": null
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                "id": "insert-alternated-difficulties",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -2200,
                                                                                                    "y": 1550
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Insert_Alternated_Difficulties"
                                                                                                },
                                                                                                "parentId": "use-alternated-difficulty-and",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "insert-alternated-difficulties-and",
                                                                                                        "type": "operator",
                                                                                                        "position": {
                                                                                                            "x": -2100,
                                                                                                            "y": 1700
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "AND"
                                                                                                        },
                                                                                                        "parentId": "insert-alternated-difficulties",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "choose-candidate-levels",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -2300,
                                                                                                                    "y": 1850
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Choose_Candidate_Levels"
                                                                                                                },
                                                                                                                "parentId": "insert-alternated-difficulties-and",
                                                                                                                "children": null
                                                                                                            },
                                                                                                            {
                                                                                                                "id": "insert-unexpected-difficulties",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -1900,
                                                                                                                    "y": 1850
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Insert_Unexpected_Difficulties"
                                                                                                                },
                                                                                                                "parentId": "insert-alternated-difficulties-and",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "insert-positive-difficulties",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -2100,
                                                                                                                            "y": 2000
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Insert_Positive_Difficulties"
                                                                                                                        },
                                                                                                                        "parentId": "insert-unexpected-difficulties",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "insert-negative-difficulties",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -1700,
                                                                                                                            "y": 2000
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Insert_Negative_Difficulties"
                                                                                                                        },
                                                                                                                        "parentId": "insert-unexpected-difficulties",
                                                                                                                        "children": null
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "set-levels",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -3600,
                                                    "y": 750
                                                },
                                                "data": {
                                                    "label": "Set_Levels",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-game-structure-and",
                                                "children": [
                                                    {
                                                        "id": "set-levels-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": -3500,
                                                            "y": 900
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "set-levels",
                                                        "children": [
                                                            {
                                                                "id": "choose-level-names",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -3800,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Choose_Level_Names"
                                                                },
                                                                "parentId": "set-levels-and",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "set-achievement-rule",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -3500,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Set_Achievement_Rule"
                                                                },
                                                                "parentId": "set-levels-and",
                                                                "children": [
                                                                    {
                                                                        "id": "by-gamifiable-actions",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3750,
                                                                            "y": 1300
                                                                        },
                                                                        "data": {
                                                                            "label": "By_Gamifiable_Actions"
                                                                        },
                                                                        "parentId": "set-achievement-rule",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-gamifiable-actions-2",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -4000,
                                                                                    "y": 1450
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Gamifiable_Actions",
                                                                                    "num": "(2)"
                                                                                },
                                                                                "parentId": "by-gamifiable-actions",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "by-points",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3500,
                                                                            "y": 1300
                                                                        },
                                                                        "data": {
                                                                            "label": "By_Points"
                                                                        },
                                                                        "parentId": "set-achievement-rule",
                                                                        "children": [
                                                                            {
                                                                                "id": "by-points-and",
                                                                                "type": "operator",
                                                                                "position": {
                                                                                    "x": -3400,
                                                                                    "y": 1450
                                                                                },
                                                                                "data": {
                                                                                    "label": "AND"
                                                                                },
                                                                                "parentId": "by-points",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-thresholds",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -3600,
                                                                                            "y": 1600
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Thresholds"
                                                                                        },
                                                                                        "parentId": "by-points-and",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "choose-point-kinds",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -3300,
                                                                                            "y": 1600
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Choose_Point_Kinds"
                                                                                        },
                                                                                        "parentId": "by-points-and",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "choose-experience-points",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -3450,
                                                                                                    "y": 1850
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Choose_Experience_Points",
                                                                                                    "sourceLeft": true
                                                                                                },
                                                                                                "parentId": "choose-point-kinds",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "set-experience-points-system",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -5500,
                                                                                                            "y": 150
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Set_Experience_Points_System",
                                                                                                            "right": true,
                                                                                                            "left": true,
                                                                                                            "bottom": true,
                                                                                                            "sourceLeft": true,
                                                                                                            "sourceRight": true,
                                                                                                            "sourceTop": true,
                                                                                                            "num": "(1)"
                                                                                                        },
                                                                                                        "parentId": "choose-experience-points",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "set-experience-points-system-and",
                                                                                                                "type": "operator",
                                                                                                                "position": {
                                                                                                                    "x": -5400,
                                                                                                                    "y": 350
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "AND"
                                                                                                                },
                                                                                                                "parentId": "set-experience-points-system",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "select-gamifiable-actions",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -5900,
                                                                                                                            "y": 600
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Select_Gamifiable_Actions"
                                                                                                                        },
                                                                                                                        "parentId": "set-experience-points-system-and",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "assign-points-to-gamifiable-actions",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -5500,
                                                                                                                            "y": 600
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Assign_Points_to_Gamifiable_Actions"
                                                                                                                        },
                                                                                                                        "parentId": "set-experience-points-system-and",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "id": "set-same-points-to-each-action",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -5700,
                                                                                                                                    "y": 850
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Set_Same_Points_To_Each_Action",
                                                                                                                                    "sourceRight": true
                                                                                                                                },
                                                                                                                                "parentId": "assign-points-to-gamifiable-actions",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "id": "define-metric",
                                                                                                                                        "type": "gamification",
                                                                                                                                        "position": {
                                                                                                                                            "x": -5300,
                                                                                                                                            "y": 850
                                                                                                                                        },
                                                                                                                                        "data": {
                                                                                                                                            "label": "Define_Metric",
                                                                                                                                            "left": true
                                                                                                                                        },
                                                                                                                                        "parentId": "set-same-points-to-each-action",
                                                                                                                                        "children": null
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "id": "define-metric",
                                                                                                                                "type": "gamification",
                                                                                                                                "position": {
                                                                                                                                    "x": -5300,
                                                                                                                                    "y": 850
                                                                                                                                },
                                                                                                                                "data": {
                                                                                                                                    "label": "Define_Metric",
                                                                                                                                    "left": true
                                                                                                                                },
                                                                                                                                "parentId": "assign-points-to-gamifiable-actions",
                                                                                                                                "children": null
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "set-expiration-time",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -5000,
                                                                                                                            "y": 600
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Set_Expiration_Time"
                                                                                                                        },
                                                                                                                        "parentId": "set-experience-points-system-and",
                                                                                                                        "children": null
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                "id": "choose-other-kinds",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -3150,
                                                                                                    "y": 1850
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Choose_Other_Kinds"
                                                                                                },
                                                                                                "parentId": "choose-point-kinds",
                                                                                                "children": null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "by-other-achievements",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -3250,
                                                                            "y": 1300
                                                                        },
                                                                        "data": {
                                                                            "label": "By_Other_Achievements",
                                                                            "right": true
                                                                        },
                                                                        "parentId": "set-achievement-rule",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "link-levels-to-paths",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -3200,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Link_Levels_to_Paths"
                                                                },
                                                                "parentId": "set-levels-and",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "define-difficulty-among-levels",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -2700,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Define_Difficulty_Among_Levels"
                                                                },
                                                                "parentId": "set-levels-and",
                                                                "children": [
                                                                    {
                                                                        "id": "use-linear-difficulty-progression",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -2950,
                                                                            "y": 1250
                                                                        },
                                                                        "data": {
                                                                            "label": "Use_Linear_Difficulty_Progression",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "define-difficulty-among-levels",
                                                                        "children": [
                                                                            {
                                                                                "id": "use-alternated-difficulty",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": -2500,
                                                                                    "y": 1250
                                                                                },
                                                                                "data": {
                                                                                    "label": "Use_Alternated_Difficulty",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "use-linear-difficulty-progression",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "use-alternated-difficulty-and",
                                                                                        "type": "operator",
                                                                                        "position": {
                                                                                            "x": -2400,
                                                                                            "y": 1400
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "AND"
                                                                                        },
                                                                                        "parentId": "use-alternated-difficulty",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "define-main-trend",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -2600,
                                                                                                    "y": 1550
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Define_Main_Trend"
                                                                                                },
                                                                                                "parentId": "use-alternated-difficulty-and",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "use-increasing-difficulty",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -2600,
                                                                                                            "y": 1700
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Use_Increasing_Difficulty"
                                                                                                        },
                                                                                                        "parentId": "define-main-trend",
                                                                                                        "children": null
                                                                                                    }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                "id": "insert-alternated-difficulties",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -2200,
                                                                                                    "y": 1550
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Insert_Alternated_Difficulties"
                                                                                                },
                                                                                                "parentId": "use-alternated-difficulty-and",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "insert-alternated-difficulties-and",
                                                                                                        "type": "operator",
                                                                                                        "position": {
                                                                                                            "x": -2100,
                                                                                                            "y": 1700
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "AND"
                                                                                                        },
                                                                                                        "parentId": "insert-alternated-difficulties",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "choose-candidate-levels",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -2300,
                                                                                                                    "y": 1850
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Choose_Candidate_Levels"
                                                                                                                },
                                                                                                                "parentId": "insert-alternated-difficulties-and",
                                                                                                                "children": null
                                                                                                            },
                                                                                                            {
                                                                                                                "id": "insert-unexpected-difficulties",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -1900,
                                                                                                                    "y": 1850
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Insert_Unexpected_Difficulties"
                                                                                                                },
                                                                                                                "parentId": "insert-alternated-difficulties-and",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "insert-positive-difficulties",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -2100,
                                                                                                                            "y": 2000
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Insert_Positive_Difficulties"
                                                                                                                        },
                                                                                                                        "parentId": "insert-unexpected-difficulties",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "insert-negative-difficulties",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": -1700,
                                                                                                                            "y": 2000
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "Insert_Negative_Difficulties"
                                                                                                                        },
                                                                                                                        "parentId": "insert-unexpected-difficulties",
                                                                                                                        "children": null
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "use-alternated-difficulty",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": -2500,
                                                                            "y": 1250
                                                                        },
                                                                        "data": {
                                                                            "label": "Use_Alternated_Difficulty",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "define-difficulty-among-levels",
                                                                        "children": [
                                                                            {
                                                                                "id": "use-alternated-difficulty-and",
                                                                                "type": "operator",
                                                                                "position": {
                                                                                    "x": -2400,
                                                                                    "y": 1400
                                                                                },
                                                                                "data": {
                                                                                    "label": "AND"
                                                                                },
                                                                                "parentId": "use-alternated-difficulty",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "define-main-trend",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -2600,
                                                                                            "y": 1550
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Define_Main_Trend"
                                                                                        },
                                                                                        "parentId": "use-alternated-difficulty-and",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "use-increasing-difficulty",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": -2600,
                                                                                                    "y": 1700
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Use_Increasing_Difficulty"
                                                                                                },
                                                                                                "parentId": "define-main-trend",
                                                                                                "children": null
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "id": "insert-alternated-difficulties",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": -2200,
                                                                                            "y": 1550
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Insert_Alternated_Difficulties"
                                                                                        },
                                                                                        "parentId": "use-alternated-difficulty-and",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "insert-alternated-difficulties-and",
                                                                                                "type": "operator",
                                                                                                "position": {
                                                                                                    "x": -2100,
                                                                                                    "y": 1700
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "AND"
                                                                                                },
                                                                                                "parentId": "insert-alternated-difficulties",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "choose-candidate-levels",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -2300,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Choose_Candidate_Levels"
                                                                                                        },
                                                                                                        "parentId": "insert-alternated-difficulties-and",
                                                                                                        "children": null
                                                                                                    },
                                                                                                    {
                                                                                                        "id": "insert-unexpected-difficulties",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": -1900,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Insert_Unexpected_Difficulties"
                                                                                                        },
                                                                                                        "parentId": "insert-alternated-difficulties-and",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "insert-positive-difficulties",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -2100,
                                                                                                                    "y": 2000
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Insert_Positive_Difficulties"
                                                                                                                },
                                                                                                                "parentId": "insert-unexpected-difficulties",
                                                                                                                "children": null
                                                                                                            },
                                                                                                            {
                                                                                                                "id": "insert-negative-difficulties",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": -1700,
                                                                                                                    "y": 2000
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Insert_Negative_Difficulties"
                                                                                                                },
                                                                                                                "parentId": "insert-unexpected-difficulties",
                                                                                                                "children": null
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "by-other-achievements",
                                "type": "gamification",
                                "position": {
                                    "x": -3250,
                                    "y": 1300
                                },
                                "data": {
                                    "label": "By_Other_Achievements",
                                    "right": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": null
                            },
                            {
                                "id": "by-other-achievements-2",
                                "type": "gamification",
                                "position": {
                                    "x": 1000,
                                    "y": 1350
                                },
                                "data": {
                                    "label": "By_Other_Achievements",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": null
                            },
                            {
                                "id": "set-point-systems",
                                "type": "gamification",
                                "position": {
                                    "x": 500,
                                    "y": 500
                                },
                                "data": {
                                    "label": "Set_Point_Systems",
                                    "num": "(1)",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": [
                                    {
                                        "id": "set-point-systems-and",
                                        "type": "operator",
                                        "position": {
                                            "x": 600,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-point-systems",
                                        "children": [
                                            {
                                                "id": "set-achievement-rules",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 1300,
                                                    "y": 800
                                                },
                                                "data": {
                                                    "label": "Set_Achievement_Rules",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-point-systems-and",
                                                "children": [
                                                    {
                                                        "id": "choose-kinds-of-points",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -400,
                                                            "y": 800
                                                        },
                                                        "data": {
                                                            "label": "Choose_Kinds_of_Points",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "parentId": "set-achievement-rules",
                                                        "children": [
                                                            {
                                                                "id": "use-redeemable-points",
                                                                "conditions": "C1 OR C5 OR C36 OR C32 OR C34",
                                                                "parentId": "choose-kinds-of-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -1500,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Use_Redeemable_Points",
                                                                    "num": "(1)",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "use-skill-points",
                                                                "conditions": "(C1 OR C5 OR C19) AND C16",
                                                                "parentId": "choose-kinds-of-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -800,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Use_Skill_Points",
                                                                    "num": "(1)",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "use-karma-points",
                                                                "conditions": "(C2 OR C3 OR C4) AND (NOT C36)",
                                                                "parentId": "choose-kinds-of-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": -200,
                                                                    "y": 1300
                                                                },
                                                                "data": {
                                                                    "label": "Use_Karma_Points",
                                                                    "num": "(1)",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "use-reputation-points",
                                                                "conditions": "(C2 OR C1 OR C5) AND (NOT C36)",
                                                                "parentId": "choose-kinds-of-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 300,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Use_Reputation_Points",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "set-achievement-rules-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": 1400,
                                                            "y": 1000
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "set-achievement-rules",
                                                        "children": [
                                                            {
                                                                "id": "set-triggers",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 850,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Set_Triggers",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "parentId": "set-achievement-rules-and",
                                                                "children": [
                                                                    {
                                                                        "id": "by-gamifiable-actions-2",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 700,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "By_Gamifiable_Actions",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "set-triggers",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-gamifiable-actions-3",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 700,
                                                                                    "y": 1550
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Gamifiable_Actions",
                                                                                    "num": "(3)",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "by-gamifiable-actions-2",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "by-other-achievements-2",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 1000,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "By_Other_Achievements",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "set-triggers",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "use-trigger-params",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 2500,
                                                                            "y": 2050
                                                                        },
                                                                        "data": {
                                                                            "label": "Use_Trigger_Params",
                                                                            "left": true
                                                                        },
                                                                        "parentId": "set-triggers",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "set-amount-of-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 1700,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Set_Amount_of_Points",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "parentId": "set-achievement-rules-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-amount-of-points-and",
                                                                        "type": "operator",
                                                                        "position": {
                                                                            "x": 1800,
                                                                            "y": 1200
                                                                        },
                                                                        "data": {
                                                                            "label": "AND"
                                                                        },
                                                                        "parentId": "set-amount-of-points",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-sign-of-points",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 1500,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Sign_of_Points",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-amount-of-points-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-positive",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 1300,
                                                                                            "y": 1650
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Positive",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-sign-of-points",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "set-negative",
                                                                                        "conditions": "NOT C1",
                                                                                        "parentId": "set-sign-of-points",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 1600,
                                                                                            "y": 1650
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Negative",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "set-quantity-of-points",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 2100,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Quantity_of_Points",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-amount-of-points-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "used-fixed-amount",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 1900,
                                                                                            "y": 1550
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Used_Fixed_Amount",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-quantity-of-points",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "define-calculated-amount",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 2300,
                                                                                            "y": 1550
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Define_Calculated_Amount",
                                                                                            "sourceRight": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceTop": true,
                                                                                            "left": true,
                                                                                            "right": true,
                                                                                            "bottom": true
                                                                                        },
                                                                                        "parentId": "set-quantity-of-points",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "define-calculated-amount-and",
                                                                                                "type": "operator",
                                                                                                "position": {
                                                                                                    "x": 2400,
                                                                                                    "y": 1700
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "AND"
                                                                                                },
                                                                                                "parentId": "define-calculated-amount",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "by-functions",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": 2200,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "By_Functions"
                                                                                                        },
                                                                                                        "parentId": "define-calculated-amount-and",
                                                                                                        "children": null
                                                                                                    },
                                                                                                    {
                                                                                                        "id": "by-parameters",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": 2600,
                                                                                                            "y": 1850
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "By_Parameters"
                                                                                                        },
                                                                                                        "parentId": "define-calculated-amount-and",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "id": "use-trigger-params",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": 2500,
                                                                                                                    "y": 2050
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Use_Trigger_Params",
                                                                                                                    "left": true
                                                                                                                },
                                                                                                                "parentId": "by-parameters",
                                                                                                                "children": null
                                                                                                            },
                                                                                                            {
                                                                                                                "id": "use-context-params",
                                                                                                                "type": "gamification",
                                                                                                                "position": {
                                                                                                                    "x": 2900,
                                                                                                                    "y": 2050
                                                                                                                },
                                                                                                                "data": {
                                                                                                                    "label": "Use_Context_Params"
                                                                                                                },
                                                                                                                "parentId": "by-parameters",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "id": "by-player-profile",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": 2700,
                                                                                                                            "y": 2300
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "By_Player_Profile"
                                                                                                                        },
                                                                                                                        "parentId": "use-context-params",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "by-user-profile",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": 3100,
                                                                                                                            "y": 2300
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "By_User_Profile"
                                                                                                                        },
                                                                                                                        "parentId": "use-context-params",
                                                                                                                        "children": null
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "id": "by-other-context-profiles",
                                                                                                                        "type": "gamification",
                                                                                                                        "position": {
                                                                                                                            "x": 3500,
                                                                                                                            "y": 2300
                                                                                                                        },
                                                                                                                        "data": {
                                                                                                                            "label": "By_Other_Context_Profiles"
                                                                                                                        },
                                                                                                                        "parentId": "use-context-params",
                                                                                                                        "children": null
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "choose-kinds-of-points",
                                                "type": "gamification",
                                                "position": {
                                                    "x": -400,
                                                    "y": 800
                                                },
                                                "data": {
                                                    "label": "Choose_Kinds_of_Points",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-point-systems-and",
                                                "children": [
                                                    {
                                                        "id": "use-redeemable-points",
                                                        "conditions": "C1 OR C5 OR C36 OR C32 OR C34",
                                                        "parentId": "choose-kinds-of-points",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -1500,
                                                            "y": 1050
                                                        },
                                                        "data": {
                                                            "label": "Use_Redeemable_Points",
                                                            "num": "(1)",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "use-skill-points",
                                                        "conditions": "(C1 OR C5 OR C19) AND C16",
                                                        "parentId": "choose-kinds-of-points",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -800,
                                                            "y": 1150
                                                        },
                                                        "data": {
                                                            "label": "Use_Skill_Points",
                                                            "num": "(1)",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "use-karma-points",
                                                        "conditions": "(C2 OR C3 OR C4) AND (NOT C36)",
                                                        "parentId": "choose-kinds-of-points",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": -200,
                                                            "y": 1300
                                                        },
                                                        "data": {
                                                            "label": "Use_Karma_Points",
                                                            "num": "(1)",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "use-reputation-points",
                                                        "conditions": "(C2 OR C1 OR C5) AND (NOT C36)",
                                                        "parentId": "choose-kinds-of-points",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 300,
                                                            "y": 1050
                                                        },
                                                        "data": {
                                                            "label": "Use_Reputation_Points",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "set-leader-boards",
                                "type": "gamification",
                                "position": {
                                    "x": 11000,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Leader_boards",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": [
                                    {
                                        "id": "set-leader-boards-and",
                                        "type": "operator",
                                        "position": {
                                            "x": 11100,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-leader-boards",
                                        "children": [
                                            {
                                                "id": "set-kinds-2",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 9500,
                                                    "y": 700
                                                },
                                                "data": {
                                                    "label": "Set_Kinds",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-leader-boards-and",
                                                "children": [
                                                    {
                                                        "id": "single-leader-boards",
                                                        "conditions": "C1 OR C5 OR C36",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 8000,
                                                            "y": 1050
                                                        },
                                                        "data": {
                                                            "label": "Single_Leader_boards",
                                                            "sourceLeft": true,
                                                            "sourceTop": true,
                                                            "bottom": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "team-leader-boards",
                                                        "conditions": "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 9000,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Team_Leader_boards",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "private-you-vs-you-leader-boards",
                                                        "conditions": "NOT (C5 OR C2 OR C3 OR C4)",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 9500,
                                                            "y": 1400
                                                        },
                                                        "data": {
                                                            "label": "Private_You_vs_You_Leader_boards",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "social-leader-boards",
                                                        "conditions": "C2 OR C5 OR C3 OR C4 OR C33",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 10300,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Social_Leader_boards",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "time-dependent-leader-boards",
                                                        "conditions": "C1 OR C5 OR C36",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 11000,
                                                            "y": 1250
                                                        },
                                                        "data": {
                                                            "label": "Time_Dependent_Leader_boards",
                                                            "sourceLeft": true,
                                                            "sourceTop": true,
                                                            "left": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "geo-localized-leader-boards",
                                                        "conditions": "C2 OR C3 OR C4 OR C19",
                                                        "parentId": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 11600,
                                                            "y": 1150
                                                        },
                                                        "data": {
                                                            "label": "Geo_Localized_Leader_boards",
                                                            "sourceLeft": true,
                                                            "sourceTop": true,
                                                            "left": true
                                                        },
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "configure-leader-boards",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 14000,
                                                    "y": 550
                                                },
                                                "data": {
                                                    "label": "Configure_Leader_boards",
                                                    "sourceLeft": true,
                                                    "left": true
                                                },
                                                "parentId": "set-leader-boards-and",
                                                "children": [
                                                    {
                                                        "id": "configure-leader-boards-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": 14100,
                                                            "y": 700
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "configure-leader-boards",
                                                        "children": [
                                                            {
                                                                "id": "set-name",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 12250,
                                                                    "y": 850
                                                                },
                                                                "data": {
                                                                    "label": "Set_Name",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "configure-leader-boards-and",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "set-winners",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 13250,
                                                                    "y": 850
                                                                },
                                                                "data": {
                                                                    "label": "Set_Winners",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "configure-leader-boards-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-winners-and",
                                                                        "type": "operator",
                                                                        "position": {
                                                                            "x": 13350,
                                                                            "y": 980
                                                                        },
                                                                        "data": {
                                                                            "label": "AND"
                                                                        },
                                                                        "parentId": "set-winners",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-winner-titles",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 13250,
                                                                                    "y": 1100
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Winner_Titles"
                                                                                },
                                                                                "parentId": "set-winners-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-new-titles",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 13000,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_New_Titles"
                                                                                        },
                                                                                        "parentId": "set-winner-titles",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "use-badge-names",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 13500,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Badge_Names",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-winner-titles",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "set-winner-icons",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 14500,
                                                                                    "y": 1100
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Winner_Icons"
                                                                                },
                                                                                "parentId": "set-winners-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "use-common-icons-2",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 14000,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Common_Icons",
                                                                                            "bottom": true,
                                                                                            "left": true
                                                                                        },
                                                                                        "parentId": "set-winner-icons",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "use-artistic-icons-2",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 14500,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Artistic_Icons",
                                                                                            "bottom": true,
                                                                                            "left": true
                                                                                        },
                                                                                        "parentId": "set-winner-icons",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "use-badge-icons",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 15000,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Badge_Icons",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-winner-icons",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "use-badge-names",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": 13500,
                                                                                                    "y": 1350
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Use_Badge_Names",
                                                                                                    "right": true,
                                                                                                    "left": true,
                                                                                                    "bottom": true,
                                                                                                    "sourceLeft": true,
                                                                                                    "sourceRight": true,
                                                                                                    "sourceTop": true
                                                                                                },
                                                                                                "parentId": "use-badge-icons",
                                                                                                "children": null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "set-podium",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 12250,
                                                                                    "y": 1100
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Podium"
                                                                                },
                                                                                "parentId": "set-winners-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-traditional-podium",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 12000,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Traditional_Podium"
                                                                                        },
                                                                                        "parentId": "set-podium",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "set-number-of-winners",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 12500,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Number_of_Winners"
                                                                                        },
                                                                                        "parentId": "set-podium",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "set-achievement-rules-3",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 16500,
                                                                    "y": 850
                                                                },
                                                                "data": {
                                                                    "label": "Set_Achievement_Rules",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "configure-leader-boards-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-leader-boards-calculation-strategy",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 16000,
                                                                            "y": 1100
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Leader-boards_Calculation_Strategy",
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-achievement-rules-3",
                                                                        "children": [
                                                                            {
                                                                                "id": "by-conditions",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 16250,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Conditions",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-leader-boards-calculation-strategy",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "by-gamifiable-actions-4",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 16000,
                                                                                            "y": 1600
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "By_Gamifiable_Actions",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "by-conditions",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "by-other-achievements-4",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 16500,
                                                                                            "y": 1600
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "By_Other_Achievements",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "by-conditions",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "by-point-systems",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 15750,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Point_Systems",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-leader-boards-calculation-strategy",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "set-rewards",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 17000,
                                                                            "y": 1100
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Rewards",
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-achievement-rules-3",
                                                                        "children": [
                                                                            {
                                                                                "id": "assign-badges",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 16750,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "Assign_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-rewards",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "use-badge-icons",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 15000,
                                                                                            "y": 1350
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Use_Badge_Icons",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "assign-badges",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "use-badge-names",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": 13500,
                                                                                                    "y": 1350
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Use_Badge_Names",
                                                                                                    "right": true,
                                                                                                    "left": true,
                                                                                                    "bottom": true,
                                                                                                    "sourceLeft": true,
                                                                                                    "sourceRight": true,
                                                                                                    "sourceTop": true
                                                                                                },
                                                                                                "parentId": "use-badge-icons",
                                                                                                "children": null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "assign-other-achievements",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 17250,
                                                                                    "y": 1350
                                                                                },
                                                                                "data": {
                                                                                    "label": "Assign_Other_Achievements",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-rewards",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "set-kinds-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 9500,
                                                            "y": 700
                                                        },
                                                        "data": {
                                                            "label": "Set_Kinds",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "parentId": "configure-leader-boards",
                                                        "children": [
                                                            {
                                                                "id": "single-leader-boards",
                                                                "conditions": "C1 OR C5 OR C36",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 8000,
                                                                    "y": 1050
                                                                },
                                                                "data": {
                                                                    "label": "Single_Leader_boards",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "team-leader-boards",
                                                                "conditions": "(C2 OR C3 OR C4 OR C23 OR C24 OR C25 OR C30 OR C26) AND (NOT C36)",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 9000,
                                                                    "y": 1200
                                                                },
                                                                "data": {
                                                                    "label": "Team_Leader_boards",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "private-you-vs-you-leader-boards",
                                                                "conditions": "NOT (C5 OR C2 OR C3 OR C4)",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 9500,
                                                                    "y": 1400
                                                                },
                                                                "data": {
                                                                    "label": "Private_You_vs_You_Leader_boards",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "social-leader-boards",
                                                                "conditions": "C2 OR C5 OR C3 OR C4 OR C33",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 10300,
                                                                    "y": 1200
                                                                },
                                                                "data": {
                                                                    "label": "Social_Leader_boards",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "time-dependent-leader-boards",
                                                                "conditions": "C1 OR C5 OR C36",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 11000,
                                                                    "y": 1250
                                                                },
                                                                "data": {
                                                                    "label": "Time_Dependent_Leader_boards",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "geo-localized-leader-boards",
                                                                "conditions": "C2 OR C3 OR C4 OR C19",
                                                                "parentId": "set-kinds-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 11600,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Geo_Localized_Leader_boards",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "children": null
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "set-badges",
                                "type": "gamification",
                                "position": {
                                    "x": 5800,
                                    "y": 400
                                },
                                "data": {
                                    "label": "Set_Badges",
                                    "num": "(1)",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": [
                                    {
                                        "id": "set-badges-and",
                                        "type": "operator",
                                        "position": {
                                            "x": 5900,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-badges",
                                        "children": [
                                            {
                                                "id": "set-badges-typologies",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 4700,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Set_Badges_Typologies",
                                                    "num": "(1)",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-badges-and",
                                                "children": [
                                                    {
                                                        "id": "set-badges-typologies-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": 4800,
                                                            "y": 1000
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "set-badges-typologies",
                                                        "children": [
                                                            {
                                                                "id": "set-badges-kinds",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 3800,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Badges_Kinds",
                                                                    "sourceRight": true,
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-badges-typologies-and",
                                                                "children": [
                                                                    {
                                                                        "id": "negative-actions-badges",
                                                                        "conditions": "C36",
                                                                        "parentId": "set-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 3300,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Negative_Actions_Badges",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "successes-badges",
                                                                        "conditions": "C1 OR C5 OR C7 OR C19 OR C33 OR C35",
                                                                        "parentId": "set-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 3800,
                                                                            "y": 1800
                                                                        },
                                                                        "data": {
                                                                            "label": "Successes_Badges",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "failures-badges",
                                                                        "conditions": "C36 AND (NOT C1)",
                                                                        "parentId": "set-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 4400,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Failures_Badges",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "set-social-badges-kinds",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 5600,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Social_Badges_Kinds",
                                                                    "sourceRight": true,
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-badges-typologies-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-publishable",
                                                                        "conditions": "C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35",
                                                                        "parentId": "set-social-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 5100,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Publishable",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "id": "set-not-publishable",
                                                                                "conditions": "NOT (C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35)",
                                                                                "parentId": "set-publishable",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 6200,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Not_Publishable",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "set-not-publishable",
                                                                        "conditions": "NOT (C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35)",
                                                                        "parentId": "set-social-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 6200,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Not_Publishable",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "set-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 3800,
                                                                            "y": 1150
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Badges_Kinds",
                                                                            "sourceRight": true,
                                                                            "sourceLeft": true,
                                                                            "sourceTop": true,
                                                                            "left": true,
                                                                            "right": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-social-badges-kinds",
                                                                        "children": [
                                                                            {
                                                                                "id": "negative-actions-badges",
                                                                                "conditions": "C36",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 3300,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Negative_Actions_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "successes-badges",
                                                                                "conditions": "C1 OR C5 OR C7 OR C19 OR C33 OR C35",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 3800,
                                                                                    "y": 1800
                                                                                },
                                                                                "data": {
                                                                                    "label": "Successes_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "failures-badges",
                                                                                "conditions": "C36 AND (NOT C1)",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 4400,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Failures_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "configure-badges",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 6900,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Configure_Badges",
                                                    "num": "(1)",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-badges-and",
                                                "children": [
                                                    {
                                                        "id": "set-badges-typologies",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 4700,
                                                            "y": 850
                                                        },
                                                        "data": {
                                                            "label": "Set_Badges_Typologies",
                                                            "num": "(1)",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "parentId": "configure-badges",
                                                        "children": [
                                                            {
                                                                "id": "set-badges-typologies-and",
                                                                "type": "operator",
                                                                "position": {
                                                                    "x": 4800,
                                                                    "y": 1000
                                                                },
                                                                "data": {
                                                                    "label": "AND"
                                                                },
                                                                "parentId": "set-badges-typologies",
                                                                "children": [
                                                                    {
                                                                        "id": "set-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 3800,
                                                                            "y": 1150
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Badges_Kinds",
                                                                            "sourceRight": true,
                                                                            "sourceLeft": true,
                                                                            "sourceTop": true,
                                                                            "left": true,
                                                                            "right": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-badges-typologies-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "negative-actions-badges",
                                                                                "conditions": "C36",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 3300,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Negative_Actions_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "successes-badges",
                                                                                "conditions": "C1 OR C5 OR C7 OR C19 OR C33 OR C35",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 3800,
                                                                                    "y": 1800
                                                                                },
                                                                                "data": {
                                                                                    "label": "Successes_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "failures-badges",
                                                                                "conditions": "C36 AND (NOT C1)",
                                                                                "parentId": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 4400,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Failures_Badges",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "set-social-badges-kinds",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 5600,
                                                                            "y": 1150
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Social_Badges_Kinds",
                                                                            "sourceRight": true,
                                                                            "sourceLeft": true,
                                                                            "sourceTop": true,
                                                                            "left": true,
                                                                            "right": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-badges-typologies-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-publishable",
                                                                                "conditions": "C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35",
                                                                                "parentId": "set-social-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 5100,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Publishable",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-not-publishable",
                                                                                        "conditions": "NOT (C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35)",
                                                                                        "parentId": "set-publishable",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 6200,
                                                                                            "y": 1500
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Not_Publishable",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "set-not-publishable",
                                                                                "conditions": "NOT (C5 OR C19 OR C2 OR C3 OR C4 OR C33 OR C35)",
                                                                                "parentId": "set-social-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 6200,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Not_Publishable",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "set-badges-kinds",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 3800,
                                                                                    "y": 1150
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Badges_Kinds",
                                                                                    "sourceRight": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceTop": true,
                                                                                    "left": true,
                                                                                    "right": true,
                                                                                    "bottom": true
                                                                                },
                                                                                "parentId": "set-social-badges-kinds",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "negative-actions-badges",
                                                                                        "conditions": "C36",
                                                                                        "parentId": "set-badges-kinds",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 3300,
                                                                                            "y": 1500
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Negative_Actions_Badges",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "successes-badges",
                                                                                        "conditions": "C1 OR C5 OR C7 OR C19 OR C33 OR C35",
                                                                                        "parentId": "set-badges-kinds",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 3800,
                                                                                            "y": 1800
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Successes_Badges",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "failures-badges",
                                                                                        "conditions": "C36 AND (NOT C1)",
                                                                                        "parentId": "set-badges-kinds",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 4400,
                                                                                            "y": 1500
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Failures_Badges",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "configure-badges-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": 7000,
                                                            "y": 1000
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "configure-badges",
                                                        "children": [
                                                            {
                                                                "id": "set-names",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 6400,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Names",
                                                                    "sourceRight": true,
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "configure-badges-and",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "set-icons",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 6900,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Icons",
                                                                    "sourceRight": true,
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "configure-badges-and",
                                                                "children": [
                                                                    {
                                                                        "id": "use-common-icons",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 6700,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Use_Common_Icons",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "set-icons",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "use-artistic-icons",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 7000,
                                                                            "y": 1500
                                                                        },
                                                                        "data": {
                                                                            "label": "Use_Artistic_Icons",
                                                                            "right": true,
                                                                            "left": true,
                                                                            "bottom": true,
                                                                            "sourceLeft": true,
                                                                            "sourceRight": true,
                                                                            "sourceTop": true
                                                                        },
                                                                        "parentId": "set-icons",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "set-achievement-rules-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 7600,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Achievement_Rules",
                                                                    "sourceRight": true,
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "configure-badges-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-achievement-rules-2-and",
                                                                        "type": "operator",
                                                                        "position": {
                                                                            "x": 7700,
                                                                            "y": 1300
                                                                        },
                                                                        "data": {
                                                                            "label": "AND"
                                                                        },
                                                                        "parentId": "set-achievement-rules-2",
                                                                        "children": [
                                                                            {
                                                                                "id": "set-triggers-2",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 7400,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Triggers",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-achievement-rules-2-and",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "by-gamifiable-actions-3",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 7200,
                                                                                            "y": 1800
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "By_Gamifiable_Actions",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-triggers-2",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "by-other-achievements-3",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 7600,
                                                                                            "y": 1800
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "By_Other_Achievements",
                                                                                            "right": true,
                                                                                            "left": true,
                                                                                            "bottom": true,
                                                                                            "sourceLeft": true,
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true
                                                                                        },
                                                                                        "parentId": "set-triggers-2",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "set-badges-achieved",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 7800,
                                                                                    "y": 1500
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Badges_Achieved",
                                                                                    "right": true,
                                                                                    "left": true,
                                                                                    "bottom": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true
                                                                                },
                                                                                "parentId": "set-achievement-rules-2-and",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "use-badge-names",
                                        "type": "gamification",
                                        "position": {
                                            "x": 13500,
                                            "y": 1350
                                        },
                                        "data": {
                                            "label": "Use_Badge_Names",
                                            "right": true,
                                            "left": true,
                                            "bottom": true,
                                            "sourceLeft": true,
                                            "sourceRight": true,
                                            "sourceTop": true
                                        },
                                        "parentId": "set-badges",
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "set-gamified-training-elements",
                                "type": "gamification",
                                "position": {
                                    "x": 27700,
                                    "y": 600
                                },
                                "data": {
                                    "label": "Set_Gamified_Training_Elements",
                                    "sourceLeft": true,
                                    "sourceRight": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": [
                                    {
                                        "id": "set-basic-training",
                                        "type": "gamification",
                                        "position": {
                                            "x": 25900,
                                            "y": 800
                                        },
                                        "data": {
                                            "label": "Set_Basic_Training",
                                            "sourceRight": true,
                                            "sourceTop": true,
                                            "right": true,
                                            "bottom": true
                                        },
                                        "parentId": "set-gamified-training-elements",
                                        "children": [
                                            {
                                                "id": "set-basic-training-and",
                                                "type": "operator",
                                                "position": {
                                                    "x": 25995,
                                                    "y": 950
                                                },
                                                "data": {
                                                    "label": "AND"
                                                },
                                                "parentId": "set-basic-training",
                                                "children": [
                                                    {
                                                        "id": "choose-training-elements",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 23500,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Choose_Training_Elements",
                                                            "sourceRight": true,
                                                            "sourceLeft": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-basic-training-and",
                                                        "children": [
                                                            {
                                                                "id": "provide-forum",
                                                                "conditions": "C23 OR C30 OR C2 OR C5 OR C3 OR C4",
                                                                "parentId": "choose-training-elements",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 22500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Provide_Forum",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "provide-suggestions",
                                                                "conditions": "(C1 OR C5 OR C4) AND C16",
                                                                "parentId": "choose-training-elements",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 23000,
                                                                    "y": 1650
                                                                },
                                                                "data": {
                                                                    "label": "Provide_Suggestions",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "provide-tricks",
                                                                "conditions": "C1 OR C36 OR C5",
                                                                "parentId": "choose-training-elements",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 23500,
                                                                    "y": 1550
                                                                },
                                                                "data": {
                                                                    "label": "Provide_Tricks",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "provide-tours",
                                                                "conditions": "C1 OR C5 OR C4",
                                                                "parentId": "choose-training-elements",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 24000,
                                                                    "y": 1650
                                                                },
                                                                "data": {
                                                                    "label": "Provide_Tours",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "provide-tutorials",
                                                                "conditions": "(C1 OR C5 OR C19 OR C24 OR C25 OR C26) AND (C16 AND (NOT C28))",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 24500,
                                                                    "y": 1350
                                                                },
                                                                "data": {
                                                                    "label": "Provide_Tutorials",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "choose-training-elements",
                                                                "children": [
                                                                    {
                                                                        "id": "define-training-paths",
                                                                        "conditions": "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26 OR C29 OR C30) AND (C16 AND (NOT C28))",
                                                                        "parentId": "provide-tutorials",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 29980,
                                                                            "y": 1300
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Training_Paths",
                                                                            "sourceRight": true,
                                                                            "sourceTop": true,
                                                                            "right": true,
                                                                            "bottom": true
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "id": "set-game-structure-2",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 29750,
                                                                                    "y": 1550
                                                                                },
                                                                                "data": {
                                                                                    "label": "Set_Game_Structure",
                                                                                    "num": "(2)",
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true,
                                                                                    "right": true,
                                                                                    "bottom": true
                                                                                },
                                                                                "parentId": "define-training-paths",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "choose-presentation-elements",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 25250,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Choose_Presentation_Elements",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-basic-training-and",
                                                        "children": [
                                                            {
                                                                "id": "set-basic-elements",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 25000,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Set_Basic_Elements",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "choose-presentation-elements",
                                                                "children": [
                                                                    {
                                                                        "id": "set-avatar-trainer",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 25500,
                                                                            "y": 1450
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Avatar_Trainer",
                                                                            "sourceRight": true,
                                                                            "sourceTop": true,
                                                                            "right": true,
                                                                            "bottom": true,
                                                                            "left": true
                                                                        },
                                                                        "parentId": "set-basic-elements",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "set-avatar-trainer",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 25500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Set_Avatar_Trainer",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "choose-presentation-elements",
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "choose-training-topics",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 26500,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Choose_Training_Topics",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-basic-training-and",
                                                        "children": [
                                                            {
                                                                "id": "minimal-system-features",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 26000,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Minimal_System_Features",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "choose-training-topics",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "entire-system-procedures",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 26500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Entire_System_Procedures",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "choose-training-topics",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "advantage-vs-competitor-systems",
                                                                "conditions": "C12",
                                                                "parentId": "choose-training-topics",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 27000,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Advantage_vs_Competitor_Systems",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "define-strategy",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 27750,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "Define_Strategy",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-basic-training-and",
                                                        "children": [
                                                            {
                                                                "id": "train-before-playing",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 27500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Train_Before_Playing",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "define-strategy",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "train-during-playing",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 28000,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Train_During_Playing",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "define-strategy",
                                                                "children": null
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "set-advanced-training",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 29500,
                                                    "y": 800
                                                },
                                                "data": {
                                                    "label": "Set_Advanced_Training",
                                                    "num": "(1)",
                                                    "left": true,
                                                    "bottom": true
                                                },
                                                "parentId": "set-basic-training",
                                                "children": [
                                                    {
                                                        "id": "set-rewards-3",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 29000,
                                                            "y": 1300
                                                        },
                                                        "data": {
                                                            "label": "Set_Rewards",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-advanced-training",
                                                        "children": [
                                                            {
                                                                "id": "training-rewards-by-point-systems",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 28500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "Training_Rewards_by_Point_Systems",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "set-rewards-3",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "by-badges",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 29000,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "By_Badges",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-rewards-3",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "by-other-achievements-6",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 29500,
                                                                    "y": 1450
                                                                },
                                                                "data": {
                                                                    "label": "By_Other_Achievements",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-rewards-3",
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "define-training-paths",
                                                        "conditions": "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26 OR C29 OR C30) AND (C16 AND (NOT C28))",
                                                        "parentId": "set-advanced-training",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 29980,
                                                            "y": 1300
                                                        },
                                                        "data": {
                                                            "label": "Define_Training_Paths",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "children": [
                                                            {
                                                                "id": "set-game-structure-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 29750,
                                                                    "y": 1550
                                                                },
                                                                "data": {
                                                                    "label": "Set_Game_Structure",
                                                                    "num": "(2)",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "define-training-paths",
                                                                "children": null
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "set-advanced-training",
                                        "type": "gamification",
                                        "position": {
                                            "x": 29500,
                                            "y": 800
                                        },
                                        "data": {
                                            "label": "Set_Advanced_Training",
                                            "num": "(1)",
                                            "left": true,
                                            "bottom": true
                                        },
                                        "parentId": "set-gamified-training-elements",
                                        "children": [
                                            {
                                                "id": "set-rewards-3",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 29000,
                                                    "y": 1300
                                                },
                                                "data": {
                                                    "label": "Set_Rewards",
                                                    "sourceRight": true,
                                                    "sourceTop": true,
                                                    "right": true,
                                                    "bottom": true
                                                },
                                                "parentId": "set-advanced-training",
                                                "children": [
                                                    {
                                                        "id": "training-rewards-by-point-systems",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 28500,
                                                            "y": 1450
                                                        },
                                                        "data": {
                                                            "label": "Training_Rewards_by_Point_Systems",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true,
                                                            "left": true
                                                        },
                                                        "parentId": "set-rewards-3",
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "by-badges",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 29000,
                                                            "y": 1450
                                                        },
                                                        "data": {
                                                            "label": "By_Badges",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-rewards-3",
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "by-other-achievements-6",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 29500,
                                                            "y": 1450
                                                        },
                                                        "data": {
                                                            "label": "By_Other_Achievements",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "set-rewards-3",
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "define-training-paths",
                                                "conditions": "(C1 OR C5 OR C4 OR C19 OR C24 OR C25 OR C26 OR C29 OR C30) AND (C16 AND (NOT C28))",
                                                "parentId": "set-advanced-training",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 29980,
                                                    "y": 1300
                                                },
                                                "data": {
                                                    "label": "Define_Training_Paths",
                                                    "sourceRight": true,
                                                    "sourceTop": true,
                                                    "right": true,
                                                    "bottom": true
                                                },
                                                "children": [
                                                    {
                                                        "id": "set-game-structure-2",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 29750,
                                                            "y": 1550
                                                        },
                                                        "data": {
                                                            "label": "Set_Game_Structure",
                                                            "num": "(2)",
                                                            "sourceRight": true,
                                                            "sourceTop": true,
                                                            "right": true,
                                                            "bottom": true
                                                        },
                                                        "parentId": "define-training-paths",
                                                        "children": null
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "set-challenges",
                                "type": "gamification",
                                "position": {
                                    "x": 20000,
                                    "y": 550
                                },
                                "data": {
                                    "label": "Set_Challenges",
                                    "right": true,
                                    "left": true,
                                    "bottom": true,
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "parentId": "set-game-mechanics-and-dynamics",
                                "children": [
                                    {
                                        "id": "set-challenges-and",
                                        "type": "operator",
                                        "position": {
                                            "x": 20100,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-challenges",
                                        "children": [
                                            {
                                                "id": "set-kinds-3",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 19250,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Set_Kinds",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-challenges-and",
                                                "children": [
                                                    {
                                                        "id": "team-challenges",
                                                        "conditions": "(C2 OR C5 OR C3 OR C4) AND (NOT C36)",
                                                        "parentId": "set-kinds-3",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 18750,
                                                            "y": 1100
                                                        },
                                                        "data": {
                                                            "label": "Team_Challenges",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "personal-challenges",
                                                        "conditions": "C7 OR C1 OR C5 OR C36",
                                                        "parentId": "set-kinds-3",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 19750,
                                                            "y": 1100
                                                        },
                                                        "data": {
                                                            "label": "Personal_Challenges",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "configure-challenges",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 20750,
                                                    "y": 850
                                                },
                                                "data": {
                                                    "label": "Configure_Challenges",
                                                    "right": true,
                                                    "left": true,
                                                    "bottom": true,
                                                    "sourceLeft": true,
                                                    "sourceRight": true,
                                                    "sourceTop": true
                                                },
                                                "parentId": "set-challenges-and",
                                                "children": [
                                                    {
                                                        "id": "set-kinds-3",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 19250,
                                                            "y": 850
                                                        },
                                                        "data": {
                                                            "label": "Set_Kinds",
                                                            "right": true,
                                                            "left": true,
                                                            "bottom": true,
                                                            "sourceLeft": true,
                                                            "sourceRight": true,
                                                            "sourceTop": true
                                                        },
                                                        "parentId": "configure-challenges",
                                                        "children": [
                                                            {
                                                                "id": "team-challenges",
                                                                "conditions": "(C2 OR C5 OR C3 OR C4) AND (NOT C36)",
                                                                "parentId": "set-kinds-3",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 18750,
                                                                    "y": 1100
                                                                },
                                                                "data": {
                                                                    "label": "Team_Challenges",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "personal-challenges",
                                                                "conditions": "C7 OR C1 OR C5 OR C36",
                                                                "parentId": "set-kinds-3",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 19750,
                                                                    "y": 1100
                                                                },
                                                                "data": {
                                                                    "label": "Personal_Challenges",
                                                                    "right": true,
                                                                    "left": true,
                                                                    "bottom": true,
                                                                    "sourceLeft": true,
                                                                    "sourceRight": true,
                                                                    "sourceTop": true
                                                                },
                                                                "children": null
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "configure-challenges-and",
                                                        "type": "operator",
                                                        "position": {
                                                            "x": 20850,
                                                            "y": 1000
                                                        },
                                                        "data": {
                                                            "label": "AND"
                                                        },
                                                        "parentId": "configure-challenges",
                                                        "children": [
                                                            {
                                                                "id": "set-names-2",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 20500,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Names",
                                                                    "sourceLeft": true,
                                                                    "sourceTop": true,
                                                                    "left": true
                                                                },
                                                                "parentId": "configure-challenges-and",
                                                                "children": null
                                                            },
                                                            {
                                                                "id": "set-achievement-rules-4",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 21200,
                                                                    "y": 1150
                                                                },
                                                                "data": {
                                                                    "label": "Set_Achievement_Rules",
                                                                    "sourceRight": true,
                                                                    "sourceTop": true,
                                                                    "right": true
                                                                },
                                                                "parentId": "configure-challenges-and",
                                                                "children": [
                                                                    {
                                                                        "id": "set-triggers-3",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 21000,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Triggers",
                                                                            "sourceLeft": true,
                                                                            "sourceTop": true,
                                                                            "left": true
                                                                        },
                                                                        "parentId": "set-achievement-rules-4",
                                                                        "children": [
                                                                            {
                                                                                "id": "by-gamifiable-actions-5",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 20650,
                                                                                    "y": 1600
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Gamifiable_Actions",
                                                                                    "sourceLeft": true,
                                                                                    "sourceTop": true,
                                                                                    "left": true
                                                                                },
                                                                                "parentId": "set-triggers-3",
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "by-other-achievements-5",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 21000,
                                                                                    "y": 1600
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Other_Achievements",
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true,
                                                                                    "right": true
                                                                                },
                                                                                "parentId": "set-triggers-3",
                                                                                "children": null
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "set-rewards-2",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 21500,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Rewards",
                                                                            "sourceRight": true,
                                                                            "sourceTop": true,
                                                                            "right": true
                                                                        },
                                                                        "parentId": "set-achievement-rules-4",
                                                                        "children": [
                                                                            {
                                                                                "id": "assign-badges-2",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 21500,
                                                                                    "y": 1600
                                                                                },
                                                                                "data": {
                                                                                    "label": "Assign_Badges",
                                                                                    "sourceLeft": true,
                                                                                    "sourceTop": true,
                                                                                    "left": true
                                                                                },
                                                                                "parentId": "set-rewards-2",
                                                                                "children": null
                                                                            },
                                                                            {
                                                                                "id": "assign-other-achievements-2",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 22000,
                                                                                    "y": 1600
                                                                                },
                                                                                "data": {
                                                                                    "label": "Assign_Other_Achievements",
                                                                                    "sourceRight": true,
                                                                                    "sourceTop": true,
                                                                                    "right": true
                                                                                },
                                                                                "parentId": "set-rewards-2",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "by-other-achievements-6",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 29500,
                                                                                            "y": 1450
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "By_Other_Achievements",
                                                                                            "sourceRight": true,
                                                                                            "sourceTop": true,
                                                                                            "right": true,
                                                                                            "bottom": true
                                                                                        },
                                                                                        "parentId": "assign-other-achievements-2",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "set-virtual-environments",
                        "conditions": "C1 OR C5 OR C2 OR C3 OR C4 OR C32 OR C34",
                        "parentId": "design-gamification-and",
                        "type": "gamification",
                        "position": {
                            "x": 33500,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Virtual_Environments"
                        },
                        "children": [
                            {
                                "id": "set-community",
                                "conditions": "C2 OR C3 OR C4 OR C23 OR C30 OR C32",
                                "parentId": "set-virtual-environments",
                                "type": "gamification",
                                "position": {
                                    "x": 31500,
                                    "y": 500
                                },
                                "data": {
                                    "label": "Set_Community",
                                    "num": "(1)",
                                    "sourceLeft": true,
                                    "sourceRight": true,
                                    "sourceTop": true
                                },
                                "children": [
                                    {
                                        "id": "set-add-friend",
                                        "type": "gamification",
                                        "position": {
                                            "x": 30500,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "Set_Add_Friend"
                                        },
                                        "parentId": "set-community",
                                        "children": null
                                    },
                                    {
                                        "id": "set-remove-friend",
                                        "type": "gamification",
                                        "position": {
                                            "x": 31000,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "Set_Remove_Friend"
                                        },
                                        "parentId": "set-community",
                                        "children": null
                                    },
                                    {
                                        "id": "set-friendship-suggestions",
                                        "type": "gamification",
                                        "position": {
                                            "x": 31500,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "Set_Friendship_Suggestions"
                                        },
                                        "parentId": "set-community",
                                        "children": [
                                            {
                                                "id": "system-suggests-friendship",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 31250,
                                                    "y": 950
                                                },
                                                "data": {
                                                    "label": "System_Suggests_Friendship"
                                                },
                                                "parentId": "set-friendship-suggestions",
                                                "children": null
                                            },
                                            {
                                                "id": "user-suggests-friendship-to-a-user",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 31750,
                                                    "y": 950
                                                },
                                                "data": {
                                                    "label": "User_Suggests_Friendship_to_a_User"
                                                },
                                                "parentId": "set-friendship-suggestions",
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "set-activity-suggestions",
                                        "type": "gamification",
                                        "position": {
                                            "x": 32250,
                                            "y": 700
                                        },
                                        "data": {
                                            "label": "Set_Activity_Suggestions",
                                            "sourceLeft": true,
                                            "sourceRight": true,
                                            "sourceTop": true
                                        },
                                        "parentId": "set-community",
                                        "children": [
                                            {
                                                "id": "user-suggests-to-a-user",
                                                "conditions": "C23 OR C30 OR C32",
                                                "parentId": "set-activity-suggestions",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 32570,
                                                    "y": 950
                                                },
                                                "data": {
                                                    "label": "User_Suggests_to_a_User",
                                                    "sourceRight": true,
                                                    "sourceLeft": true
                                                },
                                                "children": [
                                                    {
                                                        "id": "to-participate-to-an-event",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 32300,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "To_Participate_to_an_Event"
                                                        },
                                                        "parentId": "user-suggests-to-a-user",
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "to-carry-out-an-activity",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 32800,
                                                            "y": 1200
                                                        },
                                                        "data": {
                                                            "label": "To_Carry_out_an_Activity"
                                                        },
                                                        "parentId": "user-suggests-to-a-user",
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "system-suggests-an-event",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 32000,
                                                    "y": 950
                                                },
                                                "data": {
                                                    "label": "System_Suggests_an_Event"
                                                },
                                                "parentId": "set-activity-suggestions",
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "set-gamified-market",
                                "type": "gamification",
                                "position": {
                                    "x": 35750,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Gamified_Market",
                                    "sourceRight": true,
                                    "sourceLeft": true
                                },
                                "parentId": "set-virtual-environments",
                                "children": [
                                    {
                                        "id": "set-gamified-market-and",
                                        "type": "operator",
                                        "position": {
                                            "x": 35845,
                                            "y": 600
                                        },
                                        "data": {
                                            "label": "AND"
                                        },
                                        "parentId": "set-gamified-market",
                                        "children": [
                                            {
                                                "id": "add-rewards",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 33750,
                                                    "y": 600
                                                },
                                                "data": {
                                                    "label": "Add_Rewards",
                                                    "sourceRight": true,
                                                    "sourceLeft": true,
                                                    "right": true
                                                },
                                                "parentId": "set-gamified-market-and",
                                                "children": [
                                                    {
                                                        "id": "add-virtual-rewards",
                                                        "conditions": "C32 OR C34",
                                                        "parentId": "add-rewards",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 33150,
                                                            "y": 950
                                                        },
                                                        "data": {
                                                            "label": "Add_Virtual_Rewards",
                                                            "sourceRight": true,
                                                            "sourceLeft": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "add-tangible-rewards",
                                                        "conditions": "C32 OR C34",
                                                        "parentId": "add-rewards",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 33750,
                                                            "y": 1100
                                                        },
                                                        "data": {
                                                            "label": "Add_Tangible_Rewards",
                                                            "sourceRight": true,
                                                            "sourceLeft": true
                                                        },
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "add-unlockable-powers",
                                                        "conditions": "C1 OR C5 OR C36 OR C32",
                                                        "parentId": "add-rewards",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 34350,
                                                            "y": 950
                                                        },
                                                        "data": {
                                                            "label": "Add_Unlockable_Powers",
                                                            "sourceRight": true,
                                                            "sourceLeft": true,
                                                            "left": true,
                                                            "right": true
                                                        },
                                                        "children": [
                                                            {
                                                                "id": "add-unlockable-powers-and",
                                                                "type": "operator",
                                                                "position": {
                                                                    "x": 34450,
                                                                    "y": 1100
                                                                },
                                                                "data": {
                                                                    "label": "AND"
                                                                },
                                                                "parentId": "add-unlockable-powers",
                                                                "children": [
                                                                    {
                                                                        "id": "choose-unlockable-actions",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 34200,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Choose_Unlockable_Actions",
                                                                            "sourceRight": true,
                                                                            "sourceLeft": true
                                                                        },
                                                                        "parentId": "add-unlockable-powers-and",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "create-new-powers",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 34700,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Create_New_Powers",
                                                                            "sourceRight": true,
                                                                            "sourceLeft": true
                                                                        },
                                                                        "parentId": "add-unlockable-powers-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "create-new-powers-and",
                                                                                "type": "operator",
                                                                                "position": {
                                                                                    "x": 34800,
                                                                                    "y": 1550
                                                                                },
                                                                                "data": {
                                                                                    "label": "AND"
                                                                                },
                                                                                "parentId": "create-new-powers",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "set-power-names",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 34400,
                                                                                            "y": 1650
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Set_Power_Names"
                                                                                        },
                                                                                        "parentId": "create-new-powers-and",
                                                                                        "children": null
                                                                                    },
                                                                                    {
                                                                                        "id": "link-powers-to-unlockable-actions",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 35000,
                                                                                            "y": 1650
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Link_Powers_to_Unlockable_Actions"
                                                                                        },
                                                                                        "parentId": "create-new-powers-and",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "set-market-policies",
                                                "type": "gamification",
                                                "position": {
                                                    "x": 36750,
                                                    "y": 600
                                                },
                                                "data": {
                                                    "label": "Set_Market_Policies",
                                                    "sourceRight": true,
                                                    "sourceLeft": true,
                                                    "right": true
                                                },
                                                "parentId": "set-gamified-market-and",
                                                "children": [
                                                    {
                                                        "id": "set-redeeming-policy",
                                                        "conditions": "C1 OR C5 OR C32 OR C34",
                                                        "parentId": "set-market-policies",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 35850,
                                                            "y": 900
                                                        },
                                                        "data": {
                                                            "label": "Set_Redeeming_Policy",
                                                            "left": true,
                                                            "sourceLeft": true
                                                        },
                                                        "children": [
                                                            {
                                                                "id": "rp-by-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 35850,
                                                                    "y": 1350
                                                                },
                                                                "data": {
                                                                    "label": "RP_By_Points",
                                                                    "sourceTop": true,
                                                                    "top": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-redeeming-policy",
                                                                "children": [
                                                                    {
                                                                        "id": "rp-define-exchange-points-rewards",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 35850,
                                                                            "y": 1650
                                                                        },
                                                                        "data": {
                                                                            "label": "RP_Define_Exchange_Points_Rewards",
                                                                            "num": "(1)",
                                                                            "sourceTop": true,
                                                                            "top": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "rp-by-points",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "set-making-gift-policy",
                                                        "conditions": "(C2 OR C3 OR C4) AND (NOT C36)",
                                                        "parentId": "set-market-policies",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 36850,
                                                            "y": 900
                                                        },
                                                        "data": {
                                                            "label": "Set_Making_Gift_Policy",
                                                            "sourceRight": true,
                                                            "sourceLeft": true
                                                        },
                                                        "children": [
                                                            {
                                                                "id": "gp-by-points",
                                                                "type": "gamification",
                                                                "position": {
                                                                    "x": 36850,
                                                                    "y": 1350
                                                                },
                                                                "data": {
                                                                    "label": "GP_By_Points",
                                                                    "sourceTop": true,
                                                                    "top": true,
                                                                    "bottom": true
                                                                },
                                                                "parentId": "set-making-gift-policy",
                                                                "children": [
                                                                    {
                                                                        "id": "gp-define-exchange-points-rewards",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 36850,
                                                                            "y": 1650
                                                                        },
                                                                        "data": {
                                                                            "label": "GP_Define_Exchange_Points_Rewards",
                                                                            "num": "(1)",
                                                                            "sourceTop": true,
                                                                            "top": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "gp-by-points",
                                                                        "children": null
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "set-purchase-policy",
                                                        "type": "gamification",
                                                        "position": {
                                                            "x": 38000,
                                                            "y": 900
                                                        },
                                                        "data": {
                                                            "label": "Set_Purchase_Policy",
                                                            "sourceRight": true,
                                                            "sourceLeft": true
                                                        },
                                                        "parentId": "set-market-policies",
                                                        "children": [
                                                            {
                                                                "id": "set-purchase-policy-and",
                                                                "type": "operator",
                                                                "position": {
                                                                    "x": 38100,
                                                                    "y": 1125
                                                                },
                                                                "data": {
                                                                    "label": "AND"
                                                                },
                                                                "parentId": "set-purchase-policy",
                                                                "children": [
                                                                    {
                                                                        "id": "set-payment-system",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 37500,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Set_Payment_System",
                                                                            "right": true
                                                                        },
                                                                        "parentId": "set-purchase-policy-and",
                                                                        "children": null
                                                                    },
                                                                    {
                                                                        "id": "define-currency",
                                                                        "type": "gamification",
                                                                        "position": {
                                                                            "x": 38500,
                                                                            "y": 1350
                                                                        },
                                                                        "data": {
                                                                            "label": "Define_Currency",
                                                                            "left": true,
                                                                            "bottom": true
                                                                        },
                                                                        "parentId": "set-purchase-policy-and",
                                                                        "children": [
                                                                            {
                                                                                "id": "define-virtual-currency",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 38000,
                                                                                    "y": 1650
                                                                                },
                                                                                "data": {
                                                                                    "label": "Define_Virtual_Currency",
                                                                                    "sourceTop": true,
                                                                                    "top": true,
                                                                                    "bottom": true,
                                                                                    "right": true
                                                                                },
                                                                                "parentId": "define-currency",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "define-virtual-currency-and",
                                                                                        "type": "operator",
                                                                                        "position": {
                                                                                            "x": 38100,
                                                                                            "y": 1850
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "AND"
                                                                                        },
                                                                                        "parentId": "define-virtual-currency",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "define-exchange-money-currency",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": 37750,
                                                                                                    "y": 1950
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Define_Exchange_Money_Currency",
                                                                                                    "sourceTop": true,
                                                                                                    "top": true
                                                                                                },
                                                                                                "parentId": "define-virtual-currency-and",
                                                                                                "children": null
                                                                                            },
                                                                                            {
                                                                                                "id": "define-exchange-currency-rewards",
                                                                                                "type": "gamification",
                                                                                                "position": {
                                                                                                    "x": 38250,
                                                                                                    "y": 1950
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "Define_Exchange_Currency_Rewards",
                                                                                                    "sourceTop": true,
                                                                                                    "top": true
                                                                                                },
                                                                                                "parentId": "define-virtual-currency-and",
                                                                                                "children": null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "id": "by-money",
                                                                                "type": "gamification",
                                                                                "position": {
                                                                                    "x": 39000,
                                                                                    "y": 1650
                                                                                },
                                                                                "data": {
                                                                                    "label": "By_Money",
                                                                                    "sourceTop": true,
                                                                                    "sourceLeft": true,
                                                                                    "sourceRight": true,
                                                                                    "top": true,
                                                                                    "bottom": true,
                                                                                    "right": true,
                                                                                    "left": true
                                                                                },
                                                                                "parentId": "define-currency",
                                                                                "children": [
                                                                                    {
                                                                                        "id": "define-virtual-currency",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 38000,
                                                                                            "y": 1650
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Define_Virtual_Currency",
                                                                                            "sourceTop": true,
                                                                                            "top": true,
                                                                                            "bottom": true,
                                                                                            "right": true
                                                                                        },
                                                                                        "parentId": "by-money",
                                                                                        "children": [
                                                                                            {
                                                                                                "id": "define-virtual-currency-and",
                                                                                                "type": "operator",
                                                                                                "position": {
                                                                                                    "x": 38100,
                                                                                                    "y": 1850
                                                                                                },
                                                                                                "data": {
                                                                                                    "label": "AND"
                                                                                                },
                                                                                                "parentId": "define-virtual-currency",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "id": "define-exchange-money-currency",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": 37750,
                                                                                                            "y": 1950
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Define_Exchange_Money_Currency",
                                                                                                            "sourceTop": true,
                                                                                                            "top": true
                                                                                                        },
                                                                                                        "parentId": "define-virtual-currency-and",
                                                                                                        "children": null
                                                                                                    },
                                                                                                    {
                                                                                                        "id": "define-exchange-currency-rewards",
                                                                                                        "type": "gamification",
                                                                                                        "position": {
                                                                                                            "x": 38250,
                                                                                                            "y": 1950
                                                                                                        },
                                                                                                        "data": {
                                                                                                            "label": "Define_Exchange_Currency_Rewards",
                                                                                                            "sourceTop": true,
                                                                                                            "top": true
                                                                                                        },
                                                                                                        "parentId": "define-virtual-currency-and",
                                                                                                        "children": null
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "id": "define-exchange-money-rewards",
                                                                                        "type": "gamification",
                                                                                        "position": {
                                                                                            "x": 39000,
                                                                                            "y": 1950
                                                                                        },
                                                                                        "data": {
                                                                                            "label": "Define_Exchange_Money_Rewards",
                                                                                            "sourceTop": true,
                                                                                            "top": true
                                                                                        },
                                                                                        "parentId": "by-money",
                                                                                        "children": null
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "set-supporting-systems",
                        "type": "gamification",
                        "position": {
                            "x": 38500,
                            "y": 150
                        },
                        "data": {
                            "label": "Set_Supporting_Systems"
                        },
                        "bottom": true,
                        "right": true,
                        "draggable": false,
                        "parentId": "design-gamification-and",
                        "children": [
                            {
                                "id": "set-monitoring-system",
                                "type": "gamification",
                                "position": {
                                    "x": 38100,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Monitoring_System",
                                    "sourceRight": true,
                                    "sourceLeft": true
                                },
                                "parentId": "set-supporting-systems",
                                "children": null
                            },
                            {
                                "id": "set-analyzing-system",
                                "type": "gamification",
                                "position": {
                                    "x": 38500,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Analyzing_System",
                                    "sourceRight": true,
                                    "sourceLeft": true
                                },
                                "parentId": "set-supporting-systems",
                                "children": null
                            },
                            {
                                "id": "set-adaptation-system",
                                "type": "gamification",
                                "position": {
                                    "x": 38900,
                                    "y": 450
                                },
                                "data": {
                                    "label": "Set_Adaptation_System",
                                    "sourceRight": true,
                                    "sourceLeft": true
                                },
                                "parentId": "set-supporting-systems",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

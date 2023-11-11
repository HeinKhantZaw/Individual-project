export const PhaseTwoTreeDS = [
    {
        "id": "sufficient-acceptance",
        "type": "oval",
        "position": {
            "x": 3800,
            "y": -200
        },
        "data": {
            "isHidden": false,
            "label": "Sufficient_Acceptance",
            "top": "no"
        },
        "draggable": false,
        "children": [
            {
                "id": "improve-behavioral-intention",
                "type": "oval",
                "position": {
                    "x": 3075,
                    "y": 200
                },
                "data": {
                    "isHidden": false,
                    "label": "Improve_Behavioral_Intention"
                },
                "draggable": false,
                "parentId": "sufficient-acceptance",
                "children": [
                    {
                        "id": "improve-performance-expectancy",
                        "type": "oval",
                        "position": {
                            "x": -1650,
                            "y": 500
                        },
                        "parentId": "improve-behavioral-intention",
                        "data": {
                            "isHidden": false,
                            "label": "Improve_Performance_Expectancy"
                        },
                        "draggable": false,
                        "conditions": "C7 OR C6 OR C22 OR C30 OR C32 OR C34",
                        "children": [
                            {
                                "id": "improve-perceived-usefulness",
                                "type": "oval",
                                "position": {
                                    "x": -3000,
                                    "y": 750
                                },
                                "parentId": "improve-performance-expectancy",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Usefulness"
                                },
                                "draggable": false,
                                "conditions": "C13",
                                "children": [
                                    {
                                        "id": "improve-perceived-speed",
                                        "type": "oval",
                                        "position": {
                                            "x": -3500,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-usefulness",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Speed",
                                            "width": 280
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-performance-quality",
                                        "type": "oval",
                                        "position": {
                                            "x": -3200,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-usefulness",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Performance_Quality",
                                            "width": 290
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-productivity",
                                        "type": "oval",
                                        "position": {
                                            "x": -2870,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-usefulness",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Productivity",
                                            "width": 260
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-effectiveness",
                                        "type": "oval",
                                        "position": {
                                            "x": -2600,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-usefulness",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Effectiveness",
                                            "width": 340
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-system-perception-via-IT-2",
                                        "type": "oval",
                                        "position": {
                                            "x": -3200,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-usefulness",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Perception_via_IT",
                                            "width": 450,
                                            "height": 100,
                                            "type": "tactic",
                                            "num": "[2]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "improve-perceived-relative-advantage",
                                "type": "oval",
                                "position": {
                                    "x": -1700,
                                    "y": 750
                                },
                                "parentId": "improve-performance-expectancy",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Relative_Advantage_VS_Prev_Subj",
                                    "width": 350,
                                    "height": 90
                                },
                                "draggable": false,
                                "conditions": "C12",
                                "children": [
                                    {
                                        "id": "improve-perceived-speed-vs",
                                        "type": "oval",
                                        "position": {
                                            "x": -2200,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-relative-advantage",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Speed_VS_Prev_Subj",
                                            "width": 280
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-performance-quality-vs",
                                        "type": "oval",
                                        "position": {
                                            "x": -1900,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-relative-advantage",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Performance_Quality_VS_Prev_Subj",
                                            "width": 350
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-productivity-vs",
                                        "type": "oval",
                                        "position": {
                                            "x": -1500,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-relative-advantage",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Productivity_VS_Prev_Subj",
                                            "width": 290
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-perceived-effectiveness-vs",
                                        "type": "oval",
                                        "position": {
                                            "x": -1200,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-relative-advantage",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Effectiveness_VS_Prev_Subj",
                                            "width": 340
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-system-advantage-perception-vs-competitor-systems-via-it",
                                        "type": "oval",
                                        "position": {
                                            "x": -1500,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-relative-advantage",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Advantage_Perception_VS_Competitor_Systems_via_IT",
                                            "width": 450,
                                            "height": 100,
                                            "type": "tactic",
                                            "num": "[1]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "increase-outcome-expectations",
                                "type": "oval",
                                "position": {
                                    "x": 250,
                                    "y": 750
                                },
                                "parentId": "improve-performance-expectancy",
                                "data": {
                                    "isHidden": false,
                                    "label": "Increase_Outcome_Expectations"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "save-time-for-interesting-activities",
                                        "type": "oval",
                                        "position": {
                                            "x": -500,
                                            "y": 1000
                                        },
                                        "parentId": "increase-outcome-expectations",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Save_Time_for_Interesting_Activities",
                                            "width": 270
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "increase-chances-for-improvements",
                                        "type": "oval",
                                        "position": {
                                            "x": 0,
                                            "y": 1000
                                        },
                                        "parentId": "increase-outcome-expectations",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Increase_Chances_for_Improvements",
                                            "width": 290
                                        },
                                        "draggable": false,
                                        "children": [
                                            {
                                                "id": "increase-chances-for-improving-social-status",
                                                "type": "oval",
                                                "position": {
                                                    "x": -300,
                                                    "y": 1250
                                                },
                                                "parentId": "increase-chances-for-improvements",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Increase_Chances_for_Improving_Social_Status",
                                                    "width": 340,
                                                    "sourceLeft": true
                                                },
                                                "draggable": false,
                                                "conditions": "C33 OR C35",
                                                "children": [
                                                    {
                                                        "id": "support-achievement-4",
                                                        "type": "oval",
                                                        "position": {
                                                            "x": 0,
                                                            "y": 1500
                                                        },
                                                        "parentId": "increase-chances-for-improving-social-status",
                                                        "data": {
                                                            "isHidden": false,
                                                            "label": "Support_Achievement",
                                                            "type": "tactic",
                                                            "num": "[4]",
                                                            "left": true,
                                                            "right": true,
                                                            "bottom": true,
                                                            "top": "no"
                                                        },
                                                        "draggable": false,
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "improve-perceived-status",
                                                        "type": "oval",
                                                        "position": {
                                                            "x": 0,
                                                            "y": 1700
                                                        },
                                                        "parentId": "increase-chances-for-improving-social-status",
                                                        "data": {
                                                            "isHidden": false,
                                                            "label": "Improve_Perceived_Status",
                                                            "type": "tactic",
                                                            "num": "[4]",
                                                            "left": true,
                                                            "right": true,
                                                            "top": "no"
                                                        },
                                                        "draggable": false,
                                                        "children": null
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "increase-chances-for-a-promotion",
                                                "type": "oval",
                                                "position": {
                                                    "x": 300,
                                                    "y": 1250
                                                },
                                                "parentId": "increase-chances-for-improvements",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Increase_Chances_for_a_Promotion",
                                                    "width": 250,
                                                    "sourceRight": true
                                                },
                                                "draggable": false,
                                                "conditions": "C14",
                                                "children": [
                                                    {
                                                        "id": "support-achievement-4",
                                                        "type": "oval",
                                                        "position": {
                                                            "x": 0,
                                                            "y": 1500
                                                        },
                                                        "parentId": "increase-chances-for-a-promotion",
                                                        "data": {
                                                            "isHidden": false,
                                                            "label": "Support_Achievement",
                                                            "type": "tactic",
                                                            "num": "[4]",
                                                            "left": true,
                                                            "right": true,
                                                            "bottom": true,
                                                            "top": "no"
                                                        },
                                                        "draggable": false,
                                                        "children": null
                                                    },
                                                    {
                                                        "id": "improve-perceived-status",
                                                        "type": "oval",
                                                        "position": {
                                                            "x": 0,
                                                            "y": 1700
                                                        },
                                                        "parentId": "increase-chances-for-a-promotion",
                                                        "data": {
                                                            "isHidden": false,
                                                            "label": "Improve_Perceived_Status",
                                                            "type": "tactic",
                                                            "num": "[4]",
                                                            "left": true,
                                                            "right": true,
                                                            "top": "no"
                                                        },
                                                        "draggable": false,
                                                        "children": null
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "improve-skills",
                                        "type": "oval",
                                        "position": {
                                            "x": 500,
                                            "y": 1000
                                        },
                                        "parentId": "increase-outcome-expectations",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Skills",
                                            "width": 300
                                        },
                                        "draggable": false,
                                        "conditions": "NOT C20",
                                        "children": [
                                            {
                                                "id": "support-skill-improvement-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 700,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-skills",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Skill_Improvement",
                                                    "type": "tactic",
                                                    "num": "[3]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-system-awareness-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 1200,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-skills",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Awareness",
                                                    "type": "tactic",
                                                    "num": "[2]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "obtain-additional-income",
                                        "type": "oval",
                                        "position": {
                                            "x": 1000,
                                            "y": 1000
                                        },
                                        "parentId": "increase-outcome-expectations",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Obtain_Additional_Income"
                                        },
                                        "draggable": false,
                                        "conditions": "NOT C20",
                                        "children": [
                                            {
                                                "id": "support-achievement-4",
                                                "type": "oval",
                                                "position": {
                                                    "x": 0,
                                                    "y": 1500
                                                },
                                                "parentId": "obtain-additional-income",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Achievement",
                                                    "type": "tactic",
                                                    "num": "[4]",
                                                    "left": true,
                                                    "right": true,
                                                    "bottom": true,
                                                    "top": "no"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "support-skill-improvement-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 700,
                                                    "y": 1500
                                                },
                                                "parentId": "obtain-additional-income",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Skill_Improvement",
                                                    "type": "tactic",
                                                    "num": "[3]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-system-awareness-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 1200,
                                                    "y": 1500
                                                },
                                                "parentId": "obtain-additional-income",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Awareness",
                                                    "type": "tactic",
                                                    "num": "[2]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "reduce-effort-expectancy",
                        "type": "oval",
                        "position": {
                            "x": 3075,
                            "y": 500
                        },
                        "parentId": "improve-behavioral-intention",
                        "data": {
                            "isHidden": false,
                            "label": "Reduce_Effort_Expectancy"
                        },
                        "draggable": false,
                        "conditions": "(C3 OR C8 OR C9 OR C20 OR C24 OR C25 OR C26 OR C29) AND (NOT C28)",
                        "children": [
                            {
                                "id": "improve-perceived-ease-of-use",
                                "type": "oval",
                                "position": {
                                    "x": 2250,
                                    "y": 750
                                },
                                "parentId": "reduce-effort-expectancy",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Ease_of_Use",
                                    "width": 250
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "improve-perceived-clearness",
                                        "type": "oval",
                                        "position": {
                                            "x": 1700,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Clearness",
                                            "width": 250
                                        },
                                        "draggable": false,
                                        "conditions": "C24",
                                        "children": [
                                            {
                                                "id": "improve-system-perception-via-it-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 2200,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-clearness",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Perception_via_IT",
                                                    "type": "tactic",
                                                    "num": "[3]",
                                                    "bottom": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-clearness",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "improve-perceived-understandability",
                                        "type": "oval",
                                        "position": {
                                            "x": 2000,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Understandability",
                                            "width": 320
                                        },
                                        "draggable": false,
                                        "conditions": "C24",
                                        "children": [
                                            {
                                                "id": "improve-system-perception-via-it-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 2200,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-understandability",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Perception_via_IT",
                                                    "type": "tactic",
                                                    "num": "[3]",
                                                    "bottom": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-understandability",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "improve-perceived-usability",
                                        "type": "oval",
                                        "position": {
                                            "x": 2400,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Usability",
                                            "width": 260
                                        },
                                        "draggable": false,
                                        "children": [
                                            {
                                                "id": "improve-system-perception-via-it-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 2200,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-usability",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Perception_via_IT",
                                                    "type": "tactic",
                                                    "num": "[3]",
                                                    "bottom": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-usability",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "improve-perceived-easy-learning",
                                        "type": "oval",
                                        "position": {
                                            "x": 2700,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Perceived_Easy_Learning",
                                            "width": 280
                                        },
                                        "draggable": false,
                                        "children": [
                                            {
                                                "id": "improve-system-perception-via-it-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 2200,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-easy-learning",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Perception_via_IT",
                                                    "type": "tactic",
                                                    "num": "[3]",
                                                    "bottom": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-perceived-easy-learning",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "improve-ease-of-use",
                                "type": "oval",
                                "position": {
                                    "x": 3900,
                                    "y": 750
                                },
                                "parentId": "reduce-effort-expectancy",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Ease_of_Use"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "improve-clearness",
                                        "type": "oval",
                                        "position": {
                                            "x": 3500,
                                            "y": 1000
                                        },
                                        "parentId": "improve-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Clearness"
                                        },
                                        "draggable": false,
                                        "conditions": "C24",
                                        "children": [
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-clearness",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    },
                                    {
                                        "id": "improve-understandability",
                                        "type": "oval",
                                        "position": {
                                            "x": 3800,
                                            "y": 1000
                                        },
                                        "parentId": "improve-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Understandability"
                                        },
                                        "draggable": false,
                                        "conditions": "C24",
                                        "children": null
                                    },
                                    {
                                        "id": "improve-usability",
                                        "type": "oval",
                                        "position": {
                                            "x": 4100,
                                            "y": 1000
                                        },
                                        "parentId": "improve-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Usability"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-learning",
                                        "type": "oval",
                                        "position": {
                                            "x": 4400,
                                            "y": 1000
                                        },
                                        "parentId": "improve-ease-of-use",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Learning"
                                        },
                                        "draggable": false,
                                        "conditions": "NOT C20",
                                        "children": [
                                            {
                                                "id": "improve-system-awareness-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 4300,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-learning",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Awareness",
                                                    "type": "tactic",
                                                    "num": "[3]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "support-skill-improvement-4",
                                                "type": "oval",
                                                "position": {
                                                    "x": 4600,
                                                    "y": 1500
                                                },
                                                "parentId": "improve-learning",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Skill_Improvement",
                                                    "type": "tactic",
                                                    "num": "[4]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "increase-social-influence",
                        "type": "oval",
                        "position": {
                            "x": 5700,
                            "y": 500
                        },
                        "parentId": "improve-behavioral-intention",
                        "data": {
                            "isHidden": false,
                            "label": "Increase_Social_Influence",
                            "sourceLeft": true,
                            "sourceRight": true
                        },
                        "draggable": false,
                        "conditions": "C3 OR C10 OR C23 OR C30 OR C32",
                        "children": [
                            {
                                "id": "improve-subjective-norm",
                                "type": "oval",
                                "position": {
                                    "x": 5200,
                                    "y": 750
                                },
                                "parentId": "increase-social-influence",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Subjective_Norm"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "increase-influence-of-important-people",
                                        "type": "oval",
                                        "position": {
                                            "x": 5050,
                                            "y": 1000
                                        },
                                        "parentId": "improve-subjective-norm",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Increase_Influence_of_Important_People",
                                            "width": 300
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "maximize-impact-of-influencer",
                                        "type": "oval",
                                        "position": {
                                            "x": 5400,
                                            "y": 1000
                                        },
                                        "parentId": "improve-subjective-norm",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Maximize_Impact_of_Influencer"
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "improve-social-factors",
                                "type": "oval",
                                "position": {
                                    "x": 6150,
                                    "y": 750
                                },
                                "parentId": "increase-social-influence",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Social_Factors"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "show-many-people-embrace-the-subject",
                                        "type": "oval",
                                        "position": {
                                            "x": 5750,
                                            "y": 1000
                                        },
                                        "parentId": "improve-social-factors",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Show_Many_People_Embrace_the_Subject",
                                            "width": 300
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "show-embracing-the-subject-is-socially-pushed",
                                        "type": "oval",
                                        "position": {
                                            "x": 6100,
                                            "y": 1000
                                        },
                                        "parentId": "improve-social-factors",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Show_Embracing_the_Subject_is_Socially_Pushed",
                                            "width": 350
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "show-embracing-the-subject-is-socially-supported",
                                        "type": "oval",
                                        "position": {
                                            "x": 6500,
                                            "y": 1000
                                        },
                                        "parentId": "improve-social-factors",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Show_Embracing_the_Subject_is_Socially_Supported",
                                            "width": 350,
                                            "sourceLeft": true
                                        },
                                        "draggable": false,
                                        "children": [
                                            {
                                                "id": "support-achievement-5",
                                                "type": "oval",
                                                "position": {
                                                    "x": 6700,
                                                    "y": 1500
                                                },
                                                "parentId": "show-embracing-the-subject-is-socially-supported",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Achievement",
                                                    "type": "tactic",
                                                    "num": "[5]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "support-skill-improvement-5",
                                                "type": "oval",
                                                "position": {
                                                    "x": 8000,
                                                    "y": 1500
                                                },
                                                "parentId": "show-embracing-the-subject-is-socially-supported",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Support_Skill_Improvement",
                                                    "type": "tactic",
                                                    "num": "[5]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-minor-assistance-2",
                                                "type": "oval",
                                                "position": {
                                                    "x": 3500,
                                                    "y": 1500
                                                },
                                                "parentId": "show-embracing-the-subject-is-socially-supported",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_Minor_Assistance",
                                                    "type": "tactic",
                                                    "num": "[2]",
                                                    "left": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-system-awareness-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 4300,
                                                    "y": 1500
                                                },
                                                "parentId": "show-embracing-the-subject-is-socially-supported",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Awareness",
                                                    "type": "tactic",
                                                    "num": "[3]"
                                                },
                                                "draggable": false,
                                                "children": null
                                            },
                                            {
                                                "id": "improve-system-perception-via-it-3",
                                                "type": "oval",
                                                "position": {
                                                    "x": 2200,
                                                    "y": 1500
                                                },
                                                "parentId": "show-embracing-the-subject-is-socially-supported",
                                                "data": {
                                                    "isHidden": false,
                                                    "label": "Improve_System_Perception_via_IT",
                                                    "type": "tactic",
                                                    "num": "[3]",
                                                    "bottom": true
                                                },
                                                "draggable": false,
                                                "children": null
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "support-social-behavior",
                                "type": "oval",
                                "position": {
                                    "x": 4900,
                                    "y": 1500
                                },
                                "parentId": "increase-social-influence",
                                "data": {
                                    "isHidden": false,
                                    "label": "Support_Social_Behavior",
                                    "type": "tactic",
                                    "num": "[5]"
                                },
                                "draggable": false,
                                "children": null
                            },
                            {
                                "id": "promote-collaboration-1",
                                "type": "oval",
                                "position": {
                                    "x": 6350,
                                    "y": 1500
                                },
                                "parentId": "increase-social-influence",
                                "data": {
                                    "isHidden": false,
                                    "label": "Promote_Collaboration",
                                    "type": "tactic",
                                    "num": "[1]"
                                },
                                "draggable": false,
                                "children": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "create-facilitating-conditions",
                "type": "oval",
                "position": {
                    "x": 8500,
                    "y": 200
                },
                "parentId": "sufficient-acceptance",
                "data": {
                    "isHidden": false,
                    "label": "Create_Facilitating_Conditions"
                },
                "draggable": false,
                "conditions": "(C11 OR C24 OR C25 OR C26 OR C29) AND (NOT C28)",
                "children": [
                    {
                        "id": "improve-perceived-behavioral-control",
                        "type": "oval",
                        "position": {
                            "x": 7700,
                            "y": 500
                        },
                        "parentId": "create-facilitating-conditions",
                        "data": {
                            "isHidden": false,
                            "label": "Improve_Perceived_Behavioral_Control"
                        },
                        "draggable": false,
                        "children": [
                            {
                                "id": "improve-perceived-adequacy-on-personal-resources-needed",
                                "type": "oval",
                                "position": {
                                    "x": 7200,
                                    "y": 750
                                },
                                "parentId": "improve-perceived-behavioral-control",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Adequacy_on_Personal_Resources_Needed",
                                    "width": 400,
                                    "height": 100
                                },
                                "draggable": false,
                                "conditions": "C24",
                                "children": [
                                    {
                                        "id": "improve-system-perception-via-it-4",
                                        "type": "oval",
                                        "position": {
                                            "x": 8500,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-adequacy-on-personal-resources-needed",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Perception_via_IT",
                                            "type": "tactic",
                                            "num": "[4]",
                                            "right": true,
                                            "bottom": true
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "improve-perceived-adequacy-on-personal-knowledge-needed",
                                "type": "oval",
                                "position": {
                                    "x": 7700,
                                    "y": 750
                                },
                                "parentId": "improve-perceived-behavioral-control",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Adequacy_on_Personal_Knowledge_Needed",
                                    "width": 400,
                                    "height": 100
                                },
                                "draggable": false,
                                "conditions": "C24",
                                "children": [
                                    {
                                        "id": "improve-system-awareness-4",
                                        "type": "oval",
                                        "position": {
                                            "x": 7500,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-adequacy-on-personal-knowledge-needed",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Awareness",
                                            "type": "tactic",
                                            "num": "[4]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "support-skill-improvement-5",
                                        "type": "oval",
                                        "position": {
                                            "x": 8000,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-adequacy-on-personal-knowledge-needed",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Support_Skill_Improvement",
                                            "type": "tactic",
                                            "num": "[5]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-system-perception-via-it-4",
                                        "type": "oval",
                                        "position": {
                                            "x": 8500,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-adequacy-on-personal-knowledge-needed",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Perception_via_IT",
                                            "type": "tactic",
                                            "num": "[4]",
                                            "right": true,
                                            "bottom": true
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "improve-perceived-compatibility",
                                "type": "oval",
                                "position": {
                                    "x": 8200,
                                    "y": 770
                                },
                                "parentId": "improve-perceived-behavioral-control",
                                "data": {
                                    "isHidden": false,
                                    "label": "Improve_Perceived_Compatibility"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "with-systems-involved",
                                        "type": "oval",
                                        "position": {
                                            "x": 8000,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-compatibility",
                                        "data": {
                                            "isHidden": false,
                                            "label": "With_Systems_Involved"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "with-behaviors-involved",
                                        "type": "oval",
                                        "position": {
                                            "x": 8250,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-compatibility",
                                        "data": {
                                            "isHidden": false,
                                            "label": "With_Behaviors_Involved"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "with-personal-commitments",
                                        "type": "oval",
                                        "position": {
                                            "x": 8500,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-compatibility",
                                        "data": {
                                            "isHidden": false,
                                            "label": "With_Personal_Commitments"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "with-personal-style",
                                        "type": "oval",
                                        "position": {
                                            "x": 8800,
                                            "y": 1000
                                        },
                                        "parentId": "improve-perceived-compatibility",
                                        "data": {
                                            "isHidden": false,
                                            "label": "With_Personal_Style"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-system-perception-via-it-4",
                                        "type": "oval",
                                        "position": {
                                            "x": 8500,
                                            "y": 1500
                                        },
                                        "parentId": "improve-perceived-compatibility",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Perception_via_IT",
                                            "type": "tactic",
                                            "num": "[4]",
                                            "right": true,
                                            "bottom": true
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "increase-assistance",
                        "type": "oval",
                        "position": {
                            "x": 9300,
                            "y": 500
                        },
                        "parentId": "create-facilitating-conditions",
                        "data": {
                            "isHidden": false,
                            "label": "Increase_Assistance"
                        },
                        "draggable": false,
                        "conditions": "C24",
                        "children": [
                            {
                                "id": "charge-a-person-for-assistance",
                                "type": "oval",
                                "position": {
                                    "x": 9000,
                                    "y": 770
                                },
                                "parentId": "increase-assistance",
                                "data": {
                                    "isHidden": false,
                                    "label": "Charge_a_Person_for_Assistance"
                                },
                                "draggable": false,
                                "children": null
                            },
                            {
                                "id": "create-assistance-group",
                                "type": "oval",
                                "position": {
                                    "x": 9300,
                                    "y": 770
                                },
                                "parentId": "increase-assistance",
                                "data": {
                                    "isHidden": false,
                                    "label": "Create_Assistance_Group"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "promote-collaboration-2",
                                        "type": "oval",
                                        "position": {
                                            "x": 9300,
                                            "y": 1500
                                        },
                                        "parentId": "create-assistance-group",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Promote_Collaboration",
                                            "type": "tactic",
                                            "num": "[2]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    }
                                ]
                            },
                            {
                                "id": "create-assistance-systems",
                                "type": "oval",
                                "position": {
                                    "x": 9600,
                                    "y": 770
                                },
                                "parentId": "increase-assistance",
                                "data": {
                                    "isHidden": false,
                                    "label": "Create_Assistance_Systems"
                                },
                                "draggable": false,
                                "children": [
                                    {
                                        "id": "improve-system-perception-via-it-4",
                                        "type": "oval",
                                        "position": {
                                            "x": 8500,
                                            "y": 1500
                                        },
                                        "parentId": "create-assistance-systems",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Perception_via_IT",
                                            "type": "tactic",
                                            "num": "[4]",
                                            "right": true,
                                            "bottom": true
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-minor-assistance-3",
                                        "type": "oval",
                                        "position": {
                                            "x": 9800,
                                            "y": 1500
                                        },
                                        "parentId": "create-assistance-systems",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_Minor_Assistance",
                                            "type": "tactic",
                                            "num": "[3]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "improve-system-awareness-5",
                                        "type": "oval",
                                        "position": {
                                            "x": 10100,
                                            "y": 1500
                                        },
                                        "parentId": "create-assistance-systems",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Improve_System_Awareness",
                                            "type": "tactic",
                                            "num": "[5]"
                                        },
                                        "draggable": false,
                                        "children": null
                                    },
                                    {
                                        "id": "support-skill-improvement-6",
                                        "type": "oval",
                                        "position": {
                                            "x": 10400,
                                            "y": 1500
                                        },
                                        "parentId": "create-assistance-systems",
                                        "data": {
                                            "isHidden": false,
                                            "label": "Support_Skill_Improvement",
                                            "type": "tactic",
                                            "num": "[6]"
                                        },
                                        "draggable": false,
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
];

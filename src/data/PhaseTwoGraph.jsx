import {MarkerType} from "reactflow";

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

export const PhaseTwoGraphConditions = [

    {
        from: "sufficient-acceptance",
        to: "create-facilitating-conditions",
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

    // Left side
    {
        from: "improve-behavioral-intention",
        to: "improve-performance-expectancy",
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
        from: "improve-behavioral-intention",
        to: "reduce-effort-expectancy",
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
        from: "improve-behavioral-intention",
        to: "increase-social-influence",
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

    {
        from: "improve-performance-expectancy",
        to: "improve-perceived-relative-advantage",
        conditions: [
            {
                node: "C13",
                operator: "DEFAULT"
            }
        ]
    },
    {
        from: "improve-performance-expectancy",
        to: "improve-perceived-relative-advantage",
        conditions: [
            {
                node: "C12",
                operator: "DEFAULT"
            }
        ]
    },

    {
        from: "increase-outcome-expectations",
        to: "improve-skills",
        conditions: [
            {
                node: "C20",
                operator: "NOT"
            }
        ]
    },
    {
        from: "increase-outcome-expectations",
        to: "obtain-additional-income",
        conditions: [
            {
                node: "C20",
                operator: "NOT"
            }
        ]
    },

    {
        from: "increase-chances-for-improvements",
        to: "increase-chances-for-improving-social-status",
        conditions: [
            {
                node: "C33",
                operator: "OR"
            },
            {
                node: "C35",
                operator: "OR"
            }
        ]
    },
    {
        from: "increase-chances-for-improvements",
        to: "increase-chances-for-a-promotion",
        conditions: [
            {
                node: "C14",
                operator: "DEFAULT"
            }
        ]
    },

    {
        from: "improve-perceived-ease-of-use",
        to: "improve-perceived-clearness",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },
    {
        from: "improve-perceived-ease-of-use",
        to: "improve-perceived-understandability",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },

    {
        from: "improve-ease-of-use",
        to: "improve-clearness",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },
    {
        from: "improve-ease-of-use",
        to: "improve-understandability",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },
    {
        from: "improve-ease-of-use",
        to: "improve-learning",
        conditions: [
            {
                node: "C20",
                operator: "NOT"
            }
        ]
    },

    // Right side
    {
        from: "create-facilitating-conditions",
        to: "increase-assistance",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },

    {
        from: "improve-perceived-behavioral-control",
        to: "improve-perceived-adequacy-on-personal-resources-needed",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },
    {
        from: "improve-perceived-behavioral-control",
        to: "improve-perceived-adequacy-on-personal-knowledge-needed",
        conditions: [
            {
                node: "C24",
                operator: "DEFAULT"
            }
        ]
    },
]

import {markerConfig} from "../../components/Arrows/Marker.jsx";
import {arrowEdgeStyle} from "../../components/Arrows/ArrowEdge.jsx";

export const initialEdges = [
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
        data: {
            label: "(C11[Old, Employed.Yes, Senior])\n" +
                "OR\n" +
                "C24[Goal.Clarity.Low]\n" +
                "OR\n" +
                "C25[Task.Variety.High]\n" +
                "OR\n" +
                "C26[Task.RequiredSkills.AdvancedSkills]\n" +
                "OR\n" +
                "C29[Task.Specificity.High])\n" +
                "AND\n" +
                "NOT(C28[Task.Variety.Low, RequiredSkills.TrivialCommon]))"
        },
        markerStart: markerConfig,
    },
    {
        id: "e2-2",
        source: "improve-behavioral-intention",
        target: "improve-performance-expectancy",
        type: "dotted",
        data: {
            label: "(C7(Male]\n" +
                "OR\n" +
                "C6[Young, Employed.Yes)\n" +
                "OR\n" +
                "C22[Goal.Communication.Low, Task.Variety.Low)\n" +
                "OR\n" +
                "C32[SocialStructure.Hierarchical\n" +
                "OR\n" +
                "C34[GoodProduced.Public])"
        },
        markerStart: markerConfig,
    },
    {
        id: "e2-3",
        source: "improve-behavioral-intention",
        target: "reduce-effort-expectancy",
        data: {
            label: "(C3[Female] OR C8[Old, Employed.Yes] OR C9[Employed.Yes, Junior] OR C20[Goal.Communication.Low] OR\n" +
                "C24[Goal.Clarity.Low] OR C25[Task.Variety.High] OR C26[Task.RequiredSkills.AdvancedSkills] OR C29[Task.Specificity.High]) AND NOT(C28[Task Variety.Low, RequiredSkills.TrivialCommon])",
            hasLineBreak: 30
        },
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e2-3_1",
        source: "improve-behavioral-intention",
        target: "increase-social-influence",
        data: {
            label: "C3[Female]\n" +
                "OR\n" +
                "C10[Old, Employed.Yes, Junior, Mandatory.Yes)\n" +
                "OR\n" +
                "C23[Goal.Participation.Low]\n" +
                "OR\n" +
                "30[Task.Identification.Low]\n" +
                "OR\n" +
                "C32[SocialStructure.Hierarchical])"
        },
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
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))"
        },
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-6",
        source: "improve-performance-expectancy",
        target: "improve-perceived-usefulness",
        data: {
            label: "(C13[Precursor.Existing.No])"
        },
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-7",
        source: "improve-performance-expectancy",
        target: "improve-perceived-relative-advantage",
        data: {
            label: "(C12[Precursor.Existing.Yes])"
        },
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
        sourceHandle: "oval_source_bottom",
        markerStart: markerConfig,
    },
    {
        id: "e3-10_2",
        source: "increase-social-influence",
        target: "improve-social-factors",
        sourceHandle: "oval_source_bottom",
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-11",
        source: "improve-perceived-behavioral-control",
        target: "improve-perceived-adequacy-on-personal-resources-needed",
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))"
        },
        type: "dotted",
        markerStart: markerConfig,
    },
    {
        id: "e3-12",
        source: "improve-perceived-behavioral-control",
        target: "improve-perceived-adequacy-on-personal-knowledge-needed",
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))", hasLineBreak: 40
        },
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
        data: {
            label: "(NOT(C20[Goal.Communication.Low]))"
        },
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-28",
        source: "increase-outcome-expectations",
        target: "obtain-additional-income",
        data: {
            label: "(NOT(C20[Goal.Communication.Low]))", hasLineBreak: 40, hasMarginLeft: 240
        },
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-29",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-clearness",
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))", hasMarginLeft: -140
        },
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-30",
        source: "improve-perceived-ease-of-use",
        target: "improve-perceived-understandability",
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))", hasLineBreak: 40
        },
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
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))"
        },
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e4-34",
        source: "improve-ease-of-use",
        target: "improve-understandability",
        data: {
            label: "(MandFor(C24[Goal.Clarity.Low]))", hasLineBreak: 40
        },
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
        data: {
            label: "(NOT(C20[Goal.Communication.Low]))", hasLineBreak: -20, hasMarginLeft: 130
        },
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
        sourceHandle: "oval_source_bottom",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e4-36_12",
        source: "show-embracing-the-subject-is-socially-supported",
        target: "support-skill-improvement-5",
        sourceHandle: "oval_source_bottom",
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
        data: {
            label: "(MandFor(C33[SocialStructure.Hierarchy-Neutral] OR\n" +
                "C35[GoodProduced.Private]))", hasMarginLeft: -80
        },
        type: "dotted",
        markerStart: markerConfig
    },
    {
        id: "e5-42",
        source: "increase-chances-for-improvements",
        target: "increase-chances-for-a-promotion",
        type: "dotted",
        data: {
            label: "(C14[Employed.Yes])", hasLineBreak: 40, hasMarginLeft: 80
        },
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
        target: "improve-system-advantage-perception-vs-competitor-systems-via-it-1",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-44",
        source: "increase-chances-for-improving-social-status",
        target: "support-achievement-4",
        targetHandle: "oval_target_left",
        sourceHandle: "oval_source_bottom",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-45",
        source: "increase-chances-for-a-promotion",
        target: "support-achievement-4",
        targetHandle: "oval_target_right",
        sourceHandle: "oval_source_bottom",
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
        targetHandle: "oval_target_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-56",
        source: "improve-perceived-understandability",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_target_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-57",
        source: "improve-perceived-usability",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_target_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-58",
        source: "improve-perceived-easy-learning",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_target_left",
        type: "straight",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e6-59",
        source: "improve-clearness",
        target: "improve-minor-assistance-2",
        targetHandle: "oval_target_top",
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
        targetHandle: "oval_target_top",
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
        sourceHandle: "oval_source_bottom",
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
        target: "support-social-behavior-5",
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
        targetHandle: "oval_target_right",
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
        target: "improve-perceived-status-4",
        targetHandle: "oval_target_left",
        sourceHandle: "oval_source_left",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    },
    {
        id: "e7-71",
        source: "increase-chances-for-a-promotion",
        target: "improve-perceived-status-4",
        targetHandle: "oval_target_right",
        sourceHandle: "oval_source_right",
        type: "step",
        style: arrowEdgeStyle,
        markerStart: markerConfig
    }
];

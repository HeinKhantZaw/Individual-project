import React, {useEffect} from "react";
import ReactFlow, {Background, Controls, MarkerType, MiniMap, useEdgesState, useNodesState,} from "reactflow";
import "reactflow/dist/style.css";
import OperatorNode from "../../components/Shapes/OperatorNode.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import DottedEdge from "../../components/DottedEdge/index.jsx";
import {PhaseTwoTreeDS} from "../../data/PhaseTwoTreeDS.jsx";
import {updateNodes} from "../../redux/slices/phaseTwoSlice.jsx";
import {flattenNodes} from "../../utils/flattenNodes.jsx";
import {removeAndFlattenNodes} from "../../utils/removeAndFlattenNodes.jsx";


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
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    let idToBeRemoved = [];

    const dispatch = useDispatch();
    const userSelectedNodes = useSelector((state) => state.phaseOne.selectedNodes);
    const {nodeState} = useSelector((state) => state.phaseTwo);

    // for testing purpose
    // const userSelectedNodes = ['C7','C15','C2', 'C13', 'C14','C12','C16','C18','C28','C12','C31','C30','C26','C32','C34','C6','C9'];
    // const userSelectedNodes = ['C13','C3','C4','C14','C16','C21','C27','C33','C34','C5','C1','C2','C8','C9','C10','C28']

    const updateGraph = () => {
        const initialNodes = flattenNodes(PhaseTwoTreeDS);
        const visibleNodes = initialNodes.filter(node => {
            if (!node.conditions) return true;
            else {
                const replacedExpression = node.conditions.replace(/\b\w+\b/g, (match) => {
                    if (userSelectedNodes.includes(match)) {
                        return "true";
                    } else if (match === "NOT") {
                        return "!";
                    } else if (match === "OR") {
                        return "||";
                    } else if (match === "AND") {
                        return "&&";
                    } else {
                        return "false";
                    }
                });

                // (C3 OR C8 OR C9 OR C20 OR C24 OR C25 OR C26 OR C29) AND (NOT C28)
                // (true || false || true || false || false || false || false || false) && (!true)
                return eval(replacedExpression);
            }
        });
        const invisibleNodes = initialNodes.filter(node => !visibleNodes.includes(node));
        idToBeRemoved = invisibleNodes.map(item => item.id);

        return removeAndFlattenNodes(PhaseTwoTreeDS, idToBeRemoved);
    };

    useEffect(() => {
        dispatch(updateNodes(updateGraph()));
        dispatch(setCurrentPhase(2))
        dispatch(setNextPhaseEnabled(true))
    }, []);

    useEffect(() => {
        setNodes(nodeState);
    }, [nodeState]);

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
                minZoom={0.1}
            >
                <Controls/>
                <MiniMap pannable zoomable/>
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

import ReactFlow, {Background, Controls, MiniMap, useNodesState} from "reactflow";
import React, {useEffect} from "react";
import {setCurrentPhase, setNextPhaseEnabled, setPhase3Value} from "../../redux/slices/phaseStatusSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Heading from "arwes/lib/Heading/index.js";
import {hideTactic, setHiddenTactic, setPhase3aTacticNodes} from "../../redux/slices/phaseThreeSlice.js";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import {phase3Style} from "./style.jsx";

const nodeTypes = {oval: OvalNode};

export default function PhaseThreeA() {
    const {initialPhase3aTacticNodes, disabledTacticNodes} = useSelector((state) => state.phaseThree);
    const {currentPhase} = useSelector((state) => state.phaseStatus);
    const phaseTwoNodes = useSelector((state) => state.phaseTwo.nodeState);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialPhase3aTacticNodes);
    const dispatch = useDispatch();


    useEffect(() => {
        if(initialPhase3aTacticNodes.length === 0 || (currentPhase<3)){
            dispatch(setPhase3aTacticNodes(phaseTwoNodes));
            dispatch(setHiddenTactic(disabledTacticNodes));
        }
        dispatch(setCurrentPhase(3))
        dispatch(setPhase3Value("Phase C1"))
        dispatch(setNextPhaseEnabled(true))
    }, []);

    useEffect(() => {
        setNodes(initialPhase3aTacticNodes);
    }, [initialPhase3aTacticNodes]);

    const handleElementClick = (event, element) => {
        dispatch(hideTactic(element.id))
    }

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            <Heading node="h2" style={phase3Style.title} className={"!text-black dark:!text-cyan-400"}>
                The following tactics can refine the acceptance needs selected:
                <br/>
                <span>Deselect the tactics that are not applicable to your project.</span>
            </Heading>
            <ReactFlow
                nodes={nodes}
                deleteKeyCode={''}
                panOnScroll={true}
                zoomOnDoubleClick={false}
                fitView
                maxZoom={1.2}
                minZoom={0.6}
                nodeTypes={nodeTypes}
                onNodeClick={handleElementClick}
            >
                <Background variant="dots" gap={12} size={1}/>
            </ReactFlow>
        </div>
    );
}

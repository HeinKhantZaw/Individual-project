import ReactFlow, {Background, Controls, MiniMap, useNodesState} from "reactflow";
import React, {useEffect} from "react";
import {setCurrentPhase, setNextPhaseEnabled, setPhase3Value} from "../../redux/slices/phaseStatusSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import Heading from "arwes/lib/Heading/index.js";
import {hideTactic, setPhase3aTacticNodes} from "../../redux/slices/phaseThreeSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import {phase3Style} from "./style.jsx";

const nodeTypes = {oval: OvalNode};

export default function PhaseThreeA() {
    const {initialPhase3aTacticNodes} = useSelector((state) => state.phaseThree);
    const phaseTwoNodes = useSelector((state) => state.phaseTwo.nodeState);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialPhase3aTacticNodes);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setCurrentPhase(3))
        dispatch(setPhase3Value("Phase 3(a)"))
        if(initialPhase3aTacticNodes.length === 0) {
            dispatch(setPhase3aTacticNodes(phaseTwoNodes));
        }
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
            <Heading node="h2" style={phase3Style.title}>
                The following tactics can refine the acceptance needs selected:
                <br/>
                <span>which ones do you want to use?</span>
            </Heading>
            <ReactFlow
                nodes={nodes}
                deleteKeyCode={''}
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

import ReactFlow, {Background, Controls, MiniMap, useNodesState} from "reactflow";
import React, {useEffect} from "react";
import {setCurrentPhase, setNextPhaseEnabled, setPhase3Value} from "../../redux/slices/phaseStatusSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import Heading from "arwes/lib/Heading/index.js";
import {hideTactic, setInitialTacticNodes} from "../../redux/slices/phaseThreeSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";
import {phase3Style} from "./style.jsx";

const nodeTypes = {oval: OvalNode};

export default function PhaseThreeA() {
    const {initialTacticNodes} = useSelector((state) => state.phaseThree);
    const phaseTwoNodes = useSelector((state) => state.phaseTwo.nodeState);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialTacticNodes);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setCurrentPhase(3))
        dispatch(setPhase3Value("Phase 3(a)"))
        if(initialTacticNodes.length === 0) {
            dispatch(setInitialTacticNodes(phaseTwoNodes));
        }
        dispatch(setNextPhaseEnabled(true))
    }, []);

    useEffect(() => {
        setNodes(initialTacticNodes);
    }, [initialTacticNodes]);

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

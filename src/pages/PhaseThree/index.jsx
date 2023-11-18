import ReactFlow, {Background, Controls, MiniMap, useNodesState} from "reactflow";
import React, {useEffect} from "react";
import {setCurrentPhase, setNextPhaseEnabled} from "../../redux/slices/phaseStatusSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import Heading from "arwes/lib/Heading/index.js";
import {hideTactic, setInitialTacticNodes} from "../../redux/slices/phaseThreeSlice.jsx";
import OvalNode from "../../components/Shapes/OvalNode.jsx";

const nodeTypes = {oval: OvalNode};

export default function PhaseThree() {
    const {initialTacticNodes} = useSelector((state) => state.phaseThree);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const dispatch = useDispatch();
    const urlParam = new URLSearchParams(window.location.search);
    const phase = urlParam.get('p') || "a";
    const {nextPhaseEnabled, currentPhase} = useSelector((state) => state.phaseStatus);
    const phaseTwoNodes = useSelector((state) => state.phaseTwo.nodeState);
    const style = {
        title: {
            textAlign: "center",
            margin: "1rem",
            fontFamily: "Roboto, sans-serif",
        },
    }

    useEffect(() => {
        dispatch(setCurrentPhase(3))
        dispatch(setNextPhaseEnabled(true))
        dispatch(setInitialTacticNodes(phaseTwoNodes))
    }, []);

    useEffect(() => {
        setNodes(initialTacticNodes);
    }, [initialTacticNodes]);

    const handleElementClick = (event, element) => {
        dispatch(hideTactic(element.id))
    }

    return (
        <div style={{width: "100vw", height: "93vh"}}>
            {phase === "a" &&
                <Heading node="h2" style={style.title}>
                    The following tactics can refine the acceptance needs selected:
                    <br/>
                    <span>which ones do you want to use?</span>
                </Heading>
            }
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

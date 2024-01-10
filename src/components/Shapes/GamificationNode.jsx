import React, {useState} from "react";
import {Handle, NodeToolbar, Position} from "reactflow";
import Card from "../Card/index.jsx";
import {getGlossary} from "../../utils/getGlossary.jsx";
import {useSelector} from "react-redux";

const GamificationNode = ({data}) => {
    const nodeStyle = {
        width: data.width || 240,
        height: data.height || 80,
        borderRadius: "50%",
        padding: 2,
        backgroundColor: "#FEE499",
        outlineOffset: "10px",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const noTopHandle = data.top === "no";
    const [isVisible, setVisible] = useState(false);
    const {infoToggle} = useSelector((state) => state.phaseStatus);

    return (
        <div style={nodeStyle} onMouseEnter={() => infoToggle && setVisible(true)}
             onMouseLeave={() => infoToggle && setVisible(false)}>
            {data.isHidden &&
                <img src={"/assets/cross.png"} style={{position: "absolute"}} alt={"hidden"}/>
            }
            <NodeToolbar isVisible={isVisible} position={Position.Left}>
                <Card title={data.label} message={getGlossary(data.label)} width={data.width * 2 || 480}/>
            </NodeToolbar>
            {!noTopHandle && <Handle type="target" position={Position.Top} id={"gamification_target_top"} isConnectable={false}/>}
            {data.left && <Handle type="target" position={Position.Left} id={"gamification_target_left"} isConnectable={false}/>}
            {data.right && <Handle type="target" position={Position.Right} id={"gamification_target_right"} isConnectable={false}/>}
            {data.bottom &&
                <Handle type="target" position={Position.Bottom} id={"gamification_target_bottom"} isConnectable={false}/>}
            <div className={"block"}>
                <p className={"text-xs text-center font-bold"}>
                    {!data.titleDisable && <>
                        &lt;&lt;Gamification&gt;&gt;
                        <br/>
                    </>
                    }
                    {data.label}
                    <br/>
                    {data.num}
                </p>
            </div>
            <Handle type="source" position={Position.Bottom} id={"gamification_source_bottom"} className={"custom-handle"}
                    isConnectable={false}
            />
            {data.sourceLeft &&
                <Handle type="source" position={Position.Left} id={"gamification_source_left"} isConnectable={false}/>}
            {data.sourceRight &&
                <Handle type="source" position={Position.Right} id={"gamification_source_right"} isConnectable={false}/>}
            {data.sourceTop &&
                <Handle type="source" position={Position.Top} id={"gamification_source_top"} isConnectable={false}/>
            }
        </div>
    );
};

export default GamificationNode;

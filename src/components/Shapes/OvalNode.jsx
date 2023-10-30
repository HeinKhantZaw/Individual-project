import React from "react";
import {Handle, Position} from "reactflow";

const OvalNode = ({data}) => {
    const nodeStyle = {
        width: data.width || 240,
        height: data.height || 80,
        borderRadius: "50%",
        padding: 2,
        backgroundColor: data.type === "tactic" ? "#f1ae80" : "#8bc1f6",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const noTopHandle = data.top === "no";
    return (
        <div style={nodeStyle}>
            {!noTopHandle && <Handle type="target" position={Position.Top} id={"oval_top"}/>}
            {data.left && <Handle type="target" position={Position.Left} id={"oval_left"}/>}
            {data.right && <Handle type="target" position={Position.Right} id={"oval_right"}/>}
            {data.bottom && <Handle type="target" position={Position.Bottom} id={"oval_target_bottom"}/>}
            <div className={"block"}>
                <p className={"text-xs text-center font-bold"}>
                    &lt;&lt;{data.type === "tactic" ? "Tactic" : "Need"}&gt;&gt;
                    <br/>
                    {data.label}
                    <br/>
                    {data.num}
                </p>
            </div>
            <Handle type="source" position={Position.Bottom} id={"oval_bottom"} className={"custom-handle"} isConnectable={false}
            />
        </div>
    );
};

export default OvalNode;
